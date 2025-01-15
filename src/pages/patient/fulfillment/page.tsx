import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonText,
  useIonLoading,
} from '@ionic/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { getPatientTreatmentByDate } from '~/features/treatments/services/get-by-id-and-date'
import { MedicationCard } from '~/shared/components/medication-card'
import { toIsoString } from '~/shared/utils/construct-date-string'
import logo from '~/shared/assets/logo.png'


export function PatientFullfilmentPage() {
  let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches

  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const patientId = searchParams.get('id')

  const [presentLoading, dismissLoading] = useIonLoading()

  const [date, setDate] = useState(new Date())

  const { data: dateTreatment } = useQuery({
    queryKey: ['DAY_TREATMENT_LIST', date, patientId ?? -1],
    queryFn: async () => {
      try {
        presentLoading()
        const res = await getPatientTreatmentByDate(
          patientId!,
          toIsoString(date),
        )
        
        return res
      } catch (e) {
        console.error(e)
      } finally {
        dismissLoading()
      }
    },
  })

  return (
    <IonPage className="bg-yellow-100">
      <IonHeader className="text-black bg-yellow-200">
        <IonToolbar color={'bg-yellow-200'}>
          <div className="flex items-center w-full">
            <IonTitle className="flex-grow">Tratamiento</IonTitle>
              <img
                src={logo}
                alt="GlucoHealth"
                className="h-16 m-4"
              />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-yellow-100">
        <div
          className="flex justify-center bg-yellow-100"
        >
          <IonDatetime
            locale="es"
            mode="ios"
            id="treatmentDay"
            presentation="date"
            onIonChange={e => setDate(new Date(e.detail.value as string))}
            max={new Date().toISOString()}
            className="bg-yellow-200 rounded-md mt-4"
          ></IonDatetime>
        </div>

        <IonText className="flex justify-center bg-yellow-100">
          <h1 className="ml-2 text-xl font-bold">Medicaciones</h1>
        </IonText>
        <div className="w-full h-full px-4 m-auto flex justify-center bg-yellow-100">
          {(dateTreatment?.length === 0 ||
            dateTreatment?.every(dt => dt.schedule.length === 0)) && (
            <h4 className="pl-3 italic opacity-50">
              Sin tratamiento este día.
            </h4>
          )}

          {dateTreatment?.map(treatment =>
            treatment.schedule.map(schedule => {
              return (
                <MedicationCard
                  key={
                    schedule.expectedTakingTimestamp +
                    treatment.medicament.tradeName
                  }
                  medication={{
                    medicament: treatment.medicament.tradeName,
                    dosage: treatment.dose,
                    time: schedule.expectedTakingTimestamp.toLocaleTimeString(
                      [],
                      { hour: '2-digit', minute: '2-digit', hour12: true },
                    ),
                    taken: schedule.actualTakingTimestamp !== null,
                  }}
                />
              )
            }),
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}
