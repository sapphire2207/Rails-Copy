import { IonContent,  IonPage } from '@ionic/react';
import Tab2Container from '../components/Tab2Container'; 
import './Tab2.css';

const Tab2: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Tab2Container  />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;