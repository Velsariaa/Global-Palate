import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food1Filipino = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Chicken Tinola</Text>
                <Text style={style.txt2}>Filipino Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>30</Text>
                        <Text style ={style.txt4}>Minutes</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/level.png')}/>
                        <Text style ={style.txt3}>Easy</Text>
                        <Text style ={style.txt4}>Difficulty</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/serve.png')}/>
                        <Text style ={style.txt3}>4 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 1 tablespoon cooking oil</Text>
                    <Text style={style.txt6}>○ 1 pc onion, small -sized, chopped</Text>
                    <Text style={style.txt6}>○ 2 cloves garlic, chopped</Text>
                    <Text style={style.txt6}>○ 1 pc ginger, cut into strips</Text>
                    <Text style={style.txt6}>○ ½ kilo chicken, cut into 8 pcs</Text>
                    <Text style={style.txt6}>○ 4 cups water</Text>
                    <Text style={style.txt6}>○ 2 pcs Knorr chicken cubes</Text>
                    <Text style={style.txt6}>○ 1 pc chayote or 1 pc small - sized green papaya, sliced</Text>
                    <Text style={style.txt6}>○ 2 stalks moringa leaves</Text>
                                    
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Get a pot and bring it up to medium heat before pouring in the oil. Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes or until you can smell the lovely aroma.</Text>
                    <Text style={style.txt6}>➋ It’s time to drop in the chicken pieces and stir until it turns white or light brown in color.</Text>
                    <Text style={style.txt6}>➌ Pour in the water and add your Knorr Chicken Broth cubes. Bring this to a simmer until chicken is tender and cooked through.</Text>
                    <Text style={style.txt6}>➍ You can now add your sayote or green papaya and cook until tender.</Text>
                    <Text style={style.txt6}>➎ Dahon ng sili is added at the last stage to ensure leaves (and nutrients) don’t dry up. Give this a minute then it is done. Malunggay is also another healthy alternative because it is packed with vitamins and minerals which are good for nursing moms and kids as well.</Text>
                    <Text style={style.txt6}>➏ Enjoy this with patis and calamansi on the side. See the faces of your whole family light up as you bring this to the table.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
                    
                </View>
            </ScrollView>                        
        </View>
    )  
}
const style = StyleSheet.create({
    container:{
        flex:1,
    },
    pic:{
        width: 300,
        height: 300,
        borderRadius: 30,
        alignSelf: "center"  
    },
    txt1: {
        fontSize: 35,
        fontWeight: "bold",
        color: "rgb(64, 61, 57)",
        paddingLeft: 20,
        paddingTop: 20
    },
    txt2: {
        fontSize: 18,
        color: "gray",
        paddingLeft: 20,
        paddingBottom: 20,
    },

    //icons
    container1:{ //yung spacing ng box
        flex:1,
        flexDirection: "row",
        
    },
    likod: { //bcground ng info
        flex: 1,
        backgroundColor: "rgb(255, 195, 0)",
        width: 100,
        height: 130,
        margin: 10,  // margin ng bckground
        borderRadius: 30
         
    },
    pic1:{
        width: 50,
        height: 50,
        alignSelf: "center",
        marginTop: 15
        
    },
    txt3:{
        textAlign: "center",
        paddingTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        
    },
    txt4:{
        textAlign: "center",
        fontSize: 14,
        
        color: "white",
        
    },

    //ingredients
    txt5:{
        fontSize: 25,
        fontWeight: "bold",
        color: "rgb(64, 61, 57)",
        paddingLeft: 20,
        paddingTop: 20
    },
    txt6: {
        fontSize: 18,
        padding: 15,
    }
        
    

    
})

export default Food1Filipino

