<template>
  <form>
    <h4>Create post</h4>
    <my-input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Title"
      v-focus
    />
    <my-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Body"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px;"
      @click.prevent="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = { title: "", body: "" };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
