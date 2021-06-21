<template>
  <div class="real-footer">
    <p v-html="$t('real-footer.text')" />
  </div>
</template>

<script>
export default {
  name: 'RealFooter'
}
</script>

<style>
.real-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  font-family: 'Raleway', sans-serif;
}
</style>
