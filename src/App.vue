<template>
  <div @contextmenu.prevent class="page pf">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import { getRunAppList } from "@s/api";
const store = useStore();

async function created() {
  const runAppList = await getRunAppList();
  store.commit("setRunAppList", runAppList);
}
created();
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  width: 100vw;
  user-select: none;
}
</style>
