import { registerHelper } from 'ember-truth-helpers/utils/register-helper';

import { negHelper } from '../helpers/neg';
import { arrHelper } from '../helpers/arr';
import { latlngHelper } from '../helpers/latlng';

export function initialize(/* container, application */) {
  registerHelper('neg', negHelper);
  registerHelper('arr', arrHelper);
  registerHelper('latlng', latlngHelper);
}

export default {
  name: 'my-helpers',
  initialize: initialize
};