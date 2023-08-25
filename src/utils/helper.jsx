import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKey = 'auth_token';

export const setAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem(tokenKey, token);
  } catch (error) {
    console.error('Error setting authentication token:', error);
  }
};

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem(tokenKey);
    console.log(token);
    return token;
  } catch (error) {
    console.error('Error getting authentication token:', error);
    return null;
  }
};

export const clearAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(tokenKey);
  } catch (error) {
    console.error('Error clearing authentication token:', error);
  }
};
