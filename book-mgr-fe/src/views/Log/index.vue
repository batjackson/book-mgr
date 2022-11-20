<template>
  <div>
    <a-spin :spinning="loading">
      <a-card>
        <h2>操作日志</h2>
        <a-divider></a-divider>
        <div>
          <a-table bordered :columns="columns" :data-source="list" :pagination="false">
            <template v-slot:bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'user.account'">
                {{ record.user.account }}
              </template>
              <template v-if="column.dataIndex === 'action'">
                {{ record.action }}
              </template>
              <template v-if="column.dataIndex === 'createdAt'">
                {{ formatTimeStamp(record.meta.createdAt) }}
              </template>
                            <template v-if="column.dataIndex === 'actions'">
                <a href="javascript:;" @click="remove(record)">删除</a>
              </template>
            </template>
          </a-table>
        </div>
        <flex-end style="margin-top: 24px">
          <a-pagination
            v-model:current="curPage"
            :pageSize="10"
            :total="total"
            @change="setPage"
          ></a-pagination>
        </flex-end>
      </a-card>
    </a-spin>
  </div>
</template>

<script src="./index.js"></script>
