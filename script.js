const firstNames = [
    "Aaron", "Abigail", "Adrian", "Aiden", "Alexa", "Alexander", "Alice", "Alyssa", "Amanda", "Amber",
    "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Austin", "Ava", "Benjamin", "Blake", "Brandon",
    "Brianna", "Brian", "Brooke", "Caleb", "Cameron", "Carlos", "Catherine", "Charlotte", "Chloe", "Christian",
    "Christopher", "Claire", "Danny", "David", "Dominic", "Dylan", "Elijah", "Elizabeth", "Emily", "Emma",
    "Ethan", "Evelyn", "Gabriel", "Grace", "Hannah", "Isaac", "Isabella", "Jacob", "James", "Jasmine"
];

const lastNames = [
    "Anderson", "Bailey", "Baker", "Barnes", "Bell", "Bennett", "Brooks", "Brown", "Butler", "Campbell",
    "Carter", "Clark", "Collins", "Cook", "Cooper", "Cox", "Davis", "Diaz", "Edwards", "Evans",
    "Fisher", "Foster", "Garcia", "Gomez", "Gonzalez", "Gray", "Green", "Hall", "Harris", "Hernandez",
    "Hill", "Howard", "Hughes", "Jackson", "James", "Jenkins", "Johnson", "Jones", "Kelly", "King",
    "Lee", "Lewwy", "Long", "Lopez", "Martin", "Martinez", "Miller", "Moore", "Morgan", "Morris"
];

function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    const firstName = firstNames[randomIndex];
    const lastName = lastNames[randomIndex];
    const randomName = firstName + ' ' + lastName;
    document.getElementById('summary-name').textContent = randomName;
    document.getElementById('user-details-name').textContent = randomName + ' (@' 
        + firstName.toLowerCase() + lastName.substring(0,1) + ')';
}

window.onload = generateRandomName;