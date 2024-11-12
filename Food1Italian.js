import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food1Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Cacio e Pepe (Spaghetti with Cheese and Pepper)</Text>
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
                        <Text style ={style.txt3}>4 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ ½ lb spaghetti(225 g)</Text>
                    <Text style={style.txt6}>○ 2 tablespoons olive oil</Text>
                    <Text style={style.txt6}>○ 2 tablespoons unsalted butter</Text>
                    <Text style={style.txt6}>○ 2 teaspoons coarsely ground black pepper</Text>
                    <Text style={style.txt6}>○ 4 oz grated parmesan cheese(115 g), or pecorino romano cheese</Text>                        
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Bring a large pot of salted water to a boil. Cook the pasta for 1 minute less than the package instructs, until al dente. Save 1 cup (240 ml) pasta water, then drain.</Text>
                    <Text style={style.txt6}>➋ Heat a large sauté pan over medium heat. Add the olive oil, butter, and pepper, and stir to combine.</Text>
                    <Text style={style.txt6}>➌ Stir in the reserved pasta water.</Text>
                    <Text style={style.txt6}>➍ Toss in the cooked pasta. Reduce the heat to low.</Text>
                    <Text style={style.txt6}>➎ Add the Parmesan and toss until the cheese is melted and the pasta is well-coated.</Text>
                    <Text style={style.txt6}>➏ Season with salt, if desired.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
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

export default Food1Italian