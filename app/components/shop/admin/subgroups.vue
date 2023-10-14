<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()

const subgroups = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded m-8 pb-8">
    <div class="flex flex-col justify-center items-center">
      <div class="">
        <button class="btn" onclick="add_subgroup.showModal()">Add</button>
        <dialog id="add_subgroup" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg pb-4">Add a Subgroup</h3>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Group Name</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Group Slogan</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Group Slug</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Banner Image</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Products</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <button class="btn btn-success mt-2" @click="importJSON()">Add</button>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <!-- <div class="">
        <button class="btn" onclick="edit_group.showModal()">Add</button>
        <dialog id="edit_group" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg pb-4">Import Products</h3>
            <textarea class="textarea textarea-bordered w-full h-64" placeholder="JSON Format supported only" v-model="JSON_Data"></textarea>
            <button class="btn btn-success mt-2" @click="importJSON()">Import</button>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div> -->
    </div>
    <table class="table table-xs table-pin-rows table-pin-cols h-3/4">
      <!-- head -->
      <thead>
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
          <th>Parent</th>
          <th>Banner</th>
          <th>Products</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="group in subgroups" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ group['name'] }}</th>
          <th>{{ group['subgroup-id'] }}</th>
          <th>{{ group['slogan'] }}</th>
          <th>{{ group['slug'] }}</th>
          <th>{{ group['parent'] }}</th>
          <th>{{ group['banner'] }}</th>
          <th>{{ group['products'] }}</th>
          <th>
            <button class="btn btn-ghost btn-xs" @click="editGroup(group)">details</button>
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
          <th>Parent</th>
          <th>Slug</th>
          <th>Banner</th>
          <th>Products</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
