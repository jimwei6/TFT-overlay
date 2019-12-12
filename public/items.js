const HTEMPLATE = document.getElementById("h-tplt")
const VTEMPLATE = document.getElementById("v-tplt")

const HCLONE = HTEMPLATE.content.cloneNode(true)
const VCLONE = VTEMPLATE.content.cloneNode(true)

const ITEMS = require('../data/items.json')
const BASEITEMS = ITEMS[0].baseItems
const CPDITEMS = ITEMS[1].mainItems

const path = __dirname.replace("public", "resources/itemIcons")


//document.getElementById("info-bar").appendChild(VCLONE)

function initMain(item){
    var mImg = document.createElement('img')
    mImg.setAttribute("class", 'vitemIcon')
    mImg.src = path + "/" + item.name + '.png'

    VCLONE.getElementById('v-main').appendChild(mImg)    
}

function formItems(baseItem, baseItem2){
    if(baseItem2.itemNum < baseItem.itemNum)
    {
        forgedItem = CPDITEMS[baseItem2.itemNum][Math.abs(baseItem2.itemNum - baseItem.itemNum)]
    }
    else
    {
        forgedItem = CPDITEMS[baseItem.itemNum][baseItem2.itemNum - baseItem.itemNum]
    }
    return forgedItem.name

}

function initbldcmp(base){
    BASEITEMS.forEach(element => {
        var ndiv = document.createElement('div')
        
        var bImg = document.createElement('img')
        bImg.setAttribute("class", 'vitemIcon')
        bImg.src = path + "/" + element.name + '.png'

        var cpImg = document.createElement('img')
        cpImg.setAttribute("class", 'vitemIcon')
        cpImg.src = path + "/" + formItems(base, element) + '.png'

        ndiv.appendChild(bImg)
        ndiv.appendChild(cpImg)
        VCLONE.getElementById('v-bldcmp').appendChild(ndiv)
        
    });


    
}



initMain(BASEITEMS[0])
initbldcmp(BASEITEMS[0])
document.getElementById("info-bar").appendChild(VCLONE)
