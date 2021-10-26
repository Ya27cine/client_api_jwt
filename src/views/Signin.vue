<template lang="">
    <div>
        <h1>Signin</h1>

        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @submit.prevent="signin()">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="user.email" type="email"  id="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="user.password" type="password" id="password" class="form-control">
                    </div>

                    <button class="btn btn-primary btn-block">Sign in</button>
                </form>
            </div>
        </div>
    </div>


</template>
<script>

import axios from 'axios';

export default {

    data() {
        return {
            user:{
                email: '',
                password: ''
            }
        }
    },

    methods: {
         async signin(){
            const reponse = 
                        await axios.post('http://127.0.0.1:8000/api/auth/login', this.user);
            console.log( reponse.data.user.id );
        }
    },
    
}
</script>
<style lang="">
    
</style>