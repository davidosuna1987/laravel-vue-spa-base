import { defineStore } from 'pinia'
import { API } from '@/modules/axios'
import { useToast } from "primevue/usetoast"

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: null,
      token: null,
      roles: [],
      permissions: [],
    }
  },

  persist: true,

  getters: {
    fullname(state) {
      if(!state.user?.last_name) return state.user?.first_name
      return state.user?.first_name + ' ' + state.user?.last_name
    }
  },

  actions: {
    async login(credentials) {
      const res = await API.post('login', credentials)
      this.user = res.data.user
      this.token = res.data.token
      this.roles = res.data.roles
      this.permissions = res.data.permissions
    },

    async register(credentials) {
      await API.post('register', credentials)
    },

    async forgot(credentials) {
      await API.post('forgot', credentials)
    },

    async reset(credentials) {
      await API.post('reset', credentials)
    },

    async logout() {
      await API.post('logout')
      this.$reset()
    },

    async getRoles() {
      const res = await API.get('authuser/roles')
      this.roles = res.data
    },

    async getPermissions() {
      const res = await API.get('authuser/permissions')
      this.permissions = res.data
    },
  },
})