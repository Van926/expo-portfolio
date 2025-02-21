import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeToggle = ({ isDarkMode, toggleTheme, theme }) => {
  return (
    <TouchableOpacity
      style={styles.themeToggle}
      onPress={toggleTheme}
    >
      <MaterialCommunityIcons
        name={isDarkMode ? 'weather-sunny' : 'weather-night'}
        size={30}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeToggle: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
});

export default ThemeToggle;