import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food2Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Japanese Chicken Curry (チキンカレー)</Text>
                <Text style={style.txt2}>Japanese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>1 hour 10</Text>
                        <Text style ={style.txt4}>Mins</Text>
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
                        <Text style ={style.txt3}>8 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 2 onions</Text>
                    <Text style={style.txt6}>○2 carrots</Text>
                    <Text style={style.txt6}>○ 3 Yukon gold potatoes</Text>
                    <Text style={style.txt6}>○ 1 tablespoon dark brown sugar</Text>
                    <Text style={style.txt6}>○ 1 tsp of grated ginger</Text>
                    <Text style={style.txt6}>○ 2 cloves of garlic</Text>
                    <Text style={style.txt6}>○1/2 apple</Text>
                    <Text style={style.txt6}>○ 1½ lb boneless, skinless chicken thighs</Text>
                    <Text style={style.txt6}>○ freshly ground black pepper</Text>
                    <Text style={style.txt6}>○ For the Curry sauce:</Text>
                    <Text style={style.txt6}>○ 1½ Tbsp neutral oil</Text>    
                    <Text style={style.txt6}>○ 4 cups chicken stock/broth</Text>
                    <Text style={style.txt6}>○ 1 Tbsp of honey</Text>     
                    <Text style={style.txt6}>○  1 Tbsp of soy sauce</Text>     
                    <Text style={style.txt6}>○ 1 Tbsp of ketchup</Text>     
                    <Text style={style.txt6}>○ 1 package of Japanese curry roux</Text>
                    <Text style={style.txt6}>○ For serving:</Text>        
                    <Text style={style.txt6}>○  8 servings of cooked Japanese short-grain rice</Text>     
                    <Text style={style.txt6}>○ Fukujinzuke (Japanese red pickled vegetable)</Text>     
                    </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ To Prepare the Ingredients</Text>
                    <Text style={style.txt6}>➋ Cut 2 onions into wedges. I like to have the texture of the onions in my curry, so I cut them into thick wedges. If you prefer, you can mince or thinly slice the onions so they disintegrate into the sauce.</Text>
                    <Text style={style.txt6}>➌ Peel 2 carrots and cut them into rolling wedges (it‘s called rangiri in Japanese). This type of cut creates more surface area, which helps the carrots absorb more flavor and cook faster.</Text>
                    <Text style={style.txt6}>➍ Peel 3 Yukon gold potatoes and cut them into quarters. Soak them in water for 15 minutes to remove excess starch.</Text>
                    <Text style={style.txt6}>➎ Grate the ginger and measure 1 tsp ginger with the juice. Set aside. Mince 2 cloves garlic and set aside</Text>
                    <Text style={style.txt6}>➏ Cut ½ apple into quarters, remove the core, and peel the skin.</Text>
                    <Text style={style.txt6}>➐ Grate the apple and set aside. Note: You also could use 1 small lunchbox apple for 8 servings.</Text>
                    <Text style={style.txt6}>➑ Cut off the extra fat from 1½ lb boneless, skinless chicken thighs and discard it. Then, cut the chicken into bite-sized pieces. I recommend cutting it diagonally (it‘s called sogigiri in Japanese) to create more surface area and flatten each piece so it cooks faster. Season with freshly ground black pepper.</Text>
                    <Text style={style.txt6}>➒ To Cook the Curry</Text>
                    <Text style={style.txt6}>➓ Heat 1½ Tbsp neutral oil in a large pot over medium heat and add the onion.</Text>
                    <Text style={style.txt6}>➊➊ Sauté the onions, stirring occasionally, until they become translucent and tender, about 5 minutes. Don‘t stir the onions too often because they won’t develop a golden color. Cooked onions add amazing flavor, so we do not want to skip this step. If you have an extra 5 minutes, definitely caramelize the onions.</Text>
                    <Text style={style.txt6}>➊➋ Add the minced garlic and grated ginger and mix well together.</Text>
                    <Text style={style.txt6}>➊➌ Add the chicken and cook, stirring frequently, until it‘s no longer pink on the outside. If the onions are getting too brown, reduce the heat to medium low temporarily.</Text>
                    <Text style={style.txt6}>➊➍ Add 4 cups chicken stock/broth. To reduce the sodium, you can substitute with water only or use half stock and half water, if you prefer.</Text>
                    <Text style={style.txt6}>➊➎ Add the grated apple, 1 Tbsp honey, 1 Tbsp soy sauce, and 1 Tbsp ketchup</Text>
                    <Text style={style.txt6}>➊➏ Add the carrots and Yukon gold potatoes (if you‘re using russet potatoes, add them later in the last 15–20 minutes of cooking). The broth should barely cover the ingredients. Don‘t worry; we don‘t want too much liquid here, and additional liquid will be released from the meat and vegetables.</Text>
                    <Text style={style.txt6}>➊➐ Simmer, covered*, on medium-low heat for 15 minutes, stirring occasionally. *Simmer uncovered if the ingredients are completely submerged in the broth.</Text>
                    <Text style={style.txt6}>➊➑ Once boiling, use a fine-mesh strainer to skim the scum and foam from the surface of the broth.</Text>
                    <Text style={style.txt6}>➊➒ Continue to cook covered until a wooden skewer goes through the carrots and potatoes.</Text>
                    <Text style={style.txt6}>➋⓿ To Add the Curry Roux</Text>
                    <Text style={style.txt6}>➋➊ Turn off the heat. From 1 package of Japanese curry roux, put 1–2 cubes in a ladleful of cooking liquid. Slowly let it dissolve with a spoon or chopsticks and stir into the pot to incorporate. Repeat with the rest of the blocks, 2 cubes at a time. Tip: I use 1 full-sized box of store-bought curry roux, which is typically for 8–12 servings (be careful, as some brands offer a smaller box, which is 4 servings). With my homemade curry roux, I typically use 6–7 cubes for 8 servings (about 80% of the curry roux mixture if it hasn‘t solidified yet).</Text>
                    <Text style={style.txt6}>➋➋ Simmer, uncovered, on medium-low heat, stirring frequently, until the curry becomes thick, about 5–10 minutes. If your curry is too thick, you can add water to thin the sauce. When you stir, make sure that no roux or food is stuck to the bottom of the pot; otherwise, it may burn.</Text>
                    <Text style={style.txt6}>➋➌ If you use my unsalted homemade curry roux, taste the curry now and add salt to your liking. Tip: I recommend adding 2–4 tsp Diamond Crystal kosher salt, but this will vary based on the brand of the chicken broth and condiments you added.</Text>
                    <Text style={style.txt6}>➋➍ To Serve</Text>
                    <Text style={style.txt6}>➋➎ Serve the curry with steamed Japanese short-grain rice on the side. If you like, garnish with fukujinzuke (Japanese red pickled vegetables).</Text>
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

export default Food2Japanese
