import LeafILayerLatLngComponent from '../components/leaf-ilayer-latlng';
import Ember from 'ember';

var DivIcon = window.L.DivIcon.extend({
  createIcon: function () {
    var div = this.options.element;
    div.className = 'leaflet-marker-icon';
    return div;
  }
});

var divIcon = function (options) {
  return new DivIcon(options);
};

export default LeafILayerLatLngComponent.extend({
  draggable: false,
  icon: null,
  opacity: 1,

  _contentElement: Ember.computed(function() {
    return document.createElement('div');
  }),
  render: function(buffer) {
    buffer._element = this.get('_contentElement');
    this._super(buffer);
  },

  options: Ember.computed('draggable', 'icon', 'opacity', function() {
    return this.getProperties('draggable', 'icon', 'opacity');
  }),

  // https://github.com/emberjs/ember.js/issues/10319
  _blockGiven: Ember.computed('template.blockParams', function(){
    return this.get("template.blockParams");
  }),

  marker: Ember.computed(function() {
    var self = this;
    var options = this.get('options');
    if (!this.get('icon')) {
      delete options.icon;
    }
    var marker = this.L.marker(this.get('latlng'), options);
    marker.on('dragend', function() {
      self.get('location').setProperties({
        lat: marker.getLatLng().lat,
        lng: marker.getLatLng().lng
      });
    });
    return marker;
  }),
  layer: Ember.computed.alias('marker'),

  insertIcon: function(){
    Ember.run.schedule('afterRender', this, function() {
      if (Ember.isEmpty(this.get('_contentElement').innerHTML)) {
        return; // nothing rendered in the template, so we leave
      }
      this.set('icon', divIcon({
        element: this.get('_contentElement')
      }));
    });
  }.on('didInsertElement'),

  latlngDidChange: Ember.observer('latlng', function() {
    this.get('marker').setLatLng(this.get('latlng'));
  }),
  iconDidChange: Ember.observer('icon', function() {
    this.get('marker').setIcon(this.get('icon'));
  }),
  opacityDidChange: Ember.observer('opacity', function() {
    this.get('marker').setOpacity(this.get('opacity'));
  }),
  draggableDidChange: Ember.observer('draggable', function() {
    this.get('marker')[this.get('draggable')?'enable':'disable']();
  })
});

