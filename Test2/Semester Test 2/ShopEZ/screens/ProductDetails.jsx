import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const [added, setAdded] = useState(false);

   const handleAddToCart = () => {
        setAdded(true);
        Alert.alert('Added to Cart', `${product.title} has been added to your cart!`);
   };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <TouchableOpacity
        style={[styles.button, added && { backgroundColor: '#4CAF50' }]}
        onPress={handleAddToCart}>
            <Text style={styles.buttonText}>
               {added ? 'Added!' : 'Add to Cart'}
            </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#FF6F00',
    marginVertical: 5,
  },
  category: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },

  button: {
     backgroundColor: '#FF6F00',
     padding: 12,
     borderRadius: 8,
     width: 150,
     alignItems: 'center',
   },
   buttonText: {
     color: '#fff',
     fontWeight: 'bold',
   },
});
