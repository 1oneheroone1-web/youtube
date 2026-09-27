const videos = {
  "campus-tour": {
    title: "Campus Tour",
    channel: "studentlife",
    views: 81,
    comments: 1,
    added: "June 15, 2005",
    image: "./assets/images/campus-tour.svg",
    description: "A short walkthrough of the main building, classrooms, and study areas."
  },
  "computer-lab": {
    title: "Computer Lab Demo",
    channel: "techclass",
    views: 82,
    comments: 0,
    added: "May 3, 2005",
    image: "./assets/images/computer-lab.svg",
    description: "A clean demo showing how students use the computer lab for ICT lessons."
  },
  "study-tips": {
    title: "Study Tips",
    channel: "notebook",
    views: 46,
    comments: 0,
    added: "June 19, 2005",
    image: "./assets/images/study-notes.svg",
    description: "Simple note-taking and revision habits for students."
  },
  "library-walkthrough": {
    title: "Library Walkthrough",
    channel: "campusmedia",
    views: 27,
    comments: 0,
    added: "June 21, 2005",
    image: "./assets/images/library-walkthrough.svg",
    description: "A quick guide to finding books, quiet study desks, and reference materials."
  },
  "science-fair": {
    title: "Science Fair",
    channel: "projectclub",
    views: 8,
    comments: 0,
    added: "June 28, 2005",
    image: "./assets/images/science-fair.svg",
    description: "Student project highlights from a small school science fair."
  }
};

const channels = {
  studentlife: { name: "studentlife", subscribers: 24, bio: "Campus events, tours, and student-made videos." },
  techclass: { name: "techclass", subscribers: 31, bio: "ICT classroom demos and basic computer tutorials." },
  notebook: { name: "notebook", subscribers: 18, bio: "Study tips, revision plans, and learning routines." },
  campusmedia: { name: "campusmedia", subscribers: 15, bio: "Library, club, and school activity recordings." },
  projectclub: { name: "projectclub", subscribers: 9, bio: "Simple student projects and experiments." }
};

const page = document.getElementById("mock-page");
const searchInput = document.getElementById("search-input");

function videoList(items = Object.values(videos)) {
  return `<div class="mock-grid">${items.map(video => `
    <div class="mock-card">
      <h3><a href="#watch-${slug(video.title)}" data-video="${slug(video.title)}">${video.title}</a></h3>
      <p>Added: ${video.added}</p>
      <p>by <a href="#channel-${video.channel}" data-channel="${video.channel}">${video.channel}</a></p>
      <p>Views: ${video.views} | Comments: ${video.comments}</p>
    </div>
  `).join("")}</div>`;
}

function slug(title) {
  const match = Object.entries(videos).find(([, video]) => video.title === title);
  return match ? match[0] : "campus-tour";
}

function show(title, subtitle, body) {
  page.hidden = false;
  page.innerHTML = `
    <div class="mock-heading">
      <div>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
      <button class="mock-action" type="button" data-route="home">Close</button>
    </div>
    ${body}
  `;
  page.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActive(route) {
  document.querySelectorAll("a.active-link").forEach(link => link.classList.remove("active-link"));
  document.querySelectorAll(`[data-route="${route}"]`).forEach(link => link.classList.add("active-link"));
}

function renderRoute(route) {
  setActive(route);

  if (route === "home") {
    page.hidden = true;
    history.replaceState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const routes = {
    "my-videos": () => show("My Videos", "Mock uploaded videos for Adi's 2005-style YouTube profile.", videoList([
      videos["campus-tour"],
      videos["computer-lab"],
      videos["study-tips"]
    ])),
    favorites: () => show("My Favorites", "Saved videos already filled in for the prototype demo.", videoList([
      videos["library-walkthrough"],
      videos["science-fair"],
      videos["computer-lab"]
    ])),
    messages: () => show("My Messages", "Mock inbox showing how the old account area could work.", `
      <div class="mock-grid">
        <div class="mock-card"><h3>Welcome to YouTube!</h3><p>Thanks for joining. Start uploading and sharing your videos.</p></div>
        <div class="mock-card"><h3>studentlife commented</h3><p>Nice profile, Adi. The campus video is ready for review.</p></div>
        <div class="mock-card"><h3>techclass sent a request</h3><p>Would you like to add Computer Lab Demo to your favorites?</p></div>
      </div>
    `),
    profile: () => show("My Profile", "Mock profile data prepared for the assignment presentation.", `
      <div class="mock-grid">
        <div class="mock-card"><h3>Adi</h3><p>Email: 1one.hero.one1@gmail.com</p><p>Member since: June 2005</p><p>Profile views: 128</p></div>
        <div class="mock-card"><h3>About Me</h3><p>ICT student testing a retro YouTube interface for an HCI assignment.</p></div>
        <div class="mock-card"><h3>Stats</h3><p>3 uploads | 3 favorites | 2 messages | 5 subscriptions</p></div>
      </div>
    `),
    signup: () => show("Sign Up", "Mock sign-up form. It is prefilled so the instructor can see the intended flow.", `
      <form class="mock-form">
        <label>Name</label><input value="Adi">
        <label>Email</label><input value="1one.hero.one1@gmail.com">
        <label>Username</label><input value="onehero2005">
        <button type="button" data-route="profile">Create Mock Account</button>
      </form>
    `),
    login: () => show("Log In", "Mock login state for a prepared demo account.", `
      <form class="mock-form">
        <label>Username or Email</label><input value="1one.hero.one1@gmail.com">
        <label>Password</label><input type="password" value="mockpassword">
        <p>Status: signed in as Adi for prototype demonstration.</p>
        <button type="button" data-route="profile">Open My Profile</button>
      </form>
    `),
    help: () => show("Help", "Mock help center with basic guidance.", `
      <div class="mock-grid">
        <div class="mock-card"><h3>Searching</h3><p>Type a keyword and press Search Videos to see matching mock results.</p></div>
        <div class="mock-card"><h3>Profile</h3><p>Use My Profile to view prepared account details.</p></div>
        <div class="mock-card"><h3>Uploads</h3><p>Upload Your Videos opens a prefilled upload form.</p></div>
      </div>
    `),
    upload: () => show("Upload Your Videos", "Mock upload form with academic-friendly sample data.", `
      <form class="mock-form">
        <label>Video Title</label><input value="ICT Interface Walkthrough">
        <label>Description</label><textarea rows="4">A short student video explaining the old YouTube homepage interface.</textarea>
        <label>Category</label><select><option>Education</option><option>Technology</option><option>Campus Life</option></select>
        <button type="button">Save Mock Upload</button>
      </form>
    `),
    tags: () => show("More Tags", "Mock tag directory for browsing content manually.", `
      <div class="mock-tag-list">
        ${["education", "campus", "technology", "library", "science", "tutorial", "student", "history", "music", "news", "projects", "2005"].map(tag => `<a href="#search-${tag}" data-tag="${tag}">${tag}</a>`).join(" ")}
      </div>
    `),
    browse: () => show("Watch More Videos", "More mock results from the same retro video catalog.", videoList()),
    about: () => show("About Us", "Mock informational page.", `<div class="mock-card"><p>This is a student-made static prototype recreating an old YouTube-style interface for an HCI assignment.</p></div>`),
    contact: () => show("Contact Us", "Mock contact details.", `<div class="mock-card"><p>Prototype owner: Adi</p><p>Email: 1one.hero.one1@gmail.com</p></div>`),
    terms: () => show("Terms of Use", "Mock terms page.", `<div class="mock-card"><p>This interface is for academic demonstration only. No real uploads, accounts, or messages are stored.</p></div>`),
    privacy: () => show("Privacy Policy", "Mock privacy page.", `<div class="mock-card"><p>No real user data is collected. All profile, login, and message content is mock data.</p></div>`),
    rss: () => show("RSS", "Mock RSS feed.", `<div class="mock-card"><p>Latest mock feed: Campus Tour, Computer Lab Demo, Study Tips, Library Walkthrough, Science Fair.</p></div>`)
  };

  if (routes[route]) {
    routes[route]();
  }
}

function renderVideo(id) {
  const video = videos[id] || videos["campus-tour"];
  show(video.title, "Mock watch page with prefilled metadata and safe preview content.", `
    <div class="watch-card">
      <img src="${video.image}" alt="${video.title}">
      <div>
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <p>Added: ${video.added}</p>
        <p>by <a href="#channel-${video.channel}" data-channel="${video.channel}">${video.channel}</a></p>
        <p>Views: ${video.views} | Comments: ${video.comments}</p>
        <button class="mock-action" type="button" data-route="favorites">Add to Favorites</button>
      </div>
    </div>
  `);
}

function renderChannel(id) {
  const channel = channels[id] || channels.studentlife;
  show(`${channel.name}'s Channel`, "Mock channel profile.", `
    <div class="mock-grid">
      <div class="mock-card"><h3>${channel.name}</h3><p>${channel.bio}</p><p>Subscribers: ${channel.subscribers}</p></div>
      <div class="mock-card"><h3>Latest Upload</h3><p>${Object.values(videos).find(video => video.channel === channel.name)?.title || "Campus Tour"}</p></div>
    </div>
  `);
}

function renderSearch(query) {
  const normalized = query.trim().toLowerCase();
  const results = Object.values(videos).filter(video => {
    return !normalized || video.title.toLowerCase().includes(normalized) || video.description.toLowerCase().includes(normalized) || video.channel.toLowerCase().includes(normalized);
  });
  show("Search Results", `Showing mock results for "${query || "all videos"}".`, results.length ? videoList(results) : `<div class="mock-card"><p>No exact match. Try campus, lab, study, library, or science.</p></div>`);
}

document.addEventListener("click", event => {
  const target = event.target.closest("a, button");
  if (!target) return;

  if (target.dataset.route) {
    event.preventDefault();
    renderRoute(target.dataset.route);
    return;
  }

  if (target.dataset.video) {
    event.preventDefault();
    renderVideo(target.dataset.video);
    return;
  }

  if (target.dataset.channel) {
    event.preventDefault();
    renderChannel(target.dataset.channel);
    return;
  }

  if (target.dataset.tag) {
    event.preventDefault();
    renderSearch(target.dataset.tag);
    return;
  }

  if (target.id === "search-button") {
    event.preventDefault();
    renderSearch(searchInput.value);
    return;
  }

  if (target.id === "rss-button") {
    event.preventDefault();
    renderRoute("rss");
    return;
  }

  if (target.closest(".video-links") && target.tagName === "A") {
    event.preventDefault();
    renderSearch(target.textContent.trim());
  }
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderSearch(searchInput.value);
  }
});

window.addEventListener("load", () => {
  const initial = window.location.hash.replace("#", "");
  if (initial && initial !== "home") {
    renderRoute(initial);
  }
});
