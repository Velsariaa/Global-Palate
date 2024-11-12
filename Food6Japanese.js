import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food6Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Mitarashi Dango (みたらし団子)</Text>
                <Text style={style.txt2}>Japanese Cuisine Dessert</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>45</Text>
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
                        <Text style ={style.txt3}>5</Text>
                        <Text style ={style.txt4}>Skewers</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ For the Dumplings Using Joshinko and Shiratamako:</Text>
                    <Text style={style.txt6}>○ ⅔ cup of joshinko (Japanese rice flour)</Text>
                    <Text style={style.txt6}>○ ¾ cup of shiratamako (glutinous rice flour / sweet rice flour)</Text>
                    <Text style={style.txt6}>○ For the Dumplings using Dangoko</Text>
                    <Text style={style.txt6}>○ 7 oz dangoko (Japanese rice dumpling flour)</Text>
                    <Text style={style.txt6}>○ ⅔ cup water</Text>
                    
                    
                    <Text style={style.txt6}>○ For the Sweet Soy Glaze</Text>
                    <Text style={style.txt6}>○ 4 tbsp of sugar</Text>
                    <Text style={style.txt6}>○2 tbsp of mirin</Text>
                    <Text style={style.txt6}>○ 2 tbsp of soy sauce</Text>
                    <Text style={style.txt6}>○ ⅔ cup of water</Text>    
                    <Text style={style.txt6}>○2 tbsp of potato starch or cornstarch</Text>     
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ To Make the Rice Dumplings</Text>
                    <Text style={style.txt6}>➋ Combine ⅔ cup joshinko (Japanese rice flour) and ¾ cup shiratamako (glutinous rice flour/sweet rice flour) in a bowl. (If you‘re making the dumplings using dangoko, add 7 oz dangoko (Japanese rice dumpling flour) instead to a bowl.) Using chopsticks, mix it all together until well blended. </Text>
                    <Text style={style.txt6}>➌ Stir in some of the ⅔ cup boiling water for the joshinko, a little bit at a time, while mixing with chopsticks. (Or, stir in some of the ⅔ cup water (cold) for the dangoko, a little bit at a time.) Please note: You probably will not use the entire ⅔ cup boiling water for the joshinko or ⅔ cup water for the dangoko.</Text>
                    <Text style={style.txt6}>➍ When the flours start to stick together and eventually form clumps, stop adding water. Using your hands, combine the dough into one ball.</Text>
                    <Text style={style.txt6}>➎ Knead until the dough becomes smooth. The texture is like squeezing an “earlobe“ (that’s how we describe the tenderness of this type of mochi in Japanese).</Text>
                    <Text style={style.txt6}>➏ Form the dough into a ball. Divide the dough into 8 equal pieces.</Text>
                    <Text style={style.txt6}>➐ Then divide each piece into 2 smaller pieces. You will have 16 equal-sized pieces of dough. I always like to weigh mine. Each ball should be 20 grams. You may have some extra dough, but that’s okay. </Text>
                    <Text style={style.txt6}>➑ Shape each of the dough pieces into a smooth, round ball. If the dough is cracking or has some wrinkles, dip the tip of your finger in water and apply a small amount of water to the cracked area to smooth it out. You now have 16 equal-sized dumplings.</Text>
                    <Text style={style.txt6}>➒ Just before cooking the dumplings, prepare a bowl of iced water. Once the water in the pot is boiling, gently drop each dumpling into the pot with a smooth, continuous arm motion to avoid splashing. Cook them all at once. Stir the balls occasionally so they keep their round shape and don‘t stick to the bottom of the pot. </Text>
                    <Text style={style.txt6}>➓ The dumplings will stay near the bottom of the pot at first, but they will float once cooked. When they rise to the top, boil them for an additional 1–2 minutes.</Text>
                    <Text style={style.txt6}>➊➊Transfer the dumplings to the bowl of iced water. </Text>
                    <Text style={style.txt6}>➊➋ Once the dumplings have cooled, drain them well and transfer them to a tray. Tip: Wet the tray so the dumplings don‘t stick.</Text>
                    <Text style={style.txt6}>➊➌ Skewer three pieces onto a bamboo skewer. Continue with the rest of the dumplings and set aside.</Text>
                    <Text style={style.txt6}>➊➍ To Make the Sweet Soy Sauce</Text>
                    <Text style={style.txt6}>➊➎ In a cold saucepan, add 4 Tbsp sugar, 2 Tbsp mirin, 2 Tbsp soy sauce, ⅔ cup water, and 2 Tbsp potato starch or cornstarch. Do not turn on the heat yet.</Text>
                    <Text style={style.txt6}>➊➏ Mix all the ingredients together well until smooth. The potato starch/cornstarch will become lumpy if you heat the sauce without stirring beforehand. Now, turn on the heat and continue to whisk.</Text>
                    <Text style={style.txt6}>➊➐ Keep whisking continuously, as the mixture can thicken suddenly.</Text>
                    <Text style={style.txt6}>➊➑ When the sauce thickens, remove the saucepan from the heat and transfer the sauce to a container or bowl. If you are making it ahead of time, remove the sauce from the heat before the consistency gets too thick. The moisture will continue to evaporate as it cools and thicken the sauce.</Text>
                    <Text style={style.txt6}>➊➒ To Serve.</Text>
                    <Text style={style.txt6}>➋⓿ Optional: If you have a kitchen torch, you can give the Mitarashi Dango a little bit of char for a grilled taste. You can also grill them over direct heat (if you are going to place them on a wire rack, grease it first, as the dumplings tend to stick). You can use a broiler to char the dumplings or use a nonstick frying pan to pan-fry the surface of the dango.</Text>
                    <Text style={style.txt6}>➋➊ Pour the sweet soy glaze on top of the Mitarashi Dango and serve immediately.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food6Japanese
