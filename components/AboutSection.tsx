import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutSection = ({ theme }) => {
  return (
    <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>About Me</Text>
      <Text style={[styles.sectionText, { color: theme.colors.text }]}>
        Hello! I am a 3rd-year computer science student who is passionate and continuously honing my skills in the
        field of programming.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter_900Black',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default AboutSection;