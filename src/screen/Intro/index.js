import {
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  View,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {Text_Intro} from '../../components';
import {styles} from '../../styles/introScreen';
import LottieView from 'lottie-react-native';
import {Img1, Img2, Img3, Loading2} from '../../assets';
import Onboarding from 'react-native-onboarding-swiper';
import {Warna_Utama, Warna_Intro2, Warna_Intro3, Warna_Bg} from '../../utils';

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.container_Skip} {...props}>
    <Text style={styles.text_Bottom}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.container_Next} {...props}>
    <Text style={styles.text_Bottom}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.container_Next} {...props}>
    <Text style={styles.text_Bottom}>Done</Text>
  </TouchableOpacity>
);

export class Intro1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arab1: '',
      arab2: '',
      arab3: '',
      translation1: '',
      translation2: '',
      translation3: '',
      loading: false,
      loadingText: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => {
      this.Page1();
      this.Page2();
      this.Page3();
    }, 3000);
  }

  Page1() {
    fetch('https://quran-api-id.vercel.app/random', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({arab1: result.arab});
        this.setState({translation1: result.translation});
        console.log(result.arab);
        console.log(result.translation);
      })
      .catch(error => {
        Alert.alert(
          'Gangguan Koneksi',
          'Periksa koneksi internet Anda dan silahkan coba lagi',
          [
            {
              text: 'ok',
              onPress: () => BackHandler.exitApp(),
            },
          ],
        );
        console.log('error', error);
      })

      .finally(() => this.setState({loading: false}));
  }
  Page2() {
    fetch('https://quran-api-id.vercel.app/random', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({arab2: result.arab});
        this.setState({translation2: result.translation});
        console.log(result.arab);
        console.log(result.translation);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  Page3() {
    fetch('https://quran-api-id.vercel.app/random', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({arab3: result.arab});
        this.setState({translation3: result.translation});
        console.log(result.arab);
        console.log(result.translation);
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return this.state.loading ? (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Warna_Bg,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor={Warna_Bg} />
        <LottieView
          source={Loading2}
          loop={true}
          autoPlay={true}
          style={{width: 250, height: 250}}
        />
      </View>
    ) : (
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        bottomBarColor="transparent"
        onSkip={() => this.props.navigation.replace('home')}
        onDone={() => this.props.navigation.replace('home')}
        pages={[
          {
            backgroundColor: Warna_Utama,
            image: <Image source={Img1} style={styles.image_Intro} />,
            title: <Text_Intro arabic={this.state.arab1} />,
            subtitle: <Text_Intro translate={this.state.translation1} />,
          },
          {
            backgroundColor: Warna_Intro2,
            image: <Image source={Img2} style={styles.image_Intro} />,
            title: <Text_Intro arabic={this.state.arab2} />,
            subtitle: <Text_Intro translate={this.state.translation2} />,
          },
          {
            backgroundColor: Warna_Intro3,
            image: <Image source={Img3} style={styles.image_Intro} />,
            title: <Text_Intro arabic={this.state.arab3} />,
            subtitle: <Text_Intro translate={this.state.translation3} />,
          },
        ]}
      />
    );
  }
}

export default Intro1;
