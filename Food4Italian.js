import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food4Italian = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Tiramisu</Text>
                <Text style={style.txt2}>Italian Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>Under 60</Text>
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
                        <Text style ={style.txt3}>8 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 36 chocolate sandwich cookies, crushed</Text>
                    <Text style={style.txt6}>○ 1 envelope unflavored gelatin</Text>
                    <Text style={style.txt6}>○ 3 tablespoons espresso, brewed, cold</Text>
                    <Text style={style.txt6}>○ 1 tablespoon rum, cold</Text>
                    <Text style={style.txt6}>○ ⅓ cup water(80 mL), boiling</Text> 
                    <Text style={style.txt6}>○ 1 cup sugar(200 g)</Text>
                    <Text style={style.txt6}>○ ⅔ cup dark chocolate powder(80 g)</Text>
                    <Text style={style.txt6}>○ 2 cups heavy cream(480 mL), cold</Text> 
                    <Text style={style.txt6}>○ 2 teaspoons vanilla extract</Text> 
                    <Text style={style.txt6}>○ 8 oz whipping cream(225 mL)</Text>
                    <Text style={style.txt6}>○ 8 oz mascarpone cheese(225 g)</Text> 
                    <Text style={style.txt6}>○ 4 tablespoons powdered sugar</Text>                                                                   
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Crush cookies in a bag and set aside.</Text>
                    <Text style={style.txt6}>➋ Mix cold espresso and rum in a small bowl. Mix in gelatin and let stand for 2 minutes.</Text>
                    <Text style={style.txt6}>➌ Add boiling water and stir until gelatin is completely dissolved.</Text>
                    <Text style={style.txt6}>➍ Mix sugar and cocoa in large bowl.</Text>
                    <Text style={style.txt6}>➎ Add whipping cream and vanilla. With an electric mixer, beat on medium speed until stiff.</Text>
                    <Text style={style.txt6}>➏ Pour in gelatin mixture and beat until well-blended.</Text>
                    <Text style={style.txt6}>➐ Add ½-inch (1.5 cm) layers of crushed cookies to dessert dishes, then scoop mousse into dishes and refrigerate for at least 30 minutes.</Text>
                    <Text style={style.txt6}>➑ While mousse is chilling, whip cream in a cold bowl until soft peaks form. Add mascarpone and powdered sugar and continue whipping until stiff peaks form.</Text>
                    <Text style={style.txt6}>➒ Scoop a dollop of whipped cream on top of the mousse and sprinkle with extra cocoa powder.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
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

export default Food4Italian