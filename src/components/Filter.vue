<script setup>
  import { ElRadio, ElRadioGroup } from "element-plus";
  import useFilters from "../utils/useFilters.js";

  const props = defineProps({
    posts: {
      type: Array,
      required: true,
    },
    // metadata fields and options used in filtering
    metadata: {
      type: Object,
      required: true,
    },
  });

  // Emit event to parent (Astro)
  const emit = defineEmits(["filter-results"]);
  // Abstracted filter logic, results emission and change watching encapsulated
  const { filters } = useFilters(props.posts, emit);
</script>

<template>
  <div>
    <!--  TODO: more filters, conditional filtering,  -->
    <!-- Category -->
    <el-radio-group v-model="filters.category">
      <el-radio
        v-for="[shorthand, name] in Object.entries(metadata.category)"
        :key="shorthand"
        :value="shorthand"
        >{{ name }}
      </el-radio>
    </el-radio-group>

    <!--  Degree -->
    <el-radio-group v-model="filters.degree">
      <el-radio
        v-for="[shorthand, name] in Object.entries(metadata.degree)"
        :key="shorthand"
        :value="shorthand"
        >{{ name }}
      </el-radio>
    </el-radio-group>

    <!--  Region  -->
    <el-radio-group v-model="filters.region">
      <el-radio
        v-for="[shorthand, name] in Object.entries(metadata.region)"
        :key="shorthand"
        :value="shorthand"
        >{{ name }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<style scoped></style>
