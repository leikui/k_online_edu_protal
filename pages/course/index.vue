<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#" @click="searchOne('',-1)" :class="{active:oneIndex==-1}">全部</a>
                </li>
                <li v-for="(oneSubject,index) in subjectFirstList" :key="index" :class="{active:oneIndex==index}">
                  <a :title="oneSubject.title" href="#" @click="searchOne(oneSubject.id,index)">{{oneSubject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(twoSubject,index) in subjectList" :key="index">
                  <a :title="twoSubject.title" href="#" @click="searchTwo(twoSubject.id,index)" :class="{active:twoIndex==index}">{{twoSubject.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">{{page}}</i>/
              <i class="c-666 f-fM">{{parseInt((total + pageSize -1) / pageSize)}}</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li :class="{'current bg-orange':courseQueryVO.buyCountSort!==''}">
                <a title="销量" href="javascript:void(0);" @click="searchConditionSort(1)">销量
                  <span :class="{hide:courseQueryVO.buyCountSort===''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':courseQueryVO.gmtCreateSort!==''}">
                <a title="最新" href="javascript:void(0);" @click="searchConditionSort(2)">最新
                  <span :class="{hide:courseQueryVO.gmtCreateSort===''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':courseQueryVO.priceSort!==''}">
                <a title="价格" href="javascript:void(0);" @click="searchConditionSort(3)">价格&nbsp;
                  <span :class="{hide:courseQueryVO.priceSort===''}">↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="total == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="total > 0">
            <ul class="of" id="bna">
              <li v-for="course in courseList">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" :alt="course.cover">
                    <div class="cc-mask">
                      <a :href="'/course/' + course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/course/' + course.id" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green" v-if="Number(course.price) === 0">
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span class="fr jgTag bg-green" v-else>
                      <i class="c-fff fsize12 f-fA">￥|{{course.price}}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{course.buyCount}}人学习</i>
                      |
                      <i class="c-999 f-fA">9634评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <el-pagination
            background
            :current-page="page"
            :page-size="pageSize"
            layout="prev, pager, next"
            :pager-count="5"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
  import courseApi from "@/api/course";
  export default {
    data() {
      return {
        total: 0,
        page: 1,
        pageSize: 8,
        courseList: {},
        subjectFirstList:[], //一级分类
        subjectList:[], //二级分类

        courseQueryVO: {
          buyCountSort: '',
          gmtCreateSort:'',
          priceSort:''
        },
        oneIndex: -1, //一级分类选中效果
        twoIndex: -1, // 二级分类选中效果

      }
    },
    created(){
      this.initFirstCourse()
      this.getSubjectAll()

    },
    methods:{

      //查询第一页数据
      initFirstCourse(){
        console.log(this.courseQueryVO.buyCountSort)
        console.log(this.courseQueryVO.gmtCreateSort)
        console.log(this.courseQueryVO.priceSort)
        courseApi.getSubjectListByPage(this.page,this.pageSize,this.courseQueryVO)
          .then(resp => {
            this.courseList = resp.data.courseList
            this.total = resp.data.total
            console.log(this.total)
            console.log((this.total + this.pageSize -1)/this.pageSize)
          })
      },
      //查询所有分类
      getSubjectAll(){

        courseApi.getAllSubject()
          .then(resp => {
            this.subjectFirstList = resp.data.tree
            console.log(this.subjectFirstList)
          })

      },

      //查询对应的二级分类
      searchOne(oneSubjectId,index){
        //选中样式
        this.oneIndex = index
        this.courseQueryVO.subjectParentId = oneSubjectId
        this.handleCurrentChange(1)
        if (index == -1) {
          //选中 全部 让二级分类隐藏
          this.subjectList = {}
          return
        }
        // 获取二级分类
        this.subjectList = this.subjectFirstList[index].children
      },

      //点击二级分类查询
      searchTwo(twoSubjectId,index){
        this.twoIndex = index
        this.courseQueryVO.subjectId = twoSubjectId
        this.handleCurrentChange(1)
      },

      //排序条件
      searchConditionSort(sort){
        switch (sort) {
          case 1:
            this.courseQueryVO.buyCountSort = sort
            this.courseQueryVO.gmtCreateSort = ''
            this.courseQueryVO.priceSort = ''
            break;
          case 2:
            this.courseQueryVO.gmtCreateSort = sort
            this.courseQueryVO.buyCountSort = ''
            this.courseQueryVO.priceSort = ''
            break
          case 3:
            this.courseQueryVO.priceSort = sort
            this.courseQueryVO.buyCountSort = ''
            this.courseQueryVO.gmtCreateSort = ''
            break
          default:
            this.courseQueryVO.buyCountSort = ''
            this.courseQueryVO.gmtCreateSort = ''
            this.courseQueryVO.priceSort = ''
            break
        }
        //刷新页面
        this.handleCurrentChange(1)
      },

      // 改变当前页
      handleCurrentChange(page) {
        this.page = page
        this.initFirstCourse()
      }
    }
  };
</script>
<style scoped>
  .active {
    background: rgba(104, 203, 155, 0.99);
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>
