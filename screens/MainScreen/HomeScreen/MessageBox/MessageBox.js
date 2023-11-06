import { View, StyleSheet, Image, Text } from "react-native";
import Colors from "../../../../constants/Colors";
import { TouchableOpacity } from "react-native";

export const MessageBox = ({ item }) => {
  console.log(item);
  return (
    <TouchableOpacity style={{flex:1,margin:5}}>
      <View style={styles.container}>
        <View style={styles.profilePhoto}>
          <Image
            style={{ width: "80%", height: "100%", borderRadius: 50 }}
            source={{
              uri: item.profile_image,
            }}
          />
        </View>
        <View style={styles.midContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.dark.tint,
              letterSpacing: 3,
            }}
          >
            {item.name}
            {/* name */}
          </Text>
          <Text numberOfLines={1} style={{ color: Colors.dark.tint }}>
            {item.message}
          </Text>
        </View>
        <View style={styles.timeStamp}>
          <Text style={{ fontSize: 12, color: Colors.dark.tint }}>
            {item.day}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.dark.tint }}>
            {item.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:13,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical:5,
  },
  profilePhoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  midContainer: {
    flex: 4,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  timeStamp: {
    flex: 1.1,
  },
});
