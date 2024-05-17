import React, {useState} from 'react';
import {View, Text, Alert, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

interface QRReadEvent {
  data: string;
}

const QRCodeScannerScreen: React.FC = () => {
  const [data, setData] = useState<string>('scan');

  const handleRead = (event: QRReadEvent) => {
    setData(event.data);
    //Kiểm tra có phải đường link hay không
    if (/^https?:\/\//.test(event.data)) {
      Linking.openURL(event.data).catch(err =>
        console.error('An error occurred trying to open URL:', err),
      );
    } else {
      Alert.alert('Scanned Data', event.data);
    }
  };

  return (
    <QRCodeScanner
      onRead={handleRead}
      reactivate={true} // quét lại
      reactivateTimeout={5000} //5 giây quét 1 lần
      showMarker={true}
      topContent={
        <View>
          <Text>{data}</Text>
        </View>
      }
    />
  );
};

export default QRCodeScannerScreen;
