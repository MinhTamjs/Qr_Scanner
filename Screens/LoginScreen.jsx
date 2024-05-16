import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  GoogleSignin.configure({
    webClientId:
      "371335822133-eng8j2p5er6tpc88lvhusc8rmr5482qp.apps.googleusercontent.com",
  });

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      console.log({idToken});
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth()
        .signInWithCredential(googleCredential)
        .then(userCredential => {
          console.log('User signed in:', userCredential.user);
        })
        .catch(error => {
          console.log('Error signing in with Google credential:', error);
        });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./../assets/images/users/userDefault.png')}
          style={styles.logo}
        />
      </View>
      {/* Login form */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value="minhtamitech@gmail.com"
            placeholder="Enter your email"
          />
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value="123456789"
            placeholder="Enter your password"
          />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            // onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>hoặc</Text>
          <View>
            <Button
              title="Google Sign-In"
              onPress={() =>
                onGoogleButtonPress().then(() => navigation.navigate('Home'))
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee2e2',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingTop: 32,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    flex: 1,
  },
  label: {
    color: '#4b5563',
    marginLeft: 16,
    marginBottom: 8,
  },
  input: {
    padding: 16,
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    borderRadius: 25,
    marginBottom: 12,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#4b5563',
  },
  loginButton: {
    paddingVertical: 12,
    backgroundColor: '#facc15',
    borderRadius: 25,
  },
  loginText: {
    textAlign: 'center',
    color: '#4b5563',
    fontWeight: 'bold',
    fontSize: 18,
  },
  orText: {
    fontSize: 18,
    color: '#4b5563',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  signupButton: {
    paddingVertical: 12,
    backgroundColor: '#fecaca',
    borderRadius: 25,
  },
  signupText: {
    textAlign: 'center',
    color: '#4b5563',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centeredButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
