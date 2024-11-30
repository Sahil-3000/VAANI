// Default Playlist data
const playlist = [
    //Diljit Dosanjh
    { title: "Lover      ", artist: "Diljit Dosanjh     ", lyrics:"lover_diljit", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3", searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"},//40
    { title: "Case        ", artist: "Diljit Dosanjh     ", lyrics:"case_diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "},//41
    { title: "Ishq Di Baajiyaan        ", artist: "Diljit Dosanjh     ", lyrics:"lover_diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//42
    { title: "Love Ya        ", artist: "Diljit Dosanjh     ", lyrics:"lover_diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//43
    { title: "Lalkara         ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//44
    { title: "Tu Kya Jaane        ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//45
    { title: "Bol Mohabbat        ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//46
    { title: "Vida Karo        ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//47
    { title: "Panga        ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//48
    { title: "Ishq Mitaye        ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//49
    { title: "5 Tara        ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//50
    { title: "Do You Know       ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//51
    { title: "G.O.A.T      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//52
    { title: "Clash      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//53
    { title: "Muchh      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//54
    { title: "High End      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//55
    { title: "Naram Kalja      ", artist: "Diljjt Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//56
    { title: "Baaja      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//57
    { title: "Muhammad Ali      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//58
    { title: "El Sueno      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//59
    { title: "Born To Shine      ", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//60
    { title: "Peaches      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//61
    { title: "What Ve      ", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//62
    { title: "Hass Hass      ", artist: "Sia,Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//63
    { title: "Patiala Peg      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64
    { title: "Mombattiye      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_diljit.png", audio: "songs/mombattiye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64

    { title: "Jo Tum Mere Ho      ", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3", searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"},//song1
    // { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "songs/fly krke.mp3", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
    { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "https://tinyurl.com/fly-karke", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
    
    //Arjan Dhillon-Glorious and more
    { title: "Youth Flow      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3", searchString: "arjan songs arjan jawani song arjan"},//song4
    { title: "Glorious      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3", searchString: "arjan songs glorious glowrious glorius gloris"},//song5
    { title: "Maavan      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3", searchString: "arjan songs mava maanvan mava maava maa maa song arjan"},//song6
    { title: "Back To Sikhi      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3", searchString: "arjan songs pagg back to siki sikhi sikki"},//song7
    { title: "Biography      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3", searchString: "arjan songs bigraphy bigrafi biographi "},//song8
    { title: "Tyar      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3", searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"},//song9
    
    { title: "Heer      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    { title: "Punjab Intro      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    
    
    
    //Dhanda
    { title: "Up To You      ", artist: "Dhanda Nyoliwala  ",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3", searchString: "Victer"},//song10
    { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala   ",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3", searchString: "Victer"},//song11
    
    { title: "Ishq      ", artist: "Faheem Abdullah,Rauhan Malik  ", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3", searchString: "Victer"},//song12
    
    //The Beatles-Rubber Soul
    { title: "If I Needed Someone      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3", searchString: "Victer"},//13
    { title: "Norwegian Wood      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3", searchString: "Victer"},//14
    { title: "You Won't See Me      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3", searchString: "Victer"},//15
    { title: "Think For Yourself      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3", searchString: "Victer"},//16
    { title: "The Word      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3", searchString: "Victer"},//17
    { title: "Michelle      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3", searchString: "Victer"},//18
    { title: "Drive My Car      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3", searchString: "Victer"},//19
    { title: "Girl      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3", searchString: "Victer"},//20
    { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png      ", artist: "The Beatles    ", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3", searchString: "Victer"},//21
    { title: "In My Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3", searchString: "Victer"},//22
    { title: "Wait      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3", searchString: "Victer"},//23
    { title: "Run For Your Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3", searchString: "Victer"},//24
    { title: "Nowhere Man      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3", searchString: "Victer"},//25
    { title: "What Goes On      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3", searchString: "Victer"},//26
    

    
    //Karan Aujla
    { title: "Softly      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3", searchString: "Victer"},//65
    { title: "On Top      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3", searchString: "Victer"},//66
    { title: "WYTB      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3", searchString: "Victer"},//67
    { title: "52 Bars      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3", searchString: "Victer"},//68
    { title: "Jee Ni Lagda      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3", searchString: "Victer"},//69
    { title: "Player      ", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
    { title: "Chauffeur      ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3", searchString: "Victer"},//71
    { title: "White Brown Black      ", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3", searchString: "Victer"},//72
    { title: "Tauba Tauba      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3", searchString: "Victer"},//73
    { title: "Chitta Kurta      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3", searchString: "Victer"},//74
    { title: "Mexico      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3", searchString: "Victer"},//75
    { title: "God Damn      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3", searchString: "Victer"},//76


    //mislenous songs
    { title: "Victory Anthem      ", artist: "Khushi-Saini  ", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//27
    { title: "Tu Hai Kaha      ", artist: "A-U-R"  , cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3", searchString: "Victer"},//28
    { title: "Sweater      ", artist: "Preet Hundal ", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3", searchString: "Victer"},//29
    { title: "Zindagi      ", artist: "Sabba  ",artistPhoto: "covers/Sabba.png", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3", searchString: "sabba k gane"},//30
    { title: "Medal      ", artist: "Chandra Brar  ", cover: "covers/medal.jpg", audio: "songs/medal.mp3", searchString: "Victer"},//31
    { title: "Ishq hoya      ", artist: "Jyoti Nooran , Arjit Srivastav  ", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3", searchString: "Victer"},//32
    { title: "Illegal      ", artist: "Dhanda Nyoliwala   ",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3", searchString: "Victer"},//33
    { title: "Maada Time      ", artist: "Sabba  ",artistPhoto: "covers/Sabba.png", cover: "covers/maada time_sabba.png", audio: "songs/maada time.mp3", searchString: "sabba k gane"},//34
    { title: "Dil Tu Jaan Tu      ", artist: "Guranzar  ", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3", searchString: "Victer"},//35
    { title: "Victory Anthem      ", artist: "Khushi-Saini  ", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//36
    { title: "Tareyan Di Loh      ", artist: "Harsh Bilga  ", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3", searchString: "Victer"},//37
    { title: "Khidki      ", artist: "Rachit Shrivatav  ", cover: "covers/khidki.webp", audio: "songs/khidki.mp3", searchString: "Victer"},//38
    { title: "Long Time No See      ", artist: "A-U-R  ", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3", searchString: "Victer"},//39
    { title: "That Girl      ", artist: "Amrinder Gill  ",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3", searchString: "Victer"},//39
    { title: "Khabbi Seat      ", artist: "Ammy Virk  ", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3", searchString: "Victer"},//39
    { title: "Ikk Number      ", artist: "Gurnam Bhullar  ", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3", searchString: "Victer"},//39
    { title: "Filter      ", artist: "Gulab Sidhu  ", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3", searchString: "Victer"},//39
    { title: "Patti Ton Patiala      ", artist: "Harkirat Sangha   ", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3", searchString: "Victer"},//39

    //Hustinder
    { title: "Ik Mutiyaar Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hundi Si Gareebi      ", artist: "Hustinder, Black   ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Bhuleya Ki Ae      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dollar Wargiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dullda Glass      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gal Koun Karda       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gaza Patti       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gumnaam Pyaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hasde Hi Rehndeya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hathan Utte Duniya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hopes       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Jethi Dhee       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Kharcha Kardange       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Laag Daat       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Maa Kehndi Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Man Ton Lehgi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Mittran De Circle       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Nachdi Ton       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3", searchString: "Victer"},//song3
    { title: "Paasport Size Tasveer       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Praandi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Pyaar Hoya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rabb Di Aulad       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Raonak       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rullde Firde Aan       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Saade Warge       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Surga Nu Rah       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tera Mera Nata       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Teri Deed       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tu Takkri       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Ucheyan Gharan Di Jaaiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3", searchString: "Victer"},//song3
    { title: "Velly Yaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Watching You       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Yari Tod Layi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3", searchString: "Victer"},//song3\



    //RP Singh
    {title: "Sexy       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sexy_rp singh.png", audio: "songs/sexy_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pencil       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pencil_rp singh.png", audio: "songs/pencil_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sheesha       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sheesha_rp singh.png", audio: "songs/sheesha_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Rap God       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/rapgod_rp singh.png", audio: "songs/rapgod_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Mcoca       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mcoca_rp singh.png", audio: "songs/mcoca_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Banger       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/banger_rp singh.png", audio: "songs/banger_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Bliss       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bliss_rp singh.png", audio: "songs/bliss_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Azad Flow       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/azad flow_rp singh.png", audio: "songs/azadFlow_rp singh.mp3", searchString: "Victer"},//song3\
    
    {title: "Power       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/power_rp singh.png", audio: "songs/power_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Meeh       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/meeh_rp singh.png", audio: "songs/meeh_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Chehre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/chehre_rp singh.png", audio: "songs/chehre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "3 AM       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/3 am_rp singh.png", audio: "songs/3 am_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Aadhi Si Raat       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/aadhi si raat_rp singh.png", audio: "songs/aadhi si raat_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Jigre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jigre_rp singh.png", audio: "songs/jigre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Look Book       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/look book_rp singh.png", audio: "songs/look book_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Maal       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/maal_rp singh.png", audio: "songs/maal_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "No Lve       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/no love_rp singh.png", audio: "songs/no love_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pataka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pataka_rp singh.png", audio: "songs/pataka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sapne       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sapne_rp singh.png", audio: "songs/sapne_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Tehalka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/tehalka_rp singh.png", audio: "songs/tehalka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Stop RP       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/stop rp_rp singh.png", audio: "songs/stop rp_rp singh.mp3", searchString: "Victer"},//song3

    {title: "Toxic       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/toxic_rp singh.png", audio: "songs/toxic_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Shiva       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/shiva_rp singh.png", audio: "songs/shiva_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sneeze       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sneeze_rp singh.png", audio: "songs/sneeze_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sarpanchi       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sarpanchi_rp singh.png", audio: "songs/sarpanchi_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "If You Know You Know       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/if you know you know_rp singh.png", audio: "songs/if you know you know_rp singh.mp3", searchString: "Victer" },//song3\

    {title: "7 Birth       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/7 birth_rp singh.png", audio: "songs/7 birth_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "1857       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/1857_rp singh.png", audio: "songs/1857_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Approach       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/approach_rp singh.png", audio: "songs/approach_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "BFF       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bff_rp singh.png", audio: "songs/bff_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Do Cheez       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/do cheez_rp singh.png", audio: "songs/do cheez_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Famous       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/famous_rp singh.png", audio: "songs/famous_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Govinda       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/govinda_rp singh.png", audio: "songs/govinda_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Jahaaj       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jahaaj_rp singh.png", audio: "songs/jahaaj_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "MI AMOR       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mi amor_rp singh.png", audio: "songs/mi amor_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Victor       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/victor_rp singh.png", audio: "songs/victor_rp singh.mp3", searchString: "Victer"},//song3\



];


const displayLibrary = document.querySelector('.show-library');


// Access the elements
const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');
const main = document.querySelector('main');


displayLibrary.addEventListener("click",()=>{
    main.style.display= "none";
    sidebar1.style.display="block";
    sidebar1.style.flex="0 0 100%";
})

const btnLyrics = document.querySelector('.show-lyrics');
const showLyrics = document.querySelector('.lyrics-container');

btnLyrics.addEventListener("click", () => {
    mainPlaySection.style.display = "none"; // Hide the main play section
    showLyrics.style.display = "block"; // Show the lyrics section

    // const songName = "Lover"; // Name of the song
    // const artistName = "Diljit Dosanjh"; // Artist's name

    // loadLyrics(songName, artistName); // Call the function with song details
});


function loadLyrics(songName, artistName) {
    const fileUrl = `lyrics/${songName}.txt`; // Path to the lyrics file

    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not fetch the lyrics for ${songName}`);
            }
            return response.text();
        })
        .then((lyrics) => {
            // Insert song and artist details
            const songDetails = document.getElementById("songDetails");
            songDetails.innerHTML = `
                <div>${songName}</div>
                <div>by ${artistName}</div>
            `;

            // Insert lyrics into the container
            const lyricsContainer = document.querySelector(".lyrics-container");
            lyricsContainer.textContent = lyrics;

            // Ensure the lyrics container is visible
            const lyricsWrapper = document.querySelector(".lyrics-container");
            lyricsWrapper.style.display = "block";
        })
        .catch((error) => {
            console.error("Error loading lyrics:", error);
        });
}


let currentPlaylist = playlist; // Default playlist
function switchPlaylist(newPlaylist,index) {
    
    currentPlaylist = newPlaylist; // Update the active playlist
    currentTrackIndex = index;
}


let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio();
function setCurrentSong(track) {
    currentSong = track;
}

// Update loadTrack function to also set the current song
function loadTrack(trackIndex) {
    const track = currentPlaylist[trackIndex];
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

    artistImg.src = track.artistPhoto;
    songName.textContent = track.title;
    artistName.textContent = track.artist;

    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);
        progressSlider.max = Math.floor(audio.duration);
    };

    loadLyrics(track.lyrics,track.artist);

    // Update the current song for the download button
    setCurrentSong(track);
    
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

// Element references
const nowPlayingTitle = document.querySelector('.track-title');
const nowPlayingArtist = document.querySelector('.track-artist');
const nowPlayingCover = document.querySelector('.track-info img');
const playPauseIcon = document.getElementById('play-pause-icon');
const progressSlider = document.getElementById('progress-slider');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const sidebar = document.querySelector('.current-song-cover img');
const artistImg = document.querySelector('.artist-img');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
// Load track based on index

// Play selected song and update footer
function playSong(audioFile) {
    audio.src = audioFile;
    // audio.load();
    audio.play();
    isPlaying = true;
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    
    // Update the footer with song details
    const track =currentPlaylist.find(song => song.audio === audioFile);
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";
    sidebar.style.backgroundPosition = "center";
    sidebar.style.borderRadius = "8px";
    sidebar.style.width = "100%";
    artistImg.src = track.artistPhoto;
    songName.textContent = track.title;
    artistName.textContent = track.artist;


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
    if (!currentPlaylist.length) return; // Handle empty playlist

    currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length; // Loop to the first track
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    isPlaying = true;
}



// Move to the previous track
function prevTrack() {
    if (!currentPlaylist.length) return; // Handle empty playlist

    currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length; // Loop to the last track
    loadTrack(currentTrackIndex);
    audio.play();

    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
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

//...................................................................................................................................................................................
// Select the elements
const homeButton = document.querySelector(".home");
const songResults = document.querySelector(".song-results");
const defaultContent = document.querySelector(".default-content");
const searchBtn = document.querySelector(".search-btn");

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
            (song.title?.toLowerCase() || "").includes(query) ||
            (song.artist?.toLowerCase() || "").includes(query) ||
            (song.searchString?.toLowerCase() || "").includes(query)
        );
        displayResults(results);
    }
});


             
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input',function() {
    // const query = document.getElementById("search-bar").value.toLowerCase();
    document.getElementById("search-btn").click();
   
});

// Optional: Allow Enter key to trigger search
document.getElementById("search-bar").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        
        document.getElementById("search-btn").click();
    } 
    
});

// Listen for keyboard events
document.addEventListener('keydown', function(event) {

    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
                // Do nothing if the focus is in a text input or textarea
                return;
    }
    if (event.key === ' ') {
        // Spacebar pressed, toggle play/pause
        if (isPlaying) {
            audio.pause();
            playPauseIcon.innerHTML = '<use href="#play-icon"></use>';
            isPlaying = false;
        } else {
            audio.play();
            playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
            isPlaying = true;
        }
    } else if (event.key === 'ArrowRight') {
        // Right arrow key pressed, play the next song
        nextTrack();
    } else if (event.key === 'ArrowLeft') {
        // Left arrow key pressed, play the previous song
        prevTrack();
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
            playButton.onclick = () => {
                audio.load();
                playSong(song.audio);
            }
            
            songDiv.appendChild(playButton);

            resultsContainer.appendChild(songDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No songs found.</p>';
    }
    
}


//...................................................................................................................................................................................
// Select all the library items (playlists)
const libraryItems = document.querySelectorAll(".library-item");
const librarySection = document.querySelector(".library-section");
const openPlaylistContainer = document.querySelector(".playlist-header");

// Example playlists data with multiple songs
const playlists = [
    {
        id: 1,
        title: "Rubber Soul",
        artist: "The Beatles    ",
        cover: "covers/rubber soul.jpg",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
            { title: "Drive My Car      ", artist: "The Beatles    ", audio: "songs/drive my car.mp3" },
            { title: "Norwegian Wood      ", artist: "The Beatles    ", audio: "songs/norwegian wood.mp3" },
            { title: "In My Life      ", artist: "The Beatles    ", audio: "songs/in my life.mp3" },
            { title: "Nowhere Man      ", artist: "The Beatles    ", audio: "songs/nowhere man.mp3" }
        ]
    },
    {
        id: 2,
        title: "Liked Songs",
        artist: "Various Artists",
        cover: "covers/liked playlist.png",
        songs: [
            //Diljit Dosanjh
    { title: "Lover        ", artist: "Diljit Dosanjh     ", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3", searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"},//40
    { title: "Case        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "},//41
    { title: "Ishq Di Baajiyaan        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//42
    { title: "Love Ya        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//43
    { title: "Lalkara         ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//44
    { title: "Tu Kya Jaane        ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//45
    { title: "Bol Mohabbat        ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//46
    { title: "Vida Karo        ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//47
    { title: "Panga        ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//48
    { title: "Ishq Mitaye        ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//49
    { title: "5 Tara        ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//50
    { title: "Do You Know       ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//51
    { title: "G.O.A.T      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//52
    { title: "Clash      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//53
    { title: "Muchh      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//54
    { title: "High End      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//55
    { title: "Naram Kalja      ", artist: "Diljjt Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//56
    { title: "Baaja      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//57
    { title: "Muhammad Ali      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//58
    { title: "El Sueno      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//59
    { title: "Born To Shine      ", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//60
    { title: "Peaches      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//61
    { title: "What Ve      ", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//62
    { title: "Hass Hass      ", artist: "Sia,Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//63
    { title: "Patiala Peg      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64
    { title: "Mombattiye      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_diljit.png", audio: "songs/mombattiye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64

    { title: "Jo Tum Mere Ho      ", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3", searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"},//song1
    { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "songs/fly krke.mp3", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
    
    //Arjan Dhillon-Glorious and more
    { title: "Youth Flow      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3", searchString: "arjan songs arjan jawani song arjan"},//song4
    { title: "Glorious      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3", searchString: "arjan songs glorious glowrious glorius gloris"},//song5
    { title: "Maavan      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3", searchString: "arjan songs mava maanvan mava maava maa maa song arjan"},//song6
    { title: "Back To Sikhi      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3", searchString: "arjan songs pagg back to siki sikhi sikki"},//song7
    { title: "Biography      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3", searchString: "arjan songs bigraphy bigrafi biographi "},//song8
    { title: "Tyar      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3", searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"},//song9
    
    { title: "Heer      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    { title: "Punjab Intro      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    
    
    
    //Dhanda
    { title: "Up To You      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3", searchString: "Victer"},//song10
    { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3", searchString: "Victer"},//song11
    
    { title: "Ishq      ", artist: "Faheem Abdullah,Rauhan Malik", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3", searchString: "Victer"},//song12
    
    //The Beatles-Rubber Soul
    { title: "If I Needed Someone      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3", searchString: "Victer"},//13
    { title: "Norwegian Wood      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3", searchString: "Victer"},//14
    { title: "You Won't See Me      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3", searchString: "Victer"},//15
    { title: "Think For Yourself      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3", searchString: "Victer"},//16
    { title: "The Word      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3", searchString: "Victer"},//17
    { title: "Michelle      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3", searchString: "Victer"},//18
    { title: "Drive My Car      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3", searchString: "Victer"},//19
    { title: "Girl      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3", searchString: "Victer"},//20
    { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png      ", artist: "The Beatles    ", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3", searchString: "Victer"},//21
    { title: "In My Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3", searchString: "Victer"},//22
    { title: "Wait      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3", searchString: "Victer"},//23
    { title: "Run For Your Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3", searchString: "Victer"},//24
    { title: "Nowhere Man      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3", searchString: "Victer"},//25
    { title: "What Goes On      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3", searchString: "Victer"},//26
    

    
    //Karan Aujla
    { title: "Softly      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3", searchString: "Victer"},//65
    { title: "On Top      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3", searchString: "Victer"},//66
    { title: "WYTB      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3", searchString: "Victer"},//67
    { title: "52 Bars      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3", searchString: "Victer"},//68
    { title: "Jee Ni Lagda      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3", searchString: "Victer"},//69
    { title: "Player      ", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
    { title: "Chauffeur      ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3", searchString: "Victer"},//71
    { title: "White Brown Black      ", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3", searchString: "Victer"},//72
    { title: "Tauba Tauba      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3", searchString: "Victer"},//73
    { title: "Chitta Kurta      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3", searchString: "Victer"},//74
    { title: "Mexico      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3", searchString: "Victer"},//75
    { title: "God Damn      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3", searchString: "Victer"},//76


    //mislenous songs
    { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//27
    { title: "Tu Hai Kaha      ", artist: "A-U-R", cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3", searchString: "Victer"},//28
    { title: "Sweater      ", artist: "Preet Hundal", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3", searchString: "Victer"},//29
    { title: "Zindagi      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3", searchString: "sabba k gane"},//30
    { title: "Medal      ", artist: "Chandra Brar", cover: "covers/medal.jpg", audio: "songs/medal.mp3", searchString: "Victer"},//31
    { title: "Ishq hoya      ", artist: "Jyoti Nooran, Arjit Srivastav", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3", searchString: "Victer"},//32
    { title: "Illegal      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3", searchString: "Victer"},//33
    { title: "Maada Time      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/maada time_sabba.png", audio: "songs/maada time.mp3", searchString: "sabba k gane"},//34
    { title: "Dil Tu Jaan Tu      ", artist: "Guranzar", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3", searchString: "Victer"},//35
    { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//36
    { title: "Tareyan Do Loh      ", artist: "Harsh Bilga", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3", searchString: "Victer"},//37
    { title: "Khidki      ", artist: "Rachit Shrivatav", cover: "covers/khidki.webp", audio: "songs/khidki.mp3", searchString: "Victer"},//38
    { title: "Long Time No See      ", artist: "A-U-R", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3", searchString: "Victer"},//39
    { title: "That Girl      ", artist: "Amrinder Gill",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3", searchString: "Victer"},//39
    { title: "Khabbi Seat      ", artist: "Ammy Virk", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3", searchString: "Victer"},//39
    { title: "Ikk Number      ", artist: "Gurnam Bhullar", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3", searchString: "Victer"},//39
    { title: "Filter      ", artist: "Gulab Sidhu", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3", searchString: "Victer"},//39
    { title: "Patti Ton Patiala      ", artist: "Harkirat Sangha", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3", searchString: "Victer"},//39

    //Hustinder
    { title: "Ik Mutiyaar Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hundi Si Gareebi      ", artist: "Hustinder, Black",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Bhuleya Ki Ae      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dollar Wargiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dullda Glass      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gal Koun Karda       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gaza Patti       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gumnaam Pyaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hasde Hi Rehndeya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hathan Utte Duniya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hopes       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Jethi Dhee       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Kharcha Kardange       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Laag Daat       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Maa Kehndi Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Man Ton Lehgi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Mittran De Circle       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Nachdi Ton       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3", searchString: "Victer"},//song3
    { title: "Paasport Size Tasveer       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Praandi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Pyaar Hoya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rabb Di Aulad       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Raonak       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rullde Firde Aan       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Saade Warge       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Surga Nu Rah       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tera Mera Nata       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Teri Deed       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tu Takkri       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Ucheyan Gharan Di Jaaiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3", searchString: "Victer"},//song3
    { title: "Velly Yaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Watching You       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Yari Tod Layi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3", searchString: "Victer"},//song3\



    //RP Singh
    {title: "Sexy       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sexy_rp singh.png", audio: "songs/sexy_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pencil       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pencil_rp singh.png", audio: "songs/pencil_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sheesha       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sheesha_rp singh.png", audio: "songs/sheesha_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Rap God       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/rapgod_rp singh.png", audio: "songs/rapgod_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Mcoca       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mcoca_rp singh.png", audio: "songs/mcoca_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Banger       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/banger_rp singh.png", audio: "songs/banger_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Azad Flow       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/azad flow_rp singh.png", audio: "songs/azad flow_rp singh.mp3", searchString: "Victer"},//song3\

    {title: "Bliss       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bliss_rp singh.png", audio: "songs/bliss_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Power       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/power_rp singh.png", audio: "songs/power_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Meeh       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/meeh_rp singh.png", audio: "songs/meeh_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Chehre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/chehre_rp singh.png", audio: "songs/chehre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "3 AM       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/3 am_rp singh.png", audio: "songs/3 am_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Aadhi Si Raat       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/aadhi si raat_rp singh.png", audio: "songs/aadhi si raat_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Jigre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jigre_rp singh.png", audio: "songs/jigre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Look Book       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/look book_rp singh.png", audio: "songs/look book_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Maal       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/maal_rp singh.png", audio: "songs/maal_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "No Lve       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/no love_rp singh.png", audio: "songs/no love_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pataka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pataka_rp singh.png", audio: "songs/pataka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sapne       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sapne_rp singh.png", audio: "songs/sapne_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Tehalka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/tehalka_rp singh.png", audio: "songs/tehalka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Stop RP       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/stop rp_rp singh.png", audio: "songs/stop rp_rp singh.mp3", searchString: "Victer"},//song3

    {title: "Toxic       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/toxic_rp singh.png", audio: "songs/toxic_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Shiva       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/shiva_rp singh.png", audio: "songs/shiva_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sneeze       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sneeze_rp singh.png", audio: "songs/sneeze_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sarpanchi       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sarpanchi_rp singh.png", audio: "songs/sarpanchi_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "If You Know You Know       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/if you know you know_rp singh.png", audio: "songs/if you know you know_rp singh.mp3", searchString: "Victer" },//song3\

    {title: "7 Birth       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/7 birth_rp singh.png", audio: "songs/7 birth_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "1857       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/1857_rp singh.png", audio: "songs/1857_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Approach       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/approach_rp singh.png", audio: "songs/approach_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "BFF       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bff_rp singh.png", audio: "songs/bff_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Do Cheez       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/do cheez_rp singh.png", audio: "songs/do cheez_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Famous       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/famous_rp singh.png", audio: "songs/famous_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Govinda       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/govinda_rp singh.png", audio: "songs/govinda_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Jahaaj       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jahaaj_rp singh.png", audio: "songs/jahaaj_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "MI AMOR       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mi amor_rp singh.png", audio: "songs/mi amor_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Victor       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/victor_rp singh.png", audio: "songs/victor_rp singh.mp3", searchString: "Victer"},//song3\
        ]
    },
    {
        id: 3,
        title: "Workout",
        artist: "Eminem",
        cover: "covers/workout playlist.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
            { title: "Till I Collapse      ", artist: "Eminem", audio: "songs/till-i-collapse.mp3" },
            { title: "Lose Yourself      ", artist: "Eminem", audio: "songs/lose-yourself.mp3" }
        ]
    },
    {
        id: 4,
        title: "Sleep",
        artist: "Various Artists",
        cover: "covers/sleep playlist.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
            { title: "Everything I Wanted       ", artist: "Billie Eilish", audio: "songs/everything i wanted_billie.mp3" },
            { title: "Ocean      ", artist: "Anuv Jain", audio: "songs/ocean_anuv jain.mp3" },
            { title: "Male Fantasy.      ", artist: "Billie Eilish", audio: "songs/male fantasy_billie.mp3" },
            { title: "Lovely      ", artist: "Billie Eilish", audio: "songs/lovely_billie.mp3" },
            { title: "What Was I Made For?      ", artist: "Billie Eilish", audio: "songs/what was i made for_billie.mp3" },
        ]
    },

    {
        id: 5,
        title: "The Beatles    ",
        artist: "The Beatles    ",
        cover: "covers/The Beatles.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
        ]
    }
];
//...................................................................................................................................................................................

libraryItems.forEach((libraryItem, index) => {
    libraryItem.addEventListener("click", () => {
        const selectedPlaylist = playlists[index];

        // Show the selected playlist and hide the library
        openPlaylistContainer.style.display = "block";
        librarySection.style.display = "none";

        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayPlaylist(selectedPlaylist);
        
        
    });
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "playlist") {
        // If the user navigates back to the playlist state
        openPlaylistContainer.style.display = "block";
        librarySection.style.display = "none";
    } else {
        // Default state: show the library
        openPlaylistContainer.style.display = "none";
        librarySection.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "library" }, null, "#library");
});



// Function to display the selected playlist's details
function displayPlaylist(playList) {
    // switchPlaylist(playlists.songs);
    const playlistContainer = openPlaylistContainer;
    playlistContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const playlistHeader = document.createElement("div");
    playlistHeader.classList.add("playlist-header");

    const playlistImage = document.createElement("img");
    playlistImage.src = playList.cover;
    playlistImage.alt = playList.title;
    playlistHeader.appendChild(playlistImage);

    const playlistTitle = document.createElement("h3");
    playlistTitle.textContent = playList.title;
    playlistHeader.appendChild(playlistTitle);

    const playlistArtist = document.createElement("p");
    playlistArtist.textContent = `Artist: ${playList.artist}`;
    playlistHeader.appendChild(playlistArtist);

    
    
    // Create a list of songs for the selected playlist
    playList.songs.forEach((song, index) => {
        
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "download");
        // downLoad.textContent = "Download";
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

        // Play button for each song
        const playButton = document.createElement("button");
        playButton.setAttribute("data-type", "play-button");
        playButton.textContent = "Play";
        playButton.onclick = () => {
            // currentTrackIndex = 6;
            
            playSong(song.audio);
            // switchPlaylist(playList,index);
            
            
        };
        songDiv.appendChild(playButton);

        playlistHeader.appendChild(songDiv);
    });
    playlistContainer.appendChild(playlistHeader);
    
}






//...................................................................................................................................................................................

// Select all the library items (playlists)
const mainPlayItems = document.querySelectorAll(".playlist-item1");
const mainPlaySection = document.querySelector(".default-content");
const mainOpenPlayContainer = document.querySelector(".playlist-results");
//...................................................................................................................................................................................
// Example playlists data with multiple songs
const playlistsMain = [
    {
        id: 1,
        title: "Liked Songs",
        artist: "Various Artists",
        cover: "covers/liked playlist.png",
        songs: [
            //Diljit Dosanjh
    { title: "Lover        ", artist: "Diljit Dosanjh     ", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3", searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"},//40
    { title: "Case        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "},//41
    { title: "Ishq Di Baajiyaan        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//42
    { title: "Love Ya        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//43
    { title: "Lalkara         ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//44
    { title: "Tu Kya Jaane        ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//45
    { title: "Bol Mohabbat        ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//46
    { title: "Vida Karo        ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//47
    { title: "Panga        ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//48
    { title: "Ishq Mitaye        ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//49
    { title: "5 Tara        ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//50
    { title: "Do You Know       ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//51
    { title: "G.O.A.T      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//52
    { title: "Clash      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//53
    { title: "Muchh      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//54
    { title: "High End      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//55
    { title: "Naram Kalja      ", artist: "Diljjt Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//56
    { title: "Baaja      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//57
    { title: "Muhammad Ali      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//58
    { title: "El Sueno      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//59
    { title: "Born To Shine      ", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//60
    { title: "Peaches      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//61
    { title: "What Ve      ", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//62
    { title: "Hass Hass      ", artist: "Sia,Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//63
    { title: "Patiala Peg      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64
    { title: "Mombattiye      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_diljit.png", audio: "songs/mombattiye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64

    { title: "Jo Tum Mere Ho      ", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3", searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"},//song1
    { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "songs/fly krke.mp3", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
    
    //Arjan Dhillon-Glorious and more
    { title: "Youth Flow      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3", searchString: "arjan songs arjan jawani song arjan"},//song4
    { title: "Glorious      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3", searchString: "arjan songs glorious glowrious glorius gloris"},//song5
    { title: "Maavan      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3", searchString: "arjan songs mava maanvan mava maava maa maa song arjan"},//song6
    { title: "Back To Sikhi      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3", searchString: "arjan songs pagg back to siki sikhi sikki"},//song7
    { title: "Biography      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3", searchString: "arjan songs bigraphy bigrafi biographi "},//song8
    { title: "Tyar      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3", searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"},//song9
    
    { title: "Heer      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    { title: "Punjab Intro      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3", searchString: "arjan songs"},//song9
    
    
    
    //Dhanda
    { title: "Up To You      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3", searchString: "Victer"},//song10
    { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3", searchString: "Victer"},//song11
    
    { title: "Ishq      ", artist: "Faheem Abdullah,Rauhan Malik", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3", searchString: "Victer"},//song12
    
    //The Beatles-Rubber Soul
    { title: "If I Needed Someone      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3", searchString: "Victer"},//13
    { title: "Norwegian Wood      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3", searchString: "Victer"},//14
    { title: "You Won't See Me      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3", searchString: "Victer"},//15
    { title: "Think For Yourself      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3", searchString: "Victer"},//16
    { title: "The Word      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3", searchString: "Victer"},//17
    { title: "Michelle      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3", searchString: "Victer"},//18
    { title: "Drive My Car      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3", searchString: "Victer"},//19
    { title: "Girl      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3", searchString: "Victer"},//20
    { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png      ", artist: "The Beatles    ", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3", searchString: "Victer"},//21
    { title: "In My Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3", searchString: "Victer"},//22
    { title: "Wait      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3", searchString: "Victer"},//23
    { title: "Run For Your Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3", searchString: "Victer"},//24
    { title: "Nowhere Man      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3", searchString: "Victer"},//25
    { title: "What Goes On      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3", searchString: "Victer"},//26
    

    
    //Karan Aujla
    { title: "Softly      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3", searchString: "Victer"},//65
    { title: "On Top      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3", searchString: "Victer"},//66
    { title: "WYTB      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3", searchString: "Victer"},//67
    { title: "52 Bars      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3", searchString: "Victer"},//68
    { title: "Jee Ni Lagda      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3", searchString: "Victer"},//69
    { title: "Player      ", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
    { title: "Chauffeur      ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3", searchString: "Victer"},//71
    { title: "White Brown Black      ", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3", searchString: "Victer"},//72
    { title: "Tauba Tauba      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3", searchString: "Victer"},//73
    { title: "Chitta Kurta      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3", searchString: "Victer"},//74
    { title: "Mexico      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3", searchString: "Victer"},//75
    { title: "God Damn      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3", searchString: "Victer"},//76


    //mislenous songs
    { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//27
    { title: "Tu Hai Kaha      ", artist: "A-U-R", cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3", searchString: "Victer"},//28
    { title: "Sweater      ", artist: "Preet Hundal", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3", searchString: "Victer"},//29
    { title: "Zindagi      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3", searchString: "sabba k gane"},//30
    { title: "Medal      ", artist: "Chandra Brar", cover: "covers/medal.jpg", audio: "songs/medal.mp3", searchString: "Victer"},//31
    { title: "Ishq hoya      ", artist: "Jyoti Nooran, Arjit Srivastav", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3", searchString: "Victer"},//32
    { title: "Illegal      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3", searchString: "Victer"},//33
    { title: "Maada Time      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/maada time_sabba.png", audio: "songs/maada time.mp3", searchString: "sabba k gane"},//34
    { title: "Dil Tu Jaan Tu      ", artist: "Guranzar", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3", searchString: "Victer"},//35
    { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//36
    { title: "Tareyan Do Loh      ", artist: "Harsh Bilga", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3", searchString: "Victer"},//37
    { title: "Khidki      ", artist: "Rachit Shrivatav", cover: "covers/khidki.webp", audio: "songs/khidki.mp3", searchString: "Victer"},//38
    { title: "Long Time No See      ", artist: "A-U-R", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3", searchString: "Victer"},//39
    { title: "That Girl      ", artist: "Amrinder Gill",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3", searchString: "Victer"},//39
    { title: "Khabbi Seat      ", artist: "Ammy Virk", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3", searchString: "Victer"},//39
    { title: "Ikk Number      ", artist: "Gurnam Bhullar", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3", searchString: "Victer"},//39
    { title: "Filter      ", artist: "Gulab Sidhu", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3", searchString: "Victer"},//39
    { title: "Patti Ton Patiala      ", artist: "Harkirat Sangha", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3", searchString: "Victer"},//39

    //Hustinder
    { title: "Ik Mutiyaar Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hundi Si Gareebi      ", artist: "Hustinder, Black",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Bhuleya Ki Ae      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dollar Wargiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Dullda Glass      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gal Koun Karda       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gaza Patti       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Gumnaam Pyaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hasde Hi Rehndeya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hathan Utte Duniya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Hopes       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Jethi Dhee       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Kharcha Kardange       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Laag Daat       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Maa Kehndi Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Man Ton Lehgi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Mittran De Circle       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Nachdi Ton       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3", searchString: "Victer"},//song3
    { title: "Paasport Size Tasveer       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Praandi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Pyaar Hoya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rabb Di Aulad       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Raonak       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Rullde Firde Aan       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Saade Warge       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Surga Nu Rah       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tera Mera Nata       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Teri Deed       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Tu Takkri       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Ucheyan Gharan Di Jaaiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3", searchString: "Victer"},//song3
    { title: "Velly Yaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Watching You       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3", searchString: "Victer"},//song3
    { title: "Yari Tod Layi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3", searchString: "Victer"},//song3\



    //RP Singh
    {title: "Sexy       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sexy_rp singh.png", audio: "songs/sexy_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pencil       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pencil_rp singh.png", audio: "songs/pencil_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sheesha       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sheesha_rp singh.png", audio: "songs/sheesha_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Rap God       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/rapgod_rp singh.png", audio: "songs/rapgod_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Mcoca       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mcoca_rp singh.png", audio: "songs/mcoca_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Banger       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/banger_rp singh.png", audio: "songs/banger_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Azad Flow       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/azad flow_rp singh.png", audio: "songs/azad flow_rp singh.mp3", searchString: "Victer"},//song3\

    {title: "Bliss       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bliss_rp singh.png", audio: "songs/bliss_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Power       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/power_rp singh.png", audio: "songs/power_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Meeh       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/meeh_rp singh.png", audio: "songs/meeh_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Chehre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/chehre_rp singh.png", audio: "songs/chehre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "3 AM       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/3 am_rp singh.png", audio: "songs/3 am_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Aadhi Si Raat       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/aadhi si raat_rp singh.png", audio: "songs/aadhi si raat_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Jigre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jigre_rp singh.png", audio: "songs/jigre_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Look Book       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/look book_rp singh.png", audio: "songs/look book_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Maal       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/maal_rp singh.png", audio: "songs/maal_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "No Lve       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/no love_rp singh.png", audio: "songs/no love_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Pataka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pataka_rp singh.png", audio: "songs/pataka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sapne       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sapne_rp singh.png", audio: "songs/sapne_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Tehalka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/tehalka_rp singh.png", audio: "songs/tehalka_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Stop RP       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/stop rp_rp singh.png", audio: "songs/stop rp_rp singh.mp3", searchString: "Victer"},//song3

    {title: "Toxic       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/toxic_rp singh.png", audio: "songs/toxic_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Shiva       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/shiva_rp singh.png", audio: "songs/shiva_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sneeze       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sneeze_rp singh.png", audio: "songs/sneeze_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "Sarpanchi       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sarpanchi_rp singh.png", audio: "songs/sarpanchi_rp singh.mp3", searchString: "Victer"},//song3\
    {title: "If You Know You Know       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/if you know you know_rp singh.png", audio: "songs/if you know you know_rp singh.mp3", searchString: "Victer" },//song3\

    {title: "7 Birth       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/7 birth_rp singh.png", audio: "songs/7 birth_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "1857       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/1857_rp singh.png", audio: "songs/1857_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Approach       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/approach_rp singh.png", audio: "songs/approach_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "BFF       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bff_rp singh.png", audio: "songs/bff_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Do Cheez       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/do cheez_rp singh.png", audio: "songs/do cheez_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Famous       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/famous_rp singh.png", audio: "songs/famous_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Govinda       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/govinda_rp singh.png", audio: "songs/govinda_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Jahaaj       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jahaaj_rp singh.png", audio: "songs/jahaaj_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "MI AMOR       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mi amor_rp singh.png", audio: "songs/mi amor_rp singh.mp3", searchString: "Victer" },//song3\
    {title: "Victor       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/victor_rp singh.png", audio: "songs/victor_rp singh.mp3", searchString: "Victer"},//song3\
        ]
    },
    {
        id: 2,
        title: "Arijit Singh",
        artist: "Arijit Singh",
        cover: "covers/arijit singh.jpg",
        songs: [

            //Karan Aujla
            { title: "Softly      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3", searchString: "Victer"},//65
            { title: "On Top      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3", searchString: "Victer"},//66
            { title: "WYTB      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3", searchString: "Victer"},//67
            { title: "52 Bars      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3", searchString: "Victer"},//68
            { title: "Jee Ni Lagda      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3", searchString: "Victer"},//69
            { title: "Player      ", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
            { title: "Chauffeur      ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3", searchString: "Victer"},//71
            { title: "White Brown Black      ", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3", searchString: "Victer"},//72
            { title: "Tauba Tauba      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3", searchString: "Victer"},//73
            { title: "Chitta Kurta      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3", searchString: "Victer"},//74
            { title: "Mexico      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3", searchString: "Victer"},//75
            { title: "God Damn      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3", searchString: "Victer"},//76

                    //Diljit Dosanjh
            { title: "Lover        ", artist: "Diljit Dosanjh     ", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3", searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"},//40
            { title: "Case        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "},//41
            { title: "Ishq Di Baajiyaan        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//42
            { title: "Love Ya        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//43
            { title: "Lalkara         ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//44
            { title: "Tu Kya Jaane        ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//45
            { title: "Bol Mohabbat        ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//46
            { title: "Vida Karo        ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//47
            { title: "Panga        ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//48
            { title: "Ishq Mitaye        ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//49
            { title: "5 Tara        ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//50
            { title: "Do You Know       ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//51
            { title: "G.O.A.T      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//52
            { title: "Clash      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//53
            { title: "Muchh      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//54
            { title: "High End      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//55
            { title: "Naram Kalja      ", artist: "Diljjt Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//56
            { title: "Baaja      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//57
            { title: "Muhammad Ali      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//58
            { title: "El Sueno      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//59
            { title: "Born To Shine      ", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//60
            { title: "Peaches      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//61
            { title: "What Ve      ", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//62
            { title: "Hass Hass      ", artist: "Sia,Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//63
            { title: "Patiala Peg      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64
            { title: "Mombattiye      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_diljit.png", audio: "songs/mombattiye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64

            { title: "Jo Tum Mere Ho      ", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3", searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"},//song1
            { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "songs/fly krke.mp3", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
            
            //Arjan Dhillon-Glorious and more
            { title: "Youth Flow      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3", searchString: "arjan songs arjan jawani song arjan"},//song4
            { title: "Glorious      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3", searchString: "arjan songs glorious glowrious glorius gloris"},//song5
            { title: "Maavan      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3", searchString: "arjan songs mava maanvan mava maava maa maa song arjan"},//song6
            { title: "Back To Sikhi      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3", searchString: "arjan songs pagg back to siki sikhi sikki"},//song7
            { title: "Biography      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3", searchString: "arjan songs bigraphy bigrafi biographi "},//song8
            { title: "Tyar      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3", searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"},//song9
            
            { title: "Heer      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3", searchString: "arjan songs"},//song9
            { title: "Punjab Intro      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3", searchString: "arjan songs"},//song9
            
            
            
            //Dhanda
            { title: "Up To You      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3", searchString: "Victer"},//song10
            { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3", searchString: "Victer"},//song11
            
            { title: "Ishq      ", artist: "Faheem Abdullah,Rauhan Malik", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3", searchString: "Victer"},//song12
            
            //The Beatles-Rubber Soul
            { title: "If I Needed Someone      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3", searchString: "Victer"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3", searchString: "Victer"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3", searchString: "Victer"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3", searchString: "Victer"},//16
            { title: "The Word      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3", searchString: "Victer"},//17
            { title: "Michelle      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3", searchString: "Victer"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3", searchString: "Victer"},//19
            { title: "Girl      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3", searchString: "Victer"},//20
            { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png      ", artist: "The Beatles    ", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3", searchString: "Victer"},//21
            { title: "In My Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3", searchString: "Victer"},//22
            { title: "Wait      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3", searchString: "Victer"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3", searchString: "Victer"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3", searchString: "Victer"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3", searchString: "Victer"},//26
            


            //mislenous songs
            { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//27
            { title: "Tu Hai Kaha      ", artist: "A-U-R", cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3", searchString: "Victer"},//28
            { title: "Sweater      ", artist: "Preet Hundal", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3", searchString: "Victer"},//29
            { title: "Zindagi      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3", searchString: "sabba k gane"},//30
            { title: "Medal      ", artist: "Chandra Brar", cover: "covers/medal.jpg", audio: "songs/medal.mp3", searchString: "Victer"},//31
            { title: "Ishq hoya      ", artist: "Jyoti Nooran, Arjit Srivastav", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3", searchString: "Victer"},//32
            { title: "Illegal      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3", searchString: "Victer"},//33
            { title: "Maada Time      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/maada time_sabba.png", audio: "songs/maada time.mp3", searchString: "sabba k gane"},//34
            { title: "Dil Tu Jaan Tu      ", artist: "Guranzar", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3", searchString: "Victer"},//35
            { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//36
            { title: "Tareyan Do Loh      ", artist: "Harsh Bilga", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3", searchString: "Victer"},//37
            { title: "Khidki      ", artist: "Rachit Shrivatav", cover: "covers/khidki.webp", audio: "songs/khidki.mp3", searchString: "Victer"},//38
            { title: "Long Time No See      ", artist: "A-U-R", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3", searchString: "Victer"},//39
            { title: "That Girl      ", artist: "Amrinder Gill",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3", searchString: "Victer"},//39
            { title: "Khabbi Seat      ", artist: "Ammy Virk", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3", searchString: "Victer"},//39
            { title: "Ikk Number      ", artist: "Gurnam Bhullar", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3", searchString: "Victer"},//39
            { title: "Filter      ", artist: "Gulab Sidhu", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3", searchString: "Victer"},//39
            { title: "Patti Ton Patiala      ", artist: "Harkirat Sangha", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3", searchString: "Victer"},//39

            //Hustinder
            { title: "Ik Mutiyaar Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hundi Si Gareebi      ", artist: "Hustinder, Black",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Bhuleya Ki Ae      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Dollar Wargiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Dullda Glass      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gal Koun Karda       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gaza Patti       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gumnaam Pyaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hasde Hi Rehndeya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hathan Utte Duniya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hopes       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Jethi Dhee       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Kharcha Kardange       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Laag Daat       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Maa Kehndi Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Man Ton Lehgi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Mittran De Circle       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Nachdi Ton       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3", searchString: "Victer"},//song3
            { title: "Paasport Size Tasveer       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Praandi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Pyaar Hoya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Rabb Di Aulad       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Raonak       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Rullde Firde Aan       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Saade Warge       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Surga Nu Rah       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Tera Mera Nata       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Teri Deed       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Tu Takkri       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Ucheyan Gharan Di Jaaiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3", searchString: "Victer"},//song3
            { title: "Velly Yaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Watching You       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Yari Tod Layi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3", searchString: "Victer"},//song3\



            //RP Singh
            {title: "Sexy       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sexy_rp singh.png", audio: "songs/sexy_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Pencil       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pencil_rp singh.png", audio: "songs/pencil_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sheesha       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sheesha_rp singh.png", audio: "songs/sheesha_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Rap God       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/rapgod_rp singh.png", audio: "songs/rapgod_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Mcoca       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mcoca_rp singh.png", audio: "songs/mcoca_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Banger       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/banger_rp singh.png", audio: "songs/banger_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Azad Flow       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/azad flow_rp singh.png", audio: "songs/azad flow_rp singh.mp3", searchString: "Victer"},//song3\

            {title: "Bliss       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bliss_rp singh.png", audio: "songs/bliss_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Power       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/power_rp singh.png", audio: "songs/power_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Meeh       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/meeh_rp singh.png", audio: "songs/meeh_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Chehre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/chehre_rp singh.png", audio: "songs/chehre_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "3 AM       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/3 am_rp singh.png", audio: "songs/3 am_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Aadhi Si Raat       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/aadhi si raat_rp singh.png", audio: "songs/aadhi si raat_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Jigre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jigre_rp singh.png", audio: "songs/jigre_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Look Book       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/look book_rp singh.png", audio: "songs/look book_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Maal       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/maal_rp singh.png", audio: "songs/maal_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "No Lve       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/no love_rp singh.png", audio: "songs/no love_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Pataka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pataka_rp singh.png", audio: "songs/pataka_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sapne       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sapne_rp singh.png", audio: "songs/sapne_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Tehalka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/tehalka_rp singh.png", audio: "songs/tehalka_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Stop RP       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/stop rp_rp singh.png", audio: "songs/stop rp_rp singh.mp3", searchString: "Victer"},//song3

            {title: "Toxic       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/toxic_rp singh.png", audio: "songs/toxic_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Shiva       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/shiva_rp singh.png", audio: "songs/shiva_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sneeze       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sneeze_rp singh.png", audio: "songs/sneeze_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sarpanchi       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sarpanchi_rp singh.png", audio: "songs/sarpanchi_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "If You Know You Know       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/if you know you know_rp singh.png", audio: "songs/if you know you know_rp singh.mp3", searchString: "Victer" },//song3\

            {title: "7 Birth       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/7 birth_rp singh.png", audio: "songs/7 birth_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "1857       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/1857_rp singh.png", audio: "songs/1857_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Approach       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/approach_rp singh.png", audio: "songs/approach_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "BFF       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bff_rp singh.png", audio: "songs/bff_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Do Cheez       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/do cheez_rp singh.png", audio: "songs/do cheez_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Famous       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/famous_rp singh.png", audio: "songs/famous_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Govinda       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/govinda_rp singh.png", audio: "songs/govinda_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Jahaaj       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jahaaj_rp singh.png", audio: "songs/jahaaj_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "MI AMOR       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mi amor_rp singh.png", audio: "songs/mi amor_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Victor       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/victor_rp singh.png", audio: "songs/victor_rp singh.mp3", searchString: "Victer"},//song3\
        ]
    },
    {
        id: 3,
        title: "Eminem Hits",
        artist: "Eminem",
        cover: "covers/eminem.jpg",
        songs: [
            
            //mislenous songs
            { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//27
            { title: "Tu Hai Kaha      ", artist: "A-U-R", cover: "covers/tu hai kaha.jpg", audio: "songs/tu hai kaha.mp3", searchString: "Victer"},//28
            { title: "Sweater      ", artist: "Preet Hundal", cover: "covers/sweater.jpg", audio: "songs/sweater.mp3", searchString: "Victer"},//29
            { title: "Zindagi      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/zindagi sabba.jpg", audio: "songs/zindagi sabba.mp3", searchString: "sabba k gane"},//30
            { title: "Medal      ", artist: "Chandra Brar", cover: "covers/medal.jpg", audio: "songs/medal.mp3", searchString: "Victer"},//31
            { title: "Ishq hoya      ", artist: "Jyoti Nooran, Arjit Srivastav", cover: "covers/ishq hoya.jpg", audio: "songs/ishq hoya.mp3", searchString: "Victer"},//32
            { title: "Illegal      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/illegal dhanda.jpg", audio: "songs/illegal dhanda.mp3", searchString: "Victer"},//33
            { title: "Maada Time      ", artist: "Sabba",artistPhoto: "covers/Sabba.png", cover: "covers/maada time_sabba.png", audio: "songs/maada time.mp3", searchString: "sabba k gane"},//34
            { title: "Dil Tu Jaan Tu      ", artist: "Guranzar", cover: "covers/dil tu jaan tu.jpg", audio: "songs/dil tu jaan tu.mp3", searchString: "Victer"},//35
            { title: "Victory Anthem      ", artist: "Khushi-Saini", cover: "covers/victory anthem.jpg", audio: "songs/victory anthem.mp3", searchString: "Victer"},//36
            { title: "Tareyan Do Loh      ", artist: "Harsh Bilga", cover: "covers/tareyan di loh.jpg", audio: "songs/tareyan di loh.mp3", searchString: "Victer"},//37
            { title: "Khidki      ", artist: "Rachit Shrivatav", cover: "covers/khidki.webp", audio: "songs/khidki.mp3", searchString: "Victer"},//38
            { title: "Long Time No See      ", artist: "A-U-R", cover: "covers/long time no see.jpg", audio: "songs/long time no see.mp3", searchString: "Victer"},//39
            { title: "That Girl      ", artist: "Amrinder Gill",artistPhoto: "covers/Amrinder Gill.png", cover: "covers/that girl_amrinder gill.png", audio: "songs/that girl_amrinder gill.mp3", searchString: "Victer"},//39
            { title: "Khabbi Seat      ", artist: "Ammy Virk", cover: "covers/khabbi seat_ammy virk.png", audio: "songs/khabbi seat_ammy virk.mp3", searchString: "Victer"},//39
            { title: "Ikk Number      ", artist: "Gurnam Bhullar", cover: "covers/ik number_gurnam bhullar.png", audio: "songs/ik number_gurnam bhullar.mp3", searchString: "Victer"},//39
            { title: "Filter      ", artist: "Gulab Sidhu", cover: "covers/filter_gulab sidhu.png", audio: "songs/filter_gulab sidhu.mp3", searchString: "Victer"},//39
            { title: "Patti Ton Patiala      ", artist: "Harkirat Sangha", cover: "covers/patti to patiala_harkirat sangha.png", audio: "songs/patti to patiala_harkirat sangha.mp3", searchString: "Victer"},//39
            //Karan Aujla
            { title: "Softly      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/softly_karan.png", audio: "songs/softly_karan.mp3", searchString: "Victer"},//65
            { title: "On Top      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/on top_karan.png", audio: "songs/on top_karan.mp3", searchString: "Victer"},//66
            { title: "WYTB      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/wytb_karan.png", audio: "songs/wytb_karan.mp3", searchString: "Victer"},//67
            { title: "52 Bars      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/52 bars_karan.png", audio: "songs/52 bars_karan.mp3", searchString: "Victer"},//68
            { title: "Jee Ni Lagda      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/jee ni lagda_karan.png", audio: "songs/jee ni lagda_karan.mp3", searchString: "Victer"},//69
            { title: "Player      ", artist: "Karan Aujla, Badshah",artistPhoto: "covers/Karan Aujla.png", cover: "covers/player_karan.png", audio: "songs/player_karan.mp3"},//70
            { title: "Chauffeur      ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chauffeur_diljit.png", audio: "songs/chauffeur_diljjt.mp3", searchString: "Victer"},//71
            { title: "White Brown Black      ", artist: "Karan Aujla, Avvy Sra",artistPhoto: "covers/Karan Aujla.png", cover: "covers/white brown black_karan_avvy.png", audio: "songs/white brown black_karan_avvy.mp3", searchString: "Victer"},//72
            { title: "Tauba Tauba      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/tauba tauba_karan.png", audio: "songs/tauba tauba_karan.mp3", searchString: "Victer"},//73
            { title: "Chitta Kurta      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/chitta kurta_karan.png", audio: "songs/chitta kurta_karan.mp3", searchString: "Victer"},//74
            { title: "Mexico      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/mexico_karan.png", audio: "songs/mexico_karan.mp3", searchString: "Victer"},//75
            { title: "God Damn      ", artist: "Karan Aujla   ",artistPhoto: "covers/Karan Aujla.png", cover: "covers/god damn_karan.png", audio: "songs/god damn_karan.mp3", searchString: "Victer"},//76

                    //Diljit Dosanjh
            { title: "Lover        ", artist: "Diljit Dosanjh     ", artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lover_diljit.png", audio: "songs/lover_diljit.mp3", searchString: "diljit k gane lover  love diljit lovr lvr diljit diljeet diljjt dil jit lvr"},//40
            { title: "Case        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/case_diljit.png", audio: "songs/case_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jitdosanjh doshanjh dosnjh "},//41
            { title: "Ishq Di Baajiyaan        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq di baajiyaan_diljit.png", audio: "songs/ishq di baajiyaan_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//42
            { title: "Love Ya        ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lova ya_diljit.png", audio: "songs/love ya_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//43
            { title: "Lalkara         ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/lalkara_diljit.png", audio: "songs/lalkara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//44
            { title: "Tu Kya Jaane        ", artist: "Yashika Sikka, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/tu kya jaane_diljit.png", audio: "songs/tu kya jaane_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//45
            { title: "Bol Mohabbat        ", artist: "AR Rehman, Kailash Kher,Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bol mohabbat_diljit.png", audio: "songs/bol mohabbat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//46
            { title: "Vida Karo        ", artist: "Arijit Singh,Diljjt",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/vida karo_diljit.png", audio: "songs/vida karo_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//47
            { title: "Panga        ", artist: "Diljit Dosanjh, Yo Yo Honey Singh",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/panga_diljit_yoyo.png", audio: "songs/panga_diljjt_yoyo.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//48
            { title: "Ishq Mitaye        ", artist: "AR Rehman, Diljit",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/ishq mitaye_diljit.png", audio: "songs/ishq mitaye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//49
            { title: "5 Tara        ", artist: " Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/5 tara_diljit.png", audio: "songs/5 tara_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//50
            { title: "Do You Know       ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/do you know_diljit.png", audio: "songs/do you know_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//51
            { title: "G.O.A.T      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/goat_diljit.png", audio: "songs/goat_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//52
            { title: "Clash      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/clash_diljit.png", audio: "songs/clash_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//53
            { title: "Muchh      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muchh_diljit.png", audio: "songs/muchh_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//54
            { title: "High End      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/high end_diljit.png", audio: "songs/high end_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//55
            { title: "Naram Kalja      ", artist: "Diljjt Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/naram kalja_diljit.png", audio: "songs/naram kalja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//56
            { title: "Baaja      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/bajja_diljit.png", audio: "songs/bajja_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//57
            { title: "Muhammad Ali      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/muhammad ali_diljit.png", audio: "songs/muhammad ali_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//58
            { title: "El Sueno      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/el sueno_diljit.png", audio: "songs/el sueno_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//59
            { title: "Born To Shine      ", artist: "Diljit Dosanjb",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/born to shine_diljit.png", audio: "songs/born to shine_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//60
            { title: "Peaches      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/peaches_diljit.png", audio: "songs/peaches_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//61
            { title: "What Ve      ", artist: "Diljjt Dosanjh,Nimrat Khaira",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/what ve_diljit.png", audio: "songs/what ve_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//62
            { title: "Hass Hass      ", artist: "Sia,Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/hass hass_diljit.png", audio: "songs/hass hass_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//63
            { title: "Patiala Peg      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/patiala peg_diljit.png", audio: "songs/patiala peg_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64
            { title: "Mombattiye      ", artist: "Diljit Dosanjh     ",artistPhoto: "covers/Diljit Dosanjh.png", cover: "covers/mombattiye_diljit.png", audio: "songs/mombattiye_diljit.mp3", searchString: "diljit k gane diljit diljeet diljjt dil jit "},//64

            { title: "Jo Tum Mere Ho      ", artist: "Anuv Jain",artistPhoto: "covers/Anuv Jain.png", cover: "covers/track1.jpg", audio: "songs/jo tum mere ho.mp3", searchString: "anuv jain songs anuv jain k gane anuv jain anuv jo tum mere ho"},//song1
            { title: "Fly Karke      ", artist: "SABBA, Jasmeen",artistPhoto: "covers/Sabba.png", cover: "covers/fly karke_sabba.png", audio: "songs/fly krke.mp3", searchString: "fly krke fly fli krke karke flai krke song sabba song sabba k gane"},//song2
            
            //Arjan Dhillon-Glorious and more
            { title: "Youth Flow      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/youth flow.mp3", searchString: "arjan songs arjan jawani song arjan"},//song4
            { title: "Glorious      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/glorious.mp3", searchString: "arjan songs glorious glowrious glorius gloris"},//song5
            { title: "Maavan      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/maavan.mp3", searchString: "arjan songs mava maanvan mava maava maa maa song arjan"},//song6
            { title: "Back To Sikhi      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/back to sikhi.mp3", searchString: "arjan songs pagg back to siki sikhi sikki"},//song7
            { title: "Biography      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/biography.mp3", searchString: "arjan songs bigraphy bigrafi biographi "},//song8
            { title: "Tyar      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/Chobbar.jpg", audio: "songs/tyar.mp3", searchString: "arjan songs tyaar tyar ready tyar hi ni hoye"},//song9
            
            { title: "Heer      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/heer_arjan dhillon.png", audio: "songs/heer_arjan dhillon.mp3", searchString: "arjan songs"},//song9
            { title: "Punjab Intro      ", artist: "Arjan Dhillon    ",artistPhoto: "covers/Arjan Dhillon.png", cover: "covers/punjab intro_arjan dhillon.png", audio: "songs/punjab intro_arjan dhillon.mp3", searchString: "arjan songs"},//song9
            
            
            
            //Dhanda
            { title: "Up To You      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/up to you.jpg", audio: "songs/up to you.mp3", searchString: "Victer"},//song10
            { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala",artistPhoto: "covers/Dhanda Nyoliwala.png", cover: "covers/russian bandana.jpg", audio: "songs/russian bandana.mp3", searchString: "Victer"},//song11
            
            { title: "Ishq      ", artist: "Faheem Abdullah,Rauhan Malik", cover: "covers/ishq.jpg", audio: "songs/ishq.mp3", searchString: "Victer"},//song12
            
            //The Beatles-Rubber Soul
            { title: "If I Needed Someone      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/if i needed someone.mp3", searchString: "Victer"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/norwegian wood.mp3", searchString: "Victer"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/you won't see me.mp3", searchString: "Victer"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/think for yourself.mp3", searchString: "Victer"},//16
            { title: "The Word      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/the word.mp3", searchString: "Victer"},//17
            { title: "Michelle      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/michelle.mp3", searchString: "Victer"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/drive my car.mp3", searchString: "Victer"},//19
            { title: "Girl      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/girl.mp3", searchString: "Victer"},//20
            { title: "I'm Looking Through You",artistPhoto: "covers/The Beatles.png      ", artist: "The Beatles    ", cover: "covers/rubber soul.jpg", audio: "songs/i'm looking through you.mp3", searchString: "Victer"},//21
            { title: "In My Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/In My Life.mp3", searchString: "Victer"},//22
            { title: "Wait      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/wait.mp3", searchString: "Victer"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/run for your life.mp3", searchString: "Victer"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/nowhere man.mp3", searchString: "Victer"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",artistPhoto: "covers/The Beatles.png", cover: "covers/rubber soul.jpg", audio: "songs/what goes on.mp3", searchString: "Victer"},//26
            



            //Hustinder
            { title: "Ik Mutiyaar Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/ik mutiyar hundi si_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hundi Si Gareebi      ", artist: "Hustinder, Black",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/hundi si gareebi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Bhuleya Ki Ae      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/bhuleya ki ae_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Dollar Wargiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dollar wargiye_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Dullda Glass      ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/dullda glass_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gal Koun Karda       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan 2_hustinder.png", audio: "songs/gal koun karda_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gaza Patti       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/gaza patti_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Gumnaam Pyaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/gumnaam pyaar_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hasde Hi Rehndeya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/hasde hi rehndeya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hathan Utte Duniya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/hathan utte duniya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Hopes       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/hopes_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Jethi Dhee       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/jethi dhee_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Kharcha Kardange       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/kharcha kardange_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Laag Daat       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/laag daat_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Maa Kehndi Hundi Si       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/maa kehndi hundi si_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Man Ton Lehgi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/man ton lehgi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Mittran De Circle       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/mittran de circle_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Nachdi Ton       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/nachdi ton.mp3", searchString: "Victer"},//song3
            { title: "Paasport Size Tasveer       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/passport size tasveer_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Praandi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/praandi_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Pyaar Hoya       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers//sadiyan gallan 2_hustinder.png", audio: "songs/pyaar hoya_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Rabb Di Aulad       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rabb di aulad_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Raonak       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/raonak_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Rullde Firde Aan       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/rullde firde aan_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Saade Warge       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/saadiyan gallan 3_hustinder.png", audio: "songs/saade warge_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Surga Nu Rah       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/surga nu rah_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Tera Mera Nata       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/tera mera nata_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Teri Deed       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/teri deed_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Tu Takkri       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/tu takkri_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Ucheyan Gharan Di Jaaiye       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "ucheyan gharan diye jaaiye.mp3", searchString: "Victer"},//song3
            { title: "Velly Yaar       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/mahol_hustinder.png", audio: "songs/velly yaar_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Watching You       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/track3.jpg", audio: "songs/watching you_hustinder.mp3", searchString: "Victer"},//song3
            { title: "Yari Tod Layi       ", artist: "Hustinder     ",artistPhoto: "covers/Hustinder.png", cover: "covers/sadiyan gallan_hustinder.png", audio: "songs/yari tod layi_hustinder.mp3", searchString: "Victer"},//song3\



            //RP Singh
            {title: "Sexy       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sexy_rp singh.png", audio: "songs/sexy_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Pencil       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pencil_rp singh.png", audio: "songs/pencil_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sheesha       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sheesha_rp singh.png", audio: "songs/sheesha_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Rap God       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/rapgod_rp singh.png", audio: "songs/rapgod_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Mcoca       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mcoca_rp singh.png", audio: "songs/mcoca_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Banger       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/banger_rp singh.png", audio: "songs/banger_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Azad Flow       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/azad flow_rp singh.png", audio: "songs/azad flow_rp singh.mp3", searchString: "Victer"},//song3\

            {title: "Bliss       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bliss_rp singh.png", audio: "songs/bliss_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Power       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/power_rp singh.png", audio: "songs/power_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Meeh       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/meeh_rp singh.png", audio: "songs/meeh_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Chehre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/chehre_rp singh.png", audio: "songs/chehre_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "3 AM       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/3 am_rp singh.png", audio: "songs/3 am_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Aadhi Si Raat       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/aadhi si raat_rp singh.png", audio: "songs/aadhi si raat_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Jigre       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jigre_rp singh.png", audio: "songs/jigre_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Look Book       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/look book_rp singh.png", audio: "songs/look book_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Maal       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/maal_rp singh.png", audio: "songs/maal_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "No Lve       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/no love_rp singh.png", audio: "songs/no love_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Pataka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/pataka_rp singh.png", audio: "songs/pataka_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sapne       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sapne_rp singh.png", audio: "songs/sapne_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Tehalka       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/tehalka_rp singh.png", audio: "songs/tehalka_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Stop RP       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/stop rp_rp singh.png", audio: "songs/stop rp_rp singh.mp3", searchString: "Victer"},//song3

            {title: "Toxic       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/toxic_rp singh.png", audio: "songs/toxic_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Shiva       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/shiva_rp singh.png", audio: "songs/shiva_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sneeze       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sneeze_rp singh.png", audio: "songs/sneeze_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "Sarpanchi       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/sarpanchi_rp singh.png", audio: "songs/sarpanchi_rp singh.mp3", searchString: "Victer"},//song3\
            {title: "If You Know You Know       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/if you know you know_rp singh.png", audio: "songs/if you know you know_rp singh.mp3", searchString: "Victer" },//song3\

            {title: "7 Birth       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/7 birth_rp singh.png", audio: "songs/7 birth_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "1857       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/1857_rp singh.png", audio: "songs/1857_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Approach       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/approach_rp singh.png", audio: "songs/approach_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "BFF       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/bff_rp singh.png", audio: "songs/bff_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Do Cheez       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/do cheez_rp singh.png", audio: "songs/do cheez_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Famous       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/famous_rp singh.png", audio: "songs/famous_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Govinda       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/govinda_rp singh.png", audio: "songs/govinda_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Jahaaj       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/jahaaj_rp singh.png", audio: "songs/jahaaj_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "MI AMOR       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/mi amor_rp singh.png", audio: "songs/mi amor_rp singh.mp3", searchString: "Victer" },//song3\
            {title: "Victor       ", artist: "RP Singh    ",artistPhoto: "covers/RP Singh.png", cover: "covers/victor_rp singh.png", audio: "songs/victor_rp singh.mp3", searchString: "Victer"},//song3\
        ]
    },
    {
        id: 4,
        title: "The Beatles    ",
        artist: "The Beatles    ",
        cover: "covers/The Beatles.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3", cover: "covers/rubber soul.jpg"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3", cover: "covers/rubber soul.jpg"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3", cover: "covers/rubber soul.jpg"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3", cover: "covers/rubber soul.jpg"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3", cover: "covers/rubber soul.jpg"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3", cover: "covers/rubber soul.jpg"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3", cover: "covers/rubber soul.jpg"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3", cover: "covers/rubber soul.jpg"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3", cover: "covers/rubber soul.jpg"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3", cover: "covers/rubber soul.jpg"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3", cover: "covers/rubber soul.jpg"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3", cover: "covers/rubber soul.jpg"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3", cover: "covers/rubber soul.jpg"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3", cover: "covers/rubber soul.jpg"},//26
        ]
    },

    {
        id: 5,
        title: "Workout Music",
        artist: "Eminem,Dhanda,RP..",
        cover: "covers/workout playlist.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
        ]
    },
    {
        id: 6,
        title: "Sleep",
        artist: "Billie Eilish, Anuv Jain...",
        cover: "covers/sleep playlist.png",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3"},//26
            { title: "Till I Collapse      ", artist: "Eminem", audio: "songs/till-i-collapse.mp3" },
            { title: "Lose Yourself      ", artist: "Eminem", audio: "songs/lose-yourself.mp3" }
        ]
    },
    {
        id: 7,
        title: "Rubber Soul",
        artist: "The Bealtes",
        cover: "covers/rubber soul.jpg",
        songs: [
            { title: "If I Needed Someone      ", artist: "The Beatles    ",audio: "songs/if i needed someone.mp3", cover: "covers/rubber soul.jpg"},//13
            { title: "Norwegian Wood      ", artist: "The Beatles    ",audio: "songs/norwegian wood.mp3", cover: "covers/rubber soul.jpg"},//14
            { title: "You Won't See Me      ", artist: "The Beatles    ",audio: "songs/you won't see me.mp3", cover: "covers/rubber soul.jpg"},//15
            { title: "Think For Yourself      ", artist: "The Beatles    ",audio: "songs/think for yourself.mp3", cover: "covers/rubber soul.jpg"},//16
            { title: "The Word      ", artist: "The Beatles    ",audio: "songs/the word.mp3", cover: "covers/rubber soul.jpg"},//17
            { title: "Michelle      ", artist: "The Beatles    ",audio: "songs/michelle.mp3", cover: "covers/rubber soul.jpg"},//18
            { title: "Drive My Car      ", artist: "The Beatles    ",audio: "songs/drive my car.mp3", cover: "covers/rubber soul.jpg"},//19
            { title: "Girl      ", artist: "The Beatles    ", audio: "songs/girl.mp3", cover: "covers/rubber soul.jpg"},//20
            { title: "I'm Looking Through You", audio: "songs/i'm looking through you.mp3", cover: "covers/rubber soul.jpg"},//21
            { title: "In My Life      ", artist: "The Beatles    ",audio: "songs/In My Life.mp3", cover: "covers/rubber soul.jpg"},//22
            { title: "Wait      ", artist: "The Beatles    ",audio: "songs/wait.mp3", cover: "covers/rubber soul.jpg"},//23
            { title: "Run For Your Life      ", artist: "The Beatles    ",audio: "songs/run for your life.mp3", cover: "covers/rubber soul.jpg"},//24
            { title: "Nowhere Man      ", artist: "The Beatles    ",audio: "songs/nowhere man.mp3", cover: "covers/rubber soul.jpg"},//25
            { title: "What Goes On      ", artist: "The Beatles    ",audio: "songs/what goes on.mp3", cover: "covers/rubber soul.jpg"},//26
            
        ]
    },

    {
        id: 8,
        title: "Haryanvi Hits",
        artist: "Varius Artist",
        cover: "covers/Haryanvi Hits.png",
        songs: [
            { title: "Russian Bandana      ", artist: "Dhanda Nyoliwala",audio: "songs/russian bandana.mp3", cover: "covers/russian bandana.jpg"},//13
            { title: "Illegal      ", artist: "Dhanda Nyoliwala",audio: "songs/illegal dhanda.mp3", cover: "covers/illegal dhanda.jpg"},//14
            { title: "Up To You      ", artist: "Dhanda Nyoliwala",audio: "songs/up to you.mp3", cover: "covers/up to you.jpg"},//15
            
            
        ]
    }
];
//...................................................................................................................................................................................
const allSongs = document.querySelector(".all");
const music = document.querySelector(".music");
const recoPlay = document.querySelectorAll(".recommended-item");
const trendPlay = document.querySelectorAll(".trending-item");

allSongs.addEventListener("click",()=>{
    const selectedPlaylist = playlistsMain[0];

    // Show the selected playlist and hide the library
    mainOpenPlayContainer.style.display = "block";
    mainPlaySection.style.display = "none";
    // Update browser history state
    history.pushState({ page: "playlist" }, null, "#playlist");

    // Display the playlist details
    displayAllSongs(selectedPlaylist);
});



recoPlay.forEach(play =>{
    play.addEventListener("click",()=>{
        const selectedPlaylist = playlistsMain[1];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayAllSongs(selectedPlaylist);
    });
})

trendPlay.forEach(play =>{
    play.addEventListener("click",()=>{
        const selectedPlaylist = playlistsMain[2];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayAllSongs(selectedPlaylist);
    });
})
music.addEventListener("click",()=>{
    const selectedPlaylist = playlistsMain[2];

    // Show the selected playlist and hide the library
    mainOpenPlayContainer.style.display = "block";
    mainPlaySection.style.display = "none";
    // Update browser history state
    history.pushState({ page: "playlist" }, null, "#playlist");

    // Display the playlist details
    displayAllSongs(selectedPlaylist);
})
// music.addEventListener("click",()=>{
//     document.querySelector(".all").click();
// })

// Function to display the selected playlist's details
function displayAllSongs(playList) {
    mainOpenPlayContainer.style.display === "block"
    // mainOpenPlayContainer.innerHTML = '';
    mainOpenPlayContainer.style.height = "auto";
    mainOpenPlayContainer.style.pdadding = "auto";
    mainOpenPlayContainer.style.margin = "auto";


    const mainPlayContainer = mainOpenPlayContainer;
    mainPlayContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const mainPlayHeader = document.createElement("div");
    mainPlayHeader.classList.add("playlist-results");

   
    

    // Create a list of songs for the selected playlist
    playList.songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        //song cover
        const songCover = document.createElement("img");
        songCover.setAttribute("data-type", "song-cover");
        songCover.src = song.cover;
        songDiv.appendChild(songCover);

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "download");
        // downLoad.textContent = "Download";
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

        // Play button for each song
        const playButton = document.createElement("button");
        playButton.setAttribute("data-type", "play-button");
        playButton.textContent = "Play";
        playButton.onclick = () => playSong(song.audio);
        songDiv.appendChild(playButton);

        mainPlayHeader.appendChild(songDiv);
    });
    mainPlayContainer.appendChild(mainPlayHeader);
}


//...................................................................................................................................................................................
//featured playlists

mainPlayItems.forEach((mainPlayItem, index) => {
    mainPlayItem.addEventListener("click", () => {
        const selectedPlaylist = playlistsMain[index];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";

        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayMainPlaylist(selectedPlaylist);
    });
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "playlist") {
        // If the user navigates back to the playlist state
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
    } else {
        // Default state: show the library
        mainOpenPlayContainer.style.display = "none";
        mainPlaySection.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "library" }, null, "#library");
});


// Function to display the selected playlist's details
function displayMainPlaylist(playList) {
    mainOpenPlayContainer.style.display === "block"
    // mainOpenPlayContainer.innerHTML = '';
    mainOpenPlayContainer.style.height = "auto";
    mainOpenPlayContainer.style.pdadding = "auto";
    mainOpenPlayContainer.style.margin = "auto";


    const mainPlayContainer = mainOpenPlayContainer;
    mainPlayContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const mainPlayHeader = document.createElement("div");
    mainPlayHeader.classList.add("playlist-results");

    const mainPlayImgContainer = document.createElement("div");
    mainPlayImgContainer.classList.add("playlist-img-container");
    mainPlayHeader.appendChild(mainPlayImgContainer);


    const mainPlayImage = document.createElement("img");
    mainPlayImage.src = playList.cover;
    mainPlayImage.alt = playList.title;
    mainPlayImgContainer.appendChild(mainPlayImage);

    const mainPlayTitle = document.createElement("h1");
    mainPlayTitle.textContent = playList.title;
    mainPlayImgContainer.appendChild(mainPlayTitle);

    const mainPlayArtist = document.createElement("p");
    mainPlayArtist.textContent = `Artist: ${playList.artist}`;
    mainPlayImgContainer.appendChild(mainPlayArtist);

    

    // Create a list of songs for the selected playlist
    playList.songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        //song cover
        const songCover = document.createElement("img");
        songCover.setAttribute("data-type", "song-cover");
        songCover.src = song.cover;
        songDiv.appendChild(songCover);

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "download");
        // downLoad.backgroundImage = url("covers/download logo.png");
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

        // Play button for each song
        const playButton = document.createElement("button");
        playButton.setAttribute("data-type", "play-button");
        playButton.textContent = "Play";
        playButton.onclick = () => playSong(song.audio);
        songDiv.appendChild(playButton);

        mainPlayHeader.appendChild(songDiv);
    });
    mainPlayContainer.appendChild(mainPlayHeader);
}

const showLibrary = document.querySelector(".show-library");




// Toggle visibility when the home button is clicked
homeButton.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    //for mobiles
    if ((screenWidth<768) && ((songResults.style.display === "block") || (mainOpenPlayContainer.style.display === "block") || (sidebar1.style.display="block") || (showLyrics.style.display="block"))) {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout
        main.style.flex="0 0 100%";
        main.style.display="block";
        showLyrics.style.display="none";
        sidebar1.style.flex="0 0 0";
        sidebar1.style.display="none";
        
        

        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        
        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        
        defaultContent.style.display = "block";
    }


    //for desktop
    if ((screenWidth>1024) && ((songResults.style.display === "block") || (mainOpenPlayContainer.style.display === "block") || (sidebar1.style.display="block") || (showLyrics.style.display="block"))) {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout

        main.style.display="block";
        showLyrics.style.display="none";
        // sidebar1.style.display="none";
        // sidebar1.style.flex="0 0 0";
        

        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        // main.style.flex="0 0 100%";
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        
        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        
        defaultContent.style.display = "block";
    }

});




