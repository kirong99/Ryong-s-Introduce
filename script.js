var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// 배경


window.onresize = () => {
    makeStars();
}

const makeStars = () => {
    const $sky = document.querySelector(".sky");
    
    const maxSize = Math.max(window.innerWidth,window.innerHeight);

    const getRandomX = () => Math.random() * maxSize;

    const getRandomY = () => Math.random() * maxSize;

    const randomRadius = () => Math.random() * 0.7 + 0.6;

    const _size = Math.floor(maxSize / 2);
  
  const htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle class='star'
      cx=${getRandomX()}
      cy=${getRandomY()}
      r=${randomRadius()}
      className="star" />`
  }).join('');
  
  $sky.innerHTML = htmlDummy;
}