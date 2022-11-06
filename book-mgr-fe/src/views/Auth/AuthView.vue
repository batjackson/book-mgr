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
            <a-input size="large" placeholder="账户" class="item" v-model:value="loginForm.account">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <a-input
              size="large"
              placeholder="密码"
              class="item"
              v-model:value="loginForm.password"
            >
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
            <div class="item">
              <a href="">忘记密码</a>
            </div>
            <div class="item">
              <a-button size="large" type="primary" @click="login">登录</a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="注册">
            <a-input size="large" placeholder="账户" class="item" v-model:value="regForm.account">
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
            <a-input size="large" placeholder="密码" class="item" v-model:value="regForm.password">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
            <a-input
              size="large"
              placeholder="邀请码"
              class="item"
              v-model:value="regForm.inviteCode"
            >
              <template #prefix>
                <mail-outlined />
              </template>
            </a-input>
            <div class="item">
              <a-button size="large" type="primary" @click="register">注册</a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { result } from '../../helpers/utils';
import { auth } from '../../service';
import store from '@/store';
import { getCharacterInfoById } from '@/helpers/character';
import { useRouter } from 'vue-router';
import { setToken } from '@/helpers/token';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    message,
  },
  setup() {
    const router = useRouter();

    // 注册表单数据
    const regForm = reactive({
      account: '',
      password: '',
      inviteCode: '',
    });
    // 注册逻辑
    const register = async () => {
      console.log(regForm);
      if (regForm.account === '') {
        message.info('账户不能为空');
        return;
      }
      if (regForm.password === '') {
        message.info('密码不能为空');
        return;
      }
      if (regForm.inviteCode === '') {
        message.info('请输入邀请码');
        return;
      }

      const res = await auth.register(regForm.account, regForm.password, regForm.inviteCode);
      result(res).success((data) => {
        message.success(data.msg);
      });
    };

    // 登录表单数据
    const loginForm = reactive({
      account: '',
      password: '',
    });
    // 登录逻辑
    const login = async () => {
      // if (loginForm.account === '') {
      //   message.info('账户不能为空');
      // }
      // if (loginForm.password === '') {
      //   message.info('密码不能为空');
      // }
      const res = await auth.login(loginForm.account, loginForm.password);

      result(res).success(({ msg, data: { user, token } }) => {
        message.success(msg);
        store.commit('setUserInfo', user);
        store.commit('setUserCharacter', getCharacterInfoById(user.character));
        // 存储token到浏览器
        setToken(token);
        // 跳转页面
        router.replace('/books');
      });
    };
    return {
      // 注册相关数据
      regForm,
      register,

      // 登录相关数据
      loginForm,
      login,
    };
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
