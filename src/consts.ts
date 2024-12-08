// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import useMetadata from "./utils/useMetadata";
import allPosts from "./utils/allPosts";

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const METADATA = useMetadata();
export const ALL_POSTS = allPosts;
