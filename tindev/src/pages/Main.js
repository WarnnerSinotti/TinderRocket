import React, {useEffect, useState} from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import api from "../services/api";

import logo from "../assets/logo.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

export default function Main( navigation ) {
  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: id,
        },
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: id },
    });
    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

return (
  <SafeAreaView style={styles.container}> 
    <Image style={styles.logo} source={logo} />

    <View style={styles.cardsContainer}>
 { users.map((user, index) => (
    <View key={user.id} style={[styles.card, { zIndex: user.length - index}]}>
    <Image style={styles.avatar} source={{ uri: user.avatar}}></Image>
    <View style={styles.footer}>
    <Text style={styles.name}> {user.name} </Text>
    <Text style={styles.bio} numberOfLines={3}> {user.bio} </Text>
    </View>
    </View>
 ))}

    </View>
    
    <View style={styles.buttonsContainer}>
    <TouchableOpacity style={styles.button}>
      <Image source={like}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={dislike}></Image>
      </TouchableOpacity>


    </View>
    </SafeAreaView>

);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo:{
    marginTop: 50,
  },

  cardsContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    maxHeight: 500,
    
  },

  card: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    margin: 30,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },

  avatar: {
    flex: 1,
    height: 300,
  },

  footer:{
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  bio:{
    fontSize: 14,
    color: "#999",
    marginTop: 5,
    lineHeight: 18,
  },

  buttonsContainer:{
    flexDirection: "row",
    marginTop: 10,
  },

  button:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
    elevation: 2, //android button ficar cinza
    shadowColor: "#000",  //iphone ficar com buttons cinza
    shadowOpacity: 0.05,  //iphone ficar com buttons cinza
    textShadowRadius: 2,  //iphone ficar com buttons cinza
    shadowOffset: {       //iphone ficar com buttons cinza
      width: 0,           //iphone ficar com buttons cinza
      height: 2,          //iphone ficar com buttons cinza
    }

  },
});
