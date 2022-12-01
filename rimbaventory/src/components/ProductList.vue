<script>
  import {mapActions} from "pinia";
  import {useInventoryStore} from "@/stores/inventory";

  export default {
    props: { item: Object, index: Number },
    methods: {
      ...mapActions(useInventoryStore, ["deleteProduct"]),

    }
  }
</script>
<template>
  <tr class="border border-slate-300">
    <td class="p-3 font-bold">{{index}}</td>
    <td class="p-3">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-24 w-24 rounded-full" :src="item.img" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{item.name}}</div>
        </div>
      </div>
    </td>
    <td class="p-3">{{item.price}}</td>
    <td class="p-3">{{ item.stock }}</td>
    <td class="p-3">{{item.unit}}</td>
    <td class="p-3">
      <button class="px-4 py-2 bg-emerald-600 rounded-xl text-white mr-2">Edit</button>
      <button @click="deleteProduct(item.id)" class="px-4 py-2 bg-red-600 rounded-xl text-white">Delete</button>
    </td>
  </tr>
</template>