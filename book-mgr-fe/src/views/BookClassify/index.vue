<template>
  <div>
    <a-card title="书籍分类管理">
      <div>
        <a-input v-model:value="title" placeholder="输入书籍分类管理" style="width:200px"></a-input>
        <span>&nbsp;</span>
        <a-button @click="add" type="primary">添加</a-button>
      </div>

    <a-divider></a-divider>

    <div>
      <a-table bordered :data-source="list" :columns="columns" :pagination="false">
          <template v-slot:bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'actions'">
            <a-button  @click="updateTitle(record)" size="small">修改</a-button>
            <span>&nbsp;</span>
            <a-button type="danger" @click="remove(record)" size="small">删除</a-button>
          </template>
        </template>
      </a-table>
    </div>
    </a-card>
  </div>
</template>


<script src="./index.jsx">
</script>
