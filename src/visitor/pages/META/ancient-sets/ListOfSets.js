// GENERAL + Necklaces & Rings
import ArenaIcon from '../../../../images/ArenaIcon.png'
import NormalIcon from '../../../../images/NormalIcon.png'
import RoyalAmu from '../../../../images/RoyalChallengeNecklace.png'
import DinoRing from '../../../../images/DinoRing.png'
import DinoAmu from '../../../../images/DinoAmulet.png'
import ElvenRing from '../../../../images/ElvenRing.jpg'
import HolidayRing from '../../../../images/HolidayRing.png'
import HolidayAmu from '../../../../images/HolidayAmulet.png'
import MightRing from '../../../../images/MightRing.png'
import SeaRing from '../../../../images/SeaRing.png'
import AlienAmulet from '../../../../images/AlienAmulet.jpg'
import AlienRing from '../../../../images/AlienRing.png'


// Weapons
import AlienMace from '../../../../images/AlienMace.png'
import AlienScepter from '../../../../images/AlienScepter.png'
import AlienCrossbow from '../../../../images/AlienCrossbow.png'
import PhoenixScepter from '../../../../images/PhoenixScepter.png'
import PhoenixAxe from '../../../../images/PhoenixAxe.png'
import IceMace from '../../../../images/IceMace.png'
import DinoWand from '../../../../images/DinoWand.png'
import DinoAxe from '../../../../images/DinoAxe.png'
import DinoSpear from '../../../../images/DinoSpear.png'
import AngelWand from '../../../../images/AngelWand.png'
import SeaWand from '../../../../images/SeaWand.png'
import SeaSpear from '../../../../images/SeaSpear.png'
import RainbowOrb from '../../../../images/RainbowOrb.png'
import RapidFire from '../../../../images/RapidFire.png'


// WEAPON SOULS
import WandSoul from '../../../../images/WandSoul.png'
import ScepterSoul from '../../../../images/ScepterSoul.png'
import MaceSoul from '../../../../images/MaceSoul.png'
import OrbSoul from '../../../../images/OrbSoul.png'
import AxeSoul from '../../../../images/AxeSoul.png'
import SpearSoul from '../../../../images/SpearSoul.png'
import CrossbowSoul from '../../../../images/CrossbowSoul.png'


// ARMORS
import AlienMageArmor from '../../../../images/AlienMageArmor.png'
import AlienTankArmor from '../../../../images/AlienTankArmor.png'
import SeaMageArmor from '../../../../images/SeaMageArmor.png'
import SeaTankArmor from '../../../../images/SeaTankArmor.png'
import SeaArcherArmor from '../../../../images/SeaArcherArmor.png'
import ElvenMageArmor from '../../../../images/ElvenMageArmor.jpg'
import ElvenTankArmor from '../../../../images/ElvenTankArmor.jpg'
import DinoMageArmor from '../../../../images/DinoMageArmor.png'
import DinoTankArmor from '../../../../images/DinoTankArmor.png'
import DinoArcherArmor from '../../../../images/DinoArcherArmor.png'
import TurtleMageArmor from '../../../../images/TurtleMageArmor.png'
import WolfTankArmor from '../../../../images/WolfTankArmor.png'
import AngelArcherArmor from '../../../../images/AngelArcherArmor.png'


// ARMOR SOULS
import MageArmorSoul from '../../../../images/MageArmorSoul.png'
import TankArmorSoul from '../../../../images/TankArmorSoul.png'
import ArcherArmorSoul from '../../../../images/ArcherArmorSoul.png'


export const ListOfSets = [
    {
        ash: {
            title: 'Incinerator',
            weapons: [
                {
                    rank: '1ST',
                    img: DinoWand,
                    name: 'Dino Wand',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: AngelWand,
                    name: 'Angel Wand',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: SeaWand,
                    name: 'Sea Wand',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: ArenaIcon,
                    name: 'Chain-Lightning Wand',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: NormalIcon,
                    name: 'DMG against DMG-dealers',
                    info: '',
                }
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: WandSoul,
                    name: 'Ressurection Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: WandSoul,
                    name: 'Chain Lightning Soul',
                    info: '',
                }
            ],
            armors: [
                {
                    rank: '1ST',
                    img: AlienMageArmor,
                    name: 'Alien Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: TurtleMageArmor,
                    name: 'Turtle Armor',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: SeaMageArmor,
                    name: 'Sea Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: MageArmorSoul,
                    name: 'Stasis soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Anything with dodge!',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Mix of health/magic armor | mix of Health/spellpower',
                    info: '',
                },
            ],
        },
        pala: {
            title: 'Paladin',
            weapons: [
                {
                    rank: '1ST',
                    img: IceMace,
                    name: 'Ice Mace',
                    info: '',
                },
                {
                    rank: '2ND',
                    img: NormalIcon,
                    name: 'Decrease Armor Mace',
                    info: '',
                },
                {
                    rank: '3RD',
                    img: AlienMace,
                    name: 'Alien Mace',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: MaceSoul,
                    name: 'Decrease Armor Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: MaceSoul,
                    name: 'Healing Soul',
                    info: '',
                }
            ],
            armors: [
                {
                    rank: '1ST',
                    img: AlienTankArmor,
                    name: 'Alien Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: WolfTankArmor,
                    name: 'Wolf Armor',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: NormalIcon,
                    name: 'Healing Armor',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: SeaTankArmor,
                    name: 'Sea Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: TankArmorSoul,
                    name: 'Health Increase Soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Dodge Ring',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Health Necklace',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: RoyalAmu,
                    name: 'Royal Challenge Necklace',
                    info: '',
                },
            ],
        },
        oracle: {
            title: 'Oracle',
            weapons: [
                {
                    rank: '1ST',
                    img: AlienScepter,
                    name: 'Alien Scepter',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: PhoenixScepter,
                    name: 'Phoenix Scepter',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: NormalIcon,
                    name: 'Ressurection Scepter',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: ScepterSoul,
                    name: 'Ressurection Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: ScepterSoul,
                    name: 'Chain Lightning Soul',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ScepterSoul,
                    name: 'Vampire Soul',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: SeaMageArmor,
                    name: 'Sea Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: TurtleMageArmor,
                    name: 'Turtle Armor',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ElvenMageArmor,
                    name: 'Elven Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: MageArmorSoul,
                    name: 'Stasis Soul',
                    info: '',

                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Dodge Ring',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Mix of health/magic armor | mix of Health/spellpower',
                    info: '',
                },
            ],
        },
        dark: {
            title: 'Darkula',
            weapons: [
                {
                    rank: '1ST',
                    img: RainbowOrb,
                    name: 'Rainbow Orb',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: ArenaIcon,
                    name: 'Instakill Orb',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ArenaIcon,
                    name: 'Chain Lightning Orb',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: OrbSoul,
                    name: 'Ressurection Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: OrbSoul,
                    name: 'Chain Lightning Soul',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: DinoMageArmor,
                    name: 'Dino Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: TurtleMageArmor,
                    name: 'Turtle Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: MageArmorSoul,
                    name: 'Stasis Soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: DinoRing,
                    name: 'Dino Ring',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: ElvenRing,
                    name: 'Elven Ring',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: HolidayRing,
                    name: 'Holiday Ring',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: NormalIcon,
                    name: 'Dodge Ring',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: DinoAmu,
                    name: 'Dino Necklace',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: HolidayAmu,
                    name: 'Holiday Necklace',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: NormalIcon,
                    name: 'Mix: Health/Magic Armor Necklace',
                    info: '',
                },
            ],
        },
        anni: {
            title: 'Annihilator',
            weapons: [
                {
                    rank: '1ST',
                    img: PhoenixAxe,
                    name: 'Phoenix Axe',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: DinoAxe,
                    name: 'Dino Axe',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ArenaIcon,
                    name: 'Damage increase on any Ressurection',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: NormalIcon,
                    name: 'Damage Increase Axe',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: AxeSoul,
                    name: 'Damage Increase on any Ressurection Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: AxeSoul,
                    name: 'Damage Increase Soul',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: SeaTankArmor,
                    name: 'Sea Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: AlienTankArmor,
                    name: 'Alien Armor',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ElvenTankArmor,
                    name: 'Elven Armor',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: DinoTankArmor,
                    name: 'Dino Armor',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: WolfTankArmor,
                    name: 'Wolf Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: TankArmorSoul,
                    name: 'Health Increase Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: TankArmorSoul,
                    name: 'Absorb Soul (arena)',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: TankArmorSoul,
                    name: 'Damage Increase Soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: '+3 Dodge slots Ring',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: MightRing,
                    name: 'Might Ring',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: SeaRing,
                    name: 'Sea Ring',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Mix: Health/Magic Armor Necklace',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: RoyalAmu,
                    name: 'Royal Challenge Necklace',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: AlienAmulet,
                    name: 'UFO necklace',
                    info: '',
                },
            ],
        },
        legio: {
            title: 'Legionaire',
            weapons: [
                {
                    rank: '1ST',
                    img: DinoSpear,
                    name: 'Dino Spear',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: ArenaIcon,
                    name: 'Damage Increase on any Resurrection Spear',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: NormalIcon,
                    name: 'Damage Increase Spear',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: SeaSpear,
                    name: 'Sea Spear',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: SpearSoul,
                    name: 'Splash on Increase Damage Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: SpearSoul,
                    name: 'Damage Increase Soul',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: SpearSoul,
                    name: 'Damage Increase on Resurrection Soul',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: SpearSoul,
                    name: 'Crit Soul',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: SpearSoul,
                    name: 'Healing Soul',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: AngelArcherArmor,
                    name: 'Angel Armor (ARCHER)',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: SeaArcherArmor,
                    name: 'Sea Armor (ARCHER)',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: ArcherArmorSoul,
                    name: 'Self Resurrection Soul',
                    info: '',
                },
                
                {
                    rank: '2ND',
                    img: ArcherArmorSoul,
                    name: 'Self Healing Soul',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ArcherArmorSoul,
                    name: 'Dodge or Damage reduction Soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: AlienRing,
                    name: 'Alien Ring',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: SeaRing,
                    name: 'Sea Ring',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: MightRing,
                    name: 'Might Ring',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: NormalIcon,
                    name: 'As many Crit/Dodge as Possible',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: NormalIcon,
                    name: 'Mix: Healh/Magic Armor Necklace',
                    info: '',
                },

            ],
        },
        necro: {
            title: 'Necromancer',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        storm: {
            title: 'Storm',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        shadow: {
            title: 'Shadow',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        bane: {
            title: 'Bane/Doom',
            weapons: [
                {
                    rank: '1ST',
                    img: AlienCrossbow,
                    name: 'Alien Crossbow',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: RapidFire,
                    name: 'Rapid Fire',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: CrossbowSoul,
                    name: 'Damage Increase Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: CrossbowSoul,
                    name: 'Damage Increase on any Resurrection',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: CrossbowSoul,
                    name: 'Crit/Damage Increase on Crit',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: DinoArcherArmor,
                    name: 'Dino Armor',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: AngelArcherArmor,
                    name: 'Angel Armor',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: SeaArcherArmor,
                    name: 'Sea Armor',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: ArcherArmorSoul,
                    name: 'Self Resurrection Soul',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: ArcherArmorSoul,
                    name: 'Healing Soul',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: ArcherArmorSoul,
                    name: 'Dodge Soul',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: DinoRing,
                    name: 'Dino Ring',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: NormalIcon,
                    name: 'If Alien weapon: Crit | If Rapid Fire: Damage',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: DinoAmu,
                    name: 'Dino Necklace',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: NormalIcon,
                    name: 'Mix: Health/Magic Armor Necklace',
                    info: '',
                },
            ],
        },
        ranger: {
            title: 'Ranger',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        snake: {
            title: 'Snake Charmer',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        illu: {
            title: 'Illusionist',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        priest: {
            title: 'Priest',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        demon: {
            title: 'Demon Hunter',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        bastion: {
            title: 'Bastion',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        inventor: {
            title: 'Inventor',
            weapons: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            weaponSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armors: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            armorSoul: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            rings: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
            amulets: [
                {
                    rank: '1ST',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '2ND',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '3RD',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '4TH',
                    img: '',
                    name: '',
                    info: '',
                },

                {
                    rank: '5TH',
                    img: '',
                    name: '',
                    info: '',
                },
            ],
        },
        
    }
]