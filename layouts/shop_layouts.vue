<template>
  <div>
      <topHeader /> 
      <div>
            <nuxt />
      </div>
  </div>
</template>

<script>
import topHeader from '~/components/top_header'
export default {
    components: {
        topHeader
    },
}
</script>

<style lang="less">
    html, body {
        font: 14px "Microsoft YaHei", Arial, Helvetica, Sans-Serif;
    }
</style>
