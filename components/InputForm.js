import { Box, Column, HStack, Input, Row, Stack } from "native-base";
import * as React from "react";
import { Button } from "react-native";

export const inputBox = () => {
	return (
		<Input
			// w="100%"
			flex={4}
			placeholder="New Item"
		/>
	);
};

export const addButton = () => {
	function addBtnOnPress() {
		console.log("## add Btn On Press ##");
	}

	return (
		<Button onPress={addBtnOnPress} size="sm" title="Add" flex={1} />
	);
};

export default function InputForm() {
	return (
		<>
			<Stack space="3" w="100%" m={2} p={2}>
				<HStack space="3">
					{inputBox()}
					{addButton()}
				</HStack>
			</Stack>
			{/* <Box
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
                <Input
                    w="100%"
                    mx={3}
                    placeholder="Default Input"
                    _light={{
                        placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                />
            </Box> */}
		</>
	);
}