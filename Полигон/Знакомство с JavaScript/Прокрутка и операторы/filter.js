let newsBlocks = document.querySelectorAll(".news-block");
let filter = document.querySelector(".filters");

filter.onchange = function () {
  for (let newsBlock of newsBlocks) {
    if (newsBlock.dataset.category !== filter.value && filter.value !== 'all') {
      newsBlock.classList.add("hidden");
    } else {
        newsBlock.classList.remove('hidden')
    }
  }
};
