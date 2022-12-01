<script>
  export default {
    props: { customer: Object, index: Number },
  }
</script>
<template>
  <tr class="border border-slate-300">
    <td class="p-3 font-bold">{{index}}</td>
    <td class="p-3">{{customer.name}}</td>
    <td class="p-3">{{ customer.phoneNumber }}</td>
    <td class="p-3">{{customer.email}}</td>
    <td class="p-3">{{customer.address}}</td>
    <td class="p-3">{{customer.discount}}</td>
    <td class="p-3">{{customer.discType}}</td>
    <td class="p-3"><img :src="customer.imgKtp" class="w-30 h-20" alt=""></td>
    <td class="p-3">
      <button class="px-4 py-2 bg-emerald-600 rounded-xl text-white mr-2">Edit</button>
      <button @click="deleteProduct(item.id)" class="px-4 py-2 bg-red-600 rounded-xl text-white">Delete</button>
    </td>
  </tr>
</template>