<template>
  <img v-if="storage.mode === 'dark'" class="wallpaper" src="@a/img/wallpaper-night.jpg" @contextmenu.prevent />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" @contextmenu.prevent />
  <div class="mask pa"></div>
  <home-navigation></home-navigation>
  <template v-for="item in list" :key="item.id">
    <app-window :runApp="item"></app-window>
  </template>
</template>

<script lang="ts" setup>
import HomeNavigation from "./components/home-navigation.vue";
import AppWindow from "@p/AppWindow/index.vue";
import storage from "@t/storage";
import { ref, watch } from "vue";
import { getRunAppList } from "@s/api";
import { RunApp } from "@/socket/interface/RunApp";
import { useStore } from "@/store";
const store = useStore();

const list = ref<RunApp[] | null>(null);
async function created() {
  list.value = await getRunAppList();
  list.value.forEach((item) => store.commit("setMaxZIndex", item.style.zIndex));
}
created();

watch(
  () => list.value,
  (e) => {
    //发送改变 加 防抖函数 保存数据
    console.log("保存数据");
  },
  {
    deep: true,
  }
);
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
