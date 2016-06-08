$(document).ready(function(){

	var usersNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", 
							"noobs2ninjas", "terakilobyte", "thomasballinger",,"beohoff","brunofin","comster404",
							"test_channel",	"sheevergaming","TR7K"];
	
	var apiRequest = function() { 
		usersNames.forEach(function(userName){

			var streamStatus;
			var statusRow;
				
			 $.getJSON('https://api.twitch.tv/kraken/streams/' + userName + "?callback=", function(data) {
			 	console.log(data);

			 	if (data.stream === null) {
					streamStatus = 'offline';
					statusRow = 'table-active';
				} else if (data.stream === undefined) {
					streamStatus = 'undefined';
					statusRow = 'table-warning';
				} else {
					streamStatus = 'online';
					statusRow = 'table-success';
				}
			});
				
			$.getJSON('https://api.twitch.tv/kraken/channels/' + userName  + "?callback=", function(data) {
				
				//console.log(data);

				var codeHTML = '<tr class="' + statusRow +  '">';

				codeHTML += '<td>' ;
				codeHTML += data.display_name;
				codeHTML += '</td>';

				codeHTML += '<td>' ;
				codeHTML += '<img src="' + (data.logo !== null ? data.logo : 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F') + '" class="logo" />';
				codeHTML += '</td>';

				codeHTML += '<td>' ;
				codeHTML += '<span class="status">' + ( streamStatus !== 'undefined' ? streamStatus : '') + "</span>"; 
				codeHTML += '<span class="description">' + (data.status !== null ? data.status : '') + "</span>";
				codeHTML += '</td>';

				codeHTML += "</tr>";

				$('#results').append(codeHTML);
				
			});

			
		
		});
	};

	
	apiRequest();
});
	

		
		