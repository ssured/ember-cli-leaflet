import Ember from 'ember';
import LeafletMap from '../components/leaf-map';

// returns a promise to the first leaflet map found
// as a parent of this view / component

export default Ember.Mixin.create({
  mapPromise: Ember.computed(function() {
    var self = this;
    var deferred = Ember.RSVP.defer();
    Ember.run.schedule('afterRender', deferred.resolve);
    return deferred.promise.then(function(){
      return self.nearestOfType(LeafletMap).get('map');
    });
  })
});