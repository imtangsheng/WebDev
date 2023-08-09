<template>
  <form @submit.prevent="onLogin">
    <input v-model="username">
    <input v-model="password" type="password">  
    <button>登录</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const onLogin = () => {
  // 验证逻辑
  router.push('/users') 
}
</script>