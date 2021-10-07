<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >About us</my-button
      >
      <my-button @click="$router.push('/posts-store')" style="margin-left: 20px"
        >Posts from store</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  padding: 15px;
  height: 50px;
  background-color: #ccc;
  box-shadow: 2px 2px 4px #ccc;
  display: flex;
  align-items: center;
}

.navbar__btns {
  margin-left: auto;
}
</style>
