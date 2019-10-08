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

var itemsPath = __dirname.replace("public", "resources/itemIcons")

var itemsTemp = document.getElementsByTagName("template")[2]
var itemsClone = document.importNode(itemsTemp.content, true)

var MAINITEMS = ["B._F._Sword", "Recurve_Bow", "Needlessly_Large_Rod", "Tear_of_the_Goddess", "Chain_Vest", "Negatron_Cloak", "Giant's_Belt", "Sparring_Gloves", "Spatula"]

for(var i = 0; i < MAINITEMS.length; i++){

    var title = document.createElement('h1')
    title.innerHTML = MAINITEMS[i]
    title.setAttribute("class", "nameDisplay")
    itemsClone.getElementById(MAINITEMS[i]).appendChild(title)

    var div = document.createElement('div')
    div.setAttribute('class', 'mainItem')

    var img = document.createElement('img')
    img.setAttribute('class', 'itemIcon')
    img.src = itemsPath + "/" + MAINITEMS[i] +".png"

    div.appendChild(img)
    itemsClone.getElementById(MAINITEMS[i]).appendChild(div)

    for(var x = 0; x < MAINITEMS.length; x++){
        var subDiv = document.createElement('div')
        subDiv.setAttribute('class', 'subItem')

        var subImg = document.createElement('img')
        subImg.setAttribute('class', 'itemIcon')
        subImg.src = itemsPath  + "/" + MAINITEMS[x] +".png"
        subImg.style.cssFloat = "left"
        
       
        var addImg = document.createElement('img')
        addImg.setAttribute('class', 'itemIcon')
        addImg.style.cssFloat ="right"
        addImg.src = itemsPath + "/" + MAINITEMS[i] + ".png"
        

        subDiv.appendChild(subImg)
        subDiv.appendChild(addImg)
        itemsClone.getElementById(MAINITEMS[i]).appendChild(subDiv)
    }
    
}

document.body.appendChild(itemsClone)
