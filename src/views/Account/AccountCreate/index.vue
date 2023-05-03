<script setup lang="ts">
import { reactive } from 'vue'
import { postRegister, postLogin } from '@api/apiLogin'
import type { FormInstance } from 'element-plus'

const formLabelAlign = reactive({
  name: '',
  password: '',
  role: '',
  path: ''
})

const handleBasicLogin = (formEl: FormInstance | undefined) => {
  // if (!formEl) return
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!')
  //     return false
  //   }
  // })
  postRegister({
    Username: formLabelAlign.name,
    Password: formLabelAlign.password,
    Role: formLabelAlign.role,
    Path: formLabelAlign.path
  }).then(res=>{
    console.log(res)
  })
}
</script>

<template>
  <div class="account-create">
    <el-form :label-position="'top'" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
      <el-form-item label="您的账户（email/）">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <el-form-item label="权限">
        <el-input v-model="formLabelAlign.role" />
      </el-form-item>
      <el-form-item label="工作路径">
        <el-input v-model="formLabelAlign.path" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleBasicLogin()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.account-create {
  
}
</style>