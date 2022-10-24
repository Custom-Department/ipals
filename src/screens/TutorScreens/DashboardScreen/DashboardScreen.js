import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { globalStyles } from '../../../config/globalStyles'
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent'

const DashboardScreen = () => {
  return (
    <>
      <HeaderComponent />
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => console.log('dont have you acc')}>
            <Text style={globalStyles.globalModuletutor}>Term of use</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('dont have you acc')} >
            <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  )
}

export default DashboardScreen

