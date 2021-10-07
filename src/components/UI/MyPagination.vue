<template>
  <div class="page-wrapper">
    <div
      class="page"
      :class="{ 'current-page': pageNumber === modelValue }"
      :key="pageNumber"
      v-for="pageNumber in totalPages"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",

  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
    },
  },

  methods: {
    changePage(pageNumber) {
      this.$emit("update:modelValue", pageNumber);
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  margin-top: 15px;
  display: flex;
}
.page {
  padding: 10px;
  border: 1px solid #000;

  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}
</style>
