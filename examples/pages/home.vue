<template>
  <div>
    <p>我是Home</p>
    <ii-input placeholder='用户名' v-model="name"/>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    }
  },
}
</script>

