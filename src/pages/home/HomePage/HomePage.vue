<template>
  <img v-if="storage.mode === 'dark'" class="wallpaper" src="@a/img/wallpaper-night.jpg" @contextmenu.prevent />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" @contextmenu.prevent />
  <div class="mask pa"></div>
  <home-navigation></home-navigation>
  <DraggableContainer :referenceLineVisible="false">
    <template v-for="item in store.state.runAppList" :key="item.id">
      <app-window :runAppId="item.id" v-show="!item.hidden"></app-window>
    </template>
  </DraggableContainer>
</template>

<script lang="ts" setup>
import DraggableContainer from "@/pages/AppWindow/components/DraggableContainer";
import HomeNavigation from "./components/home-navigation.vue";
import AppWindow from "@p/AppWindow/index.vue";
import storage from "@t/storage";
import { getNavList, getRunAppList } from "@s/api";
import { useStore } from "@/store";
import { watch } from "vue";
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { Queue } from "u-node-mq";
import debounceTime from "u-node-mq/operators/debounceTime";

const store = useStore();

async function created() {
  const [runAppList, navList] = await Promise.all([getRunAppList(), getNavList()]);
  store.commit("setRunAppList", runAppList);
  store.commit("setNavList", navList);

  const qu1 = new Queue<RunAppRes>().add(debounceTime(500));

  store.state.runAppList.forEach((item) => {
    watch(
      () => item,
      (res) => qu1.push(res),
      {
        deep: true,
      }
    );
  });

  qu1.pushConsume((res) => {
    store.dispatch("updateRunApp", res.id);
  });
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
