import { reactive, computed, watch } from "vue";

/** core logic for maintaining filters state */
export default function useFilters(posts, emit) {
  // Reactive filters object
  // TODO: use abstraction from METADATA
  const filters = reactive({
    category: "",
    degree: "",
    region: "",
  });

  // Computed filtered posts
  const filteredPosts = computed(() => {
    console.log("applying filters");
    let results = posts;
    // TODO: abstract filtering, add conditional filter
    // Apply category filter
    if (filters.category) {
      results = results.filter(
        (post) => post.data.category === filters.category,
      );
    }

    // Apply degree filter
    if (filters.degree) {
      results = results.filter((post) => post.data.degree === filters.degree);
    }

    // Apply region filter
    if (filters.region) {
      results = results.filter((post) => post.data.region === filters.region);
    }
    return results;
  });

  // emit updated filteredPosts
  watch(filteredPosts, () => {
    console.log("Filters changed");
    console.log(filters);
    emit("filter-results", filteredPosts.value);
  });

  return {
    filters,
    filteredPosts,
  };
}
