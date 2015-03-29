import Ember from 'ember';
import geohash from '../utils/geohash';

export default Ember.Route.extend({
  queryParams: {
    latlng: {replace: true},
    zoom: {replace: true}
  },
  actions: {
    mapClick: function(component, event) {
      var hash = geohash.encode(event.latlng.lat, event.latlng.lng, 9);
      this.transitionTo('position', hash);
      return false;
    },
    mapMoveend: function(component, event) {
      var map = event.target;
      var center = map.getCenter();
      this.controller.setProperties({
        latlng: [center.lat, center.lng].join(','),
        zoom:   map.getZoom()
      });
      return false;
    }
  }
});
