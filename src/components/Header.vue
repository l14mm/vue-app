<template>
<div class="ui secondary pointing menu">
  <a href="/" class="item active">
    My App
  </a>
  <div class="right menu">
      <a href="#" class="ui item" @click="login">
          Login
      </a>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MyApp",
  methods: mapActions(["login"])
};
</script>