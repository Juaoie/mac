<template>
  <div
    class="window"
    :style="style"
    @mousedown.stop="mousedown"
    @mousemove.stop="mousemove"
    @mouseup.stop="mouseup"
    @mouseout.stop="mouseout"
  ></div>
</template>

<script lang="ts" setup>
import { ref, watch, CSSProperties } from "vue";
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
const mousemove = ref<undefined | ((payload: MouseEvent) => void)>(undefined);
function mousedown(payload: MouseEvent) {
  if (payload.button !== 0) return;
  mousemove.value = onmousemove;
}

function addPX(px: string, e: number) {
  const pxnum = Number(px.slice(0, -2));
  return pxnum + e + "px";
}

function onmousemove(payload: MouseEvent) {
  style.value["left"] = addPX(style.value["left"] as string, payload.movementX);
  style.value["top"] = addPX(style.value["top"] as string, payload.movementY);
}

function mouseup() {
  mousemove.value = undefined;
}

function mouseout() {
  mousemove.value = undefined;
}
</script>
<style lang="scss" scoped>
.window {
  background: #fff;
  padding: 10px;
  position: fixed;
  min-width: 300px;
  min-height: 200px;
}
</style>
