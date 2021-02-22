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
		name: "Adora",
		category: "0",
		race: "Human",
		class: "Paladin",
		subclass: "Protection",
		age: 99999999,
		story: "WWWWWWWW"
	});
	
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
		name: "Lockhart",
		category: "0",
		race: "Human",
		class: "",
		subclass: "Brawler",
		age: 31,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Kratos",
		category: "0",
		race: "Human (Undead)",
		class: "Death Knight",
		subclass: "Frost",
		age: 99999999,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Ashworth",
		category: "0",
		race: "Human (Worgen cursed)",
		class: "",
		subclass: "Assassin",
		age: 99999999,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Othmar",
		category: "0",
		race: "Human (Kul Tiran)",
		class: "Sage",
		subclass: "Tide",
		age: 99999999,
		story: "WWWWWWWW"
	});

	charData.push({
		name: "Ehawee",
		category: "0",
		race: "Human (Kul Tiran)",
		class: "Druid",
		subclass: "Drust",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	// --------------------------
	//
	// ORCS
	//
	// --------------------------
	
	charData.push({
		name: "Gorthul",
		category: "1",
		race: "Orc (Tainted)",
		class: "Warlock",
		subclass: "Fel Destruction",
		age: 99999999,
		story: "WWWWWWWW"
	});
	
	charData.push({
		name: "Lokra",
		category: "1",
		race: "Orc (Frostwolf)",
		class: "Warrior",
		subclass: "Frost",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Krogosh",
		category: "1",
		race: "Mag'har Orc (Warsong)",
		class: "Warrior",
		subclass: "Arms",
		age: 99999999,
		story: "WWWWWWWW"
	});		
	
	charData.push({
		name: "Mokaia",
		category: "1",
		race: "Mag'har Orc (Blackrock)",
		class: "Hunter",
		subclass: "Survival",
		age: 99999999,
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
		age: 99999999,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Viserys",
		category: "2",
		race: "Blood Elf",
		class: "Warlock",
		subclass: "Destruction",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Sylvie",
		category: "2",
		race: "Blood Elf",
		class: "Hunter",
		subclass: "Demon",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	//Void Elves ---------------
	
	charData.push({
		name: "Magus",
		category: "2",
		race: "Void Elf (Undead)",
		class: "Death Knight",
		subclass: "Blood",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Kaleina",
		category: "2",
		race: "Void Elf",
		class: "Warlock",
		subclass: "Affliction",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	//Night elves ---------------
	
	charData.push({
		name: "Yumimori",
		category: "2",
		race: "Night Elf",
		class: "Hunter",
		subclass: "Marksmanship",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Wildthorn",
		category: "2",
		race: "Night Elf",
		class: "Druid",
		subclass: "Restoration",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Yfedion",
		category: "2",
		race: "Night Elf",
		class: "Demon Hunter",
		subclass: "",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Abelia",
		category: "2",
		race: "Night Elf",
		class: "Engineer",
		subclass: "Fel",
		age: 99999999,
		story: "WWWWWWWW"
	});	
		
	//Nightborne ---------------
	
	charData.push({
		name: "Runas",
		category: "2",
		race: "Nightborne Elf",
		class: "Mage",
		subclass: "Arcane",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Menori",
		category: "2",
		race: "Nightborne Elf",
		class: "Rogue",
		subclass: "Subtlety",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	// --------------------------
	//
	//   TROLLS
	//
	// --------------------------

	charData.push({
		name: "Juanka",
		category: "3",
		race: "Sandfury Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 99999999,
		story: "WWWWWWWW"
	});	

	charData.push({
		name: "Zukrull",
		category: "3",
		race: "Darkspear Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jacynte",
		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Jyothi",
		category: "3",
		race: "Zandalari Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 99999999,
		story: "WWWWWWWW"
	});	
	
	charData.push({
		name: "Atulzak",
		category: "3",
		race: "Atal'ai Troll",
		class: "AAAAAA",
		subclass: "AAAAAA",
		age: 99999999,
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
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nimblemind",
		category: "4",
		race: "Gnome",
		class: "Warlock",
		subclass: "Demonology",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Rustnozzle",
		category: "4",
		race: "Mechagnome",
		class: "Explorer",
		subclass: "Marksman",
		age: 0,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Shinyscalpel",
		category: "4",
		race: "Mechagnome",
		class: "Surgeon",
		subclass: "",
		age: 0,
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
		class: "Outlaw",
		subclass: "",
		age: 0,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Galvaslag",
		category: "5",
		race: "Goblin",
		class: "Tinkerer",
		subclass: "",
		age: 0,
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
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Nathaira",
		category: "6",
		race: "Wildhammer Dwarf",
		class: "Brewmaster",
		subclass: "",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Argodan",
		category: "6",
		race: "Dark Iron Dwarf",
		class: "Shaman",
		subclass: "Elemental",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Ashandra",
		category: "6",
		race: "Dark Iron Dwarf",
		class: "Blacksmith",
		subclass: "",
		age: 0,
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
		age: 0,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Chumana",
		category: "7",
		race: "Mistrunner Tauren",
		class: "",
		subclass: "",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Menetus",
		category: "7",
		race: "Feltotem Tauren",
		class: "",
		subclass: "",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Chako",
		category: "7",
		race: "Highmountain Tauren",
		class: "",
		subclass: "",
		age: 0,
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
		class: "Mage",
		subclass: "Crystal",
		age: 0,
		story: "WWWWWWWWWW"
	});	

	charData.push({
		name: "Eaia",
		category: "8",
		race: "Draenei",
		class: "Beastmaster",
		subclass: "",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Kih",
		category: "8",
		race: "Lightforged Draenei",
		class: "Paladin",
		subclass: "Holy",
		age: 0,
		story: "WWWWWWWWWW"
	});	
	
	charData.push({
		name: "Zynthia",
		category: "8",
		race: "Lightforged Draenei",
		class: "Priest",
		subclass: "Holy",
		age: 0,
		story: "WWWWWWWWWW"
	});	


	// --------------------------
	//
	//   Vulpera
	//
	// --------------------------
	
	charData.push({
		name: "Reina",
		category: "9",
		race: "Vulpera",
		class: "Mistweaver",
		subclass: "",
		age: 0,
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
		age: 0,
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
				//'<img src="images/'+item["name"]+'.png">'+
				'<img src="images/Nimblemind.png">'+
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