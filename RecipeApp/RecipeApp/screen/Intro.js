import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, useWindowDimensions, PixelRatio} from 'react-native';

const Intro = ({navigation}) => {

    const window = useWindowDimensions();
    const [orientation, setOrientation] = useState(window.width > window.height ? 'LANDSCAPE' : 'PORTRAIT');

    useEffect(() => {
        setOrientation(window.width > window.height ? 'LANDSCAPE' : 'PORTRAIT')
    }, [window]);

    function normalize(size) {
        const scale = window.width / (orientation === 'LANDSCAPE' ? 720 : 320);
        return Math.round(PixelRatio.roundToNearestPixel(size * scale));
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "rgb(255, 195, 0)"
        },
        innerContainer: {
            backgroundColor: "white",
            flex: 1,
            borderTopLeftRadius: normalize(50),
            borderTopRightRadius: normalize(50),
            alignItems: "center",
            shadowColor: "black",
            shadowOffset: { width: 5, height: -5 },
            shadowRadius: normalize(55),
            shadowOpacity: 0.2,
            marginTop: window.height * 0.38,
        },
        button: {      
            justifyContent: 'center', 
            alignItems: 'center', 
            height: normalize(40),
            width: normalize(90),
            backgroundColor: "rgb(255, 195, 0)",
            borderRadius: normalize(50), 
            padding: normalize(7),    
            marginTop: -normalize(45),
            marginBottom: normalize(59.5),
        buttonText: {
            textAlign: 'center',
            fontSize: (20),
        }
        },
        txt1: { 
            fontWeight: "bold",
            fontSize: normalize(35),
            marginTop: normalize(120),
        },
        txt2: {
            fontWeight: "bold",
            fontSize: normalize(35),
            color: 'black',    
        },
        txt3: {
            fontSize: normalize(12),
            letterSpacing: 1,
            padding: normalize(10),
            marginTop: (orientation === 'LANDSCAPE' ? normalize(20) : normalize(0)),
            marginBottom: normalize(50),
            alignSelf: "center",
        },
        pic: {
            position: 'absolute',
            top: -normalize(90),
            width: normalize(200),
            height: normalize(200),
            resizeMode: "contain",
        }
    })

    return( 
        <SafeAreaView style = {styles.container}>
                <ScrollView scrollEnabled ={ orientation === 'LANDSCAPE'}>
                    <View style={styles.innerContainer}>
                        <Image style={styles.pic} source={require('./assets/woman.png')}/>
                        <Text style={styles.txt1}>Let's</Text>
                        <Text style={styles.txt2}>Get Started</Text>
                        <Text style={styles.txt3}>Introducing the ultimate recipe app <Text style={{fontWeight: "bold"}}>Global Palate</Text>, your kitchen companion for culinary creativity!</Text>                
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
                            <Text style = {styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>                  
    )  
}

export default Intro