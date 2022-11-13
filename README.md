# Coddem Blog

This is a simple blog website for another website I am making called Coddem. I am going to use it to document how I am build Coddem.

This blog uses [Astro](https://astro.build), [Svelte](https://svelte.dev) and [Tailwind css](https://tailwindcss.com). I have also installed the cloudflare adapter as I am going to host this on cloudflare.

Feel free to use this and edit it for your own purpose. Although I would prefer if you didn't use the tailwind css theme as that is going to be the theme for Coddem.

### Run Locally
If you want to run this locally you can clone the repo. Then you can install all the dependencies using pnpm, npm or yarn. I would recommend pnpm as it is faster. And then just run `npm run dev` or `yarn dev` to run it locally.

### How To Deploy
This will depend on what hosting provider you want to deploy it to. This is a static website were you deploy every time you create a new post so you can just upload the build files to your hosting provider. Otherwise use the tutorial on the [Astro Website](https://docs.astro.build/en/guides/deploy/).

### How To Edit
You can edit the basic theme in the [tailwind css file](./tailwind.config.cjs). To create new posts just add a new markdown (.mdx) file in the blog folder in the pages folder in the src folder.

I would not recommend contributing to this project as it will be quick and just a simple blog website.

Thanks for looking at this repo! Bye!
