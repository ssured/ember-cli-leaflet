import Ember from 'ember';
import LeafletMarker from '../components/leaf-marker';

// returns a promise to the first leaflet marker found
// as a parent of this view / component

export default Ember.Mixin.create({
  markerPromise: Ember.computed(function() {
    var self = this;
    var deferred = Ember.RSVP.defer();
    Ember.run.schedule('afterRender', deferred.resolve);
    return deferred.promise.then(function(){
      return self.nearestOfType(LeafletMarker).get('map');
    });
  })
});