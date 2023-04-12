import { StyleSheet } from 'react-native';

const styleLogin = (darkMode: boolean = false) => {
  return (
    StyleSheet.create({
      page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkMode ? "#fcfcfc" : "#1b1e23"
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
      },
      darkModeButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 30,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        color: darkMode ? '#000' : '#fff',
      },
      input: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderColor: "gray",
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: darkMode ? '#000' : '#fff',
      },
      button: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      textButton: {
        fontSize: 20,
        color: 'white',
      },
    })
  )
};

export default styleLogin;
