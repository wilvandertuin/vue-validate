<template>
  <div id="app">
    <FormTest/>
  </div>
</template>

<script>
import FormTest from "./components/Form";

export default {
  name: "App",
  components: {
    FormTest
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
