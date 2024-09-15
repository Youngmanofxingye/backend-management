import { createRouter, createWebHistory } from 'vue-router';
import UserManagement from '../views/UserManagement.vue'; // 确保路径和文件名正确
import PermissionManagement from '../views/PermissionManagement.vue';
import ProductManagement from '../views/ProductManagement.vue';
import OrderManagement from '../views/OrderManagement.vue';
import SystemSettings from '../views/SystemSettings.vue';
import UserDetail from '../views/UserDetail.vue'; // 添加用户详情组件

const routes = [
  { path: '/user-management', component: UserManagement },
  { path: '/user-detail/:id', component: UserDetail }, // 用户详情路由
  { path: '/permission-management', component: PermissionManagement },
  { path: '/product-management', component: ProductManagement },
  { path: '/order-management', component: OrderManagement },
  { path: '/system-settings', component: SystemSettings },
  { path: '/:pathMatch(.*)*', redirect: '/user-management' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
