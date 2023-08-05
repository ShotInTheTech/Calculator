function calculate() {
    const totalParts = parseInt(document.getElementById("totalParts").value);
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const fractions = parseInt(document.getElementById("fractions").value) / 16;
    
    const totalInches = feet * 12 + inches + fractions;
    const dividedInches = totalInches / totalParts;
    const dividedFeet = Math.floor(dividedInches / 12);
    const remainingInches = dividedInches % 12;
    const remainingFractions = Math.round((remainingInches - Math.floor(remainingInches)) * 16);

    document.getElementById("result").innerText = `Each part is ${dividedFeet} feet, ${Math.floor(remainingInches)} inches, and ${remainingFractions}/16 of an inch.`;
}
