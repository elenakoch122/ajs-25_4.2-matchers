export default function sort(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
