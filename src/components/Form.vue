<template>
  <div>
    <div class="row">
      <label>Enter your name</label>
      <input name="name" required v-validate>
      <div class="error">{{ errors.name }}</div>
    </div>

    <div class="row">
      <label>Enter your email</label>
      <input type="email" name="email" required v-validate>
      <div class="error">{{ errors.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    errors: {}
  })
};
</script>

<style scoped>
label {
  display: block;
  line-height: 3em;
}

.row {
  margin-bottom: 1em;
}

input {
  margin-bottom: 1em;
  line-height: 2em;
}

.error {
  color: red;
  min-height: 2em;
}
</style>
