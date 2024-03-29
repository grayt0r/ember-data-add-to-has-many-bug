import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    return hash({
      examples: this.store.findAll('example'),
      newExample: this.store.createRecord('example', {
        name: 'Example 2',
      }),
    });
  }
}
