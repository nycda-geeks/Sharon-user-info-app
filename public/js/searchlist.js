$ ( document ).ready( function () {
	console.log('dom is ready')

	var fireRequest = true

	$ ( '#searchlist' ).keyup (function (){
		var inputLetters = {
			userinput: $ ('#searchlist') .val( )
		}

		console.log(inputLetters)
		if(fireRequest) {
			fireRequest = false
			$.post ('/ajax', inputLetters, function(data){
				console.log(data)
				if(inputLetters.userinput){
					$('#people').empty()

					for (person in data){
						console.log(data[person].firstname)
						$ ( '#people' ).append( '<div class="DropDownOption newPerson">' + data[person].firstname + " " + 
							data[person].lastname + '</div>' )
					}
					$ ( '.newPerson' ) .click( function() { 
						$('#searchlist').val($(this).text()) 
						console.log($(this).text())
					})
				}
			})
			setTimeout(function(){
				fireRequest = true
			}, 300)
		}

	})

})