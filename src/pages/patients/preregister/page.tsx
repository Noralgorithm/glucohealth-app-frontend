import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react'
import { PreregisterForm } from './components/preregister-form'
import { PageHeader } from './components/page-header'

export function PatientPreregisterPage() {
  return (
    <IonPage className="bg-yellow-100">
      <IonHeader className="text-black bg-yellow-200">
        <IonToolbar color={'bg-yellow-200'}>
          <IonTitle>Registro previo</IonTitle>
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
