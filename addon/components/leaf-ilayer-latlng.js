import Ember from 'ember';
import LeafILayerComponent from '../components/leaf-ilayer';

var get = Ember.get;

export default LeafILayerComponent.extend({
  geojson: null,
  _center: Ember.computed('geojson', function() {
    var geojson = this.get('geojson');
    if (geojson) {
      return this.L.geoJson(geojson).getBounds().getCenter();
    } else {
      return this.L.latLng(0, 0);
    }
  }),
  lat: Ember.computed('_center', function() {
    return this.get('_center').lat;
  }),
  lng: Ember.computed('_center', function() {
    return this.get('_center').lng;
  }),
  location: Ember.computed('lat', 'lng', function() {
    return this.L.latLng(this.get('lat'), this.get('lng'));
  }),
  latlng: Ember.computed('location.lat', 'location.lng', function() {
    var location = this.get('location');
    if (location instanceof this.L.LatLng) {
      return location;
    }
    var lat = parseFloat(get(location, 'lat'));
    var lng = parseFloat(get(location, 'lng'));
    return this.L.latLng(lat, lng);
  })
});

