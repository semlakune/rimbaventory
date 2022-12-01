<script>
  import CustomerList from "@/components/CustomerList.vue";
  import {mapActions, mapWritableState} from "pinia";
  import {useInventoryStore} from "@/stores/inventory";
  export default {
    components: {CustomerList},
    computed: {
      ...mapWritableState(useInventoryStore, ["customers"]),
    },
    methods: {
      ...mapActions(useInventoryStore, ["fetchCustomers"]),
    },
    created() {
      this.fetchCustomers();
      console.log(this.customers)
    },
  }
</script>
<template>
  <div class="mx-auto px-8 w-full">
    <table class="border table-auto w-full text-left mt-10">
      <thead>
      <tr class="border border-slate-300 bg-slate-200">
        <th class="p-3">No</th>
        <th class="p-3">Name</th>
        <th class="p-3">Phone Number</th>
        <th class="p-3">Email</th>
        <th class="p-3">Address</th>
        <th class="p-3">Discount</th>
        <th class="p-3">Discount Type</th>
        <th class="p-3">ID Card</th>
        <th class="p-3">Action</th>
      </tr>
      </thead>
      <tbody>
        <CustomerList v-for="(customer, index) in customers" :key="index" :index="index + 1" :customer="customer" />
      </tbody>
    </table>
  </div>
</template>