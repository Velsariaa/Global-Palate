import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food5Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Garlic Bread Bruschetta</Text>
                <Text style={style.txt2}>Italian Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>Under 30</Text>
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
                    <Text style={style.txt6}>○ 1 loaf italian bread, sliced</Text>
                    <Text style={style.txt6}>○ 3 tablespoons butter, melted</Text>
                    <Text style={style.txt6}>○ 1 clove garlic, minced</Text>
                    <Text style={style.txt6}>○ italian seasoning, to taste</Text>
                    <Text style={style.txt6}>○ parmesan cheese, to taste</Text>   
                    <Text style={style.txt6}>○ 6 roma tomatoes, diced</Text>
                    <Text style={style.txt6}>○ 2 cloves garlic, minced</Text>
                    <Text style={style.txt6}>○ 1 tablespoon olive oil</Text>
                    <Text style={style.txt6}>○ 1 teaspoon salt</Text>
                    <Text style={style.txt6}>○ ¼ teaspoon pepper</Text> 
                    <Text style={style.txt6}>○4 fresh basil leaves, finely chopped</Text>                                      
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Preheat oven to 350°F (180°C).</Text>
                    <Text style={style.txt6}>➋ In the microwave, melt the 3 tablespoons of butter with 1 clove of garlic.</Text>
                    <Text style={style.txt6}>➌ Slice up a loaf of Italian bread to about 1-inch (2 ½ cm) thickness.</Text>
                    <Text style={style.txt6}>➍ Top with melted garlic butter, Italian seasoning, and parmesan cheese.</Text>
                    <Text style={style.txt6}>➎ Bake for approximately 15 minutes or until golden brown.</Text>
                    <Text style={style.txt6}>➏ In a mixing bowl, combine the tomatoes, garlic, salt, pepper, basil, and olive oil and stir until everything is fully coated with olive oil.</Text>
                    <Text style={style.txt6}>➐ Top the garlic bread with desired amount of tomato mixture.</Text>
                    <Text style={style.txt6}>➑ Garnish with parmesan cheese.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 
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

export default Food5Italian