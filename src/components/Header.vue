<template>
<div class="ui secondary pointing menu">
  <router-link to="/" class="item active">
    My App
  </router-link>
  <div class="right menu">
      <div class="right menu">
          <div v-if="isLoggedIn" class="horizontal">
              <div v-if="username" class="item">{{ `Welcome ${username}` }}</div>
              <router-link to="/" class="item">My Photos</router-link>
              <div class="item">Search:</div>
              <input class="item search" @change="search"/>
              <router-link to="/upload" class="item">Upload</router-link>
              <a class="item" @click="logout">Logout</a>
          </div>
      <a v-else href="#" class="ui item" @click="login">
          Login
      </a>
      </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyApp",
  computed: mapGetters(["isLoggedIn", "username"]),
  methods: mapActions(["login", "logout", "search"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
.search {
  border: black solid 2px;
}
</style>
