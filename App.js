/**
 * Jules React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
// Gesture handler and reanimated should be imported at the top
import 'react-native-gesture-handler'; // If you use gesture handler for navigation or other components
// import 'react-native-reanimated'; // If you use reanimated for animations

// Optional: Import any global state providers (like Redux, Context API) here
// import { Provider } from 'react-redux';
// import store from './src/redux/store';

const App = () => {
  // If using a global state provider, wrap AppNavigator with it
  // return (
  //   <Provider store={store}>
  //     <AppNavigator />
  //   </Provider>
  // );

  return <AppNavigator />;
};

export default App;
