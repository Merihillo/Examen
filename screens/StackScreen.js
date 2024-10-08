import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const StackScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>FORTNITE</Text>
            <Text style={styles.paragraph}>
            FORTNITE BATALLA COMPAL
            </Text>

            <Text style={styles.paragraph}>
            Ahora Juega RELOAD EN ZERO BUILD ZZZ
            </Text>

            <Image
                source={require('../assets/fort.png')} // Segunda imagen de ejemplo
                style={styles.image}
            />

            <Text style={styles.paragraph}>
            Este modo solo lo juega las personas sin brazos
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, // Ajusta los márgenes laterales y superior
        backgroundColor: '#f5f5f5',

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: '100%', // Ajusta el ancho de la imagen
        height: 700,  // Ajusta la altura de la imagen
        borderRadius: 10, // Bordes redondeados en la imagen
        marginBottom: 70,
        resizeMode: 'contain', // O usa 'cover' dependiendo de tu preferencia
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 28,
        textAlign: 'justify', // Justifica el texto
        marginBottom: 20, // Espacio entre párrafos
        color: '#444', // Color del texto
    },
});

export default StackScreen;
