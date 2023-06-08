//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const displayClue = document.getElementById("clue-display");

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

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>SILAHKAN PILIH KATA YANG INGIN DITEBAK!</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
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
  //button pilih game
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
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
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter

            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            console.log(winCount);
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `
              <img src="img/win.gif" alt="">
              <h2 class='win-msg confetti'>You Win!!</h2><p>The word is <span>${chosenWord}</span></p>`;
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
        console.log(count);
        if (count == 6) {
          resultText.innerHTML = `
          <img src="img/lose.gif" alt="">
          <h2 class='lose-msg'>You Lose!!</h2><p>The word is <span>${chosenWord}</span></p>
          <h1 class='score'>80%</h1>
          `;

          playSound("audio/over.mp3");
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

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
$(document).ready(function () {
  var frameRate = 30;
  var dt = 1.0 / frameRate;
  var DEG_TO_RAD = Math.PI / 180;
  var RAD_TO_DEG = 180 / Math.PI;
  var colors = [
    ["#df0049", "#660671"],
    ["#00e857", "#005291"],
    ["#2bebbc", "#05798a"],
    ["#ffd200", "#b06c00"],
  ];

  function Vector2(_x, _y) {
    (this.x = _x), (this.y = _y);
    this.Length = function () {
      return Math.sqrt(this.SqrLength());
    };
    this.SqrLength = function () {
      return this.x * this.x + this.y * this.y;
    };
    this.Equals = function (_vec0, _vec1) {
      return _vec0.x == _vec1.x && _vec0.y == _vec1.y;
    };
    this.Add = function (_vec) {
      this.x += _vec.x;
      this.y += _vec.y;
    };
    this.Sub = function (_vec) {
      this.x -= _vec.x;
      this.y -= _vec.y;
    };
    this.Div = function (_f) {
      this.x /= _f;
      this.y /= _f;
    };
    this.Mul = function (_f) {
      this.x *= _f;
      this.y *= _f;
    };
    this.Normalize = function () {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / Math.sqrt(sqrLen);
        this.x *= factor;
        this.y *= factor;
      }
    };
    this.Normalized = function () {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / Math.sqrt(sqrLen);
        return new Vector2(this.x * factor, this.y * factor);
      }
      return new Vector2(0, 0);
    };
  }
  Vector2.Lerp = function (_vec0, _vec1, _t) {
    return new Vector2(
      (_vec1.x - _vec0.x) * _t + _vec0.x,
      (_vec1.y - _vec0.y) * _t + _vec0.y
    );
  };
  Vector2.Distance = function (_vec0, _vec1) {
    return Math.sqrt(Vector2.SqrDistance(_vec0, _vec1));
  };
  Vector2.SqrDistance = function (_vec0, _vec1) {
    var x = _vec0.x - _vec1.x;
    var y = _vec0.y - _vec1.y;
    return x * x + y * y + z * z;
  };
  Vector2.Scale = function (_vec0, _vec1) {
    return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
  };
  Vector2.Min = function (_vec0, _vec1) {
    return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
  };
  Vector2.Max = function (_vec0, _vec1) {
    return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
  };
  Vector2.ClampMagnitude = function (_vec0, _len) {
    var vecNorm = _vec0.Normalized;
    return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
  };
  Vector2.Sub = function (_vec0, _vec1) {
    return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
  };

  function EulerMass(_x, _y, _mass, _drag) {
    this.position = new Vector2(_x, _y);
    this.mass = _mass;
    this.drag = _drag;
    this.force = new Vector2(0, 0);
    this.velocity = new Vector2(0, 0);
    this.AddForce = function (_f) {
      this.force.Add(_f);
    };
    this.Integrate = function (_dt) {
      var acc = this.CurrentForce(this.position);
      acc.Div(this.mass);
      var posDelta = new Vector2(this.velocity.x, this.velocity.y);
      posDelta.Mul(_dt);
      this.position.Add(posDelta);
      acc.Mul(_dt);
      this.velocity.Add(acc);
      this.force = new Vector2(0, 0);
    };
    this.CurrentForce = function (_pos, _vel) {
      var totalForce = new Vector2(this.force.x, this.force.y);
      var speed = this.velocity.Length();
      var dragVel = new Vector2(this.velocity.x, this.velocity.y);
      dragVel.Mul(this.drag * this.mass * speed);
      totalForce.Sub(dragVel);
      return totalForce;
    };
  }

  function ConfettiPaper(_x, _y) {
    this.pos = new Vector2(_x, _y);
    this.rotationSpeed = Math.random() * 600 + 800;
    this.angle = DEG_TO_RAD * Math.random() * 360;
    this.rotation = DEG_TO_RAD * Math.random() * 360;
    this.cosA = 1.0;
    this.size = 5.0;
    this.oscillationSpeed = Math.random() * 1.5 + 0.5;
    this.xSpeed = 40.0;
    this.ySpeed = Math.random() * 60 + 50.0;
    this.corners = new Array();
    this.time = Math.random();
    var ci = Math.round(Math.random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    for (var i = 0; i < 4; i++) {
      var dx = Math.cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
      var dy = Math.sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
      this.corners[i] = new Vector2(dx, dy);
    }
    this.Update = function (_dt) {
      this.time += _dt;
      this.rotation += this.rotationSpeed * _dt;
      this.cosA = Math.cos(DEG_TO_RAD * this.rotation);
      this.pos.x +=
        Math.cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt;
      this.pos.y += this.ySpeed * _dt;
      if (this.pos.y > ConfettiPaper.bounds.y) {
        this.pos.x = Math.random() * ConfettiPaper.bounds.x;
        this.pos.y = 0;
      }
    };
    this.Draw = function (_g) {
      if (this.cosA > 0) {
        _g.fillStyle = this.frontColor;
      } else {
        _g.fillStyle = this.backColor;
      }
      _g.beginPath();
      _g.moveTo(
        this.pos.x + this.corners[0].x * this.size,
        this.pos.y + this.corners[0].y * this.size * this.cosA
      );
      for (var i = 1; i < 4; i++) {
        _g.lineTo(
          this.pos.x + this.corners[i].x * this.size,
          this.pos.y + this.corners[i].y * this.size * this.cosA
        );
      }
      _g.closePath();
      _g.fill();
    };
  }
  ConfettiPaper.bounds = new Vector2(0, 0);

  function ConfettiRibbon(
    _x,
    _y,
    _count,
    _dist,
    _thickness,
    _angle,
    _mass,
    _drag
  ) {
    this.particleDist = _dist;
    this.particleCount = _count;
    this.particleMass = _mass;
    this.particleDrag = _drag;
    this.particles = new Array();
    var ci = Math.round(Math.random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    this.xOff = Math.cos(DEG_TO_RAD * _angle) * _thickness;
    this.yOff = Math.sin(DEG_TO_RAD * _angle) * _thickness;
    this.position = new Vector2(_x, _y);
    this.prevPosition = new Vector2(_x, _y);
    this.velocityInherit = Math.random() * 2 + 4;
    this.time = Math.random() * 100;
    this.oscillationSpeed = Math.random() * 2 + 2;
    this.oscillationDistance = Math.random() * 40 + 40;
    this.ySpeed = Math.random() * 40 + 80;
    for (var i = 0; i < this.particleCount; i++) {
      this.particles[i] = new EulerMass(
        _x,
        _y - i * this.particleDist,
        this.particleMass,
        this.particleDrag
      );
    }
    this.Update = function (_dt) {
      var i = 0;
      this.time += _dt * this.oscillationSpeed;
      this.position.y += this.ySpeed * _dt;
      this.position.x += Math.cos(this.time) * this.oscillationDistance * _dt;
      this.particles[0].position = this.position;
      var dX = this.prevPosition.x - this.position.x;
      var dY = this.prevPosition.y - this.position.y;
      var delta = Math.sqrt(dX * dX + dY * dY);
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      for (i = 1; i < this.particleCount; i++) {
        var dirP = Vector2.Sub(
          this.particles[i - 1].position,
          this.particles[i].position
        );
        dirP.Normalize();
        dirP.Mul((delta / _dt) * this.velocityInherit);
        this.particles[i].AddForce(dirP);
      }
      for (i = 1; i < this.particleCount; i++) {
        this.particles[i].Integrate(_dt);
      }
      for (i = 1; i < this.particleCount; i++) {
        var rp2 = new Vector2(
          this.particles[i].position.x,
          this.particles[i].position.y
        );
        rp2.Sub(this.particles[i - 1].position);
        rp2.Normalize();
        rp2.Mul(this.particleDist);
        rp2.Add(this.particles[i - 1].position);
        this.particles[i].position = rp2;
      }
      if (
        this.position.y >
        ConfettiRibbon.bounds.y + this.particleDist * this.particleCount
      ) {
        this.Reset();
      }
    };
    this.Reset = function () {
      this.position.y = -Math.random() * ConfettiRibbon.bounds.y;
      this.position.x = Math.random() * ConfettiRibbon.bounds.x;
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      this.velocityInherit = Math.random() * 2 + 4;
      this.time = Math.random() * 100;
      this.oscillationSpeed = Math.random() * 2.0 + 1.5;
      this.oscillationDistance = Math.random() * 40 + 40;
      this.ySpeed = Math.random() * 40 + 80;
      var ci = Math.round(Math.random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.particles = new Array();
      for (var i = 0; i < this.particleCount; i++) {
        this.particles[i] = new EulerMass(
          this.position.x,
          this.position.y - i * this.particleDist,
          this.particleMass,
          this.particleDrag
        );
      }
    };
    this.Draw = function (_g) {
      for (var i = 0; i < this.particleCount - 1; i++) {
        var p0 = new Vector2(
          this.particles[i].position.x + this.xOff,
          this.particles[i].position.y + this.yOff
        );
        var p1 = new Vector2(
          this.particles[i + 1].position.x + this.xOff,
          this.particles[i + 1].position.y + this.yOff
        );
        if (
          this.Side(
            this.particles[i].position.x,
            this.particles[i].position.y,
            this.particles[i + 1].position.x,
            this.particles[i + 1].position.y,
            p1.x,
            p1.y
          ) < 0
        ) {
          _g.fillStyle = this.frontColor;
          _g.strokeStyle = this.frontColor;
        } else {
          _g.fillStyle = this.backColor;
          _g.strokeStyle = this.backColor;
        }
        if (i == 0) {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x, this.particles[i].position.y);
          _g.lineTo(
            this.particles[i + 1].position.x,
            this.particles[i + 1].position.y
          );
          _g.lineTo(
            (this.particles[i + 1].position.x + p1.x) * 0.5,
            (this.particles[i + 1].position.y + p1.y) * 0.5
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x, p1.y);
          _g.lineTo(p0.x, p0.y);
          _g.lineTo(
            (this.particles[i + 1].position.x + p1.x) * 0.5,
            (this.particles[i + 1].position.y + p1.y) * 0.5
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else if (i == this.particleCount - 2) {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x, this.particles[i].position.y);
          _g.lineTo(
            this.particles[i + 1].position.x,
            this.particles[i + 1].position.y
          );
          _g.lineTo(
            (this.particles[i].position.x + p0.x) * 0.5,
            (this.particles[i].position.y + p0.y) * 0.5
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x, p1.y);
          _g.lineTo(p0.x, p0.y);
          _g.lineTo(
            (this.particles[i].position.x + p0.x) * 0.5,
            (this.particles[i].position.y + p0.y) * 0.5
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else {
          _g.beginPath();
          _g.moveTo(this.particles[i].position.x, this.particles[i].position.y);
          _g.lineTo(
            this.particles[i + 1].position.x,
            this.particles[i + 1].position.y
          );
          _g.lineTo(p1.x, p1.y);
          _g.lineTo(p0.x, p0.y);
          _g.closePath();
          _g.stroke();
          _g.fill();
        }
      }
    };
    this.Side = function (x1, y1, x2, y2, x3, y3) {
      return (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
    };
  }
  ConfettiRibbon.bounds = new Vector2(0, 0);
  confetti = {};
  confetti.Context = function (parent) {
    var i = 0;
    var canvasParent = document.getElementById(parent);
    var canvas = document.createElement("canvas");
    canvas.width = canvasParent.offsetWidth;
    canvas.height = canvasParent.offsetHeight;
    canvasParent.appendChild(canvas);
    var context = canvas.getContext("2d");
    var interval = null;
    var confettiRibbonCount = 7;
    var rpCount = 30;
    var rpDist = 8.0;
    var rpThick = 8.0;
    var confettiRibbons = new Array();
    ConfettiRibbon.bounds = new Vector2(canvas.width, canvas.height);
    for (i = 0; i < confettiRibbonCount; i++) {
      confettiRibbons[i] = new ConfettiRibbon(
        Math.random() * canvas.width,
        -Math.random() * canvas.height * 2,
        rpCount,
        rpDist,
        rpThick,
        45,
        1,
        0.05
      );
    }
    var confettiPaperCount = 25;
    var confettiPapers = new Array();
    ConfettiPaper.bounds = new Vector2(canvas.width, canvas.height);
    for (i = 0; i < confettiPaperCount; i++) {
      confettiPapers[i] = new ConfettiPaper(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }
    this.resize = function () {
      canvas.width = canvasParent.offsetWidth;
      canvas.height = canvasParent.offsetHeight;
      ConfettiPaper.bounds = new Vector2(canvas.width, canvas.height);
      ConfettiRibbon.bounds = new Vector2(canvas.width, canvas.height);
    };
    this.start = function () {
      this.stop();
      var context = this;
      this.interval = setInterval(function () {
        confetti.update();
      }, 1000.0 / frameRate);
    };
    this.stop = function () {
      clearInterval(this.interval);
    };
    this.update = function () {
      var i = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (i = 0; i < confettiPaperCount; i++) {
        confettiPapers[i].Update(dt);
        confettiPapers[i].Draw(context);
      }
      for (i = 0; i < confettiRibbonCount; i++) {
        confettiRibbons[i].Update(dt);
        confettiRibbons[i].Draw(context);
      }
    };
  };
  var confetti = new confetti.Context("confetti");
  confetti.start();
  $(window).resize(function () {
    confetti.resize();
  });
});
