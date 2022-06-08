<template>
    <nuxt-child/>
</template>

<script>
export default {
    layout({params}) {
    return params.post ? 'post' : 'default'
  }
}
</script>

<style>

</style>