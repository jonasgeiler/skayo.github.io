import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import logo from '../img/logo.png';

// loads the Icon plugin
UIkit.use(Icons);

document.getElementById('logo').onerror = function() {
	this.src = logo;
	this.onerror = null;
};