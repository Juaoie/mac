import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
      "@a": resolve(__dirname, "src/assets/"),
      "@s": resolve(__dirname, "src/socket/"),
      "@t": resolve(__dirname, "src/tools/"),
      "@p": resolve(__dirname, "src/pages/"),
    },
  },
});
