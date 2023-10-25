const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "https://m.media-amazon.com/images/I/61bueMdnn0L.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-3.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://s.yimg.com/ny/api/res/1.2/FRW8JzlzhjtJIVsIKc5xdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMDA7aD03NTA-/https://media.zenfs.com/en_US/News/BGR_News/funny-cat.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.insider.com/5d124f9a9c5101048e440825?width=1000&format=jpeg&auto=webp"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/736x/98/35/db/9835db3c92ef4ed52315995b2a60988b.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "https://as2.ftcdn.net/v2/jpg/05/57/17/87/1000_F_557178719_Xfx7D2o8CZOuuhJzBO5DmlkIcWc0B05z.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://www.funnycatpix.com/_pics/2306/the-samurai-cat.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://media.istockphoto.com/id/1407655089/photo/funny-pomeranian-dog-summer-ready-for-bath-wrapped-with-a-towel-and-sunglasses-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=WtolW9GiJSbjjGZumohjaHMTnkYbn3r_myU87HYie3I="
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=1xw:0.84375xh;center,top"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://i.ytimg.com/vi/hyjkWYM190E/mqdefault.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i.ytimg.com/vi/rFngquRtn5o/maxresdefault.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/cat-puns-64ef515f6036a.jpg?crop=1xw:0.8423586572438162xh;center,top&resize=1200:*"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://m.media-amazon.com/images/I/51tYXyD5NHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://pbs.twimg.com/media/FsMBQRlXsAczk6z.jpg:large"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://pbs.twimg.com/profile_images/1638683834458726403/4BSZzW5q_400x400.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920.jpg"
    }
  ];

//display cards function
const displayCards = (array) => {
let cards = '';
  for (object of array) {
    cards += 
   `<div class="card element" style="width: 18rem;">
    <img id="petImg" src="${object.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title id="petName" ">${object.name}</h5>
        <p class="card-text" id="petColor" >color:${object.color}</p>
        <p id="petSkill" >special skill: ${object.specialSkill}</p>
        <p id="petType" >type: ${object.type}</p>
        <p 
          <button id="delete--${object.id}" class="delete"
          >delete</button>
        </p> 
      </div>
    </div>`;
  }
const app = document.querySelector('#app')
app.innerHTML = cards
}

//filter function for filter buttons
const filter = (petType) => {
  const filteredArray = [];
  for (pet of pets) {
    if (pet.type === petType) {
      filteredArray.push(pet);
    }
  }
  displayCards(filteredArray);
}

//all events
const events = () => {
  const app = document.querySelector("#app");
  const form = document.querySelector("form");

//delete function
  app.addEventListener('click', (e) => { 
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
      const index = pets.findIndex((e) => e.id === Number(id));
      pets.splice(index, 1);
      displayCards(pets);
    }
  });

  // filter function
  const filterButtons = document.querySelector("#filter-buttons");
  filterButtons.addEventListener("click", (event) => {
    const id = event.target.id;
    
    if (id === 'showbtn') {
      displayCards(pets);
    } else if (id === "cat" || id === "dog" || id === "dino") {
      filter(id); 
    }
  })

  //create function
  form.addEventListener('submit', createPet);
  const createPet = (e) => {
    e.preventDefault();

    const newPetCard = {
        id: pets.length + 1,
        name: document.querySelector("#name-input").value,
        color: document.querySelector("#color-input").value,
        type: document.querySelector("input[name='pet-type']:checked").id,
        specialSkill: document.querySelector("#skill-input").value,
        imageUrl: document.querySelector("#img-input").value
    }
    pets.push(newPetCard);
    displayCards(pets);
    form.reset();
  }
}

const startApp = () => {
  displayCards(pets);
  events();
}

startApp();
