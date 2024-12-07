/** Retrieve all posts in the collection, sorted by pubDate */
import { getCollection } from "astro:content";

export default async function usePosts() {
  return (await getCollection("post")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
