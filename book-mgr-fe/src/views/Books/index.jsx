import SpaceBetween from '../../components/SpaceBetween';
import { defineComponent, ref, onMounted, createVNode } from 'vue';
import AddOne from './AddOne/index.vue';
import Update from './Update/index.vue';
import { book, BookClassify } from '@/service';
import { message, Modal } from 'ant-design-vue';
import { result, formatTimeStamp } from '@/helpers/utils';
import { getClassifyById } from '@/helpers/book-classify';
import { useRouter } from 'vue-router';
import { Item } from 'ant-design-vue/lib/menu';
export default defineComponent({
  components: {
    AddOne,
    SpaceBetween,
    Update,
  },
  props: {
    simple: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const columns = [
      {
        title: '书字',
        dataIndex: 'name',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '价格',
        dataIndex: 'price',
      },
      {
        title: '库存',
        dataIndex: 'count',
      },
      {
        title: '出版日期',
        dataIndex: 'publishDate',
        // slots: {
        //   customRender: 'publishDate',
        // },
      },
      {
        title: '分类',
        dataIndex: 'classify',
      },

    ];

    if (!props.simple) {
      columns.push({
        title: '操作',
        dataIndex: 'actions',
      });
    }
    const show = ref(false);
    const showUpdateModal = ref(false);
    // const setShow = (bool) => {
    //   show.value = bool;
    // };
    const list = ref([]);
    const total = ref(0);
    const curPage = ref(1);
    const keyword = ref('');
    const isSearch = ref(false);
    const curEditBook = ref({});

    // 获取书籍列表
    const getList = async () => {
      const res = await book.list({
        page: curPage.value,
        size: 10,
        keyword: keyword.value,
      });
      // console.log(res);
      result(res).success(({ data: { list: l, total: t } }) => {
        list.value = l;
        total.value = t;
      });
    };

    onMounted(async () => {
      getList();
    });
    // 切页
    const setPage = (page) => {
      curPage.value = page;
      getList();
    };
    const onSearch = () => {
      getList();
      isSearch.value = !!keyword.value;
    };
    // 回到全部列表
    const backAll = () => {
      keyword.value = '';
      isSearch.value = false;

      getList();
    };
    // 删除一本书籍
    const remove = async (record) => {
      console.log(record);
      const { _id } = record;

      const res = await book.remove(_id);

      result(res).success(({ msg }) => {
        message.success(msg);
        getList()
      });
      // const idx = list.value.findIndex((item) => {
      //   return item._id === _id;
      // });

      // list.value.splice(idx, 1);
      getList();
    };
    const updateCount = (type, record) => {
      let word = '增加';
      if (type === 'OUT_COUNT') {
        word = '减少';
      }
      Modal.confirm({
        title: '要增加多少库存呢',
        content: (
          <div>
            <Input class="__book_input_count" />
          </div>
        ),
        onOk: async () => {
          const el = document.querySelector('.__book_input_count');

          let num = el.value;
          const res = await book.updateCount({
            id: record._id,
            num: el.value,
            type,
          });

          result(res).success((data) => {
            if (type === 'IN_COUNT') {
              num = Math.abs(num);
            } else {
              num = -Math.abs(num);
            }
            const one = list.value.find((item) => {
              return item._id === record._id;
            });
            if (one) {
              one.count = one.count + num;

              message.success(`成功${word} ${Math.abs(num)}本书`);
            }
          });
        },
      });
    };
    // 显示更新弹框
    const update = (record) => {
      // console.log(record);
      showUpdateModal.value = true;
      curEditBook.value = record;
    };
    // 更新列表的某一行数据
    const updateCurBook = (newData) => {
      Object.assign(curEditBook.value, newData);
    };
    // 进入书籍详情页
    const toDetail = (record) => {
      router.push(`/books/${record._id}`);
    };
    const onUploadChange = ({ file }) => {
      if (file.response) {
        result(file.response).success(async (key) => {
          const res = await book.addMany(key);
          result(res).success(({ data:{addCount} }) => {
            message.success(`成功添加 ${addCount} 本书`)
            getList();
          })
        });
      }
    }
    return {
      columns,
      show,
      list,
      formatTimeStamp,
      curPage,
      total,
      setPage,
      keyword,
      onSearch,
      backAll,
      isSearch,
      remove,
      updateCount,
      showUpdateModal,
      update,
      curEditBook,
      updateCurBook,
      toDetail,
      getList,
      getClassifyById,
      simple: props.simple,
      onUploadChange
      // setShow,
    };
  },
});
