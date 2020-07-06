import request from '@/utils/request'
export default {
  //根据手机号码发送短信
  getMobile(mobile) {
    return request({
      url: `/edusms/sms/sendSms/${mobile}`,
      method: 'get'
    })
  },
  //用户注册
  submitRegister(registerVO) {
    return request({
      url: `/edu/ucenter/member/register`,
      method: 'post',
      data: registerVO
    })
  }
}
