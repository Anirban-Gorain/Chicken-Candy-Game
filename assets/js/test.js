let _speed_Control_Animation_Clear_7s;
_speed_Control_Animation_Clear_7s = setInterval(() => {
	_background.style.animationDuration = "3500s";
	_wave.style.animationDuration = "18s";
	_soil_Background.style.animationDuration = "3800s";
}, 7000);
let _speed_Control_Animation_Clear_15s;
_speed_Control_Animation_Clear_15s = setInterval(() => {
	clearInterval(_speed_Control_Animation_Clear_7s);
	_background.style.animationDuration = "3000s";
	_wave.style.animationDuration = "16s";
	_soil_Background.style.animationDuration = "3400s";
}, 15000);
let _speed_Control_Animation_Clear_20s;
_speed_Control_Animation_Clear_20s = setInterval(() => {
	clearInterval(_speed_Control_Animation_Clear_15s);
	_background.style.animationDuration = "2500s";
	_wave.style.animationDuration = "14s";
	_soil_Background.style.animationDuration = "3000s";
}, 20000);
let _speed_Control_Animation_Clear_25s;
_speed_Control_Animation_Clear_25s = setInterval(() => {
	clearInterval(_speed_Control_Animation_Clear_20s);
	_background.style.animationDuration = "2000s";
	_wave.style.animationDuration = "12s";
	_soil_Background.style.animationDuration = "1500s";
}, 25000);
let _speed_Control_Animation_Clear_30s;
_speed_Control_Animation_Clear_30s = setInterval(() => {
	clearInterval(_speed_Control_Animation_Clear_25s);
	_background.style.animationDuration = "1500s";
	_wave.style.animationDuration = "10s";
	_soil_Background.style.animationDuration = "1200s";
}, 30000);
let _speed_Control_Animation_Clear_40s;
_speed_Control_Animation_Clear_40s = setInterval(() => {
	clearInterval(_speed_Control_Animation_Clear_30s);
	_background.style.animationDuration = "1000s";
	_wave.style.animationDuration = "8s";
	_soil_Background.style.animationDuration = "1000s";
	clearInterval(_speed_Control_Animation_Clear_40s);
}, 40000);