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

function WriteEducation(){
	var element=document.querySelector("article#education>div"),txt="";
	// var arr = { "one": 1, "two": [2,3], "three": 3 }; 
	// element.innerHTML=arr["two"]+arr["one"];
	// alert(element.nodeName);
	
	for (var i = 0; i < edu.length; i++) {
		txt+=("<h1>" + edu[i]["section"] + "</h1>");
		txt+="<br> <ul>";
		for (var j = 0; j < edu[i]["li"].length; j++) {
			txt+=("<li>"+edu[i]["li"][j]+"</li>");
		}
		txt += "</ul><br>";
	}

	// element.innerHTML=edu[0]["section"]+"<br>"+edu[0]["li"][1][1] + "<br>"+edu[1]["li"][0];
	element.innerHTML = txt;
}
function WritePublication(){
	
	var element=document.querySelector("article#publication>div"),
	txt="<h1>Publication</h1>",url;
	for (var i = 0; i < pub.length; i++) {
		txt+=("<h1 style = ' margin-top:40px;'>"+pub[i]["section"]+"</h1>");
		txt+="<ul>";
		for (var j = 0; j < pub[i]["li"].length; j++) {
			txt+=("<li><p>"+pub[i]["li"][j][0]+"</p><p class = 'bold'>"+pub[i]["li"][j][1]+"</p><p class = 'conf'><i>"+pub[i]["li"][j][2]+"</i></p>")
			if(pub[i]["li"][j][3]==""){
				txt+="</li>";
			}
			else{
				// url = pub[i]["li"][j][3].split(":");
				// txt+=("<h5><a class='linkDoi' href=https://doi.org/"+url[1]+">"+pub[i]["li"][j][3]+"</a></h5></li>");
				txt+=("<h5><a class='linkDoi' href=https://doi.org/"+pub[i]["li"][j][3]+"><span>DOI</span><span>"+pub[i]["li"][j][3]+"</span></a></h5></li>");
			}
			
			
			// txt+=(pub[i]["li"][j]+"</li>");
		}
		
		txt += "</ul>";
	}
	element.innerHTML = txt;
}
loadPage();
WriteEducation();
WritePublication();
