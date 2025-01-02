import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

export type NavigationProp = FrameNavigationProp<MainStackParamList, keyof MainStackParamList>;

export function navigateTo(navigation: NavigationProp, screen: keyof MainStackParamList) {
  navigation.navigate(screen);
}