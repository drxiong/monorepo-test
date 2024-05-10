/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

function removeStrictMode() {
  return {
    name: 'remove-strict-mode',
    renderChunk(code) {
      return code.replace(/(['"])use strict\1;/g, '');
    },
  };
}
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss(), removeStrictMode()],
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd"],
    },
  },
  // output: {
  //   // ...其他输出配置
  //   exports: "named",
  // },
});
