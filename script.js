// Existing JavaScript code

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to get the machine name
function getMachineName() {
    return new Promise((resolve, reject) => {
        // Simulate fetching machine name (replace with actual fetching logic if necessary)
        setTimeout(() => {
            resolve(window.location.hostname);
        }, 1000);
    });
}

// Function to create the list
function createList() {
    let number;
    while (true) {
        number = prompt("Please enter a number between 21 and 99:");
        if (number !== null && !isNaN(number) && number >= 21 && number <= 99) {
            number = parseInt(number);
            break;
        } else {
            alert("Invalid input. Please enter a number between 21 and 99.");
        }
    }

    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; // Clear previous list if any

    const ul = document.createElement('ul');
    for (let i = 1; i <= number; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.style.backgroundColor = getRandomColor();
        ul.appendChild(li);
    }
    listContainer.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

    getMachineName().then(machineName => {
        document.getElementById('machine-name').textContent = machineName;
    });

    // Attach event listener to the button
    document.getElementById('create-list-btn').addEventListener('click', createList);
});
