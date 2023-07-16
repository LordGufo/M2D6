// ESERCIZIO 7
function changeStoreName(newName) {
    var storeNameElement = document.getElementById('store-id');
    storeNameElement.innerHTML = newName;
  }
  
  // ESERCIZIO 8
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // ESERCIZIO 9
  function changeStoreAddress(newAddress) {
    var storeAddressElement = document.querySelector('#piede .indirizzo');
    storeAddressElement.innerHTML = newAddress;
  }
  
  // ESERCIZIO 10
  function addAmazonLinkClass() {
    var amazonLinks = document.querySelectorAll('a.link');
    for (var i = 0; i < amazonLinks.length; i++) {
      amazonLinks[i].classList.add('amazon-link');
    }
  }
  
  // ESERCIZIO 11
  function toggleImageVisibility() {
    var productImages = document.querySelectorAll('#prodotti img');
    for (var i = 0; i < productImages.length; i++) {
      productImages[i].classList.toggle('hidden');
    }
  }
  
  // ESERCIZIO 12
  function changePriceColor() {
    var productPrices = document.querySelectorAll('#prodotti .prezzo');
    for (var i = 0; i < productPrices.length; i++) {
      var randomColor = getRandomColor();
      productPrices[i].style.color = randomColor;
    }
  }