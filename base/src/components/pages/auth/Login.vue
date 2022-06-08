<template>
  <form class="p-4 lg:w-6 xl:w-4 mx-auto" @submit.prevent="login">
      <div class="text-center mb-5 mt-8">
          <!-- <img src="/images/pwa/logo.svg" alt="Beffix logo" height="150" class="mb-3 mx-auto"> -->
          <div class="text-3xl mb-2">{{ t('auth.welcome') }}</div>
      </div>

      <div>
          <label for="email1" class="block mb-1">{{ t('forms.email') }}</label>
          <InputText v-model="form.email" id="email1" type="text" class="w-full mb-3" />

          <label for="password1" class="block mb-1">{{ t('forms.password') }}</label>
          <InputText v-model="form.password" id="password1" type="password" class="w-full mb-3" />

          <div class="flex align-items-center justify-content-between mb-6">
              <div class="flex align-items-center">
                  <Checkbox id="rememberme1" :binary="true" v-model="form.remember" class="mr-2"></Checkbox>
                  <label for="rememberme1" class="font-light">{{ t('auth.remember') }}</label>
              </div>
              <router-link to="/forgot" class="font-light no-underline ml-2 text-bluegray-300 text-right cursor-pointer">{{ t('auth.forgot') }}</router-link>
          </div>

          <Button :label="t('auth.login')" class="w-full" @click.prevent="login"></Button>
      </div>

      <Toast position="top-center" group="login" />
  </form>
</template>

<script setup>
  import { API } from '@/modules/axios'

  import { useToast } from "primevue/usetoast"
  import { useUserStore } from "@/stores/user"
  import { useHead } from '@vueuse/head'

  const userStore = useUserStore()

  const router = useRouter()

  const toast = useToast()

  const { t } = useI18n()

  const form = ref({
    email: '',
    password: '',
    remember: false,
  })

  const login = async () => {
    await userStore.login(form.value).then(res => {
      router.push('/')
    }).catch(err => {
      toast.add({severity:'error', detail:err.response.data.message, life: 30000, group: 'login'})
    })
  }

  onMounted(() => {
    const appname = import.meta.env.VITE_APP_NAME

    useHead({
      title: `${appname} | ${t('auth.login')}`,
      meta: [
        { name: 'description', content: `${appname}` },
      ],
    })
  })


</script>

