import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food2Filipino = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/bikol.jpg')}/> 
                <Text style={style.txt1}>Crunchy Bicol Express</Text>
                <Text style={style.txt2}>Filipino Dish</Text>
    
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
                        <Text style ={style.txt3}>3 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 1/2 kg pork belly, sliced</Text>
                    <Text style={style.txt6}>○ water, to cover</Text>
                    <Text style={style.txt6}>○ 1 pc Knorr Pork Cubes</Text>
                    <Text style={style.txt6}>○ oil for frying</Text>
                    <Text style={style.txt6}>○ 2 tbsp oil</Text>
                    <Text style={style.txt6}>○ 2 tbsp bagoong or shrimp paste</Text>
                    <Text style={style.txt6}>○ red and green chilies, chopped as needed</Text>
                    <Text style={style.txt6}>○ 1 (29 g) pack Knorr Ginataang Gulay Mix, dissolved in 240 ml water</Text>
                                    
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ If you want to have an amazing and crispy pork belly, you need to boil the pork in water with Knorr Pork Cubes first. Now, allow this to simmer over low heat until the pork is tender.</Text>
                    <Text style={style.txt6}>➋ Deep-fry the pork belly only when it has been thoroughly drained, and its surfaces are dry. You can pat dry with paper towels. Otherwise, when you place it in hot oil, the oil will splatter and might burn your skin.</Text>
                    <Text style={style.txt6}>➌ For the next step, prepare a plate or tray lined with paper towels so you can place the cooked fried belly on top. The paper towel will absorb the excess oil from the pork.</Text>
                    <Text style={style.txt6}>➍ Now, we can start preparing our sauce. Get your pan nice and hot over medium-high heat. Then, pour some oil and gently sauté the bagoong and chilies for 2 minutes.</Text>
                    <Text style={style.txt6}>➎ Add Knorr Complete Recipe Mix Ginataang Gulay dissolved in water. Let this simmer until thick.</Text>
                    <Text style={style.txt6}>➏ When your family sees a plate full of fried pork topped with some spicy gata sauce, they will not be able to contain their excitement! Get your camera phone ready because you’ll want to capture their happy faces when taking that first bite.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
                    
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

export default Food2Filipino