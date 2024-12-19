export const useFilters = () => {
  // track the active tab
  const tab = useState("tab", () => "grad");
  // tracks choices across different tabs
  const filters = useState("filters", () => ({
    grad: {},
    employment: {},
    recruit: {},
    abroad: {},
    exp: {},
  }));

  const activeFilter = computed(() => ({
    category: [tab.value], // tab itself is part of the filter, everything is in array
    ...filters.value[tab.value], // spread the rest filters
  }));

  return {
    tab,
    filters,
    activeFilter,
  };
};
