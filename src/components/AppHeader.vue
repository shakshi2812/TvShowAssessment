<template>
  <v-app-bar app dark color="teal">
     <v-toolbar-title class="font-bold white--text" color="primary ma-2">TV Shows</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/search" color="teal">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>

</style>
