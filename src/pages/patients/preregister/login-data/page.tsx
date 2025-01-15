import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonInput,
  IonIcon,
  IonButton,
  IonTextarea,
} from '@ionic/react'
import { PageHeader } from '../components/page-header'
import { key, mail } from 'ionicons/icons'
import { useParams, useLocation } from 'react-router'
import { decrypt } from '~/shared/utils/aes-encryption'
import { ROUTES } from '~/shared/constants/routes'
import logo from '~/shared/assets/logo.png'

export function PatientPreregisterLoginDataPage() {
  const { search } = useLocation()

  const searchParams = new URLSearchParams(search)

  const encryptedEmail = searchParams.get('e')
  const encryptedPassword = searchParams.get('p')

  if (!encryptedEmail || !encryptedPassword) {
    //TODO: REDIRECT
    return <h1>Error</h1>
  }

  const email = decrypt(encryptedEmail)
  const password = decrypt(encryptedPassword)

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
          <h3 className="ml-4 text-xl font-bold">
            Inicio de sesión del usuario
          </h3>

          <section>
            <div className="flex items-center">
              <IonIcon icon={mail} className="w-20 h-8" style={{ color: '#CA8A04' }}/>
              <IonInput
                label="Correo electrónico"
                labelPlacement="stacked"
                value={email}
                disabled={true}
              />
            </div>
            <div className="flex items-center">
              <IonIcon icon={key} className="w-20 h-8" style={{ color: '#CA8A04' }}/>
              <IonInput
                label="Contraseña (Provisional)"
                labelPlacement="stacked"
                value={password}
                disabled={true}
              />
            </div>
          </section>

          <section className="flex justify-center items-center w-full mt-5">
            <p className="text-center">
              Estos datos también serán enviados al correo electrónico del
              usuario.
            </p>
          </section>

          <IonButton routerLink={ROUTES.APP.PATIENTS.PATH} className="bg-yellow-500 rounded-md" color={'bg-yellow-700'}>
            Volver a lista de pacientes
          </IonButton>
        </main>
      </IonContent>
    </IonPage>
  )
}
