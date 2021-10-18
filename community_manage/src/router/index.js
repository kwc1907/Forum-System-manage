import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login1",
    component: () => import ('@/views/Login'),
    meta: {title: '管理员登录',requireAuth: true}
  },
  {
    path: "/login",
    name: "login",
    component: () => import ('@/views/Login'),
    meta: {title: '管理员登录',requireAuth: true}
  },
  {
    path: "/first",
    name: "first",
    component: () => import ('@/views/First'),
    children:[
      {
        path:"echar",
        component: () => import ('@/views/echar'),
        meta: {title: '热门标签文章数'}
      },
      {
        path:"billboard",
        component: () => import ('@/views/billboard'),
        meta: {title: '公告管理'}
      },
      {
        path:"addBillboard",
        component: () => import ('@/views/addBillboard'),
        meta: {title: '添加公告'}
      },
      {
        path:"tip",
        component: () => import ('@/views/tip'),
        meta: {title: '每日一句管理'}
      },
      {
        path:"addtip",
        component: () => import ('@/views/addtip'),
        meta: {title: '添加每日一句'}
      },
      {
        path:"promotion",
        component: () => import ('@/views/promotion'),
        meta: {title: '广告商管理'}
      },
      {
        path:"addpromotion",
        component: () => import ('@/views/addpromotion'),
        meta: {title: '添加广告商'}
      },
      {
        path:"user",
        component: () => import ('@/views/user'),
        meta: {title: '用户列表'}
      },
      {
        path:"tag",
        component: () => import ('@/views/tag'),
        meta: {title: '标签列表'}
      },
      {
        path:"comment",
        component: () => import ('@/views/comment'),
        meta: {title: '评论列表'}
      },
      {
        path:"post",
        component: () => import ('@/views/post'),
        meta: {title: '帖子列表'}
      },
      {
        path:"detail/:id",
        component: () => import ('@/views/detail'),
        meta: {title: '帖子详情'}
      },
    ],
    meta: {title: '首页'}
  },
  {
    path: "/404",
    name: "404",
    component: () => import ('@/views/error/404'),
    meta: {title: '404-Notfound'}
  },
  {
    path: "*",
    redirect: '/404',
    hidden: true
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
