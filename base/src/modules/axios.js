import axios from 'axios'

import { useUserStore } from "@/stores/user"



const API = axios.create({
    baseURL: 'https://api.binobi.test/',
})

API.interceptors.request.use((config) => {
  const userStore = useUserStore()
  config.headers.common.Authorization = 'Bearer ' + userStore.token
  return config
})

export { API }
