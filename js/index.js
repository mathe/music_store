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

function init_ui(){
  /* Criando alguns generos para exemplo. */
  var genders = document.getElementById("generos");
  for (i = 1; i <= 6; i++) { 
    var gender = create_column("6", "4", "3", "2");
    gender.appendChild(create_gender_card(i));
    genders.appendChild(gender);
  }  
}