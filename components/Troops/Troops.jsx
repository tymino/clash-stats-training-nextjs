import s from './Troops.module.sass';

import Card from './Card/Card';


export default function Troops({ troops, heroes, spells }) {
  // change ' ' -> '-' for images
  const changeNameForImage = array => {
    const newArr = array.map(el => {
      let name = el.name.replace(' ', '_');
      return {
        ...el,
        name
      }
    });
    return newArr;
  };

  const changedNameTroops = changeNameForImage(troops);
  const changedNameHeroes = changeNameForImage(heroes);
  const changedNameSpells = changeNameForImage(spells);

  // For Super-troops WITH -> _ <- underscore
  const regEx = (/Super|Sneaky_Goblin|Inferno_Dragon/);

  // Filter troops home and builder base
  const homeBaseTroops = changedNameTroops.filter(t => t.village === 'home' && !t.name.match(regEx));
  const builderBaseTroops = changedNameTroops.filter(t => t.village === 'builderBase');
  // Filter heroes home and builder base
  const homeBaseHeroes = changedNameHeroes.filter(t => t.village === 'home');
  const builderBaseHeroes = changedNameHeroes.filter(t => t.village === 'builderBase');

  return (
    <div className={s.troopsContainer}>
      <h2 className={s.troopsTitleHome}>Town hall</h2>
      <Card
        title='Troops'
        data={homeBaseTroops}
      />
      <Card
        title='Heroes'
        data={homeBaseHeroes}
      />
      <Card
        title='Spells'
        data={changedNameSpells}
      />
      <h2 className={s.troopsTitleBuilder}>Builder base</h2>
      <Card
        title='Troops'
        data={builderBaseTroops}
      />
      <Card
        title='Heroes'
        data={builderBaseHeroes}
      />
    </div>
  )
}