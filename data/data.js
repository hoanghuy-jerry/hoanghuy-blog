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
        artical_date: '04/12/2025',
        active: 'false',
    },
    {
        id: 2,
        artical_url: './tech/top-dien-thoai-hoai-co-hap-dan-thu-vi-va-hang-ao-uoc.html',
        artical_thumb: './tech/nokia_6500_slide/nokia_6500_slide.jpg',
        artical_name: 'Top điện thoại hoài cổ, hấp dẫn, thú vị, và hằng ao ước',
        artical_category: 'Tech',
        artical_date: '04/12/2025',
        active: 'true',
    },
    {
        id: 3,
        artical_url: './life/quote-of-the-day-by-nikola-tesla.html',
        artical_thumb: './life/tesla/Quote-of-the-Day-by-Nikola-Tesla!-(1)-1764622539166.jpg',
        artical_name: 'Quote of the Day by Nikola Tesla:Let the future tel..',
        artical_category: 'Life',
        artical_date: '05/12/2025',
        active: 'true',
    },
    {
        id: 4,
        artical_url: './life/quote-of-the-day-by-marie-curie.html',
        artical_thumb: './life/marie-curie/marie-curie.jpg',
        artical_name: 'Quote of the Day by Marie Curie:"Life is not easy for any of us.But we must have... ',
        artical_category: 'Life',
        artical_date: '07/12/2025',
        active: 'true',
    },
    {
        id: 5,
        artical_url: './life/Quote-of-the-day-by-Aristotle.html',
        artical_thumb: './life/aristotle/aristotle.jpg',
        artical_name: 'Quote of the day by Aristotle: Whosoever is delighted in solitude is either a wild beast or a God ',
        artical_category: 'Life',
        artical_date: '10/12/2025',
        active: 'true',
    },
    {
        id: 6,
        artical_url: './one-day-one -sentence/one-day-one-sentence.html',
        artical_thumb: './one-day-one -sentence/11_12.PNG',
        artical_name: 'One day one sentence or phase(Chinese) ',
        artical_category: 'One day one sentence',
        artical_date: '11/12/2025',
        active: 'true',
    },
    {
        id: 7,
        artical_url: './tet/tet.html',
        artical_thumb: './tet/thumbnail.png',
        artical_name: 'Tet Viet Nam.Lịch Sử Tết Nguyên Đán: Từ Truyền Thuyết Đến Hiện Tại',
        artical_category: 'tet',
        artical_date: '11/12/2025',
        active: 'true',
    },
     {
        id: 8,
        artical_url: './music/nhung-bai-hat-hay.html',
        artical_thumb: './music/tone.png',
        artical_name: 'Vì âm nhạc là một phần không thể thiếu trong quá trình trưởng thành của tôi và...',
        artical_category: 'music',
        artical_date: '14/12/2025',
        active: 'true',
    },
];

//2.Xuất dữ liệu lên html với array map
let articalHtml = articals.map((Element) => {
    return `
        <div class="media artical-item my-2 ${Element.active}">
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