import Ember from 'ember';
import LeafFeatureGroupComponent from '../components/leaf-feature-group';
import LeafStyleComponent from '../mixins/leaf-style';

export default LeafFeatureGroupComponent.extend(LeafStyleComponent, {
  geojsonDidChange: Ember.observer('geojson', function() {
    var self = this;
    this.detach().then(function(){
      self.notifyPropertyChange('layer');
      self.attach();
    });
  })
});

