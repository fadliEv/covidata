// navigation/AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AddDataScreen from '../screens/AddDataScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Covidata - Data Warga' ,headerShown : false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detail Data' }}
        />
        <Stack.Screen
          name="AddData"
          component={AddDataScreen}
          options={{ title: 'Tambah Data' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
