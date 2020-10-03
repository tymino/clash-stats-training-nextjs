import s from './PlayerName.module.sass';


export default function PlayerName({ tag, name }) {
  return (
    <div className={s.PlayerNameWrapper}>
      <div className={s.PlayerNameName}>{name}</div>
      <div className={s.PlayerNameTag}>{tag}</div>
    </div>
  )
}