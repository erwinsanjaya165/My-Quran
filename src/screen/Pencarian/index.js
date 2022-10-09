import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Warna_Abu, Warna_Putih} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DaftarSurah} from '../../components';
import {Bordir, Loading} from '../../assets';
import AnimatedLottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/pencarian';

const Pencarian = ({navigation}) => {
  const [matches, setMatches] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [englishName, setenglishName] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setMatches([]);
    });

    return focusHandler;
  }, [navigation]);

  const searchData = () => {
    setLoading(true);
    fetch(`https://api.alquran.cloud/v1/search/${input}/all/id`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.data.matches);
        setMatches(result.data.matches);
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.conterInput}>
        <View style={styles.conterCari}>
          <TextInput
            placeholder="cari"
            placeholderTextColor={Warna_Abu}
            onChangeText={input => setInput(input)}
            style={styles.cari}
          />
        </View>
        <TouchableOpacity
          style={styles.conterIcon}
          onPress={() => searchData()}>
          <Icon name="magnify" size={30} color={Warna_Putih} />
        </TouchableOpacity>
      </View>
      {loading ? (
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
          {matches.map((item, index) => (
            <DaftarSurah
              key={index}
              bordir={Bordir}
              number={item.surah.number}
              nama={item.surah.englishName + ' Ayat ' + item.numberInSurah}
              name={item.surah.name}
              revelation={item.text}
              onPress={() => [
                setText(item.text),
                toggleModal(),
                setenglishName(
                  item.surah.englishName + ' Ayat ' + item.numberInSurah,
                ),
              ]}
            />
          ))}
        </ScrollView>
      )}

      <Modal
        isVisible={modalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.modalView}>
          <Text style={styles.textTitle}>{englishName}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textModal}>{text}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.conterOk}>
              <Text style={styles.textOk}>Ok</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Pencarian;
