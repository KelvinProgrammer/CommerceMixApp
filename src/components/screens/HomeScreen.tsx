import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ScrollView } from "@nativescript/core";

// Components
import { Hero } from "../ui/Hero";
import { Services } from "../ui/Services";
import { CTA } from "../ui/CTA";
import { Footer } from "../ui/Footer";

export function HomeScreen() {
  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <Hero />
        <Services />
        <CTA />
        <Footer />
      </flexboxLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  }
});