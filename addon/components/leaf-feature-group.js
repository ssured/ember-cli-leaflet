import Ember from 'ember';
import LayerGroupComponent from '../components/leaf-layer-group';
import Rect from '../utils/rect';

export default LayerGroupComponent.extend({
  geojson: false,
  transform: false,
  centerOnAdd: false,

  layer: Ember.computed(function() {
    var geojson = this.get('geojson');
    if (geojson) {
      var options = {
        style: this.get('style')
      };
      var transform = this.get('transform');
      if (transform) {
        options.coordsToLatLng = function(coords) {
          var projected = Rect.vxm([coords[0], coords[1], 1], transform);
          return {lat: projected[1], lng: projected[0]};
        };
      }
      return this.L.geoJson(geojson, options);
    } else {
      return new this.L.FeatureGroup();
    }
  }),

  attach: function() {
    var self = this;
    return this._super()
    .then(function(){ return self.get('mapPromise'); })
    .then(function(map){
      var layer = self.get('layer');
      if (self.get('centerOnAdd') && layer && 'function' === typeof layer.getBounds) {
        var bounds = layer.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, {reset: true});
        }
      }
    });
  }
});
