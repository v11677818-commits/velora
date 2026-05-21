/* =========================
   VELORA SYSTEM
========================= */

/* USER ROLE

guest
registered
subscriber

*/

let role = "registered";

/* =========================
   DAILY LIMITS
========================= */

const systemLimits = {

guest:{

messages:6,
images:0,
outfits:0,
challenges:0,
games:0,
marketUploads:0,
credits:30

},

registered:{

messages:20,
images:5,
outfits:2,
challenges:2,
games:3,
marketUploads:1,
credits:100

},

subscriber:{

messages:500,
images:100,
outfits:20,
challenges:10,
games:10,
marketUploads:10,
credits:1000

}

};

/* =========================
   USER DATA
========================= */

let userData = {

points:2450,
level:3,
credits:
systemLimits[role].credits,

messagesUsed:0,
imagesUsed:0,
outfitsUsed:0,
challengesUsed:0,
gamesUsed:0,
marketUploadsUsed:0,

inventory:[],
purchases:[],
sales:0

};

/* =========================
   LEVEL SYSTEM
========================= */

function updateLevel(){

if(userData.points >= 10000){

userData.level = 10;

}

else if(userData.points >= 7000){

userData.level = 8;

}

else if(userData.points >= 5000){

userData.level = 6;

}

else if(userData.points >= 3000){

userData.level = 4;

}

else{

userData.level = 3;

}

}

/* =========================
   POINTS SYSTEM
========================= */

function addPoints(amount){

userData.points += amount;

updateLevel();

saveSystem();

}

/* =========================
   CREDIT SYSTEM
========================= */

function useCredits(amount){

if(userData.credits < amount){

alert("Not enough credits");

return false;

}

userData.credits -= amount;

saveSystem();

return true;

}

/* =========================
   MESSAGE LIMIT
========================= */

function canSendMessage(){

if(
userData.messagesUsed >=
systemLimits[role].messages
){

alert("Daily message limit reached");

return false;

}

userData.messagesUsed++;

useCredits(1);

saveSystem();

return true;

}

/* =========================
   IMAGE LIMIT
========================= */

function canUploadImage(){

if(
userData.imagesUsed >=
systemLimits[role].images
){

alert("Daily image limit reached");

return false;

}

userData.imagesUsed++;

useCredits(10);

saveSystem();

return true;

}

/* =========================
   OUTFIT LIMIT
========================= */

function canUseOutfit(){

if(
userData.outfitsUsed >=
systemLimits[role].outfits
){

alert("Daily outfit limit reached");

return false;

}

userData.outfitsUsed++;

useCredits(15);

saveSystem();

return true;

}

/* =========================
   CHALLENGE LIMIT
========================= */

function canPlayChallenge(){

if(
userData.challengesUsed >=
systemLimits[role].challenges
){

alert("Daily challenge limit reached");

return false;

}

userData.challengesUsed++;

useCredits(20);

saveSystem();

return true;

}

/* =========================
   GAME LIMIT
========================= */

function canPlayGame(){

if(
userData.gamesUsed >=
systemLimits[role].games
){

alert("Daily game limit reached");

return false;

}

userData.gamesUsed++;

useCredits(25);

saveSystem();

return true;

}

/* =========================
   MARKETPLACE LIMIT
========================= */

function canUploadProduct(){

if(
userData.marketUploadsUsed >=
systemLimits[role].marketUploads
){

alert("Marketplace upload limit reached");

return false;

}

userData.marketUploadsUsed++;

saveSystem();

return true;

}

/* =========================
   CHALLENGE REWARD
========================= */

function challengeReward(stars){

let reward = 0;

if(role === "registered"){

if(stars === 1) reward = 10;
if(stars === 2) reward = 20;
if(stars === 3) reward = 30;
if(stars === 4) reward = 40;
if(stars === 5) reward = 50;

}

if(role === "subscriber"){

if(stars === 1) reward = 20;
if(stars === 2) reward = 40;
if(stars === 3) reward = 60;
if(stars === 4) reward = 75;
if(stars === 5) reward = 80;

}

addPoints(reward);

}

/* =========================
   INVENTORY
========================= */

function addToInventory(item){

userData.inventory.push(item);

saveSystem();

}

/* =========================
   PURCHASE SYSTEM
========================= */

function purchaseItem(item){

userData.purchases.push(item);

addToInventory(item);

saveSystem();

}

/* =========================
   SAVE SYSTEM
========================= */

function saveSystem(){

localStorage.setItem(
"veloraSystem",
JSON.stringify(userData)
);

}

/* =========================
   LOAD SYSTEM
========================= */

const savedSystem =
localStorage.getItem(
"veloraSystem"
);

if(savedSystem){

userData =
JSON.parse(savedSystem);

}

/* =========================
   DAILY RESET
========================= */

function resetDailyLimits(){

userData.messagesUsed = 0;
userData.imagesUsed = 0;
userData.outfitsUsed = 0;
userData.challengesUsed = 0;
userData.gamesUsed = 0;
userData.marketUploadsUsed = 0;

userData.credits =
systemLimits[role].credits;

saveSystem();

}

/* =========================
   QUICK AI REPLIES
========================= */

const quickReplies = {

"hello":[
"Hello 👋",
"Welcome back to Velora ✨"
],

"rate my outfit":[
"Elegant styling ✨",
"Luxury aesthetic detected 💫"
],

"thanks":[
"You're welcome ✨"
]

};
