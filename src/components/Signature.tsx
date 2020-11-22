import React, { useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { IonButton, IonButtons, IonLabel } from '@ionic/react';

interface SignatureProps {
  onSave: (uri: string) => void | Promise<void>;
  uri?: string;
}

const Signature: React.FC<SignatureProps> = ({ onSave, uri }) => {
  const canvasRef = useRef<any>();

  useEffect(() => {
    canvasRef.current.fromDataURL(uri);
  }, [canvasRef.current, uri]);

  const handleSave = () => {
    onSave(canvasRef.current.toDataURL('image/png'));
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div>
      <IonLabel>Signature</IonLabel>
      <SignatureCanvas
        canvasProps={{
          width: 500,
          height: 200,
          style: { background: 'white' },
        }}
        ref={ref => (canvasRef.current = ref)}
      />
      <IonButtons>
        <IonButton onClick={handleSave}>Save</IonButton>
        <IonButton onClick={handleClear}>Clear</IonButton>
      </IonButtons>
    </div>
  );
};

export default Signature;
