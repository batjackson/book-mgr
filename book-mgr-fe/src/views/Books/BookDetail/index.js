import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SpaceBetween from '@/components/SpaceBetween';
import { book, inventoryLog } from '@/service';
import { result, formatTimeStamp } from '@/helpers/utils';
import { CheckOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import Update from '@/views/Books/Update/index.vue';

const columns = [
  {
    title: '数量',
    dataIndex: 'num',
  },
  {
    title: '操作时间',
    dataIndex: 'createAt',
  },
];

export default defineComponent({
  components: { SpaceBetween, Update, CheckOutlined },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const detailInfo = ref({});
    const log = ref([]);
    const showUpdateModal = ref(false);
    const logTotal = ref(0);
    const logCurPage = ref(1);
    const curLogType = ref('IN_COUNT');
    // 获取书籍详细信息
    const getDetail = async () => {
      const res = await book.detail(id);

      result(res).success(({ data }) => {
        detailInfo.value = data;
      });
    };
    // 获取出入库日志
    const getInventoryLog = async () => {
      const res = await inventoryLog.list(curLogType.value, logCurPage.value, 10);

      result(res).success(({ data: { list, total } }) => {
        log.value = list;
        logTotal.value = total;
      });
    };
    onMounted(() => {
      getDetail();
      getInventoryLog();
    });
    // 删除操作
    const remove = async () => {
      const res = await book.remove(id);

      result(res).success(({ msg }) => {
        message.success(msg);
        router.replace('/books');
      });
    };
    // 更新操作
    const update = (book) => {
      Object.assign(detailInfo.value, book);
    };
    // 日志分页切换
    const setLogPage = (page) => {
      logCurPage.value = page;
      getInventoryLog();
    };
    // 筛选日志
    const logFilter = (type) => {
      curLogType.value = type;

      getInventoryLog();
    };
    return {
      d: detailInfo,
      formatTimeStamp,
      remove,
      showUpdateModal,
      update,
      logTotal,
      logCurPage,
      setLogPage,
      columns,
      log,
      logFilter,
      curLogType,
      logCurPage,
    };
  },
});
