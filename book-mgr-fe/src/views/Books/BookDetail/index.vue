<template>
  <div>
    <a-card>
      <space-between>
        <h2>{{ d.name }}</h2>
        <div v-only-admin>
          <a-button size="small" type="primary" @click="showUpdateModal = true">编辑</a-button>
          <span>&nbsp;</span>
          <a-button size="small" type="danger" @click="remove">删除</a-button>
        </div>
      </space-between>

      <a-divider />
      <div class="base-info">
        <div class="items">
          <div class="item">
            <div class="title">价格</div>
            <div class="content">{{ d.price }}</div>
          </div>
          <div class="item">
            <div class="title">作者</div>
            <div class="content">{{ d.author }}</div>
          </div>
          <div class="item">
            <div class="title">分类</div>
            <div class="content">{{ d.classify }}</div>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <div class="title">出版日期</div>
            <div class="content">{{ formatTimeStamp(d.publishDate) }}</div>
          </div>
        </div>
      </div>
    </a-card>
    <a-card class="log" title="出入库日志">
      <template #extra>
        <span style="margin-right: 12px" @click="logFilter('IN_COUNT')">
          <a href="javascript:;"
            ><CheckOutlined v-if="curLogType === 'IN_COUNT'"></CheckOutlined>入库日志
          </a>
        </span>
        <span @click="logFilter('OUT_COUNT')">
          <a href="javascript:;">
            <CheckOutlined v-if="curLogType === 'OUT_COUNT'"></CheckOutlined>
            出库日志
          </a>
        </span>
      </template>
      <div>
        <a-table bordered :pagination="false" :data-source="log" :columns="columns">
          <template v-slot:bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'createAt'">
              {{ formatTimeStamp(record.meta.createdAt) }}
            </template>
          </template>
        </a-table>
      </div>
      <space-between style="margin-top: 24px">
        <div></div>
        <a-pagination
          v-model:current="logCurPage"
          :total="logTotal"
          :page-size="10"
          @change="setLogPage"
        ></a-pagination>
      </space-between>
    </a-card>
    <update v-model:show="showUpdateModal" :book="d" @update="update"></update>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import './index.scss';
</style>
