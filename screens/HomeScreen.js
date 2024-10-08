import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    // Estado para el color de fondo
    const [backgroundColor, setBackgroundColor] = useState("white");

    // Funciones para cambiar el color de fondo
    const handlePress1 = () => setBackgroundColor("lightcoral");
    const handlePress2 = () => setBackgroundColor("lightgreen");
    const handlePress3 = () => setBackgroundColor("lightgoldenrodyellow");

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor, height: "100%" }}>
            {/* Contenedor para los botones en la parte superior y alineados horizontalmente */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: "5%" }}>
                <TouchableOpacity
                    onPress={handlePress1}
                    style={{
                        backgroundColor: "red",
                        padding: 10,
                        width: "30%",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
                        rojo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlePress2}
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        width: "30%",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
                        verde
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlePress3}
                    style={{
                        backgroundColor: "orange",
                        padding: 10,
                        width: "30%",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
                        amarillo 
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
            >
                Botones
            </Text> */}

            {/* Botón de navegación que no cambia el fondo */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Imagen")}
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Go to Imagen y Texto
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
