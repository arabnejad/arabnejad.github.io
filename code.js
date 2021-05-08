function loadPage(){
	var txt =location.href.split("#"),li;

    if(txt.length==1)
        li = "about";
    else 
        li = txt[txt.length-1];
    
    var ele = document.querySelector("ul").children;
    var ele = document.querySelector(' a[ href = "#'+li+'" ]');
	//rgb(140,130,121,0.3)
    ele.parentNode.style.backgroundColor = "#8C82794C";
}
function ChangeTab(e){
	
	var ul = document.querySelector(".navWrapper>ul").children;
	for (var i = 0; i < ul.length ; i++) {
		ul[i].style.backgroundColor = "rgb(0,61,76)";
		ul[i].style.color = "white";
	
	}
	
	ul[e].style.backgroundColor = "#8C82794C";
	ul[e].style.color = "white";
	n=e;
	}

function Writeresume(){
	var element=document.querySelector("article#resume>div"),txt="";

	for (var i = 0; i < resume.length; i++) {
		txt+=("<h1>" + resume[i]["section"] + "</h1>");
		txt+="<div class= br></div> <dl>";
		for (var j = 0; j < resume[i]["dt"].length; j++) {
			for (var k = 0; k< resume[i]["dt"][j].length ; k++) {

				txt+="<dt>";
					txt+="<div class= flex-container>";
						txt+="<div class=left id= section >";
							txt+="<h4>";
								txt+= resume[i]["dt"][j][k]["SubLeft"];
							txt+="</h4>";
						txt+="</div>";
						txt+="<div class=right >";
							txt+="<h4>";
								txt+= resume[i]["dt"][j][k]["SubRight"];
							txt+="</h4>";
						txt+="</div>";
					txt+="</div>";
					txt+="<div class= flex-container>";
						txt+="<div class=left id = subsection>";
							txt+="<p class=h6>";
								txt+= resume[i]["dt"][j][k]["subsection"]["SubLeft"];
							txt+="</p>";
						txt+="</div>";
						txt+="<div class=right >";
							txt+="<h5>";
								txt+= resume[i]["dt"][j][k]["subsection"]["SubRight"];
							txt+="</h5>";
						txt+="</div>";
					txt+="</div>";
					if((resume[i]["dt"][j][k]["subsection"]["li"].length)!=0){
					for (var l = 0; l< resume[i]["dt"][j][k]["subsection"]["li"].length ; l++) {
						txt+="<li class=h6>";
							
								txt+=resume[i]["dt"][j][k]["subsection"]["li"][l];
							
						txt+="</li>";
					}}
					txt+="<div class= br></div>";
				txt+="</dt>";
			}
			
		}
		txt += "</dl><br>";
	}
	element.innerHTML = txt;
}
function WritePublication(){
	
	var element=document.querySelector("article#publication>div"),
	txt="<h1>Publication</h1>";
	for (var i = 0; i < pub.length; i++) {
		txt+=("<h5 style = ' margin-top:40px;'>"+pub[i]["section"]+"</h5>");
		txt+="<ul>";
		for (var j = 0; j < pub[i]["li"].length; j++) {

			txt+="<li >";
			txt+="<p class = name >";
				txt+="<i>";
					txt+=pub[i]["li"][j][0];
				txt+="</i>";
			txt+="</p>";
			txt+="<p class = conf >";
				txt+=pub[i]["li"][j][1];
			txt+="</p>";
			txt+="<p class = name >";
				txt+=pub[i]["li"][j][2];
			txt+="</p>";

			if(pub[i]["li"][j][3]==""){
				txt+="</li>";
			}
			else{

				txt+="<h5><a class='linkDoi' href=https://doi.org/";
				txt+=pub[i]["li"][j][3];
				txt+="><span>DOI</span><span>";
				txt+=pub[i]["li"][j][3];
				txt+="</span></a></h5></li>";
			}

		}
		
		txt += "</ul>";
	}
	element.innerHTML = txt;
}
function WriteTeaching(){
	
	var element=document.querySelector("article#teaching>div"),
	txt="<h1>Teaching</h1>";
	txt+="<div class= br></div>";
	txt+="<dl>";
	for (var i = 0; i < teaching.length; i++) {
		// txt+=("<h4>" + teaching[i]["SubLeft"] + "</h4>");
		txt+="<dt>";
			txt+="<div class= flex-container>";
				txt+="<div class=left id= section >";
					txt+="<h4>";
						txt+= teaching[i]["SubLeft"];
					txt+="</h4>";
				txt+="</div>";
				txt+="<div class=right >";
					txt+="<h4>";
						txt+= teaching[i]["SubRight"];
					txt+="</h4>";
				txt+="</div>";
			txt+="</div>";

			txt+="<div class= flex-container>";
				txt+="<div class=left id = subsection>";
					txt+="<h5>";
						txt+= teaching[i]["subsection"]["SubLeft"];
					txt+="</h5>";
				txt+="</div>";
				txt+="<div class=right >";
					txt+="<h5>";
						txt+= teaching[i]["subsection"]["SubRight"];
					txt+="</h5>";
				txt+="</div>";
			txt+="</div>";
			// if (teaching[0]["subsection"]["li"].length > 0) {
			// 	txt+=teaching[i]["subsection"]["li"][0];
			// txt+=teaching[i]["subsection"]["li"][1];}
			
			if((teaching[i]["subsection"]["li"].length)!=0){
			  for (var j=0;j<teaching[i]["subsection"]["li"].length;j++) {
				txt+="<ul >";
				txt+="<li >";
				txt+="<div class= flex-container>";
					txt+="<div class=left id = subsection>";
						txt+="<h5>";
							txt+= teaching[i]["subsection"]["li"][j][0];
						txt+="</h5>";
					txt+="</div>";
					txt+="<div class=right >";
						txt+="<h5>";
							txt+= teaching[i]["subsection"]["li"][j][0];
						txt+="</h5>";
					txt+="</div>";
				txt+="</div>";
				txt+="</li>";
				txt+="</ul>";
				
			  }
			}





		txt+="<div class= br></div>";
		txt+="</dt>";
		
	}
	txt += "</dl>";
	element.innerHTML = txt;
}
loadPage();
Writeresume();
WritePublication();
WriteTeaching();