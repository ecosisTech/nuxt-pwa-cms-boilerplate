<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useUserStore } from '../../../stores/user'

const userStore = useUserStore()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const newUserData = ref(props.user || {
  email: '',
  password: '',
  username: '',
  roles: []
})

const passwordRepeat = ref('')

const registerUser = async () => {
  try {
    if (newUserData.password === passwordRepeat) {
      await addUser(newUserData.value)
      const userStore = useUserStore()
      await userStore.fetchUser()
    } else {
      alert('Passwort nicht gleich!')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="">
    <h3 class="font-bold text-lg pb-4">Neuen User hinzufügen</h3>

    <!-- E_Mail Address -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">E-Mail*</span>
      </label>
      <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" v-model="newUserData.email"/>
    </div>

    <!-- Password -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort*</span>
      </label>
      <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" v-model="newUserData.password"/>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Passwort Wiederholung*</span>
      </label>
      <input type="text" placeholder="Passwort Wiederholung" class="input input-bordered w-full max-w-xs" v-model="passwordRepeat"/>
    </div>

    <!-- Username -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="text" placeholder="Username" class="input input-bordered w-full max-w-xs" v-model="newUserData.username"/>
    </div>

    <!-- Roles -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Roles</span>
      </label>
      <input type="text" placeholder="Roles" class="input input-bordered w-full max-w-xs" v-model="newUserData.roles[0]"/>
    </div>
    <button class="btn btn-success mt-2" @click="addUser(newUserData)">Erstellen</button>
  </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
