import s from './Achievements.module.sass';

import Stars from './Stars/Stars';
import AchievInfo from './AchievInfo/AchievInfo';


export default function Achievements({ data }) {
  const homeBase = data.filter(e => e.village === 'home');
  const builderBase = data.filter(e => e.village === 'builderBase');

  return (
    <div className={s.container}>
      <h2 className={s.homeBaseTitle}>Home base</h2>
      <ul className={s.homeBaseWrap}>
        {homeBase.map((ac, i) => {
          return (
            <li key={i}>
              <Stars stars={ac.stars} />
              <AchievInfo data={ac} />
            </li> 
          )
        })}
      </ul>
      <h2 className={s.builderBaseTitle}>Builder base</h2>
      <ul className={s.builderBaseWrap}>
        {builderBase.map((ac, i) => {
          return (
            <li key={i}>
              <Stars stars={ac.stars} />
              <AchievInfo data={ac} />
            </li> 
          )
        })}
      </ul>
    </div>
  )
}