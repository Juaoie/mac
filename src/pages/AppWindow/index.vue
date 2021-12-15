<template>
  <div class="window-bear" :style="style">
    <div class="window-bar df aic jcc" @mousedown.stop="mousedown" @mouseup.stop="mouseup">
      <span>app</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, CSSProperties, onUnmounted } from "vue";
import { mousemoves$, visibilitychange$ } from "@t/rxjs";

const mousemoveSsubs$ = mousemoves$.subscribe(onmousemove);
const visibilitychangeSubs$ = visibilitychange$.subscribe((x) => {
  click = false;
});

onUnmounted(() => {
  mousemoveSsubs$.unsubscribe();
  visibilitychangeSubs$.unsubscribe();
});

const style = ref<CSSProperties>({
  "z-index": 99,
  top: "10px",
  left: "10px",
});

/**
 *
events.button==1  鼠标中键

events.button==0  鼠标左键

events.button==2  鼠标右键

 */
let click = false;
let clickX = 0;
let clickY = 0;
function mousedown(payload: MouseEvent) {
  if (payload.button !== 0) return;
  click = true;
  clickX = payload.layerX;
  clickY = payload.layerY;
}

function addPX(px: string, e: number) {
  const pxnum = Number(px.slice(0, -2));
  return pxnum + e + "px";
}

function onmousemove(payload: MouseEvent) {
  if (!click) return;
  style.value["left"] = payload.clientX - clickX + "px"; // addPX(style.value["left"] as string, payload.movementX);
  style.value["top"] = payload.clientY - clickY + "px"; //addPX(style.value["top"] as string, payload.movementY);
}

function mouseup() {
  click = false;
}
</script>
<style lang="scss" scoped>
.window-bear {
  position: fixed;
  min-width: 300px;
  min-height: 200px;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
  .window-bar {
    background-color: rgb(229, 231, 235);
    width: 100%;
    height: 25px;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
