import { Image, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./buttonModalStyle";

const ButtonModal = ({ openCamera, openLibrary, cancel }) => {
  return (
    <View style={styles.modalContainer}>
      <Button onPress={openCamera} mode="contained" icon="camera">
        Open camera
      </Button>
      <Button
        onPress={openLibrary}
        mode="contained-tonal"
        icon="briefcase-search"
      >
        Open galery
      </Button>

      <Button
        onPress={cancel}
        mode="outlined"
        icon="close-box"
      >
        Cancel
      </Button>
    </View>
  );
};

export default ButtonModal;
