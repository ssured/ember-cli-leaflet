import Ember from 'ember';
import geohash from '../utils/geohash';

export default Ember.Route.extend({
  model: function(params) {
    var bbox = geohash.decode_bbox(params.hash);

    return window.L.latLngBounds([
      {
        lat: bbox[0],
        lng: bbox[1]
      }, {
        lat: bbox[2],
        lng: bbox[3]
      }
    ]);
  },

  serialize: function(model) {
    var center = model.getCenter();
    return {
      hash: geohash.encode(center.lat, center.lng, 9)
    };
  }
});
