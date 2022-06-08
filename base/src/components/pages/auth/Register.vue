<template>
  <form class="p-4 lg:w-6 xl:w-4 mx-auto" @submit.prevent="register">
      <div class="text-center mb-5 mt-8">
          <!-- <img src="/images/pwa/logo.svg" alt="Beffix logo" height="150" class="mb-3 mx-auto"> -->
          <div class="text-3xl mb-2">{{ t('auth.register') }}</div>
      </div>

      <div>
          <label for="first_name1" class="block mb-1">{{ t('forms.name') }}</label>
          <InputText v-model="form.first_name" id="first_name" type="text" class="w-full mb-3" />

          <label for="last_name1" class="block mb-1">{{ t('forms.surnames') }}</label>
          <InputText v-model="form.last_name" id="last_name" type="text" class="w-full mb-3" />

          <label for="email1" class="block mb-1">{{ t('forms.email') }}</label>
          <InputText v-model="form.email" id="email" type="text" class="w-full mb-3" />

          <label for="password1" class="block mb-1">{{ t('forms.password') }}</label>
          <InputText v-model="form.password" id="password" type="password" class="w-full mb-3" />

          <label for="password_confirm1" class="block mb-1">{{ t('forms.password_confirmation') }}</label>
          <InputText v-model="form.password_confirm" id="password_confirm" type="password" class="w-full mb-3" />

          <Button :label="t('auth.register')" class="w-full" @click.prevent="register"></Button>

          <Toast position="top-center" group="register" />
      </div>
  </form>
</template>

<script setup>
  import { API } from '@/modules/axios'

  import { useToast } from "primevue/usetoast"
  import { useUserStore } from "@/stores/user"

  const userStore = useUserStore()

  const router = useRouter()

  const toast = useToast()

  const { t } = useI18n()

  const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: '',
  })

  const register = async () => {
    await userStore.register(form.value).then(res => {
      router.push('/')
    }).catch(err => {
      toast.add({severity:'error', detail:err.response.data.message, life: 30000, group: 'register'})
    })
  }

  onMounted(() => {
    const appname = import.meta.env.VITE_APP_NAME

    useHead({
      title: `${appname} | ${t('auth.register')}`,
      meta: [
        { name: 'description', content: `${appname}` },
      ],
    })
  })

</script>

