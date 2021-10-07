<template>
  <div v-if="posts.length">
    <h3>Post list</h3>
    <transition-group name="post-list">
      <post-item
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @remove="$emit('remove', post)"
        class="post-list__item"
      />
    </transition-group>
  </div>
  <h3 v-else style="color: red">
    Post list is empty
  </h3>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>
