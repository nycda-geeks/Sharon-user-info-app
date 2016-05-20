// --nieuwe js file maken en laden in search.jade
// readfile, parse
// in deze nieuwe js file een loop maken
// bij elke letter moet de loop doorlopen worden, om te zoeken naar een match met IndexOf
// dit wordt opgeslagen in een variabele
// wanneer er een letter bij komt, moet de variabele overschreven worden
// variabele: bij eerste letter: eerst alle voornamen, dan achternamen
// variabele: bij tweede letter: overschrijft variabele, zoekt combinatie eerste en tweede letter

// laad jquery in jade file
// de informatie in de variabele moet worden geladen onder de search bar met jquery
// voor en achternaam displayen bij zoekresultaten
// onclick - alle resultaten
// bij eerste letter: eerst alle voornamen, dan achternamen
// bij tweede letter: overschrijft variabele, zoekt combinatie eerste en tweede letter

// later; case sensitive, bold zoekletter, css opmaak


// --document ready
// --make variable with empty array
// --read what is typed - keyup()
// loop through each name
// if IndexOf (keyup) has a match - save name in array variable


$ ( document ).ready( function () {
	console.log('dom is ready')


	var fireRequest = true

	$ ( '#searchfield' ).keyup (function (){
		var inputLetters = {
			userinput: $ ('#searchfield') .val( )
		}
		console.log(inputLetters)
	


		if(inputLetters.userinput){

		if(fireRequest) {
			fireRequest = false

			$.post ('/ajax', inputLetters, function(data){

				console.log(data)
				$('#displayname').empty()
				$('#displaylist').empty()

				for (person in data){

					$ ( '#displayname' ).append( '<option>' + data[person].firstname + " " + 
						data[person].lastname + '</option>' )

					$ ( '#displaylist' ).append( '<option>' + data[person].firstname + " " + 
						data[person].lastname + '</option>' )

					$ ( 'option' ) .click( function() {
						$('#searchfield').val($(this).val())
					})
					
				}
			})
		}
		setTimeout(function(){
			fireRequest = true
		}, 300)

	}

	})

})


