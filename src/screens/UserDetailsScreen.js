

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getUserDetails } from '../api';

const UserDetailsScreen = ({ route }) => {
  const [userDetails, setUserDetails] = useState(null);
  const { token } = route.params;

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getUserDetails(token);
      setUserDetails(details);
    };
    fetchDetails();
  }, [token]);

  return (
    <View style={styles.container}>
      {userDetails ? (
        <Text>{JSON.stringify(userDetails, null, 2)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default UserDetailsScreen;
