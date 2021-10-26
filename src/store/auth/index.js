
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
    getters: {},
    actions:{

        // ============= Action  SignIn : 
        async signin({ dispatch }, paramUser){
            console.log( paramUser );
            try {
                const reponse = 
                await axios.post('auth/login', paramUser);
                console.log( reponse.data.user.id );

                dispatch('attempt', reponse.data.access_token);

            } catch (error) {
                console.log( "action signin :error: => "+error );
            }
        },

        // ============= Action  attempt : 
        async attempt({ commit }, token){
            console.log( token );

            try {
                const myheaders = {
                    headers: {'Authorization': 'Bearer '+token}
                }

                const reponse =  await axios.get('auth/user-profile', myheaders);

                commit('setToken', token);
                commit('setUser', reponse.data);

                console.log( "action attempt : "+reponse.data.name);
            } catch (error) {
                console.log( "action attempt :error: => "+error );
            }
        },

    }
}