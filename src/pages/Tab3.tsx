import { IonContent,  IonPage } from '@ionic/react';
import Tab3Container from '../components/Tab3Container'; 
import './Tab3.css';

const Tab3: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Tab3Container  />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;