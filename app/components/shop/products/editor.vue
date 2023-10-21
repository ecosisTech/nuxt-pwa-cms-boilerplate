<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const productsStore = useProductsStore()

const edit = ref(props.product || {
  "image": "",
  "group-id": 1,
  "group-name": "",
  "product-id": Date,
  "brand": "",
  "name": "",
  "property-name": "",
  "property-value": "",
  "color": "",
  "properties": "",
  "selling-price": 0,
  "account": 8400,
  "tax": "19,00 %",
  "buying-price": 0,
  "EAN": "",
  "quantity": 1,
  "featured": false
})
</script>
<template>
  <div class="container mx-auto">
    <form class="flex flex-wrap bg-base-300 rounded rounded-xl">

      <!-- Image -->
      <div class="w-full md:w-1/3">
        <div class="">
          <img class="w-full" :src="`/uploads/shop/products/${(product.images[0]) ? product.images[0] : 'product-placeholder.png'}`" onclick="my_modal_1.showModal()">
          <button class="btn m-2 w-full" onclick="my_modal_1.showModal()">Neues Produkt Bild</button>
          <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Pick an image file</span>
                  <span class="label-text-alt">Upload</span>
                </label>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
                <label class="label">
                  <span class="label-text-alt">Resolution: 600x600px</span>
                </label>
              </div>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn btn-success">Upload</button>
                  <button class="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>

          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <!-- <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th> -->
                  <th>Bild</th>
                  <th>Dateipfad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="image in product.images">
                  <!-- <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th> -->
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img :src="`/uploads/shop/products/${image}`" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ image }}
                  </td>
                  <th>
                    <button class="btn btn-error btn-circle btn-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </th>
                </tr>
              </tbody>
              <!-- foot -->
              <tfoot>
                <tr>
                  <!-- <th></th> -->
                  <th>Bild</th>
                  <th>Dateiname</th>
                  <th></th>
                </tr>
              </tfoot>

            </table>
          </div>
        </div>
      </div>

      <!-- Product infos -->
      <div class="w-full md:w-1/3 bg-base-300 rounded p-4">
        <h2 class="font-bold">Meta Daten</h2>
        <!-- Product ID -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Product ID</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['product-id']" disabled/>
          </div>
        </div>

        <!-- Product Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['name']"/>
          </div>
        </div>

        <!-- Quantity -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Quantity</span>
            </label>
            <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['quantity']"/>
          </div>
        </div>

        <!-- Brand -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Brand</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['brand']"/>
          </div>
        </div>

        <!-- Group Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Warengruppe</span>
            </label>
            <select class="select select-bordered w-full max-w-md" v-model="edit['group-name']">
              <option selected>{{ edit['group-name'] }}</option>
              <option v-for="group in productsStore.groups">{{ group.name }}</option>
            </select>
          </div>
        </div>

        <!-- Subgroup Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Unterkategorie</span>
            </label>
            <select class="select select-bordered w-full max-w-md" v-model="edit['subgroup-name']">
              <option selected>{{ edit['subgroup-name'] }}</option>
              <option v-for="subgroup in productsStore.subgroups">{{ subgroup }}</option>
            </select>
          </div>
        </div>

        <!-- Prices -->
        <div class="flex flex-wrap">
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Selling Price (in EUR)</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['selling-price']"/>
            </div>
          </div>
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Buying Price (in EUR)</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['buying-price']"/>
            </div>
          </div>
        </div>

        <!-- Product EAN -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">EAN</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['EAN']"/>
          </div>
        </div>

        <div class="flex flex-warp">
          <!-- Account Tax-->
          <div class="">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Tax</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['tax']"/>
            </div>
          </div>

          <!-- Account ID -->
          <div class="">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Account</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"  v-model="edit['account']"/>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 bg-base-300 rounded p-4 flex flex-col p-4">
        <!-- Product Details -->
        <div class="">
          <h3 class="font-bold">Produkt Daten</h3>
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Beschreibung</span>
            </label>
            <textarea class="textarea textarea-bordered w-full h-64" placeholder="Produkt Beschreibung" v-model="edit['description']"></textarea>
          </div>
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Fakten</span>
              </label>
              <textarea class="textarea textarea-bordered w-full h-32" placeholder="Produkt Beschreibung" v-model="edit['facts']"></textarea>
            </div>
          </div>
        </div>

        <!-- Property Meta -->
        <div class="pt-4">
          <h3 class="font-bold">Eigenschaften</h3>
          <div class="form-control w-full max-w-md">
            <label class="label">
              <span class="label-text">Eigenschafts Name</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['property-name']"/>
          </div>
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Eigenschafts Wert</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['property-value']"/>
            </div>
          </div>
          <div class="">
            <div class="form-control w-full max-w-md">
              <label class="label">
                <span class="label-text">Weitere Eigenschaften</span>
              </label>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit['properties']"/>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full p-8 bg-base-300">
        <!-- Featured -->
        <div class="">
          <div class="form-control w-16">
            <div class="form-control">
              <label class="label cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox"  v-model="edit['featured']"/>
                <span class="label-text pl-2">Featured</span>
              </label>
            </div>
          </div>
        </div>
        <button class="btn btn-success mr-2" @click="productsStore.updateProduct(edit)">Save</button>
        <button class="btn btn-error mr-2" onclick="my_modal_5.showModal()">Remove</button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Attention!</h3>
            <p class="py-4">Removing this product deletes it permanentally!</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-error" @click="productsStore.removeProduct(edit)">Remove</button>
                <button class="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
        <button class="btn" @click="router.push(`/shop/product/${edit['product-id']}`)">View</button>
      </div>
    </form>

  </div>
</template>
