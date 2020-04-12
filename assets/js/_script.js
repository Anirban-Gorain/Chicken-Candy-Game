// Total duration of this project is 5 days at 'CORONA' virus time 2020. Starting date 8 april and ending data is 12 april.
let _play_Again = false;
// For show hihg score on the first page.
if ((localStorage.high_score)) {
	document.querySelector("#_high_Score").innerHTML = localStorage.getItem("high_score");
}
function _play_Button() {
	// Remove font section.
	document.querySelector("#_play_Button").style.visibility = "hidden";
	document.querySelector("#_play_Button").style.display = "none";
	document.querySelector("._cactus_Container").style.background = "url(/assets/images/_cactus4.png)";
	document.querySelector("._cactus_Container2").style.background = "url(/assets/images/_cactus2.png)";
	// Global variables
	const _chicken_Section = document.querySelector("._chicken_Section");
	const _background = document.querySelector("._background");
	const _collision_Music = new Audio("/assets/audio/_collision_Music.wav");
	const _background_Music = new Audio("/assets/audio/_background_Music.mp3");
	_background_Music.loop = true;
	_background_Music.play();
	const _wave = document.querySelector(".wave");
	const _chicken_Front_Far = document.querySelector("._chicken_Front_Far");
	const _chicken_Back_Far = document.querySelector("._chicken_Back_Far");
	const _chicken_Head = document.querySelector("._chicken_Head");
	const _chicken_Leg_1 = document.querySelector("._chicken_Leg_1");
	const _chicken_Leg_2 = document.querySelector("._chicken_Leg_2");
	const _all_The_Element_Under_Of_The_Chicken_Section = document.querySelector("._chicken_Section");
	const _down_Time_Leg = document.querySelector("._down_Time_Leg");
	const _soil_Background = document.querySelector("._soil_Background");
	// Chiken come rightward some pixels in right side afte docuent load sometime
	let clear_Interval_For_Startup_Functions;
	clear_Interval_For_Startup_Functions = setInterval(() => {
		_chicken_Section.style.left = "200px";
		_background.style.animationDuration = "4000s";
		clearInterval(clear_Interval_For_Startup_Functions);
	}, 2000);
	//Detect needble keys.
	let _chek_Key_Prseed_At_Cureent_Time = true;
	document.addEventListener("keydown", (_event) => {
		if (_chek_Key_Prseed_At_Cureent_Time == true && _event.key == "ArrowUp" && _play_Lollision_Music_One_Time == true) {
			_up();
		}
		if (_event.key == "ArrowDown" && _play_Lollision_Music_One_Time == true) {
			_key_Down_Time_Hiden_All_The_Chile_Element_Of_The_Parent_Chicken_Section();
		}
		_chek_Key_Prseed_At_Cureent_Time = false;
	});
	let _clear_Interval_Of_Down;
	let _clear_Interval_Of_up;
	let _pressd_Time_Up_And_Down_Speed = 500;
	document.addEventListener("keyup", (_event) => {
		if (_event.key == "ArrowUp" && _play_Lollision_Music_One_Time == true) {
			clearInterval(_clear_Interval_Of_Down);
			clearInterval(_clear_Interval_Of_up);
			_chicken_Section.style.top = "350px";
			_chicken_Front_Far.style.transform = "rotate(0deg)";
			_chicken_Back_Far.style.transform = "rotate(0deg)";
			_chicken_Head.style.transform = "rotate(0deg)";
			if (_play_Lollision_Music_One_Time == true) {
				_chicken_Leg_2.style.animationDuration = "0.5s";
				_chicken_Leg_1.style.animationDuration = "0.5s";
			}
		}
		if (_event.key == "ArrowDown") {
			_key_Up_Time_Visible_All_The_Chile_Element_Of_The_Parent_Chicken_Section();

		}
		_chek_Key_Prseed_At_Cureent_Time = true;
	});
	// Before 8s speed.
	_background.style.animationDuration = "4000s";
	_soil_Background.style.animationDuration = "4000s";
	_chicken_Leg_1.style.animationDuration = "0.4s";
	_chicken_Leg_2.style.animationDuration = "0.4s";
	_down_Time_Leg.style.animationDuration = "0.4s";
	document.querySelector("._cactus_Container").style.animationDuration = "20s";
	document.querySelector("._cactus_Container2").style.animationDuration = "20s";
	// Increase speed.
	let _speed_Of_Background = 4000;
	let _speed_Of_Soil_Background = 4000;
	let _speed_Of_Wave = 20;
	let _speed_Of_The_Chicken_Leg = 0.4;
	let _speed_For_Cactus = 10;
	let _terminate_Speed_Controlar_Interval = setInterval(() => {
		if (_speed_Of_Background > 500) {


			// Speed for blurd background.
			_speed_Of_Background -= 500;
			_background.style.animationDuration = `${_speed_Of_Background}s`;
			// Speed for soil background.
			_speed_Of_Soil_Background -= 300;
			_soil_Background.style.animationDuration = `${_speed_Of_Soil_Background}s`;
			// Speed for see's wave 
			_speed_Of_Wave -= 2;
			_wave.style.animationDuration = `${_speed_Of_Wave}s`;

		}

		// Speed for chicken's legs.
		if (_speed_Of_The_Chicken_Leg > 0.2) {
			_speed_Of_The_Chicken_Leg -= 0.02;
			_chicken_Leg_1.style.animationDuration = `${_speed_Of_The_Chicken_Leg}s`;
			_chicken_Leg_2.style.animationDuration = `${_speed_Of_The_Chicken_Leg}s`;
			_down_Time_Leg.style.animationDuration = `${_speed_Of_The_Chicken_Leg}s`;
		}
		_speed_For_Cactus--;
		if (_speed_For_Cactus == 2) {
			document.querySelector("._cactus_Container").style.animationDuration = `${_speed_For_Cactus}s`;
			document.querySelector("._cactus_Container2").style.animationDuration = `${_speed_For_Cactus}s`;
		}
		if (_speed_Of_Background == 500 && _speed_Of_The_Chicken_Leg < 0.2) {
			clearInterval(_terminate_Speed_Controlar_Interval);
		}
	}, (8 * 1000));
	// Collision section.
	let _cactus_Container;
	let _a_Random_Number_Between_1_To_3;
	let _play_Lollision_Music_One_Time = true;
	let _cactus_Container2;

	function _collision_Detection() {
		_cactus_Container = document.querySelector("._cactus_Container").getBoundingClientRect();
		_cactus_Container2 = document.querySelector("._cactus_Container2").getBoundingClientRect();
		// Chicken section
		if (!((_chicken_Section.getBoundingClientRect().right < _cactus_Container.left) || (_chicken_Section.getBoundingClientRect().left > _cactus_Container.right) || (_chicken_Section.getBoundingClientRect().bottom < _cactus_Container.top))) {
			if (_play_Lollision_Music_One_Time == true) {
				_collision_Music.play();
				_play_Lollision_Music_One_Time = false;
				document.querySelector("._cactus_Container").style.left = `${_cactus_Container.left}px`;
				document.querySelector("._chicken_Section").style.top = `${_chicken_Section.getBoundingClientRect().top}px`;
				document.querySelector("._cactus_Container2").style.left = `${_cactus_Container2.left}px`;
				setInterval(() => {
					javascript: location.reload(true)
				}, 3 * 1000);

			}
			_background.style.animationDuration = "0s";
			_soil_Background.style.animationDuration = "0s";
			_chicken_Leg_1.style.animationDuration = "0s";
			_chicken_Leg_2.style.animationDuration = "0s";
			_down_Time_Leg.style.animationDuration = "0s";
			document.querySelector("._cactus_Container").style.animationDuration = "0s";
			document.querySelector("._cactus_Container2").style.animationDuration = "0s";
			clearInterval(_terminate_Speed_Controlar_Interval);
			clearInterval(_your_Score_Terminator);
			_background_Music.pause();
		}
		// Chicken section 2.
		if (!((_chicken_Section.getBoundingClientRect().right < _cactus_Container2.left) || (_chicken_Section.getBoundingClientRect().left > _cactus_Container2.right) || (_chicken_Section.getBoundingClientRect().bottom < _cactus_Container2.top))) {
			if (_play_Lollision_Music_One_Time == true) {
				_collision_Music.play();
				_play_Lollision_Music_One_Time = false;
				document.querySelector("._cactus_Container2").style.left = `${_cactus_Container2.left}px`;
				document.querySelector("._cactus_Container").style.left = `${_cactus_Container.left}px`;
				document.querySelector("._chicken_Section").style.top = `${_chicken_Section.getBoundingClientRect().top}px`;
				setInterval(() => {
					javascript: location.reload(true)
				}, 3 * 1000);
			}
			_background.style.animationDuration = "0s";
			_soil_Background.style.animationDuration = "0s";
			_chicken_Leg_1.style.animationDuration = "0s";
			_chicken_Leg_2.style.animationDuration = "0s";
			_down_Time_Leg.style.animationDuration = "0s";
			document.querySelector("._cactus_Container2").style.animationDuration = "0s";
			document.querySelector("._cactus_Container").style.animationDuration = "0s";
			clearInterval(_terminate_Speed_Controlar_Interval);
			clearInterval(_your_Score_Terminator);
			_background_Music.pause();
		}
		// console.log(_cactus_Container.left)
		if (_cactus_Container.left <= -220) {
			_a_Random_Number_Between_1_To_3 = Math.trunc((Math.random() * 4 + 1));
			if (_a_Random_Number_Between_1_To_3 == 1) {
				document.querySelector("._cactus_Container").style.background = "url(/assets/images/_cactus1.png)";
				document.querySelector("._cactus_Container").style.width = "122px";
			} else if (_a_Random_Number_Between_1_To_3 == 2) {
				document.querySelector("._cactus_Container").style.background = "url(/assets/images/_cactus2.png";
				document.querySelector("._cactus_Container").style.width = "95px";
			} else if (_a_Random_Number_Between_1_To_3 == 3) {
				document.querySelector("._cactus_Container").style.background = "url(/assets/images/_cactus3.png)";
				document.querySelector("._cactus_Container").style.width = "115px";
			} else {
				document.querySelector("._cactus_Container").style.background = "url(/assets/images/_cactus4.png)";
				document.querySelector("._cactus_Container").style.width = "60px";
			}
		}
		requestAnimationFrame(_collision_Detection);
	}
	_collision_Detection();
	let _count_Score = 1;
	let _compliment = document.querySelector("#_compliment");

	const _your_Score_Terminator = setInterval(() => {
		_count_Score++;
		document.querySelector("#_score").innerHTML = `${_count_Score}`
		if (_count_Score == 100) {
			_compliment.innerHTML = "Enjoy";
		} else if (_count_Score == 200) {
			_compliment.innerHTML = "Charm";
		} else if (_count_Score == 300) {
			_compliment.innerHTML = "Captivate";
		} else if (_count_Score == 400) {
			_compliment.innerHTML = "Terrific";
		} else if (_count_Score == 500) {
			_compliment.innerHTML = "Fantastic";
		} else if (_count_Score == 600) {
			_compliment.innerHTML = "Wonderful";
		} else if (_count_Score == 700) {
			_compliment.innerHTML = "Intrigue";
		} else if (_count_Score == 800) {
			_compliment.innerHTML = "";
		} else if (_count_Score == 900) {
			_compliment.innerHTML = "Perfect";
		} else if (_count_Score == 1000) {
			_compliment.innerHTML = "Hone";
		} else if (_count_Score == 1100) {
			_compliment.innerHTML = "Embrace";
		} else if (_count_Score == 1200) {
			_compliment.innerHTML = "Certainly";
		} else if (_count_Score == 1300) {
			_compliment.innerHTML = "Accomplishment";
		} else if (_count_Score == 1400) {
			_compliment.innerHTML = "Phenomenal";
		} else if (_count_Score == 1500) {
			_compliment.innerHTML = "Significant";
		} else if (_count_Score == 1600) {
			_compliment.innerHTML = "Substantial";
		} else if (_count_Score == 1700) {
			_compliment.innerHTML = "Substantive";
		} else if (_count_Score == 1800) {
			_compliment.innerHTML = "Integrity";
		} else if (_count_Score == 1900) {
			_compliment.innerHTML = "Credibility";
		} else if (_count_Score == 2000) {
			_compliment.innerHTML = "=reathtaking";
		}
		_highest_Score(_count_Score);
	}, 100);
	// Defined functions
	function _up() {
		// When bird will fly change some css property.
		if (_play_Lollision_Music_One_Time == true) {
			_chicken_Section.style.top = "150px";
			_chicken_Front_Far.style.transform = "rotate(50deg)";
			_chicken_Back_Far.style.transform = "rotate(-2deg)";
			_chicken_Head.style.transform = "rotate(8deg)";
			_chicken_Leg_2.style.animationDuration = "0s";
			_chicken_Leg_1.style.animationDuration = "0s";
			_down();
		}

	}

	function _down() {
		_clear_Interval_Of_Down = setInterval(() => {
			// When bird will come downward from after flyd change some css property.
			_chicken_Section.style.top = "350px";
			_chicken_Front_Far.style.transform = "rotate(0deg)";
			_chicken_Back_Far.style.transform = "rotate(0deg)";
			_chicken_Head.style.transform = "rotate(0deg)";
			// Because collisontime
			if (1 != 1) {
				_chicken_Leg_2.style.animationDuration = "0.5s";
				_chicken_Leg_1.style.animationDuration = "0.5s";
			}
			clearInterval(_clear_Interval_Of_Down);
			_clear_Interval_Of_up = setInterval(() => {
				_up();
				clearInterval(_clear_Interval_Of_up);
			}, _pressd_Time_Up_And_Down_Speed);
		}, _pressd_Time_Up_And_Down_Speed);

	}

	function _key_Down_Time_Hiden_All_The_Chile_Element_Of_The_Parent_Chicken_Section() {
		for (let _indx_Of_Child_Nodes = 0; _indx_Of_Child_Nodes < 7; _indx_Of_Child_Nodes++) {
			_all_The_Element_Under_Of_The_Chicken_Section.children[_indx_Of_Child_Nodes].style.visibility = "hidden";
		}
		_chicken_Section.style.background = "url(/assets/images/_chicken_Down.png)";
		_down_Time_Leg.style.background = "url(/assets/images/_chicken_Legs_Down_Time.png)";
	}

	function _key_Up_Time_Visible_All_The_Chile_Element_Of_The_Parent_Chicken_Section() {
		for (let _indx_Of_Child_Nodes = 0; _indx_Of_Child_Nodes < 7; _indx_Of_Child_Nodes++) {
			_all_The_Element_Under_Of_The_Chicken_Section.children[_indx_Of_Child_Nodes].style.visibility = "visible";
		}
		_chicken_Section.style.background = "none";
		_down_Time_Leg.style.background = "none";
	}
	// Highest score.
	// Highr score
	function _highest_Score(_count_Score) {
		if (!(localStorage.high_score)) {
			localStorage.setItem("high_score", 0);
		}else if (_count_Score > parseInt(localStorage.getItem("high_score"))) {
			localStorage.setItem("high_score", _count_Score);
		}
	}
	_play_Again = true;
}