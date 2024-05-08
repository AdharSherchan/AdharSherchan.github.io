// For Header of all pages on the website
function getHeader() {
    document.write('<meta charset="utf-8">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">');
    document.write('<link rel="stylesheet" href="styles.css">');
    document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
}

// For Accordion used in Projects and Experience page
function getAccordion() {
    const accordionHeaders = document.getElementsByClassName('accordion-header');
    const accordionContents = document.getElementsByClassName('accordion-content');
    const accordionIcons = document.getElementsByClassName('accordion-icon'); 

    for (let i = 0; i < accordionHeaders.length; i++){
        accordionHeaders[i].addEventListener('click', () => 
        {   
            accordionContents[i].style.display = accordionContents[i].style.display == 'block' ? 'none' : 'block';
            accordionIcons[i].innerHTML = accordionContents[i].style.display == 'block' ? '-' : '+';
        });
    }
}

// For Valentine Project
function getName() {
    var name = document.getElementById('name').value;
        if (name.trim() === '') {
        alert('Please enter a name.');
        return;
        }
    var firstPageDiv = document.querySelector('.firstpage');
    firstPageDiv.innerHTML = "Happy Valentines Day " + name; // When you click the button to submit name, it replace everything inside the div
    document.body.style.backgroundColor = "white"; // Changes the background color of the page
    
    //Creating a heart
    var canvas = document.getElementById("myCanvas");
    canvas.style.border = "1px solid #000000";
    var ctx = canvas.getContext("2d");

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Draw the left semicircle of the heart top
    ctx.beginPath();
    ctx.arc(centerX - 40, centerY - 20, 40, Math.PI, 0); // Arc for left semicircle
    ctx.stroke();

    // Draw the right semicircle of the heart top
    ctx.beginPath();
    ctx.arc(centerX + 40, centerY - 20, 40, Math.PI, 0); // Arc for right semicircle
    ctx.stroke();

    // Draw a line from top left to bottom center
    ctx.beginPath();
    ctx.moveTo(centerX - 80, centerY - 20);
    ctx.lineTo(centerX, centerY + 80);
    ctx.stroke();

    // Draw another line from top right to bottom center
    ctx.beginPath();
    ctx.moveTo(centerX + 80, centerY - 20);
    ctx.lineTo(centerX, centerY + 80);
    ctx.stroke();
}

// FOR Zodiac Project
function getHoroscope() {
    const birthdayInput = document.getElementById('birthday');
    const horoscopeResult = document.getElementById('horoscopeResult');
    const birthday = new Date(birthdayInput.value);
    
    if (isNaN(birthday)) {
      horoscopeResult.textContent = "Please enter a valid birthday!";
      return;
    }

    const month = birthday.getMonth() + 1; 
    const day = birthday.getDate();

    // Finding horoscope using the month and day
    let horoscope = "";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) { 
      horoscope = "Capricorn"; 
      document.body.style.backgroundColor = "Red";
      document.getElementById("zodiac-description").innerHTML = "Capricorn, symbolized by the goat, are known for their ambition, discipline, and resilience. They have a practical approach to life and are willing to work hard to achieve their goals. Capricorns value stability and long-term success.";
      document.getElementById("zodiac-image").src="zodiac/capricorn.png"
    }
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      horoscope = "Aquarius";
      document.body.style.backgroundColor = "Yellow";
      document.getElementById("zodiac-description").innerHTML = "Aquarius, represented by the water bearer, are known for their individuality, humanitarianism, and intellectual curiosity. They're often ahead of their time, embracing innovation and championing social causes.";
      document.getElementById("zodiac-image").src="zodiac/aquarius.png"
    }
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      horoscope = "Pisces";
      document.body.style.backgroundColor = "Lavander";
      document.getElementById("zodiac-description").innerHTML = "Pisces, symbolized by the fish, are known for their empathy, creativity, and sensitivity. They possess a deep connection to the subconscious mind and are often drawn to the arts and spiritual pursuits. Pisces are compassionate and intuitive, often serving as a source of comfort for others.";
      document.getElementById("zodiac-image").src="zodiac/pisces.png"
    }
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      horoscope = "Aries";
      document.body.style.backgroundColor = "Orange";
      document.getElementById("zodiac-description").innerHTML = "Aries, represented by the ram, are known for their boldness, enthusiasm, and courage. They're natural leaders who thrive on challenge and excitement. With a fiery spirit, they fearlessly pursue their goals, often with a pioneering attitude.";
      document.getElementById("zodiac-image").src="zodiac/aries.png"
    }
    else if ((month === 4 && day >= 20) || (month === 5 && day <=20)) {
      horoscope = "Taurus";
      document.body.style.backgroundColor = "Blue";
      document.getElementById("zodiac-description").innerHTML = "Taurus, symbolized by the bull, are known for their grounded nature, reliability, and determination. They appreciate stability and comfort, valuing loyalty and tradition. With their patient and practical approach, they steadily work towards their ambitions.";
      document.getElementById("zodiac-image").src="zodiac/taurus.png"
    }
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)){
      horoscope = "Gemini";
      document.body.style.backgroundColor = "Brown";
      document.getElementById("zodiac-description").innerHTML = "Gemini, represented by the twins, are known for their versatility, curiosity, and quick wit. They possess a dual nature, often adaptable and communicative, with a love for variety and intellectual stimulation. Their dynamic energy keeps life interesting.";
      document.getElementById("zodiac-image").src="zodiac/gemini.png"
    }
    else if ((month === 6 && day >= 21) || (month === 7 && day <=22)) {
      horoscope = "Cancer";
      document.body.style.backgroundColor = "Pink";
      document.getElementById("zodiac-description").innerHTML = "Cancer, symbolized by the crab, are known for their nurturing, intuitive, and emotional nature. They're deeply connected to their emotions and those of others, often seeking security and comfort in their relationships and home life.";
      document.getElementById("zodiac-image").src="zodiac/cancer.png"
    }
    else if ((month === 7 && day >= 23) || (month === 8 && day <=22)) {
      horoscope = "Leo";
      document.body.style.backgroundColor = "Green";
      document.getElementById("zodiac-description").innerHTML = "Leo, represented by the lion, are known for their confidence, generosity, and charisma. They possess natural leadership qualities and a flair for the dramatic. Leos thrive on admiration and love to shine in the spotlight.";
      document.getElementById("zodiac-image").src="zodiac/leo.png"
    }
    else if ((month === 8 && day >= 23) || (month === 9 && day <=22)) {
      horoscope = "Virgo";
      document.body.style.backgroundColor = "Purple";
      document.getElementById("zodiac-description").innerHTML = "Virgo, symbolized by the maiden, are known for their practicality, attention to detail, and analytical mindset. They have a strong sense of duty and strive for perfection in everything they do, often serving as reliable problem-solvers.";
      document.getElementById("zodiac-image").src="zodiac/virgo.png"
    }
    else if ((month === 9 && day >= 23) || (month === 10 && day <=22)) {
      horoscope = "Libra";
      document.body.style.backgroundColor = "Grey";
      document.getElementById("zodiac-description").innerHTML = "Libra, represented by the scales, are known for their diplomacy, charm, and love of harmony. They value fairness and justice, often seeking balance in their relationships and surroundings. Libras have a natural ability to see multiple perspectives.";
      document.getElementById("zodiac-image").src="zodiac/libra.png"
    }
    else if ((month === 10 && day >= 23) || (month === 11 && day <=21)) {
      horoscope = "Scorpio";
      document.body.style.backgroundColor = "Orange";
      document.getElementById("zodiac-description").innerHTML = "Scorpio, symbolized by the scorpion, are known for their intensity, passion, and determination. They possess a deep emotional depth and are fiercely loyal to those they care about. Scorpios have a magnetic presence and are drawn to the mysteries of life.";
      document.getElementById("zodiac-image").src="zodiac/scorpio.png"
    }
    else if ((month === 11 && day >= 22) || (month === 12 && day <=21)) {
      horoscope = "Sagittarius";
      document.body.style.backgroundColor = "Beige";
      document.getElementById("zodiac-description").innerHTML = "Sagittarius, represented by the archer, are known for their optimism, adventurous spirit, and love of freedom. They crave new experiences and knowledge, often embarking on journeys both physical and intellectual.";
      document.getElementById("zodiac-image").src="zodiac/sagittarius.png"
    }

    horoscopeResult.textContent = "Your horoscope is: " + horoscope;
  }