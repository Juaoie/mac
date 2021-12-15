<template>
  <div @contextmenu.prevent>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
async function init() {
  const url =
    "https://images.unsplash.com/photo-1639501158624-272ee4bb786d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  const file = await axios.get(url);
  // window.open(file.data);
  const a = document.createElement("a");
  a.href = url;
  a.download = "资源目录.png";
  a.click();
}
init();
</script>
<style>
body {
  margin: 0;
  padding: 0;
  user-select: none;
}
</style>
