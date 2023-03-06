import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~" : path.resolve(__dirname, "./"),
      "@/scss/mixin" : 'src/scss/_mixin.scss',
      "@/stores/admin/product" : 'src/stores/admin/product.js',
      "@/stores/admin/collection" : 'src/stores/admin/collection.js',
      "@/stores/admin/eventpromotion" : 'src/stores/admin/eventpromotion.js',
      "@/stores/admin/index" : 'src/stores/admin/index.js',
      "@/stores/admin/promotion" : 'src/stores/admin/promotion.js',
      "@/stores/store/cart" : 'src/stores/store/cart.js',
      "@/stores/store/checkout" : 'src/stores/store/checkout.js',
      "@/stores/store/collection" : 'src/stores/store/collection.js',
      "@/stores/store/infoAccount" : 'src/stores/store/infoAccount.js',
    },
  },
  plugins: [vue()],
  base: "/", // Thay tên repository của các bạn vào đây nhé
});
