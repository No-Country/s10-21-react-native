import { View, Text, TouchableHighlight } from "react-native";
import { style } from "./screenTitleStyle";
import { BackArrow } from "../../../assets/Icons/SVGicons";

type titleProps = {
  text: string;
  backButton?: boolean;
};

const ScreenTitle = ({ text, backButton = false }: titleProps) => {
  return (
    <View style={style.container}>
      {backButton && (
        <TouchableHighlight style={style.backButton}>
          <BackArrow color="#fff" size="32"/>
        </TouchableHighlight>
      )}
      <Text style={style.textHeader}>{text}</Text>
    </View>
  );
};

export default ScreenTitle;
