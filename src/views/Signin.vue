<template lang="">
    <div>
        <h1>Signin</h1>

        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @submit.prevent="_submit()">
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

import { mapActions } from 'vuex';

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
            ...mapActions({
                'signin': 'auth/signin'
            }),
          _submit(){
              this.signin( this.user ).then(
                  () => this.$router.replace({name: 'Dashboard'})
              )
          }
    },
    
}
</script>
<style lang="">
    
</style>