<template>
  <div>
    <a-card title="重置密码申请列表">
      <a-table bordered
      :data-source="list"
      :columns="columns"
      :pagination="false"
      >
<template v-slot:bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'actions'">
            <a-button size="small" type="primary" @click="changeStatus(record,2)">重置</a-button>
            <span>&nbsp;</span>
            <a-button size="small" type="danger" @click="changeStatus(record,3)">忽略</a-button>
          </template>
        </template>
      </a-table>
      <flex-end style="margin-top:24px">
          <a-pagination
            v-model:current="curPage"
            :pageSize="10"
            :total="total"
            @change="setPage"
          ></a-pagination>
      </flex-end>
    </a-card>
  </div>
</template>

<script src="./index.js"></script>
