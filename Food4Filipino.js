import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food4Filipino = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/ginataan.jpg')}/> 
                <Text style={style.txt1}>Ginataang Gulay</Text>
                <Text style={style.txt2}>Filipino Dish</Text>
    
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
                    <Text style={style.txt6}>○ 1 tbsp cooking oil</Text>
                    <Text style={style.txt6}>○ 1/2 pc onion, chopped</Text>
                    <Text style={style.txt6}>○ 1 clove garlic, chopped</Text>
                    <Text style={style.txt6}>○ 1/4 pc kalabasa, peeled and cubed</Text>
                    <Text style={style.txt6}>○ 1/2 bunch sitaw, sliced into 2 inches long</Text>
                    <Text style={style.txt6}>○ 1 (29 g) pack Knorr Ginataang Gulay Mix, dissolved in 1 cup water</Text>
                    <Text style={style.txt6}>○ 1 pc small small green siling haba, sliced</Text>
                    <Text style={style.txt6}>○ 1 cup all-purpose cream</Text>
                    <Text style={style.txt6}>○ Optional: 30 g spinach leaves picked</Text>
                    <Text style={style.txt6}>○ Optional: 1 cup malunggay leaves</Text>
                    <Text style={style.txt6}>○ 1/4 cup shrimp, peeled</Text>
                                    
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Begin by getting your pan nice and hot over medium heat. Pour some oil and throw in the onion and garlic. Cook until the onion is soft and the garlic is golden brown.</Text>
                    <Text style={style.txt6}>➋ Gently add the kalabasa and sitaw and pour in the dissolved Knorr Complete Recipe Mix and siling haba. Stir well and cover until the vegetables are half cooked.</Text>
                    <Text style={style.txt6}>➌ Throw in the malunggay leaves and shrimps and then continue to simmer until kalabasa and shrimps are fully cooked. And there you have it!</Text>
                    <Text style={style.txt6}>➍ Ginataang Gulay is the perfect complement to any of your favourite dishes. You can simply have it as is. Like home, it’s a comfort dish!{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>                                 
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

export default Food4Filipino