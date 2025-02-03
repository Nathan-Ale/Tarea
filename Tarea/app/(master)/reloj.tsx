import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Reloj() {
    //Estado hora en el que se almacena la hora actual
  const [hora, setHora] = useState(new Date());

  //Para actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo); // Se limpia el intervalo al demostrar
  }, []);

    const formatoHora = hora.toLocaleTimeString();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30}}>Hora actual:</Text>
      <Text style={{ fontSize: 35, color: "green" }}>{formatoHora}</Text>
    </View>
  );
}

