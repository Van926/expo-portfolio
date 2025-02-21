import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillsSection = ({ theme }) => {
  return (
    <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Skills</Text>
      <Text style={[styles.sectionText, { color: theme.colors.text }]}>
        - C++, Python, JS, React, React Native.
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

export default SkillsSection;