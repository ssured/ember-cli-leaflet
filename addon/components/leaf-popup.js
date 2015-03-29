import Ember from 'ember';
import LeafILayerLatLngComponent from '../components/leaf-ilayer-latlng';

export default LeafILayerLatLngComponent.extend({
  _popupElement: Ember.computed(function() {
    return document.createElement('div');
  }),
  popup: Ember.computed(function() {
    return this.L.popup({
        // offset: this.L.point(0,-27),
        keepInView: true,
        closeButton: false,
        closeOnClick: false
      })
      .setContent(this.get('_popupElement'))
      .setLatLng(this.get('latlng'));
  }),
  layer: Ember.computed.alias('popup'),

  latlngDidChange: Ember.observer('latlng', function() {
    this.get('popup').setLatLng(this.get('latlng'));
  }),

  render: function(buffer) {
    buffer._element = this.get('_popupElement');
    this._super(buffer);
  }
});

