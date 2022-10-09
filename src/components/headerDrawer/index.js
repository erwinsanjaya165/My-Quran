import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Warna_Putih, Warna_Utama} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HeaderDrawer extends Component {
  render() {
    return (
      <View style={styles.conterHeader}>
        <TouchableOpacity
          style={styles.conterMenu}
          onPress={this.props.onPress}>
          <Icon name={this.props.icon} size={30} color={Warna_Putih} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    backgroundColor: Warna_Utama,
    paddingLeft: 22,
  },
  conterMenu: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: Warna_Putih,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
