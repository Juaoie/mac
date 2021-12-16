<template>
  <img v-if="storage.mode === 'dark'" class="wallpaper" src="@a/img/wallpaper-night.jpg" @contextmenu.prevent />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" @contextmenu.prevent />
  <div class="mask pa"></div>
  <home-navigation></home-navigation>
  <window></window>
</template>

<script lang="ts" setup>
import HomeNavigation from "./components/home-navigation.vue";
import Window from "@p/AppWindow/index.vue";
import storage from "@t/storage";
</script>

<style lang="scss" scoped>
.wallpaper {
  width: 100vw;
  height: 100vh;
  transition: transform 0.25s, filter 0.25s;
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  object-fit: cover;
}
.mask {
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
}
</style>
