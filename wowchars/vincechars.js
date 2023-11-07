 //portrait image width: 250x250
//profile photo width: 1024

$(document).ready(function(){
		
    $.getJSON("guildchars.json", function(data){

		console.log(data);

		var categories = data.categories;
		var classnames = [];
		var subclasses = [];
		var characters = [];
		var charData = [];

		$.each(data.classes, function(key, val){
			classnames.push(key);
			subclasses.push(val);
		});

		$.each(data.characters, function(key, val){
			characters.push(key);
			charData.push(val);
		});
		
		console.log(categories);
    	console.log(classnames);
		console.log(subclasses);
    	console.log(characters);
		console.log(charData);

		var theTabs = $("#nav-tab");
		var theTabContents = $("#nav-tabContent");
		var sortingType = "race"; //race, class, faction
		
		$( window ).resize(function() {
			  $("#navbody").css("padding-top", $("#navheader").height());
		});
			
		$("#sortbyrace").click(function(){
			sortingType = "race"
			generate();		
		});
		
		$("#sortbyclass").click(function(){
			sortingType = "class"
			generate();
		});
		
		$("#sortbyfaction").click(function(){
			sortingType = "faction"
			generate();
		});
		
		generate();
		
	
		function generate()
		{
			theTabs.empty();
			theTabContents.empty();
			CreateButtons(sortingType);
			CreateTabs(sortingType);	
			$("#navbody").css("padding-top", $("#navheader").height());
			$("body, html").animate({scrollTop:0}, 200);
		}
	
		function CreateButtons(sortType)
		{
			if(sortType == "race")
			{
				for(let i=0; i < categories.length; i++)
				{
					theTabs.append('<button class="nav-link" id="nav-'+i+'-btn" data-bs-toggle="tab" data-bs-target="#nav-'+i+'" type="button" role="tab" aria-controls="nav-'+i+'" aria-selected="false">' + i + " " + categories[i] + '</button>');
					theTabContents.append('<div class="tab-pane fade" id="nav-'+i+'" role="tabpanel" aria-labelledby="nav-'+i+'-btn"></div>');
				}	
			}
			
			else if(sortType == "class"){
				for(let i=0; i < classnames.length; i++)
				{
					theTabs.append('<button class="nav-link" id="nav-'+i+'-btn" data-bs-toggle="tab" data-bs-target="#nav-'+i+'" type="button" role="tab" aria-controls="nav-'+i+'" aria-selected="false">' + i + " " + classnames[i] + '</button>');
					theTabContents.append('<div class="tab-pane fade" id="nav-'+i+'" role="tabpanel" aria-labelledby="nav-'+i+'-btn"></div>');
				}	
			}
			
			else if(sortType == "faction")
			{
				for(let i=0; i < categories.length; i++)
				{
					theTabs.append('<button class="nav-link" id="nav-'+i+'-btn" data-bs-toggle="tab" data-bs-target="#nav-'+i+'" type="button" role="tab" aria-controls="nav-'+i+'" aria-selected="false">' + categories[i] + '</button>');
					theTabContents.append('<div class="tab-pane fade" id="nav-'+i+'" role="tabpanel" aria-labelledby="nav-'+i+'-btn"></div>');
				}
			}
			
			//Activate first tab by default
			$("#nav-0-btn").attr("aria-selected", true);
			$("#nav-0-btn").addClass("active");
			$("#nav-0").addClass("active show");
				
			$(".nav-link").click(function(){
				$("body, html").animate({scrollTop:0}, 200);
			});
		}
	
		function CreateTabs(sortType){
				
			characters.forEach(function(item, i){
	
				console.log(item);
				console.log(i);
				var currTab;
	
				if(sortType == "race"){
					 currTab = $("#nav-"+charData[i]["category"]);
				}
				else if(sortType == "class"){
					currTab = $("#nav-"+charData[i]["class"]);
				}
				else if(sortType == "faction"){
					currTab = $("#nav-"+item["category"]);
				}
				else{
					currTab = $("#nav-"+item["category"]);
				}
				
				
				currTab.append(
					
				'<div class="row">' +
					'<div class="col-md-8">'+
						'<img src="images/'+item+'.jpg">'+
					'</div>'+
					'<div class="col-md-4">'+
						'<table class="table table-bordered">'+
							'<tr><th>Name: </th><td>'+item+'</td></tr>'+
							'<tr><th style="white-space:nowrap">片仮名: </th><td>'+charData[i]["jname"]+'</td></tr>'+
							//'<tr><th>Age: </th><td>'+charData[i]["age"]+'</td></tr>'+
							'<tr><th>Race: </th><td>'+charData[i]["race"]+'</td></tr>'+
							'<tr><th>Class: </th><td>'+charData[i]["subclass"]+' '+getClassColor(charData[i]["class"])+'</td></tr>'+
							'<tr><th>Theme: </th><td>'+charData[i]["theme"]+'</td></tr>'+
							'<tr><th>Profession: </th><td>'+charData[i]["profession"]+'</td></tr>'+
							'<tr><th>2nd profession: </th><td>'+charData[i]["profession2"]+'</td></tr>'+
							'<tr><th>Favored weapon: </th><td>'+charData[i]["weapon"]+'</td></tr>'+
							//'<tr><th>Ground mount: </th><td>'+charData[i]["groundmount"]+'</td></tr>'+
							//'<tr><th>Flying mount: </th><td>'+charData[i]["flyingmount"]+'</td></tr>'+
							'<tr><th colspan="2">Story: </th></tr>'+
							'<tr><td colspan="2">'+charData[i]["story"]+'</td></tr>'+
							'</table>'+
					'</div>'+
				'</div>');
			});
		}
	
		function getClassColor(classID)
		{
			var classColor = "#FFFFFF";
			switch(classID){
				case 9: classColor = "#C79C6E"; break;
				case 10: classColor = "#F58CBA"; break;
				case 11: classColor = "#C41F3B"; break;
				case 12: classColor = "#FFFFFF"; break;
				case 7: classColor = "#ABD473"; break;
				case 8: classColor = "#0070DE"; break;
				case 3: classColor = "#FFF569"; break;
				case 4: classColor = "#FF7D0A"; break;
				case 5: classColor = "#00FF96"; break;
				case 6: classColor = "#A335EE"; break;
				case 1: classColor = "#69CCF0"; break;
				case 0: classColor = "#FFFFD6"; break;
				case 2: classColor = "#9482C9"; break;
				default: classColor = "#FFFFFF"; break;
			}
			
			return('<span style="color:' + classColor + '">' + classnames[classID] + '</span>');
	
			
		}



    }).fail(function(){
		console.log("An error has occurred.");
    });

	
	
});

	