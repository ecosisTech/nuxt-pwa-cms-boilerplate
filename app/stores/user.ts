// import { useNotificationStore } from './notifications';

// const notificationStore = useNotificationStore();

export const useUserStore = definePiniaStore('user', () => {
  const isAuthenticated = ref(true)
  const isAdmin = ref(true)
  const user = ref('')

  // const userMail = localStorage.getItem('user_mail')
  //
  // if (userMail) {
  //   user.value = userMail
  //   isAuthenticated.value = true
  // }

  async function register(email: string, password: string) {
    try {
      await useFetch('/api/signup', {
        method: 'POST',
        body: {
          email,
          password
        }
      })
      // localStorage.setItem('user_mail', mail)
      user.value = email
      isAuthenticated.value = true
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // });
      } else {
        console.log(error)
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // });
      }
    }
  }

  async function login(email: string, password?: string) {
    try {
      // await useFetch('/api/signin', {
      //   method: 'POST',
      //   body: {
      //     email,
      //     password
      //   }
      // })
      // localStorage.setItem('user_mail', mail)
      user.value = email
      isAuthenticated.value = true
      isAdmin.value = true
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // })
      } else {
        console.log(error)
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // });
      }
    }
  }

  function logout(wallet) {
    // localStorage.removeItem('user_mail')
    isAuthenticated.value = false
    isAdmin.value = false
  }

  async function updatePassword(newPassword: string, oldPassword: string) {
    try {
      await useFetch('/api/password', {
        method: 'POST',
        body: {
          email
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error.message
        // })
      } else {
        console.log(error);
        // notificationStore.addNotification({
        //   type: 'error',
        //   msg: error
        // })
      }
    }
  }

  return { isAuthenticated, isAdmin, user, register, login, logout, updatePassword }
})
