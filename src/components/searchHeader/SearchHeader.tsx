import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import ScreenTitle from "../screenTittle/ScreenTitle";
import { style } from "./searchHeaderStyles";
import { CancelIcon, SearchIcon } from "../../../assets/Icons/SVGicons";
import { useRef, useState } from "react";

interface SearchHeaderProps {
  getUserQueary: (text: string) => void;
  query: string;
}

const SearchHeader = ({ getUserQueary, query }: SearchHeaderProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);

  const resetInput = () => {
    textInputRef.current.clear();
  };
  return (
    <View>
      <ScreenTitle text="Search" />
      <View style={style.container}>
        <Text style={style.subTittle}>What is in your kitchen?</Text>
        <Text style={style.intruction}>Enter some ingredients</Text>
        <TouchableWithoutFeedback
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <View style={[style.inputContainer, isFocused && style.isfocused]}>
            <SearchIcon />
            <TextInput
              ref={textInputRef}
              style={style.input}
              placeholder="Type your ingredients"
              onChangeText={getUserQueary}
            />
            {query.length > 1 && (
              <TouchableOpacity onPress={resetInput}>
                <CancelIcon />
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SearchHeader;
