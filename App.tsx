import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme } from './themes';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Custom Button */}
        <CustomButton
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={() => setIsDarkMode(!isDarkMode)}
          backgroundColor={theme.colors.primary}
          textColor={theme.colors.text}
        />

        {/* Profile Picture */}
        <Image
          source={require("./profile.jpg")} // Replace with your image URL
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
            Hello! I am 3rd year computer science student who is passionate and continously honing my skills in the
            field of programming
          </Text>
        </View>

        {/* Skills Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Skills</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>
            - C++, Python, JS, React, Native React.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Contact</Text>
          <Text
           style={[styles.sectionText, { color: theme.colors.text }]}
            onPress={() => Linking.openURL('mailto:johndoe@example.com')}
          >
            Email: naldozavan1@gmail.com
          </Text>
          <Text
           style={[styles.sectionText, { color: theme.colors.text }]}
            onPress={() => Linking.openURL('https://linkedin.com/in/johndoe')}
          >
            Facebook: Van Daniel Naldoza
          </Text>
          <Text
           style={[styles.sectionText, { color: theme.colors.text }]}
          >
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
    textAlign: 'center'
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify'
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
});