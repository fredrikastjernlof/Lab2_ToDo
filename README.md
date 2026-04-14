# Laboration 2 – Objektorienterad programmering 💻

Detta repository innehåller en ToDo-applikation byggd i TypeScript som en del av kursen Programmering i TypeScript, där fokus har legat på objektorienterad programmering.

Applikationen låter användaren lägga till uppgifter, välja prioritet, markera uppgifter som slutförda och spara listan lokalt i webbläsaren med hjälp av LocalStorage.

## Syfte 🏁

Syftet med laborationen är att få praktisk erfarenhet av att bygga en mindre applikation med TypeScript och använda grundläggande principer inom objektorienterad programmering.

Under arbetets gång har fokus legat på att:

- använda ett interface för att definiera en todo
- skapa klasser för att hantera applikationens logik och lagring
- separera logik från presentation
- validera användarens inmatning
- lagra data i LocalStorage
- skapa ett användargränssnitt som fungerar på både stora och små skärmar

## Funktionalitet 🛠️

Applikationen innehåller följande funktioner:

- lägga till nya todos
- välja prioritet: hög, medium eller låg
- validera att uppgift och prioritet är korrekt ifyllda
- visa felmeddelande i gränssnittet vid ogiltig inmatning
- visa aktiva och slutförda uppgifter i separata listor
- markera en todo som klar
- ta bort enskilda slutförda todos
- rensa alla slutförda todos
- sortera todos efter prioritet
- spara todos i LocalStorage så att de ligger kvar vid omladdning

## Tekniker 🧩

Projektet är byggt med:

- TypeScript
- Vite
- HTML
- SCSS
- LocalStorage
- Git och GitHub

## Projektstruktur och uppbyggnad 🧶

Applikationen är uppbyggd med en tydlig uppdelning mellan logik, lagring och rendering.

### Todo interface

Interfacet definierar strukturen för varje todo-objekt. Varje uppgift innehåller information om text, om den är slutförd, prioritet samt ett unikt id.

### TodoList

`TodoList` ansvarar för applikationens logik. Klassen hanterar bland annat att:

- lägga till todos
- markera todos som klara
- ta bort todos
- rensa slutförda todos
- hämta listan med todos
- sortera uppgifter
- spara ändringar

Validering av inmatade värden sker i denna klass, vilket gör att logiken hålls separat från gränssnittet.

### TodoStorage

`TodoStorage` ansvarar för att spara och läsa data från LocalStorage. På så sätt hålls lagringen separat från övrig logik.

### renderTodos

Render-funktionen ansvarar för att skriva ut todos i DOM:en. Den visar aktiva och slutförda uppgifter i olika listor och skapar knappar för att markera eller ta bort uppgifter.

### main.ts

`main.ts` binder ihop applikationen. Där hämtas DOM-elementen, event listeners sätts upp och användarens handlingar kopplas ihop med metoderna i `TodoList` och rendering i gränssnittet.

## Validering och lösning 📐

Valideringen ligger i klassfilen istället för i DOM:en. Metoderna returnerar false om något är fel, och då visas ett felmeddelande i gränssnittet. Det gör att logik och presentation hålls isär.

Jag började med att använda index för att hantera todos. Det fungerade tills jag började sortera listan efter prioritet, då allt blev fel eftersom index ändras när listan sorteras. Jag löste det genom att ge varje todo ett unikt id istället.

## Design och responsivitet 🎨

SCSS har delats upp i partials för att göra strukturen tydligare och lättare att underhålla, med separata filer för base, layout och komponenter.

Applikationen är också anpassad för olika skärmstorlekar med responsiv layout och justerad spacing.

## Publicering 🌐

Webbplatsen är publicerad via Render: 

[Öppna webbplats](https://lab2-todo.onrender.com/)


## Det här tar jag med mig från uppgiften ✅

Det jag framför allt tar med mig från den här uppgiften är hur tydligt det blir att separera ansvar i en applikation. Genom att dela upp logik, lagring och rendering i olika delar blev koden mer strukturerad och lättare att förstå, även om det tog ett tag att komma dit.

Arbetet med TypeScript har varit ganska utmanande. Det har inte alltid känts självklart, och stundtals mer som att lära sig ett nytt språk än att bara “bygga vidare” på JavaScript. Samtidigt har jag börjat se poängen med typer och interfaces, även om det fortfarande inte känns helt naturligt.

Ett konkret problem jag stötte på var när jag först använde index för att hantera todos. Så länge listan inte sorterades fungerade det, men så fort jag började sortera efter prioritet blev allt fel och fel uppgifter markerades eller togs bort. Då fick jag tänka om och istället ge varje todo ett unikt id, vilket jag tror gjorde lösningen mer stabil.

Sammanfattningsvis har uppgiften varit ganska krävande och inte alltid så rolig, men den har gett en bättre förståelse för hur en applikation kan byggas upp på ett mer genomtänkt sätt.
