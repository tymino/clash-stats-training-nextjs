import s from './TownTemplate.module.sass';

import TownIcon from './TownIcon/TownIcon';
import TownInfo from './TownInfo/TownInfo';


export default function TownTemplate({ title, townLvl = '1', townHallWeaponLevel, attackWins, defenseWins, versusTrophies, bestVersusTrophies, versusBattleWins }) {
  return (
    <div className={s.Town}>
      <TownIcon
        title={title}
        townLvl={townLvl}
        townHallWeaponLevel={townHallWeaponLevel}
      />
      <TownInfo
        title={title}
        attackWins={attackWins}
        defenseWins={defenseWins}
        versusTrophies={versusTrophies}
        bestVersusTrophies={bestVersusTrophies}
        versusBattleWins={versusBattleWins}
      />
    </div>
  )
}