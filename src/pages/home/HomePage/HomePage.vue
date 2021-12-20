<template>
  <img v-if="storage.mode === 'dark'" class="wallpaper" src="@a/img/wallpaper-night.jpg" @contextmenu.prevent />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" @contextmenu.prevent />
  <div class="mask pa"></div>
  <home-navigation @getRunAppList="created"></home-navigation>
  <DraggableContainer>
    <template v-for="item in list" :key="item.id">
      <app-window @getRunAppList="created" :runApp="item"></app-window>
    </template>
  </DraggableContainer>
</template>

<script lang="ts" setup>
import DraggableContainer from "@/pages/AppWindow/components/DraggableContainer";
import HomeNavigation from "./components/home-navigation.vue";
import AppWindow from "@p/AppWindow/index.vue";
import storage from "@t/storage";
import { ref, watch } from "vue";
import { getRunAppList } from "@s/api";
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { useStore } from "@/store";
const store = useStore();

const list = ref<RunAppRes[] | null>(null);
async function created() {
  list.value = await getRunAppList();
  list.value.forEach((item) => store.commit("setMaxZIndex", item.style.zIndex));
}
created();
</script>

<style lang="scss" scoped>
.wallpaper {
  width: 100%;
  height: 100%;
  transition: transform 0.25s, filter 0.25s;
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  object-fit: cover;
}
.mask {
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
}
</style>
