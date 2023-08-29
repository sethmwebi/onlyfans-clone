import { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import users from "../../assets/data/users";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import posts from "../../assets/data/posts";
import Post from "../../src/components/Post";

const ProfilePage = () => {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const { id } = useSearchParams();

	const user = users.find((u) => u.id === id);

	if (!user) {
		return <Text>User not found!</Text>;
	}

	if (!isSubscribed) {
		return (
			<View>
				<UserProfileHeader
					user={user}
					isSubscribed={isSubscribed}
					setIsSubscribed={setIsSubscribed}
				/>
				<View
					style={{
						backgroundColor: "gainsboro",
						alignItems: "center",
						padding: 20,
					}}
				>
					<FontAwesome name="lock" size={50} color="gray" />
					<Text
						style={{
							backgroundColor: "royalblue",
							height: 50,
							borderRadius: 25,
							padding: 15,
							overflow: "hidden",
							color: "white",
							margin: 20
						}}
					>
						Subscribe to see user's posts
					</Text>
				</View>
			</View>
		);
	}

	return (
		<FlatList
			ListHeaderComponent={() => (
				<UserProfileHeader
					user={user}
					isSubscribed={isSubscribed}
					setIsSubscribed={setIsSubscribed}
				/>
			)}
			data={posts}
			renderItem={({ item }) => <Post post={item} />}
		/>
	);
};

export default ProfilePage;

const styles = StyleSheet.create({});
