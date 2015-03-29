import Ember from 'ember';
import LeafFeatureGroupComponent from '../components/leaf-feature-group';

export default LeafFeatureGroupComponent.extend({
  drawPolyline: {},
  drawPolygon: {},
  drawCircle: {},
  drawRectangle: {},
  drawMarker: {},

  control: Ember.computed('drawnItems', function() {
    return new this.L.Control.Draw({
      position: "topleft",
      draw: {
        polyline: this.get('drawPolyline'),
        polygon: this.get('drawPolygon'),
        circle: this.get('drawCircle'),
        rectangle: this.get('drawRectangle'),
        marker: this.get('drawMarker')
      },
      edit: {
        featureGroup: this.get('layer')
      }
    });
  }),

  updateGeojson: function() {
    // update the geojson, but keep root crs
    var geojson = this.get('layer').toGeoJSON();
    geojson.crs = this.get('geojson.crs');
    this.set('geojson', geojson);
  },

  onDrawCreated: Ember.computed(function(){
    return function (e) {
      var layer = this.get('layer');
      layer.addLayer(e.layer);
      this.updateGeojson();
    }.bind(this);
  }),
  onDrawEdited: Ember.computed(function(){
    return function (/*e*/) {
      this.updateGeojson();
    }.bind(this);
  }),
  onDrawDeleted: Ember.computed(function(){
    return function (e) {
      var layer = this.get('layer');
      e.layers.eachLayer(function (elayer) {
        layer.removeLayer(elayer);
      });
      this.updateGeojson();
    }.bind(this);
  }),

  attach: function() {
    var self = this;
    return this._super().then(function() {
      return self.get('mapPromise');
    }).then(function(map) {
      map.addControl(self.get('control'));

      map.on('draw:created', self.get('onDrawCreated'));
      map.on('draw:edited', self.get('onDrawEdited'));
      map.on('draw:deleted', self.get('onDrawDeleted'));
    });
  },
  detach: function() {
    var self = this;
    return this._super().then(function() {
      return self.get('mapPromise');
    }).then(function(map) {
      map.removeControl(self.get('control'));

      map.off('draw:created', self.get('onDrawCreated'));
      map.off('draw:edited', self.get('onDrawEdited'));
      map.off('draw:deleted', self.get('onDrawDeleted'));
    });
  }
});
