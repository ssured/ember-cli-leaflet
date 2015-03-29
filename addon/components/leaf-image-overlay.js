import Ember from 'ember';
import LeafILayerBoundsComponent from '../components/leaf-ilayer-bounds';

export default LeafILayerBoundsComponent.extend({
  opacity: 1,
  url: null,

  imageOverlay: Ember.computed(function() {
    var imageOverlay = this.L.imageOverlay(this.get('url'), this.get('bounds'), {
      opacity: this.get('opacity')
    });

    return imageOverlay;
  }),

  layer: Ember.computed.alias('imageOverlay'),

  opacityDidChange: Ember.observer('opacity', function() {
    this.get('imageOverlay').setOpacity(this.get('opacity'));
  }),
  urlDidChange: Ember.observer('url', function() {
    this.get('imageOverlay').setUrl(this.get('url'));
  }),
  boundsDidChange: Ember.observer('bounds', function() {
    var self = this;
    this.detach()
    .then(function() {
      self.notifyPropertyChange('imageOverlay');
    }).then(this.attach);
  })
});
