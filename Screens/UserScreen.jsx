import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DrawerScreenWrapper from '../Navigation/DrawerScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure({
  webClientId:
    '1068309508233-a25qd214ki649rim8u86sjogmo0eaga9.apps.googleusercontent.com',
});

async function googleSignOut() {
  try {
    await GoogleSignin.signOut();
    //setState({user: null}); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
}

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <DrawerScreenWrapper>
      <View classname="flex-1">
        <View>
          <StatusBar />
          <View style={{width: '100'}}>
            <Image
              source={require('./../assets/images/users/space.jpg')}
              style={styles.cover}
            />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require('./../assets/images/users/userDefault.png')}
              style={styles.profile}
            />
            <Text style={styles.name}> Minh Tam </Text>
            <TouchableOpacity
              onPress={() =>
                googleSignOut().then(() => navigation.navigate('Login'))
              } // Log out
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerScreenWrapper>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cover: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 250,
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    resizeMode: 'cover',
    marginTop: -90,
    borderColor: 'white',
    borderWidth: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
