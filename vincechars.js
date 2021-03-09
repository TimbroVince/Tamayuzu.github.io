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
		category: "0",
		race: "Human",
		class: "Mage",
		subclass: "Alchemist",
		age: 51,
		story: "A great alchemist who combines the power of magic with alchemy."
	});

	charData.push({
		name: "Kratos",
		category: "0",
		race: "Human (Undead)",
		class: "Death Knight",
		subclass: "Frost",
		age: 43,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Adora",
		category: "0",
		race: "Human",
		class: "Paladin",
		subclass: "Protection",
		age: 27,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Lockhart",
		category: "0",
		race: "Human",
		class: "",
		subclass: "Brawler",
		age: 31,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Othmar",
		category: "0",
		race: "Human (Kul Tiran)",
		class: "Outlaw",
		subclass: "",
		age: 47,
		story: "WWWWWWWW"
	});

	charData.push({
		name: "Ehawee",
		category: "0",
		race: "Human (Kul Tiran)",
		class: "Druid",
		subclass: "Drust",
		age: 38,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Ashworth",
		category: "0",
		race: "Human (Worgen cursed)",
		class: "",
		subclass: "Assassin",
		age: 30,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Yuzuyu",
		category: "0",
		race: "Human (Forsaken Undead)",
		class: "",
		subclass: "",
		age: 33,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Thanathal",
		category: "0",
		race: "Human (Forsaken Undead)",
		class: "",
		subclass: "",
		age: 37,
		story: "WWWWWWWWWW"
	});		
	
	charData.push({
		name: "Nesmeus",
		category: "0",
		race: "Human (Forsaken Undead)",
		class: "",
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
		category: "1",
		race: "Tainted Orc",
		class: "Warlock",
		subclass: "Fel Destruction",
		age: 40,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Lokra",
		category: "1",
		race: "Half-orc, Half-Draenei",
		class: "Warrior",
		subclass: "Frost",
		age: 46,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Krogosh",
		category: "1",
		race: "Warsong Orc",
		class: "Warrior",
		subclass: "Arms",
		age: 24,
		story: "WWWWWWWW"
	});		
	
	charData.push({
		name: "Mokaia",
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
		category: "2",
		race: "Blood Elf",
		class: "Paladin",
		subclass: "Retribution",
		age: 330,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Sylvie",
		category: "2",
		race: "Blood Elf",
		class: "Hunter",
		subclass: "Demon",
		age: 615,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Viserys",
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
		category: "2",
		race: "Void Elf",
		class: "Dancer",
		subclass: "",
		age: 115,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Magus",
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
		category: "2",
		race: "Night Elf",
		class: "Hunter",
		subclass: "Marksmanship",
		age: 1651,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Wildthorn",
		category: "2",
		race: "Night Elf",
		class: "Druid",
		subclass: "Restoration",
		age: 12173,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Yfedion",
		category: "2",
		race: "Night Elf",
		class: "Demon Hunter",
		subclass: "",
		age: 10213,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Abelia",
		category: "2",
		race: "Night Elf",
		class: "Engineer",
		subclass: "Fel",
		age: 13193,
		story: "WWWWWWWW"
	});	
		
	//Nightborne ---------------
	
	charData.push({
		name: "Runas",
		category: "2",
		race: "Nightborne Elf",
		class: "Mage",
		subclass: "Arcane",
		age: 10312,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Menori",
		category: "2",
		race: "Nightborne Elf",
		class: "Rogue",
		subclass: "Subtlety",
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
		category: "3",
		race: "Sandfury Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 23,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Zukrull",
		category: "3",
		race: "Darkspear Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 115,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jacynte",
		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 43,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jyothi",
		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 180,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Juanka",
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
		category: "4",
		race: "Gnome",
		class: "Engineer",
		subclass: "Warrior",
		age: 46,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nimblemind",
		category: "4",
		race: "Gnome",
		class: "Warlock",
		subclass: "Demonology",
		age: 110,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Rustnozzle",
		category: "4",
		race: "Mechagnome",
		class: "Explorer",
		subclass: "Marksman",
		age: 310,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Autolizabeth",
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
		category: "5",
		race: "Goblin",
		class: "Rogue",
		subclass: "",
		age: 22,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Galvaslag",
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
		category: "6",
		race: "Bronzebeard Dwarf",
		class: "Berserker",
		subclass: "",
		age: 136,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nathaira",
		category: "6",
		race: "Wildhammer Dwarf",
		class: "Brewmaster",
		subclass: "",
		age: 110,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Argodan",
		category: "6",
		race: "Dark Iron Dwarf",
		class: "Shaman",
		subclass: "Elemental",
		age: 217,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Ashandra",
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
		name: "Cinderhorn",
		category: "7",
		race: "Grimtotem Tauren",
		class: "Blacksmith",
		subclass: "",
		age: 23,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Chumana",
		category: "7",
		race: "Mistrunner Tauren",
		class: "",
		subclass: "",
		age: 61,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Menetus",
		category: "7",
		race: "Feltotem Tauren",
		class: "",
		subclass: "",
		age: 43,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Chako",
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
		category: "8",
		race: "Draenei",
		class: "Shaman",
		subclass: "Warrior",
		age: 6520,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Eaia",
		category: "8",
		race: "Draenei",
		class: "Beastmaster",
		subclass: "",
		age: 13415,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Kih",
		category: "8",
		race: "Lightforged Draenei",
		class: "Paladin",
		subclass: "Holy",
		age: 23100,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Zynthia",
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
					'<tr><th>Race: </th><td>'+item["race"]+'</td></tr>'+
					'<tr><th>Class: </th><td>'+item["subclass"]+' '+item["class"]+'</td></tr>'+
					'<tr><th>Age: </th><td>'+item["age"]+'</td></tr>'+
					'<tr><th colspan="2">Story: </th></tr>'+
					'<tr><td colspan="2">'+item["story"]+'</td></tr>'+
				'</table>'+
			'</div>'+
		'</div>');
	});
	
});