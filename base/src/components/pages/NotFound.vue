<template>
  <section class="app-not-found">
    <h1 class="text-gradient-0 fw-700">404</h1>
    <p class="fz-3">{{t('forms.page_not_found')}}</p>
  </section>
</template>

<script setup>
  // import { sketch } from '@/modules/sketch'

  const { t } = useI18n()

  onMounted(() => {
    // sketch(document.querySelector('.app-not-found'), false)
  })
</script>

<style scoped lang="scss">
  .app-not-found{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
    width: 100vw;
  }
</style>