<script setup lang="ts">
import { reactive, ref } from 'vue'
import { postRegister } from '@api/apiLogin'
import PageHeader from '@components/PageHeader/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, Action, FormRules } from 'element-plus'
import path from "path-browserify";


const formData = reactive({
  name: '',
  password: '',
  confirmPass: '',
  role: 'User',
  path: ''
})
const formRef = ref<FormInstance>()

const openConfirm = () => {
  ElMessageBox.alert('请确认是否要创建新账户', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showCancelButton: true,
    callback: (action: Action) => {
      if (action === 'confirm') {
        doRegister()
      }
    }
  })
}

const doRegister = () => {
  postRegister({
    Username: formData.name,
    Password: formData.password,
    Role: formData.role,
    Path: formData.path
  }).then(res => {
    ElMessage({
      type: 'success',
      message: '创建成功！'
    })
  }).catch((err) => {
    ElMessage({
      type: 'error',
      message: err
    })
  })
}

const handleRegister = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      openConfirm()

    } else {
      console.log('error submit!')
      return false
    }
  })
}

const checkName = (rule: any, value: any, callback: any) => {
  if (value === ''){
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
const checkConfirmPass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    return callback(new Error('请确认密码'))
  }
  if (value !== formData.password){
    return callback(new Error('请输入正确的密码'))
  }
  callback()
}
const checkPath = (rule: any, value: any, callback: any) => {
  if(value === ''){
    return callback(new Error('请设置工作路径'))
  }
  if(!path.isAbsolute(value)){
    return callback(new Error('工作路径必须为合法的绝对路径'))
  }
  callback()
}

const rules = reactive<FormRules>({
  name: [{ validator: checkName, trigger: 'blur' }],
  password: [{ validator: checkPassword, trigger: 'blur' }],
  confirmPass: [{ validator: checkConfirmPass, trigger: 'blur' }],
  path: [{ validator: checkPath, trigger: 'blur' }],
})



</script>

<template>
  <div class="account-create">
    <div class="page-header-box">
      <PageHeader title="创建账户"></PageHeader>
    </div>
    <el-form ref="formRef" :label-position="'top'" label-width="100px" :model="formData" :rules="rules"
      style="max-width: 460px">
      <el-form-item label="您的账户（email/）" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPass">
        <el-input v-model="formData.confirmPass" />
      </el-form-item>
      <el-form-item label="权限">
        <el-input v-model="formData.role" :disabled="true" />
      </el-form-item>
      <el-form-item label="工作路径" prop="path">
        <el-input v-model="formData.path" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister(formRef)">创建账户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.account-create {
  padding: 30px;
  padding-top: 10px;

  .page-header-box {
    margin-bottom: 20px;


  }

  .el-button {
    margin-top: 20px;
    display: block;
    width: 100%;
    height: 40px;
  }
}
</style>