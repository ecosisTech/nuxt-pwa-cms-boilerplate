<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import { useNotificationStore } from '../../../../stores/notifications';

const router = useRouter()

const props = defineProps({
  coupon: {
    type: Object,
    required: true
  }
})

const notificationStore = useNotificationStore()

const coupons = computed(() => {
  return couponsStore.coupons.map((coupon) => coupon.slug);
})

const date = new Date().toISOString().split('T')[0]

const edit = ref(props.coupon || {
  code: '',
  discount: '',
})

const selectedFiles = ref([])
const uploadProgressInfos = ref([])
const newFilesInfos = ref([])

const addNewCoupon = async () => {
  try {
    if (edit.value.code && edit.value.discount) {
      if (!edit.value.id) {
        await addCoupon(edit)
      } else {
        await updateCoupon(edit)
      }
      notificationStore.addNotification({
        type: 'success',
        msg: 'Saved!'
      })
    } else {
      alert('Bitte minimum das Feld "Slug" & "Name" füllen')
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}

const removeCoupon = async () => {
  try {
    await deleteProduct(edit.value.slug)
    await couponsStore.fetchProducts()
    router.push(`/admin/shop/coupons`)
    notificationStore.addNotification({
      type: 'success',
      msg: 'Successfully removed!'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap bg-base-100 rounded rounded-xl shadow">

      <!-- Product infos -->
      <div class="w-full md:w-1/3 p-4">
        <h2 class="font-bold">Coupon Daten</h2>
        <!-- Product ID -->
        <!-- <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <p class="label-text">Product ID</p>
            </label>
            <input type="text" placeholder="Automatisch generiert" class="input input-bordered w-full max-w-md"  v-model="edit.id" disabled/>
          </div>
        </div> -->

        <!-- Product Name -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <p class="label-text">
                Code*
              </p>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md"  v-model="edit.code"/>
          </div>
        </div>

        <!-- Quantity -->
        <div class="">
          <div class="form-control w-full max-w-md">
            <label class="label">
              <p class="label-text">Discount (in %)</p>
            </label>
            <input type="number" placeholder="20" min="1" max="100" class="input input-bordered w-full max-w-md"  v-model="edit.discount"/>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-4 rounded-t rounded-xl">
      <button class="btn btn-success mr-2" @click="addNewCoupon()">Save</button>
      <button class="btn btn-error mr-2" onclick="remove_coupon.showModal()">Remove</button>
      <dialog id="remove_coupon" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Attention!</h3>
          <p class="py-4">Removing this coupon deletes it permanentally!</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-error" @click="removeCoupon()">Remove</button>
              <button class="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

  </div>
</template>
