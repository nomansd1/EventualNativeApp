import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
  } from 'react-native';

export default function Splash() {
  return (
    <ImageBackground 
        style={styles.container}
        source={require('../assets/splashbg.png')}
    >
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Image style={styles.userAvatar} source={require('../assets/useravatar.png')} />
        <Text style={styles.intro}>Welcome back, Carol</Text>
        <Image style={styles.lockAvatar} source={require('../assets/lockavatar.png')} />
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'linear-gradient(45deg, #ff0000, #0000ff)',
    },
    logo: {
        width: 192.857,
        height: 180,
        marginTop: 20,
        marginBottom: 40
    },
    userAvatar: {
        width: 128,
        height: 128,
    },
    lockAvatar: {
        width: 90,
        height: 92,
    },
    intro: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 30
    }
  });