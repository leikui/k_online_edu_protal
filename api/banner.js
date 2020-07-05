import request from '@/utils/request'

export default {

  /**
   * 添加课程信息
   */
  getBanner() {
    return request({
      url: '/educms/banner',
      method: 'get'
    })
  }
}
