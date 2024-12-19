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

  // filters for each tab handled separately
  const filters = reactive({
    grad: {},
    employment: {},
    recruit: {},
    abroad: {},
    exp: {},
  });

  // handle tab change
  const tab = ref("grad"); // grad is the default tab
</script>

<template>
  <n-tabs v-model:value="tab" type="segment" justify-content="space-around">
    <n-tab-pane name="grad" tab="研究生">
      <GradFilter
        :options="options"
        :metadata="metadata"
        :filter="filters.grad"
      />
    </n-tab-pane>
    <n-tab-pane name="employment" tab="就业">
      <EmploymentFilter
        :options="options"
        :metadata="metadata"
        :filter="filters.employment"
      />
    </n-tab-pane>
    <n-tab-pane name="recruit" tab="招生">
      <RecruitFilter
        :options="options"
        :metadata="metadata"
        :filter="filters.recruit"
      />
    </n-tab-pane>
    <n-tab-pane name="abroad" tab="交流">
      <AbroadFilter
        :options="options"
        :metadata="metadata"
        :filter="filters.abroad"
      />
    </n-tab-pane>
    <n-tab-pane name="exp" tab="经验">
      <ExpFilter
        :options="options"
        :metadata="metadata"
        :filter="filters.exp"
      />
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped></style>
