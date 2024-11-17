import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonIcon,
  IonChip,
} from '@ionic/react'
import { callOutline, mailOutline } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { logout } from '~/features/auth/model/auth'
import { useStore } from '~/shared/store/store'

export function SettingsPage() {
  const history = useHistory()

  const user = useStore(store => store.user)

  function logoutAndRedirect() {
    logout()
    history.push('/login')
  }

  return (
    <IonPage className="bg-green-200">
      <IonHeader className='text-black bg-green-300'>
        <IonToolbar color={'bg-green-200'}>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>      
      <IonContent fullscreen className='bg-green-200'>
        <div className="w-full h-full px-4 m-auto bg-green-200">
          <main className="flex flex-col w-full h-full pt-7 px-4 items-center max-w-3xl m-auto bg-green-200">
            <section>
              <IonText className="text-center flex flex-col text-balance bg-green-200">
                <h1 className="font-semibold my-0 text-2xl bg-green-200">{user?.fullName}</h1>
                <h2 className="text-lg mt-0 text-text-color-step-400 bg-green-200">
                  CI - {user?.nationalId}
                </h2>
                <IonChip className="w-[fit-content] font-bold bg-green-300" color="primary">
                  Enfermero
                </IonChip>
              </IonText>
            </section>
            <section className="mt-5 ml-2 w-screen text-center pl-3 bg-green-200">
              <h2 className="text-lg font-bold mb-1 bg-green-200">Número de teléfono</h2>
              <p>
                <IonIcon
                  icon={callOutline}
                  color="current"
                  className="mr-2"
                ></IonIcon>
                {user?.phoneNumber}
              </p>
              <h2 className="text-lg font-bold mb-1 mt-7">Correo electrónico</h2>
              <p>
                <IonIcon
                  icon={mailOutline}
                  color="current"
                  className="mr-2"
                ></IonIcon>
                {user?.email}
              </p>
            </section>
            <section className="mt-40">
              <IonButton onClick={logoutAndRedirect} className="w-full bg-green-500 rounded-md" color={'bg-green-500'}>
                Cerrar sesión
              </IonButton>
            </section>
          </main>
        </div>       
      </IonContent>     
    </IonPage>
  )
}
