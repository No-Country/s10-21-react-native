import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { style } from "./screenTittleStyle";
import { BackArrow } from "../../../assets/Icons/SVGicons";
import { useNavigation } from "@react-navigation/native";

type titleProps = {
  text: string;
  backButton?: boolean;
};

const ScreenTittle = ({ text, backButton = false }: titleProps) => {
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

export default ScreenTittle;
