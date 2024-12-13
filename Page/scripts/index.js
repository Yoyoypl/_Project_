//------------
// VALUES
//------------
const icons_img_src_deafult = ['graphics/icons/icon_profile.png','graphics/icons/icon_heart.png','graphics/icons/icon_bag.png'];
const icons_img_src_animated_color = ['graphics/icons/icon_profile_2.png','graphics/icons/icon_heart_2.png','graphics/icons/icon_bag_2.png'];

const icons_img_header = document.querySelectorAll(".img_icon"); //obrazki w ikonach
const icons_header = document.querySelectorAll(".icon"); //ikony cale a

//------------
//FUNCTUIONS
//------------
function zmien_kolor_ikony(id_icon){
    icons_img_header[id_icon].src = icons_img_src_animated_color[id_icon];
}

function zmien_kolor_ikony_powrotny(id_icon){
    icons_img_header[id_icon].src = icons_img_src_deafult[id_icon]; // zmienia na powrtne ikony z czrnym kolorem
}
//------------
// MAIN SCRIPT 
//------------

icons_header.forEach((img,key)=>{
    img.addEventListener('mouseenter',() => {zmien_kolor_ikony(key)});
    img.addEventListener('mouseleave',() => {zmien_kolor_ikony_powrotny(key)})
})

//------------