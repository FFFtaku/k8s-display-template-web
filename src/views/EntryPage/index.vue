<script setup lang="ts">
import { reactive } from 'vue'
import type { FormInstance } from 'element-plus'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})

const handleBasicLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
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
          <el-form :label-position="'top'" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="您的账户（email/）">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.region" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleBasicLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="bg-display"></div>
    </div>

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