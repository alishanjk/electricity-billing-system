function adCalculate(){
	var adPrice=0,adTotalUnit=0,adPrevious=0,adRecent=0;
	adPrevious = document.getElementById("prev").value;
	adRecent = document.getElementById("current").value;
	amp = document.getElementById("ampere").value;
	adTotalUnit = adRecent-adPrevious;
	if(adPrevious>adRecent){
		alert("Your Recent value must be greater then Previous value ");
	}
	else {
		if(amp=="5"){
			if(adTotalUnit>=0 && adTotalUnit<=20){
				adPrice = adTotalUnit*3+30;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>20 && adTotalUnit<=30){
				adPrice = 3*20 +(adTotalUnit-20)*7+50;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>30 && adTotalUnit<=50){
				adPrice =20*3+10*7+ (adTotalUnit-30)*8.50+75;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if (adTotalUnit>50 && adTotalUnit<=150){
				adPrice = 20*3+10*7+20*8.50+(adTotalUnit-50)*10+100;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>150 && adTotalUnit<=250){
				adPrice = 20*3+10*7+20*8.50+100*10+(adTotalUnit-150)*11+125;
				document.getElementById("adTotalCost").innerHTML=adPrice;
				document.getElementById("adConsumed").innerHTML=adTotalUnit;
			}
			else if(adTotalUnit>250 && adTotalUnit<=400){
				adPrice = 20*3+10*7+20*8.50+100*10+100*11+(adTotalUnit-250)*12+150;
				document.getElementById("adTotalCost").innerHTML=adPrice;
				document.getElementById("adConsumed").innerHTML=adTotalUnit;
			}
			else if(adTotalUnit>=400){
							adPrice = 20*3+10*7+20*8.50+100*10+100*11+150*12+(adTotalUnit-400)*13+175;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
		}

		else if(amp=="15"){
						if(adTotalUnit>=0 && adTotalUnit<=20){
				adPrice = adTotalUnit*4+50;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>20 && adTotalUnit<=30){
				adPrice = 20*4 +(adTotalUnit-20)*7+75;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>30 && adTotalUnit<=50){
				adPrice =20*4+10*7+ (adTotalUnit-30)*8.50+100;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if (adTotalUnit>50 && adTotalUnit<=150){
				adPrice = 20*4+10*7+20*8.50+(adTotalUnit-50)*10+125;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>150 && adTotalUnit<=250){
				adPrice = 20*4+10*7+20*8.50+100*10+(adTotalUnit-150)*11+150;
				document.getElementById("adTotalCost").innerHTML=adPrice;
				document.getElementById("adConsumed").innerHTML=adTotalUnit;
			}
			else if(adTotalUnit>250 && adTotalUnit<=400){
				adPrice = 20*4+10*7+20*8.50+100*10+100*11+(adTotalUnit-250)*12+175;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>=400){
							adPrice = 20*4+10*7+20*8.50+100*10+100*11+150*12+(adTotalUnit-400)*13+200;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
		}

				else if(amp=="30"){
						if(adTotalUnit>=0 && adTotalUnit<=20){
				adPrice = adTotalUnit*5+75;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>20 && adTotalUnit<=30){
				adPrice = 20*5 +(adTotalUnit-20)*7+100;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>30 && adTotalUnit<=50){
				adPrice =20*5+10*7+ (adTotalUnit-30)*8.50+125;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if (adTotalUnit>50 && adTotalUnit<=150){
				adPrice = 20*5+10*7+20*8.50+(adTotalUnit-50)*10+150;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>150 && adTotalUnit<=250){
				adPrice = 20*5+10*7+20*8.50+100*10+(adTotalUnit-150)*11+175;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>250 && adTotalUnit<=400){
				adPrice = 20*5+10*7+20*8.50+100*10+100*11+(adTotalUnit-250)*12+200;
				document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Cost Rs."+adTotalUnit;
			}
			else if(adTotalUnit>=400){
				adPrice = 20*5+10*7+20*8.50+100*10+100*11+150*12+(adTotalUnit-400)*13+225;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
		}
				else if(amp=="60"){
						if(adTotalUnit>=0 && adTotalUnit<=20){
				adPrice = adTotalUnit*6+125;
										document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;}
				
			else if(adTotalUnit>20 && adTotalUnit<=30){
				adPrice = 20*6 +(adTotalUnit-20)*7+150;
										document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>30 && adTotalUnit<=50){
				adPrice =20*6+10*7+ (adTotalUnit-30)*8.50+175;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if (adTotalUnit>50 && adTotalUnit<=150){
				adPrice = 20*6+10*7+20*8.50+(adTotalUnit-50)*10+200;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>150 && adTotalUnit<=250){
				adPrice = 20*6+10*7+20*8.50+100*10+(adTotalUnit-150)*11+225;
										document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>250 && adTotalUnit<=400){
				adPrice = 20*6+10*7+20*8.50+100*10+100*11+(adTotalUnit-250)*12+250;
										document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
			else if(adTotalUnit>=400){
				adPrice = 20*6+10*7+20*8.50+100*10+100*11+150*12+(adTotalUnit-400)*13+275;
						document.getElementById("adTotalCost").innerHTML="Total Cost Rs."+adPrice;
				document.getElementById("adConsumed").innerHTML="Total Unit "+adTotalUnit;
			}
		}

	}
}