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
      <div v-for="item in dataCursos" :key="item.id">
        <ion-card color="light">
          <ion-card-header>
            <ion-card-title>{{item.nombre}}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Total Estudiantes: {{item.total}}
          </ion-card-content>

          <ion-button expand="block" shape="round" fill="outline" color="secondary">Pasar Lista</ion-button>
        </ion-card>
        <br/>
      </div>
    </ion-content>
  </ion-page>
   
</template>
  
<script lang="ts">
    import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import { Curso } from "@/interfaces/Curso";
    
    export default defineComponent({
      components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle },
      setup(){
        const dataCursos = ref<Curso[]>([{id:123,nombre:"Complejidad Algoritmos",total:43}, {id:456,nombre:"Ing Software",total: 38}]);
        return { dataCursos }
      }
    });
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>