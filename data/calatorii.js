window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  topic: "calatorii",
  title_ro: "Călătorii",
  units: [
    {
      id: "calatorii-u1",
      title_ro: "Aeroport: check-in și control de securitate",
      level: 1,
      chunks: [
        { en: "Hello, I'd like to check in, please.", ro: "Bună ziua, aș vrea să fac check-in-ul, vă rog.", note: "" },
        { en: "Here's my passport.", ro: "Poftiți pașaportul.", note: "„Here's...” e forma vorbită pentru a da ceva cuiva." },
        { en: "I have one bag to check in.", ro: "Am un bagaj de predat.", note: "„Check in a bag” = a preda bagajul la cală." },
        { en: "Just hand luggage.", ro: "Doar bagaj de mână.", note: "" },
        { en: "Can I have a window seat?", ro: "Pot să primesc un loc la geam?", note: "" },
        { en: "An aisle seat, please.", ro: "Un loc la culoar, vă rog.", note: "„Aisle” se pronunță „ail”." },
        { en: "Is the flight on time?", ro: "Zborul este la timp?", note: "" },
        { en: "Which gate is it?", ro: "La ce poartă este?", note: "" },
        { en: "What time does boarding start?", ro: "La ce oră începe îmbarcarea?", note: "" },
        { en: "Where is security?", ro: "Unde este controlul de securitate?", note: "" },
        { en: "Do I need to take my laptop out?", ro: "Trebuie să scot laptopul?", note: "" },
        { en: "Shoes off as well?", ro: "Și pantofii trebuie scoși?", note: "" },
        { en: "I don't have any liquids.", ro: "Nu am lichide.", note: "" },
        { en: "Sorry, it's my belt.", ro: "Scuze, e de la curea.", note: "Util când sună detectorul." },
        { en: "Is my bag overweight?", ro: "Bagajul meu are greutate în plus?", note: "" },
        { en: "How much is the extra charge?", ro: "Cât costă taxa suplimentară?", note: "" },
        { en: "Can I take this on board?", ro: "Pot să iau asta în cabină?", note: "„On board” = la bordul avionului." },
        { en: "Where's the departures board?", ro: "Unde este panoul cu plecări?", note: "" },
        { en: "I'm flying to Frankfurt.", ro: "Zbor spre Frankfurt.", note: "" },
        { en: "Thanks, have a nice day.", ro: "Mulțumesc, o zi bună.", note: "" }
      ],
      patterns: [
        { frame: "Can I have ___, please?", ro: "Pot să primesc ___, vă rog?",
          fills: [
            { en: "a window seat", ro: "un loc la geam" },
            { en: "an aisle seat", ro: "un loc la culoar" },
            { en: "my boarding pass", ro: "cartea de îmbarcare" },
            { en: "a luggage tag", ro: "o etichetă de bagaj" },
            { en: "a plastic bag", ro: "o pungă de plastic" },
            { en: "a seat near the front", ro: "un loc în față" }
          ] },
        { frame: "Where is ___?", ro: "Unde este ___?",
          fills: [
            { en: "gate twelve", ro: "poarta doisprezece" },
            { en: "the check-in desk", ro: "ghișeul de check-in" },
            { en: "passport control", ro: "controlul pașapoartelor" },
            { en: "the duty-free shop", ro: "magazinul duty-free" },
            { en: "the toilet", ro: "toaleta" },
            { en: "the lift", ro: "liftul" }
          ] }
      ],
      dialogues: [
        { title_ro: "La ghișeul de check-in", lines: [
          { who: "A", en: "Good morning. Where are you flying today?", ro: "Bună dimineața. Unde zburați astăzi?" },
          { who: "B", en: "To Munich. Here's my passport.", ro: "La München. Poftiți pașaportul." },
          { who: "A", en: "Thank you. Any bags to check in?", ro: "Mulțumesc. Aveți bagaje de predat?" },
          { who: "B", en: "Yes, one suitcase.", ro: "Da, o valiză." },
          { who: "A", en: "Please put it on the scale.", ro: "Vă rog să o puneți pe cântar." },
          { who: "B", en: "Sure. Can I have an aisle seat?", ro: "Sigur. Pot să primesc un loc la culoar?" },
          { who: "A", en: "No problem. Boarding is at 9:40, gate 7.", ro: "Nicio problemă. Îmbarcarea e la 9:40, poarta 7." },
          { who: "B", en: "Great, thank you.", ro: "Perfect, mulțumesc." }
        ] },
        { title_ro: "La controlul de securitate", lines: [
          { who: "A", en: "Any laptops or liquids in your bag?", ro: "Aveți laptopuri sau lichide în bagaj?" },
          { who: "B", en: "Just a laptop. No liquids.", ro: "Doar un laptop. Fără lichide." },
          { who: "A", en: "Take it out and put it in a tray.", ro: "Scoateți-l și puneți-l într-o tăviță." },
          { who: "B", en: "Okay. Do I need to take my shoes off?", ro: "Bine. Trebuie să-mi scot pantofii?" },
          { who: "A", en: "No, that's fine. Walk through, please.", ro: "Nu, e în regulă. Treceți, vă rog." },
          { who: "B", en: "Oh, sorry. It's my watch.", ro: "Of, scuze. E de la ceas." }
        ] }
      ],
      prompts: [
        { q_en: "Describe what you do at the airport before a flight.", q_ro: "Descrie ce faci la aeroport înainte de zbor.",
          helpers: ["First, I check in ...", "Then I go through security ...", "After that, I look for my gate ...", "Usually I ..."] },
        { q_en: "Do you prefer a window seat or an aisle seat? Why?", q_ro: "Preferi loc la geam sau la culoar? De ce?",
          helpers: ["I prefer ...", "because I like ...", "On long flights ...", "It's easier to ..."] },
        { q_en: "What do you usually take in your hand luggage?", q_ro: "Ce iei de obicei în bagajul de mână?",
          helpers: ["I always take ...", "I never take ...", "For work, I need ...", "Also, ..."] }
      ]
    },
    {
      id: "calatorii-u2",
      title_ro: "În avion și la controlul pașapoartelor",
      level: 1,
      chunks: [
        { en: "Excuse me, I think that's my seat.", ro: "Scuzați-mă, cred că acela e locul meu.", note: "" },
        { en: "Can I get past, please?", ro: "Pot să trec, vă rog?", note: "Când vrei să ieși de pe rând." },
        { en: "Is there space for my bag?", ro: "Mai e loc pentru geanta mea?", note: "" },
        { en: "Could I have some water, please?", ro: "Aș putea primi puțină apă, vă rog?", note: "" },
        { en: "Chicken, please.", ro: "Pui, vă rog.", note: "Răspuns scurt la „Chicken or pasta?”." },
        { en: "How much is a coffee?", ro: "Cât costă o cafea?", note: "" },
        { en: "Can I pay by card?", ro: "Pot plăti cu cardul?", note: "" },
        { en: "Do you mind if I recline?", ro: "Vă deranjează dacă las scaunul pe spate?", note: "„Recline” = a înclina scaunul." },
        { en: "I feel a bit cold.", ro: "Mi-e puțin frig.", note: "" },
        { en: "How long is the flight?", ro: "Cât durează zborul?", note: "" },
        { en: "I'm here on business.", ro: "Sunt aici în interes de serviciu.", note: "Răspuns tipic la controlul pașapoartelor." },
        { en: "I'm here on holiday.", ro: "Sunt aici în vacanță.", note: "" },
        { en: "I'm staying for five days.", ro: "Stau cinci zile.", note: "" },
        { en: "I'm staying at a hotel in the centre.", ro: "Stau la un hotel în centru.", note: "" },
        { en: "This is my return ticket.", ro: "Acesta e biletul meu de întoarcere.", note: "" },
        { en: "Nothing to declare.", ro: "Nimic de declarat.", note: "La vamă." },
        { en: "Where's the baggage reclaim?", ro: "Unde este zona de preluare a bagajelor?", note: "„Baggage reclaim” = banda de bagaje." },
        { en: "Which belt is it?", ro: "Care bandă este?", note: "" },
        { en: "Where can I get a taxi?", ro: "De unde pot lua un taxi?", note: "" },
        { en: "I'm going to a trade fair.", ro: "Merg la un târg comercial.", note: "" }
      ],
      patterns: [
        { frame: "I'm here ___.", ro: "Sunt aici ___.",
          fills: [
            { en: "on business", ro: "în interes de serviciu" },
            { en: "on holiday", ro: "în vacanță" },
            { en: "for a training course", ro: "pentru un curs de formare" },
            { en: "for a trade fair", ro: "pentru un târg" },
            { en: "to visit friends", ro: "în vizită la prieteni" },
            { en: "for a meeting", ro: "pentru o întâlnire" }
          ] },
        { frame: "Could I have ___, please?", ro: "Aș putea primi ___, vă rog?",
          fills: [
            { en: "a blanket", ro: "o pătură" },
            { en: "some water", ro: "puțină apă" },
            { en: "a cup of tea", ro: "o ceașcă de ceai" },
            { en: "another pen", ro: "încă un pix" },
            { en: "the landing card", ro: "formularul de intrare" },
            { en: "a vegetarian meal", ro: "o masă vegetariană" }
          ] }
      ],
      dialogues: [
        { title_ro: "În avion", lines: [
          { who: "A", en: "Would you like something to drink?", ro: "Doriți ceva de băut?" },
          { who: "B", en: "Yes, a coffee, please.", ro: "Da, o cafea, vă rog." },
          { who: "A", en: "Milk and sugar?", ro: "Cu lapte și zahăr?" },
          { who: "B", en: "Just milk, thanks. How much is it?", ro: "Doar lapte, mulțumesc. Cât costă?" },
          { who: "A", en: "Three euros.", ro: "Trei euro." },
          { who: "B", en: "Can I pay by card?", ro: "Pot plăti cu cardul?" }
        ] },
        { title_ro: "La controlul pașapoartelor", lines: [
          { who: "A", en: "Passport, please. What's the purpose of your visit?", ro: "Pașaportul, vă rog. Care e scopul vizitei?" },
          { who: "B", en: "I'm here on business. A trade fair.", ro: "Sunt aici în interes de serviciu. Un târg." },
          { who: "A", en: "How long are you staying?", ro: "Cât timp stați?" },
          { who: "B", en: "Four days. Until Friday.", ro: "Patru zile. Până vineri." },
          { who: "A", en: "Where are you staying?", ro: "Unde stați?" },
          { who: "B", en: "At the Park Hotel, near the exhibition centre.", ro: "La Park Hotel, lângă centrul expozițional." },
          { who: "A", en: "Okay. Enjoy your stay.", ro: "Bine. Ședere plăcută." },
          { who: "B", en: "Thank you.", ro: "Mulțumesc." }
        ] }
      ],
      prompts: [
        { q_en: "Tell me about your last flight.", q_ro: "Povestește-mi despre ultimul tău zbor.",
          helpers: ["I flew to ...", "The flight was ...", "On the plane, I ...", "When I arrived, ..."] },
        { q_en: "Answer the officer: why are you here and for how long?", q_ro: "Răspunde ofițerului: de ce ești aici și cât timp stai?",
          helpers: ["I'm here on business ...", "I'm staying for ...", "I'm staying at ...", "I'm going back on ..."] },
        { q_en: "What do you do to pass the time on a long flight?", q_ro: "Ce faci ca să treacă timpul într-un zbor lung?",
          helpers: ["Usually I read ...", "Sometimes I watch ...", "I try to sleep ...", "I also work on ..."] }
      ]
    },
    {
      id: "calatorii-u3",
      title_ro: "La hotel: check-in, cereri și reclamații",
      level: 2,
      chunks: [
        { en: "I have a reservation under the name Popescu.", ro: "Am o rezervare pe numele Popescu.", note: "„Under the name” = pe numele." },
        { en: "I booked it online.", ro: "Am rezervat online.", note: "" },
        { en: "Is breakfast included?", ro: "Micul dejun este inclus?", note: "" },
        { en: "What time is breakfast?", ro: "La ce oră e micul dejun?", note: "" },
        { en: "What's the Wi-Fi password?", ro: "Care e parola de Wi-Fi?", note: "" },
        { en: "What time is check-out?", ro: "La ce oră trebuie eliberată camera?", note: "" },
        { en: "Could I have a late check-out?", ro: "Aș putea elibera camera mai târziu?", note: "" },
        { en: "Can you call me a taxi?", ro: "Îmi puteți chema un taxi?", note: "" },
        { en: "Can I leave my bags here?", ro: "Pot să-mi las bagajele aici?", note: "Util după check-out." },
        { en: "Could I have a quiet room?", ro: "Aș putea primi o cameră liniștită?", note: "" },
        { en: "The air conditioning isn't working.", ro: "Aerul condiționat nu funcționează.", note: "" },
        { en: "There's no hot water.", ro: "Nu este apă caldă.", note: "" },
        { en: "The room is too noisy.", ro: "Camera e prea zgomotoasă.", note: "" },
        { en: "My key card doesn't work.", ro: "Cardul de acces nu funcționează.", note: "" },
        { en: "Could someone take a look?", ro: "Ar putea să se uite cineva?", note: "Formulare politicoasă pentru o reclamație." },
        { en: "Could I change rooms?", ro: "Aș putea schimba camera?", note: "" },
        { en: "Could I have an extra towel?", ro: "Aș putea primi încă un prosop?", note: "" },
        { en: "I'd like a wake-up call at six.", ro: "Aș vrea să fiu trezit la ora șase.", note: "" },
        { en: "Can I have an invoice for my company?", ro: "Pot primi o factură pe firmă?", note: "Important la deplasări de serviciu." },
        { en: "I'll pay by card.", ro: "Plătesc cu cardul.", note: "" }
      ],
      patterns: [
        { frame: "The ___ isn't working.", ro: "___ nu funcționează.",
          fills: [
            { en: "shower", ro: "Dușul" },
            { en: "TV", ro: "Televizorul" },
            { en: "heating", ro: "Încălzirea" },
            { en: "safe", ro: "Seiful" },
            { en: "kettle", ro: "Fierbătorul" },
            { en: "Wi-Fi", ro: "Wi-Fi-ul" }
          ] },
        { frame: "Could I have ___?", ro: "Aș putea primi ___?",
          fills: [
            { en: "a room on a higher floor", ro: "o cameră la un etaj mai sus" },
            { en: "another pillow", ro: "încă o pernă" },
            { en: "a receipt", ro: "o chitanță" },
            { en: "a map of the city", ro: "o hartă a orașului" },
            { en: "two key cards", ro: "două carduri de acces" },
            { en: "a room with a desk", ro: "o cameră cu birou" }
          ] }
      ],
      dialogues: [
        { title_ro: "Check-in la hotel", lines: [
          { who: "A", en: "Good evening. How can I help?", ro: "Bună seara. Cu ce vă pot ajuta?" },
          { who: "B", en: "Hi. I have a reservation under the name Ionescu.", ro: "Bună. Am o rezervare pe numele Ionescu." },
          { who: "A", en: "Yes, three nights. Can I see your ID?", ro: "Da, trei nopți. Pot vedea un act de identitate?" },
          { who: "B", en: "Here you are. Is breakfast included?", ro: "Poftiți. Micul dejun e inclus?" },
          { who: "A", en: "Yes, from seven to ten, on the ground floor.", ro: "Da, de la șapte la zece, la parter." },
          { who: "B", en: "Great. And what's the Wi-Fi password?", ro: "Perfect. Și care e parola de Wi-Fi?" },
          { who: "A", en: "It's on the card with your key.", ro: "E pe cartonaș, împreună cu cheia." },
          { who: "B", en: "Thanks a lot.", ro: "Mulțumesc mult." }
        ] },
        { title_ro: "O reclamație la recepție", lines: [
          { who: "B", en: "Hi, I'm in room 314. There's a problem.", ro: "Bună, sunt în camera 314. Am o problemă." },
          { who: "A", en: "I'm sorry. What's wrong?", ro: "Îmi pare rău. Ce s-a întâmplat?" },
          { who: "B", en: "The heating isn't working and it's cold.", ro: "Încălzirea nu funcționează și e frig." },
          { who: "A", en: "I'll send someone up right away.", ro: "Trimit pe cineva imediat." },
          { who: "B", en: "Thanks. If it can't be fixed, could I change rooms?", ro: "Mulțumesc. Dacă nu se poate repara, aș putea schimba camera?" },
          { who: "A", en: "Of course. Let me check what we have.", ro: "Desigur. Să verific ce avem disponibil." }
        ] }
      ],
      prompts: [
        { q_en: "Describe a hotel you stayed in recently.", q_ro: "Descrie un hotel în care ai stat recent.",
          helpers: ["I stayed at ...", "The room was ...", "The best thing was ...", "The only problem was ..."] },
        { q_en: "Complain politely about a problem in your room.", q_ro: "Fă o reclamație politicoasă despre o problemă din cameră.",
          helpers: ["Sorry to bother you, but ...", "The ... isn't working.", "Could someone ...?", "Otherwise, could I ...?"] },
        { q_en: "What is important for you in a hotel on a business trip?", q_ro: "Ce e important pentru tine la un hotel într-o deplasare?",
          helpers: ["For me, it's important to have ...", "I need ...", "It should be close to ...", "I don't care much about ..."] }
      ]
    },
    {
      id: "calatorii-u4",
      title_ro: "Indicații și transport public",
      level: 2,
      chunks: [
        { en: "Excuse me, how do I get to the station?", ro: "Scuzați-mă, cum ajung la gară?", note: "" },
        { en: "Is it far from here?", ro: "Este departe de aici?", note: "" },
        { en: "Can I walk there?", ro: "Pot merge pe jos până acolo?", note: "" },
        { en: "Go straight on.", ro: "Mergeți drept înainte.", note: "" },
        { en: "Turn left at the lights.", ro: "Faceți la stânga la semafor.", note: "„The lights” = semaforul." },
        { en: "It's on your right.", ro: "Este pe dreapta.", note: "" },
        { en: "It's about ten minutes on foot.", ro: "E cam la zece minute pe jos.", note: "" },
        { en: "Could you show me on the map?", ro: "Îmi puteți arăta pe hartă?", note: "" },
        { en: "Which bus goes to the city centre?", ro: "Ce autobuz merge în centru?", note: "" },
        { en: "Where can I buy a ticket?", ro: "De unde pot cumpăra un bilet?", note: "" },
        { en: "A day ticket, please.", ro: "Un bilet de o zi, vă rog.", note: "" },
        { en: "Single or return?", ro: "Dus sau dus-întors?", note: "Vei auzi des asta la ghișeu." },
        { en: "Does this train stop at the airport?", ro: "Trenul acesta oprește la aeroport?", note: "" },
        { en: "Which platform does it leave from?", ro: "De la ce peron pleacă?", note: "" },
        { en: "Do I need to change?", ro: "Trebuie să schimb?", note: "„Change” = a schimba trenul/linia." },
        { en: "How many stops is it?", ro: "Câte stații sunt?", note: "" },
        { en: "Could you tell me when to get off?", ro: "Îmi puteți spune când să cobor?", note: "" },
        { en: "Is this seat free?", ro: "Locul acesta e liber?", note: "" },
        { en: "I think I'm lost.", ro: "Cred că m-am rătăcit.", note: "" },
        { en: "Sorry, could you speak more slowly?", ro: "Scuze, puteți vorbi mai rar?", note: "Foarte util când nu prinzi indicațiile." }
      ],
      patterns: [
        { frame: "How do I get to ___?", ro: "Cum ajung la ___?",
          fills: [
            { en: "the exhibition centre", ro: "centrul expozițional" },
            { en: "the main square", ro: "piața centrală" },
            { en: "the nearest metro station", ro: "cea mai apropiată stație de metrou" },
            { en: "this address", ro: "adresa aceasta" },
            { en: "the bus station", ro: "autogară" },
            { en: "the conference hall", ro: "sala de conferințe" }
          ] },
        { frame: "Does this ___ go to ___?", ro: "Acest ___ merge la ___?",
          fills: [
            { en: "bus / the airport", ro: "autobuz / aeroport" },
            { en: "tram / the centre", ro: "tramvai / centru" },
            { en: "train / Vienna", ro: "tren / Viena" },
            { en: "line / the fairground", ro: "linie / zona târgului" },
            { en: "metro / the old town", ro: "metrou / orașul vechi" },
            { en: "shuttle / the hotel", ro: "microbuz / hotel" }
          ] }
      ],
      dialogues: [
        { title_ro: "Cer indicații pe stradă", lines: [
          { who: "B", en: "Excuse me, how do I get to the exhibition centre?", ro: "Scuzați-mă, cum ajung la centrul expozițional?" },
          { who: "A", en: "It's a bit far. Take the U4 metro.", ro: "E cam departe. Luați metroul U4." },
          { who: "B", en: "Where's the nearest station?", ro: "Unde e cea mai apropiată stație?" },
          { who: "A", en: "Go straight on, then turn right at the bank.", ro: "Mergeți drept, apoi la dreapta la bancă." },
          { who: "B", en: "Sorry, could you speak more slowly?", ro: "Scuze, puteți vorbi mai rar?" },
          { who: "A", en: "Sure. Straight on. Then right at the bank.", ro: "Sigur. Drept înainte. Apoi la dreapta la bancă." },
          { who: "B", en: "Got it. Thank you very much.", ro: "Am înțeles. Mulțumesc foarte mult." }
        ] },
        { title_ro: "La automatul de bilete", lines: [
          { who: "B", en: "Excuse me, does this machine take cards?", ro: "Scuzați-mă, automatul acesta acceptă card?" },
          { who: "A", en: "Yes. Where are you going?", ro: "Da. Unde mergeți?" },
          { who: "B", en: "To the airport. Do I need to change?", ro: "La aeroport. Trebuie să schimb?" },
          { who: "A", en: "No, the S8 goes direct. Buy a single ticket.", ro: "Nu, S8 merge direct. Cumpărați un bilet simplu." },
          { who: "B", en: "Which platform does it leave from?", ro: "De la ce peron pleacă?" },
          { who: "A", en: "Platform 2, every twenty minutes.", ro: "Peronul 2, la fiecare douăzeci de minute." }
        ] }
      ],
      prompts: [
        { q_en: "Explain how to get from your home to the city centre.", q_ro: "Explică cum ajungi de acasă în centrul orașului.",
          helpers: ["First, you go ...", "Then you turn ...", "You can take ...", "It takes about ..."] },
        { q_en: "Compare public transport in your city and a city you visited.", q_ro: "Compară transportul public din orașul tău cu cel dintr-un oraș vizitat.",
          helpers: ["In my city, ...", "In ..., it's ...", "The trains there are ...", "I think ... is better because ..."] },
        { q_en: "Tell me about a time you got lost.", q_ro: "Povestește despre o dată când te-ai rătăcit.",
          helpers: ["Once, in ..., I ...", "I didn't know ...", "So I asked ...", "In the end, ..."] }
      ]
    },
    {
      id: "calatorii-u5",
      title_ro: "Restaurant și cafenea: comandă și plată",
      level: 3,
      chunks: [
        { en: "A table for two, please.", ro: "O masă pentru două persoane, vă rog.", note: "" },
        { en: "We haven't booked.", ro: "Nu avem rezervare.", note: "" },
        { en: "Could we sit outside?", ro: "Am putea sta afară?", note: "" },
        { en: "Could we see the menu, please?", ro: "Ne puteți aduce meniul, vă rog?", note: "" },
        { en: "What would you recommend?", ro: "Ce ne recomandați?", note: "" },
        { en: "What's the soup of the day?", ro: "Care e supa zilei?", note: "" },
        { en: "I'll have the fish, please.", ro: "Eu iau peștele, vă rog.", note: "„I'll have...” e forma naturală de a comanda." },
        { en: "Does it come with salad?", ro: "Vine cu salată?", note: "" },
        { en: "I'm allergic to nuts.", ro: "Sunt alergic la nuci.", note: "" },
        { en: "Could I have it without onions?", ro: "Se poate fără ceapă?", note: "" },
        { en: "Medium, please.", ro: "Mediu, vă rog.", note: "Gradul de gătire la friptură." },
        { en: "A glass of house red, please.", ro: "Un pahar de vin roșu al casei, vă rog.", note: "" },
        { en: "Still or sparkling?", ro: "Plată sau minerală?", note: "Întrebare frecventă la apă." },
        { en: "A flat white to take away.", ro: "Un flat white la pachet.", note: "„To take away” = la pachet." },
        { en: "Excuse me, this isn't what I ordered.", ro: "Scuzați-mă, nu asta am comandat.", note: "" },
        { en: "It was delicious, thank you.", ro: "A fost delicios, mulțumesc.", note: "" },
        { en: "Could we have the bill, please?", ro: "Ne aduceți nota, vă rog?", note: "În SUA se spune „the check”." },
        { en: "Can we pay separately?", ro: "Putem plăti separat?", note: "" },
        { en: "Is service included?", ro: "Serviciul e inclus?", note: "Ca să știi dacă lași bacșiș." },
        { en: "Keep the change.", ro: "Păstrați restul.", note: "" }
      ],
      patterns: [
        { frame: "I'll have ___, please.", ro: "Eu iau ___, vă rog.",
          fills: [
            { en: "the steak", ro: "friptura" },
            { en: "the chicken salad", ro: "salata cu pui" },
            { en: "the same", ro: "la fel" },
            { en: "a small beer", ro: "o bere mică" },
            { en: "the set menu", ro: "meniul fix" },
            { en: "a sparkling water", ro: "o apă minerală" }
          ] },
        { frame: "Could I have it ___?", ro: "Se poate ___?",
          fills: [
            { en: "without cheese", ro: "fără brânză" },
            { en: "with chips instead", ro: "cu cartofi prăjiți în loc" },
            { en: "well done", ro: "bine făcut" },
            { en: "with no ice", ro: "fără gheață" },
            { en: "a bit less spicy", ro: "puțin mai puțin picant" },
            { en: "to take away", ro: "la pachet" }
          ] }
      ],
      dialogues: [
        { title_ro: "Comanda la restaurant", lines: [
          { who: "A", en: "Are you ready to order?", ro: "Sunteți gata să comandați?" },
          { who: "B", en: "Yes. What would you recommend?", ro: "Da. Ce recomandați?" },
          { who: "A", en: "The lamb is very good today.", ro: "Mielul e foarte bun azi." },
          { who: "B", en: "I'll have that. Does it come with vegetables?", ro: "Iau asta. Vine cu legume?" },
          { who: "A", en: "Yes, and potatoes. Anything to drink?", ro: "Da, și cartofi. Ceva de băut?" },
          { who: "B", en: "A glass of house red, please.", ro: "Un pahar de vin roșu al casei, vă rog." },
          { who: "A", en: "Perfect. Any allergies I should know about?", ro: "Perfect. Aveți alergii de care ar trebui să știu?" },
          { who: "B", en: "Yes, I'm allergic to nuts.", ro: "Da, sunt alergic la nuci." }
        ] },
        { title_ro: "Plata", lines: [
          { who: "B", en: "Excuse me, could we have the bill, please?", ro: "Scuzați-mă, ne aduceți nota, vă rog?" },
          { who: "A", en: "Of course. Together or separately?", ro: "Desigur. Împreună sau separat?" },
          { who: "B", en: "Together. I'm paying for both of us.", ro: "Împreună. Plătesc eu pentru amândoi." },
          { who: "A", en: "That's sixty-four euros.", ro: "Sunt șaizeci și patru de euro." },
          { who: "B", en: "Could I get a receipt with the company name?", ro: "Aș putea primi un bon cu numele firmei?" },
          { who: "A", en: "Sure, just write it here.", ro: "Sigur, scrieți-l aici." },
          { who: "B", en: "Thanks. Make it seventy, please.", ro: "Mulțumesc. Faceți șaptezeci, vă rog." }
        ] }
      ],
      prompts: [
        { q_en: "Describe a great meal you had abroad.", q_ro: "Descrie o masă foarte bună pe care ai luat-o în străinătate.",
          helpers: ["Last year, in ..., I had ...", "The restaurant was ...", "What I liked most was ...", "I'd love to go back because ..."] },
        { q_en: "Explain to a waiter what you can't eat and why.", q_ro: "Explică unui ospătar ce nu poți mânca și de ce.",
          helpers: ["I'm afraid I can't eat ...", "I'm allergic to ...", "Could you check if ...?", "Is there something without ...?"] },
        { q_en: "What do you think about tipping in different countries?", q_ro: "Ce părere ai despre bacșiș în diferite țări?",
          helpers: ["In Romania, we usually ...", "In some countries, ...", "I think it's fair to ...", "It depends on ..."] }
      ]
    },
    {
      id: "calatorii-u6",
      title_ro: "Închiriere mașină, benzinărie, parcare",
      level: 3,
      chunks: [
        { en: "I've booked a car online.", ro: "Am rezervat o mașină online.", note: "" },
        { en: "Here's my driving licence.", ro: "Poftiți permisul de conducere.", note: "" },
        { en: "Is insurance included?", ro: "Asigurarea este inclusă?", note: "" },
        { en: "What does the insurance cover?", ro: "Ce acoperă asigurarea?", note: "" },
        { en: "Is there a deposit?", ro: "Se cere o garanție?", note: "" },
        { en: "Is it manual or automatic?", ro: "Este manuală sau automată?", note: "" },
        { en: "Should I bring it back with a full tank?", ro: "Trebuie să o aduc cu rezervorul plin?", note: "" },
        { en: "There's a scratch on the door.", ro: "Este o zgârietură pe ușă.", note: "Spune-o înainte de a pleca cu mașina." },
        { en: "Could you note that down, please?", ro: "Puteți nota asta, vă rog?", note: "" },
        { en: "Where do I return the car?", ro: "Unde returnez mașina?", note: "" },
        { en: "Is it diesel or petrol?", ro: "Este pe motorină sau pe benzină?", note: "În SUA, benzina = „gas”." },
        { en: "Pump number four, please.", ro: "Pompa numărul patru, vă rog.", note: "La casa benzinăriei." },
        { en: "Do I need a vignette here?", ro: "Am nevoie de rovinietă aici?", note: "„Vignette” = rovinietă, în Europa." },
        { en: "Is there a car park nearby?", ro: "Este o parcare în apropiere?", note: "În SUA: „parking lot”." },
        { en: "How much is it per hour?", ro: "Cât costă pe oră?", note: "" },
        { en: "Can I park here?", ro: "Pot parca aici?", note: "" },
        { en: "The machine doesn't take cards.", ro: "Automatul nu acceptă carduri.", note: "" },
        { en: "I've lost my parking ticket.", ro: "Am pierdut tichetul de parcare.", note: "" },
        { en: "Which way is the motorway?", ro: "Încotro este autostrada?", note: "" },
        { en: "The warning light came on.", ro: "S-a aprins un martor de avertizare.", note: "„Warning light” = martor pe bord." }
      ],
      patterns: [
        { frame: "Is ___ included?", ro: "Este inclus/ă ___?",
          fills: [
            { en: "full insurance", ro: "asigurarea completă" },
            { en: "unlimited mileage", ro: "kilometrajul nelimitat" },
            { en: "a second driver", ro: "un al doilea șofer" },
            { en: "the sat nav", ro: "GPS-ul" },
            { en: "roadside assistance", ro: "asistența rutieră" },
            { en: "a child seat", ro: "scaunul pentru copil" }
          ] },
        { frame: "I've ___.", ro: "Am ___.",
          fills: [
            { en: "put the wrong fuel in", ro: "pus combustibil greșit" },
            { en: "got a flat tyre", ro: "o pană de cauciuc" },
            { en: "locked the keys in the car", ro: "încuiat cheile în mașină" },
            { en: "had a small accident", ro: "avut un mic accident" },
            { en: "got a parking fine", ro: "primit o amendă de parcare" },
            { en: "run out of petrol", ro: "rămas fără benzină" }
          ] }
      ],
      dialogues: [
        { title_ro: "La ghișeul de închirieri", lines: [
          { who: "A", en: "Hi. Do you have a booking?", ro: "Bună. Aveți o rezervare?" },
          { who: "B", en: "Yes, I've booked a car online for three days.", ro: "Da, am rezervat online o mașină pentru trei zile." },
          { who: "A", en: "Can I see your licence and a credit card?", ro: "Pot vedea permisul și un card de credit?" },
          { who: "B", en: "Here you are. Is full insurance included?", ro: "Poftiți. Asigurarea completă e inclusă?" },
          { who: "A", en: "Basic only. Full cover is twelve euros a day.", ro: "Doar cea de bază. Cea completă costă doisprezece euro pe zi." },
          { who: "B", en: "Okay, I'll take full cover.", ro: "Bine, iau asigurarea completă." },
          { who: "A", en: "Bring it back with a full tank, please.", ro: "Aduceți-o înapoi cu rezervorul plin, vă rog." },
          { who: "B", en: "Sure. And where do I return it?", ro: "Sigur. Și unde o returnez?" }
        ] },
        { title_ro: "La parcare", lines: [
          { who: "B", en: "Excuse me, can I park here?", ro: "Scuzați-mă, pot parca aici?" },
          { who: "A", en: "Only for residents, I'm afraid.", ro: "Doar pentru localnici, din păcate." },
          { who: "B", en: "Is there a car park nearby?", ro: "Este o parcare în apropiere?" },
          { who: "A", en: "Yes, behind the town hall.", ro: "Da, în spatele primăriei." },
          { who: "B", en: "How much is it per hour, do you know?", ro: "Știți cât costă pe oră?" },
          { who: "A", en: "About two euros. It's open all night.", ro: "Cam doi euro. E deschisă toată noaptea." }
        ] }
      ],
      prompts: [
        { q_en: "Describe a road trip you took abroad.", q_ro: "Descrie o călătorie cu mașina în străinătate.",
          helpers: ["A few years ago, we drove to ...", "We rented ...", "The roads were ...", "The hardest part was ..."] },
        { q_en: "Explain what you check before you take a rental car.", q_ro: "Explică ce verifici înainte să pleci cu o mașină închiriată.",
          helpers: ["First, I check ...", "I always take photos of ...", "I ask whether ...", "If there's damage, ..."] },
        { q_en: "Is it better to rent a car or use public transport abroad?", q_ro: "E mai bine să închiriezi o mașină sau să folosești transportul public în străinătate?",
          helpers: ["It depends on ...", "If you're in a big city, ...", "A car is useful when ...", "Personally, I prefer ..."] }
      ]
    },
    {
      id: "calatorii-u7",
      title_ro: "Probleme în străinătate: bagaje, zbor pierdut, poliție, farmacie",
      level: 4,
      chunks: [
        { en: "My luggage hasn't arrived.", ro: "Bagajul meu nu a sosit.", note: "" },
        { en: "It's a black suitcase with a red tag.", ro: "E o valiză neagră cu o etichetă roșie.", note: "" },
        { en: "Here's my baggage receipt.", ro: "Poftiți tichetul de bagaj.", note: "" },
        { en: "Could you send it to my hotel?", ro: "Mi-l puteți trimite la hotel?", note: "" },
        { en: "Can I claim for essentials?", ro: "Pot cere bani pentru lucrurile de strictă necesitate?", note: "„Essentials” = lucruri de bază până vine bagajul." },
        { en: "I've missed my connection.", ro: "Am pierdut zborul de legătură.", note: "" },
        { en: "My flight was cancelled.", ro: "Zborul meu a fost anulat.", note: "" },
        { en: "When's the next flight?", ro: "Când e următorul zbor?", note: "" },
        { en: "Could you put me on another flight?", ro: "Mă puteți trece pe alt zbor?", note: "" },
        { en: "Am I entitled to compensation?", ro: "Am dreptul la despăgubire?", note: "„Entitled to” = a avea dreptul la." },
        { en: "Will you cover the hotel?", ro: "Acoperiți voi hotelul?", note: "" },
        { en: "Someone has stolen my wallet.", ro: "Cineva mi-a furat portofelul.", note: "" },
        { en: "I need a police report for insurance.", ro: "Am nevoie de un proces-verbal de la poliție pentru asigurare.", note: "" },
        { en: "It happened about an hour ago.", ro: "S-a întâmplat acum aproximativ o oră.", note: "" },
        { en: "I need to contact my embassy.", ro: "Trebuie să iau legătura cu ambasada.", note: "" },
        { en: "Is there a pharmacy open now?", ro: "Este o farmacie deschisă acum?", note: "" },
        { en: "I've got a bad headache.", ro: "Mă doare foarte tare capul.", note: "" },
        { en: "Do I need a prescription for this?", ro: "Îmi trebuie rețetă pentru asta?", note: "" },
        { en: "How often should I take it?", ro: "Cât de des trebuie să-l iau?", note: "" },
        { en: "If it doesn't arrive by tomorrow, what happens?", ro: "Dacă nu ajunge până mâine, ce se întâmplă?", note: "Condițional util la reclamații." }
      ],
      patterns: [
        { frame: "If ___, could you ___?", ro: "Dacă ___, ați putea ___?",
          fills: [
            { en: "you find my bag / call me", ro: "îmi găsiți bagajul / să mă sunați" },
            { en: "the flight is delayed / text me", ro: "zborul întârzie / să-mi trimiteți un mesaj" },
            { en: "there's no flight today / book a hotel", ro: "nu e zbor azi / să rezervați un hotel" },
            { en: "it's not here / check the system", ro: "nu e aici / să verificați în sistem" },
            { en: "it gets worse / recommend a doctor", ro: "se agravează / să-mi recomandați un medic" },
            { en: "you need more details / email me", ro: "aveți nevoie de detalii / să-mi scrieți un e-mail" }
          ] },
        { frame: "I was ___ when ___.", ro: "Eram ___ când ___.",
          fills: [
            { en: "waiting for the train / someone took my bag", ro: "în așteptarea trenului / cineva mi-a luat geanta" },
            { en: "paying at the counter / my phone disappeared", ro: "la plată / mi-a dispărut telefonul" },
            { en: "walking to the hotel / I fell", ro: "pe drum spre hotel / am căzut" },
            { en: "in the queue / they closed the gate", ro: "la coadă / au închis poarta" },
            { en: "on the metro / I felt sick", ro: "în metrou / mi s-a făcut rău" },
            { en: "checking in / they told me it was cancelled", ro: "la check-in / mi-au spus că e anulat" }
          ] }
      ],
      dialogues: [
        { title_ro: "Bagaj pierdut", lines: [
          { who: "B", en: "Hi, my suitcase didn't come out on the belt.", ro: "Bună, valiza mea n-a apărut pe bandă." },
          { who: "A", en: "I'm sorry. Can I see your baggage receipt?", ro: "Îmi pare rău. Pot vedea tichetul de bagaj?" },
          { who: "B", en: "Here it is. I flew in from Bucharest via Vienna.", ro: "Poftiți. Am venit din București, prin Viena." },
          { who: "A", en: "It looks like it stayed in Vienna. Can you describe it?", ro: "Se pare că a rămas la Viena. Îl puteți descrie?" },
          { who: "B", en: "It's a large grey suitcase with a blue strap.", ro: "E o valiză mare gri, cu o curea albastră." },
          { who: "A", en: "It should arrive on tonight's flight.", ro: "Ar trebui să sosească cu zborul de diseară." },
          { who: "B", en: "Could you send it to my hotel? I have a meeting tomorrow.", ro: "Mi-o puteți trimite la hotel? Am o întâlnire mâine." },
          { who: "A", en: "Yes. Just write the address here.", ro: "Da. Scrieți adresa aici." }
        ] },
        { title_ro: "Zbor de legătură pierdut", lines: [
          { who: "B", en: "Excuse me, I've missed my connection to Lyon.", ro: "Scuzați-mă, am pierdut zborul de legătură spre Lyon." },
          { who: "A", en: "Was your first flight delayed?", ro: "Primul zbor a avut întârziere?" },
          { who: "B", en: "Yes, by almost two hours. It wasn't my fault.", ro: "Da, aproape două ore. Nu a fost vina mea." },
          { who: "A", en: "The next flight is tomorrow at 7:15.", ro: "Următorul zbor e mâine la 7:15." },
          { who: "B", en: "In that case, will you cover the hotel?", ro: "În cazul ăsta, acoperiți hotelul?" },
          { who: "A", en: "Yes, here's a voucher for the airport hotel and dinner.", ro: "Da, poftiți un voucher pentru hotelul aeroportului și cină." },
          { who: "B", en: "Thank you. Am I entitled to compensation as well?", ro: "Mulțumesc. Am dreptul și la despăgubire?" }
        ] }
      ],
      prompts: [
        { q_en: "Tell me about a problem you had on a trip and how you solved it.", q_ro: "Povestește o problemă din călătorie și cum ai rezolvat-o.",
          helpers: ["It happened when I was ...", "Suddenly, ...", "I went to ... and explained ...", "In the end, ...", "Next time, I'll ..."] },
        { q_en: "Report a stolen wallet to the police.", q_ro: "Raportează la poliție un portofel furat.",
          helpers: ["I'd like to report ...", "I was ... when ...", "It had ... in it.", "I need a report for ..."] },
        { q_en: "What would you do if your flight was cancelled before an important meeting?", q_ro: "Ce ai face dacă ți s-ar anula zborul înaintea unei întâlniri importante?",
          helpers: ["First, I would ...", "I'd call ...", "If there were no flights, I'd ...", "I'd also ask about ..."] }
      ]
    },
    {
      id: "calatorii-u8",
      title_ro: "Deplasare de afaceri: târg, parteneri, cină, rămas-bun",
      level: 4,
      chunks: [
        { en: "Nice to meet you in person at last.", ro: "Mă bucur să vă cunosc în sfârșit personal.", note: "După ce ați comunicat doar pe e-mail." },
        { en: "Thanks for coming to our stand.", ro: "Mulțumim că ați venit la standul nostru.", note: "" },
        { en: "Let me give you my card.", ro: "Să vă dau cartea mea de vizită.", note: "" },
        { en: "What brings you to the fair?", ro: "Ce vă aduce la târg?", note: "Bună întrebare de deschidere." },
        { en: "We're looking for new suppliers.", ro: "Căutăm furnizori noi.", note: "" },
        { en: "Could you tell me more about this product?", ro: "Îmi puteți spune mai multe despre acest produs?", note: "" },
        { en: "Do you have a brochure in English?", ro: "Aveți o broșură în engleză?", note: "" },
        { en: "What's the delivery time?", ro: "Care e termenul de livrare?", note: "" },
        { en: "Could you send me an offer?", ro: "Îmi puteți trimite o ofertă?", note: "" },
        { en: "My English isn't perfect, so please bear with me.", ro: "Engleza mea nu e perfectă, vă rog să aveți răbdare.", note: "„Bear with me” = aveți răbdare cu mine." },
        { en: "Sorry, what do you mean exactly?", ro: "Scuze, ce vreți să spuneți mai exact?", note: "Câștigi timp și clarifici." },
        { en: "Let me just check I've understood.", ro: "Să verific dacă am înțeles corect.", note: "" },
        { en: "How was your trip here?", ro: "Cum a fost drumul până aici?", note: "Small talk ușor la început." },
        { en: "Cheers! To a good partnership.", ro: "Noroc! Pentru un parteneriat bun.", note: "La un toast." },
        { en: "This is a typical dish from my region.", ro: "Acesta e un fel tipic din regiunea mea.", note: "" },
        { en: "Have you ever been to Romania?", ro: "Ați fost vreodată în România?", note: "" },
        { en: "It's been a pleasure working with you.", ro: "A fost o plăcere să lucrez cu dumneavoastră.", note: "" },
        { en: "I'll email you the details on Monday.", ro: "Vă trimit detaliile pe e-mail luni.", note: "" },
        { en: "Let's keep in touch.", ro: "Să păstrăm legătura.", note: "" },
        { en: "Have a safe trip home.", ro: "Drum bun spre casă.", note: "" }
      ],
      patterns: [
        { frame: "We're looking for ___.", ro: "Căutăm ___.",
          fills: [
            { en: "a reliable partner", ro: "un partener de încredere" },
            { en: "a distributor in Romania", ro: "un distribuitor în România" },
            { en: "better prices", ro: "prețuri mai bune" },
            { en: "a faster delivery time", ro: "un termen de livrare mai scurt" },
            { en: "training for our staff", ro: "instruire pentru personalul nostru" },
            { en: "spare parts for our equipment", ro: "piese de schimb pentru echipamentele noastre" }
          ] },
        { frame: "If we ___, would you ___?", ro: "Dacă am ___, ați ___?",
          fills: [
            { en: "ordered more / give us a discount", ro: "comanda mai mult / ne oferi o reducere" },
            { en: "signed this month / deliver in March", ro: "semna luna asta / livra în martie" },
            { en: "came to your factory / show us the line", ro: "veni la fabrica dvs. / ne arăta linia de producție" },
            { en: "sent our team / train them on site", ro: "trimite echipa / o instrui la fața locului" },
            { en: "paid in advance / lower the price", ro: "plăti în avans / reduce prețul" },
            { en: "needed support / answer in English", ro: "avea nevoie de suport / răspunde în engleză" }
          ] }
      ],
      dialogues: [
        { title_ro: "La standul unui partener, la târg", lines: [
          { who: "A", en: "Hello! Welcome to our stand. Can I help you?", ro: "Bună ziua! Bine ați venit la standul nostru. Vă pot ajuta?" },
          { who: "B", en: "Hi. I'm from a medical company in Romania.", ro: "Bună. Sunt de la o firmă din domeniul medical din România." },
          { who: "A", en: "Great. What brings you to the fair?", ro: "Excelent. Ce vă aduce la târg?" },
          { who: "B", en: "We're looking for new suppliers. Could you tell me about this model?", ro: "Căutăm furnizori noi. Îmi puteți spune despre acest model?" },
          { who: "A", en: "Sure. It's lighter and the battery lasts eight hours.", ro: "Sigur. E mai ușor și bateria ține opt ore." },
          { who: "B", en: "Interesting. What's the delivery time to Romania?", ro: "Interesant. Care e termenul de livrare în România?" },
          { who: "A", en: "Usually four to six weeks.", ro: "De obicei, patru până la șase săptămâni." },
          { who: "B", en: "Okay. Here's my card. Could you send me an offer?", ro: "Bine. Poftiți cartea mea de vizită. Îmi puteți trimite o ofertă?" }
        ] },
        { title_ro: "Cina cu partenerii și rămas-bun", lines: [
          { who: "A", en: "So, how was your first time in Hamburg?", ro: "Deci, cum a fost prima dată în Hamburg?" },
          { who: "B", en: "Busy, but really useful. The fair was excellent.", ro: "Aglomerat, dar foarte util. Târgul a fost excelent." },
          { who: "A", en: "I'm glad. Have you tried the local fish?", ro: "Mă bucur. Ați încercat peștele local?" },
          { who: "B", en: "Not yet. I'd love to. Cheers, to a good partnership!", ro: "Încă nu. Mi-ar plăcea. Noroc, pentru un parteneriat bun!" },
          { who: "A", en: "Cheers! When are you flying back?", ro: "Noroc! Când zburați înapoi?" },
          { who: "B", en: "Tomorrow morning. I'll email you on Monday.", ro: "Mâine dimineață. Vă scriu pe e-mail luni." },
          { who: "A", en: "Perfect. It's been great meeting you.", ro: "Perfect. M-am bucurat mult să vă cunosc." },
          { who: "B", en: "Likewise. Thanks for a lovely evening.", ro: "La fel. Mulțumesc pentru o seară minunată." }
        ] }
      ],
      prompts: [
        { q_en: "Introduce yourself and your company to a new contact at a trade fair.", q_ro: "Prezintă-te pe tine și firma ta unui contact nou la un târg.",
          helpers: ["Hi, I'm ... from ...", "We work in ...", "We're here because ...", "I'd be interested in ...", "Here's my card."] },
        { q_en: "Tell me about a business trip that went well, or badly.", q_ro: "Povestește o deplasare de serviciu care a mers bine sau prost.",
          helpers: ["Last year, I went to ... for ...", "The main goal was ...", "What went well was ...", "If I went again, I'd ..."] },
        { q_en: "Make small talk at a dinner with foreign partners.", q_ro: "Fă conversație lejeră la o cină cu parteneri străini.",
          helpers: ["How was your day?", "Have you ever been to ...?", "In Romania, we usually ...", "This reminds me of ...", "Thank you for ..."] }
      ]
    }
  ]
});
