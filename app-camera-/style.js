import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  contentButtons: {
    height: '30%',
    marginTop: 620,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  buttonCamera: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  buttonFlip: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20,
  },
  closeButton: {

    position: 'absolute',
    top: 165,
    left: 2,
    margin: 10,
  },
  imgPhoto: {
    width: '100%',
    height: 400,
  },
});

export default styles;
