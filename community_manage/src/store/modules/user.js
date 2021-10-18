import { getToken, setToken, removeToken} from "@/utils/auth";
import { adminlogin,logout,getAdminInfo } from "@/api/admin";
const state = {
  token: getToken(), // token
  user: "", // 用户对象
};

const mutations = {
    SET_TOKEN_STATE: (state, token) => {
      state.token = token;
    },
    SET_USER_STATE: (state, user) => {
      state.user = user;
    },
  };
  

const actions = {
  //管理员登录
  adminlogin({ commit }, adminInfo) {
    console.log(adminInfo);
    const { name, pass, rememberMe } = adminInfo;
    return new Promise((resolve, reject) => {
      adminlogin({ name: name.trim(), pass: pass, rememberMe: rememberMe })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN_STATE", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
   getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getAdminInfo()
        .then((response) => {
          const { data } = response;
          if (!data) {
            commit("SET_TOKEN_STATE", "");
            commit("SET_USER_STATE", "");
            removeToken();
            resolve();
            reject("Verification failed, please Login again.");
          }
          commit("SET_USER_STATE", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
   logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then((response) => {
          console.log(response);
          commit("SET_TOKEN_STATE", "");
          commit("SET_USER_STATE", "");
          removeToken();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
