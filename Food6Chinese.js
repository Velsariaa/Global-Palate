import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food6Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Red Bean Buns (豆沙包)</Text>
                <Text style={style.txt2}>Chinese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>3</Text>
                        <Text style ={style.txt4}>Hours</Text>
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
                        <Text style ={style.txt3}>14 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ For the filling</Text>
                    <Text style={style.txt6}>○ 150 grams adzuki beans (aka red beans), or 350g canned ones</Text>
                    <Text style={style.txt6}>○ 2 tablespoon white sugar</Text>
                    <Text style={style.txt6}>○ 1 tablespoon dark brown sugar</Text>
                    <Text style={style.txt6}>○ 80 g butter</Text>
                    <Text style={style.txt6}>○ For the dough</Text>
                    <Text style={style.txt6}>○ 350 grams all-purpose flour, or bao flour/cake flour</Text>
                    <Text style={style.txt6}>○ 2 teaspoon instant dry yeast</Text>
                    <Text style={style.txt6}>○ 2 teaspoon baking powder</Text>
                    <Text style={style.txt6}>○ 1 tablespoon sugar</Text>
                    <Text style={style.txt6}>○ 1 & ½ tablespoon neutral cooking oil</Text>    
                    <Text style={style.txt6}>○ 180 grams lukewarm water, adjust slightly if necessary</Text>     
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ In cooking the beans (skip if using canned beans). Soak adzuki beans in water overnight. Drain then put into a pot. Pour in 500ml of water. Bring it to a boil then leave to simmer for about 90 mins until cooked (You may use a pressure cooker/instant pot to reduce the cooking time).</Text>
                    <Text style={style.txt6}>➋ In making the paste, put drained beans into a blender or food processor (see note 6 for handmade option). Add white sugar, dark brown sugar and butter (or coconut oil). Blend on high speed into a fine paste. You may need to add a little water to make blending easier. However, only add as little as necessary.</Text>
                    <Text style={style.txt6}>➌ Transfer the soft paste into a non-stick pan. Cook over medium-high heat while stirring and flipping constantly to avoid burning. Once the paste becomes dark and holds in shape, transfer out to cool.</Text>
                    <Text style={style.txt6}>➍ In preparing the dough, IF USING HANDS: Mix flour, sugar, baking powder, yeast and oil in a bowl. Add water gradually while mixing with a pair of chopsticks/spatula. Combine with your hands to form a rough dough. Rest (covered) for 10 mins then knead again until very smooth.</Text>
                    <Text style={style.txt6}>➎ IF USING A STAND MIXER: Add all the ingredients for the dough into the mixing bowl. Knead on low speed for about 8 mins until a smooth dough forms.</Text>
                    <Text style={style.txt6}>➏ In rolling the wrappers, Roll the dough into a long rope then divide into 14 equal parts. Work on one piece at a time and make sure you cover the rest to prevent them from drying out.</Text>
                    <Text style={style.txt6}>➐ With a rolling pin, flatten one piece into a disc-like wrapper, about 10cm in diameter (Dust with flour if necessary). Ideally, it should be thinner on the edge & thicker in the middle.</Text>
                    <Text style={style.txt6}>➑ In assembling the buns, Place a spoonful of the cooled red bean paste (about 30g) in the middle of a wrapper. Seal the bun completely using whatever method that you feel most comfortable with.</Text>
                    <Text style={style.txt6}>➒ Put the bun on the work surface with the sealed side facing down. Rotate the bun between your hands to form a slightly raised shape.</Text>
                    <Text style={style.txt6}>➓ OPTIONAL STEP: If you wish to make it festive, mark a red dot (or other pattern) on top of the bun with a little red food colouring.</Text>
                    <Text style={style.txt6}>➊➊ Repeat to finish all the wrappers and filling. Then place the buns into steamer baskets lined with parchment paper to prevent sticking (Alternatively, brush a thin layer of oil if using a metal/plastic steamer). Make sure you leave ample space between each bun.</Text>
                    <Text style={style.txt6}>➊➋ Leave to rest for 30 minutes or so until they become very light & plump (no need to cover).</Text>
                    <Text style={style.txt6}>➊➌ Lastly, in steaming the buns, bring water to a full boil in a wok/pot. Place the steamer baskets in.</Text>
                    <Text style={style.txt6}>➊➍ Steam over medium-high heat for 10 mins. Serve immediately.</Text>
                    <Text style={style.txt6}>➊➎ In storing and re-heating, Red bean paste can be kept in the fridge for up to 3 days or in the freezer for two months.</Text>
                    <Text style={style.txt6}>➊➏ Store leftover buns in the fridge for up to 3 days or in the freezer for two months (It’s not recommended to refrigerate or freeze uncooked buns).</Text>
                    <Text style={style.txt6}>➊➐ To reheat the buns, defrost in the fridge then steam for 3 mins. Alternatively, steam for 6 mins without defrosting.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food6Chinese