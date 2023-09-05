const button = document.querySelector("button");

button.addEventListener("click", () => {
  const num = document.querySelector("#number").value;
  for (let i = 0; i <= num; i++) {
    let container = document.createElement("div");
    container.textContent = i.toString();
    container.style.width = "50px"
    // function to check if a number is a prime number
    function isPrime(number) {
      if (number <= 1) return false;
      if (number <= 3) return true;

      if (number % 2 === 0 || number % 3 === 0) return false;

      for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
      }
 
      return true;
    }

    if (isPrime(i)) {
      container.style.backgroundColor = "orange";
    } else if (i % 2 === 0) {
      container.style.backgroundColor = "green";
    } else if (i % 2 !== 0) {
      container.style.backgroundColor = "magenta";
    }
    let containerElement = document.querySelector("#numberContainer");
    containerElement.appendChild(container);
  }
});
