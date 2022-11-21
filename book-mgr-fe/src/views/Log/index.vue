<template>
  <div>
    <a-spin :spinning="loading">
      <a-card :title="simple ? '最近的操作日志' : ''">
        <div v-if="!simple">
          <h2>操作日志</h2>
          <a-divider></a-divider>
        </div>

        <div>
          <a-table
            bordered
            :columns="columns"
            :data-source="list"
            :pagination="false"
            :scroll="{ x: 'max-content' }"
          >
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
              <template v-if="column.dataIndex === 'actions' && !simple">
                <a href="javascript:;" @click="remove(record)">删除</a>
              </template>
            </template>
          </a-table>
        </div>
        <flex-end v-if="!simple" style="margin-top: 24px">
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
