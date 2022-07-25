<template>
  <div @contextmenu.prevent class="page pr">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { mousemoves } from "@t/unmq";
import { useStore } from "@/store/index";
const store = useStore();

mousemoves.pushConsume((mouseEvent) => {
  store.commit("setBodyMouseEvent", mouseEvent);
});
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
