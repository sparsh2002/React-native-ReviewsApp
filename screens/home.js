import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Cards from "../shared/card";
import { globalStyles } from "../styles/global";
import ReviewForm from "./reviewForm";
//import Modal from 'react-native-modal';
export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };

  const addReview = (review) =>{
      review.key = Math.random().toString()
      setReviews((currentReviews)=>{
          return [review, ...currentReviews]
      });
      setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
       
      <Modal visible={modalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons name="close" style={{...styles.modalToggle, ...styles.modalClose}} size={28} onPress={() => setModalOpen(false)} />
          <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      <MaterialIcons name="add" style={styles.modalToggle} size ={28} onPress={() => setModalOpen(true)} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Cards>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Cards>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
      marginTop:20,
      marginBottom:0
  },
  modalContent:{
      flex:1,
  }
});
