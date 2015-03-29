import Ember from 'ember';

export default Ember.Component.extend({
  L: window.L,
  attach: Ember.K,
  detach: Ember.K,
  render: function(buffer) {
    this._super(buffer);
    this.attach();
  },
  destroy: function() {
    this.detach();
    this._super();
  }
});

