import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
} from '@ionic/react'
import { CreateMedicationForm } from './components/create-medication-form/create-medication-form'
import { useLocation } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getTreatmentById } from '~/features/treatments/services/get-by-id'
import { QUERY_KEYS } from '~/features/treatments/constants'
import logo from '~/shared/assets/logo.png'

export function PatientCreateMedicationPage() {
  const { search } = useLocation()

  const searchParams = new URLSearchParams(search)

  const treatmentId = searchParams.get('treatment-id')

  if (!treatmentId) {
    //TODO: Redirection
    return <></>
  }

  const { data, isSuccess } = useQuery({
    enabled: !!treatmentId,
    queryFn: () => getTreatmentById(treatmentId),
    queryKey: [QUERY_KEYS.TREATMENT_DATA],
  })

  return (
    <IonPage className="bg-yellow-100">
      <IonHeader className="text-black bg-yellow-200">
        <IonToolbar color={'bg-yellow-200'}>
          <div className="flex items-center w-full">
            <IonTitle className="flex-grow">Crear medicación</IonTitle>
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
          <main className="flex h-full flex-col gap-5 px-5 pt-12 max-w-2xl mx-auto bg-yellow-100">
            {!isSuccess ? (
              <div className="w-full h-full flex justify-center items-center">
                <IonSpinner />
              </div>
            ) : (
              <CreateMedicationForm treatment={data} />
            )}
          </main>
        </IonContent>
      </div>
    </IonPage>
  )
}
