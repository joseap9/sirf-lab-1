<template>
  
  <ion-app>

    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-menu-toggle>
                <div v-for="item in dataApiProfesor" :key="item.rut">
                  <ion-item router-direction="root" router-link="/" >
                      <ion-label>
                          <ion-header>
                            <h1> <strong>{{ item.nombre }}</strong></h1> 
                          </ion-header>
                          <ion-note>{{ item.rut }}</ion-note>
                      </ion-label>
                  </ion-item>    
                </div> 
            </ion-menu-toggle>

  
            <ion-menu-toggle v-for="(p, i) in dataApiAsignaturas" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.nombre" lines="none" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkOutline"></ion-icon>
                <ion-label>{{ p.nombre }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
  
          <ion-list id="labels-list">
            <!-- <ion-list-header>Labels</ion-list-header> -->
          

            <ion-menu-toggle  >
              <ion-item router-direction="root" router-link="/folder/Inbox" lines="none" class="hydrated" >
              <ion-icon slot="start" ios="settingsOutline" md="settingsOutline"></ion-icon>
              <ion-label>Configuración</ion-label>
            </ion-item>
            </ion-menu-toggle>
            
            <!-- <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </ion-item> -->
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
//import { IonButton } from '@ionic/vue';
import { IonApp, IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, bookOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, settingsOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { Profesor } from './interfaces/Profesor';
import { Asignatura } from './interfaces/Asignatura';
import { getProfesor,getAsignaturas } from "@/services/ProfesorServices";

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList,
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  setup() {

    const dataApiProfesor = ref<Profesor[]>([]);
    const dataApiAsignaturas = ref<Asignatura[]>([]);
    

    const getDataProfesor = async () => {

      const rut = "26970671";
      const password = "123456";
      
      try {
        const response = await getProfesor(rut, password);
        dataApiProfesor.value = response;
        
      } catch (error) {

        console.log(error);
      }
    }

    const getDataAsignatura = async () => {

      const rut = "26970671";

      try {
        //const id_profesor = dataApiProfesor.value[0].id_profesor;
        const response = await getAsignaturas(rut);
        dataApiAsignaturas.value = response;
        
        console.log(dataApiAsignaturas.value);
        
      } catch (error) {

        console.log(error);
      }
    }

    onMounted( () => { getDataProfesor() } );
    onMounted( () => { getDataAsignatura() } );

    const selectedIndex = ref(0);
    const appPages = [
      {
        title: 'Complejidad de Algoritmos',
        url: '/Complejidad de Algoritmos',
        iosIcon: bookOutline,       
        mdIcon: bookOutline,    },
      {
        title: 'Programacion de Aplicaciones',
        url: '/Programacion de Aplicaciones',
        iosIcon: bookOutline,       
        mdIcon: bookOutline,    },
      {
        title: 'Ing. Software',
        url: '/Ing. Software',
        iosIcon: bookOutline,       
        mdIcon: bookOutline,    },
      {
        title: 'Progamación Computacional',
        url: '/Progamación Computacional',
        iosIcon: bookOutline,
        mdIcon: bookOutline,     },
        {
        title: 'SIRF',
        url: '/SIRF',
        iosIcon: bookOutline,
        mdIcon: bookOutline,     },
    ];
    //const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return { 
      selectedIndex,
      appPages, 
      //labels,
      archiveOutline, 
      archiveSharp, 
      bookmarkOutline, 
      bookmarkSharp, 
      heartOutline, 
      heartSharp, 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp,
      dataApiProfesor,
      dataApiAsignaturas,
      isSelected: (url: string) => url === route.path ? 'selected' : ''
    }
  }
});
</script>

<style scoped>
 ion-button {
    --background: #93e9be;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: blue;

    --border-radius: 0;
    --border-color: #000;
    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
