import s from './AchievInfo.module.sass';

export default function AchievInfo({
  data: { name, value, target, info, completionInfo, stars }
}) {

  let fixCompletionInfo;

  if (completionInfo !== null && stars === 3) {
    fixCompletionInfo = completionInfo;
  } else if (completionInfo === null && stars === 3) {
    fixCompletionInfo = 'completed!';
  } else {
    fixCompletionInfo = null;
  }

  return (
    <div className={s.container}>
      <div className={s.name}>{name}</div>

      <div className={value >= target ? s.value : s.value_Red}>
        {value >= target ? fixCompletionInfo : `${value} / ${target}`}
      </div>

      <div className={s.info}>{info}</div>
    </div>
  )
}