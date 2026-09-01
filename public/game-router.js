function openGameFromLink(){
  if(location.hash==='#play-excuse')openFuture();
  if(location.hash==='#play-affair'||location.hash==='#play-flirt')openAffair();
  if(location.hash==='#play-friend')openFriend();
  if(location.hash==='#play-fairy')openFairy();
  if(location.hash==='#play-couple')openCouple();
  if(location.hash.startsWith('#play-rpg'))rpgOpen();
}
window.addEventListener('hashchange',openGameFromLink);
openGameFromLink();
