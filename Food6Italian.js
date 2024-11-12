import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food6Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Cheesy Pepperoni Stromboli</Text>
                <Text style={style.txt2}>Italian Dish</Text>
    
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
                        <Text style ={style.txt3}>6 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 1 package pizza dough</Text>
                    <Text style={style.txt6}>○ 30 slices pepperoni</Text>
                    <Text style={style.txt6}>○ 8 slices mozzarella cheese, cut in half</Text>
                    <Text style={style.txt6}>○ 30 slices sliced salami</Text>
                    <Text style={style.txt6}>○ ½ cup chopped roasted red peppers(50 g)</Text>   
                    <Text style={style.txt6}>○ 1 cup shredded mozzarella cheese(100 g)</Text>
                    <Text style={style.txt6}>○ 1 teaspoon red pepper flakes</Text>
                    <Text style={style.txt6}>○ 1 teaspoon dried oregano</Text>
                    <Text style={style.txt6}>○ 1 jar pizza sauce, warmed</Text>
                    <Text style={style.txt6}>○ 3 tablespoons butter, melted</Text> 
                    <Text style={style.txt6}>○ 2 cloves garlic, chopped</Text> 
                    <Text style={style.txt6}>○ 2 tablespoons finely chopped fresh parsley</Text>
                    <Text style={style.txt6}>○ 1 teaspoon pepper</Text> 
                    <Text style={style.txt6}>○ 1 teaspoon salt</Text>                                                     
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper.</Text>
                    <Text style={style.txt6}>➋ Remove the pizza dough from the package and roll out on lightly floured surface.</Text>
                    <Text style={style.txt6}>➌ Arrange alternating rows of pepperoni, sliced mozzarella, and salami on top of the dough, leaving a 1½-inch (4-cm) border around the edges.</Text>
                    <Text style={style.txt6}>➍ Sprinkle the roasted red peppers, shredded mozzarella, red pepper flakes, and oregano on top.</Text>
                    <Text style={style.txt6}>➎ Starting from a short end, roll up the stromboli.</Text>
                    <Text style={style.txt6}>➏ Make the garlic butter: In a small bowl, stir together the melted butter, garlic, parsley, salt, and pepper.</Text>
                    <Text style={style.txt6}>➐ Brush the butter mixture all over the stromboli, then transfer to the prepared baking sheet.</Text>
                    <Text style={style.txt6}>➑ Bake the stromboli until golden brown, 15-20 minutes.</Text>
                    <Text style={style.txt6}>➒ Slice the stromboli crosswise and serve warm with the pizza sauce for dipping.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 
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

export default Food6Italian