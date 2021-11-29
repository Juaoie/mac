<template>
  <img v-if="storage.mode === 'dark'" class="wallpaper" src="@a/img/wallpaper-night.jpg" @contextmenu.prevent />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" @contextmenu.prevent />

  <div class="dock pf df aic jcc" ref="dock" @mousemove="mousemove" @mouseleave="mouseout">
    <ul class="navigation df aife pr">
      <li>
        <img src="@a/img/app/launchpad.png" />
        <span class="tooltip ">app name</span>
      </li>
      <li>
        <img src="@a/img/app/safari.png" />
      </li>
      <li>
        <img src="@a/img/app/weixin.png" />
      </li>
      <li>
        <img src="@a/img/app/github.png" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import storage from "@t/storage";

const dock = ref<HTMLElement | null>();

function mousemove(mouseEvent: MouseEvent) {
  if (!dock.value) return;
  const imgs = dock.value.getElementsByTagName("img");

  for (let index = 0; index < imgs.length; index++) {
    //TODO: offsetLeft属性不存在
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
</script>

<style lang="scss" scoped>
.wallpaper {
  width: 100vw;
  height: 100vh;
  transition: transform 0.25s, filter 0.25s;
  position: fixed;
  z-index: -3;
  top: 0;
  left: 0;
  object-fit: cover;
}
.dock {
  width: fit-content;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
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
      .tooltip{
        // padding: ;
      }
    }
  }
}
</style>
