// Переменные для работы с меню
const MENU = document.getElementById("MENU");
const NAV_BUTTONS = document.getElementById("NAV_BUTTONS");
const ANI_LIBRIA_URL = "http(s)://api.anilibria.tv/v3/title?id=9000";

let menu_hidden = false;

function toggle_menu() {
	if (!menu_hidden) {
		NAV_BUTTONS.style.visibility = "hidden";
		NAV_BUTTONS.style.opacity = 0;
		menu_hidden = true;
	}
	else {
		NAV_BUTTONS.style.visibility = "visible";
		NAV_BUTTONS.style.opacity = 1;
		menu_hidden = false;
	}
}

MENU.onclick = toggle_menu;


fetch(ANI_LIBRIA_URL).then(response => {
	console.log(response.json());
});