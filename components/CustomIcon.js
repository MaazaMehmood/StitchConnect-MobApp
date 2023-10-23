import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const CustomIcon = ({ iconName, color}) => {
  return <Ionicons name={iconName} color={color} size={22} />;
};

export {CustomIcon};
