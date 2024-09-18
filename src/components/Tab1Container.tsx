import './Tab1Container.css';
import { IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logoAmplify } from "ionicons/icons";
import { IonButtons, IonContent, IonMenu, IonMenuButton, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonSkeletonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';


const Tab1Container: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  // Use useEffect to simulate content loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Load content after 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
            <IonIcon className='logo' icon={logoAmplify} />
              Rail Madad
            </IonTitle>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <h2>Good Morning, Hare Krishna</h2>

          {/* Conditionally render skeleton or real content */}
          {isLoading ? (
            // Skeleton content (6 cards in a grid layout)
            <div className="card-grid">
              {Array.from({ length: 6 }).map((_, index) => (
                <IonCard key={index} className="skeleton-card">
                  <IonCardContent>
                    <IonIcon icon={logoAmplify} />
                    <IonSkeletonText animated={true} style={{ width: '80%', height: '30px' }}></IonSkeletonText>
                    <IonSkeletonText animated={true} style={{ width: '60%', height: '20px' }}></IonSkeletonText>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          ) : (
            // Real content with 6 colorful cards
            <div className="card-grid">
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardTitle>Primary Card</IonCardTitle>
                  <IonCardSubtitle>Primary Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Primary Card Content</IonCardContent>
              </IonCard>

              <IonCard color="secondary">
                <IonCardHeader>
                  <IonCardTitle>Secondary Card</IonCardTitle>
                  <IonCardSubtitle>Secondary Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Secondary Card Content</IonCardContent>
              </IonCard>

              <IonCard color="tertiary">
                <IonCardHeader>
                  <IonCardTitle>Tertiary Card</IonCardTitle>
                  <IonCardSubtitle>Tertiary Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Tertiary Card Content</IonCardContent>
              </IonCard>

              <IonCard color="success">
                <IonCardHeader>
                  <IonCardTitle>Success Card</IonCardTitle>
                  <IonCardSubtitle>Success Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Success Card Content</IonCardContent>
              </IonCard>

              <IonCard color="warning">
                <IonCardHeader>
                  <IonCardTitle>Warning Card</IonCardTitle>
                  <IonCardSubtitle>Warning Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Warning Card Content</IonCardContent>
              </IonCard>

              <IonCard color="danger">
                <IonCardHeader>
                  <IonCardTitle>Danger Card</IonCardTitle>
                  <IonCardSubtitle>Danger Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Danger Card Content</IonCardContent>
              </IonCard>
            </div>
          )}
        </IonContent>



      </IonPage>
    </>
  );
};

export default Tab1Container;