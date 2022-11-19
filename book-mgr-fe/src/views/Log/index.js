import { defineComponent,onMounted,ref } from 'vue';
import { log } from '@/service'
import { result } from '@/helpers/utils'
import { getLogInfoByPath } from '@/helpers/log';
import { Item } from 'ant-design-vue/lib/menu';

const columns = [
  {
    title: '用户名',
    dataIndex: 'user.account',
  },
  {
    title: '动作',
    dataIndex: 'action',
  },
];

export default defineComponent({
  setup() {
    const curPage = ref(1)
    const total = ref(0)
    const list = ref([])
    const loading = ref(true)

    const getList = async () => {
      loading.value=true
      const res = await log.list(curPage.value, 10)
      loading.value = false
      result(res).success(({ data: { list: l, total: t } }) => {
        l.forEach(item => {
          item.action = getLogInfoByPath(item.request.url)
        });
        list.value = l;
        console.log(l);
        total.value = t
      })
    }
    onMounted(() => {
      getList()
    })
    const setPage = (page) => {
      curPage.value = page;
      getList()
    }
    return {
      curPage,
      total,
      list,
      columns,
      setPage,
      loading,
    };
  },
});
