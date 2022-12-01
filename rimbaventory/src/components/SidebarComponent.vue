<script></script>
<template>
  <div class="p-8 w-80 kiri flex items-start justify-start">
    <div class="grid grid-rows-3 gap-4 w-full">
      <div>
        <button @click="$router.push('/')" class="font-bold item-nav text-left"><span><i class="fa-solid fa-house mr-5"></i></span>Dashboard</button>
      </div>
      <div>
        <button @click="$router.push('/sales')" class="font-bold item-nav text-left"><span><i class="fa-solid fa-store mr-5"></i></span>Sales</button>
      </div>
      <div>
        <button @click="$router.push('/products')" class="font-bold item-nav text-left"><span><i class="fa-solid fa-tag mr-6"></i></span>Products</button>
      </div>
      <div>
        <button @click="$router.push('/customers')" class="font-bold item-nav text-left"><span><i class="fa-solid fa-users mr-4"></i></span>Customers</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .kiri {
    background-color: #D6E8E5;
  }
  .item-nav {
    width: 100%;
    background-color: #D6E8E5;
    padding: 10px 20px;
  }
  .item-nav:hover {
    width: 100%;
    background-color: #719a95;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
  }
</style>