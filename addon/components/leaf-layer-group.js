import Ember from 'ember';
import LeafILayerComponent from '../components/leaf-ilayer';

export default LeafILayerComponent.extend({
  layerGroup: Ember.computed(function() {
    return this.get('layer');
  }),

  layer: Ember.computed(function(){
    return this.L.layerGroup([]);
  })
});

