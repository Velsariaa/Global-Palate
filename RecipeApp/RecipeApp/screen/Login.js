import React, {useState, useEffect} from 'react';
import { storeAccount, getAccount } from './AsyncStorage';
import { View, Alert, StyleSheet, Pressable, Text, TouchableOpacity, SafeAreaView, useWindowDimensions, PixelRatio, TextInput, ImageBackground} from 'react-native';

const Auth = ({navigation}) => {

    const window = useWindowDimensions();
    const [orientation, setOrientation] = useState(window.width > window.height ? 'LANDSCAPE' : 'PORTRAIT');

    useEffect(() => {
        setOrientation(window.width > window.height ? 'LANDSCAPE' : 'PORTRAIT')
    }, [window]);

    function normalize(size) {
        const scale = window.width / (orientation === 'LANDSCAPE' ? 720 : 320);
        return Math.round(PixelRatio.roundToNearestPixel(size * scale));
    }

    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin)
        if (isLogin) {
          setSecureText(false);
        }else{
          setSecureText(true)
        }

        return (
          <ImageBackground source={require('./assets/loginbg2.jpg')} style = {styles.background}>
          <SafeAreaView style = {styles.container}>
              <View style = {styles.innerContainer}>
              <Text style={styles.title}>Account <Text style={styles.title2}>{isLogin ? 'Login' : 'Register'}</Text></Text>
                  <TextInput style = {styles.inputBox} placeholder="Username" value={username} onChangeText={setUsername}></TextInput>
                  <TextInput style = {styles.inputBox} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry></TextInput>
                  {isLogin && (
                    <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                      <Text style = {{color: "grey", marginTop: 15}}>{secureText ? 'Show Password' : 'Hide Password'}</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity style={styles.button} onPress={handlePress}>
                      <Text style = {styles.buttonText}>{isLogin ? "Log In" : "Register"}</Text>
                  </TouchableOpacity>
                  <Text>{isLogin ? "Don't have an account?" : "Already have an account?"}</Text>
                    <Pressable onPress={(handleToggle)}>
                    <Text style={styles.click}>Click Here</Text>
                    </Pressable>
              </View>
          </SafeAreaView>
          </ImageBackground>
        );
    }

    const handlePress = async () => {
        if (username.length < 5 || password.length < 5) {
            Alert.alert('Oops!', 'Username and password should be at least 5 characters long');
            return;
        }
        if (isLogin){
          const account = await getAccount(username);
          if (account && account.password === password) {
            navigation.navigate('FoodieFinds', {username : username});
          }else{
            Alert.alert('Oops!', 'Invalid username or password');
          }
        } else {
            const existingAccount = await getAccount(username);
            if (existingAccount) {
              Alert.alert('Oh no!', 'Username already exists');
            } else {
              await storeAccount({username, password, recipes: []});
              Alert.alert('Success', 'Account registered successfully');
              navigation.navigate('FoodieFinds', {username : username});
            }
          }
        };
    const styles = StyleSheet.create({
        body: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          flex: 1,
          justifyContent: 'center',
        },
        innerContainer: {
          backgroundColor: "white",
          flex: 1,
          borderTopLeftRadius: normalize(50),
          borderTopRightRadius: normalize(50),
          alignItems: "center",
          marginTop: window.height * 0.40,
        },
        title: {
        textAlign: 'left',
        fontSize: normalize(20),
        marginTop: normalize(30),
        marginBottom: normalize(20),
        fontWeight: "bold",
        },
        title2: {
        color: "rgb(255, 195, 0)",
        },
        button: {      
            justifyContent: 'center', 
            alignItems: 'center', 
            height: normalize(40),
            width: normalize(115),
            backgroundColor: "rgb(255, 195, 0)",
            borderRadius: normalize(75), 
            padding: normalize(7),  
            marginTop: normalize(20), 
            marginBottom: normalize(20),
        buttonText: {
            textAlign: 'left',
            fontSize: normalize(20),
        },
        },
        inputBox:{
            paddingHorizontal:normalize(100), 
            paddingVertical: normalize(10), 
            borderColor:'lightgrey',
            borderBottomWidth: normalize(1),
            borderRadius: normalize(1),
            margin: normalize(10),
            backgroundColor: "white",
        },
        click: {
        color: "rgb(255, 195, 0)",
        marginTop: normalize(10),
        },
        background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        }
        });

  return (
    <ImageBackground source={require('./assets/loginbg2.jpg')} style = {styles.background}>
    <SafeAreaView style = {styles.container}>
        <View style = {styles.innerContainer}>
        <Text style={styles.title}>Account <Text style={styles.title2}>{isLogin ? 'Login' : 'Register'}</Text></Text>
            <TextInput style = {styles.inputBox} placeholder="Username" value={username} onChangeText={setUsername}></TextInput>
            <TextInput style = {styles.inputBox} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={secureText}></TextInput>
            {isLogin && (
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Text style = {{color: "grey", marginTop: 15}}>{secureText ? 'Show Password' : 'Hide Password'}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style = {styles.buttonText}>{isLogin ? "Log In" : "Register"}</Text>
            </TouchableOpacity>
            <Text>{isLogin ? "Don't have an account?" : "Already have an account?"}</Text>
              <Pressable onPress={(handleToggle)}>
              <Text style={styles.click}>Click Here</Text>
              </Pressable>
        </View>
    </SafeAreaView>
    </ImageBackground>
  );
  
  

};

export default Auth;