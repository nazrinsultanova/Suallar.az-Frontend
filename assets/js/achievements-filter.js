 /*----------------Achievements filter---------*/

 var achievementsData = [
    {
        img: '../assets/images/icons/Trophy.svg',
        level: '2',
        title: 'Olimpiada qalibi',
        subtitle: 'Olimpiadada qalib ol',
        category: 'participant'
    },
    {
        img: '../assets/images/icons/Reading.svg',
        level: '1',
        title: 'Çalışqan',
        subtitle: 'Gün ərzində imtahan ver',
        category: 'hardworking' 
    },
    {
        img: '../assets/images/icons/Friends.svg',
        level: '2',
        title: 'Yaxşı dost',
        subtitle: '1 dostunu suallar.az-a dəvət et',
        category: 'friend'
    },
    {
        img: '../assets/images/icons/Trophy.svg',
        level: '2',
        title: 'Olimpiada qalibi',
        subtitle: 'Olimpiadada qalib ol',
        category: 'participant'
    },
    {
        img: '../assets/images/icons/Award2.svg',
        level: '1',
        title: 'Çalışqan',
        subtitle: 'Gün ərzində imtahan ver',
        category: 'leader'
    },
    {
        img: '../assets/images/icons/Trophy.svg',
        level: '2',
        title: 'Olimpiada qalibi',
        subtitle: 'Olimpiadada qalib ol',
        category: 'participant'
    },
    {
        img: '../assets/images/icons/Trophy.svg',
        level: '2',
        title: 'Olimpiadada qalibi',
        subtitle: 'Olimpiadada qalib ol',
        category: 'participant'
    },
    {
        img: '../assets/images/icons/Reading.svg',
        level: '1',
        title: 'Çalışqan',
        subtitle: 'Gün ərzində imtahan ver',
        category: 'hardworking'
    },
    {
        img: '../assets/images/icons/Friends.svg',
        level: '2',
        title: 'Yaxşı dost',
        subtitle: '1 dostunu suallar.az-a dəvət et',
        category: 'friend'
    }
];

const achievementsContainer = document.getElementById('achievements-content-bottom');

 if(achievementsContainer) {
    const all = document.getElementById('all');
    const hardworking = document.getElementById('hardworking');
    const participant = document.getElementById('participant');
    const friend = document.getElementById('friend');
    const leader = document.getElementById('leader');

    window.addEventListener('load', loadAll);
    all.addEventListener('click', loadAll);

    // hardworking.addEventListener('click',  achievementsFilter('hardworking'));
    // participant.addEventListener('click',  achievementsFilter('participant'));
    // friend.addEventListener('click',  achievementsFilter('friend'));
    // leader.addEventListener('click',  achievementsFilter('leader'));

    function achievementsFilter(type) {
        var filteredData = achievementsData.filter(item => item.category == type);
        achievementsContainer.innerHTML= '';

        filteredData.forEach(item => {
            achievementsContainer.innerHTML += `
            <a href="#" class="achievements-item">
            <img src="${item.img}"/>
            <p class="icon-title ${item.category}">Səviyyə ${item.level}</p>
            <h3 class="title">${item.title}</h3>
            <p class="sub-title">${item.subtitle}</p>
            </a>
          `
            })
    }


    function loadAll() {
        achievementsContainer.innerHTML= '';
        achievementsData.forEach(item => {
            achievementsContainer.innerHTML += `
             <a href="#" class="achievements-item">
             <img src="${item.img}"/>
             <p class="icon-title ${item.category}">Səviyyə ${item.level}</p>
             <h3 class="title">${item.title}</h3>
             <p class="sub-title">${item.subtitle}</p>
             </a>
    `
          })
     }
}
