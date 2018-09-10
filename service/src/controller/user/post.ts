import { think } from 'thinkjs';
import RestController from '../rest';

interface IListBody {
  name: string;
  age?: number;
}

export default class extends RestController {
  listAction() {
    const isGet = this.isGet;
    const ip = this.ip;
    const userAgent = this.userAgent;
    const isAjax = this.isAjax('get');
    const queryName = this.get('name');

    return ((this.ctx.body as IListBody) = {
      name: `${queryName} + '666'`,
      age: 123
    });
  }
}
