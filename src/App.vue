<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">My App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Search Youtube</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div id="main">
      <img alt="Vue logo" src="./assets/logo.png">
      <SearchBar @termChange="onTermChange"></SearchBar>
      <div class="row">
        <VideoDetail :video="selectedVideo"></VideoDetail>
        <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";
import { API_KEY } from "./keys.json";

export default {
  name: "app",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "vidio",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    }
  }
};
</script>

<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
