const submitButton = document.querySelectorAll('.form-group .input-submit');
let arr = [];
updateCart();  

console.log(JSON.parse(localStorage.getItem('orders')))

submitButton.forEach((buttons) => {   
  buttons.addEventListener('hover', () => {
    console.log('called buttons');
    alert('Hello function is called');
        const number = buttons.dataset.item;
        console.log(number);

        const image = document.querySelector(`.image-${number} .img`).style.backgroundImage;
        const heading = document.querySelector(`.heading-${number}`).textContent;
        const desc = document.querySelector(`.desc-${number}`).textContent;
        const qty = document.querySelector(`input.qty-${number}`).value;
        const price = document.querySelector(`.price-${number} span`).textContent;

        console.log(qty)

        // if (localStorage.getItem('orders') != null)
        //   arr = JSON.parse(localStorage.getItem('orders')); 
          // else{

            // arr = JSON.parse(localStorage.getItem('orders'))
            arr.push({ image, heading, desc, price, qty });
            localStorage.setItem('orders', JSON.stringify(arr));
          // }  

        updateCart();

    })
});

console.log('yesss')

function updateCart() {
    console.log('called')
    const addToCart = document.querySelector('.add_to_cart');
    // if (localStorage.getItem('orders') == null)
    //     return;


    arr = JSON.parse(localStorage.getItem('orders'));

    arr.forEach((order) => {
        const str = `<div class="col-md-4 text-center">
        <div class="menu-wrap image-2">
          <a href="#" class="menu-img img mb-4" style="background-image:url(${order.image.slice(5,-2)});"></a>
          <div class="text">
            <h3 class="heading-2"><a href="#">${order.heading}</a></h3>
            <p class="desc-2">${order.desc}</p>
            <form>
              <div class="form-group">
                <p class="price price-2"><span> ${order.price}</span>
                <div class="col justify-content-center">
                  <p>Quantity</p> 
                   <p>${order.qty}</p>
                </div>
            </form>
          </div>
        </div>
      </div>`;
        addToCart.innerHTML+=str;
        console.log(addToCart)
    })
}