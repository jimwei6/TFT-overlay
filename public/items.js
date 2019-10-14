// <!-- <svg id="overlay">
// <line id="line1" style="stroke:white; stroke-width:2"></line>
// </svg>

// <h1 class="nameDisplay">testing</h1>

// <div class="mainItem">
// <img id="firstDiv" class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>

// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div>
// <div class="subItem">
// <img id="lastDiv" class="itemIcon" src="../resources/itemIcons/B._F._Sword.png">
// </div> -->
/* <div class="row">
<div class="col-20" id="B._F._Sword">     
</div>
<div class="col-20" id="Recurve_Bow">
    </div>
<div class="col-20">
    <h1 class="nameDisplay" id="Needlessly_Large_Rod">testing</h1>
    </div>
<div class="col-20">
    <h1 class="nameDisplay" id="Tear_of_the_Goddess">testing</h1>
    </div>
<div class="col-20">
    <h1 class="nameDisplay" id="Chain_Vest">testing</h1>
    </div>
</div>

<div class="row">
<div class="col-3">
    <h1 class="nameDisplay" id="Negatron_Cloak">testing</h1>
    </div>
<div class="col-3">
    <h1 class="nameDisplay" id="Giant's_Belt">testing</h1>
    </div>
<div class="col-3">
    <h1 class="nameDisplay" id="Spatula">testing</h1>
</div>
<div class="col-3">
    <h1 class="nameDisplay" id="Sparring_Gloves">testing</h1>
</div>

</div> */

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
/* <img src="../resources/itemIcons/B._F._Sword.png" style="float:left">
<svg width="50%" height="2vh">
    <line x1="0" y1="1vh" x2="50%" y2="1vh" class="lines"></line>
</svg>
 <img src="../resources/itemIcons/B._F._Sword.png" style="float:right"> */

 function connetSubs(){
    
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

//decides which item is formed based on number and matrix in items.json
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
    subDiv.appendChild(connetSubs())
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


// <!-- <script>

//         document.getElementById("testMessage").innerHTML = "test started"
//         var icon = $(".itemIcon")
//         var LINE = require('./lines.js')
              
//         function manageLines(){

            
            
            
//             var div1 = $('#firstDiv');
//             var div2 = $('#lastDiv');

//             var div3 = $('#firstDiv2');
//             var div4 = $('#lastDiv2');

//             var line1r = new LINE.itemLines(div1.offset().left, div1.offset().top, div1.offset().left, div2.offset().top, $('#line1'))
//             var line2r =new LINE.itemLines(div3.offset().left, div3.offset().top, div3.offset().left, div4.offset().top, $('#line2'))

//             var loil = [line1r, line2r, "empty"]

//             LINE.renderLines(loil);
            
           
           

    


//         }
//     //    manageLines()


//     </script> -->
    