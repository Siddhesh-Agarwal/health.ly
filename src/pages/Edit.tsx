import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemGroup, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { PrismaClient, Prisma } from "@prisma/client";

export default function EditProfile() {
  type MedicalData = {
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
    insuranceProvider?: string
    insuranceNumber?: string
  };

  const prisma = new PrismaClient();
  async function createUser(data: MedicalData) {
    const user = await prisma.medicalData.create({
      data: {
        name: data.name,
        height: data.height,
        weight: data.weight,
        dob: data.dob,
        bloodGroup: data.bloodType,
        allergies: data.allergies,
        medications: data.medications,
        medicalHistory: data.medicalConditions,
        identification: data.identification,
        emergencyContactName: data.emergencyContactName,
        emergencyContactNumber: data.emergencyContactNumber,
        insuranceProvider: data.insuranceProvider,
        insuranceNumber: data.insuranceNumber
      }
    })
    return user;
  }


  const [data, setData] = useState<MedicalData>({} as MedicalData);

  function handleInputChange(event: any) {
    const target = event.target;
    setData({ ...data, name: target.value });
    console.log(data);
  }

  function handleSubmit() {
    createUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Edit Info</IonTitle>
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