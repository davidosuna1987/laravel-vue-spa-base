import  router from '@/router/router'

const installPWA = () => {
  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })
}

export { installPWA }