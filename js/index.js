window.onload = init_ui();

function create_row(){
  var div = document.createElement("div");
  div.setAttribute("class","row");
  return div;
}

function create_column(xs,sm,md,lg){
  var div = document.createElement("div");
  div.setAttribute("class","col-xs-"+ xs + " col-sm-"+ sm + " col-md-"+ md + " col-lg-"+lg);
  return div;
}

/*
  Funcao para gerar um card com identificador.
*/
function create_gender_card(id){
  var card_title = document.createElement("h4");
  card_title.setAttribute("class","card-title");
  card_title.appendChild(document.createTextNode("Gênero "+id));
  
  var card_text = document.createElement("p");
  card_text.setAttribute("class","card-text");
  card_text.appendChild(document.createTextNode("Breve descrição do Gênero "+id+"."));
  
  var card_button = document.createElement("button");
  card_button.setAttribute("class","btn btn-info gender-card");
  card_button.setAttribute("id",id);
  card_button.appendChild(document.createTextNode("Ver CDs/DVDs"));  
  
  var card = document.createElement("div");
  card.setAttribute("class","card");  
  card.appendChild(card_title);
  card.appendChild(card_text);
  card.appendChild(card_button);  
  
  return card;
}

function create_thumbnail(){
  var thumb = document.createElement("div");
  thumb.setAttribute("class","thumbnail");
  return thumb;
}

function create_caption(){
  var thumb = document.createElement("div");
  thumb.setAttribute("class","caption");
  return thumb;
}

function create_img(src,alt){
  var img = document.createElement("img");
  img.setAttribute("src",src);
  img.setAttribute("alt",alt);
  return img;
}

function create_text_tag(tag,text){
  var new_tag = document.createElement(tag);
  new_tag.innerHTML = text;
  return new_tag;
}

function create_product(name,id,photo){
  var product_column = create_column("6","6","4","3");
  var thumbnail = create_thumbnail();
  thumbnail.appendChild(create_img("http://lorempixel.com/400/"+(200+photo),name+id));
  var caption = create_caption();
  caption.appendChild(create_text_tag("h3","Nome do "+name+" "+id));
  caption.appendChild(create_text_tag("p","Breve descrição do "+name+" "+id));
  caption.appendChild(create_text_tag("p","<button type='button' class='btn btn-primary btn-lg' id='"+name+id+"' data-toggle='modal' data-target='#myModal' >Ver Músicas</button>"));
  thumbnail.appendChild(caption);    
  product_column.appendChild(thumbnail);
  return product_column;
}

function load_product(evt){
  elem = this;
  var id = Number(elem.getAttribute("id"));
  document.getElementById("product-alert").innerHTML = "CDs e DVDs do gênero selecionado";
  var product_container = document.getElementById("albuns");
  //children = product_container.childNodes;
  while(product_container.firstChild){
    product_container.removeChild(product_container.firstChild);    
  }
  for(i = 1; i <= 2; i++){
    cd_id = id*2 + i;    
    product_container.appendChild(create_product("cd",cd_id,i));
    product_container.appendChild(create_product("dvd",cd_id+100,i+2));
  }
}

function init_ui(){
  /* 
    Criando alguns gêneros apenas para mostar 
    a UI funcionando, na realidade estas informações deveriam 
    ser retiradas de um BD.
    i = gênero i,
    j = produto j do gênero i.
  */
  var genders = document.getElementById("generos");
  for (i = 0; i < 6; i++) { 
    var gender = create_column("6", "4", "3", "2");
    var card = create_gender_card(i);    
    gender.appendChild(card);
    genders.appendChild(gender);        
  }  
  gender_btns = document.getElementsByClassName("gender-card");
  for(i = 0; i < gender_btns.length; i++)
    gender_btns[i].addEventListener("click",load_product,false);
}