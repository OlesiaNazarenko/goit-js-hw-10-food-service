import menuTemplate from '../templates/menu.hbs';
import menu from './menu.json';
import Theme from './theme';

const menuMarkup = document.querySelector('.js-menu');
const cardMarkup = createMenuMarkup(menu);
menuMarkup.insertAdjacentHTML('beforeend', cardMarkup );
function createMenuMarkup(menu) {
    return menu.map(menuTemplate).join("");
}
const body = document.querySelector('body');
const toolbox = document.querySelector("#theme-switch-toggle");

// function changeOnDarkTheme(evt) {
    
//     if (evt.target.classList.contains("dark-theme")) {
//         evt.target.setAttribute('checked', 'true');
        
//     }
//     evt.target.setAttribute('checked', 'false');
//      localStorage.removeItem("class", "dark-theme");
// }
// let theme = localStorage.getItem("class");
// body.classList.add(theme);
toolbox.addEventListener("change", (e) => {
    body.classList.toggle("dark-theme")
    console.log(localStorage.getItem("class"))
    if (localStorage.getItem("class")) {
        localStorage.removeItem("class")
    } else {
        localStorage.setItem("class", "dark-theme")
        toolbox.checked = true;
    }
});




// function replaceSelectorsOnBodyRef() {
    
//     if (body.classList.contains(Theme.LIGHT)) {
//         body.classList.replace(Theme.LIGHT, Theme.DARK);
//         saveUserThemeInLocalStorage(Theme.DARK);
//         console.log("fhfjjf")
//         return;
//     }
//     body.classList.replace(Theme.DARK, Theme.LIGHT);
//     saveUserThemeInLocalStorage(Theme.LIGHT);
// }
// function onThemeChange() {
//     replaceSelectorsOnBodyRef();
// }

// function saveUserThemeInLocalStorage(theme) {
//     localStorage.setItem('theme', theme);
// }

// function saveUserThemeWhenPageRefresh() {
//     const userTheme = localStorage.getItem('theme');

//     if (userTheme === Theme.DARK) {
//         document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//         toolbox.checked = true;
//     }
// }
// saveUserThemeWhenPageRefresh();

// toolbox.addEventListener('change', onThemeChange);