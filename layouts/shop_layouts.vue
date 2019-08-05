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
