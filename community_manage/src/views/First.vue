<template>
<el-container style="height: 750px; border: 2px solid #eee">
  
  <el-header>
    <div>
      <el-row>
        <el-col :span="20"> <strong style="font-size: 20px">论坛管理端</strong></el-col>
         <el-col :span="4"><strong>欢迎管理员,{{user.username}}！</strong>
        <a @click="logout">退出登录</a></el-col>
      </el-row>
    </div>
    </el-header>
  <el-container>
    <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '6']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-pie-chart"></i>统计</template>
         <router-link :to="{path:'/first/echar'}"><el-menu-item >热门标签文章数及比例</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message-solid"></i>公告栏管理</template>
         <router-link :to="{path:'/first/billboard'}"><el-menu-item >公告栏列表</el-menu-item></router-link>
         <router-link :to="{path:'/first/addBillboard'}"><el-menu-item >添加公告</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-link"></i>外部资源</template>
        <el-menu-item-group>
          <template slot="title">每日一句</template>
          <router-link :to="{path:'/first/tip'}"><el-menu-item >每日一句列表</el-menu-item></router-link>
          <router-link :to="{path:'/first/addtip'}"><el-menu-item >添加每日一句</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">广告商</template>
          <router-link :to="{path:'/first/promotion'}"><el-menu-item>广告商列表</el-menu-item></router-link>
          <router-link :to="{path:'/first/addpromotion'}"><el-menu-item>添加广告商</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-s-custom"></i>用户管理</template>
        <router-link :to="{path:'/first/user'}"><el-menu-item >用户列表</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-menu"></i>帖子管理</template>
        <router-link :to="{path:'/first/post'}"><el-menu-item >帖子列表</el-menu-item></router-link>
         <router-link :to="{path:'/first/comment'}"><el-menu-item >评论列表</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-attract"></i>标签管理</template>
        <router-link :to="{path:'/first/tag'}"><el-menu-item >标签列表</el-menu-item></router-link>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
     <router-view />
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
     computed: {
    ...mapGetters(['token', 'user'])
  },
  methods:{
      async logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$message.info('退出登录成功')
        setTimeout(() => {
          this.$router.push({ path: this.redirect || '/' })
        }, 500)
      })
    },
  }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

