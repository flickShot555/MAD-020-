import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Orderitem = ({ title, date, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.image} />
      <View style={styles.textSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{12/12/2015}</Text>
      </View>
      <Text style={styles.price}>{540}</Text>
    </View>
  );
};

export default Orderitem;



const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#AAA',
    fontSize: 12,
  },
  price: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
