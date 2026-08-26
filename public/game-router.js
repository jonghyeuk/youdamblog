function openGameFromLink(){
  if(location.hash==='#play-excuse')openGame();
  if(location.hash==='#play-flirt')openFlirt();
  if(location.hash==='#play-friend')openFriend();
  if(location.hash==='#play-fairy')openFairy();
}
window.addEventListener('hashchange',openGameFromLink);
openGameFromLink();
