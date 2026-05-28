import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(), // 告诉 Astro 不要使用 sharp 压缩图片，直接原样输出
  },
});
