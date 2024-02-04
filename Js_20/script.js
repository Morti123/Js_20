/* function Test1(x,y){
    this.x = x;
    this.y = y; */
   /*  this.show = function(){
        console.log(this.x + ' ' + this.y);
    } */
/* }
Test1.prototype.show = function(){
    console.log(this.x + ' ' + this.y);
}
let test1 = new Test1(2,3);
let test2 = new Test1(6,5); */

/* 1 */
/* function Calcul(x,y){
    this.x = x;
    this.y = y;
}
Calcul.prototype.sum = function(){
    console.log('Сумма:' + (this.x + this.y));
}
Calcul.prototype.sub = function(){
    console.log('Разность:' + (this.x - this.y));
}
Calcul.prototype.div = function(){
    console.log('Деление:' + (this.x / this.y));
}
Calcul.prototype.mul = function(){
    console.log('Умножение:' + (this.x * this.y));
}
let calcul1 = new Calcul(5,3);
console.log(calcul1);
calcul1.sum();
calcul1.sub();
calcul1.mul();
calcul1.div(); */

/* 2 */
/* function Persone(age, gender, name)
{
    this.age = age;
    this.gender = gender;
    this.name = name;
}
Persone.prototype.hi = function(){
    console.log(`Здравствуйте меня зовут ${this.name} , я - ${this.gender} и  мне ${this.age}`);
}
let persons = []
persons[0] = new Persone(20,'мужчина','Тимур');
persons[1] = new Persone(42,'мужчина','Никита');
persons[2] = new Persone(15,'женщина','Катерина');
for(i=0; i<persons.length; i++){
    persons[i].hi();
} */

/* 3 */
/* function Point(x,y){
this.x = x;
this.y = y;
this.color =  'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
}
Point.prototype.creat = function(){
    this.block = document.createElement('div');
    this.block.classList.add('r');
    this.block.style.background = this.color;
    this.block.style.left = this.x + 'px';
    this.block.style.top = this.y + 'px';
    document.body.append(this.block);
}
for(i=0; i<=300; i++){
    let el = new Point(i,100);
    el.creat();
} */

/* 4 */
function ModWindow(x,y,width,text,textZag){
this.x = x;
this.y = y;
this.width = width;
this.textZag = textZag;
this.text  = text;
}
ModWindow.prototype.creat = function(){
    this.block = document.createElement('div');
    this.block.style.left = this.x + 'px';
    this.block.style.top = this.y + 'px';
    this.block.classList.add('div');

    this.textZa = document.createElement('h2');
    this.textZa.innerText = this.textZag;

    this.text2 = document.createElement('p');
    this.text2.innerText = this.text;

    this.close = document.createElement('button');
    this.close.innerText = 'X';
    this.close.addEventListener('click',()=>{
        this.delete(this.block);
    })
    ModWindow.prototype.delete  = function(a){
        a.remove()
    }
    document.body.append(this.block);
    this.block.append(this.text2);
    this.block.append(this.close);
    this.block.append(this.textZa);
}
let a = new ModWindow(100, 100, 400, 'Окно 1', 'Я текст окна-1');
a.creat();
let b = new ModWindow(100, 300, 400, 'Окно 2', 'Я текст окна-2');
b.creat();
let c = new ModWindow(100, 500, 400, 'Окно 3', 'Я текст окна-3');
c.creat();

