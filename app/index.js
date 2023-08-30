import { StyleSheet, View, FlatList } from "react-native";
import { Link } from "expo-router";
import UserCard from "../src/components/UserCard";
import users from "../assets/data/users";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href={"/newPost"}>New Post</Link>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
