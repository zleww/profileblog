function handleScroll() {
    const images = document.querySelectorAll('.scroll-image, .scroll-image-right');
  
    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight - 250) {
        img.classList.add('active');
      }
    });
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });





  
function flipit() {
  const img = document.getElementById("diplomatImg");
  const title = document.getElementById("diplomatTitle");

  img.src = "strawberry.jpg";
  img.alt = "strawberry";

  title.textContent = "My fam and I visited alot of places while we was at Baguio, going there was really worth it. Alot of beautiful sight seeings when you're at the top of the high places. They also serve great and delicious foods, I highly recommend going to the night market and what I enjoyed the most is the horse riding.";
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";     

}

function flipit2() {
  const img = document.getElementById("balerImg");
  const title = document.getElementById("balerTitle");

  img.src = "balerflip.jpg";
  img.alt = "baler";

  title.textContent = "My family and I had great time to Baler. We went surfing and spent a lot of time enjoying the beach, the stunning views, the gorgeous sunset, and the tasty food. The whole experience was so memorable and worth it. If you’re looking for a great refresh from the heat, Baler is definitely a must-visit";

  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";     
}

function flipit3() {
  const img = document.getElementById("boholImg");
  const title = document.getElementById("boholTitle");

  img.src = "boholflip.jpg";
  img.alt = "bohol";
  title.textContent = "My family and I had a great time in Bohol. We visited the Chocolate Hills, Enjoyed the beach, I saw turtles and they're really huge while we was snorkling, explored the Tarsier Zoo, tried the local seafood, which was amazing, and many more. I fell in love with their Bohol-made ice cream-it was so delicious. Unfortunately, we didn’t get to try the zipline because the wait time was an hour and a half, but it was still a fun trip";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit4() {
  const img = document.getElementById("boracayImg");
  const title = document.getElementById("boracayTitle");

  img.src = "boracayflip.jpg";
  img.alt = "boracay";
  title.textContent = "My trip to Boracay was all about swimming, I swam, swam, and swam some more. I made sure every money spent was worth it, and it definitely was. The seafood there was amazing, and I swam more by the beach or the pool, the views were absolutely stunning. It was a perfect mix of relaxation and fun. The white sand they be talking about, wasnt a lie.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit5() {
  const img = document.getElementById("hundredImg");
  const title = document.getElementById("hundredTitle");

  img.src = "hundredflip.jpg";
  img.alt = "hundred islands";
  title.textContent = "Hundred Islands, I swam again lmao. But this time, there were fun activities like snorkeling. Of course, I had more seafood. I might just turn into a fish at this point LMAO. The whole experience was so much fun, with beautiful waters and great food";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit6() {
  const img = document.getElementById("pagudpudImg");
  const title = document.getElementById("pagudpudTitle");

  img.src = "pagudpudflip.jpg";
  img.alt = "pagudpud";
  title.textContent = "Pagudpud was such a fun experience. I really enjoyed the beach, AGAIN and of course, the food was amazing, and again.. more SEAFOOD I didn’t just get a tan, I definitely darkened my skin. But it was worth it, especially with the beautiful windmills and stunning mountains. The whole trip was unforgettable.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit7() {
  const img = document.getElementById("palawanImg");
  const title = document.getElementById("palawanTitle");

  img.src = "palawanflip.jpg";
  img.alt = "palawan";
  title.textContent = "My fam and I went island hopping and even tried scuba diving in Puerto Princesa. I was a scared though, especially with the rumors bout crocodiles in the area, but it was an amazing adventure overall. The underwater views were beautiful, and the islands were so gorgeous.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit8() {
  const img = document.getElementById("viganImg");
  const title = document.getElementById("viganTitle");

  img.src = "viganflip.jpg";
  img.alt = "vigan";
  title.textContent = "Imma start with the food cus the food there was really really great. Honestly the bagnet is the reason why I want to go back there, and the views-no comment, I really like the vibe there when we was at the calle crisologo, especially at night.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit9() {
  const img = document.getElementById("zambalesImg");
  const title = document.getElementById("zambalesTitle");

  img.src = "zambalesflip.jpg";
  img.alt = "zambales";
  title.textContent = "Again, swimming swimming swimming. The never ending swimming, we also did snorkeling and again seafooooooood, I might really be a fish the whole time. The views there was really gorgeous and the sunset was stunning, I feel relaxed.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit10() {
  const img = document.getElementById("malaysiaImg");
  const title = document.getElementById("malaysiaTitle");

  img.src = "malaysiaflip.jpg";
  img.alt = "malaysia";
  title.textContent = "Its my first time going international, I was really excited. We visited the twin towers in Kuala Lumpur and we stayed at a condo that has a pool and I SWAM AGAIN LMAO. We also visited the Batu Caves, where monkeys freely roam. What we ate there was kfc cus the foods kinda expensive? and for my favourite spot, the nike outlet store hehe.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

function flipit11() {
  const img = document.getElementById("singaporeImg");
  const title = document.getElementById("singaporeTitle");

  img.src = "singaporeflip.jpg";
  img.alt = "singapore";
  title.textContent = "From malaysia, we took the bus to Singapore and the first spot we went when we got to Singapore was the famous Merlion. What I was really interested tho was the Marina Bay Sands-Tower. I told myself one day, I'mma go there. We also visited the Universal Studio which I really enjoyed, especially the roller coaster, I luv it.";
  img.style.width = "250px"; 
  img.style.height = "350px"; 
  title.style.fontSize = "35px"; 
  title.style.top = "30%";      
  title.style.left = "20%";  
}

const images = [
  'sagada.jpg',
  'korea.jpg',
  'japan.jpg',
  'bali.jpg',
  'batanes.jpg',
  'norway.jpg'
];

let currentIndex = 0;

function changeImage(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
      currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
      currentIndex = 0;
  }
  

  const imageElement = document.getElementById('image');
  imageElement.src = images[currentIndex];
}