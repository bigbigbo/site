import { think } from 'thinkjs';

export default class extends think.Logic {
  getAction() {
    const query = this.query();
    if (Object.keys(query).length < 1) {
      return 123;
    }
  }
}
