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
{Name: "JS While & For loops 🔄", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.7yn8qdvfwclz"},
{Name: "JS - .forEach() 🔂", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.8p73mry8dle2"},
{Name: "Array Methods [ 🔽⏫🔀🔁] - 1.Filter Method( ) 🔍", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj rZTzrNKqiekaySIBRs/edit#heading=h.m8q2a1k2j1ug"},
{Name: "Array Methods [ 🔽⏫🔀🔁] - 2. Map Method() 🔄", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.3kea8jgmz7e8"},
{Name: "Array Methods [ 🔽⏫🔀🔁] - 3. Reduce Method (adder, e)", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.7wlg4itao4th"},
{Name: "Array Methods [ 🔽⏫🔀🔁] -  4. Find method (X, ✅, X)", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.1dpgpw9ikl1m"},
{Name: "Array Methods [ 🔽⏫🔀🔁] - 5. Sort Method(🔍❌✅ )", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.sd71uqnkavtb"},
{Name: "Chaining Array methods ⛓", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.guov6bwlcf0s"},
{Name: "Block scope ⛔", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.fvvu9wmz62vr"},
{Name: "JS - Adding sound 🔊", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.yi6gfm417x33"},
{Name: "JS - Adding time outs 🕛", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.w1vbbmj6e4ft"},
{Name: "Connecting JS 🔌", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.fpy162vz4qh0"},
{Name: "Modifying CSS  🎨", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.wf4zksf63ui4"},
{Name: "Text property 📑", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.ixx8rjxyoriy"},
{Name: "Attribute targeting (href, h1🎯)", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.8rj5v2qb5esr"},
{Name: "Parents, Children, Siblings 👨‍👧‍👦", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.1az81qmyujmm"},
{Name: "Event listeners 🎤", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.a0u44mgdr8y"},
{Name: "Event listener callback🎤🙋‍♂️", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.2br8xjbjeqpp"},
{Name: "Event Add & Remove ➕❌", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.7dpfrvk4gik1"},
{Name: "Event Bubbling 🎈🎈", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.gmfixlkgvasy"},
{Name: "Event Pop-Up example 🟥", Link:"https://docs.google.com/document/d/1whRL_td9_0Bb_tISPWu5Anqj-rZTzrNKqiekaySIBRs/edit#heading=h.k29cpw7is0xa"},
];


let ul = document.querySelector("ul");
const button = document.querySelector("button");
let a_tag = document.querySelector("a");


button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 42); 
    console.log(randomNumber);
    a_tag.setAttribute("href", randomArray[randomNumber].Link);
    a_tag.innerHTML = `${randomArray[randomNumber].Name}`;

    console.log(randomArray[randomNumber].Link);
})









