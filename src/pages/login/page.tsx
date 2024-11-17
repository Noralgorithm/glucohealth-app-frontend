import { IonPage, IonContent, IonText } from '@ionic/react'
import { LoginForm } from './components/login-form'
import logo from '~/shared/assets/logo.png'
import darkLogo from '~/shared/assets/logo-dark.png'

export function LoginPage() {
  let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <IonPage className='bg-sky-200'>
      <div className="w-full h-full flex flex-col px-4 max-w-xl m-auto bg-sky-200">
        <IonContent fullscreen className='bg-sky-200'>
          <main className="w-full h-full flex justify-center items-center flex-col gap-5 px-5 bg-sky-200">
            <IonText className="text-center flex flex-col items-center">
              <img src={logo} alt="GlucoHealth" className="w-[90%] max-w-xl" />  
              <h2>Bienvenido, enfermero/a</h2>
            </IonText>
            <LoginForm />
          </main>
        </IonContent>
      </div>
    </IonPage>
  )
}
