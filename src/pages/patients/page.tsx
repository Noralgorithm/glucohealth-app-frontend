import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonIcon,
  IonSearchbar,
  IonFab,
  IonFabButton,
} from '@ionic/react'
import { add } from 'ionicons/icons'
import { ROUTES } from '~/shared/constants/routes'
import { PatientsList } from './components/patients-list/patients-list'
import { useState } from 'react'
import logo from '~/shared/assets/logo.png'


export function PatientsPage() {
  let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches

  const [nationalId, setNationalId] = useState('')

  return (
    <IonPage className="bg-yellow-100">
      <IonHeader className="text-black bg-yellow-200">
        <IonToolbar color={'bg-yellow-200'}>
          <div className="flex items-center w-full">
            <IonTitle className="flex-grow">Pacientes</IonTitle>
              <img
                src={logo}
                alt="GlucoHealth"
                className="h-16 m-4"
              />
          </div>
        </IonToolbar>
      </IonHeader>
      <div className="w-full h-full flex flex-col px-4 max-w-xl m-auto bg-yellow-100">
        <IonContent fullscreen className='bg-yellow-100'>
          <main className="w-full h-full flex flex-col px-4 max-w-xl m-auto bg-yellow-100">
            <header
              slot="fixed"
              className={`pt-10 pb-5 ${isDarkMode ? 'bg-bg-datetime-customized-color-dark' : 'bg-bg-datetime-customized-color-light'}`}
            >
              <span className="ml-4 font-bold text-lg">Buscar paciente</span>
              <IonText className="">
                <IonSearchbar
                  mode="ios"
                  placeholder="Cédula de identidad"
                  onIonInput={e => setNationalId(e.detail.value!)}
                ></IonSearchbar>
              </IonText>
            </header>
            <h1 className="ml-4 text-xl font-bold">Lista de Pacientes</h1>
            <section className="w-full h-full flex flex-col items-center">
              <PatientsList nationalId={nationalId} />

              <IonFab className="fixed bottom-5 right-6">
                <IonFabButton className="bg-yellow-500 rounded-full" color={'bg-yellow-700'} routerLink={ROUTES.APP.PATIENTS.PREREGISTER.PATH}>
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFab>
            </section>
          </main>
        </IonContent>
      </div>
    </IonPage>
  )
}
