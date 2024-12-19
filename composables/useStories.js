import { useFilters } from "~/composables/useFilters.js";

// tracks filtered stories
export const useStories = () => {
  const { activeFilter } = useFilters();
  // query stories with active filter
  const stories = useState("stories", () => []);
  const isLoading = useState("isLoading", () => false);

  watch(
    activeFilter,
    async (newFilter) => {
      isLoading.value = true;
      try {
        // Build the where conditions based on activeFilter
        const where = {};
        // Handle array filters (like region)
        for (const [key, value] of Object.entries(newFilter)) {
          if (Array.isArray(value) && value.length > 0) {
            // Use $in operator for arrays
            where[key] = { $in: value };
          } else if (value && !Array.isArray(value)) {
            // Direct equality for non-array values
            where[key] = value;
          }
        }

        // Query content with the constructed where clause
        stories.value = await queryContent()
          .where(where)
          .without("body")
          .find();
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        stories.value = [];
      } finally {
        isLoading.value = false;
      }
    },
    { immediate: true },
  );

  return {
    stories,
    isLoading,
  };
};
