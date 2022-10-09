import {Text, View, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import {Header, HeaderSurah} from '../../components';
import {styles} from '../../styles/perjuz';
import {Bordir, Loading} from '../../assets';
import AnimatedLottieView from 'lottie-react-native';

export default class PerJuz extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      ayahs: [],
      juzStartInfo: '',
      juzEndInfo: '',
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    this.setState({number: this.props.route.params.number});
    console.log(this.props.route.params);
    fetch(
      `https://api.alquran.cloud/v1/juz/${this.props.route.params.number}/quran-uthmani`,
      {
        method: 'GET',
        redirect: 'follow',
      },
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data.ayahs);
        this.setState({ayahs: result.data.ayahs});
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));

    // API KEDUA
    fetch(
      `https://api.quran.gading.dev/juz/${this.props.route.params.number}`,
      {
        method: 'GET',
        redirect: 'follow',
      },
    )
      .then(response => response.json())
      .then(result => {
        // console.log(result.data);
        this.setState({juzStartInfo: result.data.juzStartInfo});
        this.setState({juzEndInfo: result.data.juzEndInfo});
      })
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title1={'Juz'} title2={this.state.number} />
        <HeaderSurah
          translation={
            this.state.juzStartInfo + '  S/d  ' + this.state.juzEndInfo
          }
        />
        {this.state.loading ? (
          <View style={styles.conterLoading}>
            <AnimatedLottieView
              source={Loading}
              autoPlay={true}
              loop={true}
              style={styles.loading}
            />
          </View>
        ) : (
          <ScrollView style={styles.conterDataAyat}>
            {this.state.ayahs.map((item, index) => (
              <View key={index}>
                <View style={styles.conterBordir}>
                  <Image source={Bordir} style={styles.bordir} />
                  <Text style={styles.number}>{item.numberInSurah}</Text>
                </View>
                <Text style={styles.textArabic}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
