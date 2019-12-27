const INFO = require('../data/roe-comps.json')
const ORIGIN = INFO[0].elements
const HTEMPLATE = document.getElementById("hclass-tmplt")
const HCLONE = HTEMPLATE.content.cloneNode(true)

const VTEMPLATE = document.getElementById("vclass-tmplt")
const VCLONE = VTEMPLATE.content.cloneNode(true)

const path = __dirname.replace("public", "resources/champIcons")



function vinitTab(){
    ORIGIN.forEach(element=> {
        var div = document.createElement('div')
        var btn = document.createElement('button')

        btn.setAttribute("class", "vtablinks")
        btn.style.backgroundImage = element.url
        btn.style.backgroundColor = "black"
        btn.addEventListener('click', function(){
            
            // Declare all variables
            var i, tabcontent;
           
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("vtabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                
            }
        
           // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("vtablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById("v" + element.name).style.display = "block";
            evt.currentTarget.className += " active";
            
        
    })
        div.appendChild(btn)
        VCLONE.getElementById("vtab").appendChild(div)
    })
    
}

function vinitContent(){
    ORIGIN.forEach(element => {
        var vdiv = document.createElement('div')
        vdiv.setAttribute("id", "v" + element.name)
        vdiv.setAttribute("class", "vtabcontent")

        element.champions.forEach(champ => {
            var div = document.createElement('div')
            var vimg = document.createElement('img')
            vimg.setAttribute('class', 'vchampIcon')
            vimg.src = path + '/' + champ + '.png'
            div.appendChild(vimg)
            vdiv.appendChild(div)
        })
        VCLONE.getElementById("vtab-content").appendChild(vdiv)
    })
  
}

function hinitTab(){
//add buttons and settings based on how many classes
    ORIGIN.forEach(element => {
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
                document.getElementById("h" + element.name).style.display = "block";
                evt.currentTarget.className += " active";
                
            
        })


        btn.style.backgroundImage = element.url
        btn.style.backgroundColor = "black"
       
        HCLONE.getElementById("htab").appendChild(btn)

    });
    
}

function hinitContent(){
    ORIGIN.forEach(element => {
        var vdiv = document.createElement('div')
        vdiv.setAttribute("id", "h" + element.name)
        vdiv.setAttribute("class", "htabcontent")

        element.champions.forEach(champ =>{
            var vimg = document.createElement('img')
            vimg.setAttribute('class', 'hchampIcon')
            vimg.src = path + '/' + champ + '.png'
            vdiv.appendChild(vimg)
        })
  
    HCLONE.getElementById("htab-content").appendChild(vdiv)
    })
}

hinitContent()

hinitTab()
document.getElementById("hinfo").appendChild(HCLONE)


vinitContent()
vinitTab()

document.getElementById("vinfo").appendChild(VCLONE)
 


if(window.innerWidth < window.innerHeight){
    document.getElementById("hinfo").style.display = "none"
}
else{
    document.getElementById("vinfo").style.display = "none"
}