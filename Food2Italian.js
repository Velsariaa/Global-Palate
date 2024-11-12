import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food2Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Risotto</Text>
                <Text style={style.txt2}>Italian Dish</Text>
    
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
                        <Text style ={style.txt3}>Medium</Text>
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
                    <Text style={style.txt6}>○ 6 cups low-sodium chicken stock, or vegetable stock</Text>
                    <Text style={style.txt6}>○ 2 tablespoons olive oil</Text>
                    <Text style={style.txt6}>○ 1 shallot, finely chopped</Text>
                    <Text style={style.txt6}>○ 1 lb shiitake mushroom(455 g), stemmed and thinly sliced</Text>
                    <Text style={style.txt6}>○ 2 tablespoons unsalted butter</Text>  
                    <Text style={style.txt6}>○ 2 cloves garlic, minced</Text>
                    <Text style={style.txt6}>○ 1 teaspoon finely chopped fresh thyme leaves</Text>          
                    <Text style={style.txt6}>○ kosher salt, to taste</Text>
                    <Text style={style.txt6}>○ freshly ground black pepper, to taste</Text>   
                    <Text style={style.txt6}>○ 1 ½ cups arborio rice(200 g)</Text>
                    <Text style={style.txt6}>○ ½ cup white wine(120 mL), or lemon juice</Text>  
                    <Text style={style.txt6}>○ 1 cup grated parmesan cheese(110 g), plus more for serving</Text>
                    <Text style={style.txt6}>○ ¼ cup fresh parsley(10 g), for serving</Text>                                            
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Add the stock to a medium pot and bring to a boil over high heat. Once the stock is boiling, reduce the heat to low or remove the pan from the heat and keep nearby.</Text>
                    <Text style={style.txt6}>➋ Heat the olive oil in a wide, tall pot over medium heat. Once the oil begins to shimmer, add the shallot and cook, stirring frequently, until translucent.</Text>
                    <Text style={style.txt6}>➌ Add the shiitake mushrooms and butter. Cook, stirring occasionally, until the mushrooms have cooked down and browned.</Text>
                    <Text style={style.txt6}>➍ Add the garlic, thyme, salt, and pepper, stir, and cook for 1 minute, until the garlic is fragrant.</Text>
                    <Text style={style.txt6}>➎ Add the rice and stir until fully coated in the mushroom mixture. Let the rice toast for 1-2 minutes, until aromatic.</Text>
                    <Text style={style.txt6}>➏ Add the white wine and cook until evaporated, stirring occasionally.</Text>
                    <Text style={style.txt6}>➐ Add 1 cup (240 ml) of the hot stock and stir to combine. Cook, stirring frequently, until the stock is fully absorbed by the rice.</Text>
                    <Text style={style.txt6}>➑ Continue to add the stock, ½ cup (120 ml) at a time, stirring continuously, until fully absorbed, 15-20 minutes. Depending on how fast the rice cooks, there may be leftover stock.</Text>
                    <Text style={style.txt6}>➒ Once the rice is al dente, remove from the heat. Add the Parmesan and stir to combine.</Text>
                    <Text style={style.txt6}>  Garnish the risotto with parsley, Parmesan, salt, and pepper.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
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

export default Food2Italian