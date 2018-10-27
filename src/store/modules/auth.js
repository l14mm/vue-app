import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
    token: window.localStorage.getItem("imgur_token"),
    username: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    username: state => state.username
};

const actions = {
    login: () => {
        api.login();
    },
    finaliseLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace("#", ""));

        commit("setToken", query.access_token);
        commit("setUsername", query.account_username);
        window.localStorage.setItem("imgur_token", query.access_token);
        router.push("/");
    },
    logout: ({ commit }) => {
        commit("setToken", null);
        window.localStorage.removeItem("imgur_token");
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setUsername: (state, username) => {
        state.username = username;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}