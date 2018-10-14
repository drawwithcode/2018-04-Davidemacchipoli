var myCuteBall;
var myUglyBall;
var myFirstBall;


function Ball(_x, _y, _diameter, ) { //dichiaro l'oggetto e ne definisco le caratteristiche
  // Properties defined by constructor
  this.size = _diameter; //do il valore alle caratteristiche dell'oggetto.
  this.x = _x;
  this.y = _y;
  this.strokeWeight = 2; //esempio: dichiaro lo strokeWeight dell'oggetto:12
  // Hardcoded properties
  this.stroke = '#4dffff';
  this.color = '#00b8e6';
  this.speed = 2;
  // Methods = azioni che può fare l'oggetto.

this.changecolor = function () {
  if (mouseX < width/2 && mouseY <height/2) {
    this.color = '#99ebff';
  } else if (mouseX > width/2 && mouseY <height/2) {
      this.color = '#4ddbff';
  };

  if (mouseX > width/2 && mouseY >height/2) {
    this.color = '#00a3cc';
  } else if (mouseX < width/2 && mouseY >height/2) {
      this.color = '#003d4d';
  };



}


  this.move = function() {
    this.x = width/2 + mouseX *0.05 + 150 ;
    this.y = height/2 -15 + mouseY*0.05;
  }

  this.rimpicciolire = function() {
    this.size = mouseX*0.1;
  }

  this.display = function() { //la funzione display mi serve per far capire cosa deve disegnare, infatti sto dichiarando: riempilo (fill)
    //con questo colore (prima dichiarato), e disegna un ellisse con le caratteristiche prima eleneacate.
    fill(this.color);
    stroke(this.stroke);
    strokeWeight(this.strokeWeight); // dico di mettere lo strokeweight dichiarato nell'oggetto.
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  // Here the code


  createCanvas(windowWidth, windowHeight);
  background('#005266');
  myCuteBall = new Ball(width/2 , height/2, 90); //il mio nuovo elemento "myCuteBall", dichiarato come variabile, assume le
  //dell'oggetto Ball che prima abbiamo definito (e ne eredita i metodi)
  // change the speed
  myCuteBall.speed = 1; //se voglio cambiare delle caratteristiche dell'oggetto, posso, anche se queste rimangono uguali per tutte le variabili
  //che derivano da questo oggetto
  //myCuteBall.display();



  myUglyBall = new Ball(width/2 + 180, height/2, 90);
  myUglyBall.display();

  myFirstBall = new Ball(width/2 - 180, height/2, 90);
  myFirstBall.display();


  strokeWeight(1);
    textSize(26);
fill(153, 235, 255);

      text('Move your mouse and see the changes', width/2 - 227  , height/2 -210 );



}

function draw() {

  // call methods of the instance
  //myCuteBall.move(); //sono le azioni che io sto dicendo alla mia varibile di fare, che derivano dall'ogggetto.
  //se io barro la funzione .move associata all'oggetto, esso non si muove ma viene comunque disegnato.
  myCuteBall.display(); //mostro la nuova variabile. //infatti mi serve aver scritto prima che può fare la funzione display e come
  //l'oggetto dovrà presentarsi perchè altrimenti sarebbe solo dichiarato ma non visibile.
  myCuteBall.rimpicciolire();
  myUglyBall.move();
    myUglyBall.display();
    myFirstBall.display();
    myFirstBall.changecolor();

}
