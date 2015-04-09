export function initialize(container, application) {
  var apiHost = application.get('API_HOST');
  var apiNamespace = application.get('API_NAMESPACE');

  application.register('config:drfApiHost', apiHost, { instantiate: false });
  application.register('config:drfApiNamespace', apiNamespace, { instantiate: false });

  application.inject('adapter', 'drfApiHost', 'config:drfApiHost');
  application.inject('adapter', 'drfApiNamespace', 'config:drfApiNamespace');
}

export default {
  name: 'drf-config',
  initialize: initialize
};
