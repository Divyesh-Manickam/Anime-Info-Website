// Full list of 32 anime (title, local image path, synopsis (3-5 lines), status, rating, wiki)
const animeList = [
  {
    title: "Attack on Titan",
    image: "images/AOT.png",
    synopsis: `Humanity shelters behind colossal walls while towering Titans roam the outside. 
Eren, Mikasa, and Armin join the Scout Regiment after tragedy strikes their hometown. 
As they push beyond the walls, buried conspiracies and the Titans' true nature come to light.`,
    status: "Completed",
    rating: "9.0/10",
    wiki: "https://en.wikipedia.org/wiki/Attack_on_Titan"
  },
  {
    title: "Black Clover",
    image: "images/Black Clover.png",
    synopsis: `In a world where magic determines rank, Asta is born without any but dreams to be Wizard King. 
Given an anti-magic grimoire, he trains his body to rival mages and overcomes prejudice. 
A story of relentless will, rivalry, and escalating threats to the kingdom.`,
    status: "Ongoing",
    rating: "8.2/10",
    wiki: "https://en.wikipedia.org/wiki/Black_Clover"
  },
  {
    title: "Bleach",
    image: "images/Bleach.png",
    synopsis: `Ichigo Kurosaki becomes a Substitute Soul Reaper to protect humans from Hollows. 
He is pulled into the Soul Society’s politics and learns of hidden powers and conspiracies. 
Epic sword battles, friendships, and personal growth drive long, adventurous arcs.`,
    status: "Completed",
    rating: "8.2/10",
    wiki: "https://en.wikipedia.org/wiki/Bleach_(TV_series)"
  },
  {
    title: "Code Geass",
    image: "images/Code Geass.png",
    synopsis: `Exiled prince Lelouch gains Geass, a power to bend others’ wills, and adopts the persona Zero. 
He starts a rebellion against the Britannian Empire seeking justice for his family. 
Political chess, moral ambiguity, and tragic sacrifices mark his epic campaign.`,
    status: "Completed",
    rating: "8.7/10",
    wiki: "https://en.wikipedia.org/wiki/Code_Geass"
  },
  {
    title: "Death Note",
    image: "images/Death Note.png",
    synopsis: `Light Yagami finds a notebook that kills anyone whose name is written within, and sets out to create a new world. 
A brilliant detective named L challenges him in a tense cat-and-mouse duel. 
Ethics, power, and identity collide in this razor-sharp psychological thriller.`,
    status: "Completed",
    rating: "9.0/10",
    wiki: "https://en.wikipedia.org/wiki/Death_Note"
  },
  {
    title: "Demon Slayer",
    image: "images/Demon Slayer.png",
    synopsis: `After demons slaughter his family and transform his sister, Tanjiro becomes a Demon Slayer to avenge them. 
He trains rigorously and faces terrifying demons with tragic backstories. 
The series blends visceral combat with tender human bonds and gorgeous animation.`,
    status: "Ongoing",
    rating: "8.8/10",
    wiki: "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba"
  },
  {
    title: "Dragon Ball Z",
    image: "images/Dragon Ball Z.png",
    synopsis: `Goku and the Z-Fighters defend Earth from Saiyans, androids, and cosmic tyrants. 
Training arcs and escalating battles push heroes into legendary transformations. 
Friendship, perseverance, and growth power this foundational action saga.`,
    status: "Completed",
    rating: "8.5/10",
    wiki: "https://en.wikipedia.org/wiki/Dragon_Ball_Z"
  },
  {
    title: "Erased",
    image: "images/Erased.png",
    synopsis: `Satoru involuntarily travels back to childhood moments to prevent tragedies. 
Faced with slow-burn mystery and fragile clues, he fights to protect vulnerable children. 
A tight, emotional thriller about second chances, guilt, and redemption.`,
    status: "Completed",
    rating: "8.5/10",
    wiki: "https://en.wikipedia.org/wiki/Erased_(manga)"
  },
  {
    title: "Fullmetal Alchemist",
    image: "images/FMA.png",
    synopsis: `After a failed human transmutation, the Elric brothers search for the Philosopher's Stone to restore their bodies. 
Their quest exposes political machinations, war, and moral complexity within alchemy’s rules. 
A moving tale of brotherhood, sacrifice, and what it costs to atone.`,
    status: "Completed",
    rating: "9.1/10",
    wiki: "https://en.wikipedia.org/wiki/Fullmetal_Alchemist"
  },
  {
    title: "Gintama",
    image: "images/Gintama.png",
    synopsis: `In an alien-occupied Edo, an odd-jobs samurai and his friends juggle parody, absurdity, and sudden seriousness. 
The show switches between comedy and heart-wrenching arcs with stunning skill. 
Unpredictable, irreverent, and surprisingly deep when it matters most.`,
    status: "Completed",
    rating: "8.9/10",
    wiki: "https://en.wikipedia.org/wiki/Gintama"
  },
  {
    title: "Hunter × Hunter",
    image: "images/HXH.png",
    synopsis: `Gon becomes a Hunter to find his father and stumbles into a world of strange beasts and deadly exams. 
Nen battles prize cunning and adaptability over raw strength. 
Each arc redefines expectations and probes ambition, morality, and cost.`,
    status: "Hiatus",
    rating: "9.0/10",
    wiki: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter"
  },
  {
    title: "Inuyasha",
    image: "images/Inuyasha.png",
    synopsis: `A modern girl is drawn into Japan’s feudal era and partners with the half-demon Inuyasha to recover a shattered jewel. 
Together they face demons, curse-bearers, and tangled destinies. 
Romance, folklore, and adventure intertwine across a sweeping journey.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/Inuyasha"
  },
  {
    title: "Jujutsu Kaisen",
    image: "images/JJK.png",
    synopsis: `Yuji Itadori swallows a cursed object and becomes host to Sukuna, the King of Curses, to save others. 
He enrolls in Jujutsu High and learns to fight malevolent curses with brutal skill. 
Dark humor, heartbreak, and kinetic fights define this modern dark fantasy.`,
    status: "Ongoing",
    rating: "8.7/10",
    wiki: "https://en.wikipedia.org/wiki/Jujutsu_Kaisen"
  },
  {
    title: "KonoSuba",
    image: "images/KonoSuba.png",
    synopsis: `Kazuma is reborn in a fantasy world but is saddled with a useless goddess and odd teammates. 
Quests devolve into hilarious failures as the party’s antics backfire spectacularly. 
A loving parody of isekai and RPG clichés with heart under the laughs.`,
    status: "Ongoing",
    rating: "8.1/10",
    wiki: "https://en.wikipedia.org/wiki/KonoSuba"
  },
  {
    title: "Lucky Star",
    image: "images/LuckyStar.png",
    synopsis: `Four high-school girls talk about daily life, anime, and otaku culture in cozy vignettes. 
Episodes focus on small, relatable moments and sharp observational humor. 
Comforting, referential, and endlessly rewatchable slice-of-life charm.`,
    status: "Completed",
    rating: "7.6/10",
    wiki: "https://en.wikipedia.org/wiki/Lucky_Star_(manga)"
  },
  {
    title: "My Hero Academia",
    image: "images/MHA.png",
    synopsis: `In a world of Quirks, Izuku inherits a legendary power and trains at U.A. High to be a hero. 
Friendships, rivalries, and public debates about hero ethics propel the series. 
Action and heart combine to explore what being a hero truly means.`,
    status: "Ongoing",
    rating: "8.5/10",
    wiki: "https://en.wikipedia.org/wiki/My_Hero_Academia"
  },
  {
    title: "Naruto",
    image: "images/Naruto.png",
    synopsis: `Orphaned and ostracized, Naruto Uzumaki dreams of becoming Hokage and earning respect. 
His growth is forged through mentorships, missions, and fierce rivalries. 
A long-form coming-of-age saga about resilience, friendships, and destiny.`,
    status: "Completed",
    rating: "8.3/10",
    wiki: "https://en.wikipedia.org/wiki/Naruto"
  },
  {
    title: "Naruto Shippuden",
    image: "images/NarutoShi.png",
    synopsis: `After training, Naruto returns to face the Akatsuki and save the ninja world from collapse. 
Bonds are tested as history, prophecy, and sacrifice surface. 
Epic battles and hard-earned resolutions define this dramatic continuation.`,
    status: "Completed",
    rating: "8.7/10",
    wiki: "https://en.wikipedia.org/wiki/Naruto:_Shippuden"
  },
  {
    title: "Neon Genesis Evangelion",
    image: "images/Evan.png",
    synopsis: `Teen pilots are asked to man giant EVAs against mysterious Angels, but the real conflict is psychological. 
Shinji and others confront trauma, identity, and existential dread. 
A landmark series that blends mecha spectacle with deep introspection.`,
    status: "Completed",
    rating: "8.9/10",
    wiki: "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion"
  },
  {
    title: "One Piece",
    image: "images/OnePiece.png",
    synopsis: `Luffy sails with his Straw Hat crew to find the legendary treasure One Piece and become Pirate King. 
Adventures across diverse islands reveal lore, politics, and tears amid laughter. 
A vast, emotive saga about dreams, freedom, and found family.`,
    status: "Ongoing",
    rating: "9.2/10",
    wiki: "https://en.wikipedia.org/wiki/One_Piece"
  },
  {
    title: "Paranoia Agent",
    image: "images/ParanoiaAgent.png",
    synopsis: `A mysterious attacker on rollerblades traumatizes Tokyo, and community anxieties escalate into hysteria. 
Investigators uncover how fiction, fear, and rumor can become contagious forces. 
Satoshi Kon’s surreal examination of mass psychology and escape.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/Paranoia_Agent"
  },
  {
    title: "Queen's Blade",
    image: "images/QueensBlade.png",
    synopsis: `Warriors battle in a tournament to determine the continent’s next queen, each with distinct motives. 
Fights mix fantasy spectacle with bold character archetypes and high stakes. 
Behind the fanservice, competitor backstories shape loyalties and outcomes.`,
    status: "Completed",
    rating: "6.9/10",
    wiki: "https://en.wikipedia.org/wiki/Queen%27s_Blade"
  },
  {
    title: "Re:Zero",
    image: "images/ReZero.png",
    synopsis: `Subaru is transported to another world where he discovers he can reset time upon death. 
Each return fractures his psyche as he learns how to save others from fate. 
A dark, character-driven twist on isekai that emphasizes consequence and resilience.`,
    status: "Ongoing",
    rating: "8.3/10",
    wiki: "https://en.wikipedia.org/wiki/Re:Zero_%E2%88%92_Starting_Life_in_Another_World"
  },
  {
    title: "Steins;Gate",
    image: "images/Steins.png",
    synopsis: `Okabe and friends accidentally discover time manipulation by sending messages to the past. 
Small changes spiral into catastrophic alternate timelines, forcing painful choices. 
A clever, emotional sci-fi thriller exploring cause, consequence, and love.`,
    status: "Completed",
    rating: "9.1/10",
    wiki: "https://en.wikipedia.org/wiki/Steins;Gate"
  },
  {
    title: "Sword Art Online",
    image: "images/SAO.png",
    synopsis: `Players trapped in a VRMMO face death if they die in-game; escaping requires clearing the game. 
Kirito and allies battle floor after floor while forming close bonds and confronting virtual trauma. 
A long-running series that probes identity and the cost of immersive tech.`,
    status: "Ongoing",
    rating: "7.9/10",
    wiki: "https://en.wikipedia.org/wiki/Sword_Art_Online"
  },
  {
    title: "Tokyo Ghoul",
    image: "images/TokyoGhoul.png",
    synopsis: `After a fateful surgery, Kaneki becomes half-ghoul and struggles between human morality and monstrous appetite. 
He’s thrust into a violent underworld of ghouls and investigators, learning brutal survival rules. 
Identity, hunger, and empathy collide in a dark urban tragedy.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/Tokyo_Ghoul"
  },
  {
    title: "Urusei Yatsura",
    image: "images/UruseiYatsura.png",
    synopsis: `A bumbling teen accidentally engages an alien princess and finds his life upended by chaos. 
Episodes blend romantic misadventure, slapstick, and surreal sci-fi. 
A classic romp that influenced romantic-comedy anime for decades.`,
    status: "Completed",
    rating: "7.8/10",
    wiki: "https://en.wikipedia.org/wiki/Urusei_Yatsura"
  },
  {
    title: "Violet Evergarden",
    image: "images/VioletEvergarden.png",
    synopsis: `A former soldier becomes a ghostwriter, learning to express emotions through letters she writes for others. 
Each assignment reveals private sorrow and hope, helping Violet process her own trauma. 
Visually stunning and emotionally resonant, it’s a study of healing through language.`,
    status: "Completed",
    rating: "8.6/10",
    wiki: "https://en.wikipedia.org/wiki/Violet_Evergarden"
  },
  {
    title: "Wolf's Rain",
    image: "images/WolfsRain.png",
    synopsis: `In a bleak future, wolves disguised as humans seek a legendary Paradise to end their suffering. 
A motley pack faces hunters, betrayal, and prophecy while chasing the myth. 
Haunting, melancholic, and musically poignant, it’s an elegy for lost worlds.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/Wolf%27s_Rain"
  },
  {
    title: "xxxHOLiC",
    image: "images/xxxHOLiC.png",
    synopsis: `Watanuki, cursed with seeing spirits, works for a witch who grants wishes for a price. 
Each story explores desire’s cost, fate, and the thin line between help and harm. 
Elegant visuals and eerie moralism thread through connected vignettes.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/xxxHolic"
  },
  {
    title: "Your Lie in April",
    image: "images/YLIA.png",
    synopsis: `A prodigious pianist silenced by trauma meets a vivacious violinist who reignites his passion for music. 
Romance and rivalry intertwine with themes of loss, recovery, and artistic truth. 
An achingly beautiful story scored by moving performances.`,
    status: "Completed",
    rating: "8.6/10",
    wiki: "https://en.wikipedia.org/wiki/Your_Lie_in_April"
  },
  {
    title: "Zankyou no Terror",
    image: "images/ZankyouNoTerror.png",
    synopsis: `Two teenage prodigies commit cryptic bombings to expose a hidden program from their past. 
A detective and a lonely girl are drawn into the puzzle, revealing trauma and motive. 
Stylish, somber, and politically charged, it asks what justice looks like after abuse.`,
    status: "Completed",
    rating: "8.0/10",
    wiki: "https://en.wikipedia.org/wiki/Terror_in_Resonance"
  }
];

// ---------- rendering and UI ----------
const grid = document.getElementById('grid');
const alphabetRail = document.getElementById('alphabet');
const searchInput = document.getElementById('search');

// build alphabet rail (ALL + A-Z)
const allBtn = document.createElement('button');
allBtn.textContent = 'All';
allBtn.classList.add('active');
allBtn.onclick = () => { setActiveLetter('ALL'); render(); };
alphabetRail.appendChild(allBtn);

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.onclick = () => { setActiveLetter(letter); render(letter); };
  alphabetRail.appendChild(btn);
});

function setActiveLetter(letter) {
  document.querySelectorAll('#alphabet button').forEach(b => b.classList.remove('active'));
  const btns = Array.from(document.querySelectorAll('#alphabet button'));
  const match = btns.find(b => b.textContent === (letter === 'ALL' ? 'All' : letter));
  if (match) match.classList.add('active');
}

// render cards (optionally filter by starting letter)
function render(letterFilter = 'ALL') {
  const q = (searchInput.value || '').trim().toLowerCase();
  grid.innerHTML = '';
  // sort ascending by title
  animeList.sort((a,b) => a.title.localeCompare(b.title, undefined, {sensitivity:'base'}));

  animeList.forEach(item => {
    if (letterFilter !== 'ALL' && !item.title.toUpperCase().startsWith(letterFilter)) return;
    if (q && !item.title.toLowerCase().includes(q)) return;

    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-name', item.title);

    card.innerHTML = `
      <img class="poster" src="${item.image}" alt="${escapeHtml(item.title)}">
      <div class="title">${escapeHtml(item.title)}</div>
      <div class="details">
        <div class="meta"><strong>Status:</strong> ${escapeHtml(item.status)} &nbsp; • &nbsp; <strong>Rating:</strong> ${escapeHtml(item.rating)}</div>
        <div class="synopsis">${escapeHtml(item.synopsis).replace(/\n/g, '<br>')}</div>
        <a class="btn" href="${item.wiki}" target="_blank" rel="noopener">See More</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// simple HTML escape
function escapeHtml(str) {
  return (str+'').replace(/[&<>"'`=\/]/g, s => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;','=':'&#61;','/':'&#47;'
  })[s]);
}

// search behavior
searchInput.addEventListener('input', () => {
  const active = document.querySelector('#alphabet button.active');
  const letter = active && active.textContent !== 'All' ? active.textContent : 'ALL';
  render(letter);
});

// initial load
render('ALL');
