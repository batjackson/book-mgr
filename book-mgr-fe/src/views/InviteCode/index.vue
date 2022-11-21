<template>
  <div>
    <a-card>
      <div>
        <a-input-number v-model:value="count" :min="1" :max="10000" ></a-input-number>
        <span>&nbsp;</span>
        <a-button type="primary" @click="add">添加</a-button>
      </div>
      <a-divider></a-divider>
      <div>
        <a-table bordered :columns="columns" :data-source="list" :pagination="false">
          <template v-slot:bodyCell="{ column, record }">
                      <template v-if="column.dataIndex === 'status'">
            {{record.user ? '已使用' : '未使用'}}
          </template>
          <template v-if="column.dataIndex === 'actions'">
            <a-button type="danger" @click="remove(record)" size="small">删除</a-button>
          </template>
        </template>
        </a-table>
      </div>

      <flex-end style="margin-top:24px">
        <a-pagination
        v-model:current="curPage"
          :total="total"
          :page-size="10"
          @change="setPage">

        </a-pagination>
      </flex-end>
    </a-card>
  </div>
</template>

<script src="./index.js"></script>
