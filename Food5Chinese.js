import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food5Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Mooncakes (广式月饼)</Text>
                <Text style={style.txt2}>Chinese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>2 hours 3</Text>
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
                        <Text style ={style.txt3}>20 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ BEFORE YOU START: Please be aware that this type of mooncake needs to be rested for 1 to 2 days after baking.</Text>
                    <Text style={style.txt6}>○ Needed Equipments: Mooncake mold for making small 1.8oz/50g ones</Text>
                    <Text style={style.txt6}>○ Kitchen scale</Text>
                    <Text style={style.txt6}>○ Pastry brush</Text>
                    <Text style={style.txt6}>○ Baking sheet</Text>
                    <Text style={style.txt6}>○ Ingredients:</Text>
                    <Text style={style.txt6}>○ For the paste</Text>
                    <Text style={style.txt6}>○ 100 g dried lotus seeds</Text>
                    <Text style={style.txt6}>○ 75 g sugar - or to taste</Text>
                    <Text style={style.txt6}>○ 50 g neutral cooking oil - such as sunflower, canola, vegetable, peanut, rapeseed oil, etc.</Text>
                    <Text style={style.txt6}>○ For the dough</Text>    
                    <Text style={style.txt6}>○ 150 grams golden syrup</Text>     
                    <Text style={style.txt6}>○ ½ teaspoon lye water - aka Kansui </Text>
                    <Text style={style.txt6}>○ 50 grams neutral cooking oil - such as sunflower, canola, vegetable, peanut, rapeseed oil, etc.</Text>
                    <Text style={style.txt6}>○ 220 grams all-purpose flour - aka plain flour</Text>
                    <Text style={style.txt6}>○ 20 salted egg yolks - ready-to-use ones</Text>
                    <Text style={style.txt6}>○ Cornstarch - for dusting</Text>
                    <Text style={style.txt6}>○ 1 egg yolk - for brushing</Text>
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Cook the paste (skip if using shop-bought one). Soak dried lotus seeds in water overnight. Drain well and remove the green bit in the center (if any). </Text>
                    <Text style={style.txt6}>➋ Cook the seeds in simmering water (enough to cover) until soft (about 30-40 minutes). Drain then puree them in a food processor (add a little water if necessary). </Text>
                    <Text style={style.txt6}>➌ Transfer the puree into a non-stick pan. Cook over medium heat. Add sugar and oil in batches. Stir and flip constantly. Once the paste becomes dry and holds in shape, remove from the heat to cool.</Text>
                    <Text style={style.txt6}>➍ In preparing the dough, mix golden syrup, oil and lye water until well incorporated. Add flour. Combine and knead briefly to form a soft dough.</Text>
                    <Text style={style.txt6}>➎ Cover with plastic wrap and rest for 30 minutes.</Text>
                    <Text style={style.txt6}>➏ Assembling, Put one salted egg yolk and some lotus seed paste on the scale. Adjust the filling to reach 30 grams.</Text>
                    <Text style={style.txt6}>➐ Flatten the paste into a round wrapper. Place the egg yolk in the middle. Gently push the paste upwards to seal the yolk completely. </Text>
                    <Text style={style.txt6}>➑ Flatten 20g of the dough into a wrapper. Use the same method to tightly wrap around the filling and make a ball.</Text>
                    <Text style={style.txt6}>➒ In shaping the mooncakes, Coat the ball with a thin layer of cornstarch. Put it into a mooncake mold. </Text>
                    <Text style={style.txt6}>➓ Over a baking tray lined with parchment paper, place the mold with the opening facing down. Gently press the handle to shape the cake. Lift the mold and press again to release the cake.</Text>
                    <Text style={style.txt6}>➊➊ For baking, Preheat the oven to 375°F/190°C. Bake the cakes for 5 minutes. While waiting, mix the egg yolk with 1 teaspoon of water for brushing later. </Text>
                    <Text style={style.txt6}>➊➋ When the time is up, reduce the oven temperature to 320°F/160°C. Take out the mooncakes and brush their top with a thin layer of the egg wash.</Text>
                    <Text style={style.txt6}>➊➌ Put them back into the oven and bake for a further 5 minutes. Take out and coat them with another layer of egg wash. Then continue to bake for 10-15 minutes until evenly brown.</Text>
                    <Text style={style.txt6}>➊➍ For resting & storing, transfer the baked mooncakes to a cooling rack. Once completely cooled, store them in an airtight container for 1-2 days before consumption. They are ready to be served once soft to touch and appear shiny.</Text>
                    <Text style={style.txt6}>➊➎ You may keep them in the fridge for up to 2 weeks. Bring back to room temperature before serving.</Text>
                    <Text style={style.txt6}>➊➏ NOTES: You may use ready-to-use lotus seed paste from Chinese shops. Alternatively, replace it with homemade or shop-bought red bean paste, black sesame paste, etc.</Text>
                    <Text style={style.txt6}>➊➐ If lye water is unavailable, check out my post on how to make homemade lye water using baking powder.</Text>
                    <Text style={style.txt6}>➊➑ The amount of flour needed may vary depending on the thickness of the syrup and the absorbent nature of the flour. Adjust accordingly.</Text>
                    <Text style={style.txt6}>➊➒ Alternatively, use raw salted duck eggs. See instructions in the post above to learn how to prepare them.</Text>
                    <Text style={style.txt6}>➋⓿ Don’t coat the patterned surface with too much egg wash. Before brushing, remove excess liquid by pressing the brush on the rim of the bowl.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food5Chinese