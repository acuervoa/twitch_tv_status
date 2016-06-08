$(document).ready(function(){

	var usersNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", 
							"noobs2ninjas", "terakilobyte", "thomasballinger",,"beohoff","brunofin","comster404",
							"test_channel",	"sheevergaming","TR7K"];
	
	var apiRequest = function() { 
		usersNames.forEach(function(userName){

			var streamStatus;
				
			 $.getJSON('https://api.twitch.tv/kraken/streams/' + userName + "?callback=", function(data) {
			 	console.log(data);

			 	if (data.stream === null) {
					streamStatus = 'offline';
				} else if (data.stream === undefined) {
					streamStatus = 'undefined';
				} else {
					streamStatus = 'online';
				}
			});
				
			$.getJSON('https://api.twitch.tv/kraken/channels/' + userName  + "?callback=", function(data) {
				
				//console.log(data);

				var codeHTML = '<tr>';

				codeHTML += '<td class="' + ( streamStatus !== 'undefined' ? streamStatus : '') + '">' ;
				codeHTML += data.display_name;
				codeHTML += '</td>';

				codeHTML += '<td>';

				codeHTML += '<img src="' + data.logo + '" class="logo" />'
				codeHTML += '</td>';

				codeHTML += '<td class="' + ( streamStatus !== 'undefined' ? streamStatus : '') + '">' ;
				codeHTML += data.display_name;
				codeHTML += '</td>';

				codeHTML += "</tr>";

				$('#results').append(codeHTML);
				
			});

			
		
		});
	};

	
	apiRequest();
});
	

		
		