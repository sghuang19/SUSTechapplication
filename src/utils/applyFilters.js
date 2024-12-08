/** Apply filters on a list of posts */
export default function applyFilters(posts, filters) {
  const filteredPosts = posts;
  console.log(filters);
  for (const [field, value] of Object.entries(filters)) {
    console.log(field, value);
    // only keep those that has post.field.value = true
  }
  return filteredPosts;
}
