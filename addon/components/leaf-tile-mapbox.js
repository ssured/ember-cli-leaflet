import Ember from 'ember';
import LeafTileComponent from '../components/leaf-tile';

export default LeafTileComponent.extend({
  layer: Ember.computed(function(){
    return this.L.tileLayer('http://{s}.tiles.mapbox.com/v3/jerel.l190fknj/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxNativeZoom: 18
    });
  })
});
