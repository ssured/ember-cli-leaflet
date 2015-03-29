import Ember from 'ember';
import MapPromiseMixin from '../mixins/leaf-map-promise';
import LeafBaseComponent from '../components/leaf-base';

var L = window.L;

export default LeafBaseComponent.extend(MapPromiseMixin, {
  position: 'topleft',

  _controlElement: Ember.computed(function() {
    return document.createElement('div');
  }),
  control: Ember.computed(function() {
    return this.L.control({
      position: this.get('position')
    });
  }),

  attach: function() {
    var self = this;
    return this.get('mapPromise').then(function(map) {
      var control = self.get('control');
      control.onAdd = function (/*map*/) {
        var element = self.get('_controlElement');

        L.DomEvent
          .on(element, 'mousedown dblclick click', L.DomEvent.stopPropagation)
          .on(element, 'mousedown dblclick click', L.DomEvent.stop);

        return element;
      };
      control.addTo(map);
    });
  },
  detach: function() {
    var self = this;
    return this.get('mapPromise').then(function(map) {
      self.get('control').removeFrom(map);
    });
  },

  positionDidChange: Ember.observer('position', function() {
    this.get('control').setPosition(this.get('position'));
  }),

  render: function(buffer) {
    buffer._element = this.get('_controlElement');
    this._super(buffer);
  }
});
