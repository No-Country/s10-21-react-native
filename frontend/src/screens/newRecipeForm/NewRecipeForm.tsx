import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ScreenTittle from "../../components/screenTittle/ScreenTittle";
import { styles } from "./newRecipeFormStyle";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { colors } from "../../utils/colors";
import Toast from "react-native-toast-message";

const NewRecipeForm = () => {
  const [text, setText] = React.useState("");

  const SignUpSchema = z.object({
    name: z.string().min(5).max(20),
    ingredients: z.array(z.string()).nonempty(),
    description: z.string().min(3).max(20),
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

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
    Toast.show({
      type: "success",
      text1: "Done",
      text2: "New recipe added",
      position: "bottom",
    });
    reset();
  };

  return (
    <>
      <ScreenTittle text="Add you recipe!" backButton={true} />
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
        <Button
          mode="contained"
          buttonColor={colors.purple}
          onPress={handleSubmit(onSubmit)}
        >
          Send
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor={colors.orangeLight}
          onPress={() => reset()}
        >
          Reset
        </Button>
      </View>
      <Toast />
    </>
  );
};

export default NewRecipeForm;
