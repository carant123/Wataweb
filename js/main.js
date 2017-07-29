$(document).ready(function(){
	$("#bt_foto").click(function () {
		$(".tipo_video").show("slow");
		$(".tipo_foto").hide("slow");

		$("#bt_foto").removeClass("btn_galery_selected");
		$("#bt_foto").addClass("btn_galery");
		$("#bt_video").removeClass("btn_galery");
		$("#bt_video").addClass("btn_galery_selected");
	});

	$("#bt_video").click(function () {
		$(".tipo_video").hide("slow");
		$(".tipo_foto").show("slow");

		$("#bt_video").removeClass("btn_galery_selected");
		$("#bt_video").addClass("btn_galery");
		$("#bt_foto").removeClass("btn_galery");
		$("#bt_foto").addClass("btn_galery_selected");
		
	});

});

