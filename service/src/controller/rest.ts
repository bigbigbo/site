const assert = require('assert');
import { Model } from 'think-model';
import { think, Context } from 'thinkjs';

export default class extends think.Controller {
  resource: string;
  id: string;
  modelInstance: Model;
  constructor(ctx: Context) {
    super(ctx);
    this.resource = this.getResource();
    this.id = this.getId();
    // assert(think.isFunction(this.model), 'this.model must be a function');
    this.modelInstance = (this as any).mongo(this.resource);
  }
  __before() {}
  /**
   * get resource
   * @return {String} [resource name]
   */
  getResource() {
    return this.ctx.controller.split('/').pop();
  }
  getId() {
    const id = this.get('id');
    if (id && (think.isString(id) || think.isNumber(id))) {
      return id;
    }
    const last = this.ctx.path.split('/').slice(-1)[0];
    if (last !== this.resource) {
      return last;
    }
    return '';
  }

  __call() {}
}
