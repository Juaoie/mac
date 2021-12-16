<template>
  <div @contextmenu.prevent class="page">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.page {
  user-select: none;
}
</style>
