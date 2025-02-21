import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileSection = ({ theme }) => {
  return (
    <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
      <Image
        source={require('./profile.jpg')} // Replace with your image path
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Text style={[styles.name, { color: theme.colors.text }]}>Van Daniel S. Naldoza</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>Programmer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Inter_900Black',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default ProfileSection;