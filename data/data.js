const articalElement = document.querySelector(".artical-item");
console.log(articalElement);
//1 tạo mảng product
let articals = [
    {
        id: 1,
        artical_url: './beautifulGirl/nhan-sac-cua-nu-coser-3-trieu-follow-dinh-dam-so-huu-loi-the-khung-ngay-ngat-long-nguoi.html',
        artical_thumb: './beautifulGirl/nhan-sac-cua-nu-coser-3-trieu-follow-dinh-dam-so-huu-loi-the-khung-ngay-ngat-long-nguoi/bgirl.png',
        artical_name: 'Nhan sắc của nữ coser 3 triệu follow đình đám, sở hữu lợi thế khủng ngây ngất lòng người',
        artical_category: 'Beautiful-Girl',
        artical_date: '04/12/2025'
    },
     {
        id: 2,
        artical_url: './tech/Nokia-6500-Slide.html',
        artical_thumb: './tech/nokia_6500_slide/nokia_6500_slide.jpg',
        artical_name: 'Top điện thoại nắp trượt Nokia đình đám một thời',
        artical_category: 'Tech',
        artical_date: '04/12/2025'
    },
     {
        id: 3,
        artical_url: './life/quote-of-the-day-by-nikola-tesla.html',
        artical_thumb: 'https://img.jagranjosh.com/images/2025/12/02/article/image/Quote-of-the-Day-by-Nikola-Tesla!-1764622324837.webp',
        artical_name: 'Quote of the Day by Nikola Tesla:Let the future tel..',
        artical_category: 'Life',
        artical_date: '05/12/2025'
    },
];

//2.Xuất dữ liệu lên html với array map
let articalHtml = articals.map((Element) => {
    return `
        <div class="media artical-item my-2">
            <a href="${Element.artical_url}">
                <img src="${Element.artical_thumb}" style="height: 80px;" class="mr-3" alt="">
             </a>
            <div class="media-body">
                 <a href="${Element.artical_url}">
                     <h5>${Element.artical_name}</h5>
                  </a>
                  <span>${Element.artical_category} | ${Element.artical_date} </span>
             </div>
         </div>
            `;
})

articalElement.innerHTML = articalHtml.join("");