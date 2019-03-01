let nouvelleetat,secret,numero,face,bonnepaire,carte;



numero = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
face = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

secret = [];
bonnepaire = 0;

carte = document.getElementById("tapis").getElementsByTagName("img");


for(let i = 0;i<carte.length;i++){
      carte[i].nbcarte=i;
      carte[i].onclick = function(){
          controle(this.nbcarte);
  }
}

initialise();

function maj(nbcarte){
      switch(face[nbcarte]){
        case 0:
                carte[nbcarte].src="img/dos.jpg";
                break;
        case 1:
                carte[nbcarte].src="img/animals"+numero[nbcarte]+".jpg";
                break;
        case -1:
                carte[nbcarte].style.visibility="hidden";

      }
}

function restart(){
        alert("T'emballe pas, tous le monde peut y arriver");
        location.reload();
}

function initialise(){
      for(let position = numero.length - 1; position >=1; position--){
              let hasard = Math.floor(Math.random()*(position+1));
              let save = numero[position];
                numero[position] = numero[hasard];
                numero[hasard] = save;
      }
}

function controle(nbcarte){
	if(secret.length<2){
		if(face[nbcarte]==0){
			face[nbcarte]=1;
			secret.push(nbcarte);
			maj(nbcarte);
		}
		if(secret.length==2){
			var nouvelleetat=0;
			if(numero[secret[0]]==numero[secret[1]]){
				nouvelleetat=-1;
				bonnepaire++;
			}

			face[secret[0]]=nouvelleetat;
			face[secret[1]]=nouvelleetat;
			setTimeout(function(){
				maj(secret[0]);
				maj(secret[1]);
				secret=[];
				if(bonnepaire==8){
					restart();
				}
			},750);
		}
	}
}
