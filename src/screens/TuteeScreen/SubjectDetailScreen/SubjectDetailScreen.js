import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextComp} from '../../../components/TextComponent';
import {styles} from './style';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';
import {CircleImageComp} from '../../../components/CircleImageComp/CircleImageComp';
const SubjectDetailScreen = ({route}) => {
  const items = route.params;
  return (
    <View style={styles.container}>
      <BackHeaderComponent
        backgroundColor={'Tutor'}
        data={true}
        name3={'settings'}
        name2={'search'}
        name1={'bell-fill'}
        bellOnPress={() => console.log('bell')}
        settingOnPress={() => console.log('hello')}
      />
      <View style={styles.profileView}>
        <View style={styles.circleImageView}>
          <CircleImageComp image={items.image} styles={styles.image} />
          <View>
            <TextComp text={items.firstText} />
          </View>
        </View>
      </View>
      <TextComp text={'SubjectDetailScreen'} />
    </View>
  );
};

export default SubjectDetailScreen;
