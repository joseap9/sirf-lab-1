<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>SIRF</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">SIRF</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button expand="block" shape="round" fill="outline" color="green">Block</ion-button>
      <br/>
      <ion-button expand="block" shape="round" fill="outline" color="secondary">Block</ion-button>
      <br/>
      <ion-button expand="block" shape="round" fill="outline" color="tertiary">Block</ion-button>
      <br/>
    </ion-content>
  </ion-page>
   
  </template>
  
  <script lang="ts">
    import { IonButton } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton },
    });
  </script>