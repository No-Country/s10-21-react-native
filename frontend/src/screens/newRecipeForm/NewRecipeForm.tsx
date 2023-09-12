import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TextInput, Button, Divider } from "react-native-paper";
import ScreenTittle from "../../components/screenTittle/ScreenTittle";
import { styles } from "./newRecipeFormStyle";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { colors } from "../../utils/colors";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { SPSheet } from "react-native-popup-confirm-toast";
import { CameraIcon } from "../../../assets/Icons/SVGicons";
import CameraImage from "../../../assets/Icons/cameraIcon.png";
import ButtonModal from "../../components/bottonModal/ButtonModal";

const imgDir = FileSystem.documentDirectory + "image/";

const checkDirExist = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const NewRecipeForm = () => {
  const SignUpSchema = z.object({
    name: z.string().min(5).max(20),
    ingredients: z.array(z.string()).nonempty(),
    description: z.string().min(3).max(500),
  });

  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      ingredients: [],
      description: "",
    },
  });

  const selectImage = async (useLibrary: boolean) => {
    let result: ImagePicker.ImagePickerResult;

    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      selectionLimit: 1,
      base64: true,
    };

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();

      result = await ImagePicker.launchCameraAsync(options);
    }

    // console.log(result.assets[0].base64);;

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
      setbase64(result.assets[0].base64);
    }
  };

  const [imageRecipe, setImageRecipe] = useState("");
  const [base64, setbase64] = useState("");

  const saveImage = async (uri: string) => {
    await checkDirExist();
    const fileName = new Date().getTime() + ".jpg";
    const dest = imgDir + fileName;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImageRecipe(dest);
  };

  const onSubmit = (data: SignUpSchemaType) => {
    Toast.show({
      type: "success",
      text1: "Done",
      text2: "New recipe added",
      position: "bottom",
    });
    reset();
  };

  const showPopUp = () => {
    const spSheet = SPSheet;
    spSheet.show({
      component: () =>
        ButtonModal({
          openCamera: () => selectImage(false),
          openLibrary: () => selectImage(true),
          cancel: () => spSheet.hide(),
        }),
      dragFromTopOnly: true,
      height: 260,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ScreenTittle text="Add you recipe!" />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textColor={colors.purple}
                underlineColor={colors.purple}
                cursorColor={colors.purple}
                label="Recipe name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.errorMessage}> {errors.name.message}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textColor={colors.purple}
                underlineColor={colors.purple}
                cursorColor={colors.purple}
                label="Ingredients"
                onBlur={onBlur}
                onChangeText={(text) => {
                  const newArray = text?.split(",");
                  onChange(newArray);
                }}
                value={value?.join(",")}
              />
            )}
            name="ingredients"
          />
          <Text>Write the ingredients separated by a comma.</Text>
          {errors.ingredients && (
            <Text style={styles.errorMessage}>
              {errors.ingredients.message}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textColor={colors.purple}
                underlineColor={colors.purple}
                cursorColor={colors.purple}
                label="Instructions"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
                numberOfLines={6}
              />
            )}
            name="description"
          />
          {errors.description && (
            <Text style={styles.errorMessage}>
              {errors.description.message}
            </Text>
          )}
        </View>
        {!imageRecipe && (
          <Button mode="contained-tonal" icon="camera" onPress={showPopUp}>
            Add photo
          </Button>
        )}
        {imageRecipe && (
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={{ uri: imageRecipe }} />
            <Button
              icon="delete"
              buttonColor="red"
              textColor="#fff"
              labelStyle={{ fontSize: 18 }}
              onPress={() => setImageRecipe("")}
            >
              Delete photo
            </Button>
          </View>
        )}
        <Divider />
        <Button
          mode="contained"
          labelStyle={{ fontSize: 18 }}
          buttonColor={colors.purple}
          onPress={handleSubmit(onSubmit)}
        >
          Send
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor={colors.orangeLight}
          onPress={() => {
            reset(), setImageRecipe("");
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Reset
        </Button>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default NewRecipeForm;
