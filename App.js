import { DataProvider } from './src/contexts/DataContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <DataProvider>
      <AppNavigator/>     
    </DataProvider>
  );
}

