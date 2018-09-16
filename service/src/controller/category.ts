import RestController from './rest';

export default class Category extends RestController {
  async getAction() {
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
  /**
   * put resource
   * @return {Promise} []
   */
  async postAction() {
    const pk = this.modelInstance.pk;
    const data = this.post();
    if (data[pk]) {
      delete data[pk];
    }
    if (think.isEmpty(data)) {
      return this.fail('data is empty');
    }
    const insertId = await this.modelInstance.add(data);
    return this.success({ id: insertId });
  }
  /**
   * delete resource
   * @return {Promise} []
   */
  async deleteAction() {
    if (!this.id) {
      return this.fail('params error');
    }
    const pk = this.modelInstance.pk;
    const rows = await this.modelInstance.where({ [pk]: this.id }).delete();
    return this.success({ affectedRows: rows });
  }
  /**
   * update resource
   * @return {Promise} []
   */
  async putAction() {
    if (!this.id) {
      return this.fail('params error');
    }
    const pk = this.modelInstance.pk;
    const data = this.post();
    data[pk] = this.id; // rewrite data[pk] forbidden data[pk] !== this.id
    if (think.isEmpty(data)) {
      return this.fail('data is empty');
    }
    const rows = await this.modelInstance.where({ [pk]: this.id }).update(data);
    return this.success({ affectedRows: rows });
  }
}
