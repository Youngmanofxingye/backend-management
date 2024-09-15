<template>
  <div>
    <h2>用户详情</h2>
    <p><strong>编号:</strong> {{ user.id }}</p>
    <p><strong>姓名:</strong> {{ user.name }}</p>
    <p><strong>年龄:</strong> {{ user.age }}</p>
    <router-link to="/user-management">返回用户管理</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    const userId = this.$route.params.id;
    // 这里可以用 userId 从 API 获取用户详细信息
    // 这里假设直接用硬编码数据作为示例
    const users = [
      { id: 1, name: '张三', age: 10 },
      { id: 2, name: '李四', age: 20 },
      { id: 3, name: '王五', age: 30 },
      { id: 4, name: '赵六', age: 40 }
    ];
    this.user = users.find(user => user.id === parseInt(userId));
  }
};
</script>

<style scoped>
/* 添加样式 */
</style>
