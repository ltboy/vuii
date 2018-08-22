<template>
  <div>
    <p>我是Home</p>
    <ii-input placeholder='用户名' :valid='valid' v-model="name">
      <p slot='error'>请输入纯数字 <small>like:123</small></p>
    </ii-input>
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
  methods: {
    valid(text) {
      console.log(/^\d$/ig.test(text))
      return /^\d*$/ig.test(text)
    },
  },
}
</script>

