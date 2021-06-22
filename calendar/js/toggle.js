const paragraph = document.querySelector(".paragraph");
const toggle_button = document.querySelector("#toggle");
const colorPicker = document.querySelector('#colorPicker');
const brandColor = "--brand_color";
const lightColor = "--light_color";
const darkColor = "--dark_color";

// immediate code to lighten the color
function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}


let close = 1;
toggle_button.addEventListener('click', () => {
    if(!close){
        paragraph.style.display = "block"
        close = 1;
    }else{
        paragraph.style.display = 'none';
        close = 0;
    }
})


colorPicker.addEventListener('change', ()=>{
    document.documentElement.style.setProperty(brandColor, colorPicker.value);
    document.documentElement.style.setProperty(lightColor, LightenDarkenColor(colorPicker.value, 40));
    document.documentElement.style.setProperty(darkColor, LightenDarkenColor(colorPicker.value, -20));

    document.querySelector('html').style.background = colorPicker.value;
})


