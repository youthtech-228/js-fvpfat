// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class ButtonClickTester {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.clicks = 0;
  }

  trackClicks() {
    this.elem.addEventListener('click', this.clickListener);
  }

  clickListener = () => {
    this.clicks += 1;

    this.update();
  };

  update() {
    document.querySelector('#output').innerHTML = this.clicks;
  }
}

const buttonClickTester = new ButtonClickTester('#myButton');
// console.log(buttonClickTester.elem);
buttonClickTester.trackClicks();
