import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function DashboardScreen({ navigation }) {
  const services = [
    { title: "Insurance", icon: "🛡️", route: "Insurance" },
    { title: "ICT Services", icon: "💻", route: "ICT" },
    { title: "Auditing", icon: "📊", route: "Auditing" },
  ];

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl font-bold mb-6">Dashboard</label>
      
      <gridLayout columns="*, *" rows="auto, auto" className="w-full p-4">
        {services.map((service, index) => (
          <flexboxLayout
            key={service.route}
            style={styles.card}
            col={index % 2}
            row={Math.floor(index / 2)}
            className="m-2 p-4 bg-white rounded-lg shadow"
            onTap={() => navigation.navigate(service.route)}
          >
            <label className="text-3xl mb-2">{service.icon}</label>
            <label className="text-lg font-semibold">{service.title}</label>
          </flexboxLayout>
        ))}
      </gridLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 16,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
  },
});