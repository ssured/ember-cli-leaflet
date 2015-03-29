import Ember from 'ember';

export default Ember.Controller.extend({
  center: Ember.computed('model', function(){
    return this.get('model').getCenter();
  }),
  bBoxString: Ember.computed('model', function(){
    return this.get('model').toBBoxString();
  }),

  seconds: 0,
  secondsDidChange: Ember.observer('seconds', function(){
    Ember.run.later(this, function(){
      this.incrementProperty('seconds');
    }, 1000);
  }).on('init'),

  showPopup: false,
  modelDidChange: Ember.observer('model', function(){
    this.set('showPopup', false);
  }),

  actions: {
    markerClick: function(markerComponent, event) {
      this.toggleProperty('showPopup');
      return false;
    }
  }
});