<template>
  <div>
    <h2>用户管理</h2>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td><router-link :to="`/user-detail/${user.id}`">详情</router-link></td> <!-- 修改这里 -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: '张三', age: 10 },
        { id: 2, name: '李四', age: 20 },
        { id: 3, name: '王五', age: 30 },
        { id: 4, name: '赵六', age: 40 }
      ]
    };
  }
};
</script>

<style scoped>
/* 添加样式 */
</style>
