// const selectBtn = document.querySelector(".select-btn"),
//       items = document.querySelectorAll(".item");

// selectBtn.addEventListener("click", () => {
//     selectBtn.classList.toggle("open");
// });

// items.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked");
//     });
// })

let elements = document.querySelectorAll('.select-btn');

elements.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle("open");
    })
});


//Product card

const swiperAllImages = new Swiper('.AllImages', {
    // Optional parameters
    effect: 'slide',
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    loopPreventsSliding: true,
    rewind: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-AllImages',
      prevEl: '.swiper-button-prev-AllImages',
    },
  
});

const swiperInInterior = new Swiper('.InInterior', {
    // Optional parameters
    effect: 'slide',
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    loopPreventsSliding: true,
    rewind: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


const input = document.getElementById('item-total-input');

const handleClick = event => {
  const dataType = event.target.dataset.type
  const value = Number(input.value.trim()) || 0
  switch (dataType) {
    case 'minus':
      input.value = value - 1
      break
    case 'plus':
      input.value = value + 1
      break
  };
  if(value === 1){
    switch (dataType) {
      case 'minus':
        input.value = value - 0
        break
    }
  }
}

document.querySelectorAll('.item-total-btn').forEach(item => {
  item.addEventListener('click', handleClick)
})


let chars = document.getElementById('chars');
let showCharsBtn = document.getElementById('showCharsBtn');
let showChars = () => {
  chars.classList.toggle('active');
  showCharsBtn.classList.toggle('active');
}
showCharsBtn.addEventListener('click', showChars);

