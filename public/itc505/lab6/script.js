
      function showWelcomeMessage() {
          alert("Hi, Welcome to the Game!");
      }
          function makeChoice(userChoice) {
            const choices = ["rock", "paper", "scissors"];
            const randomIndex = Math.floor(Math.random() * 3);
            const computerChoice = choices[randomIndex];

            // Determine the winner
            if (userChoice === computerChoice) {
                displayOutput(`It's a tie! You both chose ${userChoice}.`);
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                displayOutput(`Congratulations! You win. ${userChoice} beats ${computerChoice}.`);
            } else {
                displayOutput(`Sorry, you lose. ${computerChoice} beats ${userChoice}.`);
            }
        }

        function displayOutput(message) {
            document.getElementById("output").textContent = message;
        }
