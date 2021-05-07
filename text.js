var a= new Array();
a[0]=document.getElementById("open0");
a[1]=document.getElementById("open1");
a[2]=document.getElementById("open2");
a[3]=document.getElementById("open3");
a[4]=document.getElementById("open4");
a[5]=document.getElementById("open5");
a[6]=document.getElementById("open6");
a[7]=document.getElementById("open7");
a[8]=document.getElementById("open8");
var k=0;
var f = document.getElementsByTagName("p");
for(i=0;i<9;i++)
{
    if(k==9)
    {f[0].innerHTML="its a tie";}
 a[i].onclick = function(){
    if(f[0].innerHTML=="congratulaions player 1"||f[0].innerHTML=="congratulaions player 2"||this.textContent=="X"||this.textContent=="O")
    {}
    else
  {if(k==9)
    {f[0].innerHTML="its a tie";}
    else
    {
    if(k%2==0)
  {
    this.textContent="X";
    k++;
    f[0].innerHTML="O turn";
  }
  else
  {
      this.textContent="O";
      k++;
      f[0].innerHTML="X turn";
  }
  if(k%2==0)
  {
  if(a[0].textContent!==""&&a[0].textContent===a[1].textContent&&a[0].textContent===a[2].textContent)
  {
      f[0].innerHTML="congratulaions player 2";
      a[0].className="nrow";
      a[2].className="nrow";
      a[1].className="nrow";
  }
  if(a[3].textContent!==""&&a[3].textContent===a[4].textContent&&a[3].textContent===a[5].textContent)
   {
    f[0].innerHTML="congratulaions player 2";
    a[3].className="nrow";
    a[4].className="nrow";
    a[5].className="nrow";
    }
  if(a[6].textContent!==""&&a[6].textContent===a[7].textContent&&a[6].textContent===a[8].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[6].className="nrow";
    a[7].className="nrow";
    a[8].className="nrow";
    }
  if(a[0].textContent!=""&&a[0].textContent==a[3].textContent&&a[0].textContent==a[6].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[0].className="nrow";
    a[3].className="nrow";
    a[6].className="nrow";
}
  if(a[1].textContent!=""&&a[1].textContent==a[4].textContent&&a[1].textContent==a[7].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[1].className="nrow";
    a[4].className="nrow";
    a[7].className="nrow";
}
  if(a[2].textContent!=""&&a[2].textContent==a[5].textContent&&a[2].textContent==a[8].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[5].className="nrow";
    a[2].className="nrow";
    a[8].className="nrow";
}
  if(a[0].textContent!=""&&a[0].textContent==a[4].textContent&&a[0].textContent==a[8].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[0].className="nrow";
    a[4].className="nrow";
    a[8].className="nrow";
}
  if(a[2].textContent!=""&&a[2].textContent==a[4].textContent&&a[2].textContent==a[6].textContent)
  {
    f[0].innerHTML="congratulaions player 2";
    a[4].className="nrow";
    a[2].className="nrow";
    a[6].className="nrow";
}
  }
  else
  {
    if((a[0].textContent!=="") && (a[0].textContent===a[1].textContent) && (a[0].textContent===a[2].textContent))
    {
        f[0].innerHTML="congratulaions player 1";
        a[0].className="nrow";
        a[2].className="nrow";
        a[1].className="nrow";
    }
    if((a[3].textContent!=="") && (a[3].textContent===a[4].textContent) && (a[3].textContent===a[5].textContent))
     {
      f[0].innerHTML="congratulaions player 1";
      a[3].className="nrow";
      a[4].className="nrow";
      a[5].className="nrow";
      }
    if((a[6].textContent!=="") && (a[6].textContent===a[7].textContent) && (a[6].textContent===a[8].textContent))
    {
      f[0].innerHTML="congratulaions player 1";
      a[6].className="nrow";
      a[7].className="nrow";
      a[8].className="nrow";
      }
    if((a[0].textContent!="") && (a[0].textContent==a[3].textContent) && (a[0].textContent==a[6].textContent))
    {
      f[0].textContent="congratulaions player 1";
      a[0].className="nrow";
      a[3].className="nrow";
      a[6].className="nrow";
  }
    if((a[1].textContent!="") && (a[1].textContent==a[4].textContent) && (a[1].textContent==a[7].textContent))
    {
      f[0].textContent="congratulaions player 1";
      a[1].className="nrow";
      a[4].className="nrow";
      a[7].className="nrow";
  }
    if((a[2].textContent!="") && (a[2].textContent==a[5].textContent) && (a[2].textContent==a[8].textContent))
    {
      f[0].textContent="congratulaions player 1";
      a[5].className="nrow";
      a[2].className="nrow";
      a[8].className="nrow";
  }
    if((a[0].textContent!="") && (a[0].textContent==a[4].textContent) && (a[0].textContent==a[8].textContent))
    {
      f[0].textContent="congratulaions player 1";
      a[0].className="nrow";
      a[4].className="nrow";
      a[8].className="nrow";
  }
    if((a[2].textContent!="") && (a[2].textContent==a[4].textContent) && (a[2].textContent==a[6].textContent))
    {
      f[0].textContent="congratulaions player 1";
      a[4].className="nrow";
      a[2].className="nrow";
      a[6].className="nrow";
  }
  }}}
 }; 
 if(f[0].innerHTML=="congratulaions player 1"||f[0].innerHTML=="congratulaions player 2")
 break; 
}
if(k==9)
    {f[0].innerHTML="its a tie";}