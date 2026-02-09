const footer_el=document.getElementById("footerEmojis");
['🥔', '💛', '🍟', '💕', '🥔'].forEach((e,i)=>{
    const span=document.createElement("span");
    span.textContent=e;
    span.style.animationDelay = i * 200 + 'ms';
    footer_el.appendChild(span);


}
)
let myreasons=[
    "You always buy me a caffee.",
    "You are very supportive and hopeful.",
    "You are never pessimistic. (you trust your potatos ,:(...)",
    "You show your love in many different ways."
]
const reason_list=document.getElementById("reasonlist")
myreasons.forEach((e,i)=>{
    const div=document.createElement("div");
    div.className="reason-card"
    const span=document.createElement("span");
    span.innerHTML = `<span class="reason-heart">❤️</span> ${e}`;
    div.appendChild(span);
    reason_list.appendChild(div);

});



const container = document.getElementById('potatoes-back');
const emojis = ['🥔', '🍟', '💛', '⭐', '🥔', '💕', '🍟', '🥔'];
emojis.forEach((emoji, i) => {
    const el = document.createElement('span');
    el.className = 'floating-potatoe';
    el.textContent = emoji;
    el.style.left = Math.random() * 90 + '%';
    el.style.top = Math.random() * 90 + '%';
    el.style.animationDelay = i * 1.2 + 's';
    el.style.animationDuration = (6 + Math.random() * 6) + 's';
    el.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    container.appendChild(el);
    });

