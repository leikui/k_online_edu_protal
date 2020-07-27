<template>
    <div id="pay">

    </div>
</template>

<script>
  import orderApi from "~/api/order";
    export default {
      data(){
        return {
          orderInfo: {},
          payForm:'',
          orderNo:''
        }
      },
      created() {

        // console.log("参数数：：" + this.$route.query.order.orderNo)
        this.payForm = this.$route.query.payForm
        // orderApi.orderPay(this.orderInfo)
        //   .then(resp => {
        //     this.payForm = resp.data.payForm
        //     console.log(resp.data.payForm)
        //     this.orderNo = resp.data.orderNo
        //   })
        console.log("payform" + this.payForm)
        document.querySelector('body').innerHTML = this.payForm;

        const div = document.createElement('div') // 创建div
        div.innerHTML = this.payForm // 将返回的form 放入div
        document.body.appendChild(div)
        document.forms[0].submit()

        // document.getElementsByTagName("pay").innerHTML(this.payForm)
      }
    }

</script>

<style scoped>

</style>
