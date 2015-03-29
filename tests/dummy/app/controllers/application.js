import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['latlng', 'zoom'],
  latlng: '53.2, 6.58',
  zoom: 12
});