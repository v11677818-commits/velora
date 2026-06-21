document.write(`

<div id="sidebar" class="sidebar"><div class="sideHeader">
VELORA
</div><div class="item" onclick="go('bot.html')">Bot</div><div class="item" onclick="go('marketplace.html')">Marketplace</div><div class="item" onclick="go('challenges.html')">Challenges</div><div class="item" onclick="go('outfits.html')">Outfits</div><div class="item" onclick="go('game.html')">Velora Game</div><div class="item" onclick="go('battle.html')">Velora Battle</div><div class="item" onclick="go('voting.html')">Voting</div><div class="item" onclick="go('profile.html')">Profile</div><div class="item" onclick="go('subscription.html')">Subscription</div><div class="item" onclick="go('login.html')">Logout</div></div><style>

.sidebar{
position:fixed;
top:0;
left:-280px;
width:280px;
height:100vh;
background:#0f0f0f;
border-right:1px solid #222;
transition:.3s;
z-index:99999;
overflow-y:auto;
}

.sidebar.active{
left:0;
}

.sideHeader{
padding:30px;
font-size:26px;
font-weight:700;
color:white;
border-bottom:1px solid #222;
text-align:center;
}

.item{
padding:18px 25px;
color:white;
font-size:16px;
cursor:pointer;
border-bottom:1px solid #1a1a1a;
transition:.2s;
}

.item:hover{
background:#1a1a1a;
}

</style>`);

function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active");
}

function go(page){
window.location.href = page;
}

document.addEventListener("click", function(e){

const sidebar = document.getElementById("sidebar");

if(
sidebar &&
sidebar.classList.contains("active") &&
!sidebar.contains(e.target) &&
!e.target.closest(".menuBtn")
){
sidebar.classList.remove("active");
}

});
