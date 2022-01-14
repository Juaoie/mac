import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
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
  server: {
    host: "0.0.0.0",
    port: 3001,
    cors: true,
    proxy: {
      "/user": "http://127.0.0.1:3000",
    },
  },
});
