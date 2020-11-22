import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonNote,
  IonDatetime,
} from '@ionic/react';
import { InputChangeEventDetail } from '@ionic/core';
import React from 'react';
import Signature from './Signature';
import { useGlobalState } from '../core/context';

import './Menu.css';

const Menu: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  const handleFirstNameChange = (evt: CustomEvent<InputChangeEventDetail>) => {
    dispatch({ type: 'SET_FIRSTNAME', payload: evt.detail.value });
  };

  const handleLastNameChange = (evt: CustomEvent<InputChangeEventDetail>) => {
    dispatch({ type: 'SET_LASTNAME', payload: evt.detail.value });
  };

  const handleBirthDateChange = (evt: CustomEvent<InputChangeEventDetail>) => {
    dispatch({ type: 'SET_BIRTHDATE', payload: evt.detail.value });
  };

  const handleSignatureURIChange = (uri: string) => {
    dispatch({ type: 'SET_SIGNATURE', payload: uri });
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Vos Informations</IonListHeader>

          <IonItem>
            <IonLabel position="floating">FirstName</IonLabel>
            <IonInput
              value={state.firstName}
              onIonChange={handleFirstNameChange}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">LastName</IonLabel>
            <IonInput
              value={state.lastName}
              onIonChange={handleLastNameChange}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Birthdate</IonLabel>
            <IonDatetime
              displayFormat="DD/MM/YYYY"
              placeholder="Pick your birthdate"
              value={state.birthDate}
              onIonChange={handleBirthDateChange}
            />
          </IonItem>

          <Signature
            uri={state.signatureURI}
            onSave={handleSignatureURIChange}
          />

          <IonNote>{state.address}</IonNote>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
