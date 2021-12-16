<!--<template>-->
<!--  <ag-container>-->
<!--    <ag-header>header</ag-header>-->
<!--    <ag-main>main</ag-main>-->
<!--    <ag-footer>footer</ag-footer>-->
<!--  </ag-container>-->

<!--  <ag-container>-->
<!--    <ag-header>header</ag-header>-->
<!--    <ag-container>-->
<!--      <ag-aside width="200px">aside</ag-aside>-->
<!--      <ag-main>main</ag-main>-->
<!--    </ag-container>-->
<!--  </ag-container>-->
<!--</template>-->
<template>
  <ag-button size="large" type="success">测试</ag-button>
  <ag-form ref="myForm" :model="model" :rules="rules">
    <ag-form-item label='用户名' prop='username'>
      <ag-input v-model="model.username"></ag-input>
    </ag-form-item>
    <ag-form-item label="密码：" prop="password">
      <ag-input v-model="model.password"></ag-input>
    </ag-form-item>
    <ag-form-item>
      <ag-button type="primary" @click="login">登录</ag-button>
    </ag-form-item>
  </ag-form>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { reactive, ref } from 'vue';
import { FormType } from './components/form/type'

// import HelloWorld from './components/HelloWorld.vue'
function sum(a: number, b: number) {
  setTimeout(() => {
    return a + b;
  }, 0)

  sum(10, 10);


}

  const model = reactive({
    username: '',
    password: ''
  })

  const rules = reactive({
    username: [
      {
        required: true,
        message: '请输入用户名'
      }
    ],
    password: [
      {
        required: true,
        message: "请输入密码！",
      }
    ]
  })

const myForm = ref<FormType>();
const login = () => {
  console.log(myForm.value)
  myForm.value?.validate(isValid => {
    if (isValid) {
      console.log(model)
    } else {
      alert('请正确填写表单')
    }
  })
}
</script>

<style>
</style>
