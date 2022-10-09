import {StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {DaftarSurah} from '../../components';
import {Bordir, Loading} from '../../assets';
import {Warna_Bg} from '../../utils';
import AnimatedLottieView from 'lottie-react-native';

export default class Murottal extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    fetch('https://quran-api-id.vercel.app/surahs', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({data: result});
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));
  }
  render() {
    return (
      <View style={styles.container}>
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
          <ScrollView style={styles.conterData}>
            {this.state.data.map((item, index) => (
              <DaftarSurah
                key={index}
                bordir={Bordir}
                number={item.number}
                nama={item.name}
                revelation={item.revelation + ' -'}
                numberOfAyahs={item.numberOfAyahs + ' Ayat'}
                name={'سُورَةُ'}
                onPress={() =>
                  this.props.navigation.navigate('permurottal', {
                    number: item.number,
                    name: item.name,
                  })
                }
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Bg,
    paddingBottom: 50,
  },
  conterLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: 150,
    height: 150,
  },
  conterData: {
    paddingHorizontal: 5,
    paddingBottom: 50,
    paddingTop: 5,
  },
});
