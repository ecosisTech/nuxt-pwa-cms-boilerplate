<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useClientsStore } from '../../../../stores/clients'

const clientsStore = useClientsStore()

const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})

const newClientData = ref(props.client || {
  title: '',
  firstname: '',
  lastname: '',
  email: '',
  street: '',
  number: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
})

const passwordRepeat = ref('')

const addClient = async () => {
  try {
    if (newClientData.value.email) {
      if (!newClientData.value.id) {
        await addClient(newClientData)
      } else {
        await updateClient(newClientData)
      }
      await clientsStore.fetchClients()
      router.push(`/shop/product/${newClientData.value.slug}`)
    } else {
      alert('Bitte die E-Mail-Adresse eintragen')
    }
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div class="w-full">
    <h3 class="font-bold text-lg pb-4">Neuen Kunden hinzufügen</h3>
    <div class="flex flex-wrap justify-center">
      <div class="flex flex-col bg-base-200 rounded rounded-xl m-2 p-4">
        <!-- Title -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Anrede</span>
          </label>
          <input type="text" placeholder="Anrede" class="input input-bordered w-full max-w-xs" v-model="newClientData.title"/>
        </div>

        <!-- Firstname -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Vorname*</span>
          </label>
          <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" v-model="newClientData.firstname"/>
        </div>

        <!-- Surname -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Nachname*</span>
          </label>
          <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" v-model="newClientData.lastname"/>
        </div>

        <!-- E-Mail -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">E-Mail*</span>
          </label>
          <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" v-model="newClientData.email"/>
        </div>
      </div>

      <div class="flex flex-col bg-base-200 rounded rounded-xl m-2 p-4">
        <!-- Street -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Straße</span>
          </label>
          <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" v-model="newClientData.street"/>
        </div>

        <!-- Number -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Hausnummer</span>
          </label>
          <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" v-model="newClientData.number"/>
        </div>

        <!-- City -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Stadt</span>
          </label>
          <input type="text" placeholder="Stadt" class="input input-bordered w-full max-w-xs" v-model="newClientData.city"/>
        </div>

        <!-- State -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Land</span>
          </label>
          <input type="text" placeholder="Land" class="input input-bordered w-full max-w-xs" v-model="newClientData.state"/>
        </div>

        <!-- Postal Code -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">PLZ</span>
          </label>
          <input type="text" placeholder="PLZ" class="input input-bordered w-full max-w-xs" v-model="newClientData.postalCode"/>
        </div>

        <!-- Country -->
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Land</span>
          </label>
          <input type="text" placeholder="Land" class="input input-bordered w-full max-w-xs" v-model="newClientData.country"/>
        </div>
      </div>
    </div>

    <button class="btn btn-success mt-2" @click="addClient(newClientData)">Erstellen</button>
  </div>
</template>
