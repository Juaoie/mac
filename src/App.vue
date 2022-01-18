<template>
  <div @contextmenu.prevent class="page pr">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
async function created() {}
created();
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  width: 100vw;
  user-select: none;
}
</style>
