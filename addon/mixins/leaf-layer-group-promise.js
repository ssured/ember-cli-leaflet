import Ember from 'ember';

// returns a promise to the first layergroup to draw on

export default Ember.Mixin.create({
  layerGroupPromise: Ember.computed(function() {
    var self = this;
    var deferred = Ember.RSVP.defer();
    Ember.run.schedule('afterRender', deferred.resolve);
    return deferred.promise.then(function(){
      return self.nearestWithProperty('layerGroup').get('layerGroup');
    });
  })
});