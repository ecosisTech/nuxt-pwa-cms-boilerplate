<script setup lang="ts">
const route = useRoute()

const user = await getUser(route.params.email)
</script>

 <template>
   <div class="pt-24" v-if="user">
     <AdminUserEditor :user="user"/>
   </div>
 </template>
