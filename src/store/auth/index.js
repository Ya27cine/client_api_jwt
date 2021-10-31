
import axios from 'axios'

export default{

    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token){
            state.token = token;
        },
        setUser(state, data){
            state.user = data;
    },
    },
    getters: {
        isAuth(state){
            return (state.user && state.token);
        },
        getUser(state){
            return state.user;
        }
    },
    actions:{

        // ============= Action  SignIn : 
        async signin({ dispatch }, paramUser){
            console.log( paramUser );
            try {
                const reponse = 
                    await axios.post('auth/login', paramUser);
                console.log( reponse.data.user.id );

                return dispatch('attempt', reponse.data.access_token);

            } catch (error) {
                console.log( "action signin :error: => "+error );
            }
        },

        // ============= Action  attempt : 
        async attempt({ commit, state}, token){
          //  console.log( token );

            try {
                
                if(token){
                    commit('setToken', token); // and run subscriber 
                }
                if(!state.token) return;

                const reponse =  await axios.get('auth/user-profile');

                commit('setUser', reponse.data);

            } catch (error) {
                console.log( "action attempt :error: => "+error );
                commit('setToken', null);
                commit('setUser', null);
            }
        },

    }
}