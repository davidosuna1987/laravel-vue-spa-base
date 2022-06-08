<template>
  <form class="p-4 lg:w-6 xl:w-4 mx-auto" @submit.prevent="reset">
      <div class="text-center mb-5 mt-8">
          <!-- <img src="/images/pwa/logo.svg" alt="Beffix logo" height="150" class="mb-3 mx-auto"> -->
          <div class="text-3xl mb-2">{{ t('auth.reset') }}</div>
      </div>

      <div>
          <label for="password1" class="block mb-1">{{ t('forms.password') }}</label>
          <InputText v-model="form.password" id="password" type="password" size="small" class="w-full mb-3" />

          <label for="password_confirm1" class="block mb-1">{{ t('forms.password_confirmation') }}</label>
          <InputText v-model="form.password_confirm" id="password_confirm" type="password" class="w-full mb-3" />

          <Button :label="t('auth.reset')" class="w-full" @click.prevent="reset"></Button>
      </div>

      <Toast position="top-center" group="reset" />
  </form>
</template>

<script setup>
  import { API } from '@/modules/axios'

  import { useToast } from "primevue/usetoast"
  import { useUserStore } from "@/stores/user"

  const userStore = useUserStore()

  const router = useRouter()

  const route = useRoute()

  const toast = useToast()

  const { t } = useI18n()

  const form = ref({
    token: '',
    password: '',
    password_confirm: '',
  })

  const reset = async () => {
    await userStore.reset(form.value).then(res => {
      router.push('/login')
    }).catch(err => {
      toast.add({severity:'error', detail:err.response.data.message, life: 30000, group: 'reset'})
    })
  }

  onMounted(() => {
    form.value.token = route.params.token

    const appname = import.meta.env.VITE_APP_NAME

    useHead({
      title: `${appname} | ${t('auth.reset')}`,
      meta: [
        { name: 'description', content: `${appname}` },
      ],
    })
  })
</script>

