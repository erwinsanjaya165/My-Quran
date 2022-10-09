import {
  DrawerLayoutAndroid,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {DaftarSurah, HeaderDrawer} from '../../components';
import {Bordir, Foto, Loading} from '../../assets';
import {Warna_Hitam, Warna_Abu} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedLottieView from 'lottie-react-native';
import {styles} from '../../styles/listData';

const Halaman = ({navigation}) => {
  const drawer = useRef(null);
  const [ayahs, setayahs] = useState([]);
  const [manzil, setManzil] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.alquran.cloud/v1/quran/quran-uthmani', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.data.surahs[2].ayahs[0].manzil);
        setayahs(result.data.surahs[2].ayahs);
        setManzil(result.data.surahs[2].ayahs[0].manzil);
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setLoading(true);
      fetch('https://api.alquran.cloud/v1/quran/quran-uthmani', {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.data.surahs[2].ayahs[0].manzil);
          setayahs(result.data.surahs[2].ayahs);
          setManzil(result.data.surahs[2].ayahs[0].manzil);
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    });
    return focusHandler;
  }, [navigation]);

  const tanyaLogout = () => {
    Alert.alert('Exit App!', 'Apakah anda yakin ingin keluar aplikasi?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
  };

  const navigationView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.conterProfile}>
          <Image source={Foto} style={styles.img} />
          <View style={styles.conterTextProfile}>
            <Text style={styles.textTitleName}>Erwin Sanjaya</Text>
            <Text style={styles.textMyApp}>MyQuran</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.conterMenu}
          onPress={() => navigation.navigate('home')}>
          <Icon name="home-outline" size={25} color={Warna_Abu} />
          <Text style={styles.textSurah}>Surah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.conterMenu}
          onPress={() => navigation.navigate('juz')}>
          <Icon name="book-outline" size={25} color={Warna_Abu} />
          <Text style={styles.textSurah}>Juz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.conterMenu}
          onPress={() => navigation.navigate('halaman')}>
          <Icon name="bookmark-outline" size={25} color={Warna_Abu} />
          <Text style={styles.textSurah}>Halaman</Text>
        </TouchableOpacity>
        <View style={styles.garis1}></View>
        <View style={styles.garis2}></View>
        <TouchableOpacity
          style={styles.conterLogout}
          onPress={() => tanyaLogout()}>
          <Icon name="logout" size={27} color={Warna_Hitam} />
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return loading ? (
    <View style={styles.conterLoading}>
      <AnimatedLottieView
        source={Loading}
        loop={true}
        autoPlay={true}
        style={styles.loading}
      />
    </View>
  ) : (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={275}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <HeaderDrawer
          onPress={() => drawer.current.openDrawer()}
          icon={'menu'}
          title={'Halaman Quran'}
        />
        <View style={styles.conterData}>
          <ScrollView>
            {ayahs.map((item, index) => (
              <DaftarSurah
                key={index}
                bordir={Bordir}
                number={item.numberInSurah}
                nama={'Halaman ' + item.numberInSurah}
                name={'صَفْحَةٌ'}
                onPress={() =>
                  navigation.navigate('perhalaman', {
                    number: item.numberInSurah,
                  })
                }
              />
            ))}
            {ayahs.map((item, index) => (
              <DaftarSurah
                key={index}
                bordir={Bordir}
                number={item.numberInSurah + 200}
                nama={'Halaman ' + parseInt(item.numberInSurah + 200)}
                name={'صَفْحَةٌ'}
                onPress={() =>
                  navigation.navigate('perhalaman', {
                    number: item.numberInSurah + 200,
                  })
                }
              />
            ))}
            {ayahs.map((item, index) => (
              <DaftarSurah
                key={index}
                bordir={Bordir}
                number={item.numberInSurah + 400}
                nama={'Halaman ' + parseInt(item.numberInSurah + 400)}
                name={'صَفْحَةٌ'}
                onPress={() =>
                  navigation.navigate('perhalaman', {
                    number: item.numberInSurah + 400,
                  })
                }
              />
            ))}
            <DaftarSurah
              bordir={Bordir}
              number={manzil + 600}
              nama={'Halaman ' + parseInt(manzil + 600)}
              name={'صَفْحَةٌ'}
              onPress={() =>
                navigation.navigate('perhalaman', {
                  number: manzil + 600,
                })
              }
            />
            <DaftarSurah
              bordir={Bordir}
              number={manzil + 601}
              nama={'Halaman ' + parseInt(manzil + 601)}
              name={'صَفْحَةٌ'}
              onPress={() =>
                navigation.navigate('perhalaman', {
                  number: manzil + 601,
                })
              }
            />
            <DaftarSurah
              bordir={Bordir}
              number={manzil + 602}
              nama={'Halaman ' + parseInt(manzil + 602)}
              name={'صَفْحَةٌ'}
              onPress={() =>
                navigation.navigate('perhalaman', {
                  number: manzil + 602,
                })
              }
            />
            <DaftarSurah
              bordir={Bordir}
              number={manzil + 603}
              nama={'Halaman ' + parseInt(manzil + 603)}
              name={'صَفْحَةٌ'}
              onPress={() =>
                navigation.navigate('perhalaman', {
                  number: manzil + 603,
                })
              }
            />
          </ScrollView>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Halaman;
