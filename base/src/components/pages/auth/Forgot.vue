<template>
  <form class="p-4 lg:w-6 xl:w-4 mx-auto" @submit.prevent="forgot">
      <div class="text-center mb-5 mt-8">
          <!-- <img src="/images/pwa/logo.svg" alt="Beffix logo" height="150" class="mb-3 mx-auto"> -->
          <div class="text-3xl mb-2">{{ t('auth.forgot') }}</div>
      </div>

      <div>
          <label for="email1" class="block mb-1">{{ t('forms.email') }}</label>
          <InputText v-model="form.email" id="email1" type="text" class="w-full mb-3" />

          <Button :label="t('forms.submit')" class="w-full" @click.prevent="forgot"></Button>
      </div>

      <Toast position="top-center" group="forgot" />
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
    email: '',
  })

  const forgot = async () => {
    await userStore.forgot(form.value).then(res => {
      router.push('/')
    }).catch(err => {
      toast.add({severity:'error', detail:err.response.data.message, life: 30000, group: 'forgot'})
    })
  }

  onMounted(() => {
    const appname = import.meta.env.VITE_APP_NAME

    useHead({
      title: `${appname} | ${t('auth.forgot')}`,
      meta: [
        { name: 'description', content: `${appname}` },
      ],
    })
  })


</script>

