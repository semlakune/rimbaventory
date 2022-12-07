<script>
import {useInventoryStore} from "@/stores/inventory";
import {mapActions, mapWritableState} from "pinia";
import ProductList from "@/components/ProductList.vue";

export default {
  data() {
    return {
      showModal: false,
      name: "",
      unit: "",
      stock: "",
      price: "",
      img: "",
    };
  },
  components: {ProductList},
  computed: {
    ...mapWritableState(useInventoryStore, ["products"]),
  },
  methods: {
    ...mapActions(useInventoryStore, ["fetchProducts", "createProduct"]),
    modalHandler() {
      this.resetHandler()
      this.showModal = !this.showModal;
    },
    addProductHandler() {
      this.createProduct({
        name: this.name,
        unit: this.unit,
        stock: this.stock,
        price: this.price,
        img: this.img,
      });
      this.modalHandler();
      this.fetchProducts();
    },
    resetHandler() {
      this.name = "";
      this.unit = "";
      this.stock = "";
      this.price = "";
      this.img = "";
    },
  },
  created() {
    this.fetchProducts();
  },
}
</script>
<template>
  <div class="p-10 w-[1340px] ml-64">
    <div class="fixed flex items-center mt-6 w-full h-16 bg-white">
      <button @click="modalHandler"
              class="bg-emerald-300 py-2 px-3 rounded-xl text-white font-semibold hover:bg-emerald-500">Add Product
      </button>
    </div>
    <table class="border table-auto w-full mt-24 text-left mt-5">
      <thead>
      <tr class="border border-slate-300 bg-slate-200">
        <th class="p-3">No</th>
        <th class="p-3">Product</th>
        <th class="p-3">Price</th>
        <th class="p-3">Stock</th>
        <th class="p-3">Unit</th>
        <th class="p-3">Action</th>
      </tr>
      </thead>
      <tbody>
        <ProductList v-for="(item, index) in products" :key="index" :index="index + 1" :item="item"/>
      </tbody>
    </table>
    <!--  modal  -->
    <div v-if="this.showModal" @click.self="modalHandler" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop-blur-sm">
      <div class="m-auto mt-32 p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-slate-200 rounded-lg shadow">
          <button @click="modalHandler" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd">
              </path>
            </svg>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900">Add product</h3>
            <form @submit.prevent="addProductHandler" class="space-y-6">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                <input v-model="name" type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Kaos oblong"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Price</label>
                <input v-model="price" type="number" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rp. 100.000, 00" min="0"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Stock</label>
                <input v-model="stock" type="number" name="stock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="100" min="1"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Unit</label>
                <input v-model="unit" type="text" name="unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="pcs/kg"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">Product Image</label>
                <input v-model="img" type="text" name="img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://link.com/imagename.jpg"/>
              </div>
              <button type="submit" class="w-full text-white bg-stone-700 hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>