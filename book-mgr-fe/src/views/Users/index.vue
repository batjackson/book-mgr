<template>
  <div>
    <a-card v-only-admin>
      <h2>用户管理</h2>
      <a-divider></a-divider>
      <space-between>
        <div class="search">
          <a-input-search
            placeholder="根据账户搜索"
            enter-button
            v-model:value="keyword"
            @search="onSearch"
          ></a-input-search>
          <a href="javascript:;" @click="backAll" v-if="isSearch">返回</a>
        </div>
        <div>
          <a-button @click="showAddModal = true">添加用户</a-button>
          <span>&nbsp;</span>
          <a-upload action="http://localhost:3001/upload/file" @change="onUploadChange">
            <a-button  type="primary">上传 Excel 添加</a-button>
          </a-upload>
        </div>
      </space-between>
      <a-divider></a-divider>
      <div>
        <a-table bordered :pagination="false" :columns="columns" :data-source="list">
          <template v-slot:bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'createdAt'">
              {{ formatTimeStamp(record.meta.createdAt) }}
            </template>
            <template v-if="column.dataIndex === 'actions'">
              <a href="javascript:;" @click="resetPassword(record)">重置密码</a>
              <span>&nbsp;</span>
              <a href="javascript:;" @click="remove(record)">删除</a>
            </template>
            <template v-if="column.dataIndex === 'character'">
              <a href="javascript:;" @click="onEdit(record)"><EditOutlined></EditOutlined></a>
              {{ getCharacterInfoById(record.character).title }}
            </template>
          </template>
        </a-table>
      </div>
      <flex-end style="margin-top: 24px" v-if="!isSearch">
        <a-pagination
          v-model:current="curPage"
          :total="total"
          :page-size="10"
          @change="setPage"
        ></a-pagination>
      </flex-end>
    </a-card>

    <add-one v-model:show="showAddModal" @getList="getUser"></add-one>
    <a-modal v-model:visible="showEditCharacterModal" title="修改角色" @ok="updateCharacter">
      <a-select v-model:value="editForm.character" style="width: 220px">
        <a-select-option v-for="item in characterInfo" :key="item._id" :value="item._id">
          {{ item.title }}</a-select-option
        >
      </a-select>
    </a-modal>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
