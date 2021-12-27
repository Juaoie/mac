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
import { Next } from "u-node-mq/dist/core/consumer";
const store = useStore();

async function created() {
  // const runAppList = await getRunAppList();
  // store.commit("setRunAppList", runAppList);
}
created();
const unmq = new UNodeMQ<number>({ exchangeName: "exch", queueNameList: ["test"] });
unmq.exchange.routes = ["test"];
unmq.queueList[0].ask = true;
let a = 0;
function send() {
  unmq.emit(a++, a++);
}

function on1() {
  unmq.on("test", abc, "payload 固定参数");
  function abc(value: number, next?: Next, pay?: any) {
    console.log(value);
    console.log(pay);
    if (next) next(false);
  }
}

function once() {
  unmq.once("test", (value) => {
    console.log("🚀 ~ file: App.vue ~ line 36 ~ numq.once ~ value", value);
  });
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
