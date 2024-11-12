import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food3Filipino = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/carbonara.jpg')}/> 
                <Text style={style.txt1}>Creamy Carbonara</Text>
                <Text style={style.txt2}>Italian Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>40</Text>
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
                    <Text style={style.txt6}>○ 300 g spaghetti</Text>
                    <Text style={style.txt6}>○ 12 strips of bacon, cut into ½ cm slices</Text>
                    <Text style={style.txt6}>○ 1 tablespoon butter</Text>
                    <Text style={style.txt6}>○ 2 cloves garlic, finely chopped</Text>
                    <Text style={style.txt6}>○ ½ cup button mushrooms or enoki mushroom</Text>
                    <Text style={style.txt6}>○ ¼ cup all-purpose flour</Text>
                    <Text style={style.txt6}>○ 1 (68g) pack Knorr Cream of Mushroom dissolved in 3 cups of water</Text>
                    <Text style={style.txt6}>○ 1 cup all-purpose cream</Text>
                    <Text style={style.txt6}>○ Optional: 30 g spinach leaves picked</Text>
                    <Text style={style.txt6}>○ salt and pepper to taste</Text>
                    <Text style={style.txt6}>○ grated Parmesan Cheese</Text>
                                    
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Cook pasta according to package directions. Drain well and set aside.</Text>
                    <Text style={style.txt6}>➋ In a pan, cook the bacon until crispy and set aside.</Text>
                    <Text style={style.txt6}>➌ Using the same pan, add the butter and sauté the garlic until light brown. Add sliced mushrooms and all-purpose flour. Mix well.</Text>
                    <Text style={style.txt6}>➍ Add dissolved Knorr Cream of Mushroom Soup and allow to simmer until slightly thick.</Text>
                    <Text style={style.txt6}>➎ You may add spinach leaves at this point. Add the all-purpose cream—season with salt and pepper to taste. Mix well. Do not simmer or boil, as the cream will curdle. Turn off the heat and toss in the cooked pasta.</Text>
                    <Text style={style.txt6}>➏ Arrange the pasta on a plate, then top with crispy bacon and Parmesan cheese.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
                    
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

export default Food3Filipino