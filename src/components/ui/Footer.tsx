import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Footer() {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-center text-gray-600 mb-2">
        © 2024 CommerceMix. All rights reserved.
      </label>
      <label className="text-center text-gray-500">
        Contact us: info@commercemix.com
      </label>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#f8fafc",
  },
});