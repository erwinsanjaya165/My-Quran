import {Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Header, HeaderSurah} from '../../components';
import {Bordir, BordirSurah, Loading} from '../../assets';
import AnimatedLottieView from 'lottie-react-native';
import {styles} from '../../styles/persurah';

export default class PerSurah extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      nama: '',
      revelation: '',
      translation: '',
      numberOfAyahs: '',
      text: '',
      artinya: '',
      ayahs: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({number: this.props.route.params.number});
    this.setState({nama: this.props.route.params.nama});
    this.setState({revelation: this.props.route.params.revelation});
    this.setState({translation: this.props.route.params.translation});
    this.setState({numberOfAyahs: this.props.route.params.numberOfAyahs});
    this.setState({text: this.props.route.params.text});
    this.setState({artinya: this.props.route.params.artinya});
    this.setState({loading: true});
    fetch(
      `https://quran-api-id.vercel.app/surahs/${this.props.route.params.number}`,
      {
        method: 'GET',
        redirect: 'follow',
      },
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.ayahs);
        this.setState({ayahs: result.ayahs});
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title1={this.state.number + '.'} title2={this.state.nama} />
        <HeaderSurah
          bordirSurah={BordirSurah}
          revelation={this.state.revelation}
          translation={this.state.translation}
          jumlahAyat={this.state.numberOfAyahs}
          ayat={'Ayat'}
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
          <ScrollView>
            {this.state.ayahs.map((item, index) => (
              <View key={index} style={styles.conterDataAyat}>
                <Text style={styles.textArab}>{item.arab}</Text>
                <View>
                  <View style={styles.conterBordir}>
                    <Image source={Bordir} style={styles.bordir} />
                    <Text style={styles.number}>{item.number.inSurah}</Text>
                  </View>
                  <Text style={styles.textArti}>{item.translation}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
