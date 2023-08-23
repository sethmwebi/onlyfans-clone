import { StyleSheet, View, FlatList} from "react-native";
import UserCard from "../src/components/UserCard";
import users from "../assets/data/users";

export default function Page() {
  return (
    <View style={styles.container}>
    <FlatList showsVerticalScrollIndicator={false} data={users} renderItem={({ item }) => <UserCard user={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
