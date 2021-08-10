const createFooter = () => {
  const container = document.createElement("footer");
  const text = document.createElement("small");
  text.textContent = "Made by Lisa Bi, 2021";
  container.appendChild(text);
  return container;
};

const createNavBar = () => {
  const container = document.createElement("nav");
  container.classList.add("nav-bar");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");

  const home = document.createElement("li");
  home.classList.add("nav-item");
  home.setAttribute("id", "home");
  home.textContent = "Home";
  home.addEventListener("click", function () {
    setActiveTab("home");
  });

  const menu = document.createElement("li");
  menu.classList.add("nav-item");
  menu.setAttribute("id", "menu");
  menu.textContent = "Menu";
  menu.addEventListener("click", function () {
    setActiveTab("menu");
  });

  const contact = document.createElement("li");
  contact.classList.add("nav-item");
  contact.setAttribute("id", "contact");
  contact.textContent = "Contact";
  contact.addEventListener("click", function () {
    setActiveTab("contact");
  });

  navList.appendChild(home);
  navList.appendChild(menu);
  navList.appendChild(contact);

  container.appendChild(navList);

  return container;
};

const loadHome = () => {
  document.querySelector("main").style.backgroundColor = "transparent";
  console.log("loading...");
  clear();
  const container = document.createElement("div");
  container.setAttribute("id", "homeContainer");

  const headlineContainer = document.createElement("div");
  headlineContainer.setAttribute("id", "headlineContainer");

  const headLine = document.createElement("h1");
  headLine.classList.add("logo");
  headLine.classList.add("home");

  const asahiText = document.createElement("span");
  asahiText.setAttribute("id", "asahiLogo");
  asahiText.fontFamily = "Osake";
  asahiText.textContent = "Asahi";
  headLine.appendChild(asahiText);

  headLine.textContent += " Sushi";
  headlineContainer.appendChild(headLine);

  // const tagline = document.createElement('h2');
  // tagline.classList.add('home');
  // tagline.textContent = 'All You Can Eat Sushi';
  // headlineContainer.appendChild(tagline);

  const description = document.createElement("p");
  description.classList.add("home");
  description.textContent = "Exceptional Sushi with the Finest Ingredients";
  headlineContainer.appendChild(description);

  const viewMenuBtn = document.createElement("div");
  viewMenuBtn.setAttribute("id", "viewMenuBtn");
  viewMenuBtn.textContent = "Discover Our Menu";
  headlineContainer.appendChild(viewMenuBtn);
  viewMenuBtn.addEventListener("click", function () {
    setActiveTab("menu");
  });

  container.appendChild(headlineContainer);

  return container;
};

const clear = () => {
  document.querySelector("main").textContent = "";
};

const setActiveTab = (tabID) => {
  const buttons = document.querySelectorAll(".nav-item");
  buttons.forEach((button) => {
    button.classList.remove("activeTab");
  });
  document.querySelector(`#${tabID}`).classList.add("activeTab");
  clear();
  if (tabID === "home") {
    document.querySelector("main").appendChild(loadHome());
  } else if (tabID === "menu") {
    document.querySelector("main").appendChild(loadMenu());
  } else {
    document.querySelector("main").appendChild(loadContact());
  }
};

const init = (() => {
  document.querySelector("#content").appendChild(createNavBar());
  document
    .querySelector("#content")
    .appendChild(document.createElement("main"));
  setActiveTab("home");
  document.querySelector("#content").appendChild(createFooter());
})();

const loadMenu = () => {
  console.log("loading menu...");
  clear();
  document.querySelector("main").style.backgroundColor = "white";

  const container = document.createElement("div");
  container.classList.add("menuContainer");

  const sushiContainer = document.createElement("div");
  sushiContainer.classList.add("menuSubContainer");
  container.appendChild(createMenuHeading("SUSHI"));
  sushiContainer.appendChild(
    createMenuItem(
      "Alaska Roll",
      "Tuna, Cream Cheese, White Onions in a roll.",
      "9"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Hawaiian Roll",
      "A Hawaiian roll ropped with tuna, green onions, and soy mustard sauce.",
      "12"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Golder Tiger Roll",
      "Shrimp tempura, cream cheese & avocado in a roll. Topped with spicy crab, & spicy mayo.",
      "14"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Rainbow Roll",
      "California roll topped with assorted fish & avocado.",
      "13"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Volcano Roll Roll",
      "California roll topped with baked salmon, mayonnaise, green onion, & masago.",
      "6"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Baked Scallop",
      "California roll topped with baked salmon, mayonnaise, green onion, & masago.",
      "8"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Sushi Combo",
      "Five crunch rolls, one tuna, one salmon, and two shrimp. Served with miso soup.",
      "11"
    )
  );
  sushiContainer.appendChild(
    createMenuItem(
      "Sashimo Combo",
      "Three tuna, three salmon, three yellowtail, three albacore, three tilapia, & three escolar.",
      "12"
    )
  );
  container.appendChild(sushiContainer);

  container.appendChild(document.createElement("hr"));

  const appContainer = document.createElement("div");
  appContainer.classList.add("menuSubContainer");
  container.appendChild(createMenuHeading("APPETIZERS"));
  appContainer.appendChild(
    createMenuItem(
      "Baked Mussels",
      "Freshly caught mussels baked with garlic sauce, topped with melted cheese. Six pieces.",
      "6"
    )
  );
  appContainer.appendChild(
    createMenuItem(
      "Gyoza",
      "Hand made gyoza with a choice of pork, beef, or vegetable filling. Six pieces.",
      "5"
    )
  );
  appContainer.appendChild(
    createMenuItem("Edamame", "Freshly steamed soybeans served with salt.", "5")
  );
  appContainer.appendChild(
    createMenuItem(
      "Vegetable Tempura",
      "Crispy yet airy fried vegetables. Served with soy sauce. Five pieces.",
      "6"
    )
  );
  appContainer.appendChild(
    createMenuItem(
      "Shrimp Tempura",
      "Crispy yet airy fried shrimp. Served with soy sauce. Five pieces.",
      "7"
    )
  );
  appContainer.appendChild(
    createMenuItem(
      "Salmon Skin Salad",
      "Salad of mixed vegetables, all topped with crisp or chewy grilled salmon skin.",
      "10"
    )
  );
  container.appendChild(appContainer);

  container.appendChild(document.createElement("hr"));

  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("menuSubContainer");
  container.appendChild(createMenuHeading("DRINKS"));
  drinksContainer.appendChild(
    createMenuItem(
      "Soft Drinks",
      "Coke, Pepsi, Sierra Mist, Root Beer, Iced Tea, Lemonade",
      "2"
    )
  );
  drinksContainer.appendChild(createMenuItem("Juice", "Apple, Orange", "3"));
  drinksContainer.appendChild(createMenuItem("Green Tea", "Hot, Iced", "2"));
  drinksContainer.appendChild(createMenuItem("Beer", "Sapporo, Asahi", "6"));
  drinksContainer.appendChild(createMenuItem("Sake", "Nigori, Hakutsuru", "8"));
  drinksContainer.appendChild(
    createMenuItem("Flavored Soju", "Peach, Plum, Green Grape Soju", "13")
  );

  container.appendChild(drinksContainer);

  const linebreak = document.createElement("hr");
  linebreak.classList.add("menu-break");

  container.appendChild(linebreak);
  container.appendChild(createLargeFooter());

  return container;
};

const createMenuItem = (itemTitle, itemDescription, itemPrice) => {
  const container = document.createElement("div");
  container.classList.add("menu-item-container");
  container;

  const title = document.createElement("div");
  title.classList.add("menu-item-name");
  title.textContent = itemTitle;

  const description = document.createElement("div");
  description.classList.add("menu-item-description");
  description.textContent = itemDescription;

  const price = document.createElement("div");
  price.classList.add("menu-item-price");
  price.textContent = `$${itemPrice}`;

  container.appendChild(price);
  container.appendChild(title);
  container.appendChild(description);

  return container;
};

const createMenuHeading = (menuHeading) => {
  const heading = document.createElement("h2");
  heading.classList.add("menu-heading");
  heading.textContent = "—  " + menuHeading + "  —";
  return heading;
};

window.initMap = function () {
  console.log("loading map...");
  // The location of Asahi Sushi
  const asah = { lat: 33.889, lng: -117.521 };
  // The map, centered at Asahi Sushi
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: asah,
    mapTypeId: "mystyle",
  });
  map.mapTypes.set(
    "mystyle",
    new google.maps.StyledMapType(myStyle, { name: "My Style" })
  );
  // The marker, positioned at Asahi Sushi
  // const marker = new google.maps.Marker({
  //   position: asah,
  //   map: map,
  // });
};

const loadContact = () => {
  console.log("loading contact...");
  clear();
  document.querySelector("main").style.backgroundColor = "transparent";
  const container = document.createElement("div");
  container.classList.add("contactContainer");

  const heading = document.createElement("h1");
  heading.classList.add("tab-heading");
  heading.textContent = "—  Contact Us  —";
  container.appendChild(heading);

  const textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  textContainer.appendChild(
    createContactDiv("Contact", ["(951) 637-1313", "sushiasahi1313@gmail.com"])
  );

  textContainer.appendChild(
    createContactDiv("Location", [
      "2955 Van Buren Blvd.",
      "Riverside, CA 92503",
    ])
  );

  textContainer.appendChild(
    createContactDiv("Hours", [
      "Mon — Fri, 11 am - 10 pm",
      "Sat - Sun, 11 am - 11 pm",
    ])
  );
  container.appendChild(textContainer);

  const map = document.createElement("div");
  map.setAttribute("id", "map");
  container.appendChild(map);

  const tag = document.createElement("script");
  tag.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDHZWPBLlWKm6EOZp3Ax_ouKh8A5vjrKwk&callback=initMap";

  container.appendChild(tag);

  return container;
};

const createContactDiv = (headingContent, textContent) => {
  console.log("creating contact div...");
  const container = document.createElement("div");
  container.classList.add(`${headingContent}Container`);

  const heading = document.createElement("h2");
  heading.classList.add("contact-heading");
  heading.textContent = headingContent;

  container.appendChild(heading);

  for (let text in textContent) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("contact-text");
    paragraph.textContent = textContent[text];
    container.appendChild(paragraph);
  }
  return container;
};
// base.appendChild(createNavBar());
// base.appendChild(loadHome());
// base.appendChild(createFooter());base.appendChild(createHome());

// Initialize and add the map

const createLargeFooter = () => {
  const textContainer = document.createElement("div");
  textContainer.classList.add("largeFooter");
  textContainer.appendChild(
    createContactDiv("Contact", [
      "(951) 637-1313",
      "2955 Van Buren Blvd.",
      "Riverside, CA 92503",
      "sushiasahi1313@gmail.com",
    ])
  );

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.classList.add("footer");
  logo.textContent = "—  Asahi Sushi  —";
  textContainer.appendChild(logo);

  textContainer.appendChild(
    createContactDiv("Hours", [
      "Mon — Fri, 11 am - 10 pm",
      "Sat - Sun, 11 am - 11 pm",
    ])
  );

  return textContainer;
};

let myStyle = [
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 65,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: "50",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        lightness: "30",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        lightness: "40",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ffff00",
      },
      {
        lightness: -25,
      },
      {
        saturation: -97,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        lightness: -25,
      },
      {
        saturation: -100,
      },
    ],
  },
];
