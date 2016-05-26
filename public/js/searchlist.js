var fireRequest = true

$ ( document ).ready( function () {
	console.log('dom is ready')

	$ ( '#searchlist' ).on ( "keyup",function (){
		var inputLetters = {
			userinput: $ ('#searchlist') .val( )
		}
		$('#people').empty()
		console.log('oo')
		//if(inputLetters.userinput){
			if(fireRequest) {
				fireRequest = false
				$.post ('/result', inputLetters, function(data){
					//console.log(data)

					for (person in data){
						console.log(data[person].firstname)
						$ ( '#people' ).append( '<div class="newPerson">' + data[person].firstname + " " + 
							data[person].lastname + '</div>' )
					}
					$ ( '.newPerson' ) .click( function() { 
						$('#searchlist').val($(this).text()) 
						//console.log($(this).text())
					})
				})
				setTimeout(function(){
					fireRequest = true
				}, 300)
			}

		//}

})
})