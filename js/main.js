$(function(){

    $(window).on('resize orientationchange', resizer);
    resizer();
});

function resizer()
{
    // Tomamos el tamaño del viewport
    var viewSize = $("body").height();
    console.log(viewSize);
    // Calculamos el tamaño ideal de la fuente
//    var fontSize = Math.max(Math.min(viewSize, 800), 500);
    var fontSize = viewSize/1.51;
    $("#big-uruguay div").css("font-size", fontSize*1.5);
    $("#big-sfida div").css("font-size", fontSize/1.5);

    // Reset
     $("#big-uruguay")
    .css({ overflow: "auto" })
    .find("div")
    .css({ width: "auto", left: 0 });

    $("#big-sfida")
    .css({ overflow: "auto" })
    .find("div")
    .css({ width: "auto", left: 0 });
    
    // Tomamos datos
    var biguruSize = $("#big-uruguay div").width();
    var bigsfidaSize = $("#big-sfida div").width();
    
    // Reaplicamos
    $("#big-uruguay")
    .css({ overflow: "hidden" })
    .find("div")
    .css({ width: biguruSize });

    $("#big-sfida")
    .css({ overflow: "hidden" })
    .find("div")
    .css({ width: bigsfidaSize });

    animaticUruguay(biguruSize);
    animaticSfida(bigsfidaSize);
}

function animaticUruguay(biguruSize)
{
    $("#big-uruguay div").css({ left: 0 });
    $("#big-uruguay div").animate({ left: -(biguruSize/2) }, 40000, "linear", function(){ animaticUruguay(biguruSize); });
}

function animaticSfida(bigsfidaSize)
{
    $("#big-sfida div").css("left", -(bigsfidaSize/2));
    $("#big-sfida div").animate({ left: 0 }, 60000, "linear", function(){ animaticSfida(bigsfidaSize); });
}