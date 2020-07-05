import request from '@/utils/request'

export default {

  /**
   * 添加课程信息
   */
  getIndexData() {
    return request({
      url: '/eduService/course/hotIndex',
      method: 'get'
    })
  }
}
