import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as configCat from "@configcat/sdk/browser";
import { PollingMode, IConfigCatClient } from "@configcat/sdk/browser";

export default function App() {
	const [featureFlagValue, setFeatureFlagValue] = useState(false);

	useEffect(() => {
		const configCatClient = configCat.getClient(
			"C-HdCN7xrUmB6kDjUpl3Rw/q87GdulGfU6Vtj8TKvu4-Q",
			PollingMode.AutoPoll,
			{
				pollIntervalSeconds: 10,
			}
		);

		getAndSetFeatureFlagValue(configCatClient);

		configCatClient.on("configChanged", function () {
			getAndSetFeatureFlagValue(this.configCatClient);
		});

		return () => configCatClient.dispose();
	}, []);

	function getAndSetFeatureFlagValue(configCatClient: IConfigCatClient) {
		configCatClient.getValueAsync("signupButton", false).then((value) => {
			setFeatureFlagValue(value);
		});
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text>LOGIN</Text>
			</TouchableOpacity>
			{featureFlagValue ? (
				<TouchableOpacity style={styles.button}>
					<Text>SIGNUP</Text>
				</TouchableOpacity>
			) : null}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#4CBE72",
		borderRadius: 10,
		margin: 12,
		height: 40,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
	},
});
