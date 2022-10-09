import {Warna_Bg, Warna_Hitam, Warna_Putih, Warna_Utama} from '../utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Bg,
    paddingBottom: 50,
  },
  conterInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  conterCari: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Warna_Putih,
    elevation: 3,
  },
  cari: {
    width: '95%',
    height: 50,
    marginLeft: 10,
  },
  conterIcon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Utama,
    borderRadius: 7,
    elevation: 5,
    position: 'absolute',
    right: 10,
  },
  conterLoading: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: 150,
    height: 150,
  },
  conterData: {
    paddingHorizontal: 5,
    paddingBottom: 40,
  },
  textBottomSheet: {
    paddingBottom: 85,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
  },
  modalView: {
    backgroundColor: Warna_Bg,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Warna_Hitam,
  },
  textModal: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
    marginVertical: 10,
  },
  conterOk: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginLeft: '87%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Utama,
    elevation: 3,
  },
  textOk: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Putih,
  },
});
