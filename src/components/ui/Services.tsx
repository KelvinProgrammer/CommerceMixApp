import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Services() {
  const services = [
    {
      title: "Insurance",
      description: "Comprehensive insurance solutions for all your needs",
      icon: "🛡️",
    },
    {
      title: "ICT Services",
      description: "Cutting-edge technology solutions for your business",
      icon: "💻",
    },
    {
      title: "Auditing",
      description: "Professional auditing services you can trust",
      icon: "📊",
    },
  ];

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl font-bold mb-6 text-center">Our Services</label>
      
      {services.map((service) => (
        <flexboxLayout
          key={service.title}
          className="bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <label className="text-3xl mb-2">{service.icon}</label>
          <label className="text-xl font-semibold mb-2">{service.title}</label>
          <label className="text-gray-600">{service.description}</label>
        </flexboxLayout>
      ))}
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
  },
});