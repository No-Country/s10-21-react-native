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
import { useState } from "react";
import { colors } from "../../utils/colors";

interface SearchHeaderProps {
  getUserQueary: (text: string) => void;
  resetUserQuery: () => void;
  query: string;
}

const SearchHeader = ({
  getUserQueary,
  resetUserQuery,
  query,
}: SearchHeaderProps) => {
  const [isFocused, setIsFocused] = useState(false);

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
            <SearchIcon color={colors.purple} />
            <TextInput
              style={style.input}
              placeholder="Type your ingredients"
              placeholderTextColor={colors.purpleLight}
              onChangeText={getUserQueary}
              cursorColor={colors.purple}
              value={query}
            />
            {query.length > 1 && (
              <TouchableOpacity onPress={resetUserQuery}>
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
