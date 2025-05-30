import { tabbar } from '@/constants/tabBar';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const {inactiveColor,activeColor,size} = tabbar.icon;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <Tabs
          screenOptions={{
            tabBarInactiveTintColor:inactiveColor,
            tabBarActiveTintColor: activeColor,
            headerShown: false,
            tabBarStyle: Platform.select({
              ios: {
                position: 'absolute',
              },
              default: {},
            }),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <MaterialIcons name="home" size={size} color={color} />
            }}
          />

          <Tabs.Screen
            name="expense"
            options={{
              title: 'Expense',
              tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cash-multiple" size={size} color={color} />
            }}
          />

          <Tabs.Screen
            name="deubill"
            options={{
              title: 'Deu Bill',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="receipt-long" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
