const OptionsBar = require('../public/components/OptionsBar/OptionsBar');
//import OptionsBar from '../components/OptionsBar/OptionsBar';

window.onload = () => {
  const optionsBar = new OptionsBar();
  optionsBar.placeElement('#options-links', handler.buttons.admin, false);
}