import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity, FlatList } from 'react-native';
import { lightTheme, darkTheme } from './themes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const projects = [
    {
      id: '1',
      title: 'Project 1: Todo App',
      description: 'A simple todo app built with React Native.',
      link: 'https://github.com/yourusername/todo-app',
    },
    {
      id: '2',
      title: 'Project 2: Hotel Management System',
      description: 'A hotel management system made for DLSL using C++',
      link: 'https://github.com/yourusername/weather-app',
    },
    {
      id: '3',
      title: 'Project 3: Inventory Management and Reservation Website',
      description: 'An inventory management and reservation website made for admins and students of DLSL built by React',
      link: 'https://github.com/yourusername/ecommerce-app',
    },
  ];

  const renderProjectItem = ({ item }) => (
    <View style={[styles.projectItem, { backgroundColor: theme.colors.sectionBackground }]}>
      <Text style={[styles.projectTitle, { color: theme.colors.text }]}>{item.title}</Text>
      <Text style={[styles.projectDescription, { color: theme.colors.text }]}>{item.description}</Text>
      <Text
        style={[styles.projectLink, { color: theme.colors.primary }]}
        onPress={() => Linking.openURL(item.link)}
      >
        View on GitHub
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity
          style={styles.themeToggle}
          onPress={() => setIsDarkMode(!isDarkMode)}
        >
          <MaterialCommunityIcons
            name={isDarkMode ? 'weather-sunny' : 'weather-night'} // Icon changes based on theme
            size={30}
            color={theme.colors.primary}
          />
        </TouchableOpacity>

        {/* Profile Picture */}
        <Image
          source={require('./profile.jpg')} // Replace with your image path
          style={styles.profileImage}
          resizeMode="cover"
        />

        {/* Name Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.name, { color: theme.colors.text }]}>Van Daniel S. Naldoza</Text>
          <Text style={[styles.title, { color: theme.colors.text }]}>Programmer</Text>
        </View>

        {/* About Me Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>About Me</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>
            Hello! I am a 3rd-year computer science student who is passionate and continuously honing my skills in the
            field of programming.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Skills</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>
            - C++, Python, JS, React, React Native.
          </Text>
        </View>

        {/* Projects Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Projects</Text>
          <FlatList
            data={projects}
            renderItem={renderProjectItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disable scrolling inside FlatList (since it's inside a ScrollView)
          />
        </View>

        {/* Contact Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Contact</Text>
          <Text
            style={[styles.sectionText, { color: theme.colors.text }]}
            onPress={() => Linking.openURL('mailto:naldozavan1@gmail.com')}
          >
            Email: naldozavan1@gmail.com
          </Text>
          <Text
            style={[styles.sectionText, { color: theme.colors.text }]}
            onPress={() => Linking.openURL('https://facebook.com/yourprofile')}
          >
            Facebook: Van Daniel Naldoza
          </Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>
            Phone No. 09770496433
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const CustomButton = ({ title, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  themeToggle: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1, 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
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
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter_900Black',
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  projectLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});