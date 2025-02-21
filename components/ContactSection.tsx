import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ContactSection = ({ theme }) => {
  return (
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

export default ContactSection;