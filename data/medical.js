window.CONTENT = window.CONTENT || [];
window.CONTENT.push({
  topic: "medical",
  title_ro: "Prim ajutor și echipamente medicale",
  units: [
    {
      id: "medical-u1",
      title_ro: "Corpul, simptome și întrebări de bază",
      level: 1,
      chunks: [
        { en: "Hello, I'm a first aider.", ro: "Bună ziua, acord prim ajutor.", note: "„First aider” = persoana care acordă primul ajutor." },
        { en: "Can you hear me?", ro: "Mă auziți?", note: "" },
        { en: "What's your name?", ro: "Cum vă numiți?", note: "" },
        { en: "Where does it hurt?", ro: "Unde vă doare?", note: "" },
        { en: "Show me where it hurts.", ro: "Arătați-mi unde vă doare.", note: "" },
        { en: "Does it hurt here?", ro: "Vă doare aici?", note: "" },
        { en: "My chest hurts.", ro: "Mă doare pieptul.", note: "" },
        { en: "I've got a headache.", ro: "Mă doare capul.", note: "" },
        { en: "I feel sick.", ro: "Mi-e greață.", note: "În engleza britanică „sick” = greață, nu „bolnav”." },
        { en: "I feel dizzy.", ro: "Am amețeli.", note: "" },
        { en: "I can't breathe properly.", ro: "Nu pot respira bine.", note: "" },
        { en: "I can't move my arm.", ro: "Nu pot mișca brațul.", note: "" },
        { en: "My leg is numb.", ro: "Mi-a amorțit piciorul.", note: "" },
        { en: "Are you in pain?", ro: "Aveți dureri?", note: "" },
        { en: "On a scale of one to ten?", ro: "Pe o scară de la unu la zece?", note: "Folosit pentru intensitatea durerii." },
        { en: "Is the pain sharp or dull?", ro: "Durerea e ascuțită sau surdă?", note: "" },
        { en: "When did it start?", ro: "Când a început?", note: "" },
        { en: "Did you fall?", ro: "Ați căzut?", note: "" },
        { en: "Did you hit your head?", ro: "V-ați lovit la cap?", note: "" },
        { en: "Don't move your neck.", ro: "Nu mișcați gâtul.", note: "" }
      ],
      patterns: [
        { frame: "My ___ hurts.", ro: "Mă doare ___.",
          fills: [
            { en: "head", ro: "capul" },
            { en: "back", ro: "spatele" },
            { en: "stomach", ro: "stomacul / burta" },
            { en: "knee", ro: "genunchiul" },
            { en: "wrist", ro: "încheietura" },
            { en: "shoulder", ro: "umărul" }
          ] },
        { frame: "Do you feel ___?", ro: "Vă simțiți ___?",
          fills: [
            { en: "dizzy", ro: "amețit" },
            { en: "sick", ro: "cu greață" },
            { en: "cold", ro: "înfrigurat" },
            { en: "weak", ro: "slăbit" },
            { en: "short of breath", ro: "fără aer" },
            { en: "confused", ro: "confuz" }
          ] }
      ],
      dialogues: [
        { title_ro: "O persoană căzută pe stradă", lines: [
          { who: "A", en: "Help! I fell down the stairs.", ro: "Ajutor! Am căzut pe scări." },
          { who: "B", en: "Hello, I'm a first aider. Can I help you?", ro: "Bună, acord prim ajutor. Vă pot ajuta?" },
          { who: "A", en: "Yes, please. My ankle really hurts.", ro: "Da, vă rog. Mă doare tare glezna." },
          { who: "B", en: "Okay. Did you hit your head?", ro: "Bine. V-ați lovit la cap?" },
          { who: "A", en: "No, I don't think so.", ro: "Nu, nu cred." },
          { who: "B", en: "Good. Don't move your foot. Does it hurt here?", ro: "Bine. Nu mișcați piciorul. Vă doare aici?" },
          { who: "A", en: "Yes, right there. It's very painful.", ro: "Da, exact acolo. Doare foarte tare." },
          { who: "B", en: "On a scale of one to ten, how bad is it?", ro: "Pe o scară de la unu la zece, cât de tare doare?" }
        ] },
        { title_ro: "Un coleg care nu se simte bine", lines: [
          { who: "A", en: "I don't feel well.", ro: "Nu mă simt bine." },
          { who: "B", en: "Sit down, please. What's wrong?", ro: "Stați jos, vă rog. Ce s-a întâmplat?" },
          { who: "A", en: "I feel dizzy and sick.", ro: "Am amețeli și greață." },
          { who: "B", en: "When did it start?", ro: "Când a început?" },
          { who: "A", en: "About ten minutes ago.", ro: "Acum vreo zece minute." },
          { who: "B", en: "Are you in pain anywhere? Your chest, maybe?", ro: "Vă doare undeva? Poate pieptul?" }
        ] }
      ],
      prompts: [
        { q_en: "Name the main parts of the body you check first.", q_ro: "Numește principalele părți ale corpului pe care le verifici primele.",
          helpers: ["First, I check the head ...", "Then the neck and chest ...", "After that, the arms and legs ..."] },
        { q_en: "What do you ask a person who has fallen?", q_ro: "Ce întrebi o persoană care a căzut?",
          helpers: ["I ask their name ...", "I ask where it hurts ...", "I ask if they hit their head ..."] },
        { q_en: "Describe a time you felt ill. What were your symptoms?", q_ro: "Descrie o situație în care ți-a fost rău. Ce simptome aveai?",
          helpers: ["I felt ...", "My ... hurt.", "I had a ...", "It started when ..."] }
      ]
    },
    {
      id: "medical-u2",
      title_ro: "Siguranța locului, apelul la 112, liniștirea victimei",
      level: 1,
      chunks: [
        { en: "Is it safe to approach?", ro: "E sigur să mă apropii?", note: "" },
        { en: "Check for danger first.", ro: "Verifică întâi pericolele.", note: "" },
        { en: "Stay back, please.", ro: "Stați mai înapoi, vă rog.", note: "" },
        { en: "Watch out for traffic!", ro: "Atenție la mașini!", note: "" },
        { en: "Put your gloves on.", ro: "Puneți-vă mănușile.", note: "" },
        { en: "Turn off the engine.", ro: "Opriți motorul.", note: "" },
        { en: "Call one-one-two.", ro: "Sunați la 112.", note: "În Marea Britanie se folosește 999, dar 112 merge în toată Europa." },
        { en: "I need an ambulance.", ro: "Am nevoie de o ambulanță.", note: "" },
        { en: "There's been an accident.", ro: "A avut loc un accident.", note: "" },
        { en: "We're on the main road.", ro: "Suntem pe drumul principal.", note: "" },
        { en: "One person is injured.", ro: "O persoană este rănită.", note: "" },
        { en: "He isn't breathing.", ro: "Nu respiră.", note: "" },
        { en: "Put the phone on speaker.", ro: "Puneți telefonul pe difuzor.", note: "" },
        { en: "Don't hang up.", ro: "Nu închideți.", note: "" },
        { en: "Help is on the way.", ro: "Ajutorul e pe drum.", note: "" },
        { en: "You're going to be okay.", ro: "O să fiți bine.", note: "" },
        { en: "I'm staying with you.", ro: "Rămân cu dumneavoastră.", note: "" },
        { en: "Try to stay calm.", ro: "Încercați să rămâneți calm.", note: "" },
        { en: "Breathe slowly with me.", ro: "Respirați încet, odată cu mine.", note: "" },
        { en: "Can someone bring the AED?", ro: "Poate cineva să aducă defibrilatorul?", note: "AED = defibrilator extern automat (DEA)." }
      ],
      patterns: [
        { frame: "Can you ___, please?", ro: "Puteți să ___, vă rog?",
          fills: [
            { en: "call an ambulance", ro: "chemați o ambulanță" },
            { en: "stop the traffic", ro: "opriți traficul" },
            { en: "bring the first aid kit", ro: "aduceți trusa de prim ajutor" },
            { en: "hold his head still", ro: "țineți-i capul nemișcat" },
            { en: "move the crowd back", ro: "dați lumea mai înapoi" },
            { en: "open the door for the paramedics", ro: "deschideți ușa pentru paramedici" }
          ] },
        { frame: "There's a ___ here.", ro: "Aici este ___.",
          fills: [
            { en: "fire", ro: "un incendiu" },
            { en: "gas leak", ro: "o scurgere de gaz" },
            { en: "broken glass", ro: "sticlă spartă" },
            { en: "live wire", ro: "un cablu sub tensiune" },
            { en: "lot of blood", ro: "mult sânge" },
            { en: "child injured", ro: "un copil rănit" }
          ] }
      ],
      dialogues: [
        { title_ro: "Apelul de urgență", lines: [
          { who: "A", en: "Emergency. Which service do you need?", ro: "Urgență. De ce serviciu aveți nevoie?" },
          { who: "B", en: "Ambulance, please. There's been an accident.", ro: "Ambulanță, vă rog. A avut loc un accident." },
          { who: "A", en: "Where are you exactly?", ro: "Unde sunteți exact?" },
          { who: "B", en: "We're on the main road, near the petrol station.", ro: "Suntem pe drumul principal, lângă benzinărie." },
          { who: "A", en: "How many people are injured?", ro: "Câte persoane sunt rănite?" },
          { who: "B", en: "One man. He's awake but bleeding from his head.", ro: "Un bărbat. E conștient, dar sângerează la cap." },
          { who: "A", en: "Okay. Stay on the line, please.", ro: "Bine. Rămâneți pe fir, vă rog." },
          { who: "B", en: "Yes, I'll stay. I'll put you on speaker.", ro: "Da, rămân. Vă pun pe difuzor." }
        ] },
        { title_ro: "Liniștirea victimei", lines: [
          { who: "A", en: "Am I going to die?", ro: "O să mor?" },
          { who: "B", en: "No. Help is on the way. I'm staying with you.", ro: "Nu. Ajutorul e pe drum. Rămân cu dumneavoastră." },
          { who: "A", en: "I'm so scared.", ro: "Mi-e foarte frică." },
          { who: "B", en: "I understand. Breathe slowly with me.", ro: "Înțeleg. Respirați încet, odată cu mine." },
          { who: "A", en: "Okay. Where's the ambulance?", ro: "Bine. Unde e ambulanța?" },
          { who: "B", en: "It's coming. Try to stay calm and don't move.", ro: "Vine. Încercați să rămâneți calm și nu vă mișcați." }
        ] }
      ],
      prompts: [
        { q_en: "What dangers do you check for at an accident scene?", q_ro: "Ce pericole verifici la locul unui accident?",
          helpers: ["First, I look for ...", "I check for traffic and ...", "I put my gloves on ..."] },
        { q_en: "What information do you give when you call 112?", q_ro: "Ce informații dai când suni la 112?",
          helpers: ["I say where we are ...", "I say what happened ...", "I say how many people ...", "I don't hang up ..."] },
        { q_en: "How do you calm down a frightened person?", q_ro: "Cum liniștești o persoană speriată?",
          helpers: ["I tell them my name ...", "I say help is coming ...", "I speak slowly ..."] }
      ]
    },
    {
      id: "medical-u3",
      title_ro: "Resuscitare (RCP) și DEA pas cu pas",
      level: 2,
      chunks: [
        { en: "Shake their shoulders gently.", ro: "Scuturați-l ușor de umeri.", note: "" },
        { en: "Open the airway.", ro: "Deschideți căile respiratorii.", note: "" },
        { en: "Tilt the head and lift the chin.", ro: "Înclinați capul și ridicați bărbia.", note: "" },
        { en: "Check for breathing.", ro: "Verificați respirația.", note: "" },
        { en: "Look, listen and feel for ten seconds.", ro: "Priviți, ascultați și simțiți timp de zece secunde.", note: "Maximum 10 secunde." },
        { en: "Gasping isn't normal breathing.", ro: "Respirația agonică nu e respirație normală.", note: "Tratați ca stop cardiac." },
        { en: "Start chest compressions.", ro: "Începeți compresiile toracice.", note: "" },
        { en: "Hands in the centre of the chest.", ro: "Mâinile în centrul pieptului.", note: "Pe jumătatea inferioară a sternului." },
        { en: "Keep your arms straight.", ro: "Țineți brațele întinse.", note: "" },
        { en: "Push hard and fast.", ro: "Apăsați puternic și repede.", note: "Comandă clasică de instructor." },
        { en: "Five to six centimetres deep.", ro: "Cinci până la șase centimetri adâncime.", note: "" },
        { en: "A hundred to a hundred and twenty a minute.", ro: "O sută până la o sută douăzeci pe minut.", note: "" },
        { en: "Let the chest come back up.", ro: "Lăsați pieptul să revină complet.", note: "Revenirea completă a toracelui." },
        { en: "Thirty compressions, two breaths.", ro: "Treizeci de compresii, două ventilații.", note: "Raportul 30:2." },
        { en: "Switch on the AED.", ro: "Porniți defibrilatorul.", note: "" },
        { en: "Follow the voice prompts.", ro: "Urmați instrucțiunile vocale.", note: "" },
        { en: "Attach the pads to bare skin.", ro: "Aplicați electrozii pe pielea goală.", note: "" },
        { en: "Stand clear! Don't touch the patient.", ro: "Toată lumea departe! Nu atingeți pacientul.", note: "" },
        { en: "Press the shock button.", ro: "Apăsați butonul de șoc.", note: "" },
        { en: "Continue CPR straight away.", ro: "Continuați imediat resuscitarea.", note: "Fără pauză după șoc." },
        { en: "Swap rescuers every two minutes.", ro: "Schimbați salvatorii la fiecare două minute.", note: "Previne oboseala." }
      ],
      patterns: [
        { frame: "Now, ___.", ro: "Acum, ___.",
          fills: [
            { en: "kneel next to the casualty", ro: "îngenuncheați lângă victimă" },
            { en: "open the airway", ro: "deschideți căile respiratorii" },
            { en: "start compressions", ro: "începeți compresiile" },
            { en: "give two rescue breaths", ro: "dați două ventilații" },
            { en: "place the pads", ro: "puneți electrozii" },
            { en: "stand clear", ro: "îndepărtați-vă" }
          ] },
        { frame: "Put one pad ___.", ro: "Puneți un electrod ___.",
          fills: [
            { en: "below the right collarbone", ro: "sub clavicula dreaptă" },
            { en: "on the left side, below the armpit", ro: "pe partea stângă, sub axilă" },
            { en: "on the centre of the chest", ro: "în centrul pieptului" },
            { en: "on the back, between the shoulder blades", ro: "pe spate, între omoplați" },
            { en: "on dry skin", ro: "pe piele uscată" },
            { en: "away from the pacemaker", ro: "la distanță de stimulatorul cardiac" }
          ] }
      ],
      dialogues: [
        { title_ro: "Instructorul conduce exercițiul", lines: [
          { who: "A", en: "The casualty isn't responding. What now?", ro: "Victima nu răspunde. Ce urmează?" },
          { who: "B", en: "Shout for help, then open the airway.", ro: "Strigați după ajutor, apoi deschideți căile respiratorii." },
          { who: "A", en: "Okay. Head tilt, chin lift.", ro: "Bine. Capul pe spate, bărbia sus." },
          { who: "B", en: "Good. Now check for breathing. No more than ten seconds.", ro: "Bine. Acum verificați respirația. Nu mai mult de zece secunde." },
          { who: "A", en: "He's not breathing normally.", ro: "Nu respiră normal." },
          { who: "B", en: "Call 112 and send someone for the AED.", ro: "Sunați la 112 și trimiteți pe cineva după DEA." },
          { who: "A", en: "Done. Shall I start compressions?", ro: "Gata. Încep compresiile?" },
          { who: "B", en: "Yes. Thirty compressions. Push hard and fast.", ro: "Da. Treizeci de compresii. Apăsați puternic și repede." }
        ] },
        { title_ro: "Folosirea DEA", lines: [
          { who: "A", en: "The AED is here. What do I do?", ro: "A sosit DEA. Ce fac?" },
          { who: "B", en: "Switch it on and follow the voice prompts.", ro: "Porniți-l și urmați instrucțiunile vocale." },
          { who: "A", en: "It says attach pads to the patient's bare chest.", ro: "Spune să aplic electrozii pe pieptul gol al pacientului." },
          { who: "B", en: "Right. Keep doing compressions while I attach them.", ro: "Corect. Continuați compresiile cât timp îi aplic eu." },
          { who: "A", en: "It's analysing now.", ro: "Acum analizează." },
          { who: "B", en: "Stand clear! Nobody touch him.", ro: "Toată lumea departe! Nimeni să nu-l atingă." },
          { who: "A", en: "Shock advised. Pressing the button.", ro: "Șoc recomandat. Apăs butonul." },
          { who: "B", en: "Good. Restart compressions straight away.", ro: "Bine. Reîncepeți imediat compresiile." }
        ] }
      ],
      prompts: [
        { q_en: "Explain the steps of adult CPR.", q_ro: "Explică pașii resuscitării la adult.",
          helpers: ["First, check for danger ...", "Then check for breathing ...", "Push hard and fast ...", "Thirty compressions, two breaths ..."] },
        { q_en: "How do you use an AED?", q_ro: "Cum folosești un DEA?",
          helpers: ["Switch it on ...", "Attach the pads ...", "Stand clear while it analyses ...", "Continue CPR ..."] },
        { q_en: "What mistakes do students make during CPR?", q_ro: "Ce greșeli fac cursanții în timpul resuscitării?",
          helpers: ["They don't push deep enough ...", "They bend their arms ...", "They stop for too long ..."] }
      ]
    },
    {
      id: "medical-u4",
      title_ro: "Hemoragii, arsuri, fracturi, șoc, sufocare",
      level: 2,
      chunks: [
        { en: "Press firmly on the wound.", ro: "Apăsați ferm pe rană.", note: "" },
        { en: "Keep the pressure on.", ro: "Mențineți presiunea.", note: "" },
        { en: "Use a clean dressing.", ro: "Folosiți un pansament curat.", note: "" },
        { en: "The bleeding won't stop.", ro: "Sângerarea nu se oprește.", note: "" },
        { en: "Apply a tourniquet above the wound.", ro: "Aplicați un garou deasupra rănii.", note: "Doar la hemoragii masive ale membrelor." },
        { en: "Write down the time.", ro: "Notați ora.", note: "Ora aplicării garoului." },
        { en: "Cool the burn under running water.", ro: "Răciți arsura sub jet de apă.", note: "" },
        { en: "Keep cooling for twenty minutes.", ro: "Răciți timp de douăzeci de minute.", note: "" },
        { en: "Don't use ice.", ro: "Nu folosiți gheață.", note: "" },
        { en: "Cover it loosely with cling film.", ro: "Acoperiți lejer cu folie alimentară.", note: "" },
        { en: "I think it's broken.", ro: "Cred că e rupt.", note: "" },
        { en: "Support the arm as it is.", ro: "Sprijiniți brațul în poziția în care e.", note: "" },
        { en: "Don't try to straighten it.", ro: "Nu încercați să-l îndreptați.", note: "" },
        { en: "He's pale, cold and sweaty.", ro: "E palid, rece și transpirat.", note: "Semne de șoc." },
        { en: "Lay her down and keep her warm.", ro: "Culcați-o și țineți-o la căldură.", note: "" },
        { en: "Don't give them anything to drink.", ro: "Nu le dați nimic de băut.", note: "" },
        { en: "Are you choking?", ro: "Vă sufocați / v-ați înecat?", note: "" },
        { en: "Keep coughing.", ro: "Tușiți în continuare.", note: "" },
        { en: "Give up to five back blows.", ro: "Dați până la cinci lovituri între omoplați.", note: "" },
        { en: "Then five abdominal thrusts.", ro: "Apoi cinci compresii abdominale.", note: "Manevra Heimlich." },
        { en: "Put them in the recovery position.", ro: "Puneți-l în poziția laterală de siguranță.", note: "Pentru victima inconștientă care respiră normal." }
      ],
      patterns: [
        { frame: "Don't ___.", ro: "Nu ___.",
          fills: [
            { en: "remove the object", ro: "scoateți obiectul" },
            { en: "burst the blisters", ro: "spargeți bășicile" },
            { en: "move the injured leg", ro: "mișcați piciorul rănit" },
            { en: "put butter on the burn", ro: "puneți unt pe arsură" },
            { en: "leave him alone", ro: "îl lăsați singur" },
            { en: "take off the tourniquet", ro: "scoateți garoul" }
          ] },
        { frame: "If ___, then ___.", ro: "Dacă ___, atunci ___.",
          fills: [
            { en: "he can cough / let him cough", ro: "poate tuși / lăsați-l să tușească" },
            { en: "back blows don't work / try abdominal thrusts", ro: "loviturile nu ajută / încercați compresiile abdominale" },
            { en: "she becomes unresponsive / start CPR", ro: "devine inconștientă / începeți resuscitarea" },
            { en: "blood soaks through / add another pad", ro: "sângele trece prin pansament / mai puneți unul" },
            { en: "the burn is large / call 112", ro: "arsura e mare / sunați la 112" },
            { en: "he's breathing normally / use the recovery position", ro: "respiră normal / folosiți poziția laterală de siguranță" }
          ] }
      ],
      dialogues: [
        { title_ro: "Arsură în bucătărie", lines: [
          { who: "A", en: "I've burnt my hand on the oven!", ro: "M-am ars la mână de cuptor!" },
          { who: "B", en: "Put it under cool running water now.", ro: "Puneți-o imediat sub jet de apă rece." },
          { who: "A", en: "How long for?", ro: "Cât timp?" },
          { who: "B", en: "Twenty minutes. And take off your ring.", ro: "Douăzeci de minute. Și scoateți-vă inelul." },
          { who: "A", en: "Should I put some ice on it?", ro: "Să pun gheață pe ea?" },
          { who: "B", en: "No, don't use ice. Then we'll cover it with cling film.", ro: "Nu, fără gheață. Apoi o acoperim cu folie alimentară." }
        ] },
        { title_ro: "Sufocare la restaurant", lines: [
          { who: "A", en: "My husband is choking!", ro: "Soțul meu se sufocă!" },
          { who: "B", en: "Sir, are you choking? Can you cough?", ro: "Domnule, vă sufocați? Puteți tuși?" },
          { who: "A", en: "He can't cough or speak.", ro: "Nu poate tuși și nici vorbi." },
          { who: "B", en: "I'm going to give five back blows.", ro: "O să-i dau cinci lovituri între omoplați." },
          { who: "A", en: "It's still stuck!", ro: "Tot e blocat!" },
          { who: "B", en: "Now five abdominal thrusts. Call 112, please.", ro: "Acum cinci compresii abdominale. Sunați la 112, vă rog." },
          { who: "A", en: "He's breathing again!", ro: "Respiră din nou!" },
          { who: "B", en: "Good. He still needs to see a doctor.", ro: "Bine. Tot trebuie să-l vadă un medic." }
        ] }
      ],
      prompts: [
        { q_en: "How do you treat a bad cut on the arm?", q_ro: "Cum tratezi o tăietură gravă la braț?",
          helpers: ["I put on gloves ...", "I press firmly ...", "If it doesn't stop, ...", "I call 112 ..."] },
        { q_en: "Explain what to do for an adult who is choking.", q_ro: "Explică ce faci pentru un adult care se sufocă.",
          helpers: ["First, I ask ...", "If they can cough, ...", "If not, I give ...", "If they collapse, ..."] },
        { q_en: "What are the signs of shock, and what do you do?", q_ro: "Care sunt semnele șocului și ce faci?",
          helpers: ["The person is pale ...", "Their pulse is fast ...", "I lay them down ...", "I keep them warm ..."] }
      ]
    },
    {
      id: "medical-u5",
      title_ro: "Evaluarea pacientului în ambulanță",
      level: 3,
      chunks: [
        { en: "We'll use the ABCDE approach.", ro: "Folosim abordarea ABCDE.", note: "Airway, Breathing, Circulation, Disability, Exposure." },
        { en: "Is the airway clear?", ro: "Sunt căile aeriene libere?", note: "" },
        { en: "What's the respiratory rate?", ro: "Care e frecvența respiratorie?", note: "" },
        { en: "Sats are ninety-two percent.", ro: "Saturația e 92%.", note: "„Sats” = saturația de oxigen, în argoul medical." },
        { en: "Let's take her blood pressure.", ro: "Să-i luăm tensiunea.", note: "" },
        { en: "The pulse is fast and weak.", ro: "Pulsul e rapid și slab.", note: "" },
        { en: "Check the capillary refill.", ro: "Verificați timpul de reumplere capilară.", note: "Normal sub 2 secunde." },
        { en: "Let's check his blood sugar.", ro: "Să-i verificăm glicemia.", note: "" },
        { en: "GCS is fourteen.", ro: "Scorul Glasgow e 14.", note: "" },
        { en: "Pupils are equal and reactive.", ro: "Pupilele sunt egale și reactive.", note: "" },
        { en: "Do you have any allergies?", ro: "Aveți alergii?", note: "" },
        { en: "Are you taking any medication?", ro: "Luați vreun medicament?", note: "" },
        { en: "Do you take blood thinners?", ro: "Luați anticoagulante?", note: "" },
        { en: "Have you had this before?", ro: "Ați mai avut asta?", note: "" },
        { en: "Any heart or lung problems?", ro: "Aveți probleme cu inima sau plămânii?", note: "" },
        { en: "When did you last eat?", ro: "Când ați mâncat ultima dată?", note: "" },
        { en: "What happened just before?", ro: "Ce s-a întâmplat chiar înainte?", note: "Din schema SAMPLE: Events." },
        { en: "I need to cut your shirt.", ro: "Trebuie să vă tai cămașa.", note: "" },
        { en: "You'll feel a small scratch.", ro: "O să simțiți o mică înțepătură.", note: "Formula britanică pentru o injecție / branulă." },
        { en: "I'm going to put some oxygen on.", ro: "O să vă pun oxigen.", note: "" },
        { en: "We're taking you to hospital now.", ro: "Acum vă ducem la spital.", note: "" }
      ],
      patterns: [
        { frame: "Have you ever had ___?", ro: "Ați avut vreodată ___?",
          fills: [
            { en: "a heart attack", ro: "un infarct" },
            { en: "a stroke", ro: "un AVC" },
            { en: "asthma", ro: "astm" },
            { en: "diabetes", ro: "diabet" },
            { en: "epilepsy", ro: "epilepsie" },
            { en: "surgery", ro: "vreo operație" }
          ] },
        { frame: "The ___ is ___.", ro: "___ este ___.",
          fills: [
            { en: "heart rate / a hundred and ten", ro: "Pulsul / 110" },
            { en: "blood pressure / ninety over sixty", ro: "Tensiunea / 90 cu 60" },
            { en: "respiratory rate / twenty-eight", ro: "Frecvența respiratorie / 28" },
            { en: "temperature / thirty-eight point five", ro: "Temperatura / 38,5" },
            { en: "blood glucose / three point one", ro: "Glicemia / 3,1 mmol/l" },
            { en: "oxygen saturation / ninety-four percent", ro: "Saturația / 94%" }
          ] }
      ],
      dialogues: [
        { title_ro: "Anamneza în ambulanță", lines: [
          { who: "A", en: "I've got this pain in my chest.", ro: "Am durerea asta în piept." },
          { who: "B", en: "When did it start, and what were you doing?", ro: "Când a început și ce făceați?" },
          { who: "A", en: "About an hour ago. I was walking upstairs.", ro: "Acum vreo oră. Urcam scările." },
          { who: "B", en: "Does the pain go anywhere else?", ro: "Durerea iradiază în altă parte?" },
          { who: "A", en: "Yes, down my left arm.", ro: "Da, în brațul stâng." },
          { who: "B", en: "Are you taking any medication? Any allergies?", ro: "Luați medicamente? Aveți alergii?" },
          { who: "A", en: "Tablets for blood pressure. I'm allergic to penicillin.", ro: "Pastile de tensiune. Sunt alergic la penicilină." },
          { who: "B", en: "Thank you. I'm going to do an ECG now.", ro: "Mulțumesc. Acum o să vă fac un EKG." }
        ] },
        { title_ro: "Predarea pacientului la spital", lines: [
          { who: "A", en: "What have we got?", ro: "Ce avem?" },
          { who: "B", en: "Sixty-year-old male, chest pain for one hour.", ro: "Bărbat, 60 de ani, durere toracică de o oră." },
          { who: "A", en: "Observations?", ro: "Parametrii?" },
          { who: "B", en: "Heart rate ninety-eight, BP one-fifty over ninety, sats ninety-six.", ro: "Puls 98, tensiune 150 cu 90, saturație 96." },
          { who: "A", en: "Any allergies?", ro: "Alergii?" },
          { who: "B", en: "Penicillin. He takes blood pressure tablets.", ro: "Penicilină. Ia pastile de tensiune." }
        ] }
      ],
      prompts: [
        { q_en: "Explain the ABCDE approach to a new colleague.", q_ro: "Explică abordarea ABCDE unui coleg nou.",
          helpers: ["A stands for airway ...", "Next, you check ...", "D is for disability, which means ...", "Finally, ..."] },
        { q_en: "Which vital signs do you measure, and what are normal values?", q_ro: "Ce semne vitale măsori și care sunt valorile normale?",
          helpers: ["A normal heart rate is ...", "Normal sats are ...", "I also check ..."] },
        { q_en: "Give a short handover for a patient you have assessed.", q_ro: "Fă o predare scurtă pentru un pacient evaluat.",
          helpers: ["This is a ...-year-old ...", "He was found ...", "His observations are ...", "We have given ..."] }
      ]
    },
    {
      id: "medical-u6",
      title_ro: "Echipamente de ambulanță (1): targă, încărcare, imobilizare",
      level: 3,
      chunks: [
        { en: "This is the main stretcher.", ro: "Aceasta este targa principală.", note: "" },
        { en: "Lock the wheels first.", ro: "Blocați mai întâi roțile.", note: "" },
        { en: "Release the brake with your foot.", ro: "Eliberați frâna cu piciorul.", note: "" },
        { en: "Press this lever to raise it.", ro: "Apăsați maneta asta ca s-o ridicați.", note: "" },
        { en: "The legs fold as you load.", ro: "Picioarele se pliază când încărcați.", note: "" },
        { en: "Push it in until it clicks.", ro: "Împingeți-o până se aude clic.", note: "" },
        { en: "Check it's locked in place.", ro: "Verificați că e blocată pe poziție.", note: "Sistemul de fixare în ambulanță." },
        { en: "The maximum load is two hundred and twenty kilos.", ro: "Sarcina maximă este de 220 de kilograme.", note: "Verificați valoarea în manualul producătorului." },
        { en: "Always use two people.", ro: "Folosiți întotdeauna două persoane.", note: "" },
        { en: "Fasten all the straps.", ro: "Prindeți toate centurile.", note: "" },
        { en: "Lift with your legs, not your back.", ro: "Ridicați cu picioarele, nu cu spatele.", note: "" },
        { en: "We'll log roll the patient.", ro: "Întoarcem pacientul „în bloc”.", note: "Log roll = rotire în ax, cu coloana aliniată." },
        { en: "Slide the spine board underneath.", ro: "Glisați targa rigidă dedesubt.", note: "" },
        { en: "Fit the head blocks.", ro: "Montați blocurile pentru cap.", note: "" },
        { en: "The scoop splits in two.", ro: "Targa-lingură se desface în două.", note: "Scoop stretcher." },
        { en: "Shape the vacuum mattress around him.", ro: "Modelați salteaua vacuum în jurul lui.", note: "" },
        { en: "Pump the air out.", ro: "Scoateți aerul cu pompa.", note: "" },
        { en: "Close the valve.", ro: "Închideți valva.", note: "" },
        { en: "It goes rigid in seconds.", ro: "Devine rigidă în câteva secunde.", note: "" },
        { en: "The carry chair has tracks for stairs.", ro: "Scaunul de transport are șenile pentru scări.", note: "" },
        { en: "Tilt the chair back slowly.", ro: "Înclinați scaunul încet pe spate.", note: "" }
      ],
      patterns: [
        { frame: "Make sure the ___ is ___.", ro: "Asigurați-vă că ___ este ___.",
          fills: [
            { en: "stretcher / locked", ro: "targa / blocată" },
            { en: "brake / on", ro: "frâna / pusă" },
            { en: "valve / closed", ro: "valva / închisă" },
            { en: "head / in line", ro: "capul / aliniat" },
            { en: "battery / charged", ro: "bateria / încărcată" },
            { en: "patient / secured", ro: "pacientul / asigurat" }
          ] },
        { frame: "To ___, you ___.", ro: "Ca să ___, ___.",
          fills: [
            { en: "raise the stretcher / squeeze this handle", ro: "ridicați targa / strângeți mânerul acesta" },
            { en: "load it / push until it clicks", ro: "o încărcați / împingeți până face clic" },
            { en: "release the mattress / open the valve", ro: "eliberați salteaua / deschideți valva" },
            { en: "go downstairs / use the tracks", ro: "coborâți scările / folosiți șenilele" },
            { en: "open the scoop / press both buttons", ro: "deschideți targa-lingură / apăsați ambele butoane" },
            { en: "change the height / hold the red lever", ro: "schimbați înălțimea / țineți maneta roșie" }
          ] }
      ],
      dialogues: [
        { title_ro: "Prezentarea tărgii unui client", lines: [
          { who: "A", en: "So how do we load it into the ambulance?", ro: "Deci cum o încărcăm în ambulanță?" },
          { who: "B", en: "Put the front wheels on the floor and push.", ro: "Puneți roțile din față pe podea și împingeți." },
          { who: "A", en: "And the legs fold up automatically?", ro: "Și picioarele se pliază automat?" },
          { who: "B", en: "Yes, as you push. Keep pushing until it clicks.", ro: "Da, pe măsură ce împingeți. Împingeți până face clic." },
          { who: "A", en: "How do I know it's secure?", ro: "De unde știu că e fixată?" },
          { who: "B", en: "Pull it back gently. It mustn't move.", ro: "Trageți ușor înapoi. Nu trebuie să se miște." },
          { who: "A", en: "Can one person do this?", ro: "Poate face asta o singură persoană?" },
          { who: "B", en: "We always recommend two people with a patient on board.", ro: "Recomandăm mereu două persoane când pacientul e pe targă." }
        ] },
        { title_ro: "Salteaua vacuum", lines: [
          { who: "A", en: "When would we use the vacuum mattress?", ro: "Când am folosi salteaua vacuum?" },
          { who: "B", en: "For suspected spinal or pelvic injuries, and long transfers.", ro: "La suspiciune de leziuni ale coloanei sau bazinului și la transferuri lungi." },
          { who: "A", en: "How does it work?", ro: "Cum funcționează?" },
          { who: "B", en: "You shape it around the patient, then pump the air out.", ro: "O modelați în jurul pacientului, apoi scoateți aerul cu pompa." },
          { who: "A", en: "And then it stays hard?", ro: "Și apoi rămâne tare?" },
          { who: "B", en: "Yes, until you open the valve again.", ro: "Da, până deschideți din nou valva." }
        ] }
      ],
      prompts: [
        { q_en: "Explain how to load a patient into the ambulance safely.", q_ro: "Explică cum încarci în siguranță un pacient în ambulanță.",
          helpers: ["First, you ...", "Make sure the patient is ...", "Push until ...", "Then check ..."] },
        { q_en: "Compare the spine board, the scoop and the vacuum mattress.", q_ro: "Compară targa rigidă, targa-lingură și salteaua vacuum.",
          helpers: ["The spine board is mainly for ...", "The scoop is useful when ...", "The vacuum mattress is more comfortable ..."] },
        { q_en: "What safety rules do you teach for lifting and carrying?", q_ro: "Ce reguli de siguranță predai pentru ridicare și transport?",
          helpers: ["Always use two people ...", "Lift with your legs ...", "Never exceed ..."] }
      ]
    },
    {
      id: "medical-u7",
      title_ro: "Echipamente de ambulanță (2): defibrilator, ventilator, aspirator, oxigen, verificări",
      level: 4,
      chunks: [
        { en: "This monitor works as an AED too.", ro: "Acest monitor funcționează și ca DEA.", note: "" },
        { en: "Switch to manual mode here.", ro: "Treceți pe modul manual de aici.", note: "" },
        { en: "Select the energy, then charge.", ro: "Selectați energia, apoi încărcați.", note: "" },
        { en: "It also measures SpO2 and blood pressure.", ro: "Măsoară și SpO2 și tensiunea.", note: "" },
        { en: "Connect the twelve-lead ECG cable.", ro: "Conectați cablul EKG cu 12 derivații.", note: "" },
        { en: "Check the pads haven't expired.", ro: "Verificați să nu fi expirat electrozii.", note: "" },
        { en: "Run the daily self-test.", ro: "Rulați autotestul zilnic.", note: "" },
        { en: "The battery should be fully charged.", ro: "Bateria trebuie să fie complet încărcată.", note: "" },
        { en: "Set the tidal volume and rate.", ro: "Setați volumul curent și frecvența.", note: "Ventilator." },
        { en: "The PEEP is set to five.", ro: "PEEP-ul e setat la 5.", note: "" },
        { en: "The high-pressure alarm went off.", ro: "S-a declanșat alarma de presiune mare.", note: "" },
        { en: "Check the circuit for leaks.", ro: "Verificați circuitul de scurgeri.", note: "" },
        { en: "Turn on the suction unit.", ro: "Porniți aspiratorul.", note: "" },
        { en: "Don't suction for more than fifteen seconds.", ro: "Nu aspirați mai mult de cincisprezece secunde.", note: "La adult, per tentativă." },
        { en: "Empty the canister after each use.", ro: "Goliți recipientul după fiecare utilizare.", note: "" },
        { en: "Open the cylinder valve slowly.", ro: "Deschideți încet robinetul buteliei.", note: "" },
        { en: "Check the pressure gauge.", ro: "Verificați manometrul.", note: "" },
        { en: "Never use oil or grease on it.", ro: "Nu folosiți niciodată ulei sau vaselină pe ea.", note: "Risc de incendiu cu oxigenul." },
        { en: "Aim for sats of ninety-four to ninety-eight.", ro: "Țintiți o saturație de 94–98%.", note: "La pacienții cu BPOC ținta e de obicei 88–92%." },
        { en: "Record every check in the logbook.", ro: "Notați fiecare verificare în registru.", note: "" },
        { en: "If it fails, take it out of service.", ro: "Dacă nu trece testul, scoateți-l din uz.", note: "" }
      ],
      patterns: [
        { frame: "If the ___, you should ___.", ro: "Dacă ___, ar trebui să ___.",
          fills: [
            { en: "battery is low / swap it immediately", ro: "bateria e descărcată / o schimbați imediat" },
            { en: "self-test fails / call the service engineer", ro: "autotestul eșuează / sunați tehnicianul de service" },
            { en: "disconnection alarm sounds / check the tubing", ro: "sună alarma de deconectare / verificați tubulatura" },
            { en: "cylinder is below a quarter / replace it", ro: "butelia e sub un sfert / o înlocuiți" },
            { en: "suction is weak / check the seals", ro: "aspirația e slabă / verificați garniturile" },
            { en: "pads are out of date / order new ones", ro: "electrozii au expirat / comandați alții noi" }
          ] },
        { frame: "Have you checked the ___?", ro: "Ați verificat ___?",
          fills: [
            { en: "battery level", ro: "nivelul bateriei" },
            { en: "expiry date", ro: "data de expirare" },
            { en: "oxygen pressure", ro: "presiunea oxigenului" },
            { en: "ventilator circuit", ro: "circuitul ventilatorului" },
            { en: "suction tubing", ro: "tubul de aspirație" },
            { en: "printer paper", ro: "hârtia imprimantei" }
          ] }
      ],
      dialogues: [
        { title_ro: "Verificarea zilnică a defibrilatorului", lines: [
          { who: "A", en: "What do we need to check every morning?", ro: "Ce trebuie să verificăm în fiecare dimineață?" },
          { who: "B", en: "First, the status light and the battery level.", ro: "Mai întâi, indicatorul de stare și nivelul bateriei." },
          { who: "A", en: "It's showing a red cross.", ro: "Arată o cruce roșie." },
          { who: "B", en: "That means the self-test has failed.", ro: "Asta înseamnă că autotestul a eșuat." },
          { who: "A", en: "What should we do then?", ro: "Atunci ce facem?" },
          { who: "B", en: "Take it out of service and use the spare unit.", ro: "Îl scoateți din uz și folosiți aparatul de rezervă." },
          { who: "A", en: "Should we report it?", ro: "Trebuie să raportăm?" },
          { who: "B", en: "Yes. Write it in the logbook and call us straight away.", ro: "Da. Notați în registru și sunați-ne imediat." }
        ] },
        { title_ro: "Alarma ventilatorului", lines: [
          { who: "A", en: "The ventilator's alarming. What does that mean?", ro: "Ventilatorul dă alarmă. Ce înseamnă?" },
          { who: "B", en: "Look at the screen. It says high pressure.", ro: "Uitați-vă pe ecran. Scrie presiune mare." },
          { who: "A", en: "What could cause that?", ro: "Ce ar putea cauza asta?" },
          { who: "B", en: "A kinked tube, secretions, or the patient coughing.", ro: "Un tub îndoit, secreții sau pacientul care tușește." },
          { who: "A", en: "And if we can't find the problem?", ro: "Și dacă nu găsim problema?" },
          { who: "B", en: "Disconnect and ventilate with the bag-valve-mask.", ro: "Deconectați și ventilați cu balonul autogonflabil (Ambu)." }
        ] }
      ],
      prompts: [
        { q_en: "Describe the daily checks for the defibrillator and oxygen.", q_ro: "Descrie verificările zilnice la defibrilator și oxigen.",
          helpers: ["Every morning, we ...", "We make sure the pads ...", "The cylinder should be ...", "If something fails, ..."] },
        { q_en: "Explain how the transport ventilator works to a new crew.", q_ro: "Explică unui echipaj nou cum funcționează ventilatorul de transport.",
          helpers: ["First, you connect ...", "You set the volume and ...", "If the alarm goes off, ...", "As a backup, ..."] },
        { q_en: "Tell me about a time a device failed. What happened?", q_ro: "Povestește o situație în care un aparat s-a defectat. Ce s-a întâmplat?",
          helpers: ["Once, during a check, ...", "We noticed that ...", "We had to ...", "Since then, we always ..."] }
      ]
    },
    {
      id: "medical-u8",
      title_ro: "Conducerea unei instruiri în engleză",
      level: 4,
      chunks: [
        { en: "Good morning, everyone, and welcome.", ro: "Bună dimineața tuturor și bine ați venit.", note: "" },
        { en: "Let me introduce myself.", ro: "Permiteți-mi să mă prezint.", note: "" },
        { en: "Today we'll cover three things.", ro: "Astăzi vom acoperi trei lucruri.", note: "" },
        { en: "The session will take about two hours.", ro: "Sesiunea va dura cam două ore.", note: "" },
        { en: "Feel free to stop me anytime.", ro: "Nu ezitați să mă opriți oricând.", note: "" },
        { en: "Let's start with the basics.", ro: "Să începem cu lucrurile de bază.", note: "" },
        { en: "Can everyone see the screen?", ro: "Vede toată lumea ecranul?", note: "" },
        { en: "Watch me first, then you try.", ro: "Priviți-mă întâi, apoi încercați voi.", note: "" },
        { en: "This button does two things.", ro: "Butonul acesta face două lucruri.", note: "" },
        { en: "Does that make sense?", ro: "Are sens? / E clar?", note: "Mai natural decât „Do you understand?”." },
        { en: "Who'd like to have a go?", ro: "Cine vrea să încerce?", note: "" },
        { en: "Talk me through what you're doing.", ro: "Explicați-mi ce faceți pe măsură ce lucrați.", note: "" },
        { en: "That's exactly right.", ro: "Exact așa.", note: "" },
        { en: "Nearly there. Try it again.", ro: "Aproape. Mai încercați o dată.", note: "" },
        { en: "Be careful, that part gets hot.", ro: "Atenție, partea aceea se încălzește.", note: "" },
        { en: "Keep your fingers clear of the hinge.", ro: "Țineți degetele departe de balama.", note: "" },
        { en: "Never leave it unattended.", ro: "Nu-l lăsați niciodată nesupravegheat.", note: "" },
        { en: "Let's take a ten-minute break.", ro: "Hai să luăm o pauză de zece minute.", note: "" },
        { en: "Any questions before we finish?", ro: "Aveți întrebări înainte să încheiem?", note: "" },
        { en: "Please fill in the feedback form.", ro: "Vă rog completați formularul de feedback.", note: "" },
        { en: "Thanks for your attention today.", ro: "Mulțumesc pentru atenție astăzi.", note: "" }
      ],
      patterns: [
        { frame: "If you ___, the device will ___.", ro: "Dacă ___, aparatul va ___.",
          fills: [
            { en: "press and hold this / switch off", ro: "țineți apăsat aici / se va opri" },
            { en: "touch the patient / delay the analysis", ro: "atingeți pacientul / amâna analiza" },
            { en: "don't change the battery / shut down", ro: "nu schimbați bateria / se va opri" },
            { en: "disconnect the tube / alarm", ro: "deconectați tubul / da alarmă" },
            { en: "overload the stretcher / not lift", ro: "supraîncărcați targa / nu se va ridica" },
            { en: "open the valve / soften", ro: "deschideți valva / se va înmuia" }
          ] },
        { frame: "What would you do if ___?", ro: "Ce ați face dacă ___?",
          fills: [
            { en: "the AED said no shock advised", ro: "DEA ar spune „șoc nerecomandat”" },
            { en: "the oxygen ran out", ro: "s-ar termina oxigenul" },
            { en: "the stretcher got stuck", ro: "targa s-ar bloca" },
            { en: "the patient vomited", ro: "pacientul ar vomita" },
            { en: "the battery died on the way", ro: "bateria s-ar descărca pe drum" },
            { en: "you couldn't stop the bleeding", ro: "n-ați putea opri sângerarea" }
          ] }
      ],
      dialogues: [
        { title_ro: "Feedback în timpul exercițiului", lines: [
          { who: "A", en: "Was that okay? I'm not sure about the depth.", ro: "A fost bine? Nu sunt sigur de adâncime." },
          { who: "B", en: "Your rate was great, but the compressions were too shallow.", ro: "Ritmul a fost foarte bun, dar compresiile au fost prea superficiale." },
          { who: "A", en: "How deep should they be?", ro: "Cât de adânci trebuie să fie?" },
          { who: "B", en: "Five to six centimetres. Lock your elbows and lean over.", ro: "Cinci-șase centimetri. Blocați coatele și aplecați-vă deasupra." },
          { who: "A", en: "Like this?", ro: "Așa?" },
          { who: "B", en: "Much better. And let the chest come all the way back up.", ro: "Mult mai bine. Și lăsați pieptul să revină complet." },
          { who: "A", en: "Okay, got it.", ro: "Bine, am înțeles." },
          { who: "B", en: "Well done. Swap with your partner now.", ro: "Bravo. Acum schimbați cu colegul." }
        ] },
        { title_ro: "Întrebări la finalul instruirii", lines: [
          { who: "A", en: "How often should we service the stretcher?", ro: "Cât de des trebuie făcută revizia tărgii?" },
          { who: "B", en: "Once a year, by an authorised technician.", ro: "O dată pe an, de un tehnician autorizat." },
          { who: "A", en: "And what if something breaks before that?", ro: "Și dacă se strică ceva înainte?" },
          { who: "B", en: "Stop using it and contact us. We'll send someone.", ro: "Nu o mai folosiți și contactați-ne. Trimitem pe cineva." },
          { who: "A", en: "Will we get a certificate for today?", ro: "Primim un certificat pentru ziua de azi?" },
          { who: "B", en: "Yes, once you've filled in the feedback form.", ro: "Da, după ce completați formularul de feedback." }
        ] }
      ],
      prompts: [
        { q_en: "Open a training session for a new ambulance crew.", q_ro: "Deschide o sesiune de instruire pentru un echipaj nou de ambulanță.",
          helpers: ["Good morning, everyone ...", "My name is ... and I ...", "Today we'll cover ...", "Feel free to ..."] },
        { q_en: "Explain one device to the group and give a safety warning.", q_ro: "Explică un aparat grupului și dă un avertisment de siguranță.",
          helpers: ["This is the ...", "It's used for ...", "To switch it on, ...", "Be careful not to ..."] },
        { q_en: "Give feedback to a trainee who made a mistake, and close the session.", q_ro: "Dă feedback unui cursant care a greșit și încheie sesiunea.",
          helpers: ["You did ... really well.", "Next time, try to ...", "To sum up, today we ...", "Thanks for ..."] }
      ]
    }
  ]
});
