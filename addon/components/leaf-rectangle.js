import Ember from 'ember';
import LeafPathComponent from '../components/leaf-path';
import Rect from '../utils/rect';

export default LeafPathComponent.extend({
  geojson: null,

  south: 0,
  west: 0,
  southWest: Ember.computed('south', 'west', function() {
    return this.L.latLng(this.get('south'), this.get('west'));
  }),

  north: 0,
  east: 0,
  northEast: Ember.computed('north', 'east', function() {
    return this.L.latLng(this.get('north'), this.get('east'));
  }),

  bounds: Ember.computed('geojson', 'southWest', 'northEast', function() {
    var geojson = this.get('geojson');
    if (!!geojson) {
      return this.L.geoJson(geojson).getBounds();
    }
    return this.L.latLngBounds(this.get('southWest'), this.get('northEast'));
  }),

  transform: null,
  _bounds: Ember.computed('bounds', 'transform', function(){
    var transform = this.get('transform');
    var bounds = this.get('bounds');
    if (transform) {
      var sw = Rect.vxm([bounds.getWest(), bounds.getSouth(), 1], transform);
      var ne = Rect.vxm([bounds.getEast(), bounds.getNorth(), 1], transform);
      return this.L.latLngBounds([sw[1], sw[0]], [ne[1], ne[0]]);
    }
    return bounds;
  }),

  layer: Ember.computed(function() {
    return this.L.rectangle(this.get('_bounds'), this.get('style'));
  }),

  boundsDidChange: Ember.observer('_bounds', function() {
    var bounds = this.get('_bounds');
    if (bounds && bounds.isValid()){
      this.get('layer').setBounds(bounds);
    }
  })
});
