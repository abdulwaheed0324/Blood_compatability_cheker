
  function checkCompatibility() {
    const donor = document.getElementById('donor').value;
    const recipient = document.getElementById('recipient').value;
  
    if (compatibilityChart[donor].includes(recipient)) {
      document.getElementById('result').innerText = 
        `Compatible: ${donor} can donate to ${recipient}.`;
      document.getElementById('result').style.color = "green";
    } else {
      document.getElementById('result').innerText = 
        `Not Compatible: ${donor} cannot donate to ${recipient}.`;
      document.getElementById('result').style.color = "red";
    }
  }
  