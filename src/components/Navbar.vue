<template lang="">
    

    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <Router-link class="navbar-brand" :to="{name: 'Home'}">Blog</Router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <Router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard </Router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">       
                <li class="nav-item">
                    <Router-link class="nav-link" :to="{name: 'Signin'}">Signin </Router-link>
                </li>
            </ul>
        </div>
    </nav>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
