<template>
  <div class="home">
    <mainMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import mainMenu from '@/components/MainMenu.vue'

export default {
  name: 'HomeView',
  components: {
    mainMenu
  }
}
</script>
