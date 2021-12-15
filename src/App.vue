<template>
  <div @contextmenu.prevent>
    <!-- <router-view></router-view> -->
    <a download="aaa.png" :href="url">点击下载</a>
    <div @click="abc">点击下载fun</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
// const url =
//   "https://images.unsplash.com/photo-1639501158624-272ee4bb786d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
const url = "http://zhidianyun.sdxxtop.com/classroom/video/20200727/20200727161946_qecm.mp4";
async function abc() {
  const file = await axios.get(url, {
    responseType: "blob",
  });
  console.log("🚀 ~ file: App.vue ~ line 17 ~ init ~ file", file);
  // const blob = new Blob(file.data);
  const a = document.createElement("a");
  a.download = "abc.mp4";
  a.href = URL.createObjectURL(file.data);
  document.body.appendChild(a);
  a.click();
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  user-select: none;
}
</style>
