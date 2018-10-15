export enum ResourceTypeCode {
  service = '0',
  file = '1',
  database = '2',
  buffer = '3'
}

export enum ResourceTypeName {
  service = '服务接口',
  file = '数据文件',
  database = '数据库表',
  buffer = '数据流'
}

export enum RegisterStatusCode {
  WAIT_TEST = '0',
  WAIT_REVIEW = '1',
  APPROVAL = '2',
  DISAPPROVAL = '3',
  // 测试通过这个状态就是待提交
  WAIT_SUBMIT = '4'
}

export enum RegisterStatusName {
  WAIT_TEST = '待测试',
  WAIT_REVIEW = '待审核',
  APPROVAL = '审核通过',
  DISAPPROVAL = '审核未通过',
  WAIT_SUBMIT = '待提交'
}

export enum ApplyStatusCode {
  WAIT_REVIEW_ADMIN = '0',
  WAIT_REVIEW_PROVIDER = '1',
  APPROVAL = '2',
  DISAPPROVAL = '3',
  REVOKE = '4'
}

export enum ApplyStatusName {
  WAIT_REVIEW_ADMIN = '等待管理员审核',
  WAIT_REVIEW_PROVIDER = '等待生产者审核',
  APPROVAL = '管理员审核通过',
  DISAPPROVAL = '审核未通过',
  REVOKE = '撤销'
}
