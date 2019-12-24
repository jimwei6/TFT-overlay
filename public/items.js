const HTEMPLATE = document.getElementById("h-tplt")
const VTEMPLATE = document.getElementById("v-tplt")

const HCLONE = HTEMPLATE.content.cloneNode(true)
const VCLONE = VTEMPLATE.content.cloneNode(true)

const ITEMS = require('../data/items.json')
const BASEITEMS = ITEMS[0].baseItems
const CPDITEMS = ITEMS[1].mainItems

const path = __dirname.replace("public", "resources/itemIcons")


//document.getElementById("info-bar").appendChild(VCLONE)

function vinitMain(item){
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


function vinitbldcmp(base){
    BASEITEMS.forEach(element => {
        var ndiv = document.createElement('div')
        
        var bImg = document.createElement('img')
        bImg.setAttribute("class", 'vitemIcon')
        bImg.src = path + "/" + element.name + '.png'

        bImg.addEventListener('click', function(){
            document.getElementById("v-main").firstChild.src = bImg.src
            var i = 0
            document.getElementById("v-bldcmp").childNodes.forEach(n => {
                n.lastChild.src = path + "/" + formItems(element, BASEITEMS[i]) + '.png'
                i++
            })
        })

        var cpImg = document.createElement('img')
        cpImg.setAttribute("class", 'vitemIcon')
        cpImg.src = path + "/" + formItems(base, element) + '.png'

        ndiv.appendChild(bImg)
        ndiv.appendChild(cpImg)
        VCLONE.getElementById('v-bldcmp').appendChild(ndiv)
        
    });


    
}

function hinitMain(item){
    var mImg = document.createElement('img')
    mImg.setAttribute("class", "hitemIcon")
    mImg.src = path + "/" + item.name + '.png'
    HCLONE.getElementById("h-main").appendChild(mImg)

}
function hinitSub(){
    BASEITEMS.forEach(element => {
        var bImg = document.createElement('img')
        bImg.setAttribute("class", 'hitemIcon')
        bImg.src = path + "/" + element.name + '.png'
        bImg.addEventListener('click', function(){
            document.getElementById("h-main").firstChild.src = bImg.src
            var i = 0
            document.getElementById("h-cmp").childNodes.forEach(n => {
                n.src = path + "/" + formItems(element, BASEITEMS[i]) + '.png'
                i++
            })
        })
        HCLONE.getElementById('h-build').appendChild(bImg)
    })
}
function hinitbldcmp(base){
    BASEITEMS.forEach(element => {
        var cpImg = document.createElement('img')
        cpImg.setAttribute("class", 'hitemIcon')
        cpImg.src = path + "/" + formItems(base, element) + '.png'
        HCLONE.getElementById('h-cmp').appendChild(cpImg)
    })
}

vinitMain(BASEITEMS[0])
vinitbldcmp(BASEITEMS[0])
document.getElementById("vinfo").appendChild(VCLONE)


hinitMain(BASEITEMS[0])
hinitSub()
hinitbldcmp(BASEITEMS[0])
document.getElementById("hinfo").appendChild(HCLONE)

if(window.innerWidth < window.innerHeight){
    document.getElementById("hinfo").style.display = "none"
}
else{
    document.getElementById("vinfo").style.display = "none"
}