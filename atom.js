/*
 * AtomJS (C) 2018 Louis Moraes
 * 
 * MIT license
/*


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
function deepCopy(target, whiteList) {
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

var keyTable = [];
keyTable[0] = {key: "²"};	// Bug sous Firefox?
keyTable[8] = {key: "Backspace"};
keyTable[9] = {key: "Tab"};
keyTable[13] = {key: "Enter"};
keyTable[16] = {key: "Shift"};
keyTable[17] = {key: "Ctrl"};
keyTable[18] = {key: "Alt"};
keyTable[19] = {key: "Pause"};
keyTable[20] = {key: "CapsLock"};
keyTable[27] = {key: "Escape"};
keyTable[32] = {key: " "};
keyTable[33] = {key: "PageUp"};
keyTable[34] = {key: "PageDown"};
keyTable[35] = {key: "End"};
keyTable[36] = {key: "Home"};
keyTable[37] = {key: "ArrowLeft"};
keyTable[38] = {key: "ArrowUp"};
keyTable[39] = {key: "ArrowRight"};
keyTable[40] = {key: "ArrowDown"};
keyTable[45] = {key: "Insert"};
keyTable[46] = {key: "Delete"};
keyTable[48] = {key: "à", shiftKey: "0", altKey: "@"};
keyTable[49] = {key: "&", shiftKey: "1"};
keyTable[50] = {key: "é", shiftKey: "2", altKey: "~"};
keyTable[51] = {key: '"', shiftKey: "3", altKey: "#"};
keyTable[52] = {key: "'", shiftKey: "4", altKey: "{"};
keyTable[53] = {key: "(", shiftKey: "5", altKey: "["};
keyTable[54] = {key: "-", shiftKey: "6", altKey: "|"};
keyTable[55] = {key: "è", shiftKey: "7", altKey: "`"};
keyTable[56] = {key: "_", shiftKey: "8", altKey: "\\"};
keyTable[57] = {key: "ç", shiftKey: "9", altKey: "^"};
keyTable[58] = {key: ":", shiftKey: "/"};
keyTable[59] = {key: ";", shiftKey: "."};
keyTable[60] = {key: "<", shiftKey: ">"};
keyTable[61] = {key: "=", shiftKey: "+", altKey: "}"};
keyTable[65] = {key: "a", shiftKey: "A"};
keyTable[66] = {key: "b", shiftKey: "B"};
keyTable[67] = {key: "c", shiftKey: "C"};
keyTable[68] = {key: "d", shiftKey: "D"};
keyTable[69] = {key: "e", shiftKey: "E", altKey: "€"};
keyTable[70] = {key: "f", shiftKey: "F"};
keyTable[71] = {key: "g", shiftKey: "G"};
keyTable[72] = {key: "h", shiftKey: "H"};
keyTable[73] = {key: "i", shiftKey: "I"};
keyTable[74] = {key: "j", shiftKey: "J"};
keyTable[75] = {key: "k", shiftKey: "K"};
keyTable[76] = {key: "l", shiftKey: "L"};
keyTable[77] = {key: "m", shiftKey: "M"};
keyTable[78] = {key: "n", shiftKey: "N"};
keyTable[79] = {key: "o", shiftKey: "O"};
keyTable[80] = {key: "p", shiftKey: "P"};
keyTable[81] = {key: "q", shiftKey: "Q"};
keyTable[82] = {key: "r", shiftKey: "R"};
keyTable[83] = {key: "s", shiftKey: "S"};
keyTable[84] = {key: "t", shiftKey: "T"};
keyTable[85] = {key: "u", shiftKey: "U"};
keyTable[86] = {key: "v", shiftKey: "V"};
keyTable[87] = {key: "w", shiftKey: "W"};
keyTable[88] = {key: "x", shiftKey: "X"};
keyTable[89] = {key: "y", shiftKey: "Y"};
keyTable[90] = {key: "z", shiftKey: "Z"};
keyTable[91] = {key: "OS"};
keyTable[93] = {key: "ContextMenu"};
keyTable[96] = {key: "0"};
keyTable[97] = {key: "1"};
keyTable[98] = {key: "2"};
keyTable[99] = {key: "3"};
keyTable[100] = {key: "4"};
keyTable[101] = {key: "5"};
keyTable[102] = {key: "6"};
keyTable[103] = {key: "7"};
keyTable[104] = {key: "8"};
keyTable[105] = {key: "9"};
keyTable[106] = {key: "*"};
keyTable[107] = {key: "+"};
keyTable[109] = {key: "-"};
keyTable[110] = {key: "."};
keyTable[112] = {key: "F1"};
keyTable[113] = {key: "F2"};
keyTable[114] = {key: "F3"};
keyTable[115] = {key: "F4"};
keyTable[116] = {key: "F5"};
keyTable[117] = {key: "F6"};
keyTable[118] = {key: "F7"};
keyTable[119] = {key: "F8"};
keyTable[120] = {key: "F9"};
keyTable[121] = {key: "F10"};
keyTable[122] = {key: "F11"};
keyTable[123] = {key: "F12"};
keyTable[144] = {key: "NumLock"};
keyTable[145] = {key: "ScrollLock"};
keyTable[160] = {key: "^", shiftKey: "¨"};
keyTable[161] = {key: "!", shiftKey: "§"};
keyTable[164] = {key: "$", shiftKey: "£", altKey: "¤"};
keyTable[165] = {key: "ù", shiftKey: "%"};
keyTable[169] = {key: ")", shiftKey: "°", altKey: "]"};
keyTable[170] = {key: "*", shiftKey: "µ"};
keyTable[188] = {key: ",", shiftKey: "?"};
keyTable[222] = {key: "²"};

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

	if(typeof keyTable[keyCode] == 'undefined')
		return false;
	else if(e.shiftKey)
		return keyTable[keyCode].shiftKey ? keyTable[keyCode].shiftKey : keyTable[keyCode].key;
	else if(e.altKey && e.ctrlKey)
		return keyTable[keyCode].altKey ? keyTable[keyCode].altKey : keyTable[keyCode].key;
	else
		return keyTable[keyCode].key;
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
			return ((k >= 65 && k <= 90) || (!e.shiftKey && (k == 50 || k == 55 || k == 57 || k == 48 || k == 165) ));
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
			return ((e.keyCode >= 48 && e.keyCode <= 57 && e.shiftKey) || (e.keyCode >= 96 && e.keyCode <= 105));
		else
			return ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105));
}

function focusedOnInput() {
	var tagName = document.activeElement.tagName;
	return (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT");
}