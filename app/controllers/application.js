import Controller from '@ember/controller';
import { action, computed } from '@ember/object';

export default class ApplicationController extends Controller {
  @computed('model.examples.@each.isNew')
  get savedExamples() {
    return this.model.examples.rejectBy('isNew');
  }

  @action
  async save() {
    await this.model.newExample.save();

    // NOTE: uncommenting the line below fixes the issue
    // await new Promise((resolve) => setTimeout(resolve, 0));

    // NOTE: commenting out the line below fixes the issue
    this.model.newExample.isNew;
  }
}
