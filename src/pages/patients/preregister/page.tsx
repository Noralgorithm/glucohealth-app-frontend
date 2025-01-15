import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react'
import { PreregisterForm } from './components/preregister-form'
import { PageHeader } from './components/page-header'
import logo from '~/shared/assets/logo.png'

export function PatientPreregisterPage() {
  return (
    <IonPage className="bg-yellow-100">
      <IonHeader className="text-black bg-yellow-200">
        <IonToolbar color={'bg-yellow-200'}>
          <div className="flex items-center w-full">
            <IonTitle className="flex-grow">Registro previo</IonTitle>
              <img
                src={logo}
                alt="GlucoHealth"
                className="h-16 m-4"
              />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='bg-yellow-100'>
        <main className="bg-yellow-100 w-full h-full flex flex-col justify-center items-center px-5 gap-8">
          <PageHeader text="Para registrar a un nuevo paciente, ingrese el correo electrónico y CI del paciente. Cuando el paciente inicie sesión en su aplicación deberá ingresar sus datos personales." />
          <PreregisterForm />
        </main>
      </IonContent>
    </IonPage>
  )
}
