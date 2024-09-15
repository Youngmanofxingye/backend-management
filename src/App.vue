<template>
  <div id="app">
    <div class="container">
      <AppSidebar />  <!-- 修改为多词名称 -->
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/Sidebar.vue';  // 修改引入的名称

export default {
  components: {
    AppSidebar  // 更新组件名
  }
};
</script>
