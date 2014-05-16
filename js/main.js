$(function(){

	$("#big-uruguay").fitText();
	$("#big-sfida").fitText();

	// Letraslocas
	var viewSize = $("body").width();
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

	animaticUruguay();
	animaticSfida();

	function animaticUruguay()
	{
		$("#big-uruguay div").css({ left: 0 });
		$("#big-uruguay div").animate({ left: -(biguruSize/2.1) }, 40000, "linear", function(){ animaticUruguay(); });
	}

	function animaticSfida()
	{
		$("#big-sfida div").css("left", -(bigsfidaSize/2.1));
		$("#big-sfida div").animate({ left: 0 }, 60000, "linear", function(){ animaticSfida(); });
	}

});
