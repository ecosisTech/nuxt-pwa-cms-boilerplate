// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore();

const { status, data, signOut, signIn } = useAuth()

export const useUserStore = definePiniaStore('user', () => {
  const initialized = ref(false)
  const isAuthenticated = ref(false)
  const isAdmin = ref(false)
  const user = ref([])
  const account = ref({})

  const fetchUser = async () => {
    try {
      const res = await useFetch('/api/user')
      initialized.value = true
      user.value = res.data.value
      if (data.value) {        
        const userData = user.value.find(u => u.email === data.value.user.email)
        if (userData.roles.find(r => r === 'admin')) {
          isAdmin.value = true
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return { user, fetchUser, isAdmin, account }
})
