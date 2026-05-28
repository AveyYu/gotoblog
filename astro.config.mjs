import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://190786.xyz/', // 👈 请在这里填入您准备使用的域名（例如 https://blog.aaa.com 或者是临时生成的 pages.dev 网址）
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
