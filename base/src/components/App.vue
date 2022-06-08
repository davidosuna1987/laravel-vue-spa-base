<template>
  <AuthNavbar />
  <main class="app-main">
    <div class="app-main__content">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<script setup>
  import AuthNavbar from '@/components/navbars/Auth.vue'
  import Footer from '@/components/navbars/Footer.vue'

  onMounted(() => {
    const appname = import.meta.env.VITE_APP_NAME

    useHead({
      title: `${appname}`,
      meta: [
        { name: 'description', content: `${appname}` },
      ],
    })
  })
</script>
