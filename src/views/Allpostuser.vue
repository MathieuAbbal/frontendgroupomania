<template>
  <div>
   <LoginForm v-if="!connected"/>
   <Header v-if="connected"/>
   <PostsByUserId v-if="connected"/> 
   
   
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import PostsByUserId from '@/components/PostsByUserId.vue';


export default {
  name: 'Allpostuser',
  components: {
    LoginForm,
    Header,
    PostsByUserId
   
  },
   data() { 
    return{
      connected: true
    };
  },

  created(){         
    this.userConnected()
  },

  methods: {
    userConnected(){
      if(sessionStorage.user !== undefined){
        this.connected = true;
        console.log('Utilisateur connecté !');
      }
      else if(sessionStorage.user == undefined){
        this.connected = false;
        console.log('Utilisateur non connecté !');
      }
    }
  }
}
</script>