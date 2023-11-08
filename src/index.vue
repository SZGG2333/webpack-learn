<template lang="pug">
  <div class="hello">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style lang="less">
.hello {
  color: #fff;
  h3 {
    margin: 40px 0 0;
    color: #42b983;
  }
}
</style>