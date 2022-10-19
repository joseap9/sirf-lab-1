<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ $route.params.nombre }}</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <div>
            <ion-grid :fixed="true">
                <ion-row>
                    <ion-col><ion-button expand="block" shape="round" fill="outline" color="primary">Agregar Alumno</ion-button></ion-col>
                    <ion-col><ion-button expand="block" shape="round" fill="outline" color="secondary">Ver Lista</ion-button></ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div>
            <ion-grid :fixed="true">
                <ion-row>
                    <ion-col><ion-button expand="block" shape="round" fill="outline" color="primary">Tomar Asistencia</ion-button></ion-col>
                </ion-row>
            </ion-grid>
        </div>
      </ion-content>
    </ion-page>
     
  </template>
    
  <script lang="ts">
      import { IonCol, IonGrid, IonRow } from '@ionic/vue';
      import { defineComponent, ref } from 'vue';
      import { Curso } from "@/interfaces/Curso";
      
      export default defineComponent({
        components: { IonCol, IonGrid, IonRow },
        setup(){
          const dataCursos = ref<Curso[]>([
            {id:123,nombre:"Complejidad Algoritmos",total:43}, 
            {id:456,nombre:"Ing Software",total: 38},
            {id:678,nombre:"Programacion Computacional",total: 38}
          ]);
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