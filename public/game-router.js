function openGameFromLink(){
  if(location.hash==='#play-excuse')openGame();
  if(location.hash==='#play-flirt')openFlirt();
  if(location.hash==='#play-friend')openFriend();
}
window.addEventListener('hashchange',openGameFromLink);
openGameFromLink();
