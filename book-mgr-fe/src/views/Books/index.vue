<template>
  <div>
    <a-card :title="simple ? '最近添加的图书' : ''">
      <div v-if="!simple">
        <h2>图书列表</h2>
        <a-divider></a-divider>
        <space-between>
          <div class="search">
            <a-input-search
              placeholder="根据书名搜索"
              enter-button
              v-model:value="keyword"
              @search="onSearch"
            ></a-input-search>
            <a href="javascript:;" @click="backAll" v-if="isSearch">返回</a>
          </div>
          <div>
            <a-button v-only-admin @click="show = true">添加一条</a-button>
            <span>&nbsp;</span>
            <a-upload action="http://localhost:3001/upload/file" @change="onUploadChange" :headers="headers">
              <a-button type="primary">上传 Excel 添加</a-button>
            </a-upload>
          </div>
        </space-between>

        <a-divider> </a-divider>
      </div>
      <a-table
        :scroll="{ x: 'max-content' }"
        :columns="columns"
        :data-source="list"
        :pagination="false"
        bordered
      >
        <!-- <template #publishDate="data">
          {{ formatTimeStamp(data.record.publishDate) }}
        </template> -->
        <template v-slot:bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'publishDate'">
            {{ formatTimeStamp(record.publishDate) }}
          </template>
          <template v-if="column.dataIndex === 'actions' && !simple">
            <a href="javascript:;" @click="toDetail(record)">详情</a>
            <span>&emsp;</span>
            <a v-only-admin href="javascript:;" @click="update(record)">编辑</a>
            <span>&emsp;</span>
            <a v-only-admin href="javascript:;" @click="remove(record)">删除</a>
          </template>
          <template v-if="column.dataIndex === 'count'">
            <a href="javascript:;" @click="updateCount('IN_COUNT', record)">入库</a>
            {{ record.count }}
            <a href="javascript:;" @click="updateCount('OUT_COUNT', record)">出库</a>
          </template>
          <template v-if="column.dataIndex === 'classify'">
            {{ getClassifyById(record.classify) }}
          </template>
        </template>
      </a-table>
      <flex-end v-if="!simple" style="margin-top: 24px">
        <div></div>
        <a-pagination
          v-model:current="curPage"
          :total="total"
          :page-size="10"
          @change="setPage"
        ></a-pagination
      ></flex-end>
    </a-card>

    <add-one v-model:show="show" :classifyList="bookClassifyList" @getList="getList"></add-one>
    <update v-model:show="showUpdateModal" :book="curEditBook" @update="updateCurBook"></update>
  </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
