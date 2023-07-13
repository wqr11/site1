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

MENU.onclick = get_response;

function get_response() {
	fetch(url).then(data => {
		data.json()
	}).then(item => {
		console.log(item)
	})
}

get_response();
