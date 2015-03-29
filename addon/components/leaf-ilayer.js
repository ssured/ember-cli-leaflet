import Ember from 'ember';
import LeafBaseComponent from '../components/leaf-base';
import MapPromiseMixin from '../mixins/leaf-map-promise';
import LayerGroupPromiseMixin from '../mixins/leaf-layer-group-promise';

export default LeafBaseComponent.extend(MapPromiseMixin, LayerGroupPromiseMixin, {
  layer: null,
  clickable: Ember.computed.notEmpty('layerEvents'),
  actionPayload: null,

  layerEvents: [],
  layerEventsArray: Ember.computed('layerEvents', function() {
    var events = this.get('layerEvents');
    return Ember.typeOf(events) === 'string' ? events.w() : events;
  }).readOnly(),
  layerEventHandler: Ember.computed(function() {
    return function(event) {
      if (this.get('clickable')) {
        this.sendAction('layer' + Ember.String.capitalize(event.type), this.get('actionPayload') || this, event);
      }
    }.bind(this);
  }),

  attach: function() {
    var self = this;
    return this.get('layerGroupPromise').then(function(layerGroup) {
      var layer = self.get('layer');
      var eventHandler = self.get('layerEventHandler');

      layerGroup.addLayer(layer);

      self.get('layerEventsArray').forEach(function(eventName){
        layer.on(eventName, eventHandler);
      });
    });
  },
  detach: function() {
    var self = this;
    return this.get('layerGroupPromise').then(function(layerGroup) {
      var layer = self.get('layer');
      var eventHandler = self.get('layerEventHandler');

      self.get('layerEventsArray').forEach(function(eventName){
        layer.off(eventName, eventHandler);
      });

      layerGroup.removeLayer(layer);
    });
  }
});

