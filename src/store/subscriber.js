import axios from 'axios'
import store from '@/store'

// action :: Mutation { when -> set attr store }
store.subscribe( (action ) => {

    if(action.type === 'auth/setToken')
      if(action.payload){
          axios.defaults.headers.common['Authorization'] = 'Bearer '+action.payload;
          localStorage.setItem('token', action.payload)
      }else{
        axios.defaults.headers.common['Authorization'] = null
        localStorage.removeItem('token')
      }
})

