import EmberRouter from '@ember/routing/router';
import config from 'ember-data-add-to-has-many-bug/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
