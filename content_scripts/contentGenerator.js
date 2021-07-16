const FEM_FIRST_NAMES = [
  'Lupe',
  'Amanda',
  'Maria',
  'Theresa',
  'Wendy',
  'Heather',
  'Natalie',
  'Kimberly',
  'Angela',
  'Danielle',
  'Jessica',
  'Amanda',
  'Felicia',
  'Maria',
  'Linda',
  'Jennifer',
  'Jennifer',
  'Tamara',
  'Sarah',
  'Mackenzie',
  'Shannon',
  'Donna',
  'Jennifer',
  'Lisa',
  'Diana',
  'Debra',
  'Julie',
  'Tammy',
  'Andrea',
  'Pamela'
];

const MASC_FIRST_NAMES = [
  'Jonathan',
  'Gary',
  'Troy',
  'Robert',
  'Nathan',
  'Robert',
  'George',
  'Ryan',
  'Justin',
  'Edward',
  'Richard',
  'Michael',
  'Joseph',
  'William',
  'Jonathan',
  'David',
  'Julian',
  'Jason',
  'George',
  'Brett',
  'Antonio',
  'Alexander',
  'Andres',
  'John',
  'Glenn',
  'Peter',
  'William',
  'Todd',
  'Patrick',
  'David'
];

const NB_FIRST_NAMES = [
  'Adrian',
  'Ash',
  'Aspen',
  'Bobbie',
  'Blair',
  'Brooklyn',
  'Casey',
  'Corey',
  'Dakota',
  'Dallas',
  'Drew',
  'Frankie',
  'Harper',
  'Jamie',
  'Jace',
  'Nat',
  'Rory',
  'Sawyer',
  'Taylor',
  'Wren',
  'Riley',
  'Robin',
  'Pat',
  'Avery',
  'River',
  'Skylar',
  'Rowan',
  'Kai',
  'Perry',
  'Hiro',
];

const FIRST_NAMES = {
  "masc": MASC_FIRST_NAMES.concat(NB_FIRST_NAMES),
  "fem": FEM_FIRST_NAMES.concat(NB_FIRST_NAMES),
  "nb": NB_FIRST_NAMES
};

const LAST_NAMES = [
  'Jenkins',
  'Pugh',
  'Cook',
  'Hogan',
  'Bentley',
  'Richardson',
  'Reed',
  'Henson',
  'Shields',
  'Little',
  'Ross',
  'Walker',
  'Warren',
  'Richardson',
  'Cooper',
  'Walton',
  'Foster',
  'Choi',
  'Perez',
  'Brown',
  'Rose',
  'McDowell',
  'Dean',
  'Mooney',
  'Evans',
  'Lewis',
  'Dunn',
  'Goodman',
  'Freeman',
  'Mendez'
];


const MONTHS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const DAYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '22', '23', '24', '25', '26', '27', '28'];
const BIRTH_YEARS = ['1909', '1911', '1919', '1922', '1923', '1924', '1926', '1932', '1933', '1935', '1939', '1944', '1945', '1946', '1948', '1949', '1950', '1951', '1953', '1955', '1956'];
const DEATH_YEARS = ['1977', '1978', '1980', '1981', '1984', '1992', '1994', '1995', '1996', '2001', '2003', '2005', '2008', '2010', '2014', '2016', '2017', '2018', '2019', '2020', '2021'];
const LOCATIONS = [
  'Phoenicia, NY, USA',
  'Merced, CA, USA',
  'Jenner, CA, USA',
  'Florence, OR, USA',
  'Petaluma, CA, USA',
  'Bell Buckle, TN, USA',
  'Wadsworth, OH, USA',
  'Qwa-Qwa, South Africa',
  'Portland, ME, USA',
  'Naperville, IL, USA',
  'Nossen, Germany',
  'Baltimore, MD, USA',
  'Timber Cove, CA, USA',
  'Asheville, NC, USA',
  'Denver, CO, USA',
  'Destin, FL, USA',
  'Des Plaines, IL, USA',
  'Warsaw, Poland',
  'Dwight, IL, USA',
  'Oroville, CA, USA',
  'Ventura, CA, USA',
  'Indianapolis, IN, USA',
  'Ulm, Germany',
  'Oslo, Norway',
  'Buenos Aires, Argentina',
  'New Delhi, Delhi, India',
  'Fort St. John, BC, Canada',
  'Oshkosh, WI, USA',
  'Sergeant Bluff, IA, USA',
  'Lodi, CA, USA',
  'Rancho Santa Fe, CA, USA',
  'Lucknow, Uttar Pradesh, India',
  'Playa del Carmen, Quintana Roo, Mexico',
  'Kidder, MO, USA',
  'Rjim Maatoug, Tunisia',
  'Juneau, AK, USA',
  'Cleveland, OH, USA',
  'Ruidoso, NM, USA'
];

const RELATIONSHIPS = [
  'family',
  'cousin',
  'ex-partner',
  'father',
  'son',
  'child',
  'mother',
  'daughter',
  'sister-in-law',
  'brother-in-law',
  'child-in-law',
  'step-father',
  'step-mother',
  'granddaughter',
  'grandmother',
  'grandfather',
  'grandson',
  'partner',
  'sister',
  'brother',
  'step-son',
  'step-parent',
  'step-daughter'
];

const PARAGRAPHS = [
  'There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. The old man used to go to fix fences and do other odd jobs for the farmers around, and while he was gone the old woman, his wife, did the work of the house and worked in their own little plot of land.',
  'What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?',
  'Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.',
  "He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.",
  "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important.",
  "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
  "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.",
  "Waiting and watching. It was all she had done for the past weeks. When you’re locked in a room with nothing but food and drink, that’s about all you can do anyway. She watched as birds flew past the window bolted shut. She couldn’t reach it if she wanted too, with that hole in the floor. She thought she could escape through it but three stories is a bit far down.",
  'There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.',
  'He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention due to the fact that it was also obvious that the young man only cared about his intelligence.',
  'He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.',
  "She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. At three years old, Sandy's stubborn personality had already bloomed into full view.",
  'The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it. The scars gave it character and had not overwhelmed to the point that it had become ratty. The jacket was in its prime and it knew it.',
  'Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.',
  "He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time.",
  "She tried to explain that love wasn't like pie. There wasn't a set number of slices to be given out. There wasn't less to be given to one person if you wanted to give more to another. That after a set amount was given out it would all disappear. She tried to explain this, but it fell on deaf ears.",
  'It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.',
  "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.",
  "The Minoan civilization is particularly notable for its large and elaborate palaces up to four stories high, featuring elaborate plumbing systems and decorated with frescoes. The most notable Minoan palace is that of Knossos, followed by that of Phaistos. The Minoan period saw extensive trade between Crete, Aegean, and Mediterranean settlements, particularly the Near East. Through their traders and artists, the Minoans' cultural influence reached beyond Crete to the Cyclades, the Old Kingdom of Egypt, copper-bearing Cyprus, Canaan and the Levantine coast and Anatolia. Some of the best Minoan art was preserved in the city of Akrotiri on the island of Santorini, which was destroyed by the Minoan eruption.",
  "Instead of dating the Minoan period, archaeologists use two systems of relative chronology. The first, created by Evans and modified by later archaeologists, is based on pottery styles and imported Egyptian artifacts (which can be correlated with the Egyptian chronology). Evans' system divides the Minoan period into three major eras: early (EM), middle (MM) and late (LM). These eras are subdivided—for example, Early Minoan I, II and III (EMI, EMII, EMIII)",
  "Another dating system, proposed by Greek archaeologist Nikolaos Platon, is based on the development of architectural complexes known as 'palaces' at Knossos, Phaistos, Malia and Zakros. Platon divides the Minoan period into pre-, proto-, neo- and post-palatial sub-periods. The relationship between the systems in the table includes approximate calendar dates from Warren and Hankey (1989).",
  "According to Homer, Crete had 90 cities. Judging by the palace sites, the island was probably divided into at least eight political units at the height of the Minoan period. The majority of Minoan sites are found in central and eastern Crete, with few in the western part of the island, especially to the south. There appear to have been four major palaces on the island: Knossos, Phaistos, Malia, and Kato Zakros. At least before a unification under Knossos, north-central Crete is thought to have been governed from Knossos, the south from Phaistos, the central-eastern region from Malia, the eastern tip from Kato Zakros, the west from Kydonia. Smaller palaces have been found elsewhere on the island.",
  "Cretan cuisine included wild game: Cretans ate wild deer, wild boar and meat from livestock. Wild game is now extinct on Crete. A matter of controversy is whether Minoans made use of the indigenous Cretan megafauna, which are typically thought to have been extinct considerably earlier at 10,000 BC. This is in part due to the presence of dwarf elephants in contemporary Egyptian art.",
  "Apart from the abundant local agriculture, the Minoans were also a mercantile people who engaged significantly in overseas trade, and at their peak may well have had a dominant position in international trade over much of the Mediterranean. After 1700 BC, their culture indicates a high degree of organization. Minoan-manufactured goods suggest a network of trade with mainland Greece (notably Mycenae), Cyprus, Syria, Anatolia, Egypt, Mesopotamia and westward as far as the Iberian peninsula. Minoan religion apparently focused on female deities, with women officiants.",
  "Saffron's taste and iodoform-like or hay-like fragrance result from the phytochemicals picrocrocin and safranal. It also contains a carotenoid pigment, crocin, which imparts a rich golden-yellow hue to dishes and textiles. Its recorded history is attested in a 7th-century BC Assyrian botanical treatise.",
  "A degree of uncertainty surrounds the origin of the English word 'saffron'. It might stem from the 12th-century Old French term safran, which comes from the Latin word safranum, from the Arabic za'farān, which comes from the Persian word zarparan meaning 'gold strung' (implying either the golden stamens of the flower or the golden color it creates when used as flavor).",
  'The saffron crocus, unknown in the wild, probably descends from Crocus cartwrightianus. It is a triploid that is "self-incompatible" and male sterile; it undergoes aberrant meiosis and is hence incapable of independent sexual reproduction—all propagation is by vegetative multiplication via manual "divide-and-set" of a starter clone or by interspecific hybridisation.',
  'The high retail value of saffron is maintained on world markets because of labour-intensive harvesting methods, which require some 440,000 hand-picked saffron stigmas per kilogram (200,000 stigmas/lb) – equivalently, 150,000 crocus flowers per kilogram (70,000 flowers/lb). Forty hours of labour are needed to pick 150,000 flowers.',
  'The various saffron crocus cultivars give rise to thread types that are often regionally distributed and characteristically distinct. Varieties (not varieties in the botanical sense) from Spain, including the tradenames "Spanish Superior" and "Creme", are generally mellower in colour, flavour, and aroma; they are graded by government-imposed standards. Italian varieties are slightly more potent than Spanish. Greek saffron produced in the town of Krokos is PDO protected due to its particularly high-quality colour and strong flavour.'
];
const GENDER_INPUT_IDS = { "masc": "id_deceased-gender_0", "fem": "id_deceased-gender_1", "nb": "id_deceased-gender_2" };


(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function fillInput(override, el, value) {
    if (el) {
      if (override || !el.value) {
        el.value = value;
      }
    }
  }

  function buildObit() {
    let obit = '';
    let isFirstParagraph = true;

    [...Array(5).keys()].forEach(() => {
      const randomParagraph = PARAGRAPHS[Math.floor(Math.random() * PARAGRAPHS.length)]

      if (isFirstParagraph) {
        obit = randomParagraph;
        isFirstParagraph = false;
      } else {
        obit = `${obit}\n\n${randomParagraph}`
      }
    });

    return obit;
  }

  function selectGenderInput(gender) {
    const elementId = GENDER_INPUT_IDS[gender];
    const element = document.querySelector(`#${elementId}`);
    if (element) {
      element.checked = true;
    }
  }

  function randomizeGender() {
    const genders = ["masc", "fem", "nb"]
    return genders[Math.floor(Math.random() * genders.length)];
  }

  function fillMemorialForm(override) {
    const gender = randomizeGender();
    const firstNames = FIRST_NAMES[gender];

    const firstName = document.querySelector('#id_deceased-first_name');
    fillInput(override, firstName, firstNames[Math.floor(Math.random() * firstNames.length)])

    const middleName = document.querySelector('#id_deceased-middle_name');
    fillInput(override, middleName, firstNames[Math.floor(Math.random() * firstNames.length)])

    const lastName = document.querySelector('#id_deceased-last_name');
    fillInput(override, lastName, LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)])

    const deathMonth = document.querySelector('#id_deceased-date_of_death_month');
    fillInput(override, deathMonth, MONTHS[Math.floor(Math.random() * MONTHS.length)])

    const deathDay = document.querySelector('#id_deceased-date_of_death_day');
    fillInput(override, deathDay, DAYS[Math.floor(Math.random() * DAYS.length)])

    const deathYear = document.querySelector('#id_deceased-date_of_death_year');
    fillInput(override, deathYear, DEATH_YEARS[Math.floor(Math.random() * DEATH_YEARS.length)])

    const birthMonth = document.querySelector('#id_deceased-date_of_birth_month');
    fillInput(override, birthMonth, MONTHS[Math.floor(Math.random() * MONTHS.length)])

    const birthDay = document.querySelector('#id_deceased-date_of_birth_day');
    fillInput(override, birthDay, DAYS[Math.floor(Math.random() * DAYS.length)])

    const birthYear = document.querySelector('#id_deceased-date_of_birth_year');
    fillInput(override, birthYear, BIRTH_YEARS[Math.floor(Math.random() * BIRTH_YEARS.length)])

    const locationStr = document.querySelector('#id_deceased-location_str');
    fillInput(override, locationStr, LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)])

    const relationship = document.querySelector('#id_relationship-relationship_type');
    fillInput(override, relationship, RELATIONSHIPS[Math.floor(Math.random() * RELATIONSHIPS.length)])

    const obit = document.querySelector('#id_deceased-obituary');
    fillInput(override, obit, buildObit());

    selectGenderInput(gender);
  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "generateNoOverride") {
      fillMemorialForm();
    } else if (message.command === "generateWithOverride") {
      fillMemorialForm(true)
    } else {
      console.log('Command not recognized')
    }
  })

})();
