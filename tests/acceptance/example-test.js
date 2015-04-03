import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-django-adapter/tests/helpers/start-app';

var application;

module('Acceptance: Example', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /example', function(assert) {
  visit('/example');

  andThen(function() {
    assert.equal(currentPath(), 'example');
  });
});
