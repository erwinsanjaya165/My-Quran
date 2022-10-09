import {Text, View, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import {Header, HeaderSurah} from '../../components';
import {Bordir, Loading} from '../../assets';
import AnimatedLottieView from 'lottie-react-native';
import {styles} from '../../styles/perhalaman';

export default class PerHalaman extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      ayahs: [],
      englishName: '',
      numberInSurah: '',
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    this.setState({number: this.props.route.params.number});
    console.log(this.props.route.params.number);

    fetch(
      `https://api.alquran.cloud/v1/page/${this.props.route.params.number}/quran-uthmani`,
      {
        method: 'GET',
        redirect: 'follow',
      },
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data.ayahs[0].numberInSurah);
        this.setState({ayahs: result.data.ayahs});
        this.setState({englishName: result.data.ayahs[0].surah.englishName});
        this.setState({numberInSurah: result.data.ayahs[0].numberInSurah});
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title1={'Halaman ' + this.state.number} />
        <HeaderSurah
          translation={
            'Di Mulai dari Surah : ' +
            this.state.englishName +
            ' Ayat ' +
            this.state.numberInSurah
          }
        />
        {this.state.loading ? (
          <View style={styles.conterLoading}>
            <AnimatedLottieView
              source={Loading}
              loop={true}
              autoPlay={true}
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
                <Text style={styles.textArab}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
