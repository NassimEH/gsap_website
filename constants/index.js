const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "À propos",
 },
 {
	id: "history",
	title: "Notre Histoire",
 },
 {
	id: "work",
	title: "Nos produits",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
  { name: "Espresso Parisien", country: "France", detail: "Serré et intense, 100% arabica torréfié à Paris", price: "€2,50" },
  { name: "Café Crème", country: "France", detail: "Espresso allongé avec mousse de lait onctueuse", price: "€3,80" },
  { name: "Noisette", country: "France", detail: "Espresso relevé d’une touche de crème", price: "€3,20" },
  { name: "Cappuccino à la Française", country: "France", detail: "Espresso, lait vapeur, mousse généreuse", price: "€4,50" },
  { name: "Café Allongé", country: "France", detail: "Doux et équilibré, extraction plus longue", price: "€2,90" },
  { name: "Latte Vanille Bourbon", country: "France", detail: "Lait velouté, vanille de Madagascar", price: "€4,90" },
  { name: "Mocha Chocolat Noir", country: "France", detail: "Espresso, chocolat 70%, lait", price: "€5,20" },
  { name: "Décaféiné Arabica", country: "France", detail: "Saveur ronde, sans caféine", price: "€3,50" },
];

const mockTailLists = [
  { name: "Croissant Beurre AOP", country: "Paris", detail: "Pur beurre, croustillant & fondant", price: "€2,40" },
  { name: "Pain Perdu Brioché", country: "Paris", detail: "Sirop d’érable, crème légère", price: "€7,90" },
  { name: "Œufs Bénédicte au Saumon", country: "Paris", detail: "Muffin, saumon fumé, sauce hollandaise", price: "€12,50" },
  { name: "Tartine Avocat & Œuf Poché", country: "Paris", detail: "Pain au levain, avocat, piment d’Espelette", price: "€10,90" },
  { name: "Assiette Fromages & Charcuteries", country: "France", detail: "Sélection du marché", price: "€13,90" },
  { name: "Pancakes aux Myrtilles", country: "Paris", detail: "Sirop d’érable, beurre demi-sel", price: "€8,90" },
  { name: "Granola Maison", country: "Paris", detail: "Yaourt fermier, fruits de saison", price: "€7,50" },
  { name: "Omelette Fines Herbes", country: "Paris", detail: "Œufs fermiers, ciboulette", price: "€8,50" },
];

const allCocktails = [...cocktailLists, ...mockTailLists];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Où nous trouver",
 address: "123 Rue de Rivoli, 75001 Paris, France",
 contact: {
	phone: "01 42 36 78 90",
	email: "bonjour@milkydeal.fr",
 },
};

const openingHours = [
 { day: "Lun–Jeu", time: "7h00 – 19h00" },
 { day: "Ven", time: "7h00 – 20h00" },
 { day: "Sam", time: "8h00 – 20h00" },
 { day: "Dim", time: "8h00 – 18h00" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const sliderLists = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

const historyTimeline = [
  {
    year: "1995",
    title: "Les premiers grains",
    description: "Tout a commencé dans un petit appartement parisien avec une passion pour le café et le rêve de partager cette culture française unique.",
    image: "/images/abt1.png",
    side: "left"
  },
  {
    year: "2001",
    title: "Ouverture du premier café",
    description: "Installation de notre premier établissement rue de Rivoli. Une petite boutique de 30m² qui allait révolutionner l'art du café à Paris.",
    image: "/images/abt2.png",
    side: "right"
  },
  {
    year: "2008",
    title: "L'art du latte",
    description: "Introduction du latte art dans nos cafés. Nos baristas deviennent de véritables artistes, créant des œuvres éphémères dans chaque tasse.",
    image: "/images/cafebistrot.png",
    side: "left"
  },
  {
    year: "2015",
    title: "Torréfaction artisanale",
    description: "Lancement de notre propre torréfaction. Sélection rigoureuse des meilleurs grains du monde pour une expérience gustative incomparable.",
    image: "/images/abt3.png",
    side: "right"
  },
  {
    year: "2020",
    title: "Innovation numérique",
    description: "Adaptation à l'ère moderne avec notre application mobile et notre système de commande en ligne, sans perdre notre âme artisanale.",
    image: "/images/abt4.png",
    side: "left"
  },
  {
    year: "2024",
    title: "L'avenir du café",
    description: "Aujourd'hui, Milky Deal continue d'innover tout en préservant les traditions françaises. Une nouvelle génération découvre l'art du café.",
    image: "/images/abt5.png",
    side: "right"
  }
];

const historyStats = [
  { number: "29", label: "Années d'expertise", suffix: "ans" },
  { number: "12", label: "Cafés ouverts", suffix: "+" },
  { number: "150", label: "Collaborateurs passionnés", suffix: "+" },
  { number: "1M", label: "Tasses servies", suffix: "+" }
];

const foundersQuote = {
  text: "Notre vision était simple : transformer chaque pause café en un moment de pure délectation, alliant tradition française et innovation moderne.",
  author: "Marie & Pierre Dubois",
  role: "Fondateurs de Milky Deal"
};

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 allCocktails,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 sliderLists,
 historyTimeline,
 historyStats,
 foundersQuote,
};