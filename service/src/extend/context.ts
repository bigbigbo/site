export default {
  get isMobile() {
    const userAgent = this.userAgent.toLowerCase();
    const mList = ['iphone', 'android'];
    return mList.some((item) => userAgent.indexOf(item) > -1);
  }
};
