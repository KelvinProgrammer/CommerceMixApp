import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function CTA({ navigation }) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-xl font-bold text-center mb-4">
        Ready to get started?
      </label>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onTap={() => navigation.navigate("Auth")}
      >
        Join Now
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f1f5f9",
  },
});