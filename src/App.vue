<template>
  <div @contextmenu.prevent>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>
<style>
body {
  margin: 0;
  padding: 0;
  user-select: none;
}
</style>
