# Atom_webatlas

## Intro

Atom is a very light library that brings to the developer the following features:
* Clarification of the code
* Class manipulation
* Manipulation of numbers
* Time formatting
* Positioning of elements
* Processing on character strings
* Keyboard management

## Package managers

    yarn add https://github.com/lgmoraes/Atom_webatlas.git

## Usage

Simply import atom.js or atom_object.js in your javascript code
```js
    /* Import functions directly in global scope */
    <script src="node_modules/AtomJS/dist/atom.js"></script>
    const navigator = getNavigator();

    // OR

    /* Import Atom object */
    <script src="node_modules/AtomJS/dist/atom_object.js"></script>
    const navigator = Atom.getNavigator();
```

## Functions

### General

* `addEvent(element, event, func)` - Create an event by ensuring browser compatibility
* `isDisplayed(element)` - Indicates whether an element is visible
* `getOffsetHeight(element)` - Returns the height of an element even if it is not displayed
* `widthSpace(px)` - Returns an element with the requested width
* `heightSpace(px)` - Returns an element with the requested height
* `clearArray(array)` - Deletes duplicates in a array
* `clearInput(input)` - Allows to reset an input file
* `getTextContent(element)` - textContent MultiSupport
* `getScrollY()` - Get the Y scroll position of the page
* `getInnerWidth()` - Get the inner width of the page
* `getInnerHeight()` - Get the inner height of the page
* `toXML(string)` - Convert String to XML
* `getExtention(string)` - Returns the extension from a file name
* `getNavigator()` - Returns the browser used by the user (FIREFOX, CHROME, EDGE, IE, OPERA, SAFARI or UNKNOWN)
* `onLeave(func, popup, msg)` - Call func when the user leaves the page (does not work on the next / previous buttons) The messages do not necessarily appear in the popup according to browsers
* `is404(iframe)` - Determines if an iframe is in error 404. Send the iframe element via frames or the name of the iframe (do not use the id). Does not work in IE (automatically returns false)
* `copyData(target, whiteList)` - Create a real copy of a javascript object (whiteList is optional)
* `getExecutionTime(func)` - Returns the execution time of the specified function
* `devlog(message, verbosite)` - Displays or not a message in the console based on the indicated verbosity. Useful for enabling / disabling developer messages in the console. The devmode variable must be defined

### Clarification of the code

* `txt(text)` - Equivalent to document.createTextNode(text);
* `hide(element)` - Equivalent to element.style.display = "none";
* `show(element)` - Equivalent to element.style.display = "inline-block";
* `showBlock(element)` - Equivalent to element.style.display = "block";
* `remove(element)` - Equivalent to document.createTextNode(text);

### Positioning

* `mouseover(event, element)` - Is the position of the mouse on the element?
* `mousePosition(event, element)` - Returns the position of the mouse relative to the element
* `getScreenPosition(element)` - Return screen position of an element
* `centerOnScreen(element)` - Center an element on screen
* `centerOnElement(element, container)` - Center an element on container
* `verticalAlign(element, align, container)` - Align vertically an element on container (align = TOP, CENTER or BOTTOM)
* `horizontalAlign(element, align, container)` - Align horizontally an element on container (align = TOP, CENTER or BOTTOM)
* `fitScale(element, container, max)` - Rescale an element to fit container

### Animation

* `fadeOut(element, animation, duration, timing, reverse)` - Animate an element and make it disappear at the end of the animation
* `cancelFadeOut(element)` - Prevent an item from disappearing after a fadeOut()
* `fadeOutIsRunning(element)` - Indicates if a fadeOut is active on the element
* `restartAnimation(element)` - Restart the animation defined on the element

### Class processing
#### Useful for IE <10 (classList not compatible before Internet Explorer 10)

* `hasClass(class, element)` - Indicates whether the element has the class
* `addClass(class, element)` - Add the class to the element
* `removeClass(class, element)` - Deletes the class from the element
* `toggleClass(class, element)` - Toggle the class of the element

### Number processing

* `getRandomInt(min, max)` - Returns a random integer between a min value and a max value
* `getRandomFloat(n)` - Returns a floating number between 0 and n (excluded)
* `checkRange(n, min, max)` - Ensures that a variable is well between 2 values
* `toBin(x)` - Convert an int to an array of 0 and 1
* `getFormatedTime(secondsTotal)` - Get an object containing ms, s, m, and h
* `zerofill(n, width)` - Add 0 to the left of the number until you reach the required number of characters
* `invertDateFormat(date, separator)` - Invert date format (AAAA/MM/AA <=> DD/MM/AAAA)

### String processing

* `space2nbsp(string)` - Replaces the space characters by &nbsp;
* `nl2br(string)` - Replaces nl characters by br
* `br2nl(string)` - Replaces br characters by nl
* `space2underscore(string)` - Replaces space characters by _
* `underscore2space(string)` - Replaces _ characters by space
* `escapeQuote(string, entitie)` - Escape the double quotation marks
* `escapeSimpleQuote(string, entitie)` - Escape the single quotes
* `escapeTags(string, entitie)` - Echape the tags
* `htmlspecialchars(string)` - Convert special characters to HTML entities
* `htmlspecialchars_decode(string)` - Convert HTML entities to special characters

### Input processing
#### Ensures compatibility with different versions of keydown. Limitations: No CapsLock support for IE < 9, QWERTY transcript for IE < 9

* `whichClick(event)` - Returns LEFT, RIGHT or MIDDLE
* `wheelDirection(event)` - Returns UP or DOWN
* `getKey(event)` - Returns the key value of a keydown event and fixes the divergences between browsers (notably IE9-IE11)
* `isArrowPressed(event)` - Indicates whether the pressed key is a move key
* `isLetterPressed(event, includeAccents)` - Indicates whether the pressed key is a letter
* `isNumericPressed(event, caseSensitive)` - Indicates whether the pressed key is a number
* `focusedOnInput()` - Indicates whether the active element on the page is a form entry. Useful for disabling keyboard commands when form elements have focus