<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
export default {
  components: {SidebarComponent, NavbarComponent}
}
</script>

<template>
  <NavbarComponent />
  <div class="flex main">
    <SidebarComponent />
    <RouterView/>
  </div>
</template>

<style scoped>
  .main {
    height: 92.5vh;
  }
</style>
