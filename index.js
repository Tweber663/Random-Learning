const randomArray = [ 
{Name: "JS - Veriables", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit"},
{Name: "Switching variables 🔀", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.oz0a3lldxnr0"},
{Name: "JS - Data types 🟥🟧🟨🟩",   Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.hw54tu8cvxsx"},
{Name: "JS - Strings 〰 〰", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.r65tra36b2k9"},
{Name: "JS - Increment & decrement expressions ➕➖", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.cgn7p2xgkf3g"},
{Name: "JS - modula adding & subtracting ➕➖", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.1aboipysv3zp"},
{Name: "JS - Booleans & Comparisons", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.qii6umvpugzo"},
{Name: "⭐JS - Methods / Properties", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.yvmdm2u0c0lo"},
{Name: "JS - String length & retrieving the number of characters", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.mkx9vqeouudb"},
{Name: "JS - Slicing & extracting 🔪", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.1p7bvzp87pux"},
{Name: "JS - function 🤖", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.thf9c7umll9b"},
{Name: "JS Return ↩", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.whf1g0mhprqs"},
{Name: "JS Arrow functions ▶▶", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.k9a9eltuoq3b"},
{Name: "JS - function types", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.cw6davkedln8"},
{Name: "Calling back types 🙋‍♂️🙋‍♂️🙋‍♂️", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.bkadt7a26l7o"},
{Name: "JS Random 🎲 number generation", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.rhjrc7imtq02"},
{Name: "JS IF ❔❔", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.q19wr2q0x9kf"},
{Name: "JS Comparitors  🥋 & Examples of conditions: ", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.x7rscv98v6w9"},
{Name: "Type Conversion - A 🔀 1", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.k15mq34wel3s"},
{Name: "JS Arrays - BASIC 🥚", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.cw6davkedln8"},
{Name: "Array [ ] methods & functions🔧", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.g4taaf74ue91"},
{Name: "HTMLCollection -> [ Array]", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.b9shhd8js2qu"},
];


let ul = document.querySelector("ul");
const button = document.querySelector("button");
let a_tag = document.querySelector("a");


button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 22); 
    console.log(randomNumber);
    a_tag.setAttribute("href", randomArray[randomNumber].Link);
    a_tag.innerHTML = `${randomArray[randomNumber].Name}`;

    console.log(randomArray[randomNumber].Link);
})








