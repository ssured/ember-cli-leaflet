import Ember from 'ember';

export default Ember.Mixin.create({
  stroke: true,
  color: '#03f',
  weight: 5,
  opacity: 0.5,
  fill: true,
  fillColor: Ember.computed.oneWay('color'),
  fillOpacity: 0.2,
  dashArray: null,
  lineCap: null,
  lineJoin: null,
  clickable: Ember.computed.notEmpty('layerEvents'),
  pointerEvents: null,
  style: Ember.computed('stroke', 'color', 'weight', 'opacity', 'fill',
    'fillColor', 'fillOpacity', 'dashArray', 'lineCap', 'lineJoin', 'clickable',
    'pointerEvents', function() {
    var options = this.getProperties('stroke', 'color', 'weight', 'opacity', 'fill',
      'fillColor', 'fillOpacity', 'dashArray', 'lineCap', 'lineJoin', 'clickable',
      'pointerEvents');
    // return to leaflet defaults for undefined values
    Object.keys(options).forEach(function(key){
      if ("undefined" === typeof options[key]) {
        delete options[key];
      }
    });
    return options;
  }),
  optionsDidChange: Ember.observer('style', function() {
    this.get('layer').setStyle(this.get('style'));
  })
});