<template>
  <v-app style="background-color:whie">
    <AppHeader></AppHeader>
    <v-content>
      <router-view/>
    </v-content>
    <footer>
    <AppFooter></AppFooter>
    </footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter
  },
};
</script>
