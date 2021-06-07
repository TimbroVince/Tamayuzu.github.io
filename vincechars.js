 //portrait image width: 250x250
//profile photo width: 1024

$(document).ready(function(){
	
	let theTabs = $("#nav-tab");
	let theTabContents = $("#nav-tabContent");
	var categories = [
		"Humans", 		//0
		"Orcs",			//1
		"Elves",		//2
		"Trolls",		//3
		"Gnomes",		//4
		"Goblins",		//5
		"Dwarves",		//6
		"Tauren",		//7
		"Draenei",		//8
		"Vulpera",		//9
		"Pandaren"		//10
	];
	
	var charData = [];

	// --------------------------
	//
	// HUMANS
	//
	// --------------------------
		
	charData.push({
		name: "Heisenberg",
		jname: "ハイゼンベルク", 
 		category: "0",
		race: "Human",
		class: "Priest",
		subclass: "Alchemist",
		age: 51,
		story: "Heisenberg combines the power of the light with alchemy."
	});

	charData.push({
		name: "Kratos",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Undead)",
		class: "Death Knight",
		subclass: "Frost",
		age: 43,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Adora",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human",
		class: "Paladin",
		subclass: "Protection",
		age: 27,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Lockhart",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human",
		class: "",
		subclass: "Brawler",
		age: 31,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Othmar",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Kul Tiran)",
		class: "Outlaw",
		subclass: "",
		age: 47,
		story: "WWWWWWWW"
	});

	charData.push({
		name: "Ehawee",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Kul Tiran)",
		class: "Druid",
		subclass: "Drust",
		age: 38,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Ashworth",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Worgen cursed)",
		class: "Warrior",
		subclass: "Fury",
		age: 30,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Fitzsimmons",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Worgen cursed)",
		class: "Mage",
		subclass: "Arcane",
		age: 30,
		story: "WWWWWWWW"
	});

	charData.push({
		name: "Thanathal",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Forsaken Undead)",
		class: "Mage",
		subclass: "Frost",
		age: 37,
		story: "WWWWWWWWWW"
	});		
	
	charData.push({
		name: "Nesmeus",
		jname: "ZZZZ", 
 		category: "0",
		race: "Human (Forsaken Undead)",
		class: "Beastmaster",
		subclass: "",
		age: 26,
		story: "WWWWWWWWWW"
	});	
	
	
	// --------------------------
	//
	// ORCS
	//
	// --------------------------
	
	charData.push({
		name: "Gorthul",
		jname: "ZZZZ", 
 		category: "1",
		race: "Tainted Shadowmoon Orc",
		class: "Warlock",
		subclass: "Fel Destruction",
		age: 40,
		story: "Gothul was once a great shaman like every other member of the Shadowmoon Clan but he always wanted more power. He was one of Gul'dan's loyal followers and gladly abandoned the elements in favor of the power offered by the demons of the Burning Legion. In his quest to increase his control over Fel energy, he burned out his own eyes. He is said to be one of the most powerful Orcish Warlocks, second only to Gul'dan himself"
	});
	
	charData.push({
		name: "Lokra",
		jname: "ZZZZ", 
 		category: "1",
		race: "Tainted Frostwolf Orc",
		class: "Rogue",
		subclass: "Shadow",
		age: 38,
		story: "Rumored to be the younger sister of Draka, Durotan's mate. She was once part of the Frostwolf Clan, but now she wields void powers like the Shadowmoon Clan once did. She can rarely be seen hunting down members of the Burning Legion wherever they appear and then vanishing into wilds of Kalimdor."
	});	

	charData.push({
		name: "Krogosh",
		jname: "ZZZZ", 
 		category: "1",
		race: "Warsong Orc",
		class: "Warrior",
		subclass: "Arms",
		age: 24,
		story: "WWWWWWWW"
	});		
	
	charData.push({
		name: "Mokaia",
		jname: "ZZZZ", 
 		category: "1",
		race: "Blackrock Orc",
		class: "Hunter",
		subclass: "Survival",
		age: 32,
		story: "WWWWWWWW"
	});		

	// --------------------------
	//
	//   ELVES
	//
	// --------------------------

	//Blood elves ---------------
	
	charData.push({
		name: "Akalyn",
		jname: "ZZZZ", 
 		category: "2",
		race: "Blood Elf",
		class: "Paladin",
		subclass: "Retribution",
		age: 330,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Sylvie",
		jname: "ZZZZ", 
 		category: "2",
		race: "Blood Elf",
		class: "Hunter",
		subclass: "Demon",
		age: 615,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Viserys",
		jname: "ZZZZ", 
 		category: "2",
		race: "Blood Elf",
		class: "Warlock",
		subclass: "Destruction",
		age: 215,
		story: "WWWWWWWW"
	});	

	//Void Elves ---------------

	charData.push({
		name: "Kaleina",
		jname: "ZZZZ", 
 		category: "2",
		race: "Void Elf",
		class: "Dancer",
		subclass: "",
		age: 115,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Magus",
		jname: "ZZZZ", 
 		category: "2",
		race: "Void Elf (Undead)",
		class: "Death Knight",
		subclass: "Blood",
		age: 2160,
		story: "WWWWWWWW"
	});	
	
	//Night elves ---------------
	
	charData.push({
		name: "Yumimori",
		jname: "ZZZZ", 
 		category: "2",
		race: "Night Elf",
		class: "Hunter",
		subclass: "Marksmanship",
		age: 1651,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Wildthorn",
		jname: "ZZZZ", 
 		category: "2",
		race: "Night Elf",
		class: "Druid",
		subclass: "Restoration",
		age: 12173,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Yfedion",
		jname: "ZZZZ", 
 		category: "2",
		race: "Night Elf",
		class: "Demon Hunter",
		subclass: "",
		age: 10213,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Espertina",
		jname: "ZZZZ", 
 		category: "2",
		race: "Night Elf",
		class: "Mage",
		subclass: "Highborne",
		age: 13193,
		story: "WWWWWWWW"
	});	
		
	//Nightborne ---------------
	
	charData.push({
		name: "Runas",
		jname: "ZZZZ", 
 		category: "2",
		race: "Nightborne Elf",
		class: "Mage",
		subclass: "Arcane",
		age: 10312,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Menori",
		jname: "ZZZZ", 
 		category: "2",
		race: "Nightborne Elf",
		class: "Battle Mage",
		subclass: "Frost",
		age: 10531,
		story: "WWWWWWWW"
	});	

	// --------------------------
	//
	//   TROLLS
	//
	// --------------------------

	charData.push({
		name: "Atulza",
		jname: "ZZZZ", 
 		category: "3",
		race: "Sandfury Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 23,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Zukrull",
		jname: "ZZZZ", 
 		category: "3",
		race: "Darkspear Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 115,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jacynte",
		jname: "ZZZZ", 
 		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 43,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jyothi",
		jname: "ZZZZ", 
 		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 180,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Juanka",
		jname: "ZZZZ", 
 		category: "3",
		race: "Atal'ai Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 24,
		story: "WWWWWWWW"
	});	

	// --------------------------
	//
	//   GNOMES
	//
	// --------------------------	

	charData.push({
		name: "Hackwrench",
		jname: "ZZZZ", 
 		category: "4",
		race: "Gnome",
		class: "Rogue",
		subclass: "Engineer",
		age: 46,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nimblemind",
		jname: "ZZZZ", 
 		category: "4",
		race: "Gnome",
		class: "Warlock",
		subclass: "Demonology",
		age: 110,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Rustnozzle",
		jname: "ZZZZ", 
 		category: "4",
		race: "Mechagnome",
		class: "Explorer",
		subclass: "Marksman",
		age: 310,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Autolizabeth",
		jname: "ZZZZ", 
 		category: "4",
		race: "Mechagnome",
		class: "Thermo-enhancement specialist",
		subclass: "",
		age: 178,
		story: "WWWWWWWWWW"
	});	
	
	// --------------------------
	//
	//   Goblins
	//
	// --------------------------	
	
	charData.push({
		name: "Megzi",
		jname: "ZZZZ", 
 		category: "5",
		race: "Goblin",
		class: "/ Rogue",
		subclass: "Field Medic",
		age: 22,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Galvaslag",
		jname: "ZZZZ", 
 		category: "5",
		race: "Goblin",
		class: "Tinkerer",
		subclass: "",
		age: 33,
		story: "WWWWWWWWWW"
	});		
	
	// --------------------------
	//
	//   Dwarves
	//
	// --------------------------	
	
	charData.push({
		name: "Dunheann",
		jname: "ZZZZ", 
 		category: "6",
		race: "Bronzebeard Dwarf",
		class: "Warrior",
		subclass: "Protection",
		age: 136,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nathaira",
		jname: "ZZZZ", 
 		category: "6",
		race: "Wildhammer Dwarf",
		class: "Brewmaster",
		subclass: "",
		age: 110,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Argodan",
		jname: "ZZZZ", 
 		category: "6",
		race: "Dark Iron Dwarf",
		class: "Shaman",
		subclass: "Elemental",
		age: 217,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Ashandra",
		jname: "ZZZZ", 
 		category: "6",
		race: "Dark Iron Dwarf",
		class: "Blacksmith",
		subclass: "",
		age: 54,
		story: "WWWWWWWWWW"
	});	

	// --------------------------
	//
	//   Tauren
	//
	// --------------------------	

	charData.push({
		name: "Riverstone",
		jname: "ZZZZ", 
 		category: "7",
		race: "Rivermane Tauren",
		class: "Blacksmith",
		subclass: "",
		age: 43,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Chumana",
		jname: "ZZZZ", 
 		category: "7",
		race: "Mistrunner Tauren",
		class: "",
		subclass: "",
		age: 61,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Menetus",
		jname: "ZZZZ", 
 		category: "7",
		race: "Grimtotem Tauren",
		class: "",
		subclass: "",
		age: 23,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Chako",
		jname: "ZZZZ", 
 		category: "7",
		race: "Highmountain Tauren",
		class: "",
		subclass: "",
		age: 28,
		story: "WWWWWWWWWW"
	});	

	// --------------------------
	//
	//   Draenei
	//
	// --------------------------	

	charData.push({
		name: "Ahmos",
		jname: "アーモス",
		jname: "ZZZZ", 
 		category: "8",
		race: "Draenei",
		class: "Shaman",
		subclass: "Warrior",
		age: 6520,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Eaia",
		jname: "ZZZZ", 
 		category: "8",
		race: "Draenei",
		class: "Beastmaster",
		subclass: "",
		age: 13415,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Kih",
		jname: "ZZZZ", 
 		category: "8",
		race: "Lightforged Draenei",
		class: "Paladin",
		subclass: "Holy",
		age: 23100,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Arayla",
		jname: "ZZZZ", 
 		category: "8",
		race: "Lightforged Draenei",
		class: "Priest",
		subclass: "Holy",
		age: 17300,
		story: "WWWWWWWWWW"
	});	


	// --------------------------
	//
	//   Vulpera
	//
	// --------------------------
	
	charData.push({
		name: "Kuzunoha",
		jname: "ZZZZ", 
 		category: "9",
		race: "Vulpera",
		class: "Mistweaver",
		subclass: "",
		age: 15,
		story: "WWWWWWWWWW"
	});		
	
	// --------------------------
	//
	//   Pandaren
	//
	// --------------------------	
	
	charData.push({
		name: "Zhanglu",
		jname: "ZZZZ", 
 		category: "10",
		race: "Pandaren",
		class: "Priest",
		subclass: "Shadow",
		age: 270,
		story: "WWWWWWWWWW"
	});	
	
	
	//Create the tabs
	
	for(let i=0; i < categories.length; i++)
	{
		theTabs.append('<button class="nav-link" id="nav-'+i+'-btn" data-bs-toggle="tab" data-bs-target="#nav-'+i+'" type="button" role="tab" aria-controls="nav-'+i+'" aria-selected="false">' + categories[i] + '</button>');
		theTabContents.append('<div class="tab-pane fade" id="nav-'+i+'" role="tabpanel" aria-labelledby="nav-'+i+'-btn"></div>');
	}
	
	//Activate first tab by default
	$("#nav-0-btn").attr("aria-selected", true);
	$("#nav-0-btn").addClass("active");
	$("#nav-0").addClass("active show");
	
	
	
	
	charData.forEach(function(item){
		
		var currTab = $("#nav-"+item["category"]);
		
		currTab.append(
		
		'<div class="row">' +
			'<div class="col-md-6">'+
				'<img src="images/'+item["name"]+'.jpg">'+
			'</div>'+
			'<div class="col-md-6">'+
				'<table class="table table-bordered">'+
					'<tr><th>Name: </th><td>'+item["name"]+'</td></tr>'+
					'<tr><th style="white-space:nowrap">片仮名: </th><td>'+item["jname"]+'</td></tr>'+
					'<tr><th>Race: </th><td>'+item["race"]+'</td></tr>'+
					'<tr><th>Class: </th><td>'+item["subclass"]+' '+item["class"]+'</td></tr>'+
					'<tr><th>Age: </th><td>'+item["age"]+'</td></tr>'+
					'<tr><th colspan="2">Story: </th></tr>'+
					'<tr><td colspan="2">'+item["story"]+'</td></tr>'+
				'</table>'+
			'</div>'+
		'</div>');
	});
	
	$("#navbody").css("padding-top", $("#navheader").height());
	$( window ).resize(function() {
	  	$("#navbody").css("padding-top", $("#navheader").height());
	});
	
	$(".nav-link").click(function(){
		$("body, html").animate({scrollTop:0}, Number(0), Number(0));
	});
	//Set the body's top paddingBottom
	

	
});