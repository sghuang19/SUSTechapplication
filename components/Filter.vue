<script setup>
  import GradFilter from "~/components/GradFilter.vue";
  import EmploymentFilter from "~/components/EmploymentFilter.vue";
  import RecruitFilter from "~/components/RecruitFilter.vue";
  import AbroadFilter from "~/components/AbroadFilter.vue";
  import ExpFilter from "~/components/ExpFilter.vue";

  const { data: metadata } = await useFetch("/api/metadata");

  // extract the choices
  const options = computed(() =>
    Object.fromEntries(
      Object.entries(metadata.value).map(([field, choices]) => [
        field,
        Object.entries(choices).map(([k, v]) => ({ label: v, value: k })),
      ]),
    ),
  );
  const filter = ref({}); // empty filter by default

  // handle tab change
  const currentTab = ref("grad"); // grad is the default tab
  const handleTabChange = (tab) => {
    currentTab.value = tab;
  };
</script>

<template>
  <n-tabs
    type="segment"
    justify-content="space-around"
    :value="currentTab"
    @update:value="handleTabChange"
  >
    <n-tab-pane name="grad" tab="研究生">
      <GradFilter :options="options" :metadata="metadata" />
    </n-tab-pane>
    <n-tab-pane name="employment" tab="就业">
      <EmploymentFilter :options="options" :metadata="metadata" />
    </n-tab-pane>
    <n-tab-pane name="recruit" tab="招生">
      <RecruitFilter :options="options" :metadata="metadata" />
    </n-tab-pane>
    <n-tab-pane name="abroad" tab="交流">
      <AbroadFilter :options="options" :metadata="metadata" />
    </n-tab-pane>
    <n-tab-pane name="exp" tab="经验">
      <ExpFilter :options="options" :metadata="metadata" />
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped></style>
