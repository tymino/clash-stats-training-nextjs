import s from './ExpLevel.module.sass';

export default function ExpLevel({ expLevel }) {
  return (
    <div className={s.ExpLevelWrapper}>
      <div className={s.ExpLevel}>{expLevel}</div>
      <img className={s.ExpLevelIcon} src="/images/i_exp-lvl.png" alt="exp-star" />
    </div>
  )
}