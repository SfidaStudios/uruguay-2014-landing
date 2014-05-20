$(function(){

    $(window).on('resize orientationchange', resizer);
    resizer();
});

function resizer()
{
    // Tomamos el tamaño del viewport
    var viewSize = $("body").width();
    
    // Calculamos el tamaño ideal de la fuente
    var fontSize = Math.max(Math.min(viewSize, 1100), parseFloat(500));
    $("#big-uruguay div").css("font-size", fontSize);
    $("#big-sfida div").css("font-size", fontSize);
    
    var biguruSize = $("#big-uruguay div").width();
    var bigsfidaSize = $("#big-sfida div").width();
    

    $("#big-uruguay")
    .css({ overflow: "hidden", width: "100%", height: "100%" })
    .find("div")
    .css({ width: biguruSize });

    $("#big-sfida")
    .css({ overflow: "hidden", width: "100%", height: "100%" })
    .find("div")
    .css({ width: bigsfidaSize });

    animaticUruguay(biguruSize);
    animaticSfida(bigsfidaSize);
}


function animaticUruguay(biguruSize)
{
    $("#big-uruguay div").css({ left: 0 });
    $("#big-uruguay div").animate({ left: -(biguruSize/2) }, 40000, "linear", function(){ animaticUruguay(); });
}

function animaticSfida(bigsfidaSize)
{
    $("#big-sfida div").css("left", -(bigsfidaSize/2));
    $("#big-sfida div").animate({ left: 0 }, 60000, "linear", function(){ animaticSfida(); });
}