function inSoNguyenTo() {
  let number = document.getElementById('inputNumber').value,
    ketQua = '';
  for (let i = 1; i <= number; i++) {
    checkPrime(i) ? (ketQua += ' ' + i) : ketQua;
  }
  document.getElementById('ketQua').innerHTML = ketQua;
}

checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i == 0) return false;
  return num > 1;
};
