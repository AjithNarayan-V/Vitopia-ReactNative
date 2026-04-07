import { Platform } from "react-native";

import ButtonComponentAndroid from "./ButtonComponent.android";
import ButtonComponentIOS from "./ButtonComponent.ios";

const ButtonComponent = Platform.select({
  ios: ButtonComponentIOS,
  android: ButtonComponentAndroid,
  default: ButtonComponentAndroid,
});

export default ButtonComponent;
