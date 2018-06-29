/*
* @Author: msi-pc
* @Date:   2018-06-10 20:26:22
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-14 09:25:44
*/
window.onload=function(){
	let top=document.getElementsByClassName("top")[0];
	let left=top.getElementsByClassName("left")[0];
	let right=top.getElementsByClassName("right")[0];
	let tx=top.getElementsByClassName("tx");
	let la11=top.getElementsByClassName("la11");
	for (let i=0;i<tx.length;i++) {
		tx[i].onmouseenter=function() {
			for(let j=0;j<tx.length;j++) {
				la11[j].style.display="none";
			}
			la11[i].style.display="block";
		}
		tx[i].onmouseleave=function() {
			la11[i].style.display="none";
		}
	}
	/*for (let i=0;i<tx.length;i++) {
		tx[i].onmouseleave=function() {
			la11[i].style.display="none";
		}
	}
*/
	let la111=document.getElementsByClassName("la111");
	let boxbox=top.getElementsByClassName("boxbox");
	// console.log(top,left,tx,la11,boxbox,la111);
	for (let i=0;i<boxbox.length;i++) {
		boxbox[i].onmouseenter=function(){
			for (let j=0;j<boxbox.length;j++) {
				la111[j].style.display="none";
			}
			la111[i].style.display="block";
		}
		boxbox[i].onmouseleave=function(){
			la111[i].style.display="none";
		}
	}

	let celabox=document.getElementsByClassName("celabox");
	let lunbotuleft=document.getElementById("lunbotuleft");
	let lis=lunbotuleft.getElementsByTagName("li");
	// console.log(celabox,lunbotuleft,lis);
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseenter=function(){
			for (let j=0;j<lis.length;j++) {
				celabox[j].style.display="none";
			}
			celabox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			celabox[i].style.display="none";
		}
	}


	// 轮播图
	// 
	let banner=document.querySelector(".banner");
	let center=banner.querySelector(".center");	
	let hha1=banner.querySelector(".hha1");	
	let hha2=banner.querySelector(".hha2");
	let imgbox=banner.querySelector(".imgbox");
	let img=imgbox.querySelectorAll("img");
	let box=center.querySelector(".box");
	let liss=center.querySelectorAll("li");
	console.log(liss,img,hha1,hha2);

	let index=0;
	let t=setInterval(back,2000);
	img[0].style.zIndex=10;
	liss[0].className="hot";
	function back(){
		index++;
		if(index==img.length){
			index=0;
		}
		img.forEach(function(val){
			val.style.zIndex=5;
		})
		liss.forEach(function(val){
			val.className="";
		})
		img[index].style.zIndex=10;
		liss[index].className="hot";
	}
	function back1(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		img.forEach(function(val){
			val.style.zIndex=5;
		})
		liss.forEach(function(val){
			val.className="";
		})
		img[index].style.zIndex=10;
		liss[index].className="hot";
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(back,2000);
	}
	hha1.onclick=function(){
		back1();
	}
	hha2.onclick=function(){
		back();
	}
	for (let i=0;i<liss.length;i++) {
		liss[i].onclick=function(){
			img.forEach(function(val){
				val.style.zIndex=5;
			});
			liss.forEach(function(val){
				val.className="";
			});
			img[i].style.zIndex=10;
			liss[i].className="hot";
			index=i;
		}
	}


	let toutiao=document.querySelectorAll(".beijing .lunbotu .right .toutiao");
	let fix=toutiao.querySelectorAll("ul");
	console.log(toutiao,fix);
	
}