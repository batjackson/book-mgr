<template>
  <div class="basic-layout">
    <div style="height: 64px"></div>
    <div class="app-header">
      <div class="left-title">
        <img src="../../assets/picture/logo.svg" alt="" />
        <div class="title">图书管理系统</div>
      </div>
      <div class="right-title">
        <div class="hello-msg">你好 xxx</div>
        <div class="logout" @click="logout">退出</div>
      </div>
    </div>
    <div class="app-content">
      <div class="left"><Nav /></div>
      <div class="right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { setToken } from '@/helpers/token';
import Nav from './Nav';
export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    const logout = () => {
      setToken('');
      window.location.href = '/'
    };
    return {
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.basic-layout {
  .app-header {
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    z-index: 1;
    .left-title {
      display: flex;
      align-items: center;
      img {
        height: 50px;
        margin-right: 16px;
      }
      .title {
        font-size: 18px;
        font-weight: 700;
      }
    }
    .right-title {
      display: flex;
      align-items: center;
      height: 64px;
      line-height: 64px;
      .logout {
        width: 80px;
        text-align: center;
        margin-left: 16px;
        &:hover {
          background-color: #eee;
          cursor: pointer;
        }
      }
    }
  }
  .app-content {
    display: flex;
    .left {
      width: 256px;
      background-color: #fafafa;
      position: fixed;
      top: 64px;
      bottom: 0;
    }
    .right {
      flex: 1;
      padding: 24px;
      margin-left: 256px;
    }
  }
}
</style>
