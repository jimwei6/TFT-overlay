const HTEMPLATE = document.getElementById("h-tmplt")
const VTEMPLATE = document.getElementById("v-tmplt")

const HCLONE = HTEMPLATE.content.cloneNode(true)
const VCLONE = VTEMPLATE.content.cloneNode(true)

const ITEMS = require('../data/items.json')
const BASEITEMS = ITEMS[0]
const CPDITEMS = ITEMS[1]

const path = __dirname.replace("public", "resources/itemIcons")


//document.getElementById("info-bar").appendChild(VCLONE)

function initMain(item){
    var mImg = document.createElement('img')
    mImg.setAttribute("class", 'itemIcon')
    mImg.src = path + "/" + item.name + '.png'
    
    var subImg = document.createElement('img')
    subImg.setAttribute("class", 'itemIcon')
    subImg.src = path + "/" +  "B._F._Sword" + ".png"

    var subImg2 = document.createElement('img')
    subImg2.setAttribute("class", 'itemIcon')
    subImg2.src =  path + "/" + formItems(item, BASEITEMS[0]).name + '.png'

    HCLONE.getElementById('h-main').appendChild(mImg)
    HCLONE.getElementById('h-main').appendChild(subImg)
    HCLONE.getElementById('h-main').appendChild(subImg2)
    
}

function formItems(baseItem, baseItem2){
    if(subBaseItem.itemNum < baseItem.itemNum)
    {
        forgedItem = mainItems[baseItem2.itemNum][Math.abs(baseItem2.itemNum - baseItem.itemNum)]
    }
    else
    {
        forgedItem = mainItems[baseItem.itemNum][baseItem2.itemNum - baseItem.itemNum]
    }
    return forgedItem

}

initMain(BASEITEMS[0])
document.getElementById("info-bar").appendChild(HCLONE)