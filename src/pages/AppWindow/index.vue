<template>
  <Vue3DraggableResizable :resizable="true" :initW="300" :initH="200" :parent="false" @activated="activatedHandle">
    <div class="window-bear">
      <div class="window-bar df aic jcc">
        <span>app</span>
      </div>
    </div>
  </Vue3DraggableResizable>
</template>

<script lang="ts" setup>
import Vue3DraggableResizable from "./components/Vue3DraggableResizable.vue";
// import Vue3DraggableResizable from "vue3-draggable-resizable";
//需引入默认样式
import { ref, watch, CSSProperties, onUnmounted } from "vue";

onUnmounted(() => {});

function activatedHandle() {
  console.log("🚀 ~ file: index.vue ~ line 20 ~ activatedHandle ~ res");
}
</script>
<style lang="scss" scoped>
.window-bear {
  width: 100%;
  height: 100%;
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
