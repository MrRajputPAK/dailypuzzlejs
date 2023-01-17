let puzzle = document.querySelector('.puzzle')
document.querySelector('.congrats').style.display='none'
document.querySelector('.oops').style.display='none'

// ..................Images Values..................

var imagesArray = [
  45, //1
  74, //2
  59, //3
  56, //4
  53, //5
  13, //6
  15, //7
  62, //8
  34, //9
  66, //10
  23, //11
  43, //12
]

// ..................Arrays..................

let imgVal= []
let storedAns = []

// ..................Sets Values in Arrays..................

let imgVal1=[34,45,53]
let imgVal2=[15,45,66]
let imgVal3=[23,53,74]
let imgVal4=[15,34,74]
let imgVal5=[56,59,62]
let imgVal6=[23,34,66]

// ..................Append Image..................

const imgContainer = document.querySelector('.images')
imagesArray.forEach((val) => {
  const image = document.createElement('img');
  image.src = `https://www.setgame.com/sites/all/modules/setgame_set/assets/images/${val}.gif`
  imgContainer.appendChild(image)
    imagesArray.forEach(() => {
      image.onclick = () => {
        image.classList.toggle("img-rounded-border");
        imgVal.push(val)
        console.log(imgVal);
        imgVal.sort()
        if (isEqual(imgVal, imgVal1)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
        }
        else if (isEqual(imgVal, imgVal2)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
          console.log("matched");
        }
        else if (isEqual(imgVal, imgVal3)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
          console.log("matched");
        }
        else if (isEqual(imgVal, imgVal4)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
          console.log("matched");
        }
        else if (isEqual(imgVal, imgVal5)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
          console.log("matched");
        }
        else if (isEqual(imgVal, imgVal6)) {
          showImage()
          console.log(storedAns);
          imgVal.length= 0
          console.log(imgVal);
          console.log("matched");
        }
        else if (imgVal.length>2) {
          imgVal.length= 0
          console.log(imgVal);
          console.log("not matched");
          document.querySelector('.oops').style.display='block'
          setTimeout(() => {
            document.querySelector('.oops').style.display='none'
          }, 5000);
        }
      }
    })
  })

// ..................Arrays Compare..................

  function isEqual(imgVal, imgVal1) {
    return imgVal.join() == imgVal1.join();
   }
  function notEqual(imgVal, imgVal1) {
    return imgVal.join() !== imgVal1.join();
   }
  function isEqual(imgVal, imgVal2)
  {
  return imgVal.join() == imgVal2.join();
  }
  function isEqual(imgVal, imgVal3)
  {
  return imgVal.join() == imgVal3.join();
  }
  function isEqual(imgVal, imgVal4)
  {
  return imgVal.join() == imgVal4.join();
  }
  function isEqual(imgVal, imgVal5)
  {
  return imgVal.join() == imgVal5.join();
  }
  function isEqual(imgVal, imgVal6)
  {
  return imgVal.join() == imgVal6.join();
  }
 
// ..................Table create and styling..................

  const tableContainer = document.querySelector('.table')
  tableContainer.style.height='60vh';
  tableContainer.style.width='300px';
  tableContainer.style.backgroundColor='white';

// ..................Show Image Function..................

function showImage() {
  imgVal.forEach((val)=>{
    const div = document.createElement('div')
    div.classList.add('col-4');
    div.innerHTML=`<img src='https://www.setgame.com/sites/all/modules/setgame_set/assets/images/${val}.gif' class='img-fluid' alt=''>`
    tableContainer.append(div)
    console.log(div);
    document.querySelector('.congrats').style.display='block'
  })
  setTimeout(() => {
    document.querySelector('.congrats').style.display='none'
  }, 5000);
}

// function showBox() {
//   if (!storedAns.some( ai => imgVal.includes(ai) )) {

//     if (!imgVal.some( ai => storedAns.includes(ai) )) {
//       for (var i of imgVal) {
//         storedAns.push(i);
//       }
//       document.querySelector('.congrats').style.display='block'
//     }
//   }
// setTimeout(() => {
//   document.querySelector('.congrats').style.display='none'
// }, 5000);

// }