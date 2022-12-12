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
      <div v-for="item in dataApiAsignaturas" :key="item.id_asignatura">
        <ion-card color="light">
          <ion-card-header>
            <ion-card-title router-direction="root" :router-link="/curso/+item.nombre">{{item.nombre}}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Bloque Horario: {{item.hora_termino}}
          </ion-card-content>

          <ion-button expand="block" shape="round" fill="outline" color="secondary">Pasar Lista</ion-button>
        </ion-card>
        <br/>
      </div>
    </ion-content>
  </ion-page>
   
</template>
  
<script lang="ts">
    import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
    import { defineComponent, ref, onMounted } from 'vue';
    import { Asistencia } from "@/interfaces/Asistencia";
    import { useRoute } from 'vue-router';
    import { Asignatura } from '@/interfaces/Asignatura';
    import { getAsignaturas } from '@/services/ProfesorServices';
    
    export default defineComponent({
      components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton},
      setup(){
        const dataApiAsignaturas = ref<Asignatura[]>([]);

        const getDataAsignatura = async () => {

          const rut = "26970671";

          try {
            
            const response = await getAsignaturas(rut);
            dataApiAsignaturas.value = response;
            
            console.log(dataApiAsignaturas.value);
            
          } catch (error) {

            console.log(error);
          }
        }

        onMounted( () => { getDataAsignatura() } );

        const dataCursos = ref<Asistencia[]>([]);
        const route = useRoute();
        const nombre = route.params.nombre;
        return { dataCursos, nombre, dataApiAsignaturas }
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