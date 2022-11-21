import { defineComponent, reactive } from 'vue';

import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { message, Modal,Input } from 'ant-design-vue';
import { result } from '../../helpers/utils';
import { auth, resetPassword } from '../../service';
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
    const forgetPassword = () => {
      Modal.confirm({
        title: '输入账号发起申请，管理员会审核',
        content: (
          <div>
            <Input class="__forget_password_account" />
          </div>
        ),
        onOk: async () => {
          const el = document.querySelector('.__forget_password_account');

          let account = el.value;
          const res = await resetPassword.add(
            account,
          );
          result(res).success(({ msg }) => {
            message.success(msg)
          })
         },
      });
    };
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
      forgetPassword,
    };
  },
});
