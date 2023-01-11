// OPERAZIONI PRELIMINARI ``

// PRENDO DAL DOM GLI ELEMENTI
const postListElement = document.getElementById('container')

// operazioni avvio pagina
let cards = '';

// generia le cards
postListElement.forEach((post)=>{
    cards += `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${post.author.name}</div>
          <div class="post-meta__time">4 mesi fa</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint
      voluptate recusandae architecto. Et nihil ullam aut alias.
    </div>
    <div class="post__image">
      <img src="https://unsplash.it/600/300?image=171" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone</div>
      </div>
    </div>
  </div>
    `
})

postListElement.innerHTML = cards;