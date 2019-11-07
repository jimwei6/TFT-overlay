

const itemInfo = require("../data/items.json")

const baseItems = itemInfo[0].baseItems

const mainItems = itemInfo[1].mainItems

const LINE = require("./lines.js")

const svgNS = 'http://www.w3.org/2000/svg'

var itemsPath = __dirname.replace("public", "resources/itemIcons")

var itemsTemp = document.getElementsByTagName("template")[2]
var itemsClone = document.importNode(itemsTemp.content, true)

displaySheet(baseItems)
document.body.appendChild(itemsClone)




//display the whole sheet
function displaySheet(baseItems){

    baseItems.forEach(function(baseItem) {

        displayItemBlock(baseItem)
        
    });

}

function displayItemBlock(baseItem){

   
    displayTitle(baseItem)

    displayBaseItem(baseItem)

    baseItems.forEach(function(item) {

        displaySubsets(item, formItems(baseItem, item) , baseItem )

        
    });



}


 function connectSubs(){
    
    var svg = document.createElementNS(svgNS, 'svg')
    svg.setAttribute('width', "4vw")
    svg.setAttribute('height', "2vh")

    var line = document.createElementNS(svgNS, 'line')
    line.setAttribute('class', 'lines')
    line.setAttribute('x1', "0")
    line.setAttribute('y1', "2vh")
    line.setAttribute('x2', "4vw")
    line.setAttribute('y2', "2vh")

    svg.appendChild(line)

    return svg
 }

//decides which item is formed based on number and matrix pos in items.json
function formItems(baseItem, subBaseItem){

    if(subBaseItem.itemNum < baseItem.itemNum)
    {
        forgedItem = mainItems[subBaseItem.itemNum][Math.abs(subBaseItem.itemNum - baseItem.itemNum)]
    }
    else
    {
        forgedItem = mainItems[baseItem.itemNum][subBaseItem.itemNum - baseItem.itemNum]
    }

    return forgedItem

}


// take in base item  and main item to make a subset (item1 -> item 2)
// assume the base item and main item are preconfig. Append to template location
// where the 
 function displaySubsets(subBaseItem, mainItem, baseItem){
    var subDiv = document.createElement('div')
    subDiv.setAttribute('class', 'subItem')

    subDiv.appendChild(subImage(subBaseItem))
    subDiv.appendChild(connectSubs())
    subDiv.appendChild(subMainImage(mainItem))

    itemsClone.getElementById(baseItem.name).appendChild(subDiv)

 }




// take an item and make it a sub image. image is returned
 function subImage(SubBaseItem){

    var subImg = document.createElement('img')
    subImg.setAttribute('class', 'itemIcon')
    subImg.src = itemsPath  + "/" + SubBaseItem.name +".png"
    subImg.style.cssFloat = "left"

    return subImg
 }

 // take a mainitem and make it an image. image is returned
 function subMainImage(mainItem){

    var mainImg = document.createElement('img')
    mainImg.setAttribute('class', 'itemIcon')
    mainImg.style.cssFloat ="right"
    mainImg.src = itemsPath + "/" + mainItem.name + ".png"
    return mainImg
 }

// takes a single base item and create make it the Main item
function displayBaseItem(baseItem){
    
    var div = document.createElement('div')
    div.setAttribute('class', 'mainItem')

    var img = document.createElement('img')
    img.setAttribute('class', 'itemIcon')
    img.src = itemsPath + "/" + baseItem.name + ".png"
    
    div.appendChild(img)
    
    itemsClone.getElementById(baseItem.name).appendChild(div)
}

//takes a single base item and create a title (h1) for it
function displayTitle(baseItem){

    var title = document.createElement('h1')
    title.innerHTML = baseItem.name
    title.setAttribute("class", "nameDisplay")
    itemsClone.getElementById(baseItem.name).appendChild(title)

}



           
           

    

    