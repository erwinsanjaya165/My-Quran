import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Bg} from '../utils';

export const styles = StyleSheet.create({
  container_Skip: {
    marginLeft: 20,
  },
  text_Bottom: {
    fontSize: 20,
    fontFamily: 'Amiri-Bold',
    color: Warna_Bg,
  },
  container_Next: {
    marginRight: 20,
  },
  image_Intro: {
    width: wp('67%'),
    height: hp('35%'),
  },
});
