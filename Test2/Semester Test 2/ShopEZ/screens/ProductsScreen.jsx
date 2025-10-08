import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);   
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
        selectedCategory === 'all'
          ? 'https://fakestoreapi.com/products'
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    

    const fetchCategories = async () => {
       try {
         const response = await fetch('https://fakestoreapi.com/products/categories');
         const data = await response.json();
         setCategories(['all', ...data]);
       } catch (err) {
         console.error(err);
       }
     };

    fetchCategories();
    fetchProducts();

  }, []);

  const handleCategorySelect = (category) => {
   setSelectedCategory(category);
   fetchProducts(category);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF6F00" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  

  return (
    <View>
    <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       style={styles.categoryBar}
     >
       {categories.map((cat) => (
         <TouchableOpacity
           key={cat}
           style={[
             styles.categoryButton,
             selectedCategory === cat && styles.categorySelected,
           ]}
           onPress={() => handleCategorySelect(cat)}
         >
           <Text
             style={[
               styles.categoryText,
               selectedCategory === cat && styles.categoryTextSelected,
             ]}
           >
             {cat.toUpperCase()}
           </Text>
         </TouchableOpacity>
       ))}
     </ScrollView>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
            >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  details: {
    marginLeft: 10,
    flexShrink: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    color: '#FF6F00',
    marginTop: 5,
  },

  categoryBar: {
    flexGrow: 0,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categorySelected: {
    backgroundColor: '#FF6F00',
  },
  categoryText: {
    color: '#333',
  },
  categoryTextSelected: {
    color: '#fff',
  },

});
