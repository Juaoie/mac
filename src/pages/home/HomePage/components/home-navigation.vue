<template>
  <div class="dock pf df aic jcc" ref="dock" @mousemove="mousemove" @mouseleave="mouseout">
    <ul class="navigation df aife pr">
      <li
        class="df jcc"
        v-for="item in list"
        @mousemove="hoverIndex = item.appId"
        @mouseout="hoverIndex = 0"
        @click="runApp(item)"
      >
        <img :src="item.icon" />
        <span class="tooltip pa" v-show="hoverIndex === item.appId">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { addRunApp, getNavList } from "@s/api";
import { NavigationRes } from "@/socket/interface/response/NavigationRes";
import { RunAppReq, StyleReq } from "@s/interface/request/RunAppReq";

import { useStore } from "@/store";
const store = useStore();

const dock = ref<HTMLElement | null>();

function mousemove(mouseEvent: MouseEvent) {
  if (!dock.value) return;
  const imgs = dock.value.getElementsByTagName("img");

  for (let index = 0; index < imgs.length; index++) {
    //li 标签到ul 标签的位置
    // @ts-ignore
    const offsetLeft = imgs[index].offsetLeft;

    //li 标签的宽高
    // @ts-ignore
    const offsetWidth = imgs[index].offsetWidth;

    const x = mouseEvent.clientX - offsetLeft - offsetWidth / 2 - dock.value.offsetLeft;

    //根据勾股定理计算
    let iScale = 1 - Math.sqrt(x * x + 1) / 300;
    // console.log("🚀 ~ file: HomePage.vue ~ line 46 ~ mousemove ~ x", x);

    if (iScale < 0.5) iScale = 0.5;

    //x 变量的范围为 0 - 正无穷
    //img 宽度大小范围 50 - 100
    imgs[index].style.width = iScale * 100 + "px";
  }
}

function mouseout() {
  if (!dock.value) return;
  const imgs = dock.value.getElementsByTagName("img");
  for (let index = 0; index < imgs.length; index++) {
    imgs[index].style.width = "50px";
  }
}

const hoverIndex = ref(0);
const list = ref<NavigationRes[]>([]);
async function created() {
  list.value = await getNavList();
}
created();

/**
 * 添加一个runapp
 */
async function runApp(nav: NavigationRes) {
  const clientWidth = document.body.clientWidth;
  store.commit("setMaxZIndex", store.state.maxZIndex + 1);
  const style: StyleReq = {
    left: clientWidth / 2 - 150,
    top: 300,
    width: 300,
    height: 200,
    zIndex: store.state.maxZIndex,
  };
  const runApp: RunAppReq = {
    appId: nav.appId,
    title: nav.name,
    state: true,
    style,
  };
  store.dispatch("addRunApp", runApp);
}
</script>
<style lang="scss" scoped>
.dock {
  width: fit-content;
  z-index: 9999999999999;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
  .navigation {
    height: 64px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.17);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-width: 1px 1px 0 1px;
    background: rgba(255, 255, 255, 0.2);
    padding: 7px 6px;
    margin: 0;
    li {
      margin: 0 6px;
      list-style: none;
      display: flex;
      transition-duration: 0.15s;
      transition-property: width;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom;
      img {
        position: relative;
        top: 0;
        will-change: width;
        width: 50px;
        max-width: 100px;
        min-width: 50px;
        height: auto;
        cursor: pointer;
      }
      .tooltip {
        top: -70px;
        color: #000;
        background: rgba($color: #fff, $alpha: 0.6);
        padding: 4px 10px;
        border-radius: 4px;
      }
    }
  }
}
</style>
