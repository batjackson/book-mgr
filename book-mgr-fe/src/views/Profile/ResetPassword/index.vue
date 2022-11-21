<template>
  <a-card>
      <a-form :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="原始密码">
          <a-input type="password" v-model:value="resetPasswordForm.oldPassword"></a-input>
        </a-form-item>
        <a-form-item label="新密码">
          <a-input type="password" v-model:value="resetPasswordForm.newPassword"></a-input>
        </a-form-item>
        <a-form-item label="确认新密码">
          <a-input type="password" v-model:value="resetPasswordForm.confirmNewPassword"></a-input>
          <br />
          <div style="margin-top: 24px">
            <a-button type="primary" @click="resetPassword">修改</a-button>
          </div>
        </a-form-item>
      </a-form>
    </a-card>
</template>
<script src="./index.js"></script>
