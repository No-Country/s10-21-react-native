import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import ScreenTitle from "../screenTittle/ScreenTitle";
import { style } from "./searchHeaderStyles";
import { SearchIcon } from "../../../assets/Icons/SVGicons";
import { useState } from "react";

const SearchHeader = () => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View>
      <ScreenTitle text="Search" />
      <View style={style.container}>
        <Text style={style.subTittle}>What is in your kitchen?</Text>
        <Text style={style.intruction}>Enter some ingredients</Text>
        <TouchableWithoutFeedback onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
          <View style={[style.inputContainer, isFocused && style.isfocused]}>
            <SearchIcon />
            <TextInput
              style={style.input}
              placeholder="Type your ingredients"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SearchHeader;
