import s from './TownIcon.module.sass';


export default function TownIcon({ title, townLvl, townHallWeaponLevel }) {
  let correctTitle = null;
  let correctPath = null;
  
  const correctWeaponTown = townHallWeaponLevel == undefined ? '' : `-${townHallWeaponLevel}`;

  if (title == 'Town hall') {
    correctTitle = `${title} lvl ${townLvl}${correctWeaponTown}`;
    correctPath = `/images/th/th${townLvl}${correctWeaponTown}.png`;
  } else {
    correctTitle = `${title} lvl ${townLvl}`;
    correctPath = `/images/bh/bh${townLvl}.png`;
  }

  return (
    <div className={s.TownIcon}>
        <div className={s.TownIconName}>
          {correctTitle}
        </div>
        <img
          className={s.TownIconIcon}
          alt={correctTitle}
          src={correctPath}
        />
      </div>
  )
}