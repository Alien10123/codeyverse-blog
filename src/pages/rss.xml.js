import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "Codey Verse Blog",
		description: "A website where I blog my experience building Codey Verse, an open source website where people can learn to code.",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
