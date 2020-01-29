var passid;
var $ = require("jQuery")

$("body *").click(function(event) {
	$("#tableContext").css({
		"visibility": 'hidden',
		"transition": '1'
	});
});


$("#cancelfilebutton").click(function(event) {
	$('#openfile').removeAttr('open')
});

$('#contextDL').click(function(event) {
	console.log(passid)
});



$("#menuLoad").click(function(event) {
	dialog = $('dialog#openfile')
	dialog.attr('open',1)

});