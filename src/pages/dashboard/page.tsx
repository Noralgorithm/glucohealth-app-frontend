import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
} from '@ionic/react'
import { person } from 'ionicons/icons'
import { ROUTES } from '~/shared/constants/routes'
import patientsImg from '~/shared/assets/patients-image.avif'

export function DashboardPage() {
  return (
    <IonPage className='bg-sky-200'>
      <IonHeader className='text-black bg-sky-300'>
        <IonToolbar color={'bg-sky-300'}>          
          <IonTitle>Panel</IonTitle>                 
        </IonToolbar>
      </IonHeader>
      <div className="w-full h-full flex flex-col px-4 max-w-xl m-auto bg-sky-200">
      <IonContent fullscreen className='bg-sky-200'>
          <main className="w-full h-full flex flex-col px-4 max-w-xl m-auto bg-sky-200">
            <IonCard routerLink={ROUTES.APP.PATIENTS.PATH} className="min-h-6 text-black bg-sky-300">
              <img src={patientsImg}></img>
              <IonCardHeader>
                <IonCardTitle className='text-black font-bold'>Pacientes</IonCardTitle>
                <IonIcon icon={person} slot="end" />
              </IonCardHeader>
              <IonCardContent className="-mt-2">
                Ver la lista de pacientes, buscar a un paciente por su
                C.I., añadir nuevos pacientes y asignar
                tratamientos.
              </IonCardContent>
              <div className="flex justify-end">
                <IonButton fill="clear" className='font-bold underline text-black'>Visitar sección</IonButton>
              </div>
            </IonCard>
          </main>
      </IonContent>
      </div>
    </IonPage>
  )
}
