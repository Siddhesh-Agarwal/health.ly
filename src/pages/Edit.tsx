import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonItemGroup, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export default function EditProfile() {
  type Data = {
    name: string,
    height: number,
    weight: number,
    dob: Date,
    bloodType: string,
    allergies?: string,
    medications?: string,
    medicalConditions?: string,
    identification?: string,
    emergencyContactName?: string,
    emergencyContactNumber?: string,
    insurance?: string
  };

  const [data, setData] = useState<Data>({} as Data);

  const handleInputChange = (event: any) => {
    const target = event.target;
    setData({ ...data, name: target.value });
  }

  const handleSubmit = () => {
    // Save the data to the database
    console.log(data);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Health Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {/* Personal Information */}
          <IonItemGroup>
            <IonItemDivider class='ion-margin-top'>
              <IonTitle color={"primary"}>Personal Information</IonTitle>
            </IonItemDivider>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Name *" placeholder='John Doe' required={true} onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='number' clearOnEdit={true} labelPlacement='floating' label="Height (in cm) *" placeholder='180' required={true} onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='number' clearOnEdit={true} labelPlacement='floating' label="Weight (in kg) *" placeholder='80' required={true} onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='date' clearOnEdit={true} labelPlacement='floating' label="Date of Birth *" placeholder='01/01/2000' required={true} onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Blood Type *" placeholder='A+' required={true} onChange={handleInputChange}></IonInput>
            </IonItem>
          </IonItemGroup>

          {/* Medical Information */}
          <IonItemGroup>
            <IonItemDivider class='ion-margin-top'>
              <IonTitle color={"primary"}>Medical Information</IonTitle>
            </IonItemDivider>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Allergies" placeholder='(if any)' onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Medications" placeholder='(if any)' onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Medical Conditions" placeholder='(if any)' onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='text' clearOnEdit={true} labelPlacement='floating' label="Identification" placeholder='(if any)' onChange={handleInputChange}></IonInput>
            </IonItem>
          </IonItemGroup>

          {/* Emergency Contact */}
          <IonItemGroup>
            <IonItemDivider class='ion-margin-top'>
              <IonTitle color={"primary"}>Emergency Contact</IonTitle>
            </IonItemDivider>
            <IonItem>
              <IonInput type='text' labelPlacement='floating' label="Emergency Contact Name" placeholder='John Doe' onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='tel' labelPlacement='floating' label="Emergency Contact Number" placeholder='123-456-789' onChange={handleInputChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type='text' labelPlacement='floating' label="Insurance" placeholder='(if any)' onChange={handleInputChange}></IonInput>
            </IonItem>
          </IonItemGroup>
        </IonList>
        {/* Save Button */}
        <IonButton type='submit' onChange={() => handleSubmit()} expand="block" color={"success"}> Save </IonButton>
      </IonContent>
    </IonPage>
  );
}