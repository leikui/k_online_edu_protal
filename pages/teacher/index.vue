<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部讲师</span>
        </h2>
        <section class="c-tab-title" >
          <a id="subjectAll" title="全部" href="#">全部</a>
          <!-- <c:forEach var="subject" items="${subjectList }">
                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="teacherList == null">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="i-teacher-list">
            <ul class="of">
              <li v-for="teacher in teacherList" :key="teacher.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/' + teacher.id" :title="teacher.name" target="_blank">
                      <img :src="teacher.avatar" alt>
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a href="/teacher/1" :title="teacher.name" target="_blank" class="fsize18 c-666">{{teacher.name}}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{teacher.career}}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{teacher.intro}}</p>
                  </div>
                </section>
              </li>

            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->

        <el-pagination
          background
          :current-page="page"
          :page-size="pageSize"
          layout="prev, pager, next"
          :pager-count="5"
          @current-change="handleCurrentChange"
          :total="total">
        </el-pagination>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
  import teacher from "~/api/teacher";
  export default {
    data() {
      return {
        total: 120,
        page: 1,
        pageSize: 8,
        pageSizes: [5, 10, 20, 30, 50],
        teacherQuery: {},
        teacherList: null
      }
    },
    created() {
      this.getTeacherList()
    },
    methods:{
      getTeacherList() {
        teacher.getTeacherListByPage(this.page, this.pageSize, this.teacherQuery)
          .then(res => {
            console.log(res)
            this.teacherList = res.data.teachers
            this.total = res.data.total
            console.log(this.teacherList)
            console.log(this.total)
          })
          .catch(error => {
            console.log(error)
          })
      },
      // 改变当前页
      handleCurrentChange(page) {
        this.page = page
        this.getTeacherList()
      }
    }

  };
</script>
