<template>
  <div class="ii_input-group ii_input-group--line" :class="{'ii_input-group--focus': focus,'ii_input-group--has':self_value!=='', 'ii_input-group--invalid':validate===-1,'ii_input-group--valid':validate===1}">
    <div class="ii_input-container">
      <div class="ii_input-prefix">
        <slot name="prefix"></slot>
      </div>
      <span v-if="placeholder" class="ii_input-label-warp">
        <label  class="ii_input-label">{{placeholder}}</label>
      </span>
      <input class="ii_input-input" :value="self_value" :type="type"
      :autofocus = 'autoFocus'
      @input="handleInput"
      @compositionstart="handleComposing(0)"
      @compositionend="handleComposing(1)"
      @focus="handleFocus"
      @blur="handleBlur"
      />
      <div class="ii_input-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <div class="ii_input-bar"></div>
    <div class="ii_input-subscript">
      <slot name="subscript"></slot>
    </div>
    <div class="ii_input-error" v-if="validate===-1">
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ii-input',
  props: {
    placeholder: String,
    value: String,
    autoFocus: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    valid: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      focus: false,
      self_value: this.value === undefined || this.value === null ? '' : this.value,
      composing: false,
      validate: 0,
    }
  },
  methods: {
    handleInput(e) {
      if (this.composing && e.target.value === this.self_value) return
      this.self_value = e.target.value
      this.$emit('input', e.target.value)
      this.handleValidate(e.target.value)
    },
    handleComposing(status) {
      this.composing = status === 1 ? false : true
    },
    handleBlur() {
      this.focus = false
    },
    handleFocus() {
      this.focus = true
    },
    handleValidate(text) {
      if (text === '' || this.valid === null || this.valid === undefined) {
        return (this.validate = 0)
      }
      if (this.valid(text)) {
        return (this.validate = 1)
      }
      return (this.validate = -1)
    },
  },
}
</script>
