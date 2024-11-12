import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food3Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Yaki Onigiri (焼きおにぎり)</Text>
                <Text style={style.txt2}>Japanese Cuisine Appetizer Dish</Text>
    
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
                        <Text style ={style.txt3}>9</Text>
                        <Text style ={style.txt4}>Rice balls</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ For the Steamed Rice</Text>
                    <Text style={style.txt6}>○ 2¼ cups of uncooked Japanese short-grain white rice</Text>
                    <Text style={style.txt6}>○ 2½ cups of water</Text>
                    <Text style={style.txt6}>○ For Seasoning the Rice</Text>
                    <Text style={style.txt6}>○ 3 tbsp of soy sauce</Text>
                    <Text style={style.txt6}>○ 1 tbsp of sugar</Text>
                    <Text style={style.txt6}>○ 1 tbsp toasted sesame oil</Text>
                    <Text style={style.txt6}>○ ¼ tsp diamond crystal kosher salt</Text>
                    <Text style={style.txt6}>○ For the Glaze</Text>
                    <Text style={style.txt6}>○ 1 Tbsp soy sauce.</Text>
                    <Text style={style.txt6}>○ 1 tsp toasted sesame oil</Text>
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Before you start</Text>
                    <Text style={style.txt6}>➋ Japanese short-grain white rice requires a soaking time of 20–30 minutes. The rice-to-water ratio is 1 to 1.1 (or 1.2) for short-grain white rice. Please note that 2¼ cups (450 g, 3 rice cooker cups) of uncooked Japanese short-grain rice yield 6⅔ cups (990 g) of cooked white rice. This is enough for 9 onigiri rice balls (typically 110 g each). </Text>
                    <Text style={style.txt6}>➌ Cook the rice. To the rice cooker, I added 2½ cups water to 2¼ cups uncooked Japanese short-grain white rice. Once the rice is cooked, gather all the ingredients.</Text>
                    <Text style={style.txt6}>➍ To season the Rice</Text>
                    <Text style={style.txt6}>➎ Combine 3 Tbsp soy sauce and 1 Tbsp sugar in a small bowl and microwave until the mixture is hot, about 30–60 seconds. Whisk it all together until the sugar dissolves.</Text>
                    <Text style={style.txt6}>➏ Add 1 Tbsp toasted sesame oil and ¼ tsp Diamond Crystal kosher salt and mix it all together.</Text>
                    <Text style={style.txt6}>➐ Transfer the hot cooked rice to a large bowl and add the seasoning mixture. </Text>
                    <Text style={style.txt6}>➑ Flatten 20g of the dough into a wrapper. Use the same method to tightly wrap around the filling and make a ball.</Text>
                    <Text style={style.txt6}>➒ With a rice paddle, use a slicing motion to combine the seasoning and cooked rice well. Now, you‘re ready to shape the rice balls.</Text>
                    <Text style={style.txt6}>➓ To Shape the Rice Balls</Text>
                    <Text style={style.txt6}>➊➊ With an Onigiri Mold: Prepare a small bowl filled with water. Soak the onigiri mold and lid in the water to moisten so the rice doesn‘t stick to it. Remove the mold and drain the excess water. </Text>
                    <Text style={style.txt6}>➊➋ Fill the onigiri mold with the hot seasoned rice all the way to the top edge, making sure to fill the corners. Cover with the lid and push down firmly. You should feel a slight resistance; if not, you may want to add a bit more rice.</Text>
                    <Text style={style.txt6}>➊➌ Remove the lid. Flip over the mold onto a baking sheet or plate lined with parchment paper. Then, push the “button” on the mold‘s bottom to release your onigiri</Text>
                    <Text style={style.txt6}>➊➍ Repeat with the remaining rice.</Text>
                    <Text style={style.txt6}>➊➎ Now, firmly hand-press the rice balls to keep them from falling apart while grilling. For Yaki Onigiri, you‘ll want to press the rice ball a bit more tightly than you would a regular onigiri. First, moisten both palms with a bit of water to prevent the rice from sticking. Then, pick up a rice ball in your left (non-dominant) hand. Place your right (dominant) hand on top of the rice in a “mountain" shape and gently press the triangle corner. At the same time, squeeze the fingers and heel of your bottom (left) hand to gently press the sides flat.
                     Now, rotate the triangle corner you just pressed toward you (clockwise, if you‘re right-handed). The tip of the second corner will now be pointing up. Repeat the above “press and rotate” steps to hand press the second triangle corner and then the third, always keeping your left hand on the bottom and your right hand on top. Press and rotate a final 2–3 more times to finish.</Text>
                    <Text style={style.txt6}>➊➏ To Pan-Grill the Onigiri</Text>
                    <Text style={style.txt6}>➊➐ Combine 1 Tbsp soy sauce and 1 tsp toasted sesame oil for the glaze. Place a sheet of parchment paper on a large frying pan.</Text>
                    <Text style={style.txt6}>➊➑ Gently place the rice balls on the parchment paper and grill on medium-low heat. Grill the onigiri until all sides are crispy and lightly browned. Once browned on the bottom, turn them over (I use two silicone spatulas). Don’t flip them until browned; work on one side at a time and avoid handling them too much, which may cause the onigiri to break into pieces.</Text>
                    <Text style={style.txt6}>➊➒ Rotate the onigiri to grill all sides and make sure they become crispy.</Text>
                    <Text style={style.txt6}>(20) Once they are nicely toasted and lightly brown, turn the heat to low (or turn off the heat). Brush the onigiri sides with the soy sauce glaze, then turn over to grill on the sauce side. Then, brush on the other side.</Text>
                    <Text style={style.txt6}>(21) Be careful not to burn the onigiri after you brush it with the glaze. Optionally, you can brush them with my homemade unagi sauce and teriyaki sauce. Your Yaki Onigiri are now ready to enjoy.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food3Japanese
