import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food4Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Mapo Tofu (麻婆豆腐)</Text>
                <Text style={style.txt2}>Chinese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>20</Text>
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
                        <Text style ={style.txt3}>2 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ For the tofu</Text>
                    <Text style={style.txt6}>○ 600 grams regular tofu - soft or medium firm</Text>
                    <Text style={style.txt6}>○ 1 teaspoon salt</Text>
                    <Text style={style.txt6}>○ For the sauce</Text>
                    <Text style={style.txt6}>○ 2 tablespoon neutral cooking oil</Text>
                    <Text style={style.txt6}>○ 100 g minced beef - or pork</Text>
                    <Text style={style.txt6}>○ 1 teaspoon minced ginger</Text>
                    <Text style={style.txt6}>○ 2 tablespoon Sichuan chilli bean paste</Text>
                    <Text style={style.txt6}>○ 1 tablespoon fermented black beans - rinsed and chopped</Text>
                    <Text style={style.txt6}>○ 1 tablespoon ground chilli - or chilli flakes (or to taste)</Text>
                    <Text style={style.txt6}>○ 1 tablespoon minced garlic</Text>    
                    <Text style={style.txt6}>○ 1 tablespoon Shaoxing rice wine</Text>     
                    <Text style={style.txt6}>○ 400 ml water - or unsalted stock</Text>
                    <Text style={style.txt6}>○ 2 tablespoon cornstarch - mixed with 3 tablespoons water</Text>
                    <Text style={style.txt6}>○ ½ teaspoon ground Sichuan pepper - or to taste</Text>
                    <Text style={style.txt6}>○ 1 stalk scallions - finely chopped</Text>
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Cut the tofu into 2.5cm/1inch cubes. Gently slide them into a wok/pot filled with water. Add the salt. Bring the water to a boil then simmer for 1 minute. Drain the tofu and set it aside.</Text>
                    <Text style={style.txt6}>➋ Heat up an empty wok until hot then add the oil. Put in minced meat, along with minced ginger. Stir fry over high heat until the meat becomes pale.</Text>
                    <Text style={style.txt6}>➌ Add Sichuan chilli bean paste, fermented black beans, chilli powder/flakes and minced garlic. Fry until fragrant.</Text>
                    <Text style={style.txt6}>➍ Pour in Shaoxing rice wine and 400ml of water or unsalted stock. Bring to a boil then gently slide in the tofu. Leave to boil for about 5 minutes (uncovered).</Text>
                    <Text style={style.txt6}>➎ Turn the heat down to medium. Add half of the cornstarch water mixture (make sure to stir it well beforehand). Leave to simmer for 10 seconds or so, then pour in the remaining half.</Text>
                    <Text style={style.txt6}>➏ Once the sauce becomes just thick enough to coat the spatula, add ground Sichuan pepper and chopped scallions. Give everything a gentle mix then turn off the heat immediately. Serve it hot with plain steamed rice.</Text>
                    <Text style={style.txt6}>➐ Notes: Classic Mapo tofu calls for regular tofu which comes in pressed blocks and is usually soaked in water.  Silken tofu (绢豆腐), a type of unpressed tofu that coagulates directly in its container, isn`t a traditional choice but acceptable as a substitute. In this case, choose medium-firm or firm silken tofu and avoid the soft version.</Text>
                    <Text style={style.txt6}>➑ Different brands of Sichuan chilli bean paste (aka spicy doubanjiang) may vary in saltiness, spiciness and texture. Adjust the quantity accordingly. I always use Pixian Douban (郫县豆瓣), a well-known variety, for this dish.</Text>
                    <Text style={style.txt6}>➒ In terms of the level of hotness and numbing sensation, this recipe is not adapted for non-Sichuanese tastes. You might find it too pungent if you are not accustomed to it. Please feel free to alter the quantity of ground chilli (chilli flakes) and ground Sichuan pepper. You may also add a little sugar to balance the spiciness as well as the saltiness.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food4Chinese