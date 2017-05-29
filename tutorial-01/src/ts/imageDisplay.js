import sloth from '../../assets/sloth.jpg';
import cheetah from '../../assets/cheetah.jpg';

import $ from 'jquery';

const body = $('body');

const displayCheetah = () => {
  const cheetahImage = $('<img></img>', {src: cheetah});
  cheetahImage.appendTo(body);
}

const displaySloth = () => {
  const slothImage = $('<img></img>', {src: sloth});
  slothImage.appendTo(body);
}

export {
  displayCheetah, 
  displaySloth
}