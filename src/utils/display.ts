import {Dimensions} from 'react-native';

const setWidth = (w: number) => (Dimensions.get('window').width / 100) * w;
const setHeight = (h: number) => (Dimensions.get('window').height / 100) * h;
export default {setHeight, setWidth};
