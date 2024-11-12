import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food3Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Peking Duck (北京烤鸭)</Text>
                <Text style={style.txt2}>Chinese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>1 hour and 15</Text>
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
                        <Text style ={style.txt3}>6 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 1 duck - about 2.5 kilograms</Text>
                    <Text style={style.txt6}>○ 2 tablespoon fine salt</Text>
                    <Text style={style.txt6}>○ For the syrup</Text>
                    <Text style={style.txt6}>○ 2 tablespoon maltose</Text>
                    <Text style={style.txt6}>○ 120 mililiters hot water</Text>
                    <Text style={style.txt6}>○ 1 teaspoon vinegar</Text>
                    <Text style={style.txt6}>○ For the stuffing</Text>
                    <Text style={style.txt6}>○ 2 stalks scallions</Text>
                    <Text style={style.txt6}>○ 2 apples - quartered</Text>
                    <Text style={style.txt6}>○ 4 star anise</Text>
                    <Text style={style.txt6}>○ 4 bay leaves</Text>    
                    <Text style={style.txt6}>○ 2 pieces cassia cinnamon</Text>     
                    <Text style={style.txt6}>○ For the sauce</Text>
                    <Text style={style.txt6}>○ 3 tablespoon sweet bean sauce</Text>
                    <Text style={style.txt6}>○ 1 teaspoon sugar</Text>
                    <Text style={style.txt6}>○ Peking duck pancakes - homemade or shop-bought</Text>
                    <Text style={style.txt6}>○ Scallions - julienned</Text>
                    <Text style={style.txt6}>○ Cucumber - peeled and seeds removed, cut into sticks</Text>
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Prepare the duck.</Text>
                    <Text style={style.txt6}>➋ Pat dry the duck with kitchen paper then rub the salt over the skin and the cavity. Put the duck over a wire rack with a tray underneath to collect any drips. Leave to rest on the counter for 1 hour.</Text>
                    <Text style={style.txt6}>➌ Bring about 1½ litres of water (about 6 cups) to a boil, then gently pour it over the entire duck skin (remember to flip over and do the other side). You can use a deep tray to collect the water, or do it inside a sink. If there are feather ends on the skin, remove them with a tweezer.</Text>
                    <Text style={style.txt6}>➍ In a bowl, mix maltose with hot water and vinegar until completely dissolved. Brush a layer of the mixture over the duck skin. Leave to rest in the fridge for 1 hour then brush another layer.</Text>
                    <Text style={style.txt6}>➎ Keep the duck refrigerated uncovered (over the rack and inside a tray) for 24 to 48 hours.</Text>
                    <Text style={style.txt6}>➏ Roast the duck. One hour before roasting, take the duck out of the fridge to bring it back to room temperature. Put all the stuffing ingredients (scallions, garlic, apples, star anise, cassia cinnamon and bay leaves) into the cavity. Use toothpicks or skewers to seal the openings of the cavity.</Text>
                    <Text style={style.txt6}>➐ Preheat a fan-assisted oven, aka convection oven, at 200°C/390°F (or 220°C/425°F if using a conventional oven). Put the duck over the middle rack of the oven with the breast side facing up. Place a roasting tray at the bottom of the oven to collect any dripping fat during roasting. Leave to cook for 15 minutes.</Text>
                    <Text style={style.txt6}>➑ Then lower the temperature to 180°C/350°F (or 200°C/390°F if using a conventional oven). Use aluminium foil to cover the tip of the wings and the end of the legs. Continue cooking for a further 60 minutes or so.</Text>
                    <Text style={style.txt6}>➒ Check the doneness by inserting an instant-read thermometer into the thickest part of the duck (the inner thigh area near the breast). The temperature should be no lower than 74C°/165F°.</Text>
                    <Text style={style.txt6}>➓ Serve the duck. Take the duck out of the oven and leave it to rest on the counter for 15 minutes.</Text>
                    <Text style={style.txt6}>➊➊ While waiting, prepare the sauce. Add ½ tablespoon of duck fat collected during roasting to a pan. Add sweet bean sauce and sugar. Mix and simmer over low heat until tiny bubbles appear. Transfer to a small serving dish. Whisk to fully incorporate the sauce and oil.</Text>
                    <Text style={style.txt6}>➊➋ Steam the pancakes for 3 minutes to warm up if they`re cold. Slice the duck into pieces.</Text>
                    <Text style={style.txt6}>➊➌ When eating, spread a little sauce over a pancake, put the duck, scallions and cucumber in the middle. Wrap up into a cylinder and enjoy.</Text>
                    <Text style={style.txt6}>➊➍ Cook a soup (optional). After most of the meat has been removed from the duck, boil the carcass in water to make a soup with Napa cabbage or winter melon. Simply add salt and white pepper to season.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>

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

export default Food3Chinese