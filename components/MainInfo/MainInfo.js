import s from './MainInfo.module.sass';

import ExpLevel from './ExpLevel/ExpLevel';
import PlayerName from './PlayerName/PlayerName';

export default function MainInfo({ tag, name, expLevel }) {
  return (
    <div className={s.mainInfo}>
      <ExpLevel expLevel={expLevel}/>
      <PlayerName tag={tag} name={name}/>
    </div>
  )
}