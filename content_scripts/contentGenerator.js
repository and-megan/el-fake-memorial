// const faker = require('faker');

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
  'Pamela',
  'Nora',
  'Isla',
  'Leah',
  'Lillian',
  'Aurora',
  'Violet',
  'Zoe',
  'Emilia',
  'Gianna',
  'Abigail',
  'Olivia',
  'Ava',
  'Charlotte',
  'Sophia',
  'Isabella',
  'Evelyn',
  'Harper',
  'Camila',
  'Luna',
  'Ella',
  'Elizabeth',
  'Avery',
  'Mila',
  'Scarlet',
  'Eleanor',
  'Madison',
  'Leila',
  'Penelope',
  'Aria',
  'Chloe',
  'Grace',
  'Hazel',
  'Riley',
  'Victoria',
  'Stella',
  'Hannah',
  'Esther',
  'Lucy',
  'Addison',
  'Paisley',
  'Natalie',
  'Naomi',
  'Eliana',
  'Morticia',
  'Leana',
  'Lana',
  'Serena',
  'Siobhan',
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
  'David',
  'Liam',
  'Noah',
  'Oliver',
  'Elijah',
  'William',
  'James',
  'Lucas',
  'Henry',
  'Alexander',
  'Michael',
  'Ethan',
  'Daniel',
  'Jacob',
  'Levi',
  'Sebastian',
  'Mateo',
  'Jack',
  'Owen',
  'Wyatt',
  'Julian',
  'Grayson',
  'Leo',
  'Isaac',
  'Carter',
  'Caleb',
  'Nathan',
  'Colton',
  'Ezekiel',
  'Luca',
  'Landon',
  'Silas',
  'Waylon',
  'Carson',
  'Amir',
  'Jorge',
  'Kingston',
  'Micah',
  'Bryson',
  'Declam',
  'Chase',
  'Miles',
  'Luis',
  'Lorenzo',
  'Ivan',
  'Zion',
  'Carlos',
  'Zeke',
  'Lars',
  'Hans',
  'Christopher',
  'Sal',
  'Jason',
];

const NB_FIRST_NAMES = [
  'Adrian',
  'Mason',
  'Ryder',
  'Rowan',
  'Michele',
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
  'Reid',
  'Kai',
  'Perry',
  'Hiro',
  'Finn',
  'Alex',
  'Jesse',
  'Caden',
  'Lane',
  'London',
  'Kenya',
  'Rowan',
  'Fern',
  'Freddie',
  'Reed',
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
  'Mendez',
  'MacLeon',
  'Henderson',
  'Logan',
  'Lee',
  'Liamson',
  'Lakes',
  'Keene',
  'Key',
  'Keyes',
  'Pond',
  'Riker',
  'Picard',
  'Place',
  'Williams',
  'Watson',
  'Holmes',
  'Holly',
  'Honey',
  'Acorn',
  'Abbott',
  'Costello',
  'Piper',
  'Coates',
  'Clarke',
  'Lewis',
  'Cassat',
  'Selma',
  'Ashford',
  'Whitlock',
  'Yarbrough',
  'Hangston',
  'Hale',
  'Elrod',
  'Boone',
  'Abraham',
  'Amana',
  'Madden',
  'Katz',
  'Caddel',
  'Barlowe',
  'Sai',
  'Viotto',
  'Villarreal',
  'Lauier',
  'Driscoll',
  'Ellis',
  'Finch',
  'Menken',
  'Crawford',
  'Cunnigham',
  'Cornelius',
  'Abernathy',
  'Simmons',
  'Webb',
  'Glick',
  'Garfield',
  'Gomez',
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
  'Ruidoso, NM, USA',
  'Sonoma, CA, USA',
  'Santa Rosa, CA, USA',
  'Santa Clara, CA, USA',
  'Santa Barbara, CA, USA',
  'San Luis Obispo, CA, USA',
  'Los Angeles, CA, USA',
  'Los Gatos, CA, USA',
  'Morgan Hill, CA, USA',
  'King City, CA, USA',
  'Kettleman City, CA, USA',
  'Florence, AZ, USA',
  'Sun Lakes, AZ, USA',
  'Sun Valley, AZ, USA',
  'Page, AZ, USA',
  'Surprise, AZ, USA',
  'Superior, AZ, USA',
  'Steamboat, AZ, USA',
  'Eloy, AZ, USA',
  'Mesa, AZ, USA',
  'Maricopa, AZ, USA',
  'Casa Grande, AZ, USA',
  'Prescott, AZ, USA',
  'Buckeye, AZ, USA',
  'Goodyear, AZ, USA',
  'Scottsdale, AZ, USA',
  'Tuscon, AZ, USA',
  'Champlin, MN, USA',
  'Mound, MN, USA',
  'Marshall, MN, USA',
  'Andover, MN, USA',
  'Eden Prairie, MN, USA',
  'Minnetonka, MN, USA',
  'Osseo, MN, USA',
  'Elk River, MN, USA',
  'Mankato, MN, USA',
  'Maplewood, MN, USA',
  'Duluth, MN, USA',
  'St. Cloud, MN, USA',
  'Lakeville, MN, USA',
  'Rockland, ME, USA',
  'Steep Falls, ME, USA',
  'Lisbon Falls, ME, USA',
  'Newcastle, ME, USA',
  'Orono, ME, USA',
  'Winslow, ME, USA',
  'Belfast, ME, USA',
  'Bath, ME, USA',
  'Caribou, ME, USA',
  'Brunswick, ME, USA',
  'Kittery, ME, USA',
  'Topsham, ME, USA',
  'Gorham, ME, USA',
  'Biddleford, ME, USA',
  'Auburn, ME, USA',
  'Bangor, ME, USA',
  'Dixfield, ME, USA',
  'Presque Isle, ME, USA',
  'Saco, ME, USA',
  'Ogden, UT, USA',
  'Kaysville, UT, USA',
  'Lehi, UT, USA',
  'Orem, UT, USA',
  'Spanish Fork, UT, USA',
  'Springville, UT, USA',
  'Riverton, UT, USA',
  'Kearns, UT, USA',
  'Pleasant Grove, UT, USA',
  'Mantua, UT, USA',
  'Mapleton, UT, USA',
  'Samak, UT, USA',
  'Sandy, UT, USA',
  'Tooele, UT, USA',
  'Taylorsville, UT, USA',
  'Lyden, NM, USA',
  'Madrid, NM, USA',
  'Portales, NM, USA',
  'North Valley, NM, USA',
  'Artesia, NM, USA',
  'Clovis, NM, USA',
  'Taos, NM, USA',
  'Farmington, NM, USA',
  'El Duende, NM, USA',
  'El Cerro, NM, USA',
  'El Rito, NM, USA',
  'El Rancho, NM, USA',
  'Silver City, NM, USA',
  'Gallup, NM, USA',
  'Roswell, NM, USA',
  'Montpelier, VT, USA',
  'Woodstock, VT, USA',
  'Stowe, VT, USA',
  'Randolph, VT, USA',
  'Vergennes, VT, USA',
  'Morrisville, VT, USA',
  'Newport, VT, USA',
  'Jericho, VT, USA',
  'Waitsfield, VT, USA',
  'Albany, VT, USA',
  'Fairlawn, VA, USA',
  'Tuckahoe, VA, USA',
  'Charlottesville, VA, USA',
  'Lake Ridge, VA, USA',
  'Annandale, VA, USA',
  'Leesburg, VA, USA',
  'Ashburn, VA, USA',
  'Richmond, VA, USA',
  'Occoquan, VA, USA',
  'Rockwood, VA, USA',
  'Fancy Gap, VA, USA',
  'Daleville, VA, USA',
  'Reston, VA, USA',
  'McLean, VA, USA',
  'Suffolk, VA, USA',
  'Arlington, VA, USA',
  'Scotland, VA, USA',
  'Cavespring, VA, USA',
  'Florence, SC, USA',
  'Mauldin, SC, USA',
  'Greenwood, SC, USA',
  'Hanahan, SC, USA',
  'Wade Hampton, SC, USA',
  'Aiken, SC, USA',
  'Clemson, SC, USA',
  'Lexington, SC, USA',
  'Greer, SC, USA',
  'Bluffton, SC, USA',
];

NB_RELATIONSHIPS = ['step-parent', 'step-child', 'ex-partner', 'child', 'parent', 'sibling', 'child-in-law', 'grandparent', 'cousin', 'family', 'coworker', 'friend'];
MASC_RELATIONSHIPS = ['step-father', 'step-son', 'ex-husband', 'father', 'son', 'brother', 'brother-in-law', 'grandson', 'grandfather', 'uncle', 'nephew'];
FEM_RELATIONSHIPS = ['step-mother', 'step-daughter', 'ex-wife', 'mother', 'daughter', 'sister', 'sister-in-law', 'granddaughter', 'grandmother', 'aunt', 'niece'];

const RELATIONSHIPS = {
  'nb': NB_RELATIONSHIPS,
  'masc': NB_RELATIONSHIPS.concat(MASC_RELATIONSHIPS),
  'fem': NB_RELATIONSHIPS.concat(FEM_RELATIONSHIPS)
};

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
  'The various saffron crocus cultivars give rise to thread types that are often regionally distributed and characteristically distinct. Varieties (not varieties in the botanical sense) from Spain, including the tradenames "Spanish Superior" and "Creme", are generally mellower in colour, flavour, and aroma; they are graded by government-imposed standards. Italian varieties are slightly more potent than Spanish. Greek saffron produced in the town of Krokos is PDO protected due to its particularly high-quality colour and strong flavour.',
  'The Dragon Shaman Chronicles book series.',
  'Ethmia atriflorella is a moth in the family Depressariidae. It is found in Madagascar.',
  'Madingou is a town located in southern Republic of the Congo. It is the capital city of the Madingou District and the Bouenza Region.',
  'Show semi-diurnal habit and rather elongated narrow body. Abdomen entirely blue green. Head, thorax and abdomen without any white markings. Forewing dull brown with a greenish tinge. Hindwing purplish brown. Both wings are with a submarginal series of large white spots in the interspaces.',
  'The Maharajah of Scindia provided a carved sandstone gateway, the Gwalior Gateway, which after the exhibition was sent in 200 packages to London\'s Victoria and Albert Museum and then displayed at the Colonial and Indian Exhibition in 1886.',
  'The women\'s 100 metres hurdles sprint competition of the athletics events at the 2015 Pan American Games took place on July 21 at the CIBC Pan Am and Parapan Am Athletics Stadium.',
  'Steele Brook is a river in Delaware County, New York. It flows into the West Branch Delaware River by Delhi.',
  'Sangnier aimed to bring the Catholic Church into a greater conformity with French Republican ideals and to provide an alternative to anticlerical labour movements. The movement was initially successful, but was eventually condemned by Pope Pius X in the letter Notre charge apostolique in 1910. ',
  'Owen Morgan, also known by his bardic name Morien (1836 – 16 December 1921) was a Welsh journalist, historian and writer of books on the subject of neo-druidism. Morgan was heavily influenced by the writings of both Iolo Morganwg and Myfyr Morganwg [cy], and much of his writing has been challenged by fellow academics.[',
  'The exact date and place of Morgan\'s birth is unknown, as Morgan himself hid the details. Although the 1881 census states his year of birth as 1839, latter studies have placed it as 1836.',
  'Torolf Elster (27 May 1911 – 4 November 2006) was a Norwegian newspaper and radio journalist, magazine editor, novelist, crime fiction writer and writer of short stories. He was Director-General of the Norwegian Broadcasting Corporation (NRK) from 1972 to 1981.',
  'Julian Blaustein (May 30, 1913 – June 20, 1995) was an American film producer. Born in New York City, Blaustein graduated from Harvard University in 1933. He spent a year in flight training at the Randolph Air Force Base before heading to Hollywood, where he became a reader in the story department at Universal Pictures. He eventually was promoted to department head. He left Universal to work in a similar position at Paramount Pictures. ',
  'Alexandra Jones is a historical archaeologist and educator. She is founder and chief executive officer of Archaeology in the Community, "a Washington, D.C.-based nonprofit that aims to increase awareness of archaeology and history."',
  'Jones worked on season two of PBS’s Time Team America, a television program about archaeology. As Field Director of Archaeology on the televisIon show, Jones worked with middle and high school students at different archaeological sites around the U.S.',
];

const GENDER_INPUT_IDS = { "masc": "id_deceased-gender_0", "fem": "id_deceased-gender_1", "nb": "id_deceased-gender_2" };

const WORDS = [
  'market', 'banana', 'eye', 'sea', 'jaguar', 'raven', 'rock', 'shell', 'idea',
  'maple', 'ash', 'oak', 'leaf', 'star', 'twig', 'wind', 'water', 'fire', 'earth',
  'mitten', 'nova', 'travel', 'ocean', 'meow', 'surf', 'skate', 'blue', 'green',
  'pecan', 'celsius', 'pie', 'pumpkin', 'salt', 'spice', 'stir', 'fairly', 'eggs',
  'custard', 'bazaar', 'extra', 'pop', 'wobble', 'center', 'teach', 'almond', 'oat',
  'stone', 'river', 'years', 'great', 'months', 'soups', 'fermented', 'nothing', 'yoyo',
  'walnut', 'formed', 'undoubtedly', 'nuez', 'granite', 'russet', 'cravat', 'yesterday',
  'plant', 'cactus', 'succulent', 'pocket', 'wilderness', 'unpredictable', 'bitter',
  'sweet', 'graph', 'graft', 'alley', 'bark', 'centennial', 'remarkable', 'special',
  'arugala', 'november', 'october', 'future', 'basis', 'basil', 'cilantro', 'menu',
  'orleans', 'gatos', 'goats', 'camels', 'rio', 'carload', 'crop', 'recipe', 'creek',
  'lake', 'lago', 'cornflakes', 'maize', 'quesadilla', 'eggnog', 'lunch', 'breakfast',
  'golden', 'silver', 'ruby', 'amber', 'garnet', 'copper', 'serpentine', 'brass',
  'bronze', 'iron', 'steel', 'aluminum', 'curry', 'potato', 'wheat', 'pool', 'azure',
  'lapis', 'umber', 'sienna', 'wag', 'tail', 'flop', 'clip', 'flip', 'zig', 'zag',
  'glacier', 'ice', 'freeze', 'froze', 'spray', 'lavender', 'tulip', 'sunflower',
  'aster', 'lily', 'denim', 'button', 'knit', 'dozen', 'poker', 'blackjack', 'anklet',
  'kaftan', 'sandal', 'boot', 'hike', 'campfire', 'shiny', 'sleepy', 'pearled', 'sharp',
  'iridescent', 'jacket', 'clay', 'coiled', 'warmth', 'roam', 'arisen', 'encouraging',
  'hog', 'forsaken', 'ballad', 'harmonica', 'reason', 'chew', 'answer', 'eyesight',
  'donkey', 'energize', 'rolling', 'place', 'box', 'mud', 'wheel', 'diffuse', 'heart',
  'leave', 'ants', 'friend', 'foe', 'sing', 'banjo', 'klezmer', 'strum', 'tap', 'leap',
];

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

  function getAndFillElement(override, selector, value) {
    const el = document.querySelector(selector);
    fillInput(override, el, value);
  }

  function buildText() {
    let text = '';
    let isFirstParagraph = true;
    const numPargraphs = Math.floor(Math.random() * 4) + 1;

    [...Array(numPargraphs).keys()].forEach(() => {
      const randomParagraph = PARAGRAPHS[Math.floor(Math.random() * PARAGRAPHS.length)]

      if (isFirstParagraph) {
        text = randomParagraph;
        isFirstParagraph = false;
      } else {
        text = `${text}\n\n${randomParagraph}`
      }
    });

    return text;
  }

  function selectGenderInput(gender) {
    const elementId = GENDER_INPUT_IDS[gender];
    const element = document.querySelector(`#${elementId}`);
    if (element) {
      element.checked = true;
    }
  }

  function randomGender() {
    const genders = ["masc", "fem", "nb"]
    return genders[Math.floor(Math.random() * genders.length)];
  }

  function generateFakeEmail(firstName, lastName) {
    const randomNum = Math.floor(Math.random() * 999);

    const emailElements = [firstName, lastName, randomNum, generateRandomWord()];
    const chosenElements = new Set();
    while (chosenElements.size < 3) {
      const idx = Math.floor(Math.random() * emailElements.length);
      chosenElements.add(emailElements[idx]);
    }

    const chosenElementsArr = Array.from(chosenElements);

    return `${chosenElementsArr.join('')}@everloved.com`;
  }

  function generateFirstName(gender) {
    let names = [];
    if (gender) {
      names = FIRST_NAMES[gender];
    } else {
      names = FIRST_NAMES['fem'].concat(FIRST_NAMES['nb']).concat('masc');
    }

    return names[Math.floor(Math.random() * names.length)];
  }

  function generateLastName() {
    return LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  }

  function generateRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  function generateLocation() {
    return LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  }

  function handleDeceased(override) {
    const deceasedGender = randomGender();
    const firstName = generateFirstName(deceasedGender);
    const middleName = generateFirstName(deceasedGender);
    const lastName = generateLastName();

    const firstNameEl = document.querySelector('#id_deceased-first_name');
    fillInput(override, firstNameEl, firstName)

    const shouldHaveMiddleName = Math.random() > 0.5 ? true : false;
    if (shouldHaveMiddleName) {
      const middleNameEl = document.querySelector('#id_deceased-middle_name');
      fillInput(override, middleNameEl, middleName)
    }

    const lastNameEl = document.querySelector('#id_deceased-last_name');
    fillInput(override, lastNameEl, lastName)

    const deathMonthEl = document.querySelector('#id_deceased-date_of_death_month');
    fillInput(override, deathMonthEl, MONTHS[Math.floor(Math.random() * MONTHS.length)])

    const deathDayEl = document.querySelector('#id_deceased-date_of_death_day');
    fillInput(override, deathDayEl, DAYS[Math.floor(Math.random() * DAYS.length)])

    const deathYearEl = document.querySelector('#id_deceased-date_of_death_year');
    fillInput(override, deathYearEl, DEATH_YEARS[Math.floor(Math.random() * DEATH_YEARS.length)])

    const birthMonthEl = document.querySelector('#id_deceased-date_of_birth_month');
    fillInput(override, birthMonthEl, MONTHS[Math.floor(Math.random() * MONTHS.length)])

    const birthDayEl = document.querySelector('#id_deceased-date_of_birth_day');
    fillInput(override, birthDayEl, DAYS[Math.floor(Math.random() * DAYS.length)])

    const birthYearEl = document.querySelector('#id_deceased-date_of_birth_year');
    fillInput(override, birthYearEl, BIRTH_YEARS[Math.floor(Math.random() * BIRTH_YEARS.length)])

    const locationStrEl = document.querySelector('#id_deceased-location_str');
    fillInput(override, locationStrEl, generateLocation());

    selectGenderInput(deceasedGender);
  }

  function handleTextAreas(override) {
    // const obitEl = document.querySelector('#id_deceased-obituary');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach((el) => {
      fillInput(override, el, buildText());
    });
  }

  function handleNewUser(override) {
    const creatorGender = randomGender();
    const creatorRelationships = RELATIONSHIPS[creatorGender];
    const lastName = generateLastName();
    const firstName = generateFirstName(creatorGender);

    const relationshipEl = document.querySelector('#id_relationship-relationship_type');
    fillInput(override, relationshipEl, creatorRelationships[Math.floor(Math.random() * creatorRelationships.length)])

    const newUserFirstNameEl = document.querySelector('#id_passwordless-signup-first_name');
    fillInput(override, newUserFirstNameEl, firstName);

    const newUserEmailEl = document.querySelector('#id_passwordless-signup-email');
    fillInput(override, newUserEmailEl, generateFakeEmail(firstName, lastName));

    const newUserLastNameEl = document.querySelector('#id_passwordless-signup-last_name');
    fillInput(override, newUserLastNameEl, lastName);

  }

  function handleDonation(override) {
    const donationAmountEl = document.querySelector('#id_amount');
    fillInput(override, donationAmountEl, Math.floor(Math.random() * 500))

    const donorBillingNameEl = document.querySelector('#id_name');
    fillInput(override, donorBillingNameEl, `${generateFirstName()} ${generateLastName()}`);
  }

  function handleInvitePeople(override) {
    let count = 0;
    while (count < 5) {
      const first = generateFirstName();
      const last = generateLastName();

      const invitePeopleFirstNameEl = document.querySelector(`#id_invite_people-${count}-first_name`);
      fillInput(override, invitePeopleFirstNameEl, first)

      const invitePeopleLastNameEl = document.querySelector(`#id_invite_people-${count}-last_name`);
      fillInput(override, invitePeopleLastNameEl, last)

      const invitePeopleEmailEl = document.querySelector(`#id_invite_people-${count}-email`);
      fillInput(override, invitePeopleEmailEl, generateFakeEmail(first, last));
      count += 1;
    }
  }

  function handleCause(override) {
    const causeNameEl = document.querySelector('#id_new-cause_name');
    const causeName = `${generateRandomWord()} ${generateRandomWord()}`;
    fillInput(override, causeNameEl, causeName);


    const causeGoalEl = document.querySelector('#id_new-fundraising_goal');
    fillInput(override, causeGoalEl, Math.floor(Math.random() * 10000));
  }

  function handleFlowerDelivery(override) {
    const deliveryDateEl = document.querySelector('#id_delivery_date');
    const lastValue = deliveryDateEl.options[deliveryDateEl.options.length - 1].value;
    fillInput(override, deliveryDateEl, lastValue);
  }

  function handleDeceasedRelation(override, firstNameSelector, lastNameSelector, relationshipSelector, locationSelector) {
    const gender = randomGender();
    const relationships = RELATIONSHIPS[gender];
    const lastName = generateLastName();
    const firstName = generateFirstName(gender);

    const relationFirstNameEl = document.querySelector(firstNameSelector);
    fillInput(override, relationFirstNameEl, firstName);

    const relationLastNameEl = document.querySelector(lastNameSelector);
    fillInput(override, relationLastNameEl, lastName);

    const relationRelationshipEl = document.querySelector(relationshipSelector);
    fillInput(override, relationRelationshipEl, relationships[Math.floor(Math.random() * relationships.length)])

    if (locationSelector) {
      getAndFillElement(override, locationSelector, generateLocation());
    }
  }

  function handlePredeceased(override) {
    handleDeceasedRelation(
      override,
      '#id_predeceased_relationship-raw_first_name',
      '#id_predeceased_relationship-raw_last_name',
      '#id_predeceased_relationship-relationship_type',
      '#id_predeceased_relationship-location_str',
    );
  }

  function handleSurvivedBy(override) {
    handleDeceasedRelation(
      override,
      '#id_surviving_relationship-raw_first_name',
      '#id_surviving_relationship-raw_last_name',
      '#id_surviving_relationship-relationship_type',
    );
  }

  // function handleMilestone(override) {
  //   const otherStrSelector = '#id_milestone-milestone_other_str';
  //   const otherStrValue = `${generateRandomWord()} ${generateRandomWord()} ${generateRandomWord()} ${generateRandomWord()}`;
  //   getAndFillElement(override, otherStrSelector, otherStrValue);

  //   const milestoneType = '#id_milestone-milestone_type';
  //   const milestoneTypeEl = document.querySelector(milestoneType);
  //   const randomOptionValue = milestoneTypeEl.options[Math.floor(Math.random() * milestoneTypeEl.options.length)].value;
  //   fillInput(override, milestoneTypeEl, randomOptionValue);

  //   const milestoneYear = '#id_milestone-date_occurred_year';
  //   const milestoneYearEl = document.querySelector(milestoneYear);
  //   const randomYearValue = milestoneYearEl.options[Math.floor(Math.random() * milestoneYearEl.options.length)].value;
  //   fillInput(override, milestoneYearEl, randomYearValue);

  //   const location = '#id_milestone-location_str';
  //   getAndFillElement(override, location, generateLocation());
  // }

  function fillForm(override) {
    handleNewUser(override)

    handleDeceased(override);

    handleTextAreas(override);

    handleDonation(override)

    handleInvitePeople(override);

    handleCause(override);

    handlePredeceased(override);

    handleSurvivedBy(override);

    handleFlowerDelivery(override);


    // handleMilestone(override);

    const ccNumberWrapper = document.querySelector(".CardNumberField-input-wrapper");
    console.log('ccNumberWrapper', ccNumberWrapper)
    const ccNumberEl = ccNumberWrapper.querySelector('input');
    console.log('ccNumberEl', ccNumberEl)
    fillInput(override, ccNumberEl, '4242 4242 4242 4242');

    const expDateEl = document.querySelector('[name="exp-date"]');
    fillInput(override, expDateEl, '12/50');

    const securityCodeEl = document.querySelector('[name="cc-csc"]');
    fillInput(override, securityCodeEl, '123');

    const zipCodeEl = document.querySelector('#id_postal_code');
    fillInput(override, zipCodeEl, '12321');

    const phoneEl = document.querySelector('[type="tel"]');
    fillInput(override, phoneEl, '1231231234');


  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "generateNoOverride") {
      fillForm();
    } else if (message.command === "generateWithOverride") {
      fillForm(true)
    } else {
      console.log('Command not recognized')
    }
  })

})();
