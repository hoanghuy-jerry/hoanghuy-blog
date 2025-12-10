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
        artical_thumb: './life/tesla/Quote-of-the-Day-by-Nikola-Tesla!-(1)-1764622539166.jpg',
        artical_name: 'Quote of the Day by Nikola Tesla:Let the future tel..',
        artical_category: 'Life',
        artical_date: '05/12/2025'
    },
    {
        id: 4,
        artical_url: './life/quote-of-the-day-by-marie-curie.html',
        artical_thumb: './life/marie-curie/marie-curie.jpg',
        artical_name: 'Quote of the Day by Marie Curie:"Life is not easy for any of us.But we must have... ',
        artical_category: 'Life',
        artical_date: '07/12/2025'
    },
    {
        id: 5,
        artical_url: './life/Quote-of-the-day-by-Aristotle.html',
        artical_thumb: './life/aristotle/aristotle.jpg',
        artical_name: 'Quote of the day by Aristotle: Whosoever is delighted in solitude is either a wild beast or a God ',
        artical_category: 'Life',
        artical_date: '10/12/2025'
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