import { StatusBar } from "expo-status-bar";
import { Badge, Box, Center, Heading, NativeBaseProvider, Stack, VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputForm from "./components/InputForm";
import ItemList from "./components/ItemList";

const config = {
	dependencies: {
		"linear-gradient": require("expo-linear-gradient").LinearGradient
	}
};

export const Example = () => {
	return (
		<Box
			bg={{
				linearGradient: {
					colors: ["lightBlue.300", "violet.800"],
					start: [0, 0],
					end: [1, 0],
				},
			}}
			p={12}
			rounded="lg"
			_text={{
				fontSize: "md",
				fontWeight: "bold",
				color: "white",
			}}
		>
      This is a Box with Linear Gradient
		</Box>
	);
};

export default function App() {
	console.log("Add this console to test lint-staged commit");
	return (
		<NativeBaseProvider config={config}>
			<VStack w="100%">
				<Heading size="xs" textAlign="left">
        Solid
				</Heading>
				<Stack
					direction={{
						base: "row",
						md: "row",
					}}
					space={2}
					mx={{
						base: "auto",
						md: 0,
					}}>

				</Stack>

			</VStack>
			<Center flex={1}>
				<Example />
				{InputForm()}
				<ItemList />
			</Center>
		</NativeBaseProvider>
	// <NativeBaseProvider>
	//   <View style={styles.container}>
	//     <InputForm />
	//     <Box
	//       bg={{
	//         linearGradient: {
	//           colors: ["lightBlue.300", "violet.800"],
	//           start: [0, 0],
	//           end: [1, 0],
	//         },
	//       }}
	//       p={12}
	//       rounded="lg"
	//       _text={{
	//         fontSize: "md",
	//         fontWeight: "bold",
	//         color: "white",
	//       }}
	//     >
	//       <Text>This is a Box with Linear Gradient</Text>
	//     </Box>
	//     <Badge>NEW FEATURE</Badge>
	//     <Badge colorScheme="success">SUCCESS</Badge>
	//     <Badge colorScheme="danger">DANGER</Badge>
	//     <Badge colorScheme="info">INFO</Badge>
	//     <Badge colorScheme="dark">DARK</Badge>
	//     <Text>Open up App.js to start working on your app!!</Text>
	//     <StatusBar style="auto" />
	//   </View>
	// </NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
