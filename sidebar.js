document.write(`

<div id="sidebar" class="sidebar">
  <div class="sideHeader">Menu</div>

  <div class="item" onclick="go('login.html')">Login</div>
  <div class="item" onclick="go('index.html')">Bot</div>
  <div class="item" onclick="go('group.html')">Group Chat</div>
  <div class="item" onclick="go('private.html')">Private Groups</div>
  <div class="item" onclick="go('game.html')">Game</div>
  <div class="item" onclick="go('formats.html')">Formats</div>
  <div class="item" onclick="go('challenges.html')">Challenges</div>
  <div class="item" onclick="go('leaderboard.html')">Leaderboard</div>
  <div class="item" onclick="go('store.html')">Store</div>
  <div class="item" onclick="go('subscription.html')">Subscription</div>
  <div class="item" onclick="go('profile.html')">Profile</div>
</div>

`);

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function go(page) {
  window.location.href = page;
}
