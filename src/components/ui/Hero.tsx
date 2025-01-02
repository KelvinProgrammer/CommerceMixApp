import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Hero() {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-3xl font-bold text-center mb-4">
        Welcome to CommerceMix
      </label>
      <label className="text-lg text-center text-gray-600">
        Your One-Stop Solution for Insurance, ICT Services, and Auditing
      </label>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#f8fafc",
  },
});