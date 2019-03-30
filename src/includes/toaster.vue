<template>
  <div :class="[{'on': is_show}, 'toaster']">
    <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'Toaster',
  props: {
    /** Paginação */
    text: {
      type: String,
      default: 'Sucesso'
    },
    is_show: {
      type: Boolean,
      default: false
    }
  }
}

</script>
<style scoped lang="scss">
  .toaster {
    position: fixed;
    bottom: 2%;
    right: 0;
    background-color: #060;
    color: #FFF;
    font-weight: 700;
    padding: 1em;
    transform: translate(100%, 0);
    transition: transform 1s;
    z-index: 1000;

    &.on {
      transform: translate(0, 0);
    }
  }
</style>
