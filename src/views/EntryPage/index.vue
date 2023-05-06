<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { postLogin } from '@api/apiLogin'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const loginData = reactive({
  name: '',
  password: ''
})

const handleBasicLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      isLoginConfirmDialogShow.value = true
      // postLogin({
      //   Username: loginData.name,
      //   Password: loginData.password
      // }).then(res => {
      //   console.log(res)
      // })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const checkName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    return callback(new Error('请输入用户名'))
  }
  callback()
}
const checkPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    return callback(new Error('请设置密码'))
  }
  callback()
}
const rules = reactive<FormRules>({
  name: [{ validator: checkName, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }]
})

const isLoginConfirmDialogShow = ref(false)
const userInfo = reactive({
  name: 'push001',
  role: 'Admin'
})
const handleAccess = () => {
  isLoginConfirmDialogShow.value = false
  router.push({
    name: 'account'
  })
}
</script>

<template>
  <div class="entry-page">
    <div class="dpi-warning">
      为保证正常的使用体验，建议更换大于1280px客户端！
    </div>

    <div class="container">
      <div class="panel">
        <div class="title">
          <div class="main">VsgTool</div>
          <div class="desc">--GPU共享</div>
          <div class="desc">--容器快速构建</div>
          <div class="desc">--团队型可视化训练工具</div>
        </div>
        <div class="operation">
          <div class="operation-tag">
            登录
          </div>
          <el-form :label-position="'top'" label-width="100px" :rules="rules" :model="loginData" ref="formRef"
            style="max-width: 460px">
            <el-form-item label="您的账户（email/）" prop="name">
              <el-input v-model="loginData.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginData.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleBasicLogin(formRef)">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="bg-display"></div>
    </div>

    <el-dialog v-model="isLoginConfirmDialogShow" title="确认您登录的账户" width="35%">
      <el-form-item label="账户：">
        <el-input v-model="userInfo.name" :disabled="true" autocomplete="off" />
      </el-form-item>
      <el-form-item label="权限：">
        <el-input v-model="userInfo.role" :disabled="true" autocomplete="off" />
      </el-form-item>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isLoginConfirmDialogShow = false">取消</el-button>
          <el-button type="primary" @click="handleAccess">
            进入系统
          </el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.entry-page {
  width: 100vw;
  height: 100vh;
  padding: 70px 200px;
  box-sizing: border-box;
  background-color: rgb(63, 61, 86);

  .dpi-warning {
    display: none;
    color: red;
    padding: 8px;
    text-align: center;
    min-width: 500px;
    font-size: 0.8em;
  }

  .container {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    min-width: 500px;
    min-height: 560px;

    .panel {
      flex-basis: 320px;
      height: 100%;
      background-color: rgb(255, 255, 255);

      .title {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-top: 70px;
        min-width: 320px;

        .main {
          font-size: 54px;
          margin-bottom: 25px;
        }

        .desc {
          text-align: right;
          padding: 4px;
          padding-right: 40px;
          color: rgba(56, 55, 55, 0.756);
        }
      }

      .operation {
        margin: 30px;

        &-tag {
          padding: 10px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }

    .bg-display {
      flex: 1;
      height: 100%;
      min-width: 500px;
      background-image: url('@/assets/image/login-display.jpeg');
      background-size: cover;

    }
  }
}

@media screen and (max-width: 1230px) {
  .dpi-warning {
    display: block !important;
  }
}
</style>