import { Button } from "@/components/button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="Voltar" onPress={() => router.back()}/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})