import request from '@/utils/request'

export default {

  /**
   * 分页查询讲师列表
   * @param {*} current 当前页
   * @param {*} limit  记录数
   * @param {*} teacherQuery 条件对象
   */
  getSubjectListByPage(current,pageSize,courseQueryVO){
    return request({
      url: '/eduService/course/queryCourseByProtal/'+current+'/' + pageSize,
      method: 'post',
      data: courseQueryVO
    })
  },
  /**
   * 查询课程分类
   */
  getAllSubject(){
    return request({
      url: '/eduService/subject/getSubject',
      method: 'get'
    })
  },
  /**
   * 查询课程详情
   * @param courseId
   */
  getCourseInfo(courseId){
    return request({
      url: '/eduService/course/getCourseInfoAndTeacher/' + courseId,
      method: 'get'
    })
  }


}
