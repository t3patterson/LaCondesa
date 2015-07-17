// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")

var Promise = require('es6-promise').Promise
var React = require('react');
import { MyHomePage } from './bootstrap-react-components.js'



// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

window.addEventListener('load', app)

function app() {
	var menuEl = document.querySelector('.menu-pop-out')
	var wrapperEl = document.querySelector('.wrapper')
	var overlayEl = document.querySelector('#overlay')
	var revealedEl


	var initialHeight = wrapperEl.offsetHeight
	console.log(initialHeight)
	console.log(menuEl.offsetHeight-initialHeight-menuEl.offsetTop)
	var heightDiff = (menuEl.offsetHeight-initialHeight-menuEl.offsetTop)
	var deadzone = (menuEl.offsetHeight+menuEl.offsetTop-initialHeight)
	console.log(deadzone)

	var revealAbout = (evt)=>{
		evt.preventDefault();
		console.log(evt.target)

		var aboutEl = document.querySelector('.about-us');
		aboutEl.classList.add('show-me')

		overlayEl.classList.add("show-me");
		revealedEl = aboutEl;
	}

	var revealMenu = (evt) => {
		evt.preventDefault();
		console.log(evt.target);
		
		var menuPopOutEl = document.querySelector('.menu-pop-out');
		menuPopOutEl.classList.add("show-me");
		
		overlayEl.classList.add("show-me");
		wrapperEl.classList.add("flow-over")
		console.log(wrapperEl.offsetHeight)
		revealedEl = menuPopOutEl
	}

	var revealMap = (evt)=>{
		evt.preventDefault();
		console.log(evt.target)

		var mapLocEl = document.querySelector('.map-location')
		mapLocEl.classList.add("show-me");	

		overlayEl.classList.add("show-me");
		revealedEl = mapLocEl;
	}

	document.querySelector('.menu-btn').addEventListener('click', revealMenu)
	document.querySelector('.menu-btn2').addEventListener('click', revealMenu)
	document.querySelector('.about-btn').addEventListener('click', revealAbout)
	document.querySelector('.about-btn2').addEventListener('click', revealAbout)
	document.querySelector('.map-btn').addEventListener('click', revealMap)
	document.querySelector('.map-btn2').addEventListener('click', revealMap)

	overlayEl.addEventListener('click', (evt)=>{
		var wrapperEl = document.querySelector('.wrapper')

		if (wrapperEl.offsetWidth < 420 && evt.pageY > initialHeight - deadzone){
			console.log('doom scenario...deadzone clicked')
			var heightDiff = (menuEl.offsetHeight-wrapperEl.offsetHeight-menuEl.offsetTop)
			wrapperEl.classList.remove("flow-over")
			wrapperEl.style.paddingTop = heightDiff+'px'
		}
		console.log('overlay clickd')
		wrapperEl.classList.remove("flow-over")
		revealedEl.classList.remove("show-me")
		overlayEl.classList.remove("show-me")
	})

	console.log( document.querySelector('.about-btn2') )
	console.log( document.querySelector('.about-btn2') )

}








