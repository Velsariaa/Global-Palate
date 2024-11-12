import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food2Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Scallion Pancakes (葱油饼)</Text>
                <Text style={style.txt2}>Chinese Cuisine Appetizer</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>35</Text>
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
                    <Text style={style.txt6}>○ For the dough</Text>
                    <Text style={style.txt6}>○ 250 grams all-purpose flour (plain flour)</Text>
                    <Text style={style.txt6}>○ 3 and a half tablespoon Cooking oil - for coating</Text>
                    <Text style={style.txt6}>○ 160 grams hot water</Text>
                    <Text style={style.txt6}>○ For the filling</Text>
                    <Text style={style.txt6}>○ 2 tablespoon melted lard - or coconut oil</Text>
                    <Text style={style.txt6}>○ 2 tablespoon all-purpose flour (plain flour)</Text>
                    <Text style={style.txt6}>○ ¼ teaspoon ground Sichuan pepper - or Chinese five-spice powder</Text>
                    <Text style={style.txt6}>○ ¼ teaspoon salt</Text>
                    <Text style={style.txt6}>○ 40 grams finely chopped scallions (green onion/spring onion)</Text>
                    <Text style={style.txt6}>○ For frying</Text>    
                    <Text style={style.txt6}>○ 1 tablespoon neutral cooking oil</Text>     
                    <Text style={style.txt6}>○ For serving (optional)</Text>
                    <Text style={style.txt6}>○ Black rice vinegar</Text>
                    <Text style={style.txt6}>○ Black rice vinegar</Text>
                    <Text style={style.txt6}>○ Light soy sauce</Text>
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Make the dough. Put flour into a heatproof bowl. Pour in hot water. Stir with chopsticks until no more loose flour or water can be seen. Use your hands to combine the mixture into a rough-looking dough.</Text>
                    <Text style={style.txt6}>➋ Tightly cover the dough with cling film and leave to rest for 15 mins.</Text>
                    <Text style={style.txt6}>➌ Prepare the filling. While waiting, add melted lard (or other oil), flour, Sichuan pepper (or five-spice) and salt to a small bowl. Mix until it becomes a smooth paste.</Text>
                    <Text style={style.txt6}>➍ Shape the pancakes. Uncover the dough then knead until it becomes very smooth. Rub a thin layer of oil around the dough, as well as the work surface.</Text>
                    <Text style={style.txt6}>➎ With a rolling pin, flatten the dough into a thin, rectangular piece. For your reference, mine measures about 43cm(17") by 33cm (13").</Text>
                    <Text style={style.txt6}>➏ Brush the filling mixture over the dough, then sprinkle finely chopped scallions on top.</Text>
                    <Text style={style.txt6}>➐ From the shorter side of the dough piece, roll the dough into a rope (don`t make it too tight).</Text>
                    <Text style={style.txt6}>➑ Cut the rope into 4 cylinders. Stand a piece on one end. Press down with your hand, then flatten it with the rolling pin into a pancake that measures around 13cm/5” in diameter. Alternatively, cut the rope into 3 parts and roll each into a thinner pancake which measures about 23cm/9”.</Text>
                    <Text style={style.txt6}>➒ Fry the pancakes. In a frying pan/skillet, heat oil over high heat until hot. Drop a piece of scallions in to test. If it sizzles, the oil is hot enough.</Text>
                    <Text style={style.txt6}>➓ Turn the heat down to medium and put in the pancakes (the top side facing down). You may cook 4 thick pancakes all at once in a large pan (28cm/11"), or 1 thin pancake at a time.</Text>
                    <Text style={style.txt6}>➊➊ Cover with a lid and leave to cook for about 2 minutes until the side facing down becomes golden brown (adjust the cooking time if necessary). Flip over to cook the other side (keep the lid on). Remove them from the pan once the second side turns golden too.</Text>
                    <Text style={style.txt6}>➊➋ For the best result, rest the pancakes on a wire rack for a minute or two before serving (condensation will form if placed on a plate straightaway). Also, the remaining heat will cook the inside further during the resting time.</Text>
                    <Text style={style.txt6}>➊➌ Serve. Best to enjoy them while warm. You can serve them as breakfast/afternoon snack, or as a staple for regular meals with savoury dishes, soup or congee.</Text>
                    <Text style={style.txt6}>➊➍ The thick version can be served as it is and torn apart to eat. The thin version is often cut into triangular pieces.</Text>
                    <Text style={style.txt6}>➊➎ Although they are tasty on their own, a dipping sauce would make a great accompaniment, e.g. a simple mixture of homemade chilli oil, black rice vinegar and light soy sauce.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
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

export default Food2Chinese