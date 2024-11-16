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
      return '#9370DB'; // Púrpura pastel
    default:
      return '#98FB98'; // Verde pastel
  }
};

const getIconColorByRoute = (path: string) => {
  switch (path) {
    case ROUTES.APP.DASHBOARD.PATH:
      return '#0369A1'; // Azul oscuro
    case ROUTES.APP.PATIENTS.PATH:
      return '#8B4513'; // Marrón oscuro
    default:
      return '#006400'; // Verde oscuro
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
