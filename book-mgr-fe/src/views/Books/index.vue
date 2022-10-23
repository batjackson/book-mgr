<template>
  <div>
    <a-card>
      <h2>图书列表</h2>
      <a-divider></a-divider>
      <space-between>
        <div class="search">
          <a-input-search placeholder="根据书名搜索" enter-button></a-input-search>
        </div>
        <a-button>添加一条</a-button>
      </space-between>

      <a-divider> </a-divider>
      <a-table :columns="columns" :data-source="dataSource"></a-table>
    </a-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const columns = [
      {
        title: '名字',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
    ];
    const dataSource = [
      {
        name: '小红',
        age: 2,
      },
    ];
    return {
      columns,
      dataSource,
    };
  },
});
</script>

<style lang="scss" scoped>
.search {
  width: 200px;
}
</style>
