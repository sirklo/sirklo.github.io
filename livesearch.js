function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("livesearch").innerHTML=xmlhttp.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
      $('#livesearch').css('background', '#fff');
      $('#livesearch').css('position', 'relative');
      $('#livesearch').css('display', 'block');
      $('#livesearch').css('margin-top', '31px');
      $('#livesearch').css('margin-left', '30px');
      $('#livesearch').css('padding-left', '5px');
      $('#livesearch').css('z-index', '9999');
      $('#livesearch div.gimli').css('height', '35px');
      $('#livesearch div.gimli').css('width', '65px');
      $('#livesearch div.gimli').css('text-align', 'center');
      $('#livesearch div.gimli').css('float', 'left');
      $('#livesearch div.gimli img').css('height', '35px');
      //$('#livesearch div.gimli img').css('float', 'left');
    }
  }
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}