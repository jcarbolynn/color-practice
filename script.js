// checking that IT IS LINKED!!
// document.body.style.backgroundColor = "red";
// document.body.style.color = "purple";
// document.getElementById("red").style.color = "blue";
// document.getElementById('#blue').style.color = "purple";

// querySelector('h1').italics();
// document.getElementByClassName("color-title").style.fontStyle = "italic";
// document.getElementById("blue").style.fontStyle = "italic";

// var blue = getAverageRGB(document.getElementById("blue"));
// document.body.querySelector("#blue").style.color = "red";
// document.getElementById("blue").style.color = "red";
  
// 'rgb('+blue.r+','+blue.g+','+blue.b+')';


var img_color = getAverageRGB(document.getElementByClassName("color"));

document.body.style.backgroundColor = 'img_color('+img_color.r+','+img_color.g+','+img_color.b+')';


// http://jsfiddle.net/xLF38/818/
function getAverageRGB(imgEl) {

  var blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;

}
