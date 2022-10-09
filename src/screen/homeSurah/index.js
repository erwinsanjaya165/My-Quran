import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  DrawerLayoutAndroid,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Bordir, Loading, Foto} from '../../assets';
import {DaftarSurah, HeaderDrawer} from '../../components';
import {Warna_Hitam, Warna_Utama, Warna_Abu} from '../../utils';
import AnimatedLottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../styles/listData';

const HomeSurah = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const drawer = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://quran-api-id.vercel.app/surahs', {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result);
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setLoading(true);
      fetch('https://quran-api-id.vercel.app/surahs', {
        method: 'GET',
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setData(result);
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    });
    return focusHandler;
  }, [navigation]);

  const tanyaLogout = () => {
    Alert.alert('Exit App !', 'Apakah anda yakin ingin keluar aplikasi?', [
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
          onPress={() => drawer.current.closeDrawer()}>
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
        autoPlay={true}
        loop={true}
        style={styles.loading}
      />
    </View>
  ) : (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={275}
      renderNavigationView={navigationView}>
      <View style={styles.containerHome}>
        <StatusBar barStyle="light-content" backgroundColor={Warna_Utama} />
        <HeaderDrawer
          onPress={() => drawer.current.openDrawer()}
          icon={'menu'}
          title={'Surah-Surah Quran'}
        />
        <View style={styles.conterData}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <DaftarSurah
                  key={index}
                  bordir={Bordir}
                  number={item.number}
                  nama={item.name}
                  revelation={item.revelation + ' -'}
                  numberOfAyahs={item.numberOfAyahs + ' Ayat'}
                  name={'سُورَةُ'}
                  onPress={() =>
                    navigation.navigate('persurah', {
                      number: item.number,
                      nama: item.name,
                      revelation: item.revelation,
                      numberOfAyahs: item.numberOfAyahs,
                      translation: item.translation,
                    })
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default HomeSurah;
