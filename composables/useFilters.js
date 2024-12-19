export const useFilters = () => {
  // track the active tab
  const tab = useState("tab", () => "grad");
  // tracks choices across different tabs
  const filters = reactive({
    grad: {},
    employment: {},
    recruit: {},
    abroad: {},
    exp: {},
  });

  const activeFilter = computed(() => ({
    category: tab.value, // tab itself is part of the filter
    ...filters[tab.value],
  }));

  return {
    tab,
    filters,
    activeFilter,
  };
};
