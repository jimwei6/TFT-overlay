
/// line is one of:
// - (line start x, line start y, line end x, line end y)
// interp. the beginning and ending on a line
exports.itemLines = class itemLines{

    constructor(Sx, Sy, Ex, Ey, hl){

        this.startX = Sx;
        this.startY = Sy;
        this.endX = Ex;
        this.endY = Ey;
        this.id = hl;

    }
}


function renderRec(loil){
   
    if(loil[0] == "empty"|| loil[0] == undefined)
    {
        
        document.getElementById("testMessage").innerHTML = "broke out from nr"
        return

    }
    else
    {
        
       loil[0].id
            .attr('x1', (loil[0].startX + 0.5* parseFloat(icon.css('width'))))
            .attr('y1', (loil[0].startY + parseFloat(icon.css('height'))))
            .attr('x2', (loil[0].endX + 0.5* parseFloat(icon.css('width'))))
            .attr('y2', (loil[0].endY + 0.5 * parseFloat(icon.css('height'))))
            

        renderRec(loil.splice(1))
        
    }
}

exports.renderLines = function(loil){
    
    renderRec(loil)
    
}

// function getAllLines(){


// }
