processFridge();





document.getElementById("imgHome").addEventListener("click", returnHome);
document.getElementById("Parkdale fridge").addEventListener("click", populateParkdale);
document.getElementById("Morrison fridge").addEventListener("click", populateMorrison);
document.getElementById("Somerset fridge").addEventListener("click", populateSomerset);




function pickFridge(){
  document.location='chooseFridge.html';
  processFridge();
}



function processFridge(){

  for(let fridge of fridges){
    let fName = fridge.name;
    let fStreet = fridge.address.street;
    let fPhone = fridge.contact_phone;

    let fLabel = fName.concat("<br> ", fStreet, "<br> ", fPhone);

    //let form = document.querySelector("frmFridge");

    const btn = document.createElement("button");
    btn.innerHTML = fLabel;
    btn.classList.add("btnFridge");
    btn.setAttribute('id', fName);
    document.getElementById("frmFridge").appendChild(btn);
  }

  document.getElementById("row").classList.add("invisible");
  document.getElementById("row").classList.remove("visible");
}



function populateParkdale(){

  document.getElementById("header").innerHTML = "Items Inside Parkdale fridge";

  removeButtons();
  rowVisible();

  let fName = fridgeA.name;
  let fStreet = fridgeA.address.street;
  let fPhone = fridgeA.contact_phone;

  let fLabel = fName.concat(" ", fStreet, " ", fPhone);

  document.getElementById("fridgeLocation").textContent = fLabel;

  let progress = getCapacity(fridgeA);

  let progPercent= progress+"%";
  document.getElementById("myBar").textContent = progPercent;
  document.getElementById("myBar").style.width= progPercent;

  var produceC = 0;
  var dairyC= 0;
  var bakeryC = 0;
  var frozenC=0;
  var pantryC = 0;

let temp = Object.values(fridgeA.items);

  for(item in temp){

    if(temp[item].type =="dairy")
    dairyC +=1;
    else if(temp[item].type =="pantry")
    pantryC += 1;
    else if(temp[item].type =="frozen")
    frozenC += 1;
    else if(temp[item].type =="produce")
    produceC +=1;
    else if(temp[item].type =="bakery")
    bakeryC += 1;

  }

  let lstDairy = document.createElement("li");
  let lstPantry = document.createElement("li");
  let lstFrozen = document.createElement("li");
  let lstProduce = document.createElement("li");
  let lstBakery = document.createElement("li");

  lstDairy.textContent= ("Dairy: "+ dairyC);
  lstPantry.textContent= ("Pantry: "+ pantryC);
  lstFrozen.textContent= ("Frozen: "+ frozenC);
  lstProduce.textContent= ("Produce:"+ produceC);
  lstBakery.textContent= ("Bakery: "+ bakeryC);

    lstDairy.setAttribute('id', "lstDairy");
    lstPantry.setAttribute('id', "lstPantry");
    lstFrozen.setAttribute('id', "lstFrozen");
    lstProduce.setAttribute('id', "lstProduce");
    lstBakery.setAttribute('id', "lstBakery");

    lstDairy.setAttribute('class', "typeList");
    lstPantry.setAttribute('class', "typeList");
    lstFrozen.setAttribute('class', "typeList");
    lstProduce.setAttribute('class', "typeList");
    lstBakery.setAttribute('class', "typeList");

    document.getElementById("categoryList").appendChild(lstDairy);
    document.getElementById("categoryList").appendChild(lstPantry);
    document.getElementById("categoryList").appendChild(lstFrozen);
    document.getElementById("categoryList").appendChild(lstProduce);
    document.getElementById("categoryList").appendChild(lstBakery);


    lstDairy.onclick= function(){popDairy(fridgeA)};
    lstPantry.onclick= function(){popPantry(fridgeA)};
    lstFrozen.onclick= function(){popFrozen(fridgeA)};
    lstProduce.onclick= function(){popProduce(fridgeA)};
    lstBakery.onclick= function(){popBakery(fridgeA)};




}

function populateMorrison(){
  document.getElementById("header").innerHTML = "Items Inside Parkdale fridge";

  removeButtons();
  rowVisible();

  let fName = fridgeB.name;
  let fStreet = fridgeB.address.street;
  let fPhone = fridgeB.contact_phone;

  let fLabel = fName.concat(" ", fStreet, " ", fPhone);

  document.getElementById("fridgeLocation").textContent = fLabel;

  let progress = getCapacity(fridgeB);

  let progPercent= progress+"%";
  document.getElementById("myBar").textContent = progPercent;
  document.getElementById("myBar").style.width= progPercent;

  var produceC = 0;
  var dairyC= 0;
  var bakeryC = 0;
  var frozenC=0;
  var pantryC = 0;

let temp = Object.values(fridgeB.items);

  for(item in temp){

    if(temp[item].type =="dairy")
    dairyC +=1;
    else if(temp[item].type =="pantry")
    pantryC += 1;
    else if(temp[item].type =="frozen")
    frozenC += 1;
    else if(temp[item].type =="produce")
    produceC +=1;
    else if(temp[item].type =="bakery")
    bakeryC += 1;

  }

  let lstDairy = document.createElement("li");
  let lstPantry = document.createElement("li");
  let lstFrozen = document.createElement("li");
  let lstProduce = document.createElement("li");
  let lstBakery = document.createElement("li");

  lstDairy.textContent= ("Dairy: "+ dairyC);
  lstPantry.textContent= ("Pantry: "+ pantryC);
  lstFrozen.textContent= ("Frozen: "+ frozenC);
  lstProduce.textContent= ("Produce:"+ produceC);
  lstBakery.textContent= ("Bakery: "+ bakeryC);

    lstDairy.setAttribute('id', "lstDairy");
    lstPantry.setAttribute('id', "lstPantry");
    lstFrozen.setAttribute('id', "lstFrozen");
    lstProduce.setAttribute('id', "lstProduce");
    lstBakery.setAttribute('id', "lstBakery");

    lstDairy.setAttribute('class', "typeList");
    lstPantry.setAttribute('class', "typeList");
    lstFrozen.setAttribute('class', "typeList");
    lstProduce.setAttribute('class', "typeList");
    lstBakery.setAttribute('class', "typeList");

    document.getElementById("categoryList").appendChild(lstDairy);
    document.getElementById("categoryList").appendChild(lstPantry);
    document.getElementById("categoryList").appendChild(lstFrozen);
    document.getElementById("categoryList").appendChild(lstProduce);
    document.getElementById("categoryList").appendChild(lstBakery);


    lstDairy.onclick= function(){popDairy(fridgeB)};
    lstPantry.onclick= function(){popPantry(fridgeB)};
    lstFrozen.onclick= function(){popFrozen(fridgeB)};
    lstProduce.onclick= function(){popProduce(fridgeB)};
    lstBakery.onclick= function(){popBakery(fridgeB)};

}

function populateSomerset(){
  document.getElementById("header").innerHTML = "Items Inside Parkdale fridge";

  removeButtons();
  rowVisible();

  let fName = fridgeC.name;
  let fStreet = fridgeC.address.street;
  let fPhone = fridgeC.contact_phone;

  let fLabel = fName.concat(" ", fStreet, " ", fPhone);

  document.getElementById("fridgeLocation").textContent = fLabel;

  let progress = getCapacity(fridgeC);

  let progPercent= progress+"%";
  document.getElementById("myBar").textContent = progPercent;
  document.getElementById("myBar").style.width= progPercent;

  var produceC = 0;
  var dairyC= 0;
  var bakeryC = 0;
  var frozenC=0;
  var pantryC = 0;

let temp = Object.values(fridgeC.items);

  for(item in temp){

    if(temp[item].type =="dairy")
    dairyC +=1;
    else if(temp[item].type =="pantry")
    pantryC += 1;
    else if(temp[item].type =="frozen")
    frozenC += 1;
    else if(temp[item].type =="produce")
    produceC +=1;
    else if(temp[item].type =="bakery")
    bakeryC += 1;

  }

  let lstDairy = document.createElement("li");
  let lstPantry = document.createElement("li");
  let lstFrozen = document.createElement("li");
  let lstProduce = document.createElement("li");
  let lstBakery = document.createElement("li");

  lstDairy.textContent= ("Dairy: "+ dairyC);
  lstPantry.textContent= ("Pantry: "+ pantryC);
  lstFrozen.textContent= ("Frozen: "+ frozenC);
  lstProduce.textContent= ("Produce:"+ produceC);
  lstBakery.textContent= ("Bakery: "+ bakeryC);

    lstDairy.setAttribute('id', "lstDairy");
    lstPantry.setAttribute('id', "lstPantry");
    lstFrozen.setAttribute('id', "lstFrozen");
    lstProduce.setAttribute('id', "lstProduce");
    lstBakery.setAttribute('id', "lstBakery");

    lstDairy.setAttribute('class', "typeList");
    lstPantry.setAttribute('class', "typeList");
    lstFrozen.setAttribute('class', "typeList");
    lstProduce.setAttribute('class', "typeList");
    lstBakery.setAttribute('class', "typeList");

    document.getElementById("categoryList").appendChild(lstDairy);
    document.getElementById("categoryList").appendChild(lstPantry);
    document.getElementById("categoryList").appendChild(lstFrozen);
    document.getElementById("categoryList").appendChild(lstProduce);
    document.getElementById("categoryList").appendChild(lstBakery);

    lstDairy.onclick= function(){popDairy(fridgeC)};
    lstPantry.onclick= function(){popPantry(fridgeC)};
    lstFrozen.onclick= function(){popFrozen(fridgeC)};
    lstProduce.onclick= function(){popProduce(fridgeC)};
    lstBakery.onclick= function(){popBakery(fridgeC)};





}


function returnHome(){
    document.location='index.html';
    document.getElementById("frmFridge").classList.add("visible");

}

function rowVisible(){
    document.getElementById("row").classList.remove("invisible");
    document.getElementById("row").classList.add("visible");
}

function removeButtons(){

  document.getElementById("Parkdale fridge").remove();
  document.getElementById("Morrison fridge").remove();
  document.getElementById("Somerset fridge").remove();
}

function getCapacity(fridge){
var total = 0;

let temp = Object.values(fridgeA.items);
for(item in temp){
total += temp[item].quantity;

}

//return total/fridge.capacity;
return(Math.round((total/ fridge.capacity)* 100));

}


function popDairy(fridge){
  clearFridge();

  let temp = Object.values(fridge.items);

  for(item in temp){

    if(temp[item].type =="dairy"){
      let divRow = document.createElement("div");
      let imgItem = document.createElement("img");

      divRow.setAttribute('id', "fridgeRow");

      imgItem.setAttribute('src', temp[item].img);
      imgItem.setAttribute('id', "itemImg");

      let mainSpan = document.createElement("span");
      let txtSpan = document.createElement("span");

      txtSpan.textContent= (temp[item].name + ", Quantity: "+ temp[item].quantity + ", Pickup Item: ");

      const btnAdd = document.createElement("button");
      const btnSub = document.createElement("button");
      const btnCount = document.createElement("span");

      btnAdd.setAttribute('id', "add"+temp[item].name );
      btnSub.setAttribute('id', "sub"+temp[item].name );

      btnCount.style.margin = "1em";
      btnCount.setAttribute('id', temp[item].name);

      btnAdd.innerHTML = "+";
      btnSub.innerHTML = "-";
      btnCount.textContent = "0";

      btnCount.setAttribute('id', temp[item].name);

      document.getElementById("fridgeContents").appendChild(divRow);
      divRow.appendChild(imgItem);
      mainSpan.appendChild(txtSpan);
      mainSpan.appendChild(btnAdd);
      mainSpan.appendChild(btnCount);
      mainSpan.appendChild(btnSub);
      divRow.appendChild(mainSpan);

      document.getElementById("add"+temp[item].name).setAttribute("onclick",`addButton("${temp[item].name}","${temp[item].quantity}")` );
      document.getElementById("sub"+temp[item].name).setAttribute("onclick",`subtractButton("${temp[item].name}","${temp[item].quantity}")` );


    }
  }

}
function popPantry(fridge){
  clearFridge();
  let temp = Object.values(fridge.items);

  for(item in temp){

    if(temp[item].type =="pantry"){
      let divRow = document.createElement("div");
      let imgItem = document.createElement("img");

      divRow.setAttribute('id', "fridgeRow");

      imgItem.setAttribute('src', temp[item].img);
      imgItem.setAttribute('id', "itemImg");

      let mainSpan = document.createElement("span");
      let txtSpan = document.createElement("span");

      txtSpan.textContent= (temp[item].name + ", Quantity: "+ temp[item].quantity + ", Pickup Item: ");

      const btnAdd = document.createElement("button");
      const btnSub = document.createElement("button");
      const btnCount = document.createElement("span");

      btnAdd.setAttribute('id', "add"+temp[item].name );
      btnSub.setAttribute('id', "sub"+temp[item].name );

      btnCount.style.margin = "1em";
      btnCount.setAttribute('id', temp[item].name);

      btnAdd.innerHTML = "+";
      btnSub.innerHTML = "-";
      btnCount.textContent = "0";

      btnCount.setAttribute('id', temp[item].name);

      document.getElementById("fridgeContents").appendChild(divRow);
      divRow.appendChild(imgItem);
      mainSpan.appendChild(txtSpan);
      mainSpan.appendChild(btnAdd);
      mainSpan.appendChild(btnCount);
      mainSpan.appendChild(btnSub);
      divRow.appendChild(mainSpan);

      document.getElementById("add"+temp[item].name).setAttribute("onclick",`addButton("${temp[item].name}","${temp[item].quantity}")` );
      document.getElementById("sub"+temp[item].name).setAttribute("onclick",`subtractButton("${temp[item].name}","${temp[item].quantity}")` );



    }
  }

}
function popFrozen(fridge){
  clearFridge();
  let temp = Object.values(fridge.items);

  for(item in temp){

    if(temp[item].type =="frozen"){
      let divRow = document.createElement("div");
      let imgItem = document.createElement("img");

      divRow.setAttribute('id', "fridgeRow");

      imgItem.setAttribute('src', temp[item].img);
      imgItem.setAttribute('id', "itemImg");

      let mainSpan = document.createElement("span");
      let txtSpan = document.createElement("span");

      txtSpan.textContent= (temp[item].name + ", Quantity: "+ temp[item].quantity + ", Pickup Item: ");

      const btnAdd = document.createElement("button");
      const btnSub = document.createElement("button");
      const btnCount = document.createElement("span");

      btnAdd.setAttribute('id', "add"+temp[item].name );
      btnSub.setAttribute('id', "sub"+temp[item].name );

      btnCount.style.margin = "1em";
      btnCount.setAttribute('id', temp[item].name);

      btnAdd.innerHTML = "+";
      btnSub.innerHTML = "-";
      btnCount.textContent = "0";

      btnCount.setAttribute('id', temp[item].name);

      document.getElementById("fridgeContents").appendChild(divRow);
      divRow.appendChild(imgItem);
      mainSpan.appendChild(txtSpan);
      mainSpan.appendChild(btnAdd);
      mainSpan.appendChild(btnCount);
      mainSpan.appendChild(btnSub);
      divRow.appendChild(mainSpan);

      document.getElementById("add"+temp[item].name).setAttribute("onclick",`addButton("${temp[item].name}","${temp[item].quantity}")` );
      document.getElementById("sub"+temp[item].name).setAttribute("onclick",`subtractButton("${temp[item].name}","${temp[item].quantity}")` );


    }
  }

}
function popProduce(fridge){
  clearFridge();
  let temp = Object.values(fridge.items);

  for(item in temp){

    if(temp[item].type =="produce"){
      let divRow = document.createElement("div");
      let imgItem = document.createElement("img");

      divRow.setAttribute('id', "fridgeRow");

      imgItem.setAttribute('src', temp[item].img);
      imgItem.setAttribute('id', "itemImg");

      let mainSpan = document.createElement("span");
      let txtSpan = document.createElement("span");

      txtSpan.textContent= (temp[item].name + ", Quantity: "+ temp[item].quantity + ", Pickup Item: ");

      const btnAdd = document.createElement("button");
      const btnSub = document.createElement("button");
      const btnCount = document.createElement("span");

      btnAdd.setAttribute('id', "add"+temp[item].name );
      btnSub.setAttribute('id', "sub"+temp[item].name );

      btnCount.style.margin = "1em";
      btnCount.setAttribute('id', temp[item].name);

      btnAdd.innerHTML = "+";
      btnSub.innerHTML = "-";
      btnCount.textContent = "0";

      btnCount.setAttribute('id', temp[item].name);

      document.getElementById("fridgeContents").appendChild(divRow);
      divRow.appendChild(imgItem);
      mainSpan.appendChild(txtSpan);
      mainSpan.appendChild(btnAdd);
      mainSpan.appendChild(btnCount);
      mainSpan.appendChild(btnSub);
      divRow.appendChild(mainSpan);

      document.getElementById("add"+temp[item].name).setAttribute("onclick",`addButton("${temp[item].name}","${temp[item].quantity}")` );
      document.getElementById("sub"+temp[item].name).setAttribute("onclick",`subtractButton("${temp[item].name}","${temp[item].quantity}")` );


    }
  }
}
function popBakery(fridge){
  clearFridge();
  let temp = Object.values(fridge.items);

  for(item in temp){

    if(temp[item].type =="bakery"){
      const divRow = document.createElement("div");
      const imgItem = document.createElement("img");

      divRow.setAttribute('id', "fridgeRow");

      imgItem.setAttribute('src', temp[item].img);
      imgItem.setAttribute('id', "itemImg");

      const mainSpan = document.createElement("span");
      const txtSpan = document.createElement("span");

      txtSpan.textContent= (temp[item].name + ", Quantity: "+ temp[item].quantity + ", Pickup Item: ");

      const btnAdd = document.createElement("button");
      const btnSub = document.createElement("button");
      const btnCount = document.createElement("span");

      btnAdd.setAttribute('id', "add"+temp[item].name );
      btnSub.setAttribute('id', "sub"+temp[item].name );

      btnCount.style.margin = "1em";
      btnCount.setAttribute('id', temp[item].name);

      btnAdd.innerHTML = "+";
      btnSub.innerHTML = "-";
      btnCount.textContent = "0";

      btnCount.setAttribute('id', temp[item].name);

      document.getElementById("fridgeContents").appendChild(divRow);
      divRow.appendChild(imgItem);
      mainSpan.appendChild(txtSpan);
      mainSpan.appendChild(btnAdd);
      mainSpan.appendChild(btnCount);
      mainSpan.appendChild(btnSub);
      divRow.appendChild(mainSpan);

      document.getElementById("add"+temp[item].name).setAttribute("onclick",`addButton("${temp[item].name}","${temp[item].quantity}")` );
      document.getElementById("sub"+temp[item].name).setAttribute("onclick",`subtractButton("${temp[item].name}","${temp[item].quantity}")` );


    }
  }

}

function clearFridge(){
const nodeList = document.getElementById("fridgeContents").childNodes;

  if(nodeList.length >1)
  for(let node in nodeList){
    document.getElementById("fridgeRow").remove();
  }
}

function addButton(name, quantity){



  let amount= parseInt(document.getElementById(name).innerHTML);
    console.log(amount);
  if(amount < quantity){
    amount+=1;
    console.log(amount);
    document.getElementById(name).textContent= amount.toString();


    let newItem = document.createElement("li");
    newItem.textContent= (amount+ name);
    newItem.setAttribute('id', amount+name );
    document.getElementById("pickList").appendChild(newItem);

    if(amount > 1){
      amount --;
      document.getElementById(amount+name).remove();
      amount++;
    }
  }



}

function subtractButton(name, quantity){
  let amount= parseInt(document.getElementById(name).innerHTML);
  if(amount > 0){
    amount-=1;
    document.getElementById(name).textContent= amount.toString();

    if(amount >= 1){
      amount++;
      document.getElementById(amount+name).remove();
      amount--;

      let newItem = document.createElement("li");
      newItem.textContent= (amount+ name);
      newItem.setAttribute('id', amount+name );
      document.getElementById("pickList").appendChild(newItem);


    }
    if(amount <1){
      amount++;
      document.getElementById(amount+name).remove();
      amount--;
    }

}


}
