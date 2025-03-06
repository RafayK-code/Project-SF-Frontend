import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface GroupPublicityProps {
  text: string;
  selected: boolean;
  open: boolean;
  onClick: (currentlySelected: boolean) => void;
}

function GroupPublicityButton(props: GroupPublicityProps) {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, props.selected ? styles.selected : undefined]}
        onPress={() => {
          props.onClick(props.selected);
        }}
        activeOpacity={0.7}
      >
        <Text
          style={[styles.text, props.selected ? styles.selected : undefined]}
        >
          {props.text}
        </Text>
        <View
          style={[
            styles.imageCont,
            props.selected ? styles.selectedUpper : undefined,
          ]}
        >
          {props.open ? (
            <PublicIcon
              color={props.selected ? "#3D404A" : "#F7F3E8"}
            ></PublicIcon>
          ) : (
            <PrivateIcon
              color={props.selected ? "#3D404A" : "#F7F3E8"}
            ></PrivateIcon>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: 700,
    padding: 10,
    color: "#F7F3E8",
  },
  container: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: 150,
    height: 80,
    backgroundColor: "#193C30",
    margin: 10,
    borderRadius: 10,
    marginTop: 40,
  },
  selected: {
    backgroundColor: "#42CAFD",
    color: "#3D404A",
  },
  selectedUpper: {
    backgroundColor: "#92E1FF",
    color: "#3D404A",
  },
  imageCont: {
    position: "absolute",
    left: "8%",
    top: "-23%",
    //backgroundColor: "#193C30",
    backgroundColor: "#2C745C",
    width: "27%",
    aspectRatio: 1 / 1,
    borderRadius: 10000,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GroupPublicityButton;

const PublicIcon = (props: { color: string }) => {
  return (
    <Svg width="70%" height="70%" viewBox="0 0 33 33" fill="none">
      <Path
        d="M31.0834 16.5C31.0834 24.5541 24.5542 31.0833 16.5001 31.0833M31.0834 16.5C31.0834 8.44581 24.5542 1.91663 16.5001 1.91663M31.0834 16.5H1.91675M16.5001 31.0833C8.44593 31.0833 1.91675 24.5541 1.91675 16.5M16.5001 31.0833C20.1478 27.0899 22.2208 21.9074 22.3334 16.5C22.2208 11.0925 20.1478 5.91006 16.5001 1.91663M16.5001 31.0833C12.8524 27.0899 10.7794 21.9074 10.6667 16.5C10.7794 11.0925 12.8524 5.91006 16.5001 1.91663M1.91675 16.5C1.91675 8.44581 8.44593 1.91663 16.5001 1.91663"
        stroke={props.color}
        strokeWidth="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const PrivateIcon = (props: { color: string }) => {
  return (
    <Svg width="70%" height="70%" viewBox="0 0 30 33" fill="none">
      <Path
        d="M7.33333 13.6666V8.33329C7.33333 6.56518 8.03571 4.86949 9.28595 3.61925C10.5362 2.369 12.2319 1.66663 14 1.66663C15.7681 1.66663 17.4638 2.369 18.714 3.61925C19.9643 4.86949 20.6667 6.56518 20.6667 8.33329V13.6666M4.66667 13.6666H23.3333C24.8061 13.6666 26 14.8605 26 16.3333V25.6666C26 27.1394 24.8061 28.3333 23.3333 28.3333H4.66667C3.19391 28.3333 2 27.1394 2 25.6666V16.3333C2 14.8605 3.19391 13.6666 4.66667 13.6666Z"
        stroke={props.color}
        strokeWidth="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
