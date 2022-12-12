<template>
  <ion-page>
    <form v-on:submit.prevent="login">
      <ion-card>
        <ion-item>
          <h3>Inicio de Sesión</h3>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Rut</ion-label>
          <ion-input v-model="rut" id="rut" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password" id="password" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-button type="submit" shape="round">
            Sign In
            <ion-icon slot="end" :icon="logIn"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-card>
    </form>
  </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonCard, IonItem, IonLabel, IonButton, IonInput, IonIcon } from '@ionic/vue'
    import { logIn, personAdd } from 'ionicons/icons';
    import { useRouter } from 'vue-router';

    export default {
    name: 'SignIn',
    components: { IonPage, IonCard, IonItem, IonLabel, IonButton, IonInput, IonIcon },
    setup() {
        const router = useRouter();
        
        return {
        router,
        logIn,
        personAdd
        };
    },
    data() {
        return {
            rut: "",
            password: "",
            error: false,
            error_msg: "",
        };
    },
    methods: {
        login() {
            //console.log(this.rut);
        }
    } 
}
</script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>