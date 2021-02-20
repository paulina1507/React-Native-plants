import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack";
import { FrontAwesome5, FrontAwesome } from "@expo/vector-icons";

function homeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/logo.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
           Plantas
        </Text>
        <TouchableOpacity style={styles.boton1} onPress={() => {
          navigation.navigate("Plantas")
        }}>
          <Text style={{color:"#FFF"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function indiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/indice.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
           Menú
        </Text>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#FFF"}}>
            "Home"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Tipos")
        }}>
          <Text style={{color:"#0111A3"}}>
            "Tipos"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Partes")
        }}>
          <Text style={{color:"#FFF"}}>
            "Partes"
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function secondScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/p.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
          Las plantas son los seres vivos miembros del reino vegetal o phylum plantae.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Partes")
        }}>
          <Text style={{color:"#0111A3"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#FFF"}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function thirdScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/ti.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
          En general, es posible diferenciar las plantas en dos grandes grupos: 1) las algas verdes y 2) las plantas terrestres.
        </Text>

        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Partes")
        }}>
          <Text style={{color:"#FFF"}}>
          Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#0111A3"}}>
            Anterior
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function fourthScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/partes.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
        Dependiendo del tipo de planta, ésta puede tener unas u otras estructuras. Pero a grandes rasgos, las plantas se componen de: raíz, tallo, hojas, flores, semillas y frutos.
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#0111A3"}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Home" component={homeScreen}></Main.Screen>
        <Main.Screen name="Indice" component={indiceScreen}></Main.Screen>
        <Main.Screen name="Plantas" component={secondScreen}></Main.Screen>
        <Main.Screen name="Tipos" component={thirdScreen}></Main.Screen>
        <Main.Screen name="Partes" component={fourthScreen}></Main.Screen>
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23BAC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: "60%",
    height: undefined,
    flex: 1
  },
  titulo:{
    fontSize: 40,
    color: "#ECECEC",
    fontWeight: "bold",
    marginBottom:20
  },
  boton1:{
    backgroundColor: "#FFCC00",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10
  },
  boton2:{
    backgroundColor: "#FFCC00",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10
  },
  boton3:{
    backgroundColor: "#E69DFB",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10
  }
});