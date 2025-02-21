import React from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';

const ProjectsSection = ({ theme }) => {
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
    </View>
  );

  return (
    <View style={[styles.section, { backgroundColor: theme.colors.sectionBackground }]}>
      <Text style={[styles.projectTitle, { color: theme.colors.text }]}>Projects</Text>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
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

export default ProjectsSection;