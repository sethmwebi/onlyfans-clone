import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	Pressable,
	SafeAreaView
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed }) => {
	const router = useRouter();

	return (
		<SafeAreaView>
			<ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
				<View style={styles.overlay} />
				<View
					style={{
						marginTop: 20,
						marginLeft: 20,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Ionicons
						onPress={() => router.back()}
						name="arrow-back"
						size={28}
						color="white"
						style={{ marginRight: 10 }}
					/>
					<View>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								fontWeight: "500",
								marginBottom: 5,
							}}
						>
							{user.name}
						</Text>
						<Text style={{ color: "white" }}>
							1.4K posts &bull; 63.4K likes &bull; 15.3K fans
						</Text>
					</View>
				</View>
			</ImageBackground>

			<View style={{ padding: 10 }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "flex-end",
						justifyContent: "space-between",
						marginTop: -50,
					}}
				>
					<Image src={user.avatar} style={styles.userImage} />
					<FontAwesome name="share-square-o" size={24} color="royalblue" />
				</View>
				<Text style={{ fontSize: 20, fontWeight: "500", marginVertical: 5 }}>
					{user.name}
				</Text>
				<Text style={{ color: "gray", marginBottom: 20 }}>@{user.handle}</Text>
				<Text style={{ lineHeight: 20 }}>{user.bio}</Text>

				<Text style={{ color: "gray", marginTop: 20, fontWeight: "bold" }}>
					SUBSCRIPTION
				</Text>
				<Pressable
					onPress={() => setIsSubscribed((prev) => !prev)}
					style={[
						styles.button,
						{ backgroundColor: isSubscribed ? "white" : "royalblue" },
					]}
				>
					<Text
						style={[
							styles.buttonText,
							{ color: isSubscribed ? "royalblue" : "white" },
						]}
					>
						{isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
					</Text>
					<Text
						style={[
							styles.buttonText,
							{ color: isSubscribed ? "royalblue" : "white" },
						]}
					>
						{user.subscriptionPrice === 0
							? "FOR FREE"
							: `$${user.subscriptionPrice}/month`}
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default UserProfileHeader;

const styles = StyleSheet.create({
	cover: {
		height: 200,
		width: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	userImage: {
		width: 100,
		height: 100,
		borderRadius: 100,
		borderColor: "white",
		borderWidth: 3,
		marginRight: 20,
	},
	button: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "gainsboro",
		padding: 15,
		paddingHorizontal: 20,
		borderRadius: 50,
		marginVertical: 10,
	},
	buttonText: {
		color: "royalblue",
		fontWeight: "500",
	},
});
