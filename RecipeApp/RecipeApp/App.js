import React, {useState, useEffect, useContext}from 'react';
import {Image, View, TouchableOpacity, Modal, Text, Alert} from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/Intro';
import DetailScreen from './screen/Home'
import Main from './screen/Main';
import Auth from './screen/Login';
import Favorites from './screen/Favorite';
import CountryDishes from './screen/Country';
import { getAccount } from './screen/AsyncStorage';
import { ValuesProvider } from './screen/Values';
import { ThemeProvider, ThemeContext } from './screen/Theme';

const Stack = createNativeStackNavigator();

const HeaderRight = () => {
  
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params.username;

  const themeValues = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      const account = await getAccount();
      setAccount(account);
    }

    fetchAccount();
  }, []);
  
  return (

  <View>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image source ={require("./screen/assets/account.png")} style={{ height: 30, width: 30, marginTop: 5, tintColor: themeValues.theme.backgroundColor}} />
    </TouchableOpacity>
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <View style={{ width: 300, height: 350, backgroundColor: themeValues.theme.backgroundColor, padding: 20, borderRadius: 25, justifyContent: 'space-between' }}>
          <View style = {{flexDirection: 'row'}}>
          <Image 
            source={require('./screen/assets/profile.png')} 
            style={{width: 30, height: 30, borderRadius: 20, marginRight: 10}} 
          />
          <Text style={{ fontSize: 16, color: themeValues.theme.textColor }}>{username ? username : 'Guest'}</Text>
          </View>
          <TouchableOpacity onPress= {() => {setModalVisible(false), navigation.navigate("Favorites", { username: username })}}>
            <Text style={{ color: themeValues.theme.textColor }} >Favorites</Text>
            <Image source ={require("./screen/assets/favlist.png")} style={{ height: 30, width: 30, marginTop: 5, tintColor: themeValues.theme.tintColor}} />
          </TouchableOpacity>
          <TouchableOpacity onPress= {toggleTheme}>
            <Text style={{ color: themeValues.theme.textColor }}>Theme</Text>
            <Image source ={theme.backgroundColor === '#121212' ? require("./screen/assets/night.png") : require("./screen/assets/sun.png")} style={{ height: 30, width: 30, marginTop: 5, tintColor: themeValues.theme.tintColor}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Logout', 'Are you sure you want to logout?',[{ text: 'Cancel' }, { text: 'OK', onPress: () => navigation.navigate("Form") },]);}}>
            <Text style={{ color: themeValues.theme.textColor }} >Log Out</Text>
            <Image source ={require("./screen/assets/logout.png")} style={{ height: 30, width: 30, marginTop: 5, tintColor: themeValues.theme.textColor}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor: "rgb(255, 195, 0)", padding: 10, marginHorizontal: 40, alignItems: 'center', borderRadius: 25}}>
            <Text style={{ color: themeValues.theme.textColor }}>Close</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
    
  );
};

const MyStack = () => {

  const [username, setUsername] = useState(null);
  const themeValues = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <ValuesProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{
            backgroundColor: "rgb(255, 195, 0)",
          }
          }}>
            <Stack.Screen name="Introduction" options={{headerShown:false}} component={HomeScreen}/>
            <Stack.Screen name="Form" options={{headerShown:false}} component={Auth}/>
            <Stack.Screen 
              name="FoodieFinds" 
              component={DetailScreen} 
              options={({ route }) => ({
                headerTitle: props => (
                <View style={{ width: 60, height: 60 }}>
                  <Image 
                    key={themeValues.theme.textColor} 
                    style={{ width: '150%', height: '100%', marginRight: 60,}}
                    source={require('./screen/assets/logo2.png')} 
                    resizeMode= 'contain'
                  />
                </View>
              ),
              headerBackVisible: false,
              headerRight: () => <HeaderRight username={username} />,
             })}
            />
            <Stack.Screen name="Dish" component={Main} options={{ title: 'Recipe' }}/>
            <Stack.Screen name="CountryDishes" component={CountryDishes} options={{ title: 'Recipe' }}/>
            <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Recipe' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ValuesProvider>
    </ThemeProvider>
  );
};

export default MyStack