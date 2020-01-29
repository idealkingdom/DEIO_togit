var passid
var $ = require('jquery')

$(document).ready(function() {
var input;	
async function loadProject(){
		var bool,data,innerhtml;
		input = $("x-input#loadprojectID").val()
		input =='' ? alert("Must input valid project path+ID") : bool=1;
		if (bool) {
			data = await getFiles(input)
			data = data.data
			innerhtml = ''
			for (var i = 0; i < data.length; i++) {
				innerhtml+=`<tr><td>${data[i].filename}</td>
							<td>${data[i].size}kb</td>
							<td>${data[i].modified}</td></tr>`
			}
			$('table#files tbody').html(innerhtml)
			$("table#files tr:not(:first)").contextmenu(function(e) {
					e.preventDefault();
					var tableHeight  = $ ('#mcontainer').height() - e.pageY;
					var x = e.pageX;
    				var y = tableHeight >= 15 ? e.pageY : (e.pageY-40) ;
    				$("#tableContext").css({
    					"left": x,
    					"top": y,
    					"visibility": "visible"
    				}).attr('opened', '1');
    				passid = $(this).find('td:first').text()
			});
		}
}

$("#cancelfilebutton").click(function(event) {
	$('#openfile').removeAttr('open')
});

$('#contextDL').click(function(event) {
	input = $("x-input#loadprojectID").val()
	downloadF(input,passid)
});

$("#menuLoad").click(function(event) {
	dialog = $('dialog#openfile')
	dialog.attr('open',1)

});


$('#loadfileokbutton').on('click', function(event) {
	event.preventDefault();
	loadProject();
});





});