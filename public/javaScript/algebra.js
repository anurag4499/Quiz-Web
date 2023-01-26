
let a="a^2+2ab+b^2";
let b="a^2-2ab+b^2";
let c="a^2+2ab-b^2";
let d="a^2-2ab-b^2";

// let ResultValue.AnsArray=[]
let noQuestion=24;
let currentQuestion=0;
let mark=0;
let wrong=0;
let missQuestion=0;
// let noAns=0;
// let minute;
// let secound;
const ResultValue={
    Mark:0,
    wrong:0,
    Miss:0,
    AnsArray:[String]
}

// 0-> seen  1->give ResultValue.AnsArray  -1=> not seen
for(let i=0;i<noQuestion;i++){
    ResultValue.AnsArray[i]="-1";
}
//  let obj2=run();
//  console.log(obj2)
let obj=[
  {question:" The three rational numbers between 3 and 4 are:",
   option:[
     { a:"5/2,6/2,7/2"},
     { b:"13/4,14/4,15/4"},
     { c:"12/7,13/7,14/7"},
     { d:"11/4,12/4,13/4"},
    ],
    answer:"b",
  },
  {question:"  3√6 + 4√6 is equal to:",
   option:[
     { a:"6√6"},
     { b:"7√6"},
     { c:"4√12"},
     { d:" 7√12"},
    ],
    answer:"b",
  },
  {question:" Every rational number is:",
   option:[
     { a:"Whole number"},
     { b:"Natural number"},
     { c:"Integer"},
     { d:"Real number"},
    ],
    answer:"d",
  },
  {question:"√12 X √15 is equal to:",
   option:[
     { a:"5√6"},
     { b:" 6√5"},
     { c:"10√5"},
     { d:"√25"},
    ],
    answer:"b",
  },
  {question:"Value of (256)0.16 X (256)0.09 is:",
   option:[
     { a:"4"},
     { b:" 16"},
     { c:"54"},
     { d:"256.25"},
    ],
    answer:"a",
  },
  {question:" If the coordinates of a point are (3, 0), then it lies in:",
   option:[
     { a:"X-axis"},
     { b:"Y-axis"},
     { c:"At origin"},
     { d:"Between x-axis and y-axis"},
    ],
    answer:"a",
  },
  {question:"If the coordinates of a point are (0, -4), then it lies in:",
   option:[
     { a:"X-axis"},
     { b:"Y-axis"},
     { c:"At origin"},
     { d:"Between x-axis and y-axis"},
    ],
    answer:"b",
  },
  {question:" If the coordinates of a point are (-3,-4), then it lies in:",
   option:[
     { a:" First quadrant"},
     { b:" Seconed quadrant"},
     { c:" Third quadrant"},
     { d:" Fourt quadrant"},
    ],
    answer:"c",
  },
  {question:"If the perpendicular distance of a point P from the x-axis is 7 units and the foot of the perpendicular lies on the negative direction of x-axis, then the point P has:",
   option:[
     { a:"y-coordinate = 7 or –7 only"},
     { b:" y-coordinate = 7 only"},
     { c:"  y-coordinate = –7 only"},
     { d:" x-coordinate = –7"},
    ],
    answer:"a",
  },
  {question:" On plotting P (–3, 8), Q (7, –5), R (–3, –8) and T (–7, 9) are plotted on the graph paper, then point(s) in the third quadrant are:",
   option:[
     { a:" P and T"},
     { b:" Q and R"},
     { c:" Only R"},
     { d:" P Only R"},
    ],
    answer:"c",
  },
  {question:" Abscissa of a point is positive in:",
   option:[
     { a:" I and II quadrants"},
     { b:" I and IV quadrants"},
     { c:"  I quadrant only"},
     { d:" II quadrant only"},
    ],
    answer:"c",
  },
  {question:"The mirror of a point (3, 4) on y-axis is:",
   option:[
     { a:"(3, 4)"},
     { b:" (-3, 4)"},
     { c:" (3,-4)"},
     { d:" (-3, -4)"},
    ],
    answer:"b",
  },
  {question:"If E and F are the midpoints of equal sides AB and AC of a triangle ABC. Then:",
   option:[
     { a:"BF=AC"},
     { b:"BF=AF"},
     { c:"CE=AB"},
     { d:"BF = CE"},
    ],
    answer:"d",
  },
  {question:" If ABC and DBC are two isosceles triangles on the same base BC. Then:",
   option:[
     { a:"∠ABD = ∠ACD"},
     { b:"∠ABD < ∠ACD"},
     { c:"∠ABD > ∠ACD"},
     { d:"None of the above"},
    ],
    answer:"a",
  },
  {question:" If ABC is an equilateral triangle, then each angle equals to:",
   option:[
     { a:"90°"},
     { b:"180°"},
     { c:"120°"},
     { d:"60°"},
    ],
    answer:"d",
  },
  {question:" In a right triangle, the longest side is:",
   option:[
     { a:"Perpendicular"},
     { b:"Hypotenuse"},
     { c:"Base"},
     { d:"None of the above"},
    ],
    answer:"b",
  },
  {question:"A triangle in which two sides are equal is called:",
   option:[
     { a:"Scalene triangle"},
     { b:"Equilateral triangle"},
     { c:"Isosceles triangle"},
     { d:"None of the above"},
    ],
    answer:"b",
  },
  {question:" The quadrilateral whose all its sides are equal and angles are equal to 90 degrees, it is called:",
   option:[
     { a:"Rectangle"},
     { b:"Square"},
     { c:"Kite"},
     { d:" Parallelogram"},
    ],
    answer:"b",
  },
  {question:" A trapezium has:",
   option:[
     { a:"One pair of opposite sides parallel"},
     { b:"Two pair of opposite sides parallel to each other"},
     { c:"All its sides are equal"},
     { d:" All angles are equal"},
    ],
    answer:"a",
  },
  {question:"A diagonal of a parallelogram divides it into two congruent:",
   option:[
     { a:"Square"},
     { b:"Parallelogram"},
     { c:"Triangles"},
     { d:" Rectangles"},
    ],
    answer:"c",
  },
  {question:" The linear equation 3x-11y=10 has:",
   option:[
     { a:" Unique solution"},
     { b:"Two solutions"},
     { c:"Infinitely many solutions"},
     { d:"  No solutions"},
    ],
    answer:"c",
  },
  {question:"Point (3, 4) lies on the graph of the equation 3y = kx + 7. The value of k is:",
   option:[
     { a:"4/3"},
     { b:"5/3"},
     { c:"3"},
     { d:" 7/3"},
    ],
    answer:"b",
  },
  {question:"The graph of x = 3 is a line:",
   option:[
     { a:"Parallel to x-axis at a distance of 3 units from the origin"},
     { b:" Parallel to y-axis at a distance of 3 units from the origin"},
     { c:"Makes an intercept 3 on x-axis"},
     { d:"Makes an intercept 3 on y-axis"},
    ],
    answer:"b",
  },
  {question:" If x and y are both positive solutions of equation ax+by+c=0, always lie in:",
   option:[
     { a:" First quadrant"},
     { b:" Seconed quadrant"},
     { c:" Third quadrant"},
     { d:" Fourt quadrant"},
    ],
    answer:"a",
  },
];
// let obj=[{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a-b)^2",option:[a,b,c,b],ans:1},{question:"a^2+b^2",option:[a,b,c,b],ans:3},{question:"a^2-b^2",option:[a,b,c,b],ans:4},{question:(a+b)^2,option:[a,b,c,b],ans:2},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0}];
console.log(obj.length)

   
  
let question=document.getElementById("question");
let option0=document.getElementById("option0");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");

let radio=document.getElementsByClassName("radio");
let td=document.getElementsByClassName("td-q");
let submit=document.getElementById("submit");
td[0].style.backgroundColor="red";


//Timer
let LimtSec = 60;
let LimtMin = 19;
let y;
document.getElementById("minute").innerHTML=LimtMin;
function incrementCount() {
    if(LimtSec===0){
      LimtSec=60;
      LimtMin--;
      document.getElementById("minute").innerHTML=LimtMin;
    }
    if(LimtMin===-1){
        result(true);
        clearInterval(y);
        return;
    }
      LimtSec--;
    document.getElementById("secound").innerHTML=LimtSec;

}
 y= setInterval(incrementCount, 1000);

//dispaly the Question and Opstion

display(currentQuestion);
function display(i){
 
    question.textContent=obj[i].question;
    option0.textContent=obj[i].option[0].a;
    option1.textContent=obj[i].option[1].b;
    option2.textContent=obj[i].option[2].c;
    option3.textContent=obj[i].option[3].d;
}

//Next Question
document.getElementById("next").addEventListener("click",function(){
    console.log("helow")
    if(currentQuestion<23){

   
    currentQuestion++;
  }
    display(currentQuestion);
    console.log(ResultValue.AnsArray[currentQuestion]);
    cleraRadio();
});


//Pervious Question
document.getElementById("prev").addEventListener("click",function(){
    console.log("helow")
    if( currentQuestion>0){

      currentQuestion--;
    }
    display(currentQuestion);
    cleraRadio();
   
});

//Slelect Question from Multi-Question Area
for (let i = 0; i <td.length ; i++) {
    td[i].addEventListener("click",function(){
    // td[i].textContent=i;
    currentQuestion=i;
    display(i);
    cleraRadio();
    })
}


//radio button
console.log(radio)
let prev;
let x=true;
for(let i=0;i<radio.length;i++){
    radio[i].addEventListener("click",function(){
        if(x){
            radio[i].checked=true;
            x=false;
            prev=radio[i].id;
        }
        else{
            document.getElementById(prev).checked=false
            prev=radio[i].id;
           
        }

        if(radio[i].checked){
            switch (i) {
              case 0:
                ResultValue.AnsArray[currentQuestion]="a";
                break;
                case 1:
                  ResultValue.AnsArray[currentQuestion]="b";
                  break;
                  case 2:
                    ResultValue.AnsArray[currentQuestion]="c";
                    break;
                    case 3:
                      ResultValue.AnsArray[currentQuestion]="d";
                      break;
            
              default:
                break;
            }
            
            td[currentQuestion].style.backgroundColor="green";
            console.log(ResultValue.AnsArray[currentQuestion]);
        }
        else{
            ResultValue.AnsArray[currentQuestion]="-1";
            td[currentQuestion].style.backgroundColor="red";
        }
    });
}

//next redio clear (unCheked)
function cleraRadio(){
    x=true;
    if(ResultValue.AnsArray[currentQuestion]==="-1"){
        for (let i = 0; i < 4; i++) {
            radio[i].checked=false;
            td[currentQuestion].style.backgroundColor="red";
        }
    }
    else{
        console.log("bskjjhd")
        radio[ResultValue.AnsArray[currentQuestion]].checked=true;
    }
}

//Submit
submit.addEventListener("click",function(){
      var txt;
      if (confirm("Are you sure to submit the pepar")) {
        txt = true;
      } else {
        txt = false;
      }
     result(txt);
})


function  result(val){
    
  if(val){
     for (let i = 0; i < noQuestion; i++) {
          if(ResultValue.AnsArray[i]===obj[i].answer){
            ResultValue.Mark++;
          }
          else if(ResultValue.AnsArray[i]==="-1"){
            ResultValue.Miss++;
          }
          else{
            ResultValue.wrong++;
          }
      }
     
      console.log(ResultValue)
     

      fetch("http://localhost:3000/posts",{

        method: 'POST',

        body :JSON.stringify(ResultValue),
        headers: {
         'Content-Type': 'application/json',
        }

      }).then(function(res){
        return res.json();
      }).then(function(data){
        console.log('Success:',+data);
      })

    }
    else{
        console.log("continue...")
    }
}

async function run() {
  console.log("i am ain feach data")
  let res = await fetch("https://localhost:3000/data");
  let data = await res.json();
  console.log(data);
  return data;
}


