<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/user-management">用户管理</router-link></li>
      <li><router-link to="/permission-management">权限管理</router-link></li>
      <li><router-link to="/product-management">商品管理</router-link></li>
      <li><router-link to="/order-management">订单管理</router-link></li>
      <li><router-link to="/system-settings">系统设置</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',  // 修改为多词名称
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 10px;
  background-color: #f4f4f4;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
}

a.router-link-active {
  color: blue;
  font-weight: bold;
}
</style>
