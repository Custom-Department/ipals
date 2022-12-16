import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HorizontalDividerComp from '../../components/HorizontalDividerComp/HorizontalDividerComp';
import {TextComp} from '../../components/TextComponent';
import {colorTutor_} from '../../config/color';
const OurStory = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
       <OnboardBackHeadeerComponent
           headingtext={'OUR STORY'}
           threedots={true}
           />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topImage}>
          <Image
            style={styles.image1}
            resizeMode="contain"
            source={require('../../image/image1.png')}
          />
        </View>
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content1}
          text={`GENUINELY AND KINDLY DEDICATED, EVERY YOUNG STUDENT VOLUNTEERS TO BE A “LEARNING BUDDY” WITH THE GOAL OF HELPING CHILDREN OF ALL BACKGROUNDS TO THRIVE IN EVERY WAY THROUGH A FRIENDLY VIRTUAL ENVIRONMENT`}
        />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content2}
          text={`i-Pals began as a collective idea to create a hub of “Learning Buddies” among school age JK-grade 12 around the world. Our young co-founders, Kate and Jake Cheung, have always had a special spot in the hearts for helping others thrive. They strongly believe that everyone ought to be inspired and deserve the chance to shine through their interests and passions as they experience the journey of discoveries.`}
        />
        <View style={styles.topImage}>
          <Image
            style={styles.image2}
            resizeMode="contain"
            source={require('../../image/image2.png')}
          />
        </View>
        <View style={styles.topImage}>
          <Image
            style={styles.image2}
            resizeMode="contain"
            source={require('../../image/image3.png')}
          />
        </View>
        <HorizontalDividerComp
          style={{marginLeft: wp('8'), marginTop: hp('2')}}
          width={'84'}
        />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content1}
          text={`i-Pals.com was established in the community of Toronto, Canada, to promote the core value of “Learn, Connect & Experience” for our future generations`}
        />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content2}
          text={`How It Started: At the age of 8, Kate had already volunteered as a Reading Buddy to kindergarten children in her spare time. She has always loved developing a fun big sister relationship with younger children. She has done little science experiments with them such as making bouncy eggs, play dough, bouncy balls, resin and clay jewelry, building a swing off a tree from construction wastes.

By learning in a trusted and friendly environment, Kate and the children have naturally bonded and developed a genuine friendship.
          
Where We’re At: In 2022, Kate, now 13, became a “Learning Buddy” to students in senior kindergarten & grade 2. The parents of both sets of children arranged the weekly video call times and dates after school according to their availability. The focus of each lesson varied from school subject like Math, Languages, Science to extracurricular activities such as making artwork, creative writing, little fun experiments, piano playing, storytelling, public speaking, simple cooking or even basic household chores.
          
“i-Pals” represents the concept of “international pals”: Friends! We hope children of all ages across all cities and countries could receive one-of-a-kind inspiration and support from others to continue to thrive and succeed in their future endeavors. We are blessed to have support of a great community of terrific children, their wonderful parents and inspiring educators.
          
Where It’s Going: We hope to nurture a practice of giving at a very young age so that the value of helping others would be embraced and naturally passed on from young generations to generations. Collectively, young children would spread love and hope to others and be bonded over this friendship experience.`}
        />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content1}
          text={`Our very first set of learners were two sisters from New York city: Mahar in junior kindergarten and Niki in grade 2.`}
        />
        <HorizontalDividerComp style={{marginLeft: wp('8')}} width={'84'} />
        <TextComp
          color={colorTutor_.ipalforgetTxtColor}
          style={styles.content2}
          text={`Mahar and Niki’s family was previously living in Toronto during Pandemic time. When their parents decided to move to New York City in 2021, attending a new school, meeting new teachers, new classmates, learning new academic curriculum, back to in-class schooling, in the end it created another form of challenges to the young children. The good news is that they have learned to adapt well at such a young age, continue to navigate and thrive .

Kate, as a “Learning Buddy”, is learning how to effectively communicate ideas (illustrate) to the little ones, to build on their strengths and positively inspire them to shine and take pride in their accomplishments.
          
Through the trusted and genuine “Journey of Learning” together as young tutors and tutees, it creates this amazing “Learning Buddy” relationship which connects children of all ages with all backgrounds across the Seas and Oceans. In the end, we hope to build on the “Experience of Kindness” to create positive impacts that will transform the lives of many little ones like Mahar and Niki.
          
At i-Pals, every child or teen is encouraged to be a reciprocal learner, ie being honored as a tutor to help others and privileged as a tutee to learn from others. Through this genuine “Journey of Learning”, we hope to build on the “Experience of Kindness” to create positive impacts that will transform the lives of many youngsters like Mahar, Niki and Kate.`}
        />
      </ScrollView>
    </>
  );
};

export default OurStory;

const styles = StyleSheet.create({
  container: {flex: 1},
  topImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1.5'),
  },
  image1: {width: wp('85'), height: hp('50')},
  image2: {width: wp('89'), height: hp('55')},
  content1: {
    fontWeight: 'bold',
    fontSize: hp('2.2'),
    width: wp('84'),
    marginTop: hp('1'),
    alignSelf: 'center',
    lineHeight: hp('3.1'),
    marginBottom: hp('1.5'),
  },
  content2: {
    fontSize: hp('1.5'),
    width: wp('84'),
    marginTop: hp('1'),
    alignSelf: 'center',
    lineHeight: hp('2'),
    marginBottom: hp('2'),
  },
});
