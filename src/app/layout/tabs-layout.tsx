import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { home, idCard, person, settings } from 'ionicons/icons'
import { ROUTES } from '~/shared/constants/routes'
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

const getBackgroundColorByRoute = (path: string) => {
  switch (path) {
    case ROUTES.APP.DASHBOARD.PATH:
      return '#7DD3FC'; // Celeste pastel
    case ROUTES.APP.PATIENTS.PATH:
      return '#FEF08A'; // Amarillo pastel
    case ROUTES.APP.PATIENTS.PREREGISTER.PATH:
      return '#FEF08A'; // Amarillo pastel
    case ROUTES.APP.PATIENTS.PREREGISTER.LOGIN_DATA.PATH:
      return '#FEF08A'; // Amarillo pastel
    case ROUTES.APP.PATIENT.PATH:
      return '#FEF08A'; // Amarillo pastel
    case ROUTES.APP.PATIENT.FULLFILMENT.PATH:
      return '#FEF08A'; // Amarillo pastel
    case ROUTES.APP.PATIENT.CREATE_MEDICATION.PATH:
      return '#FEF08A'; // Amarillo pastel     
    case ROUTES.APP.SETTINGS.PATH:
      return '#98FB98'; // Verde pastel
    default:
      return '#7DD3FC'; // Celeste pastel
  }
};

const getIconColorByRoute = (path: string) => {
  switch (path) {
    case ROUTES.APP.DASHBOARD.PATH:
      return '#0369A1'; // Azul oscuro
    case ROUTES.APP.PATIENTS.PATH:
      return '#CA8A04'; // Amarillo oscuro
    case ROUTES.APP.PATIENTS.PREREGISTER.PATH:
      return '#CA8A04'; // Amarillo oscuro  
    case ROUTES.APP.PATIENTS.PREREGISTER.LOGIN_DATA.PATH:
      return '#CA8A04'; // Amarillo oscuro
    case ROUTES.APP.PATIENT.PATH:
      return '#CA8A04'; // Amarillo oscuro
    case ROUTES.APP.PATIENT.FULLFILMENT.PATH:
      return '#CA8A04'; // Amarillo oscuro
    case ROUTES.APP.PATIENT.CREATE_MEDICATION.PATH:
      return '#CA8A04'; // Amarillo oscuro     
    case ROUTES.APP.SETTINGS.PATH:
      return '#006400'; // Verde oscuro
    default:
      return '#0369A1'; // Azul oscuro
  }
};

export function TabsLayout({ children }: Props) {
  const location = useLocation();
  const currentBackgroundColor = getBackgroundColorByRoute(location.pathname);
  const currentIconColor = getIconColorByRoute(location.pathname);

  return (
    <IonTabs>
      {children}

      <IonTabBar slot="bottom" style={{ backgroundColor: currentBackgroundColor }}>
        <IonTabButton tab="dashboard" href={ROUTES.APP.DASHBOARD.PATH} style={{ backgroundColor: currentBackgroundColor }}>
          <IonIcon aria-hidden="true" icon={home} style={{ color: currentIconColor }}/>
          <IonLabel >Panel</IonLabel>
        </IonTabButton>
        <IonTabButton tab="patients" href={ROUTES.APP.PATIENTS.PATH} style={{ backgroundColor: currentBackgroundColor }}>
          <IonIcon aria-hidden="true" icon={idCard} style={{ color: currentIconColor }}/>
          <IonLabel >Pacientes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href={ROUTES.APP.SETTINGS.PATH} style={{ backgroundColor: currentBackgroundColor }}>
          <IonIcon aria-hidden="true" icon={person} style={{ color: currentIconColor }}/>
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}
