import { Text, View, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState<string>("");

  const incrementarContador = () => {
    setContador(contador + 1);
  }

  useEffect(() => {
    if (contador % 5 === 0 && contador !== 0) {
      setMensaje("¡Ha alcanzado un múltiplo de 5!");
    } else {
      setMensaje("");
    }
  }, [contador]);
  
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      {/* Uso de operador ternario para toma de decisiones */}

      {/* Actualizacion de estado usando operadores logicos y funcion del estado */}
      <Button title="Contador" onPress={() => {
        incrementarContador();
      }}/>
      <Text>Contador incrementado hasta: {contador} </Text>
      {mensaje !== "" && <Text>{mensaje}</Text>}
      
    </View>
  );
}