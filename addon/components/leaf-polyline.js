import Ember from 'ember';
import LeafPathComponent from '../components/leaf-path';
import Rect from '../utils/rect';

export default LeafPathComponent.extend({
  transform: null,

  latlngs: null,
  _latlngs: Ember.computed('transform', 'latlngs.@each.{lat,lng}', function() {
    var transform = this.get('transform');
    var latlngs = (this.get('latlngs') || []).map(function(ll){
      return Ember.getProperties(ll, 'lat', 'lng');
    });

    if (!!transform) {
      return latlngs.map(function(ll){
        var projected = Rect.vxm([ll.lng, ll.lat, 1], transform);
        return {lat: projected[1], lng: projected[0]};
      });
    }

    return latlngs;
  }),

  layer: Ember.computed(function() {
    return this.L.polyline(this.get('_latlngs'), this.get('style'));
  }),

  _latlngsDidChange: Ember.observer('_latlngs', function() {
    this.get('layer').setLatLngs(this.get('_latlngs'));
  })
});
