import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native-web";

const SettingsScreen = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: "center", marginTop: "20%" }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        marginBottom: 20,
                    }}
                >
                    Video
                </Text>

                <video
                    width="80%" // Ajusta el tamaño del video
                    height="auto"
                    controls // Añade controles de reproducción
                >
                    <source
                        src="../assets/DS-LINES.mp4" // Cambia esta URL por la del video que elijas
                        type="video/mp4"
                    />
                    
                </video>
            </View>
        </ScrollView>
    );
};

// Estilos adicionales
const styles = StyleSheet.create({
    video: {
        width: '80%',  // Ajusta el ancho del video
        height: 200,   // Fija una altura para el video
        marginBottom: 20, // Espacio inferior
    },
});

export default SettingsScreen;
