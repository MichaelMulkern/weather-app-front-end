<template>
  <div class="about">
    <h1>This is an about page</h1>
    <forecast />
  </div>
</template>
<script>
// @ is an alias to /src
import forecast from '@/components/Forecast.vue'

export default {
  name: 'aboutView',
  components: {
    forecast
  }
}
</script>
