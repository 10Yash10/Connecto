import React from "react";
import { MessageBox } from "./MessageBox/MessageBox";
import { View, FlatList } from "react-native";
import Colors from "../../../constants/Colors";

const MessageBoxList = [
  {
    id: 1,
    profile_image:
      "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
    name: "Person 1",
    message: "Message from Person 1 ",
    day: "17/05/2023",
    time: "03:20 PM",
  },
  {
    id: 2,
    profile_image:
      "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
    name: "Person 2",
    message: "Message from Person 2 ",
    day: "23/02/2023",
    time: "10:03 PM",
  },
  {
    id: 3,
    profile_image:
      "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
    name: "Person 3",
    message: "Message from Person 3 ",
    day: "09/01/2023",
    time: "07:36 AM",
  },
  {
    id: 4,
    profile_image:
      "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
    name: "Person 4",
    message: "Message from Person 4 ",
    day: "23/12/2022",
    time: "02:54 PM",
  },
  {
    id: 5,
    profile_image:
      "https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png",
    name: "Person 5",
    message: "Message from Person 5 ",
    day: "22/11/2022",
    time: "04:43 AM",
  },
];

const HomeScreen = () => {
  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: Colors.dark.mainBackgroundColor }}
      >
        <FlatList
          data={MessageBoxList}
          renderItem={({ item }) => <MessageBox item={item} /> }
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default HomeScreen;
