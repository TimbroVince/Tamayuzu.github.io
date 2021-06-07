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
		subclass: "Alchemist / Discipline",
		age: 51,
		story: ""
	});

	charData.push({
		name: "Kratos",
		jname: "クラトス", 
 		category: "0",
		race: "Human (Undead)",
		class: "DeathKnight",
		subclass: "Frost",
		age: 43,
		story: ""
	});
	
	charData.push({
		name: "Adora",
		jname: "アードラ", 
 		category: "0",
		race: "Human",
		class: "Paladin",
		subclass: "Protection",
		age: 27,
		story: ""
	});	
	
	charData.push({
		name: "Lockhart",
		jname: "ロックハート", 
 		category: "0",
		race: "Human",
		class: "Monk",
		subclass: "Windwalker",
		age: 31,
		story: ""
	});
	
	charData.push({
		name: "Othmar",
		jname: "オスマル", 
 		category: "0",
		race: "Human (Kul Tiran)",
		class: "Rogue",
		subclass: "Outlaw",
		age: 47,
		story: ""
	});

	charData.push({
		name: "Ehawee",
		jname: "エハヱー", 
 		category: "0",
		race: "Human (Kul Tiran)",
		class: "Druid",
		subclass: "Guardian",
		age: 38,
		story: ""
	});	

	charData.push({
		name: "Ashworth",
		jname: "アシュワト", 
 		category: "0",
		race: "Human (Worgen cursed)",
		class: "Warrior",
		subclass: "Fury",
		age: 30,
		story: ""
	});
	
	charData.push({
		name: "Fitzsimmons",
		jname: "フイツシモンス", 
 		category: "0",
		race: "Human (Worgen cursed)",
		class: "Mage",
		subclass: "Arcane",
		age: 30,
		story: ""
	});

	charData.push({
		name: "Thanathal",
		jname: "サナソル", 
 		category: "0",
		race: "Human (Forsaken Undead)",
		class: "Mage",
		subclass: "Frost",
		age: 37,
		story: ""
	});		
	
	charData.push({
		name: "Nesmeus",
		jname: "ネスメウス", 
 		category: "0",
		race: "Human (Forsaken Undead)",
		class: "Hunter",
		subclass: "Beastmaster",
		age: 26,
		story: ""
	});	
	
	
	// --------------------------
	//
	// ORCS
	//
	// --------------------------
	
	charData.push({
		name: "Gorthul",
		jname: "ゴルスル", 
 		category: "1",
		race: "Tainted Shadowmoon Orc",
		class: "Warlock",
		subclass: "Destruction",
		age: 40,
		story: "",
		inprog: "Gothul was once a great shaman like every other member of the Shadowmoon Clan but he always wanted more power. He was one of Gul'dan's loyal followers and gladly abandoned the elements in favor of the power offered by the demons of the Burning Legion. In his quest to increase his control over Fel energy, he burned out his own eyes. He is said to be one of the most powerful Orcish Warlocks, second only to Gul'dan himself"
	});
	
	charData.push({
		name: "Lokra",
		jname: "ロクラ", 
 		category: "1",
		race: "Tainted Frostwolf Orc",
		class: "Rogue",
		subclass: "Subtlety",
		age: 38,
		story: "",
		inprog: "Rumored to be the younger sister of Draka, Durotan's mate. She was once part of the Frostwolf Clan, but now she wields void powers like the Shadowmoon Clan once did. She can rarely be seen hunting down members of the Burning Legion wherever they appear and then vanishing into wilds of Kalimdor."
	});	

	charData.push({
		name: "Krogosh",
		jname: "クロゴシュ", 
 		category: "1",
		race: "Warsong Orc",
		class: "Warrior",
		subclass: "Arms",
		age: 24,
		story: ""
	});		
	
	charData.push({
		name: "Mokaia",
		jname: "モカヤ", 
 		category: "1",
		race: "Blackrock Orc",
		class: "Hunter",
		subclass: "Survival",
		age: 32,
		story: ""
	});		

	// --------------------------
	//
	//   ELVES
	//
	// --------------------------

	//Blood elves ---------------
	
	charData.push({
		name: "Akalyn",
		jname: "アカリン", 
 		category: "2",
		race: "Blood Elf",
		class: "Paladin",
		subclass: "Retribution",
		age: 330,
		story: ""
	});
	
	charData.push({
		name: "Sylvie",
		jname: "シルヴィ", 
 		category: "2",
		race: "Blood Elf",
		class: "DemonHunter",
		subclass: "Vengeance",
		age: 615,
		story: ""
	});
	
	charData.push({
		name: "Viserys",
		jname: "ヴィセリッス", 
 		category: "2",
		race: "Blood Elf",
		class: "Warlock",
		subclass: "Destruction",
		age: 215,
		story: ""
	});	

	//Void Elves ---------------

	charData.push({
		name: "Kaleina",
		jname: "カレイナ", 
 		category: "2",
		race: "Void Elf",
		class: "Warlock",
		subclass: "Dancer / Affliction",
		age: 115,
		story: ""
	});	
	
	charData.push({
		name: "Magus",
		jname: "マグス", 
 		category: "2",
		race: "Void Elf (Undead)",
		class: "DeathKnight",
		subclass: "Blood",
		age: 2160,
		story: ""
	});	
	
	//Night elves ---------------
	
	charData.push({
		name: "Yumimori",
		jname: "弓森", 
 		category: "2",
		race: "Night Elf",
		class: "Hunter",
		subclass: "Marksmanship",
		age: 1651,
		story: ""
	});	
	
	charData.push({
		name: "Wildthorn",
		jname: "ワイルドソオヌ", 
 		category: "2",
		race: "Night Elf",
		class: "Druid",
		subclass: "Restoration",
		age: 12173,
		story: ""
	});	
	
	charData.push({
		name: "Yfedion",
		jname: "イフエヂオン", 
 		category: "2",
		race: "Night Elf",
		class: "DemonHunter",
		subclass: "Havoc",
		age: 10213,
		story: ""
	});	

	charData.push({
		name: "Espertina",
		jname: "エスペルチナ", 
 		category: "2",
		race: "Night Elf",
		class: "Mage",
		subclass: "Fire",
		age: 13193,
		story: ""
	});	
		
	//Nightborne ---------------
	
	charData.push({
		name: "Runas",
		jname: "ルナス", 
 		category: "2",
		race: "Nightborne Elf",
		class: "Mage",
		subclass: "Arcane",
		age: 10312,
		story: ""
	});	
	
	charData.push({
		name: "Menori",
		jname: "メノリ", 
 		category: "2",
		race: "Nightborne Elf",
		class: "DeathKnight",
		subclass: "Frost",
		age: 10531,
		story: ""
	});	

	// --------------------------
	//
	//   TROLLS
	//
	// --------------------------

	charData.push({
		name: "Atulza",
		jname: "アツルザ", 
 		category: "3",
		race: "Sandfury Troll",
		class: "Hunter",
		subclass: "Beastmaster",
		age: 23,
		story: ""
	});	

	charData.push({
		name: "Zukrull",
		jname: "ズクロル", 
 		category: "3",
		race: "Darkspear Troll",
		class: "DeathKnight",
		subclass: "Unholy",
		age: 115,
		story: ""
	});	
	
	charData.push({
		name: "Jacynte",
		jname: "ジャシント", 
 		category: "3",
		race: "Zandalari Troll",
		class: "Druid",
		subclass: "Dinomancer / Feral",
		age: 43,
		story: ""
	});	
	
	charData.push({
		name: "Jyothi",
		jname: "ジヨチ", 
 		category: "3",
		race: "Zandalari Troll",
		class: "Paladin",
		subclass: "Protection",
		age: 180,
		story: ""
	});	
	
	charData.push({
		name: "Juanka",
		jname: "ジュアンカ", 
 		category: "3",
		race: "Atal'ai Troll",
		class: "Priest",
		subclass: "Discipline",
		age: 24,
		story: ""
	});	

	// --------------------------
	//
	//   GNOMES
	//
	// --------------------------	

	charData.push({
		name: "Hackwrench",
		jname: "ハックレンチ", 
 		category: "4",
		race: "Gnome",
		class: "Rogue",
		subclass: "Field Medic / Assassination",
		age: 46,
		story: ""
	});	
	
	charData.push({
		name: "Nimblemind",
		jname: "ニンブルマインド", 
 		category: "4",
		race: "Gnome",
		class: "Warlock",
		subclass: "Demonology",
		age: 110,
		story: ""
	});	
	
	charData.push({
		name: "Rustnozzle",
		jname: "ロストノゼル", 
 		category: "4",
		race: "Mechagnome",
		class: "Hunter",
		subclass: "Marksman",
		age: 310,
		story: ""
	});	

	charData.push({
		name: "Autolizabeth",
		jname: "アウトリザベス", 
 		category: "4",
		race: "Mechagnome",
		class: "Mage",
		subclass: "Fire",
		age: 178,
		story: ""
	});	
	
	// --------------------------
	//
	//   Goblins
	//
	// --------------------------	
	
	charData.push({
		name: "Megzi",
		jname: "メグジ", 
 		category: "5",
		race: "Goblin",
		class: "Rogue",
		subclass: "Outlaw",
		age: 22,
		story: ""
	});	

	charData.push({
		name: "Galvaslag",
		jname: "ガルバスラッグ", 
 		category: "5",
		race: "Goblin",
		class: "Shaman",
		subclass: "Tinkerer / Elemental",
		age: 33,
		story: ""
	});		
	
	// --------------------------
	//
	//   Dwarves
	//
	// --------------------------	
	
	charData.push({
		name: "Dunheann",
		jname: "ヅンヘアンヌ", 
 		category: "6",
		race: "Bronzebeard Dwarf",
		class: "Warrior",
		subclass: "Protection",
		age: 136,
		story: ""
	});	
	
	charData.push({
		name: "Nathaira",
		jname: "ナサイラ", 
 		category: "6",
		race: "Wildhammer Dwarf",
		class: "Monk",
		subclass: "Brewmaster",
		age: 110,
		story: ""
	});	
	
	charData.push({
		name: "Argodan",
		jname: "アルゴダン", 
 		category: "6",
		race: "Dark Iron Dwarf",
		class: "Shaman",
		subclass: "Elemental",
		age: 217,
		story: ""
	});	
	
	charData.push({
		name: "Ashandra",
		jname: "アシャンドラ", 
 		category: "6",
		race: "Dark Iron Dwarf",
		class: "Paladin",
		subclass: "Retrbution",
		age: 54,
		story: ""
	});	

	// --------------------------
	//
	//   Tauren
	//
	// --------------------------	

	charData.push({
		name: "Riverstone",
		jname: "リバアストン", 
 		category: "7",
		race: "Rivermane Tauren",
		class: "Shaman",
		subclass: "Restoration",
		age: 43,
		story: ""
	});	

	charData.push({
		name: "Chumana",
		jname: "チュマナ", 
 		category: "7",
		race: "Mistrunner Tauren",
		class: "Monk",
		subclass: "Windwalker",
		age: 61,
		story: ""
	});	
	
	charData.push({
		name: "Menetus",
		jname: "メネツス", 
 		category: "7",
		race: "Grimtotem Tauren",
		class: "Warrior",
		subclass: "Fury",
		age: 23,
		story: ""
	});	
	
	charData.push({
		name: "Chako",
		jname: "チャコ", 
 		category: "7",
		race: "Highmountain Tauren",
		class: "Druid",
		subclass: "Balance",
		age: 28,
		story: ""
	});	

	// --------------------------
	//
	//   Draenei
	//
	// --------------------------	

	charData.push({
		name: "Ahmos",
		jname: "アーモス",
 		category: "8",
		race: "Draenei",
		class: "Shaman",
		subclass: "Enhancement",
		age: 6520,
		story: ""
	});	

	charData.push({
		name: "Eaia",
		jname: "エアイア", 
 		category: "8",
		race: "Draenei",
		class: "Hunter",
		subclass: "Beastmaster",
		age: 13415,
		story: ""
	});	
	
	charData.push({
		name: "Kih",
		jname: "キ", 
 		category: "8",
		race: "Lightforged Draenei",
		class: "Paladin",
		subclass: "Holy",
		age: 23100,
		story: ""
	});	
	
	charData.push({
		name: "Arayla",
		jname: "アライラ", 
 		category: "8",
		race: "Lightforged Draenei",
		class: "Priest",
		subclass: "Holy",
		age: 17300,
		story: ""
	});	


	// --------------------------
	//
	//   Vulpera
	//
	// --------------------------
	
	charData.push({
		name: "Kuzunoha",
		jname: "葛の葉", 
 		category: "9",
		race: "Vulpera",
		class: "Monk",
		subclass: "Mistweaver",
		age: 15,
		story: ""
	});		
	
	// --------------------------
	//
	//   Pandaren
	//
	// --------------------------	
	
	charData.push({
		name: "Zhanglu",
		jname: "ジャンル", 
 		category: "10",
		race: "Pandaren",
		class: "Priest",
		subclass: "Shadow",
		age: 270,
		story: ""
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
					'<tr><th>Class: </th><td>'+item["subclass"]+' '+getClassColor(item["class"])+'</td></tr>'+
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
	
	$("body, html").animate({scrollTop:0}, 200);
	$(".nav-link").click(function(){
		$("body, html").animate({scrollTop:0}, 200);
	});
	//Set the body's top paddingBottom
	
	
	
});

function getClassColor(className)
{
	var classColor = "#FFFFFF";
	switch(className){
		case "Warrior": classColor = "#C79C6E"; break;
		case "Paladin": classColor = "#F58CBA"; break;
		case "DeathKnight": classColor = "#C41F3B"; break;
		case "MageKnight": classColor = "#00FAF6"; break;
		case "Hunter": classColor = "#ABD473"; break;
		case "Shaman": classColor = "#0070DE"; break;
		case "Rogue": classColor = "#FFF569"; break;
		case "Druid": classColor = "#FF7D0A"; break;
		case "Monk": classColor = "#00FF96"; break;
		case "DemonHunter": classColor = "#A335EE"; break;
		case "Mage": classColor = "#69CCF0"; break;
		case "Priest": classColor = "#FFFFD6"; break;
		case "Warlock": classColor = "#9482C9"; break;
		default: classColor = "#FFFFFF"; break;
	}
	
	return('<span style="color:' + classColor + '">' + className + '</span>');
}	