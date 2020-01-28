var passid;
var $ = require("jQuery")

$("body *").click(function(event) {
	$("#tableContext").css({
		"visibility": 'hidden',
		"transition": '1'
	});
});

$('#contextDL').click(function(event) {
	console.log(passid)
});


$("tr:not(:first)").contextmenu(function(e) {
	e.preventDefault();
	var tableHeight  = $ ('#mcontainer').height() - e.pageY;
	console.log(tableHeight)
	var x = e.pageX;
    var y = tableHeight >= 15 ? e.pageY : (e.pageY-40) ;
    $("#tableContext").css({
    	"left": x,
    	"top": y,
    	"visibility": "visible"
    }).attr('opened', '1');
    passid = $(this).find('td:first').text()
})

$("#menuLoad").click(function(event) {
	dialog = $('dialog#openfile')
	dialog.attr('open',1)

});