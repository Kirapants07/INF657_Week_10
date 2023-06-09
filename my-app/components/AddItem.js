import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';

export default function AddItem({callback}) {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [quantity,setQuantity] = useState('');
    const [id, setid] = useState(1);

    // adds new item
    const handleSubmit = () => {
      // if we have all required fields
      if(title && description && price && quantity) {
        const item = {
          id,
          title,
          description,
          price: parseInt(price),
          quantity: parseInt(quantity),
        };
        callback(item); //send item to items useState in ShoppingList
        console.log(item);
        
        //reset fields
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setid(id+1); //increment id to make sure they are unique
      }
      else {
        alert("Missing required field(s)");
      }
    };

  return (
    <SafeAreaView style={styles.screen}> 
        <View style={styles.viewContainer}>
            <Text>
                <CustomInput placeholder="New Item" value={title} setValue={setTitle} />
                <CustomInput placeholder="Description" value={description} setValue={setDescription} />        
                <CustomInput placeholder="Price $" value={price} setValue={setPrice} />            
                <CustomInput placeholder="Quantity" value={quantity} setValue={setQuantity} />
            </Text>
        </View>
        <CustomButton text="Add Item" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    padding: 50,
    backgroundColor: "#f5f5f5",
  },
});