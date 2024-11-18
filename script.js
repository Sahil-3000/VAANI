// Playlist data
const playlist = [
    { title: "Jo Tum Mere Ho", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3" },//song1
    { title: "Fly Karke", artist: "SABBA, Jasmeen", cover: "covers/track2.jpg", audio: "songs/fly krke.mp3" },//song2
    
    //Arjan Dhillon-Glorious and more...
    { title: "Youth Flow", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3" },//song4
    { title: "Glorious", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3" },//song5
    { title: "Maavan", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3" },//song6
    { title: "Back To Sikhi", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3" },//song7
    { title: "Biography", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3" },//song8
    { title: "Tyar", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3" },//song9
    
    { title: "Heer", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3" },//song9
    { title: "Punjab Intro", artist: "Arjan Dhillon",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3" },//song9
    
    
    
    //Dhanda
    { title: "Up To You", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3" },//song10
    { title: "Russian Bandana", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3" },//song11
    
    { title: "Ishq", artist: "Faheem Abdullah,Rauhan Malik", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3" },//song12
    
    //The Beatles-Rubber Soul
    { title: "If I Needed Someone", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3" },//13
    { title: "Norwegian Wood", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3" },//14
    { title: "You Won't See Me", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3" },//15
    { title: "Think For Yourself", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3" },//16
    { title: "The Word", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3" },//17
    { title: "Michelle", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3" },//18
    { title: "Drive My Car", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3" },//19
    { title: "Girl", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3" },//20
    { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png", artist: "The Beatles", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3" },//21
    { title: "In My Life", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3" },//22
    { title: "Wait", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3" },//23
    { title: "Run For Your Life", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3" },//24
    { title: "Nowhere Man", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3" },//25
    { title: "What Goes On", artist: "The Beatles",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3" },//26
    

    //Diljit Dosanjh
    { title: "Lover  ", artist: "Diljit Dosanjh", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3" },//40
    { title: "Case  ", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3" },//41
    { title: "Ishq Di Baajiyaan  ", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3" },//42
    { title: "Love Ya  ", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3" },//43
    { title: "Lalkara   ", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3" },//44
    { title: "Tu Kya Jaane  ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3" },//45
    { title: "Bol Mohabbat  ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3" },//46
    { title: "Vida Karo  ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3" },//47
    { title: "Panga  ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3" },//48
    { title: "Ishq Mitaye  ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3" },//49
    { title: "5 Tara  ", artist: " Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3" },//50
    { title: "Do You Know ", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3" },//51
    { title: "G.O.A.T", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3" },//52
    { title: "Clash", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3" },//53
    { title: "Muchh", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3" },//54
    { title: "High End", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3" },//55
    { title: "Naram Kalja", artist: "Diljjt Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3" },//56
    { title: "Baaja", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3" },//57
    { title: "Muhammad Ali", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3" },//58
    { title: "El Sueno", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljjt.mp3" },//59
    { title: "Born To Shine", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3" },//60
    { title: "Peaches", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3" },//61
    { title: "What Ve", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3" },//62
    { title: "Hass Hass", artist: "Sia,Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3" },//63
    { title: "Patiala Peg", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3" },//64
    { title: "Mombattiye", artist: "Diljit Dosanjh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_img_diljit.png", audio: "songs/mombattiye_diljit.mp3" },//64

    //Karan Aujla
    { title: "Softly", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3" },//65
    { title: "On Top", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3" },//66
    { title: "WYTB", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3" },//67
    { title: "52 Bars", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3" },//68
    { title: "Jee Ni Lagda", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3" },//69
    { title: "Player", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
    { title: "Chauffeur", artist: " Diljit Dosanjh",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3" },//71
    { title: "White Brown Black", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3" },//72
    { title: "Tauba Tauba", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3" },//73
    { title: "Chitta Kurta", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3" },//74
    { title: "Mexico", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3" },//75
    { title: "God Damn", artist: "Karan Aujla",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3" },//76


    //mislenous songs
    { title: "Victory Anthem", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3" },//27
    { title: "Tu Hai Kaha", artist: "A-U-R", cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3" },//28
    { title: "Sweater", artist: "Preet Hundal", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3" },//29
    { title: "Zindagi", artist: "Sabba", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3" },//30
    { title: "Medal", artist: "Chandra Brar", cover: "covers/medal.jpg", audio: "songs/medal.mp3" },//31
    { title: "Ishq hoya", artist: "Jyoti Nooran, Arjit Srivastav", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3" },//32
    { title: "Illegal", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3" },//33
    { title: "Maada Time", artist: "Sabba", cover: "covers/maada time.jpg", audio: "songs/maada time.mp3" },//34
    { title: "Dil Tu Jaan Tu", artist: "Guranzar", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3" },//35
    { title: "Victory Anthem", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3" },//36
    { title: "Tareyan Do Loh", artist: "Harsh Bilga", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3" },//37
    { title: "Khidki", artist: "Rachit Shrivatav", cover: "covers/khidki.webp", audio: "songs/khidki.mp3" },//38
    { title: "Long Time No See", artist: "A-U-R", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3" },//39
    { title: "That Girl", artist: "Amrinder Gill",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3" },//39
    { title: "Khabbi Seat", artist: "Ammy Virk", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3" },//39
    { title: "Ikk Number", artist: "Gurnam Bhullar", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3" },//39
    { title: "Filter", artist: "Gulab Sidhu", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3" },//39
    { title: "Patti Ton Patiala", artist: "Harkirat Sangha", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3" },//39

    //Hustinder
    { title: "Ik Mutiyaar Hundi Si ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3" },//song3
    { title: "Hundi Si Gareebi", artist: "Hustinder, Black",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3" },//song3
    { title: "Bhuleya Ki Ae", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3" },//song3
    { title: "Dollar Wargiye ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3" },//song3
    { title: "Dullda Glass", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3" },//song3
    { title: "Gal Koun Karda ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3" },//song3
    { title: "Gaza Patti ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3" },//song3
    { title: "Gumnaam Pyaar ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3" },//song3
    { title: "Hasde Hi Rehndeya ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3" },//song3
    { title: "Hathan Utte Duniya ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3" },//song3
    { title: "Hopes ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3" },//song3
    { title: "Jethi Dhee ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3" },//song3
    { title: "Kharcha Kardange ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3" },//song3
    { title: "Laag Daat ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3" },//song3
    { title: "Maa Kehndi Hundi Si ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3" },//song3
    { title: "Man Ton Lehgi ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3" },//song3
    { title: "Mittran De Circle ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3" },//song3
    { title: "Nachdi Ton ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3" },//song3
    { title: "Paasport Size Tasveer ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3" },//song3
    { title: "Praandi ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3" },//song3
    { title: "Pyaar Hoya ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3" },//song3
    { title: "Rabb Di Aulad ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3" },//song3
    { title: "Raonak ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3" },//song3
    { title: "Rullde Firde Aan ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3" },//song3
    { title: "Saade Warge ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3" },//song3
    { title: "Surga Nu Rah ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3" },//song3
    { title: "Tera Mera Nata ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3" },//song3
    { title: "Teri Deed ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3" },//song3
    { title: "Tu Takkri ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3" },//song3
    { title: "Ucheyan Gharan Di Jaaiye ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3" },//song3
    { title: "Velly Yaar ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3" },//song3
    { title: "Watching You ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3" },//song3
    { title: "Yari Tod Layi ", artist: "Hustinder",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3" },//song3
];



// Select the elements
const homeButton = document.querySelector(".home");
const songResults = document.querySelector(".song-results");
const defaultContent = document.querySelector(".default-content");
const searchBtn = document.querySelector(".search-btn");
// Toggle visibility when the home button is clicked
homeButton.addEventListener("click", () => {
    if (songResults.style.display === "block") {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        defaultContent.style.display = "block";
    }
});

searchBtn.addEventListener("click", () => {
    if (songResults.style.display === "none") {
        // Show song results and hide default content
        songResults.style.display = "block";  // or 'block' depending on the layout
        defaultContent.style.display = "none";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        defaultContent.style.display = "block";
    }
});

document.getElementById("search-btn").addEventListener("click", function() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if(query) {
        const results = playlist.filter(song => 
            song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
        );
        displayResults(results);
    }
});

// Optional: Allow Enter key to trigger search
document.getElementById("search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("search-btn").click();
    }
});

function displayResults(results) {
    const resultsContainer = document.querySelector(".song-results");
    resultsContainer.innerHTML = ''; // Clear previous results
    if (results.length > 0) {
        results.forEach(song => {
            const songDiv = document.createElement("div");
            songDiv.classList.add("song-results");

            const songImage = document.createElement("img");
            songImage.src = song.cover;
            songImage.alt = song.title;
            songDiv.appendChild(songImage);

            const songTitle = document.createElement("p");
            songTitle.textContent = `${song.title} - ${song.artist}`;
            songDiv.appendChild(songTitle);

            const downLoad = document.createElement("button");
            downLoad.textContent = "Download";
            downLoad.onclick = () => {
                // Check if there is a current song and it has an audio source
                if (song && song.audio) {
                    const link = document.createElement("a");
                    link.href = song.audio;  // The URL of the song's audio
                    link.download = `${song.title}.mp3`;  // Set the suggested file name for download
                    document.body.appendChild(link);  // Append the link to the body
                    link.click();  // Trigger the download
                    document.body.removeChild(link);  // Remove the link after the download
                } else {
                    alert("No song is currently playing.");
                }
            };
            songDiv.appendChild(downLoad);

            const playButton = document.createElement("button");
            playButton.textContent = "Play";
            playButton.onclick = () => playSong(song.audio);
            songDiv.appendChild(playButton);

            resultsContainer.appendChild(songDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No songs found.</p>';
    }
}

function playSong(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}


let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio(playlist[currentTrackIndex].audio);
// Function to update the current song
function setCurrentSong(track) {
    currentSong = track;
}

// Add event listener to the download button
document.getElementById("download-button").addEventListener("click", () => {
    if (currentSong && currentSong.audio) {
        const link = document.createElement("a");
        link.href = currentSong.audio;
        link.download = `${currentSong.title}.mp3`; // Suggest file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("No song is currently playing.");
    }
});

// Update loadTrack function to also set the current song
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;

    audio.src = track.audio;
    audio.load();
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";           // Ensure image covers sidebar
    sidebar.style.backgroundPosition = "center";      // Center image
    sidebar.style.borderRadius = "8px";               // Maintain border-radius if needed
    sidebar.style.width = "100%";

    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);
        progressSlider.max = Math.floor(audio.duration);
    };

    // Update the current song for the download button
    setCurrentSong(track);
}

// Element references
const nowPlayingTitle = document.querySelector('.track-title');
const nowPlayingArtist = document.querySelector('.track-artist');
const nowPlayingCover = document.querySelector('.track-info img');
const playPauseIcon = document.getElementById('play-pause-icon');
const progressSlider = document.getElementById('progress-slider');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const sidebar = document.querySelector('.current-song-cover img');
const artistImg = document.querySelector('.artist-img')
// Load track based on index

// Play selected song and update footer
function playSong(audioFile) {
    audio.src = audioFile;
    audio.load();
    audio.play();
    isPlaying = true;
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    
    // Update the footer with song details
    const track = playlist.find(song => song.audio === audioFile);
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";
    sidebar.style.backgroundPosition = "center";
    sidebar.style.borderRadius = "8px";
    sidebar.style.width = "100%";
    artistImg.src = track.artistPhoto

    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);
        progressSlider.max = Math.floor(audio.duration);
    };
}

// Play or pause the audio
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseIcon.innerHTML = '<use href="#play-icon"></use>';
        isPlaying = false;
    } else {
        audio.play();
        playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
        isPlaying = true;
    }
}

// Move to the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    artistImg.src = track.artistPhoto
    isPlaying = true;
}

// Move to the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    artistImg.src = track.artistPhoto
    isPlaying = true;
}

// Set volume
function setVolume() {
    audio.volume = document.querySelector('.volume-control input').value / 100;
}

// Format time in minutes and seconds
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress slider and current time display
audio.ontimeupdate = () => {
    progressSlider.value = Math.floor(audio.currentTime);
    currentTimeElement.textContent = formatTime(audio.currentTime);
};

// Change track position when progress slider is moved
progressSlider.oninput = () => {
    audio.currentTime = progressSlider.value;
};

// Load the first track initially
loadTrack(currentTrackIndex);

// Event listeners for playback control icons
document.querySelector('.playback-controls svg:nth-child(1)').onclick = prevTrack;
document.querySelector('.playback-controls svg:nth-child(2)').onclick = togglePlayPause;
document.querySelector('.playback-controls svg:nth-child(3)').onclick = nextTrack;

// Automatically play the next track when the current one ends
audio.onended = () => {
    nextTrack();
};