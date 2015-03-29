import Ember from 'ember';

var L = window.L;

// from https://github.com/Leaflet/Leaflet/issues/1542
L.Map.mergeOptions({
  touchExtend: true
});

L.Map.TouchExtend = L.Handler.extend({
  initialize: function(map) {
    this._map = map;
    this._container = map._container;
    return this._pane = map._panes.overlayPane;
  },
  addHooks: function() {
    L.DomEvent.on(this._container, 'touchstart', this._onTouchStart, this);
    L.DomEvent.on(this._container, 'touchend', this._onTouchEnd, this);
    return L.DomEvent.on(this._container, 'touchmove', this._onTouchMove, this);
  },
  removeHooks: function() {
    L.DomEvent.off(this._container, 'touchstart', this._onTouchStart);
    L.DomEvent.off(this._container, 'touchend', this._onTouchEnd);
    return L.DomEvent.off(this._container, 'touchmove', this._onTouchMove);
  },
  _onTouchEvent: function(e, type) {
    var containerPoint, latlng, layerPoint, touch, container;
    if (!this._map._loaded) {
      return;
    }
    container = this._container;
    touch = e.touches[0];

    // http://stackoverflow.com/questions/6773481/how-to-get-the-mouseevent-coordinates-for-an-element-that-has-css3-transform
    var bbox = container.getBoundingClientRect();
    var x = touch.clientX - bbox.left - container.clientLeft + container.scrollLeft;
    var y = touch.clientY - bbox.top - container.clientTop + container.scrollTop;
    containerPoint = L.point(x, y);
    layerPoint = this._map.containerPointToLayerPoint(containerPoint);
    latlng = this._map.layerPointToLatLng(layerPoint);
    return this._map.fire(type, {
      latlng: latlng,
      layerPoint: layerPoint,
      containerPoint: containerPoint,
      originalEvent: e
    });
  },
  _onTouchStart: function(e) {
    return this._onTouchEvent(e, 'touchstart');
  },
  _onTouchEnd: function(e) {
    if (!this._map._loaded) {
      return;
    }
    return this._map.fire('touchend', {
      originalEvent: e
    });
  },
  _onTouchMove: function(e) {
    return this._onTouchEvent(e, 'touchmove');
  }
});

L.Map.addInitHook('addHandler', 'touchExtend', L.Map.TouchExtend);

L.latLngBounds.fromBBoxString = L.latLngBounds.fromBBoxString || function(bbox) {
  var east, north, south, west, _ref;
  _ref = bbox.split(',').map(parseFloat);
  west = _ref[0];
  south = _ref[1];
  east = _ref[2];
  north = _ref[3];
  return new L.LatLngBounds(new L.LatLng(south, west), new L.LatLng(north, east));
};

export default Ember.Component.extend({
  layerGroup: Ember.computed(function() {
    return this.get('map');
  }),

  allowInteraction: true,
  classNames: ['leaflet-map'],
  _mapElement: Ember.computed(function() {
    return document.createElement('div');
  }),

  crs: "", // "EPSG3857" or "Simple"

  mapMut: null,
  map: Ember.computed(function() {
    var allowInteraction = this.get('allowInteraction');
    var map = L.map(this.get('_mapElement'), {
      crs: L.CRS[Ember.String.capitalize(this.get('crs') || '')] || L.CRS.EPSG3857,
      zoomControl: false,
      attributionControl: false,
      maxZoom: 18,

      // interaction options
      dragging: allowInteraction,
      touchZoom: allowInteraction,
      doubleClickZoom: false,
      scrollWheelZoom: allowInteraction,
      boxZoom: allowInteraction,
      keyboard: allowInteraction
      // tap: allowInteraction
    });
    var self = this;
    map.on('popupclose', function(e) {
      self.sendAction('popupClose', e.popup);
    });
    this.set('mapMut', map);
    return map;
  }),

  actionPayload: null,

  mapEvents: [],
  mapEventsArray: Ember.computed('mapEvents', function() {
    var events = this.get('mapEvents');
    return Ember.typeOf(events) === 'string' ? events.w() : events;
  }).readOnly(),
  mapEventHandler: Ember.computed(function() {
    return function(event) {
      this.sendAction('map' + Ember.String.capitalize(event.type), this.get('actionPayload') || this, event);
    }.bind(this);
  }),

  allowInteractionDidChange: Ember.observer('allowInteraction', function() {
    var method = this.get('allowInteraction') ? 'enable' : 'disable';
    var map = this.get('map');
    map.dragging[method]();
    map.touchZoom[method]();
    // map.doubleClickZoom[method]();
    map.scrollWheelZoom[method]();
    map.boxZoom[method]();
    map.keyboard[method]();
    // map.tap[method]();
  }),
  render: function(buffer) {
    buffer._element.appendChild(this.get('_mapElement'));
    this._super(buffer);
  },
  didInsertElement: function() {
    var map = this.get('map');
    var eventHandler = this.get('mapEventHandler');

    this.get('mapEventsArray').forEach(function(eventName){
      map.on(eventName, eventHandler);
    });
  },
  willDestroyElement: function() {
    var map = this.get('map');
    var eventHandler = this.get('mapEventHandler');

    this.get('mapEventsArray').forEach(function(eventName){
      map.off(eventName, eventHandler);
    });
  }
});

