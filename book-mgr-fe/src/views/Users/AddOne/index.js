import { defineComponent, reactive, ref } from 'vue';
import { user } from '@/service';
import { result, clone } from '@/helpers/utils';
import { message } from 'ant-design-vue';
import store from '@/store';
export default defineComponent({
  props: {
    show: Boolean,
  },
  setup(props, context) {
    const { characterInfo } = store.state;

    const defaultFormData = {
      account: '',
      password: '',
      character: '',
    };
    const close = () => {
      // context.emit('setShow', false);
      context.emit('update:show', false);
    };
    const addForm = reactive(clone(defaultFormData));

    addForm.character = characterInfo[1]._id;

    const submit = async () => {
      // console.log(addForm);
      const form = clone(addForm);
      const res = await user.add(form.account, form.password, form.character);

      result(res).success((d, { data }) => {
        Object.assign(addForm, defaultFormData);
        message.success(data.msg);
        close();
        context.emit('getList');
      });
    };

    return {
      addForm,
      submit,
      props,
      close,
      store,
      characterInfo,
    };
  },
});
