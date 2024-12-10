import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Orderitem from '../components/OrderItem';  // Correct path


export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Card */}
      <View style={styles.card}> 
        <View style={styles.profileSection}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
          <Text style={styles.profileName}>Abbas Khan</Text>
          <MaterialIcons name="edit" size={20} color="black" style={styles.editIcon} />
        </View>
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <MaterialIcons name="inventory" size={20} color="#F5A623" />
            <Text style={styles.statText}>14,850 Product Sells</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="attach-money" size={20} color="#F5A623" />
            <Text style={styles.statText}>30bil+ Earning</Text>
          </View>
        </View>
      </View>

      {/* Recent Orders Section */}
      <View style={styles.recentOrdersHeader}>
        <Text style={styles.recentOrdersTitle}>Recent Orders</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      {/* Order List */}
      <Orderitem title="Beef Burger, Ice Cream, Berries" date="21, Thu 10:00" price="$38.15" />
      <Orderitem title="Beef Burger, Pepperoni Moo, Cheese Bust" date="15, Fri 18:00" price="$38.15" />
      <Orderitem title="Beef Burger, Ketchup, French Fries" date="1, Mon 10:00" price="$30.50" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F2E9', // Beige background
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editIcon: {
    position: 'absolute',
    right: 0,
  },
  statsSection: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 8,
  },
  recentOrdersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  recentOrdersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#F5A623', // Gold color
  },
});
