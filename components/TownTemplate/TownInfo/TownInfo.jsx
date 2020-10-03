import s from './TownInfo.module.sass';


export default function TownInfo({ title, attackWins, defenseWins, versusTrophies, bestVersusTrophies, versusBattleWins}) {

  const correctInfo = (title == 'Town hall') ?
    (<div className={s.TownInfo}>
      <div className={s.TownInfoItem}>
        Attack wins: {attackWins}
      </div>
      <div className={s.TownInfoItem}>
        Defense wins: {defenseWins}
      </div>
    </div>)
  :
    (<div className={s.TownInfo}>
      <div className={s.TownInfoItem}>
        Trophies: {versusTrophies}
      </div>
      <div className={s.TownInfoItem}>
        Best trophies: {bestVersusTrophies}
      </div>
      <div className={s.TownInfoItem}>
        Battle wins: {versusBattleWins}
      </div>
    </div>);


  return correctInfo;
}