<template>
  <div class="window" :style="style"></div>
</template>

<script lang="ts" setup>
import { ref, watch, StyleValue } from "vue";
const style: StyleValue = {};
style["z-index"] = 99;
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
