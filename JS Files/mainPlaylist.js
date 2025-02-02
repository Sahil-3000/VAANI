//array to store the playlists from the main section


let playlistsMain = [
    {
        id: 1,

        title: "Liked Songs",
        artist: "Various Artists",
        cover: "covers/liked playlist.png",
        songs: [
            //Diljit Dosanjh
            {
                title: "Lover      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Lover",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/lover_diljit.png",
                audio: "songs/singles/lover_diljit.mp3",
                searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"

            },//40

            {
                title: "Case        ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Case",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/case_diljit.png",
                audio: "songs/singles/case_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "
            },//41
            {
                title: "Ishq Di Baajiyaan        ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Ishq Di Baajiyaan",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/ishq di baajiyaan_diljit.png",
                audio: "songs/singles/ishq di baajiyaan_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//42
            {
                title: "Love Ya        ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Love Ya",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/lova ya_diljit.png",
                audio: "songs/singles/love ya_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//43
            {
                title: "Lalkara         ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Lalkara",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/lalkara_diljit.png",
                audio: "songs/singles/lalkara_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//44
            {
                title: "Tu Kya Jaane        ",
                artist: "Yashika Sikka, Diljit",
                lyrics: "Tu Kya Jaane",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/tu kya jaane_diljit.png",
                audio: "songs/singles/tu kya jaane_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//45
            {
                title: "Bol Mohabbat        ",
                artist: "AR Rehman, Kailash Kher,Diljit",
                lyrics: "Bol Mohabbat",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/bol mohabbat_diljit.png",
                audio: "songs/singles/bol mohabbat_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//46
            {
                title: "Vida Karo        ",
                artist: "Arijit Singh,Diljjt",
                lyrics: "Vida Karo",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/vida karo_diljit.png",
                audio: "songs/singles/vida karo_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//47
            {
                title: "Panga        ",
                artist: "Diljit Dosanjh, Yo Yo Honey Singh",
                lyrics: "Panga",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/panga_diljit_yoyo.png",
                audio: "songs/singles/panga_diljjt_yoyo.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//48
            {
                title: "Ishq Mitaye        ",
                artist: "AR Rehman, Diljit",
                lyrics: "Ishq Mitaye",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/ishq mitaye_diljit.png",
                audio: "songs/singles/ishq mitaye_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//49
            {
                title: "5 Tara        ",
                artist: " Diljit Dosanjh     ",
                lyrics: "Love Ya",
                lyrics: "5 Tara",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/5 tara_diljit.png",
                audio: "songs/singles/5 tara_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//50
            {
                title: "Do You Know       ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Do You Know",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/do you know_diljit.png",
                audio: "songs/singles/do you know_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//51
            {
                title: "G.O.A.T.      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "G.O.A.T.",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/goat_diljit.png",
                audio: "songs/singles/goat_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//52
            {
                title: "Clash      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Clash",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/clash_diljit.png",
                audio: "songs/singles/clash_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//53
            {
                title: "Muchh      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Muchh",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/muchh_diljit.png",
                audio: "songs/singles/muchh_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//54
            {
                title: "High End      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "High End",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/high end_diljit.png",
                audio: "songs/singles/high end_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//55
            {
                title: "Naram Kalja      ",
                artist: "Diljjt Dosanjh     ",
                lyrics: "Naram Kalja",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/naram kalja_diljit.png",
                audio: "songs/singles/naram kalja_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//56
            {
                title: "Baaja      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Baaja",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/bajja_diljit.png",
                audio: "songs/singles/bajja_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//57
            {
                title: "Muhammad Ali      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Muhammad Ali",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/muhammad ali_diljit.png",
                audio: "songs/singles/muhammad ali_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//58
            {
                title: "El Sueno      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "El Sueno",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/el sueno_diljit.png",
                audio: "songs/singles/el sueno_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//59
            {
                title: "Born To Shine      ",
                artist: "Diljit Dosanjb",
                lyrics: "Born To Shine",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/born to shine_diljit.png",
                audio: "songs/singles/born to shine_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//60
            {
                title: "Peaches      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Peaches",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/peaches_diljit.png",
                audio: "songs/singles/peaches_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//61
            {
                title: "What Ve      ",
                artist: "Diljjt Dosanjh,Nimrat Khaira",
                lyrics: "What Ve",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/what ve_diljit.png",
                audio: "songs/singles/what ve_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//62
            {
                title: "Hass Hass      ",
                artist: "Sia,Diljit Dosanjh     ",
                lyrics: "Hass Hass",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/hass hass_diljit.png",
                audio: "songs/singles/hass hass_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//63
            {
                title: "Patiala Peg      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Patiala Peg",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/patiala peg_diljit.png",
                audio: "songs/singles/patiala peg_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//64
            {
                title: "Mombattiye      ",
                artist: "Diljit Dosanjh     ",
                lyrics: "Mombattiye",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/mombattiye_diljit.png",
                audio: "songs/singles/mombattiye_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            },//64

            {
                title: "Jo Tum Mere Ho      ",
                artist: "Anuv Jain",
                lyrics: "Jo Tum Mere Ho",
                artistPhoto: "covers/Anuv Jain.png",
                cover: "covers/track1.jpg",
                audio: "songs/singles/jo tum mere ho.mp3",
                searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"

            },//song1

            {
                title: "Fly Karke      ",
                artist: "SABBA, Jasmeen",
                lyrics: "Fly Karke",
                artistPhoto: "covers/Sabba.png",
                cover: "covers/fly karke_sabba.png",
                audio: "https://tinyurl.com/fly-karke",
                searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"

            },//song2

            //Arjan Dhillon-Glorious and more
            {
                title: "Youth Flow      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Youth Flow",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/youth flow.mp3",
                searchString: "arjan songs arjan jawani song arjan"
            },//song4
            {
                title: "Glorious      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Glorious",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/glorious.mp3",
                searchString: "arjan songs glorious glowrious glorius gloris"
            },//song5
            {
                title: "Maavan      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Maavan",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/maavan.mp3",
                searchString: "arjan songs mava maanvan mava maava maa maa song arjan"
            },//song6
            {
                title: "Back To Sikhi      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Back To Sikhi",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/back to sikhi.mp3",
                searchString: "arjan songs pagg back to siki sikhi sikki"
            },//song7
            {
                title: "Biography      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Biography",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/biography.mp3",
                searchString: "arjan songs bigraphy bigrafi biographi "
            },//song8
            {
                title: "Tyar      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Tyar",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/Chobbar.jpg",
                audio: "songs/singles/tyar.mp3",
                searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"
            },//song9

            {
                title: "Heer      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Heer",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/heer_arjan dhillon.png",
                audio: "songs/singles/heer_arjan dhillon.mp3",
                searchString: "arjan songs"
            },//song9
            {
                title: "Punjab Intro      ",
                artist: "Arjan Dhillon    ",
                lyrics: "Punjab Intro",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/punjab intro_arjan dhillon.png",
                audio: "songs/singles/punjab intro_arjan dhillon.mp3",
                searchString: "arjan songs"
            },//song9



            //Dhanda
            {
                title: "Up To You      ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "Up To You",
                artistPhoto: "covers/Dhanda Nyoliwala.png",
                cover: "covers/up to you.jpg",
                audio: "songs/singles/up to you.mp3",
                searchString: "Victer"
            },//song10
            {
                title: "Russian Bandana      ",
                artist: "Dhanda Nyoliwala   ",
                lyrics: "Russian Bandana",
                artistPhoto: "covers/Dhanda Nyoliwala.png",
                cover: "covers/russian bandana.jpg",
                audio: "songs/singles/russian bandana.mp3",
                searchString: "Victer"
            },//song11

            {
                title: "Ishq      ",
                artist: "Faheem Abdullah,Rauhan Malik  ",
                lyrics: "Ishq",
                cover: "covers/ishq.jpg",
                audio: "songs/singles/ishq.mp3",
                searchString: "Victer"
            },//song12

            //The Beatles-Rubber Soul
            {
                title: "If I Needed Someone      ",
                artist: "The Beatles    ",
                lyrics: "If I Needed Someone",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/if i needed someone.mp3",
                searchString: "Victer"
            },//13
            {
                title: "Norwegian Wood      ",
                artist: "The Beatles    ",
                lyrics: "Norwegian Wood",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/norwegian wood.mp3",
                searchString: "Victer"
            },//14
            {
                title: "You Won't See Me      ",
                artist: "The Beatles    ",
                lyrics: "You Won't See Me",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/you won't see me.mp3",
                searchString: "Victer"
            },//15
            {
                title: "Think For Yourself      ",
                artist: "The Beatles    ",
                lyrics: "Think For Yourself",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/think for yourself.mp3",
                searchString: "Victer"
            },//16
            {
                title: "The Word      ",
                artist: "The Beatles    ",
                lyrics: "The Word",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/the word.mp3",
                searchString: "Victer"
            },//17
            {
                title: "Michelle      ",
                artist: "The Beatles    ",
                lyrics: "Michelle",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/michelle.mp3",
                searchString: "Victer"
            },//18
            {
                title: "Drive My Car      ",
                artist: "The Beatles    ",
                lyrics: "Drive My Car",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/drive my car.mp3",
                searchString: "Victer"
            },//19
            {
                title: "Girl      ",
                artist: "The Beatles    ",
                lyrics: "Girl",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/girl.mp3",
                searchString: "Victer"
            },//20
            {
                title: "I'm Looking Through You",
                lyrics: "I'm Looking Through You",
                artistPhoto: "covers/The Beatles.png      ",
                artist: "The Beatles    ",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/i'm looking through you.mp3",
                searchString: "Victer"
            },//21
            {
                title: "In My Life      ",
                artist: "The Beatles    ",
                lyrics: "In My Life",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/In My Life.mp3",
                searchString: "Victer"
            },//22
            {
                title: "Wait      ",
                artist: "The Beatles    ",
                lyrics: "Wait",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/wait.mp3",
                searchString: "Victer"
            },//23
            {
                title: "Run For Your Life      ",
                artist: "The Beatles    ",
                lyrics: "Run For Your Life",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/run for your life.mp3",
                searchString: "Victer"
            },//24
            {
                title: "Nowhere Man      ",
                artist: "The Beatles    ",
                lyrics: "Nowhere Man",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/nowhere man.mp3",
                searchString: "Victer"
            },//25
            {
                title: "What Goes On      ",
                artist: "The Beatles    ",
                lyrics: "What Goes On",
                artistPhoto: "covers/The Beatles.png",
                cover: "covers/rubber soul.jpg",
                audio: "songs/singles/what goes on.mp3",
                searchString: "Victer"
            },//26



            //Karan Aujla
            {
                title: "Softly      ",
                artist: "Karan Aujla   ",
                lyrics: "Softly",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/softly_karan.png",
                audio: "songs/singles/softly_karan.mp3",
                searchString: "Victer"
            },//65
            {
                title: "On Top      ",
                artist: "Karan Aujla   ",
                lyrics: "On Top",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/on top_karan.png",
                audio: "songs/singles/on top_karan.mp3",
                searchString: "Victer"
            },//66
            {
                title: "WYTB      ",
                artist: "Karan Aujla   ",
                lyrics: "WYTB",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/wytb_karan.png",
                audio: "songs/singles/wytb_karan.mp3",
                searchString: "Victer"
            },//67
            {
                title: "52 Bars      ",
                artist: "Karan Aujla   ",
                lyrics: "52 Bars",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/52 bars_karan.png",
                audio: "songs/singles/52 bars_karan.mp3",
                searchString: "Victer"
            },//68
            {
                title: "Jee Ni Lagda      ",
                artist: "Karan Aujla   ",
                lyrics: "Jee Ni Lagda",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/jee ni lagda_karan.png",
                audio: "songs/singles/jee ni lagda_karan.mp3",
                searchString: "Victer"
            },//69
            {
                title: "Player      ",
                artist: "Karan Aujla, Badshah",
                lyrics: "Player",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/player_karan.png",
                audio: "songs/singles/player_karan.mp3"
            },//70
            {
                title: "Chauffeur      ",
                artist: " Diljit Dosanjh     ",
                lyrics: "Chauffeur",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/chauffeur_diljit.png",
                audio: "songs/singles/chauffeur_diljjt.mp3",
                searchString: "Victer"
            },//71
            {
                title: "White Brown Black      ",
                artist: "Karan Aujla, Avvy Sra",
                lyrics: "White Brown Black",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/white brown black_karan_avvy.png",
                audio: "songs/singles/white brown black_karan_avvy.mp3",
                searchString: "Victer"
            },//72
            {
                title: "Tauba Tauba      ",
                artist: "Karan Aujla   ",
                lyrics: "Tauba Tauba",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/tauba tauba_karan.png",
                audio: "songs/singles/tauba tauba_karan.mp3",
                searchString: "Victer"
            },//73
            {
                title: "Chitta Kurta      ",
                artist: "Karan Aujla   ",
                lyrics: "Chitta Kurta",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/chitta kurta_karan.png",
                audio: "songs/singles/chitta kurta_karan.mp3",
                searchString: "Victer"
            },//74
            {
                title: "Mexico      ",
                artist: "Karan Aujla   ",
                lyrics: "Mexico",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/mexico_karan.png",
                audio: "songs/singles/mexico_karan.mp3",
                searchString: "Victer"
            },//75
            {
                title: "God Damn      ",
                artist: "Karan Aujla   ",
                lyrics: "God Damn",
                artistPhoto: "covers/Karan Aujla.png",
                cover: "covers/god damn_karan.png",
                audio: "songs/singles/god damn_karan.mp3",
                searchString: "Victer"
            },//76


            //mislenous songs
            {
                title: "Victory Anthem      ",
                artist: "Khushi-Saini  ",
                lyrics: "Victory Anthem",
                cover: "covers/victory anthem.jpg",
                audio: "songs/singles/victory anthem.mp3",
                searchString: "Victer"
            },//27
            {
                title: "Tu Hai Kaha      ",
                artist: "A-U-R",
                lyrics: "Tu Hai Kaha",
                cover: "covers/tu hai kaha.jpg",
                audio: "songs/singles/tu hai kaha.mp3",
                searchString: "Victer"
            },//28
            {
                title: "Sweater      ",
                artist: "Preet Hundal ",
                lyrics: "Sweater",
                cover: "covers/sweater.jpg",
                audio: "songs/singles/sweater.mp3",
                searchString: "Victer"
            },//29
            {
                title: "Zindagi      ",
                artist: "Sabba  ",
                lyrics: "Zindagi",
                artistPhoto: "covers/Sabba.png",
                cover: "covers/zindagi sabba.jpg",
                audio: "songs/singles/zindagi sabba.mp3",
                searchString: "sabba k gane"
            },//30
            {
                title: "Medal      ",
                artist: "Chandra Brar  ",
                lyrics: "Medal",
                cover: "covers/medal.jpg",
                audio: "songs/singles/medal.mp3",
                searchString: "Victer"
            },//31
            {
                title: "Ishq hoya      ",
                artist: "Jyoti Nooran , Arjit Srivastav  ",
                lyrics: "Ishq hoya",
                cover: "covers/ishq hoya.jpg",
                audio: "songs/singles/ishq hoya.mp3",
                searchString: "Victer"
            },//32
            {
                title: "Illegal      ",
                artist: "Dhanda Nyoliwala   ",
                lyrics: "Illegal",
                artistPhoto: "covers/Dhanda Nyoliwala.png",
                cover: "covers/illegal dhanda.jpg",
                audio: "songs/singles/illegal dhanda.mp3",
                searchString: "Victer"
            },//33
            {
                title: "Maada Time      ",
                artist: "Sabba  ",
                lyrics: "Maada Time",
                artistPhoto: "covers/Sabba.png",
                cover: "covers/maada time_sabba.png",
                audio: "songs/singles/maada time.mp3",
                searchString: "sabba k gane"
            },//34
            {
                title: "Dil Tu Jaan Tu      ",
                artist: "Guranzar  ",
                lyrics: "Dil Tu Jaan Tu",
                cover: "covers/dil tu jaan tu.jpg",
                audio: "songs/singles/dil tu jaan tu.mp3",
                searchString: "Victer"
            },//35
            {
                title: "Victory Anthem      ",
                artist: "Khushi-Saini  ",
                lyrics: "Victory Anthem",
                cover: "covers/victory anthem.jpg",
                audio: "songs/singles/victory anthem.mp3",
                searchString: "Victer"
            },//36
            {
                title: "Tareyan Di Loh      ",
                artist: "Harsh Bilga  ",
                lyrics: "Tareyan Di Loh",
                cover: "covers/tareyan di loh.jpg",
                audio: "songs/singles/tareyan di loh.mp3",
                searchString: "Victer"
            },//37
            {
                title: "Khidki      ",
                artist: "Rachit Shrivatav  ",
                lyrics: "Khidki",
                cover: "covers/khidki.webp",
                audio: "songs/singles/khidki.mp3",
                searchString: "Victer"
            },//38
            {
                title: "Long Time No See      ",
                artist: "A-U-R  ",
                lyrics: "Long Time No See",
                cover: "covers/long time no see.jpg",
                audio: "songs/singles/long time no see.mp3",
                searchString: "Victer"
            },//39
            {
                title: "That Girl      ",
                artist: "Amrinder Gill  ",
                lyrics: "That Girl",
                artistPhoto: "covers/Amrinder Gill.png",
                cover: "covers/that girl_amrinder gill.png",
                audio: "songs/singles/that girl_amrinder gill.mp3",
                searchString: "Victer"
            },//39
            {
                title: "Khabbi Seat      ",
                artist: "Ammy Virk  ",
                lyrics: "Khabbi Seat",
                cover: "covers/khabbi seat_ammy virk.png",
                audio: "songs/singles/khabbi seat_ammy virk.mp3",
                searchString: "Victer"
            },//39
            {
                title: "Ikk Number      ",
                artist: "Gurnam Bhullar  ",
                lyrics: "Ikk Number",
                cover: "covers/ik number_gurnam bhullar.png",
                audio: "songs/singles/ik number_gurnam bhullar.mp3",
                searchString: "Victer"
            },//39
            {
                title: "Filter      ",
                artist: "Gulab Sidhu  ",
                lyrics: "Filter",
                cover: "covers/filter_gulab sidhu.png",
                audio: "songs/singles/filter_gulab sidhu.mp3",
                searchString: "Victer"
            },//39
            {
                title: "Patti Ton Patiala      ",
                artist: "Harkirat Sangha   ",
                lyrics: "Patti Ton Patiala",
                cover: "covers/patti to patiala_harkirat sangha.png",
                audio: "songs/singles/patti to patiala_harkirat sangha.mp3",
                searchString: "Victer"
            },//39

            //Hustinder
            {
                title: "Ik Mutiyaar Hundi Si       ",
                artist: "Hustinder     ",
                lyrics: "Ik Mutiyaar Hundi Si",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/ik mutiyar hundi si_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Hundi Si Gareebi      ",
                artist: "Hustinder, Black   ",
                lyrics: "Hundi Si Gareebi",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/hundi si gareebi_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Bhuleya Ki Ae      ",
                artist: "Hustinder     ",
                lyrics: "Bhuleya Ki Ae",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/bhuleya ki ae_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Dollar Wargiye       ",
                artist: "Hustinder     ",
                lyrics: "Dollar Wargiye",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/dollar wargiye_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Dullda Glass      ",
                artist: "Hustinder     ",
                lyrics: "Dullda Glass",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/dullda glass_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Gal Koun Karda       ",
                artist: "Hustinder     ",
                lyrics: "Gal Koun Karda",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/sadiyan gallan 2_hustinder.png",
                audio: "songs/singles/gal koun karda_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Gaza Patti       ",
                artist: "Hustinder     ",
                lyrics: "Gaza Patti",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/gaza patti_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Gumnaam Pyaar       ",
                artist: "Hustinder     ",
                lyrics: "Gumnaam Pyaar",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers//sadiyan gallan 2_hustinder.png",
                audio: "songs/singles/gumnaam pyaar_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Hasde Hi Rehndeya       ",
                artist: "Hustinder     ",
                lyrics: "Hasde Hi Rehndeya",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers//sadiyan gallan 2_hustinder.png",
                audio: "songs/singles/hasde hi rehndeya_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Hathan Utte Duniya       ",
                artist: "Hustinder     ",
                lyrics: "Hathan Utte Duniya",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/hathan utte duniya_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Hopes       ",
                artist: "Hustinder     ",
                lyrics: "Hopes",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/hopes_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Jethi Dhee       ",
                artist: "Hustinder     ",
                lyrics: "Jethi Dhee",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/jethi dhee_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Kharcha Kardange       ",
                artist: "Hustinder     ",
                lyrics: "Kharcha Kardange",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/kharcha kardange_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Laag Daat       ",
                artist: "Hustinder     ",
                lyrics: "Laag Daat",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/laag daat_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Maa Kehndi Hundi Si       ",
                artist: "Hustinder     ",
                lyrics: "Maa Kehndi Hundi Si",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers//sadiyan gallan 2_hustinder.png",
                audio: "songs/singles/maa kehndi hundi si_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Man Ton Lehgi       ",
                artist: "Hustinder     ",
                lyrics: "Man Ton Lehgi",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/sadiyan gallan_hustinder.png",
                audio: "songs/singles/man ton lehgi_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Mittran De Circle       ",
                artist: "Hustinder     ",
                lyrics: "Mittran De Circle",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/mittran de circle_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Nachdi Ton       ",
                artist: "Hustinder     ",
                lyrics: "Nachdi Ton",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/nachdi ton.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Paasport Size Tasveer       ",
                artist: "Hustinder     ",
                lyrics: "Paasport Size Tasveer",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/passport size tasveer_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Praandi       ",
                artist: "Hustinder     ",
                lyrics: "Praandi",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/praandi_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Pyaar Hoya       ",
                artist: "Hustinder     ",
                lyrics: "Pyaar Hoya",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers//sadiyan gallan 2_hustinder.png",
                audio: "songs/singles/pyaar hoya_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Rabb Di Aulad       ",
                artist: "Hustinder     ",
                lyrics: "Rabb Di Aulad",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/rabb di aulad_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Raonak       ",
                artist: "Hustinder     ",
                lyrics: "Raonak",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/raonak_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Rullde Firde Aan       ",
                artist: "Hustinder     ",
                lyrics: "Rullde Firde Aan",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/rullde firde aan_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Saade Warge       ",
                artist: "Hustinder     ",
                lyrics: "Saade Warge",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/saadiyan gallan 3_hustinder.png",
                audio: "songs/singles/saade warge_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Surga Nu Rah       ",
                artist: "Hustinder     ",
                lyrics: "Surga Nu Rah",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/surga nu rah_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Tera Mera Nata       ",
                artist: "Hustinder     ",
                lyrics: "Tera Mera Nata",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/tera mera nata_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Teri Deed       ",
                artist: "Hustinder     ",
                lyrics: "Teri Deed",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/teri deed_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Tu Takkri       ",
                artist: "Hustinder     ",
                lyrics: "Tu Takkri",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/tu takkri_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Ucheyan Gharan Di Jaaiye       ",
                artist: "Hustinder     ",
                lyrics: "Ucheyan Gharan Di Jaaiye",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/sadiyan gallan_hustinder.png",
                audio: "ucheyan gharan diye jaaiye.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Velly Yaar       ",
                artist: "Hustinder     ",
                lyrics: "Velly Yaar",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/mahol_hustinder.png",
                audio: "songs/singles/velly yaar_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Watching You       ",
                artist: "Hustinder     ",
                lyrics: "Watching You",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/track3.jpg",
                audio: "songs/singles/watching you_hustinder.mp3",
                searchString: "Victer"
            },//song3
            {
                title: "Yari Tod Layi       ",
                artist: "Hustinder     ",
                lyrics: "Yari Tod Layi",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/sadiyan gallan_hustinder.png",
                audio: "songs/singles/yari tod layi_hustinder.mp3",
                searchString: "Victer"
            },//song3\



            //RP Singh
            {
                title: "Sexy       ",
                artist: "RP Singh    ",
                lyrics: "Sexy",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/sexy_rp singh.png",
                audio: "songs/singles/sexy_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Pencil       ",
                artist: "RP Singh    ",
                lyrics: "Pencil",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/pencil_rp singh.png",
                audio: "songs/singles/pencil_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Sheesha       ",
                artist: "RP Singh    ",
                lyrics: "Sheesha",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/sheesha_rp singh.png",
                audio: "songs/singles/sheesha_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Rap God       ",
                artist: "RP Singh    ",
                lyrics: "Rap God",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/rapgod_rp singh.png",
                audio: "songs/singles/rapgod_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Mcoca       ",
                artist: "RP Singh    ",
                lyrics: "Mcoca",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/mcoca_rp singh.png",
                audio: "songs/singles/mcoca_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Banger       ",
                artist: "RP Singh    ",
                lyrics: "Banger",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/banger_rp singh.png",
                audio: "songs/singles/banger_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Bliss       ",
                artist: "RP Singh    ",
                lyrics: "Bliss",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/bliss_rp singh.png",
                audio: "songs/singles/bliss_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Azad Flow       ",
                artist: "RP Singh    ",
                lyrics: "Azad Flow ",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/azad flow_rp singh.png",
                audio: "songs/singles/azadFlow_rp singh.mp3",
                searchString: "Victer"
            },//song3\

            {
                title: "Power       ",
                artist: "RP Singh    ",
                lyrics: "Power",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/power_rp singh.png",
                audio: "songs/singles/power_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Meeh       ",
                artist: "RP Singh    ",
                lyrics: "Meeh",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/meeh_rp singh.png",
                audio: "songs/singles/meeh_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Chehre       ",
                artist: "RP Singh    ",
                lyrics: "Chehre",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/chehre_rp singh.png",
                audio: "songs/singles/chehre_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "3 AM       ",
                artist: "RP Singh    ",
                lyrics: "3 AM",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/3 am_rp singh.png",
                audio: "songs/singles/3 am_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Aadhi Si Raat       ",
                artist: "RP Singh    ",
                lyrics: "Aadhi Si Raat",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/aadhi si raat_rp singh.png",
                audio: "songs/singles/aadhi si raat_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Jigre       ",
                artist: "RP Singh    ",
                lyrics: "Jigre",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/jigre_rp singh.png",
                audio: "songs/singles/jigre_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Look Book       ",
                artist: "RP Singh    ",
                lyrics: "Look Book",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/look book_rp singh.png",
                audio: "songs/singles/look book_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Maal       ",
                artist: "RP Singh    ",
                lyrics: "Maal",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/maal_rp singh.png",
                audio: "songs/singles/maal_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "No Lve       ",
                artist: "RP Singh    ",
                lyrics: "  ",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/no love_rp singh.png",
                audio: "songs/singles/no love_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Pataka       ",
                artist: "RP Singh    ",
                lyrics: "Pataka",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/pataka_rp singh.png",
                audio: "songs/singles/pataka_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Sapne       ",
                artist: "RP Singh    ",
                lyrics: "  ",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/sapne_rp singh.png",
                audio: "songs/singles/sapne_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Tehalka       ",
                artist: "RP Singh    ",
                lyrics: "Tehalka",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/tehalka_rp singh.png",
                audio: "songs/singles/tehalka_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Stop RP       ",
                artist: "RP Singh    ",
                lyrics: "Stop RP",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/stop rp_rp singh.png",
                audio: "songs/singles/stop rp_rp singh.mp3",
                searchString: "Victer"
            },//song3

            {
                title: "Toxic       ",
                artist: "RP Singh    ",
                lyrics: "Toxic",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/toxic_rp singh.png",
                audio: "songs/singles/toxic_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Shiva       ",
                artist: "RP Singh    ",
                lyrics: "Shiva",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/shiva_rp singh.png",
                audio: "songs/singles/shiva_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Sneeze       ",
                artist: "RP Singh    ",
                lyrics: "Sneeze",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/sneeze_rp singh.png",
                audio: "songs/singles/sneeze_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Sarpanchi       ",
                artist: "RP Singh    ",
                lyrics: "Sarpanchi",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/sarpanchi_rp singh.png",
                audio: "songs/singles/sarpanchi_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "If You Know You Know       ",
                artist: "RP Singh    ",
                lyrics: "If You Know You Know",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/if you know you know_rp singh.png",
                audio: "songs/singles/if you know you know_rp singh.mp3",
                searchString: "Victer"
            },//song3\

            {
                title: "7 Birth       ",
                artist: "RP Singh    ",
                lyrics: "7 Birth",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/7 birth_rp singh.png",
                audio: "songs/singles/7 birth_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "1857       ",
                artist: "RP Singh    ",
                lyrics: "1857",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/1857_rp singh.png",
                audio: "songs/singles/1857_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Approach       ",
                artist: "RP Singh    ",
                lyrics: "Approach",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/approach_rp singh.png",
                audio: "songs/singles/approach_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "BFF       ",
                artist: "RP Singh    ",
                lyrics: "BFF",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/bff_rp singh.png",
                audio: "songs/singles/bff_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Do Cheez       ",
                artist: "RP Singh    ",
                lyrics: "Do Cheez",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/do cheez_rp singh.png",
                audio: "songs/singles/do cheez_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Famous       ",
                artist: "RP Singh    ",
                lyrics: "Famous",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/famous_rp singh.png",
                audio: "songs/singles/famous_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Govinda       ",
                artist: "RP Singh    ",
                lyrics: "Govinda",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/govinda_rp singh.png",
                audio: "songs/singles/govinda_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Jahaaj       ",
                artist: "RP Singh    ",
                lyrics: "Jahaaj",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/jahaaj_rp singh.png",
                audio: "songs/singles/jahaaj_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "MI AMOR       ",
                artist: "RP Singh    ",
                lyrics: "MI AMOR",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/mi amor_rp singh.png",
                audio: "songs/singles/mi amor_rp singh.mp3",
                searchString: "Victer"
            },//song3\
            {
                title: "Victor       ",
                artist: "RP Singh    ",
                lyrics: "Victor",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/victor_rp singh.png",
                audio: "songs/singles/victor_rp singh.mp3",
                searchString: "Victer"
            },//song3\
        ]
    },
    {
        id: 2,

        title: "Arijit Singh",
        artist: "Arijit Singh",
        cover: "covers/arijit singh.jpg",
        songs: [

            //Arijit Singh

            {
                title: "Enna Sona      ",
                artist: "Arijit Singh    ",
                lyrics: "Enna Sona ",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/enna sona.jpg",
                audio: "https://www.dropbox.com/scl/fi/mpnd1y8rfmbxudrp54sx4/Enna_Sona_Video_OK_Jaanu_Arijit_Singh_Shraddha_Kapoor_Aditya_Roy-0.mp3?rlkey=inylmp2ylo4pcfl4ql05ow8r9&st=n044qy9q&dl=1",
                searchString: "enna sona "
            },
            {
                title: "Tenu Sang Rakhna      ",
                artist: "Arijit Singh    ",
                lyrics: "Tenu Sang Rakhna ",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/tenu sang rakhna.jpg",
                audio: "https://www.dropbox.com/scl/fi/9p4bov9ek5bnlwyvhetyr/Tenu_Sang_Rakhna_-_Jigra___Alia_Bhatt___Vedang_Raina___Arijit_Singh___Achint-_Anumita___Varun-0.mp3?rlkey=ozqr0zhwddjhxy3i3oxtkehab&st=pmeg2orh&dl=1",
                searchString: " "
            },
            {
                title: "O Bedardeya      ",
                artist: "Arijit Singh    ",
                lyrics: "O Bedardeya",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/o bedardeya.jpg",
                audio: "https://www.dropbox.com/scl/fi/s0bat77w3p6z1wknigz87/O_Bedardeya__Full_Video__Tu_Jhoothi_Main_Makkaar___Ranbir-_Shraddha___Pritam-Arijit_Singh-_Amitabh_B-0.mp3?rlkey=5ksankq5qjl6j04ab5732lpfu&st=p65bndiw&dl=1",
                searchString: "O Bedardeya"
            },
            {
                title: "Kalank      ",
                artist: "Arijit Singh    ",
                lyrics: "Kalank",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/kalank.jpg",
                audio: "https://www.dropbox.com/scl/fi/kqy7bi5qzq4snn7b4cx9o/Kalank__Duet_-0.mp3?rlkey=0wo653gbxtoow03921szqlg9w&st=tsnsxi1b&dl=1",
                searchString: "kalank "
            },
            {
                title: "Kabhi Jo Badal      ",
                artist: "Arijit Singh    ",
                lyrics: "Kabhi Jo Badal ",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/kabhi jo badal.jpg",
                audio: "https://www.dropbox.com/scl/fi/xibuxatxs1pziv8v7g1sk/Kabhi_Jo_Baadal_Barse__From__Jackpot_-0.mp3?rlkey=38aqpgwumsu3s7qdhalg0shkk&st=daw57id4&dl=1",
                searchString: " kbhi jo badal"
            },
            {
                title: "Khairiyat     ",
                artist: "Arijit Singh    ",
                lyrics: "Khairiyat",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/khairiyat.jpg",
                audio: "https://www.dropbox.com/scl/fi/n4y7gz2kvpqt6rknd0may/Khairiyat-0.mp3?rlkey=xew77jka5bfznonme3qfcqq64&st=ig9z07jb&dl=1",
                searchString: "khairiyat "
            },
            {
                title: "O Maahi     ",
                artist: "Arijit Singh    ",
                lyrics: "O Maahi",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/o maahi.jpg",
                audio: "https://www.dropbox.com/scl/fi/knzi2qafyiorjeltoz90q/O_Maahi-0.mp3?rlkey=4q47xmwoa9erj31b9fnr2h177&st=37wptfma&dl=1",
                searchString: " o maahi"
            },
            {
                title: "Phir Bhi Tumko Chahunga     ",
                artist: "Arijit Singh    ",
                lyrics: "Phir Bhi Tumko Chahunga",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/phir bhi tumko chahunga.jpg",
                audio: "https://www.dropbox.com/scl/fi/bn5bwirdfpftkn8xpflej/Phir_Bhi_Tumko_Chaahunga-0.mp3?rlkey=ld14cxqj5jtf9o0y571coolcl&st=0unfistb&dl=1",
                searchString: "Phir Bhi Tumko Chahunga "
            },
            {
                title: "Sajni     ",
                artist: "Arijit Singh    ",
                lyrics: "Sajni",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/sajni.jpg",
                audio: "https://www.dropbox.com/scl/fi/n94beex40mkgrwtbg0gky/Sajni-0.mp3?rlkey=x7bi5k3mdsae343183jmat0ak&st=q4p2s8d4&dl=1",
                searchString: " sajni"
            },
            {
                title: "Soch Na Sake     ",
                artist: "Arijit Singh    ",
                lyrics: "Soch Na Sake",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/soch na sake.jpg",
                audio: "https://www.dropbox.com/scl/fi/isvlefxjmeqd0jk0zf6vr/Soch_Na_Sake-0.mp3?rlkey=h5khnzcnlct0yom68mb70nhpm&st=ji1fyazj&dl=1",
                searchString: "soch na sake "
            },
            {
                title: "Tum Ho     ",
                artist: "Arijit Singh    ",
                lyrics: "Tum Ho",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/tum ho.jpg",
                audio: "https://www.dropbox.com/scl/fi/nvlg2jz00def3kig5190p/Tum_Ho-0.mp3?rlkey=p2apj44pkhg3wqg5l7d2sm79q&st=pjxnmcbf&dl=1",
                searchString: "tum ho "
            },
            {
                title: "Ve Kamleya     ",
                artist: "Arijit Singh    ",
                lyrics: "Ve Kamleya",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/ve kamleya.jpg",
                audio: "https://www.dropbox.com/scl/fi/nabhbquo4cafyiyz20c7w/Ve_Kamleya_-_Lofi_Mix-0.mp3?rlkey=anjady9sonuxtfmx7xo7rout9&st=b8rlfvne&dl=1",
                searchString: "Ve Kamleya "
            },
            {
                title: "Zaalima     ",
                artist: "Arijit Singh    ",
                lyrics: "Zaalima",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/zaalima.jpg",
                audio: "https://www.dropbox.com/scl/fi/w57kjgfoyrics6vqa8rs1/Zaalima-0.mp3?rlkey=0pk3l8jltqhvx7knmlaupxknb&st=vmvl6kr3&dl=1",
                searchString: "Zaalima "
            },
            {
                title: "Bolna     ",
                artist: "Arijit Singh    ",
                lyrics: "Bolna",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/bolna.jpg",
                audio: "https://www.dropbox.com/scl/fi/7k7x4odjcgoss5wof18ub/Bolna-0.mp3?rlkey=00lt7r3jvb8176dwoizmi1cza&st=wdl3c9la&dl=1",
                searchString: "Bolna "
            },
            {
                title: "Citylights     ",
                artist: "Arijit Singh    ",
                lyrics: "Citylights",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/citylights.jpg",
                audio: "https://www.dropbox.com/scl/fi/gu0egqiqilejj19y9ykof/Citylights___Arijit_Singh___Rajkummar_Rao-_Patralekha___Jeet_...-0.mp3?rlkey=szx5eylwn3h6u2l3flmf4fxeh&st=kqdylhsi&dl=1",
                searchString: "Citylights "
            },
            {
                title: "Hamari Adhuri Kahani    ",
                artist: "Arijit Singh    ",
                lyrics: "Hamari Adhuri Kahani",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/hamari adhuri kahani.jpg",
                audio: "https://www.dropbox.com/scl/fi/v71jf1xikn9843nl5r0y4/Hamari_Adhuri_Kahani__Title_Track__-From__Hamari_Adhuri_Kahani_-0.mp3?rlkey=lkoxqp8tl7a3lyw2hxqzjkamn&st=1h4kuq11&dl=1",
                searchString: "Hamari Adhuri Kahani "
            },
            {
                title: "Hawayein     ",
                artist: "Arijit Singh    ",
                lyrics: "Hawayein     ",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/hawayein.jpg",
                audio: "https://www.dropbox.com/scl/fi/xxdblpynje7bsxxhvf16w/Hawayein-0.mp3?rlkey=0xvk8i8wiljijheqr91pqx555&st=hgb4vyeo&dl=1",
                searchString: "Hawayein     ",
            },
            {
                title: "Humdard     ",
                artist: "Arijit Singh    ",
                lyrics: "Humdard",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/humdard.png",
                audio: "https://www.dropbox.com/scl/fi/86lghm1v7xvpe7ebh01f2/Humdard-0.mp3?rlkey=v7ssg5dhai69ysbfk4liswrrb&st=6lczsh1v&dl=1",
                searchString: "Humdard "
            },
            {
                title: "Ik Vaari Aa    ",
                artist: "Arijit Singh    ",
                lyrics: "Ik Vaari Aa",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/ik vaari aa.jpg",
                audio: "https://www.dropbox.com/scl/fi/yp131x8cnp5012pdbc5nw/Ik_Vaari_Aa__From__Raabta__-0.mp3?rlkey=bet55lz8g3621kw4kwqtk67or&st=iszc78p5&dl=1",
                searchString: "Ik Vaari Aa"
            },
            {
                title: "Jalebi     ",
                artist: "Arijit Singh    ",
                lyrics: "Jalebi",
                artistPhoto: "covers/Arijit Singh.jpg",
                cover: "covers/singles/arijit/jalebi.jpg",
                audio: "https://www.dropbox.com/scl/fi/ha0h17596cicx1ldylmkw/Jalebi_Arijit_Singh_Shreya_Ghoshal_Rhea___Varun_Javed_-_Mohsin-0.mp3?rlkey=rpjoqie8s2pa15ug925fmsbxf&st=kyvcvzhl&dl=1",
                searchString: "Jalebi "
            },//46
            {
                title: "Vida Karo        ",
                artist: "Arijit Singh,Diljjt",
                lyrics: "Vida Karo",
                artistPhoto: "covers/Diljit Dosanjh.png",
                cover: "covers/vida karo_diljit.png",
                audio: "songs/singles/vida karo_diljit.mp3",
                searchString: "diljit k gane diljit diljeet diljjt dil jit "
            }


        ]
    },
    {
        id: 3,

        title: "Death Of Slim Shady",
        artist: "Eminem",
        cover: "covers/albums/eminem/death of slim shady_album.png",
        songs: [

            //Eminem: Death Of Slim Shady
            {
                title: "Renaissance       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Renaissance",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/oyafsx63pu46wic19n1nn/01-Renaissance.mp3?rlkey=9sho0rbpprpwtya8h18cqtbfj&st=s00kkyxp&dl=1",
                searchString: "Renaissance renesance renesans Death Of Slim Shady"

            },
            {
                title: "Habits       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Habits",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/pa950z5u8wohn6oh8bhto/02-Habits-feat.-White-Gold.mp3?rlkey=ybsz6g4bnirvyfalgfy0zdvaj&st=dk8fvyu5&dl=1",
                searchString: "Habits Death Of Slim Shady"

            },
            {
                title: "Trouble       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Trouble",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/s9lapuqk2k64tah8lrrpw/03-Trouble.mp3?rlkey=4e4f1csibcxamgticm9ci2b4f&st=9vf4qts8&dl=1",
                searchString: "Trouble Death Of Slim Shady"

            },
            {
                title: "Evil       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Evil",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/cocnx9457ub2br9vjbred/05-Evil.mp3?rlkey=xw5koak24okkdxb5yjof8fnqs&st=ihzwcshs&dl=1",
                searchString: "Evil Death Of Slim Shady"

            },
            {
                title: "All You Got(skit)      ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "All You Got(skit)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/y8wniky2t9qjettwqzf4s/06-All-You-Got-skit.mp3?rlkey=kv6tmu0folpvxp1lp53tz4mud&st=10f9f784&dl=1",
                searchString: "All You Got Death Of Slim Shady"

            },
            {
                title: "Lucifer(feat. Sly Pyper)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Lucifer(feat. Sly Pyper)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/hogh6ut3qcjcv2yjmtfm6/07-Lucifer-feat.-Sly-Pyper.mp3?rlkey=l5d1cn1rszr0lg3fft1jj94iw&st=w6txf8hq&dl=1",
                searchString: "Lucifer(feat. Sly Pyper) Death Of Slim Shady"

            },
            {
                title: "Antichrist       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Antichrist",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/j7i2tvgfevs2q0log83ve/08-Antichrist.mp3?rlkey=d7t4l9m7qmuth13qr1qynwgsy&st=537cwdna&dl=1",
                searchString: "Antichrist Death Of Slim Shady"

            },
            {
                title: "Fuel(feat. JID)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Fuel(feat. JID)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/rm90d260z4ufgb95rnbu8/09-Fuel-feat.-JID.mp3?rlkey=ii8ktx8zrlgw2snuheimjir4a&st=ys5r650n&dl=1",
                searchString: "Fuel(feat. JID) Death Of Slim Shady"

            },
            {
                title: "Road Rage(feat. Dem Joints & Sly Pyper)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Road Rage(feat. Dem Joints & Sly Pyper)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/om3hteqqcihohvm6347jj/10-Road-Rage-feat.-Dem-Jointz-Sly-Pyper.mp3?rlkey=nhpdyxk4228k60wmyy4m4mskg&st=u93udva4&dl=1",
                searchString: "Road Rage(feat. Dem Joints & Sly Pyper) Death Of Slim Shady"

            },
            {
                title: "Houdini      ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Houdini",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/76ikbuteb254t5e0046mo/11-Houdini.mp3?rlkey=idxleamixuux204okbml6uphs&st=3xvgf5hs&dl=1",
                searchString: "Houdini Death Of Slim Shady"

            },
            {
                title: "Breaking News(skit)      ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Breaking News(skit)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/o6nb5wl81id9chwhtm6y6/12-Breaking-News-skit.mp3?rlkey=q5g8it5zay5whtm38yeztizn8&st=q9z810uw&dl=1",
                searchString: "Breaking News(skit) Death Of Slim Shady"

            },
            {
                title: "Head Honcho(feat. Ez Milli)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Head Honcho(feat. Ez Milli)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/7a9wgdyu36pp93styxgar/14-Head-Honcho-feat.-Ez-Mill.mp3?rlkey=9l0pfosg0424c32hcoiiwiom3&st=18b7o0pf&dl=1",
                searchString: "Head Honcho(feat. Ez Milli) Death Of Slim Shady"

            },
            {
                title: "Tenporary(feat. Skylar Grey)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Tenporary(feat. Skylar Grey)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/ukzhlv5diq8chxiclj03i/15-Temporary-feat.-Skylar-Grey.mp3?rlkey=8t51cf2e7vhli0lz5d5okwa4e&st=cdbp6w9k&dl=1",
                searchString: "Tenporary(feat. Skylar Grey) Death Of Slim Shady"

            },
            {
                title: "Bad One(feat. White Gold)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Bad One(feat. White Gold)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/6v56m2rxlro84afx5cwsb/16-Bad-One-feat.-White-Gold.mp3?rlkey=2jdxv6gk7ctmx9g8udijrysb8&st=rd0kbtru&dl=1",
                searchString: "Bad One(feat. White Gold) Death Of Slim Shady"

            },
            {
                title: "Tobey(feat. Big Sean & Baby Tron)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Tobey(feat. Big Sean & Baby Tron)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/6z9o6joa3l6rwg1cgqyzo/17-Tobey-feat.-Big-Sean-BabyTron.mp3?rlkey=c8ruy287tm1n3hfunqbiyqg4a&st=gx27xyx7&dl=1",
                searchString: "Tobey(feat. Big Sean & Baby Tron) Death Of Slim Shady"

            },
            {
                title: "Somebody Save Me(feat. Jelly Roll)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Somebody Save Me(feat. Jelly Roll)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/xr9jgdjqrd6jy75h2wt36/19-Somebody-Save-Me-feat.-Jelly-Roll.mp3?rlkey=dm5l9un58mdzkbk92ro7fxlei&st=1t1kb7d3&dl=1",
                searchString: "Somebody Save Me(feat. Jelly Roll) Death Of Slim Shady"

            },
            {
                title: "kyrie & Luka(feat. 2Chainz)       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "kyrie & Luka(feat. 2Chainz)",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/azuiq8sf7nowvt8r1hhcc/20-Kyrie-Luka-feat.-2-Chainz.mp3?rlkey=lgideb8tfyd6uo95e7eso63vp&st=dvfv5wgz&dl=1",
                searchString: "kyrie & Luka(feat. 2Chainz) Death Of Slim Shady"

            },
            {
                title: "Like My Shit       ",
                videoID: "",
                album: "Death Of Slim Shady",
                artist: "Eminem   ",
                lyrics: "Like My Shit",
                artistPhoto: "covers/artists/Eminem.png",
                cover: "covers/albums/eminem/death of slim shady_album.png",
                audio: "https://www.dropbox.com/scl/fi/mut9xot8dmcs5adcgvtut/21-Like-My-Shit.mp3?rlkey=gns4dqv36tubbii8dykxf9dls&st=tjnf5uvu&dl=1",
                searchString: "Like My Shit Death Of Slim Shady"

            }
        ]
    },


    {
        id: 4,
        title: "Bhadauria    ",
        artist: "Hustinder    ",
        cover: "covers/albums/hustinder/bhadauria_album.png",
        songs: [
            //The Beatles-Rubber Soul
            {
                title: "Fella's Forever      ",
                artist: "Hustinder    ",
                lyrics: "Fella's Forever",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/fellas forever.mp3",
                searchString: "fellas forever"
            },//13
            {
                title: "Queen's Gambit      ",
                artist: "Husinder    ",
                lyrics: "Queen's Gambit",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/queen s gambit.mp3",
                searchString: "queen's gambit"
            },//14
            {
                title: "Don't You Dare      ",
                artist: "Husinder    ",
                lyrics: "Don't You Dare",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/don t you dare.mp3",
                searchString: "don't you dare"
            },//15
            {
                title: "Mittra'n De Dere     ",
                artist: "Husinder    ",
                lyrics: "Mittra'n De Dere",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/mittran de dere.mp3",
                searchString: "mitran de dere"
            },//16
            {
                title: "Step Bhull Gyi      ",
                artist: "Husinder    ",
                lyrics: "Step Bhull Gyi",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/step bhull gyi.mp3",
                searchString: "step bhull gyi"
            },//17
            {
                title: "White Money     ",
                artist: "Husinder    ",
                lyrics: "White Money ",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/white money.mp3",
                searchString: "white money"
            },//18
            {
                title: "We Living It      ",
                artist: "Husinder    ",
                lyrics: "We Living It ",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/we living it.mp3",
                searchString: "we living it"
            },//19
            {
                title: "Kdo'n Nachana      ",
                artist: "Husinder    ",
                lyrics: "Kdo'n Nachana",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/kdon nachana.mp3",
                searchString: "kdo nachna"
            },//20
            {
                title: "Move Your Car ",
                artist: "Husinder    ",
                lyrics: "Move Your Car ",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/move your car.mp3",
                searchString: "move your car"
            },//21
            {
                title: "Bhadauria      ",
                artist: "Husinder    ",
                lyrics: "Bhadauria  ",
                artistPhoto: "covers/Hustinder.png",
                cover: "covers/albums/hustinder/bhadauria_album.png",
                audio: "songs/albums/bhadauria/bhadauria.mp3",
                searchString: "bhadauria"
            }
        ]
    },

    {
        id: 5,
        title: "Patandar    ",
        artist: "Arjan Dhillon    ",
        cover: "covers/albums/arjan/patandar_album.png",
        songs: [
            //Arjan Dhillon: Patandar
            {
                title: "2-2 Asle     ",
                artist: "Arjan Dhillon   ",
                lyrics: "2-2 Asle",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/2 2 Asle.mp3",
                searchString: "2 2 asle"
            },
            {
                title: "Big Flex    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Big Flex",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Big Flex.mp3",
                searchString: " big flex "
            },
            {
                title: "Brats   ",
                artist: "Arjan Dhillon   ",
                lyrics: "Brats",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Brats.mp3",
                searchString: " brats"
            },
            {
                title: "Greatest   ",
                artist: "Arjan Dhillon   ",
                lyrics: "Greatest ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Greatest.mp3",
                searchString: "greatest "
            },
            {
                title: "Hikka   ",
                artist: "Arjan Dhillon   ",
                lyrics: "Hikka ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Hikka.mp3",
                searchString: "Hikka "
            },
            {
                title: "Invoice    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Invoice ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Invoice.mp3",
                searchString: " invoice"
            },
            {
                title: "Kini Der Baad    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Kini Der Baad ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Kini Der Baad.mp3",
                searchString: "kini der baad "

            },
            {
                title: "Nain    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Nain ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Nain.mp3",
                searchString: " nain"

            },
            {
                title: "Never Ever    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Never Ever ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Never Ever.mp3",
                searchString: "Never Ever "

            },
            {
                title: "Paparazzi    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Paparazzi ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Paparazzi.mp3",
                searchString: "Paparazzi "

            },
            {
                title: "Sher-E-Panjab    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Sher E Panjab ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Sher E Panjab.mp3",
                searchString: "Sher E Panjab "

            },
            {
                title: "Style    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Style ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Style.mp3",
                searchString: "Style "

            },
            {
                title: "Too Late    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Too Late ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Too Late.mp3",
                searchString: "Too Late "

            },
            {
                title: "Tu Jdo Auna    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Tu Jdo Auna ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Tu Jdo Auna.mp3",
                searchString: "Tu Jdo Auna "

            },
            {
                title: "Youngsters    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Youngsters ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Youngsters.mp3",
                searchString: "Youngsters "

            },
            {
                title: "Zigana    ",
                artist: "Arjan Dhillon   ",
                lyrics: "Zigana ",
                artistPhoto: "covers/Arjan Dhillon.png",
                cover: "covers/albums/arjan/patandar_album.png",
                audio: "songs/albums/patandar/Zigana.mp3",
                searchString: "Zigana "

            }
        ]
    },
    {
        id: 6,
        title: "Sleep",
        artist: "Varius Artists",
        cover: "covers/sleep playlist.png",
        songs: [

        ]
    },
    {
        id: 7,

        title: "Rubber Soul",
        artist: "The Bealtes",
        cover: "covers/rubber soul.jpg",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ", audio: "songs/singles/if i needed someone.mp3", cover: "covers/rubber soul.jpg" },//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ", audio: "songs/singles/norwegian wood.mp3", cover: "covers/rubber soul.jpg" },//14
            { title: "You Won't See Me      ", artist: "The Beatles    ", audio: "songs/singles/you won't see me.mp3", cover: "covers/rubber soul.jpg" },//15
            { title: "Think For Yourself      ", artist: "The Beatles    ", audio: "songs/singles/think for yourself.mp3", cover: "covers/rubber soul.jpg" },//16
            { title: "The Word      ", artist: "The Beatles    ", audio: "songs/singles/the word.mp3", cover: "covers/rubber soul.jpg" },//17
            { title: "Michelle      ", artist: "The Beatles    ", audio: "songs/singles/michelle.mp3", cover: "covers/rubber soul.jpg" },//18
            { title: "Drive My Car      ", artist: "The Beatles    ", audio: "songs/singles/drive my car.mp3", cover: "covers/rubber soul.jpg" },//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/singles/girl.mp3", cover: "covers/rubber soul.jpg" },//20
            { title: "I'm Looking Through You", audio: "songs/singles/i'm looking through you.mp3", cover: "covers/rubber soul.jpg" },//21
            { title: "In My Life      ", artist: "The Beatles    ", audio: "songs/singles/In My Life.mp3", cover: "covers/rubber soul.jpg" },//22
            { title: "Wait      ", artist: "The Beatles    ", audio: "songs/singles/wait.mp3", cover: "covers/rubber soul.jpg" },//23
            { title: "Run For Your Life      ", artist: "The Beatles    ", audio: "songs/singles/run for your life.mp3", cover: "covers/rubber soul.jpg" },//24
            { title: "Nowhere Man      ", artist: "The Beatles    ", audio: "songs/singles/nowhere man.mp3", cover: "covers/rubber soul.jpg" },//25
            { title: "What Goes On      ", artist: "The Beatles    ", audio: "songs/singles/what goes on.mp3", cover: "covers/rubber soul.jpg" },//26

        ]
    },

    {
        id: 8,

        title: "Haryanvi Hits",
        artist: "Varius Artist",
        cover: "covers/Haryanvi Hits.png",
        songs: [


            {

                title: "Pistol  ",
                artist: "Sumit Patra ",
                lyrics: "Pistol ",
                artistPhoto: "covers/artists/Sumit Patra.jpg",
                cover: "covers/playlists/workout/Pistol.png",
                audio: "https://www.dropbox.com/scl/fi/xjweoe240glckgdf6o2sq/Pistol-128k.mp3?rlkey=2b0wc4pdzeuf88t5wpgznbpah&st=mvzi1791&dl=1",
                searchString: "Pistol "
            },
            {
                title: "Russian Bandana      ",
                artist: "Dhanda Nyoliwala",
                audio: "https://www.dropbox.com/scl/fi/evyww51ti5xn6vbi3d0ac/Dhanda_Nyoliwala_-_Russian_Bandana__Music_Video____Deepesh_Goyal___VYRL_Haryanvi-0.m4a?rlkey=60qquzcrl6jzuehe5vpoveyx9&st=c4jcxpob&dl=1",
                cover: "covers/russian bandana.jpg"
            },//13
            //song3\

            {
                title: "Illegal      ",
                artist: "Dhanda Nyoliwala",
                audio: "https://www.dropbox.com/scl/fi/xvj15vz0ixifc4fvplsf0/Illegal-128k.mp3?rlkey=ea2gbf36j036c2eroa6n12btx&st=xqwg7kbz&dl=1",
                cover: "covers/illegal dhanda.jpg"
            },//14
            {
                title: "Up To You      ",
                artist: "Dhanda Nyoliwala",
                audio: "https://www.dropbox.com/scl/fi/g93cv331z6om5kg4elizc/Up_To_U-128k.mp3?rlkey=bpkv9ohnkp64vqcwlpc0qgp6f&st=8fnv3123&dl=1",
                cover: "covers/up to you.jpg"
            },//15

            {
                title: "Shok Albadi       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Shok Albadi",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/shok albadi.png",
                audio: "https://www.dropbox.com/scl/fi/mvx368cvhq7ptr584ecg1/Shok_Albadi-0.m4a?rlkey=85lgyq26m7so4t6br0frt5766&st=gymyo7lu&dl=1",
                searchString: "Shok Albadi"
            },

            {
                title: "Mahashya Ji      ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Mahashya Ji",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/mahashya ji.png",
                audio: "https://www.dropbox.com/scl/fi/9dh5b2s7psp1u699yi132/Mhashya-Ji-KoshalWorld.Com-1.mp3?rlkey=r7lx3fpoq5xeg3krezphramwu&st=9nq90dc5&dl=1",
                searchString: "Mahashya Ji"
            },
            {
                title: "Aadhi Si Raat       ",
                artist: "RP Singh    ",
                lyrics: "Aadhi Si Raat",
                artistPhoto: "covers/RP Singh.png",
                cover: "covers/aadhi si raat_rp singh.png",
                audio: "songs/singles/aadhi si raat_rp singh.mp3",
                searchString: "Victer"
            },
            {
                title: "Khuni Ranjis      ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Khuni Ranjis",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/khuni ranjis.png",
                audio: "https://www.dropbox.com/scl/fi/a02qkhjwhx8fspi1i8582/Khuni-Ranjis-KoshalWorld.Com.mp3?rlkey=lfh9wblam8kgtpmjvkr7xnu83&st=cat36srb&dl=1",
                searchString: "Khuni Ranjis"
            },
            {
                title: "UP Aale kaam      ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Up Aale Kaam",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/up aale kaam.png",
                audio: "https://www.dropbox.com/scl/fi/rkpfcyfrbqswjgc81qx0p/UP-Ale-Kaam-KoshalWorld.Com.mp3?rlkey=mzb4ijplbodnflexs9lc4xn8b&st=o47spmmo&dl=1",
                searchString: "up aale kaam up aale kam up ale kam"
            },



            {
                title: "2 Numbari       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "2 Numbari",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/2 numbari.png",
                audio: "https://tinyurl.com/2-numbari",
                searchString: "2 Numbari"
            },//song3\
            {
                title: "Death Row  ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "Death Row ",
                artistPhoto: "covers/artists/Dhanda Nyoliwala.jpg",
                cover: "covers/playlists/workout/Death Row.png",
                audio: "https://www.dropbox.com/scl/fi/ebintgbtir5wjv4enlnbx/Death-Row-KoshalWorld.Com.mp3?rlkey=n6586wzyob2orbjqxs4kvgb08&st=wp2hah3n&dl=1",
                searchString: "Death Row "
            },
            {
                title: "On The Way ",
                artist: "KD,Khasa Aala Chahar",
                lyrics: "On The Way ",
                artistPhoto: "covers/artists/KD.jpg",
                cover: "covers/playlists/workout/On The Way.png",
                audio: "https://www.dropbox.com/scl/fi/0olvqp8m96tswuzvy7rl3/One-The-Way.mp3?rlkey=j1sg33uzpmweeibf62gjwbvyh&st=0r64u9z7&dl=1",
                searchString: "On The Way"
            },
            {
                title: "4 Days  ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "4 Days ",
                artistPhoto: "covers/artists/Dhanda Nyoliwala.jpg",
                cover: "covers/playlists/workout/4 Days.png",
                audio: "https://www.dropbox.com/scl/fi/rqbad5d42l9dcg5wux7h1/4-Days-KoshalWorld.Com.mp3?rlkey=jci909ldmpeawhdhluzt6ahqu&st=hsfyz84g&dl=1",
                searchString: "4 Days "
            },
            {
                title: "No Mercy  ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "No Mercy ",
                artistPhoto: "covers/artists/Dhanda Nyoliwala.jpg",
                cover: "covers/playlists/workout/No Mercy.png",
                audio: "https://www.dropbox.com/scl/fi/45bmjoftp1208grnof2fc/No-Mercy-KoshalWorld.Com.mp3?rlkey=v49a71llvha6esregwmhw4sc0&st=x6ikn4w4&dl=1",
                searchString: "No Mercy "
            }
            // ,//song3\
            // {
            //     title: "Jaan Jatni       ",
            //     album:"",
            //     artist: "Masoom Sharma    ",
            //     lyrics: "Jaan Jatni",
            //     artistPhoto: "covers/artists/Masoom Sharma.png",
            //     cover: "covers/masoom/jaan jatni.png",
            //     audio: "https://tinyurl.com/jaan-jatni",
            //     searchString: "Jaan Jatni"
            // }
            // ,//song3\
            // {
            //     title: "English Medium       ",
            //     album:"",
            //     artist: "Masoom Sharma    ",
            //     lyrics: "English Medium",
            //     artistPhoto: "covers/artists/Masoom Sharma.png",
            //     cover: "covers/masoom/english mediam.png",
            //     audio: "https://tinyurl.com/english-medium-masoom",
            //     searchString: "English Medium"
            // }
            ,//song3\
            {
                title: "2 Dada       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "2 Dada",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/2 dada.png",
                audio: "https://tinyurl.com/2-dada-masoom",
                searchString: "2 Dada"
            },
            {
                title: "Keh Diye  ",
                artist: "Bintu Pabra  ",
                lyrics: "Keh Diye ",
                artistPhoto: "covers/artists/Bintu Pabra.jpg",
                cover: "covers/playlists/workout/Keh Diye.png",
                audio: "https://www.dropbox.com/scl/fi/3t232l0uafmodbr2yk6b6/Kah-Diye.mp3?rlkey=pgwjr51ng8hztskineaupopsr&st=dkncj93p&dl=1",
                searchString: "Keh Diye "
            }
            ,//song3\
            {
                title: "Chambal K Daku       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Chambal K Daku",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/chambal k dakku.png",
                audio: "https://tinyurl.com/chambal-k-daku",
                searchString: "Chambal K Daku"
            }
            ,//song3\
            {
                title: "Baba Ji Ki Booti       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "Baba Ji Ki Booti",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/baba ji ki booti.png",
                audio: "https://tinyurl.com/baba-ji-ki-booti",
                searchString: "Baba Ji Ki Booti"
            },
            {
                title: "Badam  ",
                artist: "Sumit Patra ",
                lyrics: "Badam ",
                artistPhoto: "covers/artists/Sumit Patra.jpg",
                cover: "covers/playlists/workout/Badam.png",
                audio: "https://www.dropbox.com/scl/fi/pfu78uqgeghacbwfn1wql/Badam-128k.m4a?rlkey=2zcwerf7b0wccpw2ptc1tpwvz&st=62oawcjn&dl=1",
                searchString: "Badam "
            },
            {
                title: "Chawal ",
                artist: "Sumit Patra ",
                lyrics: "Chawal ",
                artistPhoto: "covers/artists/Sumit Patra.jpg",
                cover: "covers/playlists/workout/Chawal.png",
                audio: "https://www.dropbox.com/scl/fi/7dka6w6mlaylm9ca5cuii/Chawal-128k.m4a?rlkey=p465t2a4km3c6kmmloly77b3j&st=uemcanec&dl=1",
                searchString: "Chawal "
            },
            {
                title: "Mote Peg ",
                artist: "Sumit Patra ",
                lyrics: "Mote Peg ",
                artistPhoto: "covers/artists/Sumit Patra.jpg",
                cover: "covers/playlists/workout/Mote Peg.png",
                audio: "https://www.dropbox.com/scl/fi/3dun5xzuyk35tei9mywna/Mote_Peg-128k.m4a?rlkey=lyx3vw3y5c5t6xbti6qteupgz&st=mnomo8mk&dl=1",
                searchString: "Mote Peg "
            },
            {
                title: "Ghane Gande  ",
                artist: "Sumit Patra ",
                lyrics: "Ghane Gande ",
                artistPhoto: "covers/artists/Sumit Patra.jpg",
                cover: "covers/playlists/workout/Ghane Gande.png",
                audio: "https://www.dropbox.com/scl/fi/vg4x0f50ywltei0cs5tx0/Ghane-Gande-Sumit-Parta-New-Haryanvi-Dj-Songs-2025-DjNeemkhedia.Com.mp3?rlkey=bukq18symvbhi2bycgnludbhk&st=fjmy9d2z&dl=1",
                searchString: "Ghane Gande "
            }
            ,//song3\
            {
                title: "4-5 Pistol       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "4-5 Pistol",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/4-5 pistol.png",
                audio: "https://tinyurl.com/4-5-pistol",
                searchString: "4-5 Pistol"
            }
            ,//song3\
            {
                title: "Tempo       ",
                album: "",
                artist: "Masoom Sharma    ",
                lyrics: "2 Numbari",
                artistPhoto: "covers/artists/Masoom Sharma.png",
                cover: "covers/masoom/tempo.png",
                audio: "https://tinyurl.com/tempo-masoom",
                searchString: "Tempo"
            }
            ,//song3\
            {
                title: "Bewafa Mehndi       ",
                artist: "Narender Bhagana   ",
                lyrics: "Bewafa Mehndi",
                artistPhoto: "covers/Narender Bhagana.png",
                cover: "covers/bewafa mehndi.png",
                audio: "https://www.dropbox.com/scl/fi/enyo002xvkjkdqd0t3qhv/Bewafa-Mehndi-KoshalWorld.Com.mp3?rlkey=z24xh4zadnoywf9itxm2rc2c5&st=0q65sixk&dl=1",
                searchString: "Bewafa Mehndi"
            },
            {
                title: "Spellbound  ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "Spellbound ",
                artistPhoto: "covers/artists/Dhanda Nyoliwala.jpg",
                cover: "covers/playlists/workout/Spellbound.png",
                audio: "https://www.dropbox.com/scl/fi/fltr1uz7tc70dic4sjq9e/Spellbound-KoshalWorld.Com.mp3?rlkey=bdb4s6s23melpkzg1kzdyt7s8&st=pxbcyfyk&dl=1",
                searchString: "Spellbound "
            },
            {
                title: "Knife Brows  ",
                artist: "Dhanda Nyoliwala  ",
                lyrics: "Knife Brows ",
                artistPhoto: "covers/artists/Dhanda Nyoliwala.jpg",
                cover: "covers/playlists/workout/Knife Brows.png",
                audio: "https://www.dropbox.com/scl/fi/ndzfy4w7tlr75c72u8hbw/Knife-Brows-Dhanda-Nyoliwala.mp3?rlkey=mwc4rwz4ytw9xrxqkfknwc6gg&st=4rzuclnf&dl=1",
                searchString: "Knife Brows "
            },



        ]
    }
];


// let currentPlaylist = playlists[0];