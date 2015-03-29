import Ember from 'ember';
import LeafILayerComponent from '../components/leaf-ilayer';

export default LeafILayerComponent.extend({
  startLat: null,
  startLng: null,
  startLatlng: Ember.computed('startLat', 'startLng', function(){
    var lat = this.get('startLat');
    var lng = this.get('startLng');
    if (lat && lng) {
      return this.L.latLng({lat: lat, lng: lng});
    }
    return null;
  }),
  startZoom: null,
  startGeojson: null,

  fitWorld: function() {
    var L = this.L;
    var center  = this.get('startLatlng');
    var zoom    = this.get('startZoom');
    var geojson = this.get('startGeojson');

    if ('string' === typeof center) {
      center = center.split(',').map(parseFloat);
    }

    this.get('mapPromise').then(function(map) {
      if (center != null && zoom != null) {
        map.setView(center, zoom);
      } else if (geojson) {
        map.fitBounds(L.geoJson(geojson).getBounds(), {maxZoom: 18});
      } else {
        map.fitWorld();
      }
    });
  },
  attach: function() {
    var self = this;
    return this._super().then(function(){
      self.fitWorld();
    });
  }
});
