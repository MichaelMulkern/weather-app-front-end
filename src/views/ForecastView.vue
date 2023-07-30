<template>
    <div class="forecast-main">
      <forecast />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import forecast from '@/components/Forecast.vue'
  
  export default {
    name: 'forecast-view',
    components: {
      forecast
    }
  }
  </script>

  <style scoped>
  *{
  background-color: rgb(30, 24, 70);
  }
</style>