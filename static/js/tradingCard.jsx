"use strict";
const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
  },

  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
  },

  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
  },

  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpg",
  },

  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpg",
  },

  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpg",
  },

  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpg",
  },

  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.jpg",
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer() {
  // use for loop to render each card in tradingCardData object
  const cards = [];
  for (const card of tradingCardData) {
    // append rendered TradingCard component to the array of cards
    cards.push(
      <TradingCard
        name={card.name}
        skill={card.skill}
        imgUrl={card.imgUrl}
      />
    )
  };

  // note: React components can refer to not only props and React elements but
  // also other components! (like how TradingCardContainer refers to TradingCard
  // component in line 68-72 here)

  // return React element that renders all trading cards into a parent div
  return (
    <div>
      {cards}
    </div>
  );
}

// Render trading card container which contains all the trading cards!
ReactDOM.render(
  <TradingCardContainer/>,
  document.querySelector('#container')
)

// Old code
// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Merge"
//       skill="merging lanes"
//       imgUrl="/static/img/merge.jpg"
//     />
//   ),
//   document.querySelector('#merge')
  
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Polymorphism"
//       skill="cosplay"
//       imgUrl="/static/img/polymorphism.jpg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );