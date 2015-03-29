import Ember from 'ember';
import LeafILayerComponent from '../components/leaf-ilayer';

export default LeafILayerComponent.extend({
  geojson: null,
  bounds: Ember.computed('geojson', function() {
    var geojson = this.L.geoJson(this.get('geojson'));
    return geojson.getBounds();
  })
});

