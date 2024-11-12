import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food5Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('D:/PROGRAMMING/javascript/RecipeApp/assets/tinola.jpg')}/>
                <Text style={style.txt1}>Black Sesame Cookies (黒胡麻クッキ)</Text>
                <Text style={style.txt2}>Japanese Cuisine Dessert Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('D:/PROGRAMMING/javascript/RecipeApp/assets/time.png')}/>
                        <Text style ={style.txt3}>1 Hour 45 </Text>
                        <Text style ={style.txt4}>Minutes</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('D:/PROGRAMMING/javascript/RecipeApp/assets/level.png')}/>
                        <Text style ={style.txt3}>Easy</Text>
                        <Text style ={style.txt4}>Difficulty</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('D:/PROGRAMMING/javascript/RecipeApp/assets/serve.png')}/>
                        <Text style ={style.txt3}>40</Text>
                        <Text style ={style.txt4}>Cookies</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 120g of unsalted butter</Text>
                    <Text style={style.txt6}>○ 1⅓ cups of all-purpose flour</Text>
                    <Text style={style.txt6}>○ 40g of almond meal</Text>
                    <Text style={style.txt6}>○ 5 tbsp of sugar</Text>
                    <Text style={style.txt6}>○ ⅛ tsp of diamond crystal kosher salt</Text>
                    <Text style={style.txt6}>○ 1 large egg yolk</Text>
                </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ To Make the Dough</Text>
                    <Text style={style.txt6}>➋ Cut 120 g unsalted butter (½ cup + ½ Tbsp) into small cubes and keep them refrigerated until ready to use </Text>
                    <Text style={style.txt6}>➌ In the food processor, combine 1⅓ cups all-purpose flour (plain flour), 40 g almond meal (¼ cup + 4 tsp), 6 Tbsp sugar, and ⅛ tsp Diamond Crystal kosher salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.</Text>
                    <Text style={style.txt6}>➍ If you want your 5 Tbsp toasted black sesame seeds to be of fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.</Text>
                    <Text style={style.txt6}>➎ Take out the butter from the refrigerator, add to the food processor, and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.</Text>
                    <Text style={style.txt6}>➏ Lastly, add 1 large egg yolk</Text>
                    <Text style={style.txt6}>➐ If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula. </Text>
                    <Text style={style.txt6}>➑ Form the dough into a ball and cut in half.</Text>
                    <Text style={style.txt6}>➒ Roll it to a log approximately 2 inches (5 cm) across. For me, it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. </Text>
                    <Text style={style.txt6}>➓ To Chill the Dough</Text>
                    <Text style={style.txt6}>➊➊ Wrap the logs tightly in plastic wrap and refrigerate until firm, at least an hour (you can put them in the freezer to speed up the process as well). </Text>
                    <Text style={style.txt6}>➊➋ To Bake</Text>
                    <Text style={style.txt6}>➊➌ Preheat the oven to 350°F (175°C). For a convection oven, reduce cooking temperature by 25ºF (15ºC). Remove the dough from plastic wrap and cut into discs about ¼ inch (6 mm) thick (if you prefer thicker cookies, cut into discs about ½ inch (1.3 cm) and you get 20 cookies total).</Text>
                    <Text style={style.txt6}>➊➍ Place them on 2 baking sheets lined with parchment paper. Bake for about 15 minutes, or until lightly browned around the edges. If you are baking in batches, make sure to keep the second batch in the refrigerator to chill until baking.</Text>
                    <Text style={style.txt6}>➊➎ Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food5Japanese

