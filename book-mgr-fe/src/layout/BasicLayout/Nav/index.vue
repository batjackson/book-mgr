<template>
  <div>
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 100%"
      mode="inline"
      v-for="item in menu"
      :key="item.url"
      v-only-admin="item.onlyAdmin"
    >
      <a-sub-menu v-if="item.children">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>{{ item.title }}</template>
      </a-sub-menu>
      <a-menu-item @click="to(item.url)" :key="item.url" v-else>
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import menu from '@/config/menu';
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();

    const openKeys = ref([]);
    const selectedKeys = ref([]);

    const route = useRoute();
    onMounted(() => {
      selectedKeys.value = [route.path];
    });

    const to = (url) => {
      router.push(url);
    };

    return {
      openKeys,
      selectedKeys,
      menu,
      to,
    };
  },
});
</script>

<style lang="scss" scoped></style>
