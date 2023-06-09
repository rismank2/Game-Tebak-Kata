//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const displayClue = document.getElementById("clue-display");

let userName = localStorage.getItem("username");
let score = 0;
// console.log(userName);

// let nameUser = document.getElementById("password").value;

//Options values for buttons
let options = {
  buah: [
    "Nanas",
    "Pisang",
    "Manggis",
    "Mangga",
    "Rambutan",
    "Semangka",
    "Apel",
    "Anggur",
    "Alpukat",
    "Pepaya",
  ],
  hewan: [
    "Kucing",
    "Ayam",
    "Kerbau",
    "Sapi",
    "Kuda",
    "Zebra",
    "Anjing",
    "Kelinci",
    "Buaya",
    "Semut",
  ],
  negara: [
    "India",
    "Belanda",
    "Indonesia",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
    "Singapore",
    "Vietnam",
    "Argentina",
    "Thailand",
  ],
};

//kondisi baru

//count
let winCount = 0;
let count = 0;
let poins = 0;
let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>SILAHKAN PILIH KATA YANG INGIN DITEBAK!</h3>
  <h4>Player : ${userName} | Score : ${poins}</h4>
  `;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>
    
    `;
  }
  // playSound("audio/start.mp3");
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");

  function soundStar(audioName) {
    let audio = new Audio(audioName);
    audio.play();
  }
  //button pilih game
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    soundStar("audio/start.mp3");
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";
  displayClue.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();
  // console.log(chosenWord);
  let clueGame = "";
  switch (chosenWord) {
    case "NANAS":
      clueGame = `Buah ini memiliki kulit berduri, biasnya di jus`;
      break;
    case "PISANG":
      clueGame = `Buah ini memiliki kulit kuning yang mudah dikupas`;
      break;
    case "MANGGIS":
      clueGame = `Buah ini memiliki kulit berwarna ungu tua`;
      break;
    case "MANGGA":
      clueGame = `Buah ini memiliki kulit yang halus dan berwarna hijau atau kuning`;
      break;
    case "RAMBUTAN":
      clueGame = `Buah ini memiliki bulu-bulu halus di kulitnya`;
      break;
    case "SEMANGKA":
      clueGame = `Buah ini memiliki kulit hijau yang tebal dan daging merah`;
      break;
    case "APEL":
      clueGame = `Buah ini memiliki kulit yang berwarna merah atau hijau`;
      break;
    case "ANGGUR":
      clueGame = `Buah ini tumbuh dalam kelompok dan biasanya berwarna ungu`;
      break;
    case "ALPUKAT":
      clueGame = `Buah ini memiliki kulit yang berwarna hijau gelap dan berbentuk bulat`;
      break;
    case "PEPAYA":
      clueGame = `Buah ini memiliki kulit yang tipis dan daging yang oranye`;
      break;

    //case hewan
    case "KUCING":
      clueGame = `Hewan ini suka bermain dan terkadang menjadi hewan peliharaan`;
      break;
    case "AYAM":
      clueGame = `Hewan ini memiliki sayap dan kaki yang pendek`;
      break;
    case "KERBAU":
      clueGame = `Hewan ini memiliki ukuran tubuh yang besar dengan tanduk melengkung`;
      break;
    case "SAPI":
      clueGame = `Hewan ini memiliki tubuh besar dan kuat dengan empat kaki`;
      break;
    case "KUDA":
      clueGame = `Hewan ini memiliki kecepatan dan kekuatan yang luar biasa`;
      break;
    case "ZEBRA":
      clueGame = `Hewan ini memiliki tubuh yang besar dan bergaris hitam putih`;
      break;
    case "ANJING":
      clueGame = `Hewan ini merupakan hewan peliharaan yang setia dan dapat dilatih`;
      break;
    case "KELINCI":
      clueGame = `Hewan ini memiliki telinga yang panjang dan bulu yang lembut`;
      break;
    case "BUAYA":
      clueGame = `Saya adalah duo F (Frhan|Faris) suka godain cewek tetangga. Hallo Dek.... !`;
      break;
    case "SEMUT":
      clueGame = `Hewan ini merupakan serangga yang hidup dalam koloni besar`;
      break;

    //case NEGARA
    case "INDIA":
      clueGame = `Negara ini terkenal dengan kekayaan budaya, seperti tarian Bollywood dan yoga`;
      break;
    case "BELANDA":
      clueGame = `Negara ini terkenal dengan kincir angin, dan lukisan-lukisan klasik`;
      break;
    case "INDONESIA":
      clueGame = `Negara ini memiliki budaya yang kaya, seperti tari tradisional dan batik.`;
      break;
    case "SWITZERLAND":
      clueGame = `Negara ini terkenal dengan pegunungan Alpen, keju, dan jam tangan`;
      break;
    case "ZIMBABWE":
      clueGame = `Negara ini terletak di Afrika Selatan`;
      break;
    case "DOMINICA":
      clueGame = `Roseau adalah ibu kota negara ini`;
      break;
    case "SINGAPORE":
      clueGame = `Negara ini terkenal dengan kebersihan, dan masakan hawker yang lezat`;
      break;
    case "VIETNAM":
      clueGame = `Negara ini terkenal dengan kuil Angkor Wat dan Teluk Ha Long`;
      break;
    case "ARGENTINA":
      clueGame = `Negara ini terkenal dengan tango, steak, dan olahraga sepak bola`;
      break;
    case "THAILAND":
      clueGame = `Negara ini terkenal dengan kuil-kuil yang indah dan masakan Tomyum`;
      break;

    default:
      clueGame = `Clue Game Not Found !`;
      break;
  }

  // console.log(chosenWord + chosenWord.length);
  //Ganti huruf dengan slash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  let display = `<span class="dashes">${clueGame}</span>`;
  //Display each element as span
  userInputSection.innerHTML = displayItem;
  displayClue.innerHTML = display;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;
  displayClue.innerHTML = "";

  //membuat game baru
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.play();
  }

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      let parse = (count / chosenWord.length) * 100;
      let total = 100 - parse;
      score = Math.ceil(total);
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter

            dashes[index].innerText = char;
            //increment counter
            winCount += 1;

            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `
              <img src="img/win.gif" alt="">
              <h2 class='win-msg confetti'>Hai..${userName}, You Win!!</h2><p>The word is <span>${chosenWord}</span></p>
              <h1 class='score'>Score : ${score}</h1>
              `;
              playSound("audio/win.mp3");
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        // console.log(count);
        if (count == 6) {
          resultText.innerHTML = `
          <img src="img/lose.gif" alt="">
          <h2 class='lose-msg'>Hai..${userName}, You Lose!!</h2><p>The word is <span>${chosenWord}</span></p>
          <h1 class='score'>Score : ${score}</h1>
          `;

          playSound("audio/over.mp3");
          blocker();
        }
      }

      // console.log(count + "==" + chosenWord.length);
      //disable clicked button
      button.disabled = true;
    });

    letterContainer.append(button);
  }
  poins += score;
  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;

//confetti
