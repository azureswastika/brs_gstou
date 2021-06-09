import { StyleSheet, Dimensions } from "react-native";

const screenW = Math.round(Dimensions.get("window").width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Math.floor(screenW / 5),
    backgroundColor: '#E5E5E5',
  },
  label: {
    color: '#FCFCFF',
    fontFamily: 'SF-PRO-Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 0.41,
    marginBottom: Math.round(screenW/20),
  },
  studentContainButton: {
    marginHorizontal: Math.round(screenW/30),
    marginVertical: Math.round(screenW/50),
    backgroundColor: '#212D3A',
    borderRadius: 6,
    shadowColor: "#212D3A",
    shadowOpacity: 0.28,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 4,
  },
  studentName: {
    marginLeft: Math.round(screenW / 23),
    marginVertical: Math.round(screenW * 0.03),
    fontSize: 17,
    lineHeight: 20,
    color: '#E5E5E5',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#233344',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: Math.floor(screenW / 10),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: Math.round(screenW/37),
  },
})