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
        <ion-card color="light">
          <ion-card-header>
            <ion-card-title>Asistencia</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <apexchart type="donut" width="380" height="380" :options="chartOptions" :series="series"></apexchart>
          </ion-card-content>

        </ion-card>
        
      </div>

      

      <div>
        <ion-grid :fixed="true">
          <ion-row>
            <ion-col>
              <ion-button expand="block" shape="round" fill="outline" color="primary">Agregar Alumno</ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="block" shape="round" fill="outline" color="secondary">Ver Lista</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div>
        <ion-grid :fixed="true">
          <ion-row>
            <ion-col>
              <ion-button expand="block" shape="round" fill="outline" color="primary">Tomar Asistencia</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>

</template>
    
<script lang="ts">
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Curso } from "@/interfaces/Curso";

export default defineComponent({
  components: { IonCol, IonGrid, IonRow, IonPage, IonContent, IonHeader, IonButton, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonCard,IonCardHeader, IonCardContent, IonCardTitle },
  setup() {

    const dataCursos = ref<Curso[]>([
      { id: 123, nombre: "Complejidad Algoritmos", total: 43 },
      { id: 456, nombre: "Ing Software", total: 38 },
      { id: 678, nombre: "Programacion Computacional", total: 38 }
    ]);



    return { dataCursos }
  },
  data() {
    return {
      series: [44, 55,],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Asistentes', 'No Asistentes',],
        colors: ['#58D68D', '#EC7063'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }],
        
      },
    }

  }
});
</script>
  
<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
ion-card-content {
  display: flex;
  justify-content: center;
}
</style>