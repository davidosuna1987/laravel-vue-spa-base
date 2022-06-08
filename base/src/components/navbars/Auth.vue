<template>
  <nav class="app-navbar">
    <div class="app-navbar__srtar">
      <img class="" src="/images/pwa/logo.svg" alt="Beffix logo" width="50">
    </div>

    <div class="app-navbar__items">
      <router-link class="app-navbar__item" to="/">Home</router-link>
    </div>

    <div class="app-navbar__end">
      <a v-if="userStore.user" class="app-navbar__item p-button p-button-outlined py-2" href="#" @click.prevent="logout">{{ t('auth.logout') }}</a>
      <template v-else>
        <router-link class="app-navbar__item p-button p-button-outlined py-2 mx-2" to="/login">{{ t('auth.login') }}</router-link>
        <router-link class="app-navbar__item p-button p-button-outlined py-2" to="/register">{{ t('auth.register') }}</router-link>
      </template>
    </div>
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