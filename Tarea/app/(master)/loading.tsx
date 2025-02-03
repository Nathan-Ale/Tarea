import React from "react";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

export default function SimulacionCarga() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(temporizador); // Se limpia el Timeout
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {cargando ? (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text style={{ fontSize: 20 }}>Cargando...</Text>
        </>
      ) : (
        <Text style={styles.bienvenido}>
          Bienvenido a la aplicación
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    bienvenido:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    }});