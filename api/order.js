import request from '@/utils/request'
export default {
  //生成订单
  createOrder(courseId) {
    return request({
      url: '/eduorder/order/createOrder/' + courseId,
      method: 'post'
    })
  },
  //根据token获取用户信息
  getOrderInfo(orderId) {
    return request({
      url: '/eduorder/order/getOrderInfo/' + orderId,
      method: 'get'
    })
  },
  //根据token获取用户信息
  orderPay(orderInfo) {
    return request({
      url: '/eduorder/order/pay',
      method: 'post',
      data: orderInfo
    })
  }
}
