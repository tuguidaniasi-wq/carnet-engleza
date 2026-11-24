window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  topic: "zi",
  title_ro: "Viața de zi cu zi",
  units: [
    {
      id: "zi-u1",
      title_ro: "Prezentare și politețe",
      level: 1,
      chunks: [
        { en: "Hi, I'm Andrei. Nice to meet you.", ro: "Salut, sunt Andrei. Îmi pare bine.", note: "Spune numele, apoi „Nice to meet you”." },
        { en: "Nice to meet you too.", ro: "Și mie îmi pare bine.", note: "" },
        { en: "I'm from Romania.", ro: "Sunt din România.", note: "" },
        { en: "I live in Cluj.", ro: "Locuiesc în Cluj.", note: "" },
        { en: "I work as a nurse.", ro: "Lucrez ca asistent medical.", note: "„work as a/an + meserie”." },
        { en: "How are you?", ro: "Ce mai faci?", note: "" },
        { en: "I'm fine, thanks. And you?", ro: "Bine, mulțumesc. Tu?", note: "Întoarce mereu întrebarea: „And you?”" },
        { en: "Not bad, thanks.", ro: "Nu rău, mulțumesc.", note: "" },
        { en: "Excuse me, can I ask you something?", ro: "Scuzați-mă, pot să vă întreb ceva?", note: "" },
        { en: "Thank you very much.", ro: "Mulțumesc foarte mult.", note: "" },
        { en: "You're welcome.", ro: "Cu plăcere.", note: "" },
        { en: "Sorry, I'm late.", ro: "Scuze, am întârziat.", note: "" },
        { en: "No problem.", ro: "Nicio problemă.", note: "" },
        { en: "Sorry, could you say that again?", ro: "Scuze, puteți repeta?", note: "Cea mai utilă frază când nu înțelegi." },
        { en: "Could you speak a bit slower, please?", ro: "Puteți vorbi puțin mai rar, vă rog?", note: "" },
        { en: "How do you say „chec” in English?", ro: "Cum se spune „chec” în engleză?", note: "Folosește-o fără jenă, oamenii ajută." },
        { en: "Let me think...", ro: "Stai să mă gândesc...", note: "Îți câștigă timp fără tăcere stânjenitoare." },
        { en: "My English isn't very good.", ro: "Engleza mea nu e foarte bună.", note: "" },
        { en: "I understand, but speaking is hard.", ro: "Înțeleg, dar îmi e greu să vorbesc.", note: "" },
        { en: "See you later.", ro: "Ne vedem mai târziu.", note: "" }
      ],
      patterns: [
        { frame: "I'm ___.", ro: "Sunt ___.",
          fills: [
            { en: "from Romania", ro: "din România" },
            { en: "a teacher", ro: "profesor" },
            { en: "married", ro: "căsătorit" },
            { en: "a bit tired", ro: "puțin obosit" },
            { en: "new here", ro: "nou aici" },
            { en: "forty-two", ro: "de patruzeci și doi de ani" }
          ] },
        { frame: "Could you ___, please?", ro: "Ați putea să ___, vă rog?",
          fills: [
            { en: "say that again", ro: "repetați" },
            { en: "speak slower", ro: "vorbiți mai rar" },
            { en: "spell your name", ro: "spuneți numele pe litere" },
            { en: "help me", ro: "mă ajutați" },
            { en: "write it down", ro: "scrieți asta" },
            { en: "wait a minute", ro: "așteptați un minut" }
          ] }
      ],
      dialogues: [
        { title_ro: "Primul contact", lines: [
          { who: "A", en: "Hi, I'm Tom. I'm new here.", ro: "Salut, sunt Tom. Sunt nou aici." },
          { who: "B", en: "Hi Tom, I'm Elena. Nice to meet you.", ro: "Salut Tom, sunt Elena. Îmi pare bine." },
          { who: "A", en: "Nice to meet you too. Where are you from?", ro: "Și mie. De unde ești?" },
          { who: "B", en: "I'm from Romania, from Iași.", ro: "Sunt din România, din Iași." },
          { who: "A", en: "Oh, nice. What do you do?", ro: "A, frumos. Cu ce te ocupi?" },
          { who: "B", en: "I work in an office. And you?", ro: "Lucrez la un birou. Tu?" },
          { who: "A", en: "I'm an engineer.", ro: "Sunt inginer." },
          { who: "B", en: "Great. See you around, Tom.", ro: "Super. Ne mai vedem, Tom." }
        ] },
        { title_ro: "Când nu înțelegi", lines: [
          { who: "A", en: "Are you coming to the meeting on Thursday?", ro: "Vii la ședința de joi?" },
          { who: "B", en: "Sorry, could you say that again?", ro: "Scuze, poți repeta?" },
          { who: "A", en: "The meeting. Thursday. Are you coming?", ro: "Ședința. Joi. Vii?" },
          { who: "B", en: "Ah, yes. Let me think... yes, I'm coming.", ro: "A, da. Stai să mă gândesc... da, vin." },
          { who: "A", en: "Good. It's at ten.", ro: "Bine. E la zece." },
          { who: "B", en: "Thank you. Sorry, my English isn't very good.", ro: "Mulțumesc. Scuze, engleza mea nu e foarte bună." },
          { who: "A", en: "Don't worry, it's fine!", ro: "Nu-ți face griji, e în regulă!" }
        ] }
      ],
      prompts: [
        { q_en: "Introduce yourself.", q_ro: "Prezintă-te.",
          helpers: ["My name is ...", "I'm from ...", "I live in ...", "I work as ..."] },
        { q_en: "Tell me about where you live.", q_ro: "Spune-mi despre locul unde trăiești.",
          helpers: ["I live in ...", "It's a small/big ...", "I like it because ...", "Let me think..."] },
        { q_en: "Why do you want to speak English?", q_ro: "De ce vrei să vorbești engleză?",
          helpers: ["I want to ...", "For my job, ...", "I understand, but speaking is hard.", "I'd like to ..."] }
      ]
    },
    {
      id: "zi-u2",
      title_ro: "Familie, casă și rutina zilnică",
      level: 1,
      chunks: [
        { en: "I'm married with two kids.", ro: "Sunt căsătorit și am doi copii.", note: "„with two kids” e foarte natural." },
        { en: "My son is ten.", ro: "Fiul meu are zece ani.", note: "În engleză „este” zece, nu „are”." },
        { en: "Have you got any children?", ro: "Ai copii?", note: "" },
        { en: "My parents live in the countryside.", ro: "Părinții mei locuiesc la țară.", note: "" },
        { en: "I live in a flat.", ro: "Locuiesc la bloc.", note: "„flat” (UK) = „apartment” (US)." },
        { en: "It's small but cosy.", ro: "E mic, dar primitor.", note: "" },
        { en: "I usually get up at seven.", ro: "De obicei mă trezesc la șapte.", note: "" },
        { en: "I have a shower and get dressed.", ro: "Fac duș și mă îmbrac.", note: "" },
        { en: "I have breakfast at home.", ro: "Iau micul dejun acasă.", note: "" },
        { en: "I take the kids to school.", ro: "Duc copiii la școală.", note: "" },
        { en: "I go to work by bus.", ro: "Merg la muncă cu autobuzul.", note: "„by bus / by car”, dar „on foot”." },
        { en: "I get home around six.", ro: "Ajung acasă pe la șase.", note: "" },
        { en: "I do the housework at the weekend.", ro: "Fac curățenie în weekend.", note: "" },
        { en: "We have dinner together.", ro: "Luăm cina împreună.", note: "" },
        { en: "I usually go to bed at eleven.", ro: "De obicei mă culc la unsprezece.", note: "" },
        { en: "Sorry, I didn't catch that.", ro: "Scuze, n-am prins ce ai zis.", note: "Mai natural decât „I don't understand”." },
        { en: "Just a second.", ro: "O secundă.", note: "" },
        { en: "What's the word for „aspirator”?", ro: "Cum se zice la „aspirator”?", note: "Răspuns: vacuum cleaner." },
        { en: "It's a thing for cleaning floors.", ro: "E un lucru cu care cureți podeaua.", note: "Descrie când nu știi cuvântul." },
        { en: "How do you spell that?", ro: "Cum se scrie asta?", note: "" }
      ],
      patterns: [
        { frame: "I usually ___ in the morning.", ro: "De obicei ___ dimineața.",
          fills: [
            { en: "have coffee", ro: "beau o cafea" },
            { en: "walk the dog", ro: "plimb câinele" },
            { en: "check my phone", ro: "mă uit pe telefon" },
            { en: "make breakfast", ro: "fac micul dejun" },
            { en: "listen to the radio", ro: "ascult radioul" },
            { en: "take a shower", ro: "fac duș" }
          ] },
        { frame: "My ___ lives in ___.", ro: "___ meu/mea locuiește în ___.",
          fills: [
            { en: "brother / London", ro: "Fratele meu / Londra" },
            { en: "sister / Brașov", ro: "Sora mea / Brașov" },
            { en: "mum / a small village", ro: "Mama mea / un sat mic" },
            { en: "best friend / Germany", ro: "Cel mai bun prieten / Germania" },
            { en: "daughter / Bucharest", ro: "Fiica mea / București" },
            { en: "grandmother / Suceava", ro: "Bunica mea / Suceava" }
          ] }
      ],
      dialogues: [
        { title_ro: "Despre familie", lines: [
          { who: "A", en: "Have you got any children?", ro: "Ai copii?" },
          { who: "B", en: "Yes, two. A boy and a girl.", ro: "Da, doi. Un băiat și o fată." },
          { who: "A", en: "How old are they?", ro: "Câți ani au?" },
          { who: "B", en: "My son is ten and my daughter is six.", ro: "Fiul meu are zece ani și fiica mea șase." },
          { who: "A", en: "Do they like school?", ro: "Le place la școală?" },
          { who: "B", en: "My son does. My daughter... not really!", ro: "Fiului meu da. Fiicei mele... nu prea!" },
          { who: "A", en: "Ha, that's normal.", ro: "Ha, e normal." }
        ] },
        { title_ro: "O zi obișnuită", lines: [
          { who: "A", en: "What time do you usually get up?", ro: "La ce oră te trezești de obicei?" },
          { who: "B", en: "Sorry, I didn't catch that.", ro: "Scuze, n-am prins." },
          { who: "A", en: "What time do you get up?", ro: "La ce oră te trezești?" },
          { who: "B", en: "Oh. At seven, more or less.", ro: "A. La șapte, cam așa." },
          { who: "A", en: "And how do you get to work?", ro: "Și cum ajungi la muncă?" },
          { who: "B", en: "By bus. It takes about half an hour.", ro: "Cu autobuzul. Durează cam o jumătate de oră." },
          { who: "A", en: "Not bad.", ro: "Nu e rău." },
          { who: "B", en: "Yes, I read on the bus.", ro: "Da, citesc în autobuz." }
        ] }
      ],
      prompts: [
        { q_en: "Tell me about your family.", q_ro: "Povestește-mi despre familia ta.",
          helpers: ["There are ... of us.", "My ... is ...", "We live in ...", "We often ..."] },
        { q_en: "Describe your home.", q_ro: "Descrie-ți locuința.",
          helpers: ["I live in a ...", "It has ... rooms.", "My favourite room is ...", "It's small but ..."] },
        { q_en: "Tell me about your morning routine.", q_ro: "Povestește-mi rutina ta de dimineață.",
          helpers: ["First, I ...", "After that, ...", "Usually ...", "Then I ..."] }
      ]
    },
    {
      id: "zi-u3",
      title_ro: "Cumpărături și bani",
      level: 2,
      chunks: [
        { en: "How much is this?", ro: "Cât costă asta?", note: "" },
        { en: "How much are these?", ro: "Cât costă astea?", note: "Plural: „are these”." },
        { en: "I'm just looking, thanks.", ro: "Doar mă uit, mulțumesc.", note: "Răspunsul standard la „Can I help you?”." },
        { en: "Do you have this in a bigger size?", ro: "Aveți asta pe o mărime mai mare?", note: "" },
        { en: "Can I try it on?", ro: "Pot să-l probez?", note: "" },
        { en: "Where are the changing rooms?", ro: "Unde sunt cabinele de probă?", note: "" },
        { en: "It's a bit too expensive.", ro: "E cam prea scump.", note: "" },
        { en: "I'll take it.", ro: "Îl iau.", note: "" },
        { en: "Can I pay by card?", ro: "Pot plăti cu cardul?", note: "„by card”, dar „in cash”." },
        { en: "Do you take cash?", ro: "Acceptați numerar?", note: "" },
        { en: "Do you need a bag?", ro: "Vă trebuie o pungă?", note: "" },
        { en: "No, I've got one, thanks.", ro: "Nu, am una, mulțumesc.", note: "" },
        { en: "Could I have the receipt, please?", ro: "Îmi dați bonul, vă rog?", note: "Pronunție: „ri-SIIT”, fără p." },
        { en: "I'd like to return this.", ro: "Aș vrea să returnez asta.", note: "" },
        { en: "Is it on sale?", ro: "E la reducere?", note: "" },
        { en: "Where can I find the milk?", ro: "Unde găsesc laptele?", note: "" },
        { en: "Sorry, I'm not sure how to say this.", ro: "Scuze, nu știu sigur cum să spun.", note: "Apoi explică simplu, cu alte cuvinte." },
        { en: "Do you mean this one?", ro: "Vă referiți la acesta?", note: "Verifici că ai înțeles corect." },
        { en: "Hang on, let me check.", ro: "Stai puțin, să verific.", note: "Câștigi timp la casă." },
        { en: "I think there's a mistake on the bill.", ro: "Cred că e o greșeală pe notă.", note: "" }
      ],
      patterns: [
        { frame: "Do you have ___?", ro: "Aveți ___?",
          fills: [
            { en: "this in blue", ro: "asta în albastru" },
            { en: "a smaller size", ro: "o mărime mai mică" },
            { en: "any fresh bread", ro: "pâine proaspătă" },
            { en: "batteries", ro: "baterii" },
            { en: "anything cheaper", ro: "ceva mai ieftin" },
            { en: "a loyalty card", ro: "card de fidelitate" }
          ] },
        { frame: "Can I pay ___?", ro: "Pot plăti ___?",
          fills: [
            { en: "by card", ro: "cu cardul" },
            { en: "in cash", ro: "cash" },
            { en: "with my phone", ro: "cu telefonul" },
            { en: "in euros", ro: "în euro" },
            { en: "here", ro: "aici" },
            { en: "later", ro: "mai târziu" }
          ] }
      ],
      dialogues: [
        { title_ro: "În magazinul de haine", lines: [
          { who: "A", en: "Hi there, can I help you?", ro: "Bună, vă pot ajuta?" },
          { who: "B", en: "Yes, do you have this jacket in a medium?", ro: "Da, aveți geaca asta pe M?" },
          { who: "A", en: "Let me check... Yes, here you go.", ro: "Să verific... Da, poftiți." },
          { who: "B", en: "Thanks. Can I try it on?", ro: "Mulțumesc. Pot s-o probez?" },
          { who: "A", en: "Sure, the changing rooms are over there.", ro: "Sigur, cabinele sunt acolo." },
          { who: "B", en: "It fits. How much is it?", ro: "Îmi vine. Cât costă?" },
          { who: "A", en: "It's forty-five pounds, but it's on sale today.", ro: "Patruzeci și cinci de lire, dar azi e la reducere." },
          { who: "B", en: "Great, I'll take it.", ro: "Super, o iau." }
        ] },
        { title_ro: "La casă", lines: [
          { who: "A", en: "That's twelve fifty, please.", ro: "Doisprezece cincizeci, vă rog." },
          { who: "B", en: "Sorry, could you say that again?", ro: "Scuze, puteți repeta?" },
          { who: "A", en: "Twelve pounds fifty.", ro: "Doisprezece lire și cincizeci." },
          { who: "B", en: "Can I pay by card?", ro: "Pot plăti cu cardul?" },
          { who: "A", en: "Of course. Do you need a bag?", ro: "Desigur. Vă trebuie o pungă?" },
          { who: "B", en: "No, I've got one, thanks.", ro: "Nu, am una, mulțumesc." },
          { who: "A", en: "Here's your receipt. Have a nice day!", ro: "Poftiți bonul. O zi bună!" },
          { who: "B", en: "You too, bye.", ro: "Asemenea, la revedere." }
        ] }
      ],
      prompts: [
        { q_en: "Where do you usually do your shopping?", q_ro: "Unde îți faci de obicei cumpărăturile?",
          helpers: ["I usually go to ...", "It's cheap/close to ...", "Once a week, ...", "I sometimes buy online."] },
        { q_en: "Tell me about something you bought recently.", q_ro: "Povestește despre ceva ce ai cumpărat recent.",
          helpers: ["Last week I bought ...", "It cost ...", "I bought it because ...", "I'm happy with it."] },
        { q_en: "Do you prefer shopping online or in shops? Why?", q_ro: "Preferi cumpărăturile online sau în magazine? De ce?",
          helpers: ["I prefer ...", "The good thing is ...", "The problem is ...", "Let me think..."] }
      ]
    },
    {
      id: "zi-u4",
      title_ro: "Telefon, programări și ora",
      level: 2,
      chunks: [
        { en: "Hello, it's Maria speaking.", ro: "Bună ziua, sunt Maria.", note: "La telefon: „it's ...”, nu „I am ...”." },
        { en: "Could I speak to Mr Brown, please?", ro: "Aș putea vorbi cu domnul Brown, vă rog?", note: "" },
        { en: "Hold on, please.", ro: "Rămâneți la telefon, vă rog.", note: "" },
        { en: "He's not available at the moment.", ro: "Nu e disponibil momentan.", note: "" },
        { en: "Can I leave a message?", ro: "Pot lăsa un mesaj?", note: "" },
        { en: "Could you ask him to call me back?", ro: "Îi puteți spune să mă sune înapoi?", note: "" },
        { en: "Sorry, the line is really bad.", ro: "Scuze, se aude foarte prost.", note: "" },
        { en: "Can you spell that, please?", ro: "Puteți să-l spuneți pe litere?", note: "" },
        { en: "Let me write that down.", ro: "Stați să notez.", note: "Câștigi timp și eviți greșelile." },
        { en: "I'd like to make an appointment.", ro: "Aș vrea să fac o programare.", note: "" },
        { en: "Are you free on Tuesday?", ro: "Ești liber marți?", note: "" },
        { en: "Does Friday morning suit you?", ro: "Vă convine vineri dimineață?", note: "" },
        { en: "What time works for you?", ro: "Ce oră îți convine?", note: "" },
        { en: "How about half past three?", ro: "Ce zici de trei și jumătate?", note: "„half past three” = 3:30." },
        { en: "It's quarter to nine.", ro: "E nouă fără un sfert.", note: "" },
        { en: "I need to cancel my appointment.", ro: "Trebuie să-mi anulez programarea.", note: "" },
        { en: "Can we move it to next week?", ro: "Putem s-o mutăm săptămâna viitoare?", note: "" },
        { en: "I'm running ten minutes late.", ro: "Întârzii zece minute.", note: "Foarte folosit la telefon." },
        { en: "Just to confirm, that's Monday at ten?", ro: "Ca să confirm, luni la zece?", note: "Repetă detaliile ca să verifici." },
        { en: "Sorry, what was the number again?", ro: "Scuze, care era numărul?", note: "" }
      ],
      patterns: [
        { frame: "Can we meet on ___ at ___?", ro: "Ne putem întâlni ___ la ___?",
          fills: [
            { en: "Monday / ten", ro: "luni / zece" },
            { en: "Wednesday / half past two", ro: "miercuri / două și jumătate" },
            { en: "Friday / noon", ro: "vineri / prânz" },
            { en: "the fifth / quarter past nine", ro: "pe cinci / nouă și un sfert" },
            { en: "Saturday / eleven", ro: "sâmbătă / unsprezece" },
            { en: "Thursday / quarter to five", ro: "joi / cinci fără un sfert" }
          ] },
        { frame: "I'm calling about ___.", ro: "Sun în legătură cu ___.",
          fills: [
            { en: "my appointment", ro: "programarea mea" },
            { en: "the flat for rent", ro: "apartamentul de închiriat" },
            { en: "my order", ro: "comanda mea" },
            { en: "the invoice", ro: "factura" },
            { en: "your advert", ro: "anunțul dumneavoastră" },
            { en: "my son's school trip", ro: "excursia școlară a fiului meu" }
          ] }
      ],
      dialogues: [
        { title_ro: "Programare la coafor", lines: [
          { who: "A", en: "Good morning, Style Hair. How can I help?", ro: "Bună dimineața, Style Hair. Cu ce vă pot ajuta?" },
          { who: "B", en: "Hi, I'd like to make an appointment for a haircut.", ro: "Bună, aș vrea o programare pentru tuns." },
          { who: "A", en: "Sure. Does Thursday at four suit you?", ro: "Sigur. Vă convine joi la patru?" },
          { who: "B", en: "Sorry, I work until five. How about Saturday?", ro: "Scuze, lucrez până la cinci. Ce ziceți de sâmbătă?" },
          { who: "A", en: "Saturday at half past ten?", ro: "Sâmbătă la zece și jumătate?" },
          { who: "B", en: "Perfect. Just to confirm, Saturday at ten thirty.", ro: "Perfect. Ca să confirm, sâmbătă la zece și jumătate." },
          { who: "A", en: "That's right. Can I have your name?", ro: "Exact. Numele dumneavoastră?" },
          { who: "B", en: "Ioana Pop. P-O-P.", ro: "Ioana Pop. P-O-P." }
        ] },
        { title_ro: "Lași un mesaj", lines: [
          { who: "A", en: "Hello, Green Office, Sarah speaking.", ro: "Alo, Green Office, Sarah la telefon." },
          { who: "B", en: "Hi, could I speak to Mr Brown, please?", ro: "Bună, aș putea vorbi cu domnul Brown, vă rog?" },
          { who: "A", en: "I'm afraid he's in a meeting.", ro: "Mă tem că e într-o ședință." },
          { who: "B", en: "Can I leave a message?", ro: "Pot lăsa un mesaj?" },
          { who: "A", en: "Of course. Go ahead.", ro: "Desigur. Spuneți." },
          { who: "B", en: "Could you ask him to call Mihai? It's urgent.", ro: "Îi puteți spune să-l sune pe Mihai? E urgent." },
          { who: "A", en: "Sure. What's your number?", ro: "Sigur. Care e numărul dumneavoastră?" },
          { who: "B", en: "It's 0745 223 918. Thanks a lot.", ro: "E 0745 223 918. Mulțumesc mult." }
        ] }
      ],
      prompts: [
        { q_en: "Describe your typical week. When are you busy?", q_ro: "Descrie o săptămână obișnuită. Când ești ocupat?",
          helpers: ["On Mondays, I ...", "I'm usually busy on ...", "At the weekend, ...", "I'm free on ..."] },
        { q_en: "Do you like talking on the phone in English? Why or why not?", q_ro: "Îți place să vorbești la telefon în engleză? De ce?",
          helpers: ["To be honest, ...", "It's difficult because ...", "I always ask them to ...", "Let me think..."] },
        { q_en: "Explain how you make a doctor's appointment in Romania.", q_ro: "Explică cum faci o programare la doctor în România.",
          helpers: ["First, you call ...", "You can also ...", "Usually you wait ...", "The problem is ..."] }
      ]
    },
    {
      id: "zi-u5",
      title_ro: "Mâncare, gătit și conversație la restaurant",
      level: 3,
      chunks: [
        { en: "Have you got a table for two?", ro: "Aveți o masă pentru doi?", note: "" },
        { en: "Could we see the menu, please?", ro: "Ne puteți aduce meniul, vă rog?", note: "" },
        { en: "What do you recommend?", ro: "Ce ne recomandați?", note: "" },
        { en: "I'll have the chicken, please.", ro: "Eu iau puiul, vă rog.", note: "„I'll have...” e mai natural decât „I want...”." },
        { en: "Is there anything without meat?", ro: "Aveți ceva fără carne?", note: "" },
        { en: "I'm allergic to nuts.", ro: "Sunt alergic la nuci.", note: "" },
        { en: "Could we have some water, please?", ro: "Ne aduceți niște apă, vă rog?", note: "" },
        { en: "This is delicious.", ro: "E delicios.", note: "" },
        { en: "Could we have the bill, please?", ro: "Ne aduceți nota, vă rog?", note: "UK: bill; US: check." },
        { en: "Shall we split the bill?", ro: "Împărțim nota?", note: "" },
        { en: "It's my treat.", ro: "Fac eu cinste.", note: "" },
        { en: "I'm not a big fan of fish.", ro: "Nu mă dau în vânt după pește.", note: "Mod politicos de a spune că nu-ți place." },
        { en: "I love cooking at the weekend.", ro: "Îmi place să gătesc în weekend.", note: "" },
        { en: "You fry the onions first.", ro: "Mai întâi prăjești ceapa.", note: "„You” = oricine, la rețete." },
        { en: "Then you add the meat and stir.", ro: "Apoi adaugi carnea și amesteci.", note: "" },
        { en: "Leave it in the oven for an hour.", ro: "Lași în cuptor o oră.", note: "" },
        { en: "It's a typical Romanian dish.", ro: "E un fel de mâncare tipic românesc.", note: "" },
        { en: "It's a kind of soup, a bit sour.", ro: "E un fel de supă, puțin acră.", note: "„a kind of” te salvează când nu ai cuvântul exact." },
        { en: "How can I put it... it's like a pie.", ro: "Cum să zic... e ca o plăcintă.", note: "Câștigi timp în timp ce cauți cuvântul." },
        { en: "Would you like some more?", ro: "Mai vrei puțin?", note: "" }
      ],
      patterns: [
        { frame: "I'll have the ___, please.", ro: "Eu iau ___, vă rog.",
          fills: [
            { en: "soup of the day", ro: "supa zilei" },
            { en: "grilled salmon", ro: "somonul la grătar" },
            { en: "steak, medium", ro: "friptura, mediu" },
            { en: "vegetarian pasta", ro: "pastele vegetariene" },
            { en: "chocolate cake", ro: "tortul de ciocolată" },
            { en: "same", ro: "același lucru" }
          ] },
        { frame: "It's a kind of ___.", ro: "E un fel de ___.",
          fills: [
            { en: "soup with meatballs", ro: "supă cu perișoare" },
            { en: "cheese pie", ro: "plăcintă cu brânză" },
            { en: "cabbage roll", ro: "sarma" },
            { en: "corn porridge", ro: "mămăligă" },
            { en: "sweet bread", ro: "cozonac" },
            { en: "grilled sausage", ro: "mici" }
          ] }
      ],
      dialogues: [
        { title_ro: "La restaurant", lines: [
          { who: "A", en: "Are you ready to order?", ro: "Sunteți gata să comandați?" },
          { who: "B", en: "Almost. What do you recommend?", ro: "Aproape. Ce ne recomandați?" },
          { who: "A", en: "The lamb is very good today.", ro: "Mielul e foarte bun azi." },
          { who: "B", en: "Hmm, I'm not a big fan of lamb. I'll have the fish.", ro: "Hmm, nu mă dau în vânt după miel. Iau peștele." },
          { who: "A", en: "Good choice. Anything to drink?", ro: "Bună alegere. Ceva de băut?" },
          { who: "B", en: "Just some sparkling water, please.", ro: "Doar niște apă minerală, vă rog." },
          { who: "A", en: "Any allergies I should know about?", ro: "Aveți alergii de care ar trebui să știu?" },
          { who: "B", en: "Yes, I'm allergic to nuts.", ro: "Da, sunt alergic la nuci." }
        ] },
        { title_ro: "Explici o mâncare românească", lines: [
          { who: "A", en: "What's your favourite Romanian dish?", ro: "Care e mâncarea ta românească preferată?" },
          { who: "B", en: "Sarmale. How can I put it... cabbage rolls.", ro: "Sarmale. Cum să zic... rulouri de varză." },
          { who: "A", en: "What's inside?", ro: "Ce au înăuntru?" },
          { who: "B", en: "Minced meat, rice and onion.", ro: "Carne tocată, orez și ceapă." },
          { who: "A", en: "Sounds good. Is it hard to make?", ro: "Sună bine. E greu de făcut?" },
          { who: "B", en: "Not really, but it takes hours.", ro: "Nu chiar, dar durează ore întregi." },
          { who: "A", en: "You'll have to cook it for me one day!", ro: "Trebuie să mi le faci și mie într-o zi!" },
          { who: "B", en: "Deal! You'll love it.", ro: "S-a făcut! O să-ți placă." }
        ] }
      ],
      prompts: [
        { q_en: "Explain how to cook a dish you know well.", q_ro: "Explică cum se gătește o mâncare pe care o știi bine.",
          helpers: ["First, you ...", "Then you add ...", "Leave it for ...", "At the end, ..."] },
        { q_en: "Describe a traditional Romanian meal to a foreigner.", q_ro: "Descrie unui străin o masă tradițională românească.",
          helpers: ["It's a kind of ...", "It's made with ...", "We usually eat it at ...", "How can I put it..."] },
        { q_en: "Tell me about your favourite restaurant.", q_ro: "Povestește-mi despre restaurantul tău preferat.",
          helpers: ["It's near ...", "The food is ...", "I usually order ...", "I go there when ..."] }
      ]
    },
    {
      id: "zi-u6",
      title_ro: "Sănătate: la doctor și la farmacie",
      level: 3,
      chunks: [
        { en: "I don't feel very well.", ro: "Nu mă simt prea bine.", note: "" },
        { en: "I've got a headache.", ro: "Mă doare capul.", note: "„I've got a + durere”." },
        { en: "I've got a sore throat.", ro: "Mă doare în gât.", note: "" },
        { en: "I think I've got a cold.", ro: "Cred că am răcit.", note: "" },
        { en: "My back hurts.", ro: "Mă doare spatele.", note: "" },
        { en: "It started three days ago.", ro: "A început acum trei zile.", note: "" },
        { en: "I've had a temperature since yesterday.", ro: "Am febră de ieri.", note: "„since” + moment de început." },
        { en: "It hurts when I swallow.", ro: "Mă doare când înghit.", note: "" },
        { en: "I feel dizzy.", ro: "Am amețeli.", note: "" },
        { en: "I'm not taking any medication.", ro: "Nu iau niciun medicament.", note: "" },
        { en: "Do I need a prescription for this?", ro: "Îmi trebuie rețetă pentru asta?", note: "" },
        { en: "How often should I take it?", ro: "Cât de des trebuie să-l iau?", note: "" },
        { en: "Twice a day, after meals.", ro: "De două ori pe zi, după masă.", note: "" },
        { en: "Have you got something for a cough?", ro: "Aveți ceva pentru tuse?", note: "" },
        { en: "Is it serious?", ro: "E ceva grav?", note: "" },
        { en: "I need a sick note for work.", ro: "Îmi trebuie concediu medical pentru serviciu.", note: "" },
        { en: "It's hard to explain, it's a kind of pressure.", ro: "E greu de explicat, e un fel de presiune.", note: "Descrie senzația cu cuvinte simple." },
        { en: "Sorry, what does „drowsy” mean?", ro: "Scuze, ce înseamnă „drowsy”?", note: "„drowsy” = somnoros." },
        { en: "So, if I understand correctly, I should rest?", ro: "Deci, dacă am înțeles bine, trebuie să mă odihnesc?", note: "Rezumi ca să verifici." },
        { en: "I hope you feel better soon.", ro: "Sper să te faci bine curând.", note: "" }
      ],
      patterns: [
        { frame: "I've got ___.", ro: "Am ___.",
          fills: [
            { en: "a headache", ro: "durere de cap" },
            { en: "a stomach ache", ro: "dureri de stomac" },
            { en: "a blocked nose", ro: "nasul înfundat" },
            { en: "a temperature", ro: "febră" },
            { en: "a rash on my arm", ro: "o iritație pe braț" },
            { en: "toothache", ro: "durere de dinți" }
          ] },
        { frame: "It started ___.", ro: "A început ___.",
          fills: [
            { en: "yesterday morning", ro: "ieri dimineață" },
            { en: "two days ago", ro: "acum două zile" },
            { en: "last week", ro: "săptămâna trecută" },
            { en: "after dinner", ro: "după cină" },
            { en: "when I woke up", ro: "când m-am trezit" },
            { en: "on Sunday", ro: "duminică" }
          ] }
      ],
      dialogues: [
        { title_ro: "La medicul de familie", lines: [
          { who: "A", en: "So, what seems to be the problem?", ro: "Deci, care pare să fie problema?" },
          { who: "B", en: "I've got a sore throat and a temperature.", ro: "Mă doare în gât și am febră." },
          { who: "A", en: "When did it start?", ro: "Când a început?" },
          { who: "B", en: "Three days ago. It hurts when I swallow.", ro: "Acum trei zile. Mă doare când înghit." },
          { who: "A", en: "Are you taking anything for it?", ro: "Iei ceva pentru asta?" },
          { who: "B", en: "Just paracetamol. Is it serious?", ro: "Doar paracetamol. E grav?" },
          { who: "A", en: "No, it's a throat infection. Rest and drink plenty of fluids.", ro: "Nu, e o infecție în gât. Odihnă și multe lichide." },
          { who: "B", en: "So, if I understand correctly, no antibiotics?", ro: "Deci, dacă am înțeles bine, fără antibiotice?" }
        ] },
        { title_ro: "La farmacie", lines: [
          { who: "A", en: "Hello, can I help you?", ro: "Bună ziua, vă pot ajuta?" },
          { who: "B", en: "Yes, have you got something for a cough?", ro: "Da, aveți ceva pentru tuse?" },
          { who: "A", en: "Is it a dry cough or a chesty cough?", ro: "E tuse seacă sau cu secreții?" },
          { who: "B", en: "Sorry, what does „chesty” mean?", ro: "Scuze, ce înseamnă „chesty”?" },
          { who: "A", en: "With mucus, from the chest.", ro: "Cu flegmă, din piept." },
          { who: "B", en: "Ah, dry. How often should I take it?", ro: "A, seacă. Cât de des trebuie s-o iau?" },
          { who: "A", en: "Three times a day. It might make you drowsy.", ro: "De trei ori pe zi. Te poate face somnoros." },
          { who: "B", en: "OK, thanks. I won't drive, then.", ro: "Bine, mulțumesc. Atunci nu conduc." }
        ] }
      ],
      prompts: [
        { q_en: "Describe the last time you were ill.", q_ro: "Descrie ultima dată când ai fost bolnav.",
          helpers: ["It started with ...", "I had ...", "I went to ...", "After a few days, ..."] },
        { q_en: "What do you do to stay healthy?", q_ro: "Ce faci ca să rămâi sănătos?",
          helpers: ["I try to ...", "I don't ... as much as I should.", "Every week, I ...", "To be honest, ..."] },
        { q_en: "Explain to a pharmacist what you need and why.", q_ro: "Explică unui farmacist ce îți trebuie și de ce.",
          helpers: ["I need something for ...", "It started ...", "I'm allergic to ...", "Do I need a prescription?"] }
      ]
    },
    {
      id: "zi-u7",
      title_ro: "Păreri, sentimente și conversație la serviciu",
      level: 4,
      chunks: [
        { en: "How was your weekend?", ro: "Cum a fost weekendul?", note: "Întrebarea clasică de luni dimineață." },
        { en: "Pretty quiet, actually. Yours?", ro: "Destul de liniștit, de fapt. Al tău?", note: "" },
        { en: "In my opinion, it's a good idea.", ro: "După părerea mea, e o idee bună.", note: "" },
        { en: "I'm not sure about that.", ro: "Nu sunt sigur de asta.", note: "Dezacord politicos." },
        { en: "I see what you mean, but...", ro: "Înțeleg ce vrei să spui, dar...", note: "" },
        { en: "I totally agree.", ro: "Sunt total de acord.", note: "" },
        { en: "To be honest, I'm a bit stressed.", ro: "Sincer, sunt puțin stresat.", note: "" },
        { en: "I'm really looking forward to the holiday.", ro: "Abia aștept concediul.", note: "„look forward to” + substantiv / -ing." },
        { en: "It's been a long week.", ro: "A fost o săptămână lungă.", note: "" },
        { en: "I'm a bit worried about the deadline.", ro: "Sunt puțin îngrijorat de termen.", note: "" },
        { en: "That's really annoying.", ro: "Chiar e enervant.", note: "" },
        { en: "Well done, that's great news!", ro: "Bravo, e o veste grozavă!", note: "" },
        { en: "Do you fancy a coffee?", ro: "Bei o cafea?", note: "„fancy” = ai chef de (UK)." },
        { en: "Could you give me a hand with this?", ro: "Mă poți ajuta puțin cu asta?", note: "" },
        { en: "Sorry to interrupt, but...", ro: "Scuze că întrerup, dar...", note: "" },
        { en: "What I'm trying to say is...", ro: "Ce încerc să spun e că...", note: "Reformulezi când te încurci." },
        { en: "That's a good question. Let me see...", ro: "Bună întrebare. Să vedem...", note: "Câștigi timp elegant." },
        { en: "It depends on the situation.", ro: "Depinde de situație.", note: "" },
        { en: "I'd rather not talk about it.", ro: "Aș prefera să nu vorbesc despre asta.", note: "" },
        { en: "Anyway, I'd better get back to work.", ro: "În fine, ar trebui să mă întorc la treabă.", note: "Încheie politicos o discuție." }
      ],
      patterns: [
        { frame: "I think ___ because ___.", ro: "Cred că ___ pentru că ___.",
          fills: [
            { en: "working from home is better / I save time", ro: "lucrul de acasă e mai bun / economisesc timp" },
            { en: "the meeting was useful / we made a decision", ro: "ședința a fost utilă / am luat o decizie" },
            { en: "we need more people / there's too much work", ro: "ne trebuie mai mulți oameni / e prea multă muncă" },
            { en: "the new boss is fair / she listens", ro: "noua șefă e corectă / ascultă" },
            { en: "summer is the best season / it's warm", ro: "vara e cel mai bun anotimp / e cald" },
            { en: "it's too late / the shops are closed", ro: "e prea târziu / magazinele sunt închise" }
          ] },
        { frame: "I'm a bit ___ about ___.", ro: "Sunt puțin ___ în legătură cu ___.",
          fills: [
            { en: "worried / the presentation", ro: "îngrijorat / prezentarea" },
            { en: "nervous / my interview", ro: "emoționat / interviul meu" },
            { en: "excited / the trip", ro: "entuziasmat / excursie" },
            { en: "confused / the new rules", ro: "confuz / noile reguli" },
            { en: "unhappy / my schedule", ro: "nemulțumit / programul meu" },
            { en: "curious / the results", ro: "curios / rezultate" }
          ] }
      ],
      dialogues: [
        { title_ro: "Luni dimineață la birou", lines: [
          { who: "A", en: "Morning! How was your weekend?", ro: "Neața! Cum a fost weekendul?" },
          { who: "B", en: "Pretty quiet, actually. We just stayed at home. Yours?", ro: "Destul de liniștit. Am stat acasă. Al tău?" },
          { who: "A", en: "Busy! My sister got married.", ro: "Agitat! S-a măritat sora mea." },
          { who: "B", en: "Oh, congratulations! How was it?", ro: "A, felicitări! Cum a fost?" },
          { who: "A", en: "Lovely, but I'm exhausted now.", ro: "Frumos, dar acum sunt frânt." },
          { who: "B", en: "I bet. Do you fancy a coffee?", ro: "Îmi închipui. Bei o cafea?" },
          { who: "A", en: "Yes, please. I really need one.", ro: "Da, te rog. Chiar am nevoie." }
        ] },
        { title_ro: "Nu ești de acord", lines: [
          { who: "A", en: "I think we should finish the project by Friday.", ro: "Cred că ar trebui să terminăm proiectul până vineri." },
          { who: "B", en: "I see what you mean, but I'm not sure that's possible.", ro: "Înțeleg ce vrei să spui, dar nu sunt sigur că se poate." },
          { who: "A", en: "Why not?", ro: "De ce nu?" },
          { who: "B", en: "That's a good question. Let me see... we're two people short.", ro: "Bună întrebare. Să vedem... ne lipsesc doi oameni." },
          { who: "A", en: "So what do you suggest?", ro: "Deci ce propui?" },
          { who: "B", en: "What I'm trying to say is, we need one more week.", ro: "Ce încerc să spun e că ne mai trebuie o săptămână." },
          { who: "A", en: "OK, fair enough. Let's talk to the manager.", ro: "Bine, e corect. Hai să vorbim cu managerul." }
        ] }
      ],
      prompts: [
        { q_en: "What do you like and dislike about your job?", q_ro: "Ce îți place și ce nu îți place la serviciu?",
          helpers: ["What I like most is ...", "On the other hand, ...", "To be honest, ...", "It depends on ..."] },
        { q_en: "Is it better to work from home or in an office? Give your opinion.", q_ro: "E mai bine să lucrezi de acasă sau la birou? Spune-ți părerea.",
          helpers: ["In my opinion, ...", "I see the point, but ...", "For example, ...", "All in all, ..."] },
        { q_en: "Describe a situation at work that made you stressed.", q_ro: "Descrie o situație de la serviciu care te-a stresat.",
          helpers: ["Once, ...", "I was worried because ...", "In the end, ...", "What I learned is ..."] }
      ]
    },
    {
      id: "zi-u8",
      title_ro: "Povești din trecut și planuri",
      level: 4,
      chunks: [
        { en: "Last summer we went to the seaside.", ro: "Vara trecută am fost la mare.", note: "Past simple pentru fapte terminate." },
        { en: "When I was a child, I lived in a village.", ro: "Când eram copil, locuiam la sat.", note: "" },
        { en: "I used to play football every day.", ro: "Obișnuiam să joc fotbal în fiecare zi.", note: "„used to” = obiceiuri din trecut." },
        { en: "It was a long time ago.", ro: "A fost demult.", note: "" },
        { en: "Guess what happened yesterday?", ro: "Ghici ce s-a întâmplat ieri?", note: "Bun început pentru o poveste." },
        { en: "At first I didn't understand.", ro: "La început n-am înțeles.", note: "" },
        { en: "Suddenly, the lights went out.", ro: "Deodată, s-a luat curentul.", note: "" },
        { en: "In the end, everything was fine.", ro: "Până la urmă, totul a fost bine.", note: "" },
        { en: "I'll never forget that day.", ro: "N-o să uit niciodată ziua aceea.", note: "" },
        { en: "Where was I? Oh yes...", ro: "Unde rămăsesem? A, da...", note: "Revii la poveste după o pauză." },
        { en: "I'm going to visit my parents next month.", ro: "O să-mi vizitez părinții luna viitoare.", note: "„going to” = plan deja hotărât." },
        { en: "We're going to paint the kitchen.", ro: "O să zugrăvim bucătăria.", note: "" },
        { en: "I think it'll rain tomorrow.", ro: "Cred că o să plouă mâine.", note: "„will” = presupunere." },
        { en: "Don't worry, I'll call you.", ro: "Nu-ți face griji, te sun eu.", note: "„will” = decizie pe loc, promisiune." },
        { en: "I'm meeting Ana on Saturday.", ro: "Mă văd cu Ana sâmbătă.", note: "Prezent continuu pentru întâlniri fixate." },
        { en: "If I had more time, I'd learn to swim.", ro: "Dacă aș avea mai mult timp, aș învăța să înot.", note: "" },
        { en: "I'd love to go to Scotland one day.", ro: "Mi-ar plăcea mult să merg în Scoția într-o zi.", note: "" },
        { en: "We'll see how it goes.", ro: "Vedem cum merge.", note: "" },
        { en: "Let's keep in touch.", ro: "Să păstrăm legătura.", note: "" },
        { en: "Long story short, we missed the train.", ro: "Pe scurt, am pierdut trenul.", note: "Scurtezi povestea când te încurci." }
      ],
      patterns: [
        { frame: "Last ___, I ___.", ro: "___ trecut(ă), ___.",
          fills: [
            { en: "weekend / visited my friends", ro: "Weekendul / mi-am vizitat prietenii" },
            { en: "year / changed my job", ro: "Anul / mi-am schimbat serviciul" },
            { en: "night / watched a good film", ro: "Aseară / am văzut un film bun" },
            { en: "month / started a course", ro: "Luna / am început un curs" },
            { en: "Christmas / cooked for twelve people", ro: "De Crăciunul / am gătit pentru doisprezece oameni" },
            { en: "summer / went to Greece", ro: "Vara / am fost în Grecia" }
          ] },
        { frame: "Next ___, I'm going to ___.", ro: "___ viitor/viitoare, o să ___.",
          fills: [
            { en: "year / move house", ro: "Anul / mă mut" },
            { en: "week / start a diet", ro: "Săptămâna / încep o dietă" },
            { en: "month / visit my brother", ro: "Luna / îmi vizitez fratele" },
            { en: "summer / learn to drive", ro: "Vara / învăț să conduc" },
            { en: "weekend / fix the car", ro: "Weekendul / repar mașina" },
            { en: "spring / plant a garden", ro: "Primăvara / fac o grădină" }
          ] }
      ],
      dialogues: [
        { title_ro: "O poveste de călătorie", lines: [
          { who: "A", en: "So, how was your trip to Vienna?", ro: "Deci, cum a fost excursia la Viena?" },
          { who: "B", en: "Funny you ask. Guess what happened?", ro: "Bine că întrebi. Ghici ce s-a întâmplat?" },
          { who: "A", en: "What?", ro: "Ce?" },
          { who: "B", en: "We got to the station, and the train was cancelled.", ro: "Am ajuns la gară și trenul era anulat." },
          { who: "A", en: "Oh no! What did you do?", ro: "Vai! Și ce-ați făcut?" },
          { who: "B", en: "We rented a car. Long story short, we arrived at midnight.", ro: "Am închiriat o mașină. Pe scurt, am ajuns la miezul nopții." },
          { who: "A", en: "But did you enjoy it in the end?", ro: "Dar până la urmă v-a plăcut?" },
          { who: "B", en: "Yes, it was amazing. I'll never forget it.", ro: "Da, a fost minunat. N-o să uit niciodată." }
        ] },
        { title_ro: "Planuri de viitor", lines: [
          { who: "A", en: "Any plans for the summer?", ro: "Ai planuri pentru vară?" },
          { who: "B", en: "Yes, we're going to visit my parents in Romania.", ro: "Da, o să-mi vizităm părinții în România." },
          { who: "A", en: "Lovely. How long are you staying?", ro: "Frumos. Cât stați?" },
          { who: "B", en: "Two weeks. And then, if we have money, we'd like to see the Delta.", ro: "Două săptămâni. Apoi, dacă avem bani, am vrea să vedem Delta." },
          { who: "A", en: "I'd love to go there one day.", ro: "Mi-ar plăcea să merg acolo într-o zi." },
          { who: "B", en: "You should! I'll send you some photos.", ro: "Ar trebui! Îți trimit niște poze." },
          { who: "A", en: "Great. Let's keep in touch.", ro: "Super. Să păstrăm legătura." }
        ] }
      ],
      prompts: [
        { q_en: "Tell me about a memorable day in your life.", q_ro: "Povestește-mi despre o zi memorabilă din viața ta.",
          helpers: ["It was ...", "At first, ...", "Suddenly, ...", "In the end, ...", "I'll never forget ..."] },
        { q_en: "What are your plans for next year?", q_ro: "Ce planuri ai pentru anul viitor?",
          helpers: ["I'm going to ...", "I'd like to ...", "If everything goes well, ...", "We'll see how it goes."] },
        { q_en: "If you could live anywhere, where would you live and why?", q_ro: "Dacă ai putea trăi oriunde, unde ai trăi și de ce?",
          helpers: ["If I could, I'd ...", "The main reason is ...", "I'd miss ...", "Let me think..."] }
      ]
    }
  ]
});
