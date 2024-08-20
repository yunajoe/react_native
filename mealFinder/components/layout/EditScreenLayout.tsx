import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from '@/styles/layout/edit_layout';

type EditScreenLayoutProps = {
  children: React.ReactNode;
};

function EditScreenLayout({children}: EditScreenLayoutProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default EditScreenLayout;
