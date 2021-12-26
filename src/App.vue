<template>
  <div @contextmenu.prevent class="page pf">
    <router-view></router-view>
    <button @click="send" :style="{ zIndex: 99999999 }" class="pr">点击发送消息</button>
    <button @click="on1" :style="{ zIndex: 99999999 }" class="pr">on1</button>
    <button @click="once" :style="{ zIndex: 99999999 }" class="pr">once</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import { getRunAppList } from "@s/api";
import UNodeMQ from "u-node-mq";
const store = useStore();

async function created() {
  // const runAppList = await getRunAppList();
  // store.commit("setRunAppList", runAppList);
}
created();
const unmq = new UNodeMQ<string>({ exchangeName: "exch", queueNameList: ["test"] });
unmq.exchange.routes = ["test"];
let a = 1;
function send() {
  unmq.emit("消息本题" + a, "" + a++);
}

function on1() {
  unmq.on("test", (value) => {
    console.log(value);
  })();
}

function once() {
  console.log("🚀 ~ file: App.vue ~ line 36 ~ once ~ unmq", unmq)
  console.log(JSON.parse(JSON.stringify(unmq)));
  // unmq.once("test", (value) => {
  //   console.log("🚀 ~ file: App.vue ~ line 36 ~ numq.once ~ value", value);
  // });
}

function main() {}
main();
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  width: 100vw;
  user-select: none;
}
</style>
