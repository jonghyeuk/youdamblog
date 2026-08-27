function openGameFromLink(){
  if(location.hash==='#play-excuse')openGame();
  if(location.hash==='#play-affair'||location.hash==='#play-flirt')openAffair();
  if(location.hash==='#play-friend')openFriend();
  if(location.hash==='#play-fairy')openFairy();
  if(location.hash==='#play-couple')openCouple();
}
window.addEventListener('hashchange',openGameFromLink);
openGameFromLink();
