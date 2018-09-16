import RestController from './rest';

export default class User extends RestController {
  async loginAction() {
    // let data;
    // if (this.id) {
    //   const pk = this.modelInstance.pk;
    //   data = await this.modelInstance.where({ [pk]: this.id }).find();
    //   return this.success(data);
    // }
    // data = await this.modelInstance.select();
    // data = await this.modelInstance.getList();
    // console.log(this.modelInstance);
    // const res = await this.modelInstance.add({
    //   title: '测试文章2',
    //   tag: ['demo', 'test']
    // });
    return this.success({ id: this.id });
  }

  async logout() {}

  async password() {}
}
