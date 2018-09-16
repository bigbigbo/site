import { think } from 'thinkjs';

export default class extends think.Mongo {
  getList() {
    return this.field('title').select();
  }
}
