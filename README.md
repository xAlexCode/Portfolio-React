# Portfolio – Alexandra Henriksson

En portfolio byggd som en React single page application. Sidan visar mina
projekt, min bakgrund, mina kontaktuppgifter och är responsiv från mobil
till desktop.

[Live länk Vercel](https://portfolio-react-five-flax.vercel.app/#contact) 
[Figma skiss](https://www.figma.com/design/5tWDmXcpWNYeWxrf5fQIs9/Portfolio?node-id=0-1&t=xBDE69fkaO4OK76Z-1) 

## Tekniker
- **React** och **TypeScript** via **Vite**
- **Tailwind CSS**: styling och responsivitet
- **ESLint**: kodkvalitet
- **Git och GitHub**, driftsatt på **Vercel**
- **Motion**, för animation av projektkort

## Köra projektet lokalt

```bash
git clone [https://github.com/xAlexCode/Portfolio-React]
cd Portfolio-React
npm install
npm run dev
```

## Struktur
```
src/
├── components/
│   ├── layout/      Navbar
│   ├── sections/    Home, About, Projects, Contact
│   └── rendering/   ProjectCard, ProjectFilter, SkillCard, ContactForm
├── data/            projects.ts, skills.ts
└── types/           types.ts
public/              bilder, ikoner, CV och video
```

Projekts och skills ligger som data i separata filer och renderas med .map()
och key. Sektionerna sätts ihop i App.


## State och validering

- **Mobilmeny** (`Navbar`): ett boolean-state som visar och döljer menyn.
- **Projektfilter** (`Projects`): valda taggar sparas som en array i state. Ett
  klick skapar en ny array, och inga valda taggar visar alla projekt. Den
  filtrerade listan räknas fram vid rendering och sparas inte i eget state.
  Ett projekt visas om det har alla valda taggar.
- **Kontaktformulär** (`ContactForm`): ett state-objekt för fälten, ett för
  felmeddelanden och ett för om formuläret skickats. Alla fält är obligatoriska,
  och ett felmeddelande visas vid varje tomt fält. Är allt ifyllt visas ett
  bekräftelsemeddelande (inget riktigt mejl skickas).

## Animation

Gjorde en väldigt enkel animation med motion på projektkorten, så dem skakar om du hovrar över dem. 

## Reflektion
**Komponentarkitektur och state.** Jag delade upp portfoliot i sektioner (Home, About, Projects och Contact) som används en gång vardera. Sedan gjorde jag återanvändbara komponenter (ProjectCard, SkillCard och ProjectFilter). Dessa får sin data via props, dock ligger Projekt och Skilldatan i egna filer och renderas med .map() och key, så man kan lägga till ett projekt på ett ställe utan att röra komponenterna. 

Jag la till selectedTags I Projects, eftersom både filterknapparna och projektlistan behöver det och Projects är deras närmaste gemensamma förälder. ProjectFilter har inget eget state utan får taggarna och funktionerna som props. Menyns open ligger i Navbar och formulärets state i Contactform, eftersom ingen annan komponent behöver dem. Det valda taggarna sparas som en array och en ny array skapas vid varje klick. Listan visibleProjects räknas fram vid varje rendering istället för att sparas i state eftersom det kan räknas ut med selectedtags. Jag började med some, men då visades projekt som bara hade en av de valda taggarna och jag bytte till every för att kräva att de finns.

Vad jag skulle göra annorlunda. Jag skulle göra Figma-skissen mer detaljerad, men eftersom de var lite tidspress och ville ägna majoriteten till att koda så fick den bli såhär. Sedan skulle jag komprimerat videon innan jag pushade till GitHub för den var på 148 MB och tog en stund innan jag förstod varför det inte gick. 

**AI-verktyg.** Jag har använt Claude som stöd under arbete mycket för att bolla frågor och förstå props och state mer, då jag fortfarande känner att det är svårt att greppa. Särkilt filter delen när man ska ha flera valda samtidigt tyckte jag var jättesvårt och ville verkligen satsa på VG-delen för att lära mig av det. Jag lärde mig att man kan minska storleken på bilderna med verktyget sips i terminalen som finns inbyggt på Mac och kunde då man krympa alla skärmdumpar på en gång.

## Bilder, ikoner och videor

**Video**
- Bakgrundsvideo av [Engin Akyurt](https://pixabay.com/users/engin_akyurt-3656355/) från [Pixabay](https://pixabay.com/)

**Ikoner**
- [Git icons](https://www.flaticon.com/free-icons/git) skapade av pocike
- [Swift icons](https://www.flaticon.com/free-icons/swift) skapade av Freepik
- [Node icons](https://www.flaticon.com/free-icons/node) skapade av pocike
- [Figma icons](https://www.flaticon.com/free-icons/figma) skapade av Freepik
- [Sass icons](https://www.flaticon.com/free-icons/sass) skapade av Freepik
- [HTML icons](https://www.flaticon.com/free-icons/html) skapade av Freepik
- [CSS icons](https://www.flaticon.com/free-icons/css) skapade av Pixel perfect
- [JavaScript icons](https://www.flaticon.com/free-icons/javascript) skapade av Freepik
- [React icons](https://www.flaticon.com/free-icons/react) skapade av pocike
- [Typescript icon](https://www.typescriptlang.org/branding/) skapades av deras egna sida