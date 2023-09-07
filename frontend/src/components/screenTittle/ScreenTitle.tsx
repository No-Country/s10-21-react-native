import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { style } from "./screenTitleStyle";
import { BackArrow } from "../../../assets/Icons/SVGicons";
import { useNavigation } from "@react-navigation/native";

type titleProps = {
  text: string;
  backButton?: boolean;
};

const ScreenTitle = ({ text, backButton = false }: titleProps) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {backButton && (
        <TouchableOpacity
          style={style.backButton}
          onPress={() => navigation.goBack()}
        >
          <View>
            <BackArrow color="#fff" size="32" />
          </View>
        </TouchableOpacity>
      )}
      
      <Text style={style.textHeader}>{text}</Text>
    </View>
  );
};

export default ScreenTitle;
