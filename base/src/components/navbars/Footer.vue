<template>
  <nav class="app-footer">
    <router-link to="/">Home</router-link>
    <a v-if="userStore.user" href="#" @click.prevent="logout">{{ t('auth.logout') }}</a>
    <template v-else>
      <router-link to="/login">{{ t('auth.login') }}</router-link>
      <router-link to="/register">{{ t('auth.register') }}</router-link>
    </template>
  </nav>
</template>

<script setup>
  import { useUserStore } from '@/stores/user'

  const userStore = useUserStore()

  const router = useRouter()

  const { t } = useI18n()

  const logout = async () => {
    await userStore.logout()
    router.push('/')
  }
</script>