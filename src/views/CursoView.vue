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
            <div v-for="item in dataApiAsistencia" :key="item.id">
              <apexchart type="donut" width="380" height="380" :options="chartOptions" :series=[item.asistentes,item.total_asignatura-item.asistentes]></apexchart>
              <br/>
              <h2>Asistentes: {{item.asistentes}}</h2>
              <h2>Inasistentes: {{item.total_asignatura - item.asistentes}}</h2>
            </div>
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
import { defineComponent, ref, onMounted } from 'vue';
import { Asistencia } from "@/interfaces/Asistencia";
import { getAsistenciaFecha } from '@/services/ProfesorServices';


export default defineComponent({
  components: { IonCol, IonGrid, IonRow, IonPage, IonContent, IonHeader, IonButton, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonCard,IonCardHeader, IonCardContent, IonCardTitle },
  setup() {

    const dataApiAsistencia = ref<Asistencia[]>([]);

    const getDataAsignatura = async () => {
      const fecha = "22-11-09";
      const nombre_asignatura = "programacion de aplicaciones";
      try {
        
        const response = await getAsistenciaFecha(fecha, nombre_asignatura)
        dataApiAsistencia.value = response;
        
        console.log(dataApiAsistencia.value);
        
      } catch (error) {

        console.log(error);
      }
      }

    onMounted( () => { getDataAsignatura() } );

    return { dataApiAsistencia }
  },
  data() {

    /* const dataApiAsistencia = ref<Asistencia[]>([]);

    const getDataAsignatura = async () => {
      const fecha = "22-11-09";
      try {
        
        const response = await getAsistenciaFecha(fecha)
        dataApiAsistencia.value = response;
        
        console.log(dataApiAsistencia.value);
        
      } catch (error) {

        console.log(error);
      }
      }

    onMounted( () => { getDataAsignatura() } ); */

    return {
      //series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Asistentes', 'No Asistentes',],
        colors: ['#58D68D', '#EC7063'],
        noData: {text: 'Loading...'},
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