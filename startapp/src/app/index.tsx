import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
    const [name, setName] = useState("")

    function handleNext() {
        router.navigate("/dashboard")
    }
    /* function handleMessage() {
        Alert.alert(`Olá ${name}!`)
    } */

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>
            <Input onChangeText={setName} />
            <Button title="Continuar" onPress={handleNext} activeOpacity={0.3} />
            {/* <Button title="Continuar" onPress={handleMessage} activeOpacity={0.3} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        gap: 16
    },
    title: {
        color: "#453467",
        fontSize: 24,
        fontWeight: "bold"
    }
})
