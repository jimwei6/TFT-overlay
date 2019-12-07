const HTEMPLATE = document.getElementById("h-tmplt")
const VTEMPLATE = document.getElementById("v-tmplt")

const HCLONE = HTEMPLATE.content.cloneNode(true)
const VCLONE = VTEMPLATE.content.cloneNode(true)

const ITEMS = require('../data/items.json')
const BASEITEMS = ITEMS[0]
const CPDITEMS = ITEMS[1]

const path = __dirname.replace("public", "resources/itemIcons")

document.getElementById("info-bar").appendChild(HCLONE)
//document.getElementById("info-bar").appendChild(VCLONE)

function initMain(){
    var mImg = document.createElement('img')
    mImg.setAttribute("class", 'itemIcon')
    mImg.src = path + "/" +
    
    var subImg = document.createElement('img')
    subImg.setAttribute("class", 'itemIcon')
    subImg.src =

    var subImg2 = document.createElement('img')
    subImg2.setAttribute("class", 'itemIcon')
    subImg2.src = 
    
}

HCLONE.getElementById("hmain").appendChild(