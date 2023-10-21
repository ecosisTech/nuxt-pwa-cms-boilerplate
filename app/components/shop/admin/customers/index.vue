<script setup lang="ts">
import { useClientsStore } from '../../../../stores/clients'

const clientsStore = useClientsStore()
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded mx-8 pb-8">
    <div class="flex flex-col justify-center items-center">
      <div class="">
        <button class="btn" onclick="add_client.showModal()" disabled>+ Erstellen</button>
        <dialog id="add_client" class="modal">
          <div class="modal-box w-11/12 max-w-5xl h-11/12 max-h-5xl">
            <h3 class="font-bold text-lg pb-4">Neuen Kunden hinzufügen</h3>

            <!-- First Name -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Vorname</span>
              </label>
              <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" />
            </div>

            <!-- Last Name -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Nachname</span>
              </label>
              <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" />
            </div>

            <!-- Last Name -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">E-Mail-Adresse</span>
              </label>
              <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
            </div>
          </div>

          <div class="flex flex-col pr-4">
            <!-- Street -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Straße</span>
              </label>
              <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" />
            </div>

            <!-- City Province -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Ort</span>
              </label>
              <input type="text" placeholder="Ort" class="input input-bordered w-full max-w-xs" />
            </div>

            <!-- Postal -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">PLZ oder ZIP Code</span>
              </label>
              <input type="text" placeholder="PLZ/ZIP" class="input input-bordered w-full max-w-xsfull" />
            </div>

            <!-- State -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Land/Staat</span>
              </label>
              <input type="text" placeholder="Lad/Staat" class="input input-bordered w-full max-w-xs" />
            </div>

            <button class="btn btn-success mt-2" @click="">Add</button>
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
          <th>Name</th>
          <th>ID</th>
          <th>Slogan</th>
          <th>Slug</th>
          <th>Banner</th>
          <th>Products</th>
          <th>Subgroups</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
