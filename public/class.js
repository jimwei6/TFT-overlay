const INFO = require('../data/roe-comps.json')
const CLASS = INFO[1].class
const CTEMPLATE = document.getElementById("hclass-tmplt")
const CLONE = CTEMPLATE.content.cloneNode(true)

const path = __dirname.replace("public", "resources/champIcons")


function initTab(){
//add buttons and settings based on how many classes
    CLASS.forEach(element => {
        var btn = document.createElement('button')
        
        btn.setAttribute("class", "htablinks")
       
        btn.addEventListener('click', function(){
            
                // Declare all variables
                var i, tabcontent;
               
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("htabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                    
                }
            
               // Get all elements with class="tablinks" and remove the class "active"
                tablinks = document.getElementsByClassName("htablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
            
                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(element.name).style.display = "block";
                evt.currentTarget.className += " active";
                
            
        })


        btn.style.backgroundImage = element.url
        btn.style.backgroundColor = "black"
       
        CLONE.getElementById("htab").appendChild(btn)

    });
    
}

function initContent(){
    CLASS.forEach(element => {
        var vdiv = document.createElement('div')
        vdiv.setAttribute("id", element.name)
        vdiv.setAttribute("class", "htabcontent")

        element.champions.forEach(champ =>{
            var vimg = document.createElement('img')
            vimg.setAttribute('class', 'hchampIcon')
            vimg.src = path + '/' + champ + '.png'
            vdiv.appendChild(vimg)
        })
  
    CLONE.getElementById("htab-content").appendChild(vdiv)
    })
}

initContent()

initTab()

document.getElementById("info-bar").appendChild(CLONE)
 


