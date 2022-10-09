import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Warna_Utama} from '../../utils';

const Controls = ({togglePlayPauseBtn, pause, playNextSong, playPrevSong}) => {
  return (
    <View style={styles.container}>
      {/* PrevBtn */}
      <TouchableOpacity onPress={playPrevSong}>
        <Icon name="backward" size={30} color={Warna_Utama} />
      </TouchableOpacity>

      {/* Play/Pause Btn */}

      {pause ? (
        <TouchableOpacity style={styles.btnPlay} onPress={togglePlayPauseBtn}>
          <Icon name="play" size={30} color={Warna_Utama} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnPlay} onPress={togglePlayPauseBtn}>
          <Icon name="pause" size={30} color={Warna_Utama} />
        </TouchableOpacity>
      )}

      {/* NextBtn */}
      <TouchableOpacity onPress={playNextSong}>
        <Icon name="forward" size={30} color={Warna_Utama} />
      </TouchableOpacity>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  btnPlay: {
    marginHorizontal: 45,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
