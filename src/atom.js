/*
 * AtomJS (C) 2018 Louis Moraes
 * 
 * MIT license
*/

module.exports = {
	addEvent: addEvent,
	isDisplayed: isDisplayed,
	getOffsetHeight: getOffsetHeight,
	widthSpace: widthSpace,
	heightSpace: heightSpace,
	clearArray: clearArray,
	clearInput: clearInput,
	getTextContent: getTextContent,
	getScrollY: getScrollY,
	getInnerWidth: getInnerWidth,
	getInnerHeight: getInnerHeight,
	toXML: toXML,
	getExtention: getExtention,
	getNavigator: getNavigator,
	onLeave: onLeave,
	is404: is404,
	copyData: copyData,
	getExecutionTime: getExecutionTime,
	devlog: devlog,
	txt: txt,
	divTxt: divTxt,
	hide: hide,
	show: show,
	showBlock: showBlock,
	remove: remove,
	mouseover: mouseover,
	mousePosition: mousePosition,
	whichClick: whichClick,
	wheelDirection: wheelDirection,
	centerOnScreen: centerOnScreen,
	centerOnElement: centerOnElement,
	verticalAlign: verticalAlign,
	horizontalAlign: horizontalAlign,
	fitScale: fitScale,
	getScreenPosition: getScreenPosition,
	restartAnimation: restartAnimation,
	fadeOut: fadeOut,
	cancelFadeOut: cancelFadeOut,
	fadeOutIsRunning: fadeOutIsRunning,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	toggleClass: toggleClass,
	getRandomInt: getRandomInt,
	getRandomFloat: getRandomFloat,
	checkRange: checkRange,
	toBin: toBin,
	getFormatedTime: getFormatedTime,
	invertDateFormat: invertDateFormat,
	zerofill: zerofill,
	space2nbsp: space2nbsp,
	nl2br: nl2br,
	br2nl: br2nl,
	space2underscore: space2underscore,
	underscore2space: underscore2space,
	escapeQuote: escapeQuote,
	escapeSimpleQuote: escapeSimpleQuote,
	escapeTags: escapeTags,
	htmlspecialchars: htmlspecialchars,
	htmlspecialchars_decode: htmlspecialchars_decode,
	getRandomInt: getRandomInt,
	getRandomFloat: getRandomFloat,
	checkRange: checkRange,
	toBin: toBin,
	getFormatedTime: getFormatedTime,
	invertDateFormat: invertDateFormat,
	zerofill: zerofill,
	space2nbsp: space2nbsp,
	nl2br: nl2br,
	br2nl: br2nl,
	space2underscore: space2underscore,
	underscore2space: underscore2space,
	escapeQuote: escapeQuote,
	escapeSimpleQuote: escapeSimpleQuote,
	escapeTags: escapeTags,
	htmlspecialchars: htmlspecialchars,
	htmlspecialchars_decode: htmlspecialchars_decode,
	getKey: getKey,
	isArrowPressed: isArrowPressed,
	isLetterPressed: isLetterPressed,
	isNumericPressed: isNumericPressed,
	focusedOnInput: focusedOnInput
}


/* GENERAL */

function addEvent(element, event, func) {
	if (element.addEventListener) {
		element.addEventListener(event, func, false);
	} else {
		element.attachEvent('on' + event, func);
	}
}

function isDisplayed(ele) {
	return (ele.offsetWidth > 0);
}

function getOffsetHeight(ele) {
	if(isDisplayed(ele))
		return ele.offsetHeight;
	else {
		var display = ele.style.display;
		ele.style.display = "block";
		var offsetHeight = ele.offsetHeight;
		ele.style.display = display;
		return offsetHeight;
	}
}

function widthSpace(px) {
	var div = document.createElement('div');
	div.style.display = "inline-block";
	div.style.width = px + "px";
	return div;
}

function heightSpace(px) {
	var div = document.createElement('div');
	div.style.height = px + "px";
	return div;
}

function clearArray(array) {
	var out = [];

	for(var i=0; i < array.length ;i++) {
		if(out.indexOf(array[i]) === -1) {
			out.push(array[i]);
		}
	}
	
	return out;
}

function clearInput(input) {
	var form = document.createElement('form');
	var parentNode = input.parentNode;
	var ref = input.nextSibling;
	
	form.appendChild(input);
	form.reset();
	parentNode.insertBefore(input,ref);
}

function getTextContent(element) {
	return element.textContent || element.innerText || ''; // textContent MultiSupport.
}

function getScrollY() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // position du scrolling MultiSupport.
}

function getInnerWidth() {
	return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth; // Pour obtenir la largeur disponible, fonctionne toutes correctement.
}

function getInnerHeight() {
	return window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight; // innerHeight MultiSupport.
}

function toXML(chaine) {
	if(window.ActiveXObject) {
		var doc=new ActiveXObject('Microsoft.XMLDOM');
		doc.async='false';
		doc.loadXML(chaine);
	}
	else {
		var parser=new DOMParser();
		var doc=parser.parseFromString(chaine,'text/xml');
	}
	return doc;
}

function getExtention(str) {
	if (str.lastIndexOf(".") > 0) {
		return str.substring(str.lastIndexOf(".") + 1, str.length);
	}
}

function getNavigator() {
	var userAgent = navigator.userAgent;

	if(userAgent.indexOf("Firefox") !== -1)
		return "FIREFOX";
	else if(userAgent.indexOf("Trident") !== -1)
		return "IE";
	else if(userAgent.indexOf("OPR") !== -1)
		return "OPERA";
	else if(userAgent.indexOf("Edge") !== -1)
		return "EDGE";
	else if(userAgent.indexOf("Chrome") !== -1)
		return "CHROME";
	else if(userAgent.indexOf("Safari") !== -1)
		return "SAFARI";
	else
		return "UNKNOWN";
}

// Lance une fonction lorsque l'utilisateur quitte la page (ne fonctionne pas sur les changements de page)
// Les messages ne s'affiche pas forcement dans la popup en fonction des navigateurs
function onLeave(func, popup, msg) {
	if(popup === undefined)
		popup = false;

	window.onbeforeunload = function (e) {
		func();

		if(popup) {
			e = e || window.event;
			msg = msg || '';

			// For IE and Firefox
			if (e) {e.returnValue = msg;}

			// For Chrome and Safari
			return msg;
		}
	};
}

// Détermine si une iframe est en erreur 404
// Envoyez l'élément iframe via frames ou le name de l'iframe (ne pas utiliser l'id)
//!\\ Ne fonctionne pas sous IE (renvoie automatiquement false)
function is404(iframe) {
	if(getNavigator() == "IE")
		return false;

	var title_collection = iframe.document.getElementsByTagName('title');
	var title = null;

	if(title_collection.length == 0)			// Si la page ne contient pas de titre, ce n'est pas un 404
		return false;

	title = title_collection[0].innerHTML;

	if(title == "404 Not Found")				// Firefox, Chrome, Safari
		return true;
	//else if(title.substr(0, 8) == "HTTP 404")	// IE
	//	return true;

	return false;
}

// Creer une copie réel d'un objet javascript
function copyData(target, whiteList) {
	if(typeof whiteList !== 'undefined')
		return (JSON.parse(JSON.stringify(target, whiteList)));
	else
		return (JSON.parse(JSON.stringify(target)));
}

function getExecutionTime(func) {
	var start = Date.now();
	func();
	return Date.now() - start;
}

function devlog(message, verbosite) {
	if(typeof devmode == "undefined")
		return false;
	
	if(verbosite == undefined)
		verbosite = 1; // TOUT
	
	if(verbosite <= devmode)
		console.log(message);
}


/* CLARIFICATION DU CODE */

function txt(text) {
	return document.createTextNode(text);
}

function divTxt(width, text, lineHeight) {
	var newDiv = document.createElement("div");
	newDiv.style.textAlign = "center";
	newDiv.style.display = "inline-block";

	if(width !== "auto")
		newDiv.style.width = width + "px";
	if(text !== undefined)
		newDiv.innerHTML = text;
	if(lineHeight !== undefined)
		newDiv.style.lineHeight = lineHeight + "px";

	return newDiv;
}

function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "inline-block";
}

function showBlock(element) {
	element.style.display = "block";
}

function remove(ele) {		// Supprime un element via removeChild() (remove() n'étant pas compatible IE9)
	ele.parentNode.removeChild(ele);
}


// POSITIONNEMENT

// Indique si la souris de l'utilisateur est au dessus d'un element
function mouseover(e, element) {
	var resultat = true;
	
	if(e.clientX < getScreenPositionLeft(element)) {
		resultat = false;
	} else if(e.clientX > getScreenPositionLeft(element) + element.offsetWidth) {
		resultat = false;
	} else if(e.clientY < getScreenPositionTop(element)) {
		resultat = false;
	} else if(e.clientY > getScreenPositionTop(element) + element.offsetHeight) {
		resultat = false;
	}
	
	return resultat;
}

function mousePosition(e, element) {
	return {
		x: e.clientX - getScreenPositionLeft(element),
		y: e.clientY - getScreenPositionTop(element)
	};
}

function whichClick(e) {
	if (e.button === 1)
		return "MIDDLE";
	else if (e.button === 2)
		return "RIGHT";
	else (e.button === 3)
		return "LEFT";
}

function wheelDirection(e) {
	if (e.deltaY < 0)
		return "UP";
	else if (e.deltaY > 0)
		return "DOWN";
}

function centerOnScreen(element) {
	element.style.top = (getInnerHeight()/2) - (element.offsetHeight/2) + "px";
	element.style.left = (getInnerWidth()/2) - (element.offsetWidth/2) + "px";
}

function centerOnElement(ele, container) {
	ele.style.top = (container.offsetHeight/2) - (ele.offsetHeight/2) + "px";
	ele.style.left = (container.offsetWidth/2) - (ele.offsetWidth/2) + "px";
}

function verticalAlign(ele, align, container) {
	if(align === undefined)
		align = "CENTER";

	var h = 0;

	if(container === undefined)
		h = getInnerHeight();
	else
		h = container.offsetHeight;
	
	if(align === "CENTER")
		ele.style.top = (h/2) - (ele.offsetHeight/2) + "px";
	else if(align === "TOP")
		ele.style.top = "0px";
	else if(align === "BOTTOM")
		ele.style.top = h - ele.offsetHeight + "px";
}

function horizontalAlign(ele, align, container) {
	if(align === undefined)
		align = "CENTER";

	var w = 0;

	if(container === undefined)
		w = getInnerWidth();
	else
		w = container.offsetWidth;
	
	if(align === "CENTER")
		ele.style.left = (w/2) - (ele.offsetWidth/2) + "px";
	else if(align === "LEFT")
		ele.style.left = "0px";
	else if(align === "RIGHT")
		ele.style.left = w - ele.offsetWidth + "px";
}

// Redimentionne un element de facon a ce qu'il entre dans container
function fitScale(ele, container, max) {
	var w_ratio = container.offsetWidth / ele.offsetWidth;
	var h_ratio = container.offsetHeight / ele.offsetHeight;
	var ratio = 0;

	if(max === undefined)
		var ratio = Math.min(w_ratio, h_ratio);
	else
		var ratio = Math.min(w_ratio, h_ratio, max);

	ele.style.transform = "scale(" + ratio + ")";
	centerOnElement(ele, container);
}

function getScreenPosition(element) {
	return {
		x: element.getBoundingClientRect().left,
		y: element.getBoundingClientRect().top
	};
}


/* ANIMATION */

function restartAnimation(element) {
	var anim = element.style.animationName;
	element.style.animationName = "";
	
	setTimeout(function(){
		element.style.animationName = anim;
	}, 18);
}

// Applique une animation à un element et le fait disparaitre à la fin de l'animation.
function fadeOut(element, animation, duration, timing, reverse) {
	if(fadeOutIsRunning(element))		// Si un fadeout est déjà amorcé, la fonction sera annulé
		return false;
	
	if(timing === undefined)
		timing = "";
	if(reverse === undefined)
		reverse = "";

	element.style.animation = duration + "ms " + animation + " " + timing + " " + reverse;

	element.fadeOut_timeout = setTimeout(function() {
		element.style.display = "none";
		element.fadeOut_timeout = null;
		element.style.animation = "";		// Réactive l'animation d'entrée définit dans le css
	}, duration);
}

function cancelFadeOut(element) {
	if(!fadeOutIsRunning(element))
		return false;

	clearInterval(element.fadeOut_timeout);
	element.fadeOut_timeout = null;
	element.style.animation = "";			// Réactive l'animation d'entrée définit dans le css

	return true;
}

function fadeOutIsRunning(element) {
	return (element.hasOwnProperty("fadeOut_timeout") && element.fadeOut_timeout !== null);
}


// MANIPULATION DE CLASS
// Utile pour IE < 10 (classList n'étant pas compatible avant Internet Explorer 10)

function hasClass(c, element) {
	if(element.className == '')
		return false;

	var classes = element.className.split(' ');
	return classes.indexOf(c) !== -1;
}

function addClass(c, element) {
	if(hasClass(c, element))
		return false;
	
	element.className += " " + c;
	return true;
}

function removeClass(c, element) {
	if(!hasClass(c, element))
		return false;
	
	var classes = element.className.split(' ');
	var newClass = "";
	var indexToRemove = classes.indexOf(c);
	
	classes.splice(indexToRemove, 1);
	
	if(classes.length > 0)
		newClass = classes[0];

	for(var i=1; i < classes.length ;i++) {
		newClass += " " + classes[i];
	}
	
	element.className = newClass;

	return true;
}

function toggleClass(c, element) {	/* Ajoute la class si elle n'existe pas ou Supprime la class si elle existe */
	if(!removeClass(c, element)) {
		addClass(c, element);
		return true;
	}

	return false;
}


// MANIPULATION DE NOMBRES

// Retourne un entier aléatoire entre une valeur min et une valeur max
// Attention : si on utilisait Math.round() on aurait une distribution non uniforme !
function getRandomInt(min, max) {
	max += 1;	// Pour que max soit inclus
	return Math.floor(Math.random() * (max - min)) + min;
}

// Retourne un nombre flotant entre 0 et n (exclu)
function getRandomFloat(n) {
	return Math.random() * n;
}

//	Assure qu'une variable se trouve bien entre 2 valeurs
function checkRange(n, min, max) {
	if(n < min)
		n = min;
	else if(n > max)
		n = max;
	
	return n;
}

function toBin(x) {
	var res = []; // Contient le résultat

	while (x){
		res.push(x % 2);
		x = Math.floor(x / 2);
	}

	res.reverse(); // On remet dans le bon ordre
	return res;
}

function getFormatedTime(secondesTotal) {
	var heures = 0;
	var minutes = 0;
	var secondes = 0;
	var ms = parseInt((secondesTotal % 1) * 1000);

	if(secondesTotal >= 1) {
		var heures = parseInt( (secondesTotal / 60) /60 );
		var minutes = parseInt( secondesTotal / 60 - (heures * 60) );
		var secondes = parseInt(secondesTotal) - (minutes * 60) - (heures * 60 * 60);
	}
	
	return {
		h: heures,
		m: minutes,
		s: secondes,
		ms: ms
	};
}

function invertDateFormat(date, separator) {
	if(date.length !== 10)
		return "Unsupported format";
	
	if(isNaN(date.charAt(4))) {
		if(separator === undefined)
			separator = date.charAt(4);

		return date.substring(8, 10) + separator + date.substring(5, 7) + separator + date.substring(0, 4);
	}
	
	if(separator === undefined)
		separator = date.charAt(2);

	return date.substring(6, 10) + separator + date.substring(3, 5) + separator + date.substring(0, 2);
}

function zerofill(n, width) {
	n = String(n);

	while(n.length < width) {
		n = "0" + n;
	}

	return n;
}


// TRAITEMENT DE CHAINES

function space2nbsp(str) {
	return str.replace(/\s/g, '&nbsp;');
}

function nl2br(str) {
	return str.replace(/\n/mg,"<br />");
}

function br2nl(str) {
	return str.replace(/<br \/>/mg,"\n");
}

function space2underscore(str) {
	return str.replace(/ /g,"_");
}

function underscore2space(str) {
	return str.replace(/_/g," ");
}

function escapeQuote(str, entitie) {
	if(typeof entitie === "undefined")
		entitie = true;

	if(entitie)
		return str.replace(/"/g, "&quot;");

	return str.replace(/"/g, '\\"');
}

function escapeSimpleQuote(str, entitie) {
	if(typeof entitie === "undefined")
		entitie = true;

	if(entitie)
		return str.replace(/'/g, "&apos;");

	return str.replace(/'/g, "\\'");
}

function escapeTags(str, entitie) {
	if(typeof entitie === "undefined")
		entitie = true;

	if(entitie)
		return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

	return str.replace(/</g, "\\<").replace(/>/g, "\\>");
}

function htmlspecialchars(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&apos;");
}

function htmlspecialchars_decode(str) {
	return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}


/* GESTION DES TOUCHES */

var keys = [];
keys[0] = {key: "²"};	// Bug sous Firefox?
keys[8] = {key: "Backspace"};
keys[9] = {key: "Tab"};
keys[13] = {key: "Enter"};
keys[16] = {key: "Shift"};
keys[17] = {key: "Ctrl"};
keys[18] = {key: "Alt"};
keys[19] = {key: "Pause"};
keys[20] = {key: "CapsLock"};
keys[27] = {key: "Escape"};
keys[32] = {key: " "};
keys[33] = {key: "PageUp"};
keys[34] = {key: "PageDown"};
keys[35] = {key: "End"};
keys[36] = {key: "Home"};
keys[37] = {key: "ArrowLeft"};
keys[38] = {key: "ArrowUp"};
keys[39] = {key: "ArrowRight"};
keys[40] = {key: "ArrowDown"};
keys[45] = {key: "Insert"};
keys[46] = {key: "Delete"};
keys[48] = {key: "à", maj: "0", alt: "@"};
keys[49] = {key: "&", maj: "1"};
keys[50] = {key: "é", maj: "2", alt: "~"};
keys[51] = {key: '"', maj: "3", alt: "#"};
keys[52] = {key: "'", maj: "4", alt: "{"};
keys[53] = {key: "(", maj: "5", alt: "["};
keys[54] = {key: "-", maj: "6", alt: "|"};
keys[55] = {key: "è", maj: "7", alt: "`"};
keys[56] = {key: "_", maj: "8", alt: "\\"};
keys[57] = {key: "ç", maj: "9", alt: "^"};
keys[58] = {key: ":", maj: "/"};
keys[59] = {key: ";", maj: "."};
keys[60] = {key: "<", maj: ">"};
keys[61] = {key: "=", maj: "+", alt: "}"};
keys[65] = {key: "a", maj: "A"};
keys[66] = {key: "b", maj: "B"};
keys[67] = {key: "c", maj: "C"};
keys[68] = {key: "d", maj: "D"};
keys[69] = {key: "e", maj: "E", alt: "€"};
keys[70] = {key: "f", maj: "F"};
keys[71] = {key: "g", maj: "G"};
keys[72] = {key: "h", maj: "H"};
keys[73] = {key: "i", maj: "I"};
keys[74] = {key: "j", maj: "J"};
keys[75] = {key: "k", maj: "K"};
keys[76] = {key: "l", maj: "L"};
keys[77] = {key: "m", maj: "M"};
keys[78] = {key: "n", maj: "N"};
keys[79] = {key: "o", maj: "O"};
keys[80] = {key: "p", maj: "P"};
keys[81] = {key: "q", maj: "Q"};
keys[82] = {key: "r", maj: "R"};
keys[83] = {key: "s", maj: "S"};
keys[84] = {key: "t", maj: "T"};
keys[85] = {key: "u", maj: "U"};
keys[86] = {key: "v", maj: "V"};
keys[87] = {key: "w", maj: "W"};
keys[88] = {key: "x", maj: "X"};
keys[89] = {key: "y", maj: "Y"};
keys[90] = {key: "z", maj: "Z"};
keys[91] = {key: "OS"};
keys[93] = {key: "ContextMenu"};
keys[96] = {key: "0"};
keys[97] = {key: "1"};
keys[98] = {key: "2"};
keys[99] = {key: "3"};
keys[100] = {key: "4"};
keys[101] = {key: "5"};
keys[102] = {key: "6"};
keys[103] = {key: "7"};
keys[104] = {key: "8"};
keys[105] = {key: "9"};
keys[106] = {key: "*"};
keys[107] = {key: "+"};
keys[109] = {key: "-"};
keys[110] = {key: "."};
keys[112] = {key: "F1"};
keys[113] = {key: "F2"};
keys[114] = {key: "F3"};
keys[115] = {key: "F4"};
keys[116] = {key: "F5"};
keys[117] = {key: "F6"};
keys[118] = {key: "F7"};
keys[119] = {key: "F8"};
keys[120] = {key: "F9"};
keys[121] = {key: "F10"};
keys[122] = {key: "F11"};
keys[123] = {key: "F12"};
keys[144] = {key: "NumLock"};
keys[145] = {key: "ScrollLock"};
keys[160] = {key: "^", maj: "¨"};
keys[161] = {key: "!", maj: "§"};
keys[164] = {key: "$", maj: "£", alt: "¤"};
keys[165] = {key: "ù", maj: "%"};
keys[169] = {key: ")", maj: "°", alt: "]"};
keys[170] = {key: "*", maj: "µ"};
keys[188] = {key: ",", maj: "?"};
keys[222] = {key: "²"};

// Assure la compatibilité avec les differentes versions de keydown
// Limitations : Pas de support CapsLock avec keyCode, Retranscription en AZERTY uniquement pour keyCode
function getKey(e) {
	if(e.key !== undefined) {	/* Support depuis IE9, Firefox 23, Chrome 51, Opera 38 */
		var key = e.key;
		
		/* IE9-IE11 ainsi que d'anciens navigateurs ne respectent pas totalement les spécifications et certaines touches doivent être corrigés */
		switch (key) {
			case "Up":
				key = "ArrowUp";
				break;
			case "Right":
				key = "ArrowRight";
				break;
			case "Down":
				key = "ArrowDown";
				break;
			case "Left":
				key = "ArrowLeft";
				break;
			case "Spacebar":
				key = " ";
				break;
			case "Esc":
				key = "Escape";
				break;
			case "Del":
				key = "Delete";
				break;
			case "Add":
				key = "+";
				break;
			case "Subtract":
				key = "-";
				break;
			case "Multiply":
				key = "*";
				break;
			case "Divide":
				key = "/";
				break;
			case "Win":
				key = "OS";
				break;
			case "Scroll":
				key = "ScrollLock";
				break;
		}
		
		return key;
	}


	var keyCode = e.keyCode;

	if(typeof keys[keyCode] == 'undefined')
		return false;
	else if(e.maj)
		return keys[keyCode].maj ? keys[keyCode].maj : keys[keyCode].key;
	else if(e.altKey && e.ctrlKey)
		return keys[keyCode].alt ? keys[keyCode].alt : keys[keyCode].key;
	else
		return keys[keyCode].key;
}

// Indique si la touche presse est une touche de déplacement
function isArrowPressed(e) {
	if(e.key !== undefined)
		return (e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowRight" || e.key == "ArrowDown" || e.key == "Left" || e.key == "Up" || e.key == "Right" || e.key == "Down");
	else
		return (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40);
}

// Indique si la touche presse est une lettre
function isLetterPressed(e, includeAccents) {
	if(includeAccents === undefined)
		includeAccents = true;

	if(e.key !== undefined) {
		if(e.key.length == 1) {
			if(includeAccents)
				return /[A-Za-zéèçàù]/.test(e.key);
			else
				return /[A-Za-z]/.test(e.key);
		}
		else
			return false;
	}
	else {
		var k = e.keyCode;

		if(includeAccents)
			return ((k >= 65 && k <= 90) || (!e.maj && (k == 50 || k == 55 || k == 57 || k == 48 || k == 165) ));
		else
			return (k >= 65 && k <= 90);
	}
}

// Indique si la touche presse est un chiffre
function isNumericPressed(e, caseSensitive) {
	if(caseSensitive === undefined)
		caseSensitive = true;

	if(e.key !== undefined)
		if(caseSensitive)
			return /^[0-9]/.test(e.key);
		else
			return /^[0-9&é"'\(\-è_çà]/.test(e.key);
	else
		if(caseSensitive)
			return ((e.keyCode >= 48 && e.keyCode <= 57 && e.maj) || (e.keyCode >= 96 && e.keyCode <= 105));
		else
			return ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105));
}

function focusedOnInput() {
	var tagName = document.activeElement.tagName;
	return (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT");
}