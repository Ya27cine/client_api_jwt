<template lang="">
    

    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <Router-link class="navbar-brand" :to="{name: 'Home'}">Blog</Router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-if="isAuth" class="nav-item">
                    <Router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard </Router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">      

                <li  v-if="!isAuth" class="nav-item">
                    <Router-link class="nav-link" :to="{name: 'Signin'}">Signin </Router-link>
                </li>

                <li v-if="isAuth"  class="nav-item">
                    <a class="nav-link" href="#">{{ user.name}} </a>
                </li>

                <li v-if="isAuth" class="nav-item">
                    <a class="nav-link" href="#">Logout </a>
                </li>

            </ul>
            
        </div>
    </nav>

</template>
<script>
    import {mapGetters} from 'vuex'

export default {
    computed: {

        ...mapGetters({
            'isAuth': 'auth/isAuth',
            'user': 'auth/getUser'
        })
    }
    
}
</script>
<style lang="">
    
</style>
