$(function(){
    $(window).on('resize orientationchange', resizer);
    resizer();

    // Android?
    var NastyBrowserSniffing =
    {
        ua: navigator.userAgent.toLowerCase(),
        init: function()
        {
            var isAndroid = NastyBrowserSniffing.ua.indexOf("android") > -1;
            //Wops ABORT
            if (isAndroid) {
                $("#big-uruguay div,#big-sfida div")
                .css("background", "none");
            }
        }
    };
    NastyBrowserSniffing.init();
    
});

$("document").ready(function()
{
    $("body")
    .find(".main section.options article")
    .each(function(e){
        var that = this;
        setTimeout(function(){
            $(that)
            .removeClass("hidden")
            .addClass("animated fadeInUp");
        }, (e+1)*200);
    });
    
    setTimeout(function() {
        $(".main-container .logo")
        .removeClass("hidden")
        .addClass(" animated flip");
    }, 900);
    
    setTimeout(function() {
        $(".footer-container")
        .removeClass("hidden")
        .addClass("animated fadeInUp");
    }, 1000);
});

function resizer()
{
    // Tomamos el tamaño del viewport
    var viewSize = $("body").height();
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
    .css({ width: biguruSize })
    .find("div")
    .css({ width: biguruSize });

    $("#big-sfida")
    .css({ overflow: "hidden" })
    .css({ width: bigsfidaSize })
    .find("div")
    .css({ width: bigsfidaSize });

//    animaticUruguay(biguruSize);
//    animaticSfida(bigsfidaSize);
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