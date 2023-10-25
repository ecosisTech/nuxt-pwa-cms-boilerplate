<script setup lang="ts">
import { useClientsStore } from '../../../../stores/clients'

const clientsStore = useClientsStore()

await clientsStore.fetchClients()
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded px-4 py-8">
    <div class="flex flex-col justify-center items-center">
      <div class="">
        <button class="btn" onclick="add_client.showModal()">+ Erstellen</button>
        <dialog id="add_client" class="modal">
            <div class="modal-box md:w-1/3 max-w-5xl">
              <ShopAdminClientsEditor/>
            </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
    <table class="table table-xs table-pin-rows table-pin-cols">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Profilbild</th>
          <th>Anrede</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Straße</th>
          <th>Stadt/Province</th>
          <th>PLZ/ZIP</th>
          <th>E-Mail</th>
          <th>Registriert</th>
          <th>Bestellungen</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- Group Adding Editor -->
        <!-- <tr class="hover:bg-base-200">
          <th>
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Name" />
          </th>
          <th>
            <p class="input input-sm w-full max-w-xs -ml-3">{{ getLatestID() }}</p>
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Slogan" />
          </th>
          <th>
            <input type="text" class="input input-bordered input-sm w-full max-w-xs" placeholder="Slug" />
          </th>
          <th>
            <input type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" />
          </th>
          <th>
            <select class="select select-bordered select-sm w-full max-w-xs" multiple>
              <option disabled selected>Product</option>
              <option v-for="product in productsStore.products">{{ product.name }}</option>
            </select>
          </th>
          <th>
            <select class="select select-bordered select-sm w-full max-w-xs" multiple>
              <option disabled selected>Product</option>
              <option v-for="product in productsStore.products">{{ product.name }}</option>
            </select>
          </th>
          <th>
            <button class="btn btn-ghost btn-xs" @click="">Save</button>
          </th>
        </tr> -->

        <!-- Group List -->
        <tr v-for="client in clientsStore.clients" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="client.picture.thumbnail" />
                </div>
              </div>
            </div>
          </th>
          <th> {{ client.name.title }}</th>
          <th> {{ client.name.first }}</th>
          <th> {{ client.name.last }}</th>
          <th> {{ client.location.street.name }} {{ client.location.street.number }}</th>
          <th> {{ client.location.city }}</th>
          <th> {{ client.location.postcode }}</th>
          <th> {{ client.email }}</th>
          <th class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
          </th>
          <th class="flex flex-wrap justify-center items-center">
            {{ Math.floor(Math.random() * 10) }}
            <button class="btn btn-circle ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </th>
          <th>
            <!-- <button class="btn btn-ghost btn-xs" @click="">Edit</button> -->
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Profilbild</th>
          <th>Anrede</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Straße</th>
          <th>Stadt/Province</th>
          <th>PLZ/ZIP</th>
          <th>E-Mail</th>
          <th>Registriert</th>
          <th>Bestellungen</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
