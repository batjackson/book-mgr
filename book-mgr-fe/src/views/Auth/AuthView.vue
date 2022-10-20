<template>
  <div class="auth">
    <div class="login">
      <div class="title-info">
        <img src="" alt="" />
        <div class="title">图书管理系统</div>
      </div>

      <div class="form">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="登录">
            <a-input size="large" placeholder="账户" class="item">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <a-input size="large" placeholder="密码" class="item">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
            <div class="item">
              <a href="">忘记密码</a>
            </div>
            <div class="item">
              <a-button size="large" type="primary">登录</a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="注册">
            <a-input size="large" placeholder="账户" class="item">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <a-input size="large" placeholder="密码" class="item">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
            <a-input size="large" placeholder="邀请码" class="item">
              <template #prefix>
                <mail-outlined />
              </template>
            </a-input>
            <div class="item">
              <a-button size="large" type="primary">注册</a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/picture/bgp.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .title-info {
    text-align: center;
    .title {
      font-size: 26px;
      font-weight: 700;
      color: rgb(0, 0, 0);
    }
  }
  .form {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    .item {
      margin-bottom: 10px;
    }
    button {
      width: 100%;
    }
  }
}
</style>
