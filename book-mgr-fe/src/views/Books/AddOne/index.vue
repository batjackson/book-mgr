<template>
  <div>
    <a-modal title="添加书籍" :visible="props.show" @ok="submit" @cancel="close">
      <a-form :label-col="{ span: 6 }">
        <a-form-item label="书名">
          <a-input v-model:value="addForm.name"></a-input>
        </a-form-item>
        <a-form-item label="价格">
          <a-input-number :min="0" :max="999999" v-model:value="addForm.price"></a-input-number>
        </a-form-item>
        <a-form-item label="作者">
          <a-input v-model:value="addForm.author"></a-input>
        </a-form-item>
        <a-form-item label="出版日期">
          <a-date-picker v-model:value="addForm.publishDate"></a-date-picker>
        </a-form-item>
        <a-form-item label="分类">
          <a-input v-model:value="addForm.classify"></a-input>
        </a-form-item>
        <a-form-item label="库存">
          <a-input v-model:value="addForm.count"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script src="./index.js">
// import { defineComponent, reactive, ref } from 'vue';
// import { book } from '@/service';
// import { result, clone } from '@/helpers/utils';
// import { message } from 'ant-design-vue';
// export default defineComponent({
//   props: {
//     show: Boolean,
//   },
//   setup(props, context) {
//     const defaultFormData = {
//       name: '',
//       price: 0,
//       author: '',
//       publishDate: 0,
//       classify: '',
//       count: '',
//     };
//     const addForm = reactive(clone(defaultFormData));
//     const submit = async () => {
//       // console.log(addForm);
//       const form = clone(addForm);
//       form.publishDate = addForm.publishDate.valueOf();
//       const res = await book.add(form);

//       result(res).success((d, { data }) => {
//         Object.assign(addForm, defaultFormData);
//         message.success(data.msg);
//       });
//     };
//     const close = () => {
//       // context.emit('setShow', false);
//       context.emit('update:show', false);
//     };
//     return {
//       addForm,
//       submit,
//       props,
//       close,
//     };
//   },
// });
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
