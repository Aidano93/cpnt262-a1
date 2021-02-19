# CPNT-262 A1
Aidan O'Reilly

GH repo:

GH page:

## Description:

**Click the hamburger menu icon in the top right corner to display the nav menu on the page. Click the X icon to hide the menu.**

A functional hamburger nav menu has been created using `classList.toggle` and `addEventListener('click' function(){})`. The CSS applied to the default class of the nav menu causes it to be hidden. Clicking the button on the page causes the `classList.toggle` to change the default class of nav menu to `showNav` . `showNav` applies CSS to the nav menu that causes it to appear on the page. Therefore, clicking the button causes the nav menu to toggle between hidden and displayed.

The button is represented on the page by a hamburger menu icon. When the hamburger menu icon is clicked, the icon switches to an X icon. The X icon represents exiting out of the menu and clicking it returns to the default hidden menu and hamburger menu icon.

## Notes:
- I originally thought I would use `display: none;` to hide the nav menu until I found the article referenced in my attributes. In the example, `transform: translateY();` is used instead. This in combination with `transition:` allows the menu to slide into the page, rather than just appear. The article example used translateY to have the menu slide in from  the top of the page, I chose to change it to translateX to have the menu slide in from the side.

- Another point of the example I liked was the use of `background-image:` rather than `<i>` to display the menu icon. It allowed me to use a second toggle to change the `background-image` from the hamburger menu icon to the X icon. I believe this toggle adds a small visual cue for users and improves usability. The only drawback was that I couldn't change the color of the icon in CSS. I edited the icons in Figma instead.

## Attributions:

### Media:
- Hero image provided by Sunforger band
- bars-solid.svg and times-solid.svg from [font awesome](https://fontawesome.com/license/free)

## Code:
- [dev.to article](https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0) by ljc-dev used as a reference for utilizing `classList.toggle`
- Vitaly warned of issues that can be caused by CSS cascade when toggling between hiding and displaying elements. CSS order matters.