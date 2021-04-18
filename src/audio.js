import milk from './audio/milk.mp3';
import anolderbrother from './audio/anolderbrother.mp3'
import ant from './audio/ant.mp3'
import back from './audio/back.mp3'
import blanket from './audio/blanket.mp3'
import blue from './audio/blue.mp3'
import bowl from './audio/bowl.mp3'
import cloudy from './audio/cloudy.mp3'
import coldairtravels from './audio/coldairtravels.mp3'
import day from './audio/day-2.mp3'
import elderman from './audio/elderman.mp3'
import father from './audio/father.mp3'
import food from './audio/food.mp3'
import friend from './audio/friend.mp3'
import iamsatisfied from './audio/iamsatisfied.mp3'
import iamthirsty from './audio/iamthirsty.mp3'
import iwant from './audio/iwant.mp3'
import leg from './audio/leg.mp3'
import lovable from './audio/lovable.mp3'
import man from './audio/man.mp3'
import meat from './audio/meat.mp3'
import men from './audio/men.mp3'
import morning from './audio/morning.mp3'
import mosquito from './audio/mosquito.mp3'
import nine from './audio/nine.mp3'
import pants from './audio/pants.mp3'
import quarter from './audio/quarter.mp3'
import soup from './audio/soup.mp3'
import spoon from './audio/spoon.mp3'
import tall from './audio/tall.mp3'
import two from './audio/two.mp3'
import water from './audio/water.mp3'
import white from './audio/white.mp3'
import woman from './audio/woman.mp3'
import womansniece from './audio/womans_niece.mp3'


function getSound(name) {
  const m = makeMap();
  const n = formatName(name);
  return m.get(n);
}

function formatName(name) {
  return name.replaceAll(/ /g, '-').toLowerCase();
}

function makeMap() {
  let m = new Map();
  m.set("milk", new Audio(milk));
  m.set("an-older-brother", new Audio(anolderbrother));
  m.set("ant", new Audio(ant));
  m.set("back", new Audio(back));
  m.set("blanket", new Audio(blanket));
  m.set("blue", new Audio(blue));
  m.set("bowl", new Audio(bowl));
  m.set("cloudy", new Audio(cloudy));
  m.set("january", new Audio(coldairtravels));
  m.set("day", new Audio(day));
  m.set("elder-man", new Audio(elderman));
  m.set("father", new Audio(father));
  m.set("food", new Audio(food));
  m.set("friend", new Audio(friend));
  m.set("i-am-full", new Audio(iamsatisfied));
  m.set("i-am-thirsty", new Audio(iamthirsty));
  m.set("i-want", new Audio(iwant));
  m.set("leg", new Audio(leg));
  m.set("lovable", new Audio(lovable));
  m.set("man", new Audio(man));
  m.set("meat", new Audio(meat));
  m.set("men", new Audio(men));
  m.set("milk", new Audio(milk));
  m.set("morning", new Audio(morning));
  m.set("mosquito", new Audio(mosquito));
  m.set("nine", new Audio(nine));
  m.set("pants", new Audio(pants));
  m.set("quarter", new Audio(quarter));
  m.set("soup", new Audio(soup));
  m.set("spoon", new Audio(spoon));
  m.set("tall", new Audio(tall));
  m.set("two", new Audio(two));
  m.set("water", new Audio(water));
  m.set("white", new Audio(white));
  m.set("woman", new Audio(woman));
  m.set("womans-niece", new Audio(womansniece));
  return m;
}

export default getSound;