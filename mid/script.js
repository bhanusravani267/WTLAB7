const story = {
    start: {
      text: "Standing outside your House, Choose your direction",
      choices: ["Take a left", "Take a Right"],
      consequences: ["TargetSignal", "SBS"],
      image: "UWApartments.jpg"
    },
    TargetSignal: {
      text: "Great!! You took a left. Now you are at Target Signal.",
      choices: ["Take Right", "Go Straight", "Take Left"],
      consequences: ["Doms", "TinsleyHall","Target"],
      image: "target_Signal.jpg"
    },
    Doms: {
      text: "You moved Right, You are now near college doms.",
      choices: ["Go left", "Go Straight", "Take a RIght"],
      consequences: ["Hotspot", "Bio", "HLC"],
      image: "dorms.jpeg"
    },
    Hotspot: {
      text: "Welcome to Hotspot!! You have reached your destination!!",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "hotspot.jpg"
    },
    Bio: {
      text: "Welcome to BioScience!! You have reached your destination!!",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "bioscience.jpg"
    },
    HLC: {
      text: "Welcome to HLC!! You have reached your destination!!",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "hlc.jpg"
    },
    TinsleyHall: {
      text: "You are now at TinsleyHall!!! Please choose your direction.",
      choices: ["Go Straight", "Take a left"],
      consequences: ["Cline", "SICCS"],
      image: "Tinsley.jpg"
    },
    Cline: {
      text: "You are near Cline Library! You are moving straight",
      choices: ["Go Straight"],
      consequences: ["CIE"],
      image: "cline.jpg"
    },
    SICCS: {
      text: "You reached your destination 'SICCS'!",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "SICCS.jpg"
    },
    CIE: {
      text: "You have Reached your destination 'CIE' on your left.",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "CIE.jpg"
    },
    Target: {
      text: "You are at Target outside your University.",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "target.jpg"
    },
    //Right side
    SBS: {
      text: "Great!! You took a right. Now you are at SBS.",
      choices: ["Take a Left", "Go Straight", "Take a Right"],
      consequences: ["Skydome", "Castro","Walmart"],
      image: "SBS.jpeg"
    },
    //R-L
    Skydome: {
      text: "Wohooo!! You've reached your destination 'SKYDOME'!!. Enjoy your Day..",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "Skydome.jpeg"
    },
    //R-S
    Castro: {
      text: "You are now at Castro Building. Choose your direction.",
      choices: ["Take a Left", "Take a Right"],
      consequences: ["EngBuild", "Dubs"],
      image: "castro.jpg"
    },
    //R-S-R
    Dubs: {
      text: "Wohooo!! You've reached your destination 'DUBOIS'!!.",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "dubois.jpg"
    },
    //R-S-L
    EngBuild: {
      text: "Wohooo!! You've reached your destination 'Engineering Building'!!.",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "NAU Engineering Building.jpg"
    },
    Walmart: {
      text: "You are at Walmart outside your University...",
      choices: ["Start Again"],
      consequences: ["start"],
      image: "Walmart.jpeg"
    },
  };
  
  let currentStage = 'start';
  
  function startGame() {
    currentStage = 'start';
    updatePage();
  }
  
  function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story-text').innerText = stage.text;
  
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
  
    stage.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.innerText = choice;
      button.addEventListener('click', () => makeChoice(index));
      choicesContainer.appendChild(button);
    });
  
    const image = document.getElementById('story-image');
    image.src = stage.image;
  }
  
  function makeChoice(index) {
    const stage = story[currentStage];
    const nextStage = stage.consequences[index];
    currentStage = nextStage;
    updatePage();
  }
  
  // Start the game
  startGame();
  