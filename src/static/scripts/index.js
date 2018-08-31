import OptionsBar from './OptionsBar';

window.onload = () => {
  const optionsBar = new OptionsBar();
  optionsBar.placeElement('#options-links', optionsBar.buttons.admin, false);
};
