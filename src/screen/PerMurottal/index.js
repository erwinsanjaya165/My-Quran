import {ActivityIndicator, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Warna_Utama} from '../../utils';
import {Quran} from '../../assets';
import {Controls} from '../../components';
import Sound from 'react-native-sound';
import {styles} from '../../styles/permurottal';

const PerMurottal = ({route, navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [pause, setPause] = useState(false);
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNumber(route.params.number);
    setName(route.params.name);
    console.log(route.params);
    const focusHandler = navigation.addListener('focus', () => {
      let summer = new Sound(
        `mrt${route.params.number}`,
        Sound.MAIN_BUNDLE,
        err => {
          if (err) {
            console.log('error', err);
            return;
          }
          summer.play(success => {
            console.log('berhasil', success);
          });
        },
      );
      console.log('summer', summer);
      setMusic(summer);
    });
    return focusHandler;
  }, [navigation]);

  const togglePlayPauseBtn = () => {
    setPause(!pause);
    {
      !pause ? music.pause() : music.play();
    }
  };

  const playNextSong = () => {
    music.pause();
    if (number === 114) {
      console.log('Murottal habis');
    } else {
      setLoading(true);
      setNumber(number + 1);
      let summer = new Sound(`mrt${number + 1}`, Sound.MAIN_BUNDLE, err => {
        if (err) {
          console.log('error', err);
          return;
        }
        summer.play(success => {
          console.log('berhasil', success);
        });
      });
      console.log('summer', summer);
      setMusic(summer);
      fetch('https://quran-api-id.vercel.app/surahs', {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          console.log(result[number].name);
          setName(result[number].name);
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };

  const playPrevSong = () => {
    music.pause();
    if (number === 1) {
      console.log('Murottal di mulai dari 1');
    } else {
      setLoading(true);
      setNumber(number - 1);
      let summer = new Sound(`mrt${number - 1}`, Sound.MAIN_BUNDLE, err => {
        if (err) {
          console.log('error', err);
          return;
        }
        summer.play(success => {
          console.log('berhasil', success);
        });
      });
      console.log('summer', summer);
      setMusic(summer);
      fetch('https://quran-api-id.vercel.app/surahs', {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          console.log(result[number - 2].name);
          setName(result[number - 2].name);
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.conterTitleAndImg}>
        {loading ? (
          <View style={styles.conterTitle}>
            <ActivityIndicator size="large" color={Warna_Utama} />
          </View>
        ) : (
          <View style={styles.conterTitle}>
            <Text style={styles.textTitle}>{number + '. '}</Text>
            <Text style={styles.textTitle}>{name}</Text>
          </View>
        )}
        <View style={styles.conterGambar}>
          <Image source={Quran} style={styles.gambar} resizeMode="cover" />
        </View>
        <Controls
          {...{togglePlayPauseBtn}}
          {...{pause}}
          {...{playNextSong}}
          {...{playPrevSong}}
        />
        <View style={styles.garis}></View>
      </View>
    </View>
  );
};

export default PerMurottal;
