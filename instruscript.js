// ===================== Dark Mode =====================
const darkToggle = document.getElementById('darkToggle');

if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
  document.body.classList.add('dark');
  darkToggle.innerText = '☀️';
} else {
  darkToggle.innerText = '🌙';
}

darkToggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  darkToggle.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// ===================== Data =====================

  const data = [
    {name:"Sitar",origin:"India",manufacturer:"Rikhi Ram, Hiren Roy, Surobani, Vadya, Miraj luthiers",extra1:"Student: $250–$800",extra2:"Pro: $1,500–$4,500+",description:"Plucked Indian classical string instrument.",image:".//images/sitar.jpg",link:"#"},
    {name:"Harmonium",origin:"India",manufacturer:"Dwarkin & Sons (Kolkata), Delhi harmonium makers",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"A hand-pumped reed instrument used in Hindustani classical and devotional music.",image:".//images/harmonium.jpg",link:"#"},  
    {name:"Shehnai",origin:"India",manufacturer:"Banaras shehnai makers, Miraj artisans",extra1:"Student: $100–$300",extra2:"Pro: $600–$1,500+",description:"Traditional North Indian wind instrument played at weddings and religious events.",image:".//images/shehnaii.jpg",link:"#"},  
    {name:"Mridangam",origin:"India (South)",manufacturer:"Thanjavur percussion makers, Palakkad artisans",extra1:"Student: $200–$600",extra2:"Pro: $1,000–$2,500+",description:"Primary percussion instrument of Carnatic music.",image:".//images/mridangam.jpg",link:"#"},  
    {name:"Sarangi",origin:"India",manufacturer:"Nepalgunj and Banaras sarangi makers",extra1:"Student: $250–$700",extra2:"Pro: $1,500–$3,500+",description:"A bowed short-necked string instrument known for its soulful, vocal-like tone in Hindustani music.",image:".//images/sarangi.jpg",link:"#"},  
    {name:"Rabab",origin:"Afghanistan",manufacturer:"Kabul/Peshawar artisans",extra1:"Student: $250–$700",extra2:"Pro: $1,200–$3,000+",description:"Afghan plucked string instrument.",image:".//images/rabab.avif",link:"#"},
    {name:"Erhu",origin:"China",manufacturer:"Dunhuang, Shanghai No.1 Factory, Tianjin Luthiers",extra1:"Student: $100–$400",extra2:"Pro: $800–$3,000+",description:"Chinese bowed fiddle.",image:".//images/erhu.jpg",link:"#"},
    {name:"Pipa",origin:"China",manufacturer:"Dunhuang, Shanghai No.1 Factory",extra1:"Student: $200–$700",extra2:"Pro: $1,500–$5,000+",description:"Chinese four-stringed lute.",image:".//images/pipa.jpg",link:"#"},
    {name:"Guqin",origin:"China",manufacturer:"Beijing/Shanghai workshops, Master luthiers",extra1:"Student: $400–$1,200",extra2:"Pro: $2,500–$8,000+",description:"Ancient Chinese zither.",image:".//images/guqin.jpg",link:"#"},
    {name:"Koto",origin:"Japan",manufacturer:"Miyamoto Unosuke, Sawai school makers",extra1:"Student: $600–$1,500",extra2:"Pro: $3,000–$10,000+",description:"Japanese 13-string zither.",image:".//images/qoto",link:"#"},
    {name:"Shamisen",origin:"Japan",manufacturer:"Tokyo Wagakki, specialized luthiers",extra1:"Student: $300–$900",extra2:"Pro: $2,000–$6,000+",description:"Three-string fretless Japanese lute.",image:".//images/shamisen.jpg",link:"#"},
    {name:"Biwa",origin:"Japan",manufacturer:"Traditional luthiers",extra1:"Student: $700–$1,800",extra2:"Pro: $3,000–$8,000+",description:"Japanese short-necked lute.",image:".//images/biwa.jpg",link:"#"},
    {name:"Gayageum",origin:"Korea",manufacturer:"Korean traditional instrument makers",extra1:"Student: $400–$1,000",extra2:"Pro: $2,000–$6,000+",description:"Korean zither-like instrument.",image:".//images/gayageum.jpg",link:"#"},
    {name:"Geomungo",origin:"Korea",manufacturer:"Korean traditional instrument makers",extra1:"Student: $500–$1,200",extra2:"Pro: $2,500–$7,000+",description:"Korean six-string zither.",image:".//images/geomungo.png",link:"#"},
    {name:"Oud",origin:"Arab world",manufacturer:"Sukar, Shehata, Godin",extra1:"Student: $200–$800",extra2:"Pro: $1,500–$5,000+",description:"Middle Eastern pear-shaped string instrument.",image:".//images/oud.png",link:"#"},
    {name:"Tar (Persian)",origin:"Iran",manufacturer:"Tehran luthiers, Shahram Mirjalali workshop",extra1:"Student: $300–$900",extra2:"Pro: $1,500–$4,000+",description:"Persian double-bowl string instrument.",image:".//images/tar.png",link:"#"},
    {name:"Setar (Persian)",origin:"Iran",manufacturer:"Tehran/Isfahan artisans",extra1:"Student: $200–$500",extra2:"Pro: $1,000–$3,000+",description:"Persian long-necked lute.",image:".//images/setar.png",link:"#"},
    {name:"Bouzouki",origin:"Greece",manufacturer:"Zozef, Greek luthiers, Trinity College",extra1:"Student: $300–$900",extra2:"Pro: $1,500–$4,000+",description:"Greek long-necked string instrument.",image:".//images/bouzoukua.png",link:"#"},
    {name:"Balalaika",origin:"Russia",manufacturer:"St. Petersburg/Moscow workshops",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"Russian triangular-bodied lute.",image:".//images/balalaika.png",link:"#"},
    {name:"Domra",origin:"Russia",manufacturer:"Russian luthiers",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"Russian round-bodied string instrument.",image:".//images/domra.png",link:"#"},
    {name:"Mandolin",origin:"Italy",manufacturer:"Gibson, Eastman, Kentucky",extra1:"Student: $100–$400",extra2:"Pro: $800–$3,000+",description:"Plucked string instrument from Italy.",image:".//images/mandolin.png",link:"#"},
    {name:"Violin",origin:"Italy",manufacturer:"Yamaha, Stentor, Höfner, Stradivari",extra1:"Student: $150–$600",extra2:"Pro: $1,500–$15,000+",description:"Bow-stringed orchestral instrument.",image:".//images/violin.jpg",link:"#"},
    {name:"Guitar (Classical/Acoustic)",origin:"Spain",manufacturer:"Yamaha, Fender, Martin, Taylor, Ibanez",extra1:"Student: $80–$400",extra2:"Pro: $800–$5,000+",description:"Six-stringed plucked instrument.",image:".//images/guitar.jpeg",link:"#"},
    {name:"Lute",origin:"Europe (Medieval)",manufacturer:"Specialist luthiers (Europe)",extra1:"Student: $500–$1,500",extra2:"Pro: $2,500–$8,000+",description:"Medieval European plucked string instrument.",image:".//images/lute.png",link:"#"},
    {name:"Hurdy-gurdy",origin:"France",manufacturer:"Noy, Pajot, modern French luthiers",extra1:"Student: $1,000–$2,500",extra2:"Pro: $3,500–$10,000+",description:"French mechanical string instrument.",image:".//images/hurdy.jpg",link:"#"},
    {name:"Banjo",origin:"USA",manufacturer:"Deering, Recording King, Gold Tone",extra1:"Student: $150–$500",extra2:"Pro: $1,200–$4,000+",description:"Plucked American string instrument.",image:".//images/banjo.png",link:"#"},
    {name:"Ukulele",origin:"Hawaii (USA)",manufacturer:"Kala, Kamaka, Kanile’a",extra1:"Student: $40–$200",extra2:"Pro: $400–$1,500+",description:"Small Hawaiian chordophone.",image:".//images/ukulele.png",link:"#"},
    {name:"Double Bass",origin:"Europe",manufacturer:"Yamaha, Eastman, Shen",extra1:"Student: $800–$2,000",extra2:"Pro: $4,000–$20,000+",description:"Lowest-pitched orchestral string instrument.",image:".//images/doublebass.png",link:"#"},
    {name:"Cello",origin:"Italy",manufacturer:"Yamaha, Eastman, Jay Haide",extra1:"Student: $400–$1,200",extra2:"Pro: $2,500–$15,000+",description:"Bow-stringed deep-register instrument.",image:".//images/cello.png",link:"#"},
    {name:"Viola",origin:"Italy",manufacturer:"Yamaha, Stentor, Eastman",extra1:"Student: $250–$800",extra2:"Pro: $2,000–$10,000+",description:"Middle-register orchestral bow instrument.",image:".//images/viola.jpg",link:"#"},
    {name:"Bansuri",origin:"India",manufacturer:"Subhash (Pune), Punam Flutes, Harsh Wardhan",extra1:"Student: $20–$80",extra2:"Pro: $150–$500+",description:"Indian bamboo transverse flute.",image:".//images/bansuri.png",link:"#"},
    {name:"Nadaswaram",origin:"India (South)",manufacturer:"Thanjavur artisans",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,500+",description:"South Indian double reed wind instrument.",image:".//images/nadaswaram.png",link:"#"},
    {name:"Shakuhachi",origin:"Japan",manufacturer:"Yuu (ABS), Japanese master makers",extra1:"Student: $200–$700",extra2:"Pro: $1,500–$5,000+",description:"Japanese end-blown bamboo flute.",image:".//images/shakuhachi.jfif",link:"#"},
    {name:"Dizi",origin:"China",manufacturer:"Dunhuang, Beijing makers",extra1:"Student: $20–$60",extra2:"Pro: $150–$500+",description:"Chinese transverse bamboo flute.",image:".//images/dizi.jfif",link:"#"},
    {name:"Suona",origin:"China",manufacturer:"Chinese workshops",extra1:"Student: $40–$120",extra2:"Pro: $300–$800+",description:"Chinese double-reed horn instrument.",image:".//images/suona.jfif",link:"#"},
    {name:"Kaval",origin:"Turkey/Balkans",manufacturer:"Bulgarian/Turkish makers",extra1:"Student: $100–$300",extra2:"Pro: $500–$1,500+",description:"Turkish/Balkan chromatic flute.",image:".//images/kaval.jpg",link:"#"},
    {name:"Zurna",origin:"Turkey",manufacturer:"Turkish makers",extra1:"Student: $60–$180",extra2:"Pro: $300–$900+",description:"Loud Turkish double reed.",image:".//images/zurna.jpg",link:"#"},
    {name: "Davul",origin: "Turkey",manufacturer: "Turkish makers",extra1: "Student: $120–$300",extra2: "Pro: $500–$1,200+",description: "Large double-headed drum played with sticks, producing deep rhythmic beats in Turkish and Balkan music.",image: "./images/davul.jpg",link: "#"},
    {name:"Ney",origin:"Middle East",manufacturer:"Turkish/Egyptian makers",extra1:"Student: $40–$120",extra2:"Pro: $300–$1,000+",description:"Middle Eastern end-blown flute.",image:".//images/ney.jpg",link:"#"},
    {name:"Didgeridoo",origin:"Australia (Aboriginal)",manufacturer:"Aboriginal artisans, Meinl (modern)",extra1:"Student: $80–$250",extra2:"Pro: $400–$1,500+",description:"Australian Aboriginal drone pipe.",image:".//images/didgeridoo.webp",link:"#"},
    {name:"Alphorn",origin:"Switzerland",manufacturer:"Fankhauser, Molnar, Swiss makers",extra1:"Student: $1,200–$3,000",extra2:"Pro: $4,000–$10,000+",description:"Long wooden Swiss horn.",image:".//images/alphorn.avif",link:"#"},
    {name:"Bagpipes (Great Highland)",origin:"Scotland",manufacturer:"McCallum, Dunbar, Wallace",extra1:"Student: $600–$1,500",extra2:"Pro: $2,500–$6,000+",description:"Scottish air-reed bagpipe.",image:".//images/Bagpipes.png",link:"#"},
    {name:"Tin Whistle",origin:"Ireland",manufacturer:"Generation, Clarke, Burke",extra1:"Student: $10–$30",extra2:"Pro: $80–$250+",description:"Simple Irish fipple flute.",image:".//images/tinwhi.jfif",link:"#"},
    {name:"Flute (Western)",origin:"Europe",manufacturer:"Yamaha, Gemeinhardt, Muramatsu, Powell",extra1:"Student: $150–$400",extra2:"Pro: $1,000–$8,000+",description:"Western transverse flute.",image:".//images/fluter.png",link:"#"},
    {name:"Clarinet",origin:"Germany",manufacturer:"Buffet Crampon, Yamaha, Backun",extra1:"Student: $200–$500",extra2:"Pro: $1,200–$7,000+",description:"Single reed orchestral woodwind.",image:".//images/clarinet.webp",link:"#"},
    {name:"Oboe",origin:"France",manufacturer:"Lorée, Yamaha, Howarth",extra1:"Student: $800–$2,000",extra2:"Pro: $3,000–$10,000+",description:"Double-reed high-voiced woodwind.",image:".//images/oboe.webp",link:"#"},
    {name:"Bassoon",origin:"Germany/France",manufacturer:"Heckel, Fox, Schreiber",extra1:"Student: $2,000–$6,000",extra2:"Pro: $8,000–$30,000+",description:"Low-register double-reed woodwind.",image:".//images/basson.jpg",link:"#"},
    {name:"Saxophone (Alto)",origin:"Belgium/France",manufacturer:"Selmer Paris, Yamaha, Yanagisawa",extra1:"Student: $400–$900",extra2:"Pro: $2,000–$7,000+",description:"Popular jazz and orchestral woodwind.",image:".//images/saxophone.jpg",link:"#"},
    {name:"Trumpet",origin:"Europe",manufacturer:"Bach (Conn-Selmer), Yamaha, Schilke",extra1:"Student: $200–$500",extra2:"Pro: $1,200–$4,000+",description:"Brass band and orchestral lead horn.",image:".//images/trumpet.jpg",link:"#"},
    {name:"Trombone (Tenor)",origin:"Europe",manufacturer:"Bach, Yamaha, Conn",extra1:"Student: $250–$600",extra2:"Pro: $1,500–$5,000+",description:"Sliding tube orchestral brass.",image:".//images/trombone.jpg",link:"#"},
    {name:"Tabla",origin:"India",manufacturer:"Haridas Vhatkar, Mukta Das, Kolkata/Mumbai makers",extra1:"Student: $80–$200",extra2:"Pro: $400–$1,200+",description:"Hand percussion Indian drums.",image:".//images/tablaa.jfif",link:"#"},
    {name:"Pakhawaj",origin:"India (North)",manufacturer:"Varanasi/Mathura artisans",extra1:"Student: $150–$400",extra2:"Pro: $700–$1,800+",description:"North Indian barrel drum.",image:".//images/pakhawaj.jfif",link:"#"},
    {name:"Dhol",origin:"Punjab (IN/PK)",manufacturer:"Ludhiana/Jalandhar makers, Dhol Factory (UK)",extra1:"Student: $80–$200",extra2:"Pro: $400–$1,000+",description:"Double-sided Punjabi drum.",image:".//images/dhol.webp",link:"#"},
    {name:"Chenda",origin:"Kerala, India",manufacturer:"Kerala artisans",extra1:"Student: $120–$300",extra2:"Pro: $500–$1,200+",description:"Kerala cylindrical drum.",image:".//images/chenda.webp",link:"#"},
    {name:"Kanjira",origin:"South India",manufacturer:"Luthiers (Chennai)",extra1:"Student: $30–$100",extra2:"Pro: $150–$400+",description:"Single-head frame drum.",image:".//images/kanjira.jpg",link:"#"},
    {name:"Taiko",origin:"Japan",manufacturer:"Asano Taiko, Miyamoto Unosuke",extra1:"Student: $400–$1,200",extra2:"Pro: $2,500–$10,000+",description:"Japanese barrel drum.",image:".//images/taiko.jpg",link:"#"},
    {name:"Tsuzumi",origin:"Japan",manufacturer:"Japanese artisans",extra1:"Student: $200–$600",extra2:"Pro: $1,200–$3,000+",description:"Hourglass Japanese drum.",image:".//images/tsuzumi.webp",link:"#"},
    {name:"Janggu",origin:"Korea",manufacturer:"Korean drum makers",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"Korean hourglass drum.",image:".//images/janggu.jpg",link:"#"},
    {name:"Buk (Korean barrel drum)",origin:"Korea",manufacturer:"Korean drum makers",extra1:"Student: $120–$300",extra2:"Pro: $600–$1,500+",description:"Barrel drum for Korean folk music.",image:".//images/buk.jpg",link:"#"},
    {name:"Djembe",origin:"West Africa",manufacturer:"Meinl, Toca, Remo, African artisans",extra1:"Student: $80–$250",extra2:"Pro: $400–$1,200+",description:"West African rope-tuned hand drum.",image:".//images/djembe.jfif",link:"#"},
    {name:"Talking Drum",origin:"Nigeria",manufacturer:"Nigerian artisans",extra1:"Student: $60–$150",extra2:"Pro: $300–$700+",description:"Pressure drum from West Africa.",image:".//images/tdum.png",link:"#"},
    {name:"Ashiko",origin:"West Africa",manufacturer:"Artisan makers, Toca",extra1:"Student: $100–$250",extra2:"Pro: $400–$900+",description:"African hand drum.",image:".//images/ashiko.jpg",link:"#"},
    {name:"Conga",origin:"Cuba",manufacturer:"LP (Latin Percussion), Meinl, Toca",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"Tall Cuban hand drum.",image:".//images/congo.jpg",link:"#"},
    {name:"Bongo Drums",origin:"Cuba",manufacturer:"LP, Meinl, Toca",extra1:"Student: $60–$150",extra2:"Pro: $300–$700+",description:"Paired small Cuban drums.",image:".//images/bongos.webp",link:"#"},
    {name:"Timbales",origin:"Cuba/Puerto Rico",manufacturer:"LP, Meinl",extra1:"Student: $200–$500",extra2:"Pro: $800–$1,800+",description:"Metal Latin percussion drums.",image:".//images/timbales.webp",link:"#"},
    {name:"Steelpan (Steel Drum)",origin:"Trinidad & Tobago",manufacturer:"Panland (TT), Panyard (USA)",extra1:"Student: $300–$900",extra2:"Pro: $1,500–$5,000+",description:"Trinidadian chromatic drum.",image:".//images/steelpan.png",link:"#"},
    {name:"Cajón",origin:"Peru",manufacturer:"Schlagwerk, Meinl, LP",extra1:"Student: $80–$200",extra2:"Pro: $300–$800+",description:"Peruvian box drum.",image:".//images/cajon.webp",link:"#"},
    {name:"Surdo",origin:"Brazil",manufacturer:"Contemporânea, Gope",extra1:"Student: $120–$250",extra2:"Pro: $400–$900+",description:"Brazilian bass drum.",image:".//images/surdo.webp",link:"#"},
    {name:"Maracas",origin:"Latin America",manufacturer:"LP, Meinl",extra1:"Student: $10–$30",extra2:"Pro: $60–$150+",description:"Rattle percussion from Latin America.",image:".//images/maracas.webp",link:"#"},
    {name:"Tambourine",origin:"Mediterranean/Europe",manufacturer:"LP, Meinl, Remo",extra1:"Student: $15–$40",extra2:"Pro: $80–$250+",description:"Hand percussion jingle instrument.",image:".//images/tambourine.webp",link:"#"},
    {name:"Snare Drum",origin:"Europe",manufacturer:"Pearl, Yamaha, Ludwig",extra1:"Student: $120–$300",extra2:"Pro: $500–$1,500+",description:"High-pitched orchestral drum.",image:".//images/snare.webp",link:"#"},
    {name:"Bass Drum (concert)",origin:"Europe",manufacturer:"Adams, Yamaha",extra1:"Student: $300–$800",extra2:"Pro: $1,500–$5,000+",description:"Large orchestral drum.",image:".//images/bass.webp",link:"#"},
    {name:"Drum Kit (Modern)",origin:"USA",manufacturer:"Pearl, Yamaha, Tama, Ludwig, DW",extra1:"Student: $300–$700",extra2:"Pro: $1,000–$5,000+",description:"Complete percussion set.",image:".//images/drumkit.jpg",link:"#"},
    {name:"Piano",origin:"Italy (modern global)",manufacturer:"Yamaha, Steinway & Sons, Kawai, Roland",extra1:"Digital: $400–$2,000",extra2:"Acoustic: $3,000–$100,000+",description:"88-key classical keyboard instrument.",image:".//images/piano.jpg",link:"#"},
    {name:"Organ",origin:"Europe",manufacturer:"Allen, Rodgers, local pipe organ builders",extra1:"Digital: $1,000–$8,000",extra2:"Pipe: $50,000–$1,000,000+",description:"Large keyboard wind instrument.",image:".//images/organ.webp",link:"#"},
    {name:"Accordion",origin:"Austria/Germany",manufacturer:"Hohner, Roland, Scandalli",extra1:"Student: $300–$800",extra2:"Pro: $1,500–$6,000+",description:"Wind keyboard with bellows.",image:".//images/accordian.jfif",link:"#"},
    {name:"Harmonica",origin:"Germany",manufacturer:"Hohner, Suzuki, Lee Oskar",extra1:"Student: $20–$60",extra2:"Pro: $80–$300+",description:"Tiny mouth-blown reed instrument.",image:".//images/harmonica.jfif",link:"#"},
    {name:"Synthesizer",origin:"USA",manufacturer:"Korg, Roland, Moog, Sequential",extra1:"Entry: $300–$700",extra2:"Pro: $1,000–$4,000+",description:"Electronic sound-generating keyboard.",image:".//images/synthesizer.png",link:"#"},
    {name:"Kalimba (Mbira)",origin:"Zimbabwe",manufacturer:"Hugh Tracey (AMI), Gecko",extra1:"Student: $20–$60",extra2:"Pro: $100–$300+",description:"African thumb piano.",image:".//images/kalimba.webp",link:"#"},
    {name:"Kora",origin:"Mali/Gambia",manufacturer:"Senegambian artisans, Atelier Kala Jula",extra1:"Student: $400–$900",extra2:"Pro: $1,500–$4,000+",description:"West African harp lute.",image:".//images/kora.avif",link:"#"},
    {name:"Ngoni",origin:"Mali",manufacturer:"Malian artisans",extra1:"Student: $200–$500",extra2:"Pro: $800–$2,000+",description:"West African skin-headed lute.",image:".//images/ngoni.webp",link:"#"},
    {name:"Balafon (Xylophone)",origin:"West Africa",manufacturer:"West African artisans",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"African wooden xylophone.",image:".//images/balafon.webp",link:"#"},
    {name:"Santoor",origin:"India/Iran",manufacturer:"Monoj Kumar Sardar, Indian/Persian makers",extra1:"Student: $200–$500",extra2:"Pro: $1,000–$3,000+",description:"Hammered dulcimer from India/Iran.",image:".//images/san.jfif",link:"#"},
    {name:"Dulcimer (Hammered)",origin:"Europe",manufacturer:"Dusty Strings, Master Works",extra1:"Student: $300–$700",extra2:"Pro: $1,200–$3,500+",description:"European percussion zither.",image:".//images/dulcimer.webp",link:"#"},
    {name:"Gusli",origin:"Russia",manufacturer:"Russian artisans",extra1:"Student: $200–$500",extra2:"Pro: $900–$2,500+",description:"Ancient Russian multi-stringed psaltery.",image:".//images/gusli.webp",link:"#"},
    {name:"Bandoneon",origin:"Argentina",manufacturer:"AA (Alfred Arnold), modern German/Argentine makers",extra1:"Student: $700–$1,500",extra2:"Pro: $3,000–$8,000+",description:"Argentine free-reed tango instrument.",image:".//images/bandinein.webp",link:"#"},
    {name:"Charango",origin:"Bolivia/Peru",manufacturer:"Andean luthiers",extra1:"Student: $80–$250",extra2:"Pro: $400–$1,200+",description:"Small Andean ten-string lute.",image:".//images/charango.webp",link:"#"},
    {name:"Quena (Andean flute)",origin:"Peru/Bolivia",manufacturer:"Andean makers",extra1:"Student: $15–$50",extra2:"Pro: $120–$300+",description:"Traditional Andean notched flute.",image:".//images/quena.webp",link:"#"},
    {name:"Panpipes (Zampoña)",origin:"Andes",manufacturer:"Andean makers",extra1:"Student: $15–$50",extra2:"Pro: $120–$300+",description:"Andean tube pan flute.",image:".//images/panpipes.jfif",link:"#"},
    {name:"Tiple",origin:"Colombia",manufacturer:"Colombian luthiers",extra1:"Student: $120–$300",extra2:"Pro: $500–$1,200+",description:"Colombian small chordophone.",image:".//images/tiple.webp",link:"#"},
    {name:"Rebab",origin:"Middle East/Asia",manufacturer:"Regional artisans",extra1:"Student: $100–$300",extra2:"Pro: $600–$1,500+",description:"Spike fiddle from Middle East/Asia.",image:".//images/rebab.jpg",link:"#"},
    {name:"Morin Khuur",origin:"Mongolia",manufacturer:"Mongolian makers",extra1:"Student: $300–$700",extra2:"Pro: $1,200–$3,000+",description:"Horsehead Mongolian fiddle.",image:".//images/morin.webp",link:"#"},
    {name:"Jaw Harp (Murchunga)",origin:"Mongolia/Siberia",manufacturer:"Harmonictone, Siberian makers",extra1:"Student: $10–$30",extra2:"Pro: $60–$200+",description:"Mouth-played plucked idiophone.",image:".//images/murchunga.jpeg",link:"#"},
    {name:"Berimbau",origin:"Brazil",manufacturer:"Contemporânea, Brazilian artisans",extra1:"Student: $40–$120",extra2:"Pro: $150–$400+",description:"Brazilian musical bow.",image:".//images/berimbau.webp",link:"#"},
    {name:"Cuíca",origin:"Brazil",manufacturer:"Contemporânea, Gope",extra1:"Student: $80–$200",extra2:"Pro: $300–$700+",description:"Brazilian friction drum.",image:".//images/cuica.jpg",link:"#"},
    {name:"Saz (Bağlama)",origin:"Turkey",manufacturer:"Özay, Yıldırım, Turkish makers",extra1:"Student: $120–$300",extra2:"Pro: $600–$1,800+",description:"Turkish long-necked lute.",image:".//images/saz.webp",link:"#"},
    {name:"Tarogato",origin:"Hungary",manufacturer:"Hungarian makers",extra1:"Student: $600–$1,200",extra2:"Pro: $2,000–$5,000+",description:"Hungarian woodwind reed instrument.",image:".//images/tarogato.jfif",link:"#"},
    {name:"Lyre",origin:"Ancient Greece",manufacturer:"Modern reconstructions, Luthiers",extra1:"Student: $150–$400",extra2:"Pro: $800–$2,000+",description:"Ancient Greek harp-like string instrument.",image:".//images/lyre.jfif",link:"#"},
    {name:"Didgeridoo",origin:"Australia (Aboriginal)",manufacturer:"Aboriginal artisans, Meinl (modern)",extra1:"Student: $80–$250",extra2:"Pro: $400–$1,500+",description:"Australian Aboriginal **drone pipe** made from a hollowed-out log.",image:".//images/didgeridoo.webp",link:"#"},
    {name:"Harp (Concert)",origin:"Europe",manufacturer:"Salvi, Lyon & Healy, Camac",extra1:"Lever Harp: $2,500–$8,000",extra2:"Pedal Harp: $15,000–$60,000+",description:"Large, triangular frame instrument with many strings **plucked perpendicular** to the soundboard.",image:".//images/harp.webp",link:"#"}
];


// ===================== Variables =====================
const container = document.getElementById('cardContainer');
const searchInput = document.getElementById('searchInput');
const backToTop = document.getElementById('backToTop');
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// ===================== Render Cards =====================
function renderCards(items) {
  container.innerHTML = '';
  
  items.forEach(inst => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${inst.image}" alt="${inst.name}">
      <div class="card-content">
        <h3>${inst.name}</h3>
        <p><strong>Origin:</strong> ${inst.origin}</p>
        <p>${inst.description}</p>
        <button class="bookmark-btn" data-name="${inst.name}">
          ${bookmarks.includes(inst.name) ? '🔖 Bookmarked' : '🔖 Bookmark'}
        </button>
      </div>
    `;

    card.onclick = (e) => {
      if (!e.target.classList.contains('bookmark-btn')) {
        openModal(inst);
      }
    };

    container.appendChild(card);
  });

  // Bookmark buttons
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.name;
      if (!bookmarks.includes(name)) {
        bookmarks.push(name);
        btn.innerText = '🔖 Bookmarked';
        alert(`${name} bookmarked!`);
      } else {
        bookmarks = bookmarks.filter(n => n !== name);
        btn.innerText = '🔖 Bookmark';
        alert(`${name} removed from bookmarks.`);
      }
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };
  });
}

// ===================== Initial Render =====================
renderCards(data);

// ===================== Search =====================
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = data.filter(inst =>
    inst.name.toLowerCase().includes(query) ||
    inst.origin.toLowerCase().includes(query)
  );
  renderCards(filtered);
});

// ===================== Back to Top =====================
window.onscroll = () => {
  backToTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
};

backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// ===================== Modal =====================
function openModal(inst) {
  document.getElementById('modalImg').src = inst.image;
  document.getElementById('modalName').textContent = inst.name;
  document.getElementById('modalOrigin').textContent = inst.origin;
  document.getElementById('modalManufacturer').textContent = inst.manufacturer;
  document.getElementById('modalExtra1').textContent = inst.extra1;
  document.getElementById('modalExtra2').textContent = inst.extra2;
  document.getElementById('modalDesc').textContent = inst.description;
  document.getElementById('purchaseLink').href = inst.link;
  document.getElementById('myModal').style.display = 'flex';
}

document.getElementById('closeBtn').onclick = () => {
  document.getElementById('myModal').style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
};

// ===================== View Bookmarks =====================
const viewBookmarksBtn = document.getElementById('viewBookmarks');
viewBookmarksBtn.classList.add('btn-instrument');

viewBookmarksBtn.onclick = () => {
  const bookmarkedItems = data.filter(inst => bookmarks.includes(inst.name));
  renderCards(bookmarkedItems);

  // Add Back button if not present
  if (!document.getElementById('backToAll')) {
    const backBtn = document.createElement('button');
    backBtn.id = 'backToAll';
    backBtn.classList.add('btn-instrument');
    backBtn.innerText = '⬅️';
    backBtn.backgroundColor = 'transparent';
    backBtn.style.margin = '10px';
    backBtn.onclick = () => {
      renderCards(data);
      backBtn.remove();
    };
    container.parentNode.insertBefore(backBtn, container);
  }
};



const userMenu = document.getElementById('userMenu');
const profileDropdown = document.getElementById('profileDropdown');

userMenu.addEventListener('click', ()=>{
  profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (e)=>{
  if(!userMenu.contains(e.target) && !profileDropdown.contains(e.target)){
    profileDropdown.style.display = 'none';
  }
});

// Mock user data
const user = {
  name: 'Shubham',
  email: 'shubham@gmail.com',
  photo: 'user1.jpg',
  bookmarks: ['Sitar', 'Veena']
};

// Fill user data dynamically
document.getElementById('userPhoto').src = user.photo;
document.getElementById('userName').textContent = user.name;
document.getElementById('dropdownPhoto').src = user.photo;
document.getElementById('dropdownName').textContent = user.name;
document.getElementById('dropdownEmail').textContent = user.email;

// Edit Profile
document.getElementById('editProfileBtn').addEventListener('click', ()=>{
  const newPhoto = prompt("Enter new profile photo URL:");
  if(newPhoto) {
    user.photo = newPhoto;
    document.getElementById('userPhoto').src = newPhoto;
    document.getElementById('dropdownPhoto').src = newPhoto;
  }
});

// View Bookmarks
document.getElementById('viewBookmarksBtn').addEventListener('click', ()=>{
  alert("Your Bookmarks:\n" + user.bookmarks.join(", "));
});

// Logout
function logout(){
  localStorage.setItem("loggedIn","false");
  window.location.href="index.html";
}
