import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food3Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Vanilla Panna Cotta</Text>
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
                    <Text style={style.txt6}>○ 1 teaspoon unflavored gelatin</Text>
                    <Text style={style.txt6}>○ 1 tablespoon cold water</Text>
                    <Text style={style.txt6}>○ 1 ½ cups heavy cream(360 mL)</Text>
                    <Text style={style.txt6}>○ ¼ cup sugar(50 g)</Text>
                    <Text style={style.txt6}>○ ¼ teaspoon vanilla extract</Text>                                            
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Sprinkle gelatin over the water. The gelatin will absorb the water and dissolve, in a process called “blooming.”</Text>
                    <Text style={style.txt6}>➋ In a small saucepan, combine heavy cream with sugar and cook over medium until it’s at the scalding point, or just under a boil.</Text>
                    <Text style={style.txt6}>➌ Once the cream has almost reached the boiling point, remove from heat and add vanilla extract and bloomed gelatin. Stir until fully dissolved.</Text>
                    <Text style={style.txt6}>➍ Strain panna cotta mixture into desired serving tempered glasses.</Text>
                    <Text style={style.txt6}>➎ Allow cream to come to room temperature before chilling in the fridge for 2-4 hours, or until the cream is firm in texture.</Text>
                    <Text style={style.txt6}>➏ Top with berries and honey.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
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

export default Food3Italian