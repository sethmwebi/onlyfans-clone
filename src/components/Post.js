import { View, Text, Image } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

const Post = ({ post }) => {
	return (
		<View style={{ marginVertical: 15 }}>
			<View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
				<Image
					src={post.User.avatar}
					style={{
						width: 50,
						aspectRatio: 1,
						borderRadius: 50,
						marginRight: 10,
					}}
				/>
				<View>
					<Text style={{ fontWeight: "500", marginBottom: 3, fontSize: 16 }}>
						{post.User.name}
					</Text>
					<Text style={{ color: "gray" }}>@{post.User.handle}</Text>
				</View>

				<View
					style={{
						marginLeft: "auto",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Text style={{ marginRight: 5, color: "gray" }}>3 hours ago</Text>
					<View style={{ marginTop: 4 }}>
						<Entypo name="dots-three-horizontal" size={18} color="gray" />
					</View>
				</View>
			</View>
			<Text style={{ margin: 10, lineHeight: 18 }}>{post.text}</Text>
			<Image src={post.image} style={{ width: "100%", aspectRatio: 1 }} />
			<View style={{ margin: 10, flexDirection: "row" }}>
				<AntDesign
					name="hearto"
					size={22}
					color="gray"
					style={{ marginRight: 15 }}
				/>
				<FontAwesome
					name="dollar"
					size={20}
					color="gray"
					style={{ marginRight: 10 }}
				/>
			</View>
			<Text style={{ fontWeight: "500", marginHorizontal: 10 }}>
				{post.likes}
			</Text>
		</View>
	);
};

export default Post;
