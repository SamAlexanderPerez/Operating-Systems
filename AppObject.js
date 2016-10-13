function App(n,m,s){

    //Declare your instance variables here.
    this.name=n;
    this.memory=m;
    this.state=s;

    //Declare the instance function open here.
    this.open = function(){
      this.state="active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state = "active"){
        this.state = "sleep";
        this.memory = this.memory/2;
      }
    };
    //Declare the instance function active here.
    this.active = function(){
      if(this.state = "sleep"){
        this.state = "active";
        this.memory = this.memory*2;
      }
    };
    //Declare the instance function close here.
    this.close = function(){
      if(this.state!=null){
        this.state = null;
        this.memory = 0;
      }
    };




}

//Use the constructor to create 4 App objects below.
var app1 = new App("Twitter",25,"active");
var app2 = new App("GeometryDash",50,"sleep");
var app3 = new App("YouTube",100,"active");
var app4 = new App("GoogleDocs",75,null);



//Declare an array named appList, and place all 4 of your apps in that array.
var appList = [app1,app2,app3,app4];
//The order does not matter.
