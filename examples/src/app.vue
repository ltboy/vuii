<template>
<div>
  <div class="a">a demo with webpack4.0</div>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  mounted() {
    console.log(process.env.NODE_ENV)
  }
}
</script>
