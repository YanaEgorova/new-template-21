export const imagesList = (images) => {
  return `<div class="swiper mySwiper">
  <div class="swiper-wrapper">
       
    ${images.map(image => (
    `
    <div class="swiper-slide">
    <img src="${image}" alt="" class="img prod__subimg js_prod__subimg">
    </div>
    `
  )).join('')}

  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>`
}