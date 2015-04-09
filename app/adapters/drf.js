import DRFAdapter from 'ember-django-adapter/adapters/drf';
import ENV from '../config/environment';

export default DRFAdapter.extend({
  host: Ember.computed(function() {
    return this.get('drfApiHost');
  }),

  namespace: Ember.computed(function() {
    return this.get('drfApiNamespace');
  })
});
