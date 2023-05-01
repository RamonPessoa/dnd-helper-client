import { IRace } from "./race";

export interface ISheet {
  name: string;
  gameClasses: [
    {
      name: string;
      level: number;
      hitDice: string;
      features: [
        {
          name: string;
          description: string;
        }
      ];
    }
  ];
  background: string;
  playerName: string;
  playerId: string;
  race: IRace;
  alignment: string;
  expPoints: number;
  characterLevel: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencyBonus: number;
  skills: [
    {
      name: string;
      attribute: "strength";
    }
  ];
  traits: [
    {
      name: string;
      description: string;
    }
  ];
  items: [
    {
      name: string;
      description: string;
      quantity: 1;
    }
  ];
  coinPouch: {
    copperCoin: number;
    silverCoin: number;
    electrumCoin: number;
    goldCoin: number;
    platinumCoin: number;
  };
  languages: string[];
  hitDice: string;
  speed: number;
  maxHitPoints: number;
  temporaryHitPoints: number;
  savingThrowsAbilities: string[];
  age: number;
  height: number;
  eyes: string;
  weight: number;
  hair: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISheetModel extends ISheet {
  id: string;
}
