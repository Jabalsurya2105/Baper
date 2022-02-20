async function expl(){setTimeout(duar,200);}
  async function showbblur(){
document.getElementById('bodyblur').style.opacity = "1";
document.getElementById('bodyblur').style.visibility = "visible";
document.getElementById('fire').style.opacity = "1";
document.getElementById('konten').style.top = "10vh";
document.getElementById('fotoloveu').style.opacity = "1";
document.getElementById('fotoloveu').style.height = "180px";
}
  
async function duar(){
document.getElementById('konten').style.top = "35vh";document.getElementById('koteks').style.opacity = "1";
document.body.style.backgroundColor = "#000";
}

   function ketik() {if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;setTimeout(ketik,100);}
    if(i==text.length){showbblur()}
                    }