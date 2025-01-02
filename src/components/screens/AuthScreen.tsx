import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Button } from "../ui/Button";
import { TextField } from "../ui/TextField";
import { Card } from "../ui/Card";
import { NavigationProp, navigateTo } from "../../utils/navigation";

interface AuthScreenProps {
  navigation: NavigationProp;
}

export function AuthScreen({ navigation }: AuthScreenProps) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    navigateTo(navigation, "Dashboard");
  };

  return (
    <flexboxLayout style={styles.container}>
      <Card className="w-11/12">
        <label className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </label>
        
        <TextField
          hint="Email"
          keyboardType="email"
          text={email}
          onTextChange={(e) => setEmail(e.value)}
          className="mb-4"
        />
        
        <TextField
          hint="Password"
          secure={true}
          text={password}
          onTextChange={(e) => setPassword(e.value)}
          className="mb-4"
        />

        <Button
          label={isLogin ? "Login" : "Sign Up"}
          onTap={handleSubmit}
          className="mb-4"
        />

        <Button
          label={isLogin ? "Need an account? Sign up" : "Have an account? Login"}
          onTap={() => setIsLogin(!isLogin)}
          variant="secondary"
        />
      </Card>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});