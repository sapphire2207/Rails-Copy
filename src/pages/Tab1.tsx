import { IonContent,  IonPage } from '@ionic/react';
import Tab1Container from '../components/Tab1Container'; 
import './Tab1.css';

const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Tab1Container  />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;