# Vorbește: engleză vorbită, 12 minute pe zi

O aplicație web care antrenează vorbitul, nu doar înțelegerea. Nu are server și nu cere cont. Progresul stă în browser.

## Cum se deschide
- Online: activează GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) și deschide adresa primită în Chrome (Android, PC) sau Safari (iPhone).
- Local: `python3 -m http.server` în acest folder, apoi http://localhost:8000. Microfonul cere HTTPS sau localhost.

## Sesiunea zilnică (~12 min)
1. Încălzire: repeți replicile unui dialog după vorbitor, întâi lent (0,8x), apoi normal.
2. Recapitulare vorbită: vezi româna și spui engleza. Nota ține cont de corectitudine și de viteză.
3. Fraze noi: 5 pe zi (setabil 3/5/7). Asculți, repeți de 3 ori.
4. Construiește fraza: un tipar cu 6 variații.
5. Pronunție: două perechi minimale pentru greșelile tipice vorbitorilor de română.
6. Pe rând, o zi vorbire liberă 4/3/2 (90/60/45 s, cu cuvinte pe minut) și o zi joc de rol.
7. Fixare: frazele noi de azi, încă o dată din memorie.

Repetiția spațiată: intervalele cresc la 1, 3, 7, 16, 35 și 80 de zile. Dacă ai 40 de fraze scadente sau mai multe, ziua aceea nu aduce fraze noi.

## Conținut
`data/zi.js`, `data/calatorii.js`, `data/medical.js`: câte 8 unități, nivelurile 1-4, în total 486 de fraze-bloc, 48 de tipare, 48 de dialoguri și 72 de subiecte de vorbire. `data/pronuntie.js` conține 12 sunete problematice. Programul alternează cele trei domenii.

## Telefon și PC
Progres > Copiază codul pe un dispozitiv, apoi lipești codul pe celălalt și apeși Încarcă. Cele două progrese se combină, nu se suprascriu.

Carnetul vechi (vocabular, verbe, testare) e în `carnet.html`.
