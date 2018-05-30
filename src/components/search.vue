<template>
  <div class="pl-card xbb xsearch">
    <input type="text" @input="$emit('input', $event.target.value)" :placeholder="placeholder" />
    <a class="pl-iconbtn" @click="$emit('search')">
      <i class="pl-ico xsearch1"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'pl-search',
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
