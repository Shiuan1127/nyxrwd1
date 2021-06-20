<SCRIPT language=JavaScript>
<!-- Begin

// 設定時間
var slideShowSpeed = 3000;

// 設定圖片 , 可隨意增加或減少
var Pic = new Array();
Pic[0] = '10.jpg'
Pic[1] = '14.jpg'
Pic[2] = '7-2.jpg'
Pic[3] = '10.jpg'


var t;
var j = 0;
var p = Pic.length;
var preLoad = new Array();
var crossFadeDuration = 3;
for (i = 0; i < p; i++) {
	preLoad[i] = new Image();
	preLoad[i].src = Pic[i];
}

function runSlideShow() {
	if (document.all) {
		document.images.SlideShow.style.filter="blendTrans(duration=2)";
		document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)";
		document.images.SlideShow.filters.blendTrans.Apply();
	}
	document.images.SlideShow.src = preLoad[j].src;

	if (document.all) {
		document.images.SlideShow.filters.blendTrans.Play();
	}
	
	j = j + 1;
	if (j > (p - 1)) j = 0;
		t = setTimeout('runSlideShow()', slideShowSpeed);
	}

// End -->
</SCRIPT>
// JavaScript Document