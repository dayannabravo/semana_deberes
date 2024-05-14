const score = () => [...Array(4)].reduce((sum) => sum + Math.random() * 6 + 1 | 0, -3);
const mod = (value: number) => (value - 10) >> 1;

export class DnDCharacter {
  strength = score();
  dexterity = score();
  constitution = score();
  intelligence = score();
  wisdom = score();
  charisma = score();
  hitpoints = 10 + mod(this.constitution);

  static generateAbilityScore = score;
  static getModifierFor = mod;
}