<template>
  <img
    v-if="storage.mode === '1'"
    class="wallpaper"
    src="@a/img/wallpaper-night.jpg"
    :class="{ 'input-focus': focus }"
  />
  <img v-else class="wallpaper" src="@a/img/wallpaper-day.jpg" :class="{ 'input-focus': focus }" />
  <div class="page df aic jcc ffcn" @contextmenu.prevent>
    <img class="avatar" src="@a/img/avatar.jpg" />
    <span class="user-name fp">{{ storage.userName }}</span>
    <input
      class="password"
      v-model="password"
      type="password"
      maxlength="16"
      autocomplete="off"
      @focus="focus = true"
      @blur="focus = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import storage from "@t/storage";
storage.userName = "Gaojie Hu";

const password = ref("");
const focus = ref(false);
</script>

<style lang="scss" scoped>
.input-focus {
  filter: blur(10px);
  transform: scale(1.1);
}
.wallpaper {
  width: 100vw;
  height: 100vh;
  transition: transform 0.25s, filter 0.25s;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  object-fit: cover;
}
.page {
  background-color: rgba(0,0,0,.1);
  position: absolute;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .user-name {
    max-width: 300px;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin-top: 15px;
    line-height: 1.75rem;
    letter-spacing: 0.1rem;
  }
  .password {
    border: none;
    padding: 6px 12px;
    margin-top: 15px;
    outline: none;
    background: rgba($color: #fff, $alpha: 0.4);
    color: #fff;
    border-radius: 4px;
  }
}
</style>
