// 引入顏色

var picker = {
container: document.getElementById("picker"),
sample: document.getElementsByClassName("sample")
// sample: document.getElementById("sample")
};

var colors = {
h: 15,
s: 80,
l: 30,
textColor: function() {
    return this.l > 42 ?
    "black" :
    "white";
},
hueValue: function() {
    return Math.floor(this.h);
},
satValue: function() {
    return Math.floor(this.s) + "%";
},
lumValue: function() {
    return Math.floor(this.l) + "%";
},
getHSLString: function() {
    return "hsl(" + [
    colors.hueValue(),
    colors.satValue(),
    colors.lumValue()
    ].join(", ") + ")";
},
getHueLumString: function() {
    return "hsl(" +
    colors.hueValue() + ", 100%, " +
    colors.lumValue() + ")";
},
getHueSatString: function() {
    return "hsl(" +
    colors.hueValue() + ", " +
    colors.satValue() + ", 50%)";
}
};

picker.sliders = Array.from(
picker.container.querySelectorAll("input[type='range']")
);

picker.sliders.forEach(function(p, i) {
p.addEventListener("input", handleSliderChange);
initSlider(p);
});

function handleSliderChange() {
var sliderType = this.id.split("hsl-")[1];
if(sliderType === "h") {
    colors.h = this.value;
} else if(sliderType === "s") {
    colors.s = this.value;
} else if(sliderType === "l") {
    colors.l = this.value;
}
updateColors();
}

function fixChromeRepaintIssue(event) {
var updateable = picker.sliders;
if(event.type !== "mouseup") {
    updateable = picker.sliders.filter(function(el) {
    return el !== event.target;
    });
}
updateable.forEach(forceRepaint)
}

function forceRepaint(element) {  
element.style.display='none';
element.offsetHeight;
element.style.display='';
}

function updateColors() {
picker.sliders.forEach(updateColor);
}

function updateColor(color) {
picker.sliders[0].style.color = colors.getHSLString();
picker.sliders[1].style.color = colors.getHueLumString();
picker.sliders[2].style.color = colors.getHueSatString();
// picker.sample[0].style.backgroundColor = colors.getHSLString();
// picker.sample.setAttribute('fill',colors.getHSLString());
var leng=picker.sample.length;

picker.sample[0].style.backgroundColor = colors.getHSLString();
 for(i=1;i<leng;i++){
    picker.sample[i].style.fill=colors.getHSLString();
 };

 for(i=0;i<leng;i++){
    picker.sample[i].innerHTML = getColorValuesHTML();
 };
}

function getColorValuesHTML() {
return [
    "<div class=\"" + colors.textColor() + "\">",
    [
    colors.getHSLString(),
    window.getComputedStyle(picker.sliders[0]).color
    ].join("</div><div class=\"" + colors.textColor() + "\">"),
    "</div>"
].join("");
}


function initSlider(s) {
if(s.id==="hsl-h") {
    s.value = colors.h;
} else if(s.id ==="hsl-s") {
    s.value = colors.s;
} else if(s.id ==="hsl-l") {
    s.value = colors.l;
}



updateColors();
}
