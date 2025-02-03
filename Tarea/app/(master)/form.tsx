import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function RegistrationScreen() {
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
    });

    const [errores, setErrores] = useState({
        nombre: '',
        edad: '',
    });

    const validarUsuario = () => {
       let erroresTemp: any = {};
       
       if (!usuario.nombre.trim()) erroresTemp.nombre = 'El nombre es obligatorio';
       if (!usuario.edad.trim()) erroresTemp.edad = 'La edad es obligatoria';

       setErrores(erroresTemp);
    };

    const manejarCambio = (campo: string, valor: string) => {
        
        if (campo === 'edad' && !/^[0-9]*$/.test(valor)) {
            Alert.alert('Error', 'La edad debe ser un número');}
        
        validarUsuario();
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [campo]: valor,
        }));
    }
    const manejarRegistro = () => {
        validarUsuario();
        if (Object.keys(errores).length === 0) {
            //Alert.alert('Registro exitoso', `Bienvenido ${usuario.nombre} ${usuario.apellido}`);
            Alert.alert("Hola " + usuario.nombre + " " + "Tienes " + usuario.edad + " años");
        
        }else{
            Alert.alert('Error', 'Por favor corrija los campos');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.Container}>
            <Text>Formulario</Text>
            <Text style={styles.label}>
                Nombre: {usuario.nombre}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                value={usuario.nombre}
                onChangeText={(texto) => { manejarCambio('nombre', texto) }}
            />
            {errores.nombre && <Text style={styles.error}>{errores.nombre}</Text>}

            <Text style={styles.label}>
                Edad: {usuario.edad}
            </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su edad"
            value={usuario.edad}
            onChangeText={(texto) => { manejarCambio('edad', texto) }}
            />
            {errores.edad && <Text style={styles.error}>{errores.edad}</Text>}
        

            <Button title="Entrar" onPress={manejarRegistro}/>

        </ScrollView>
    );
    
};


const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize: 12,
        margin:10,
    },
    Container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    }
});