import s from './League.module.sass';


export default function League({prop}) {
  const correctTrophies = `Trophies: ${prop.trophies}`;
  const correctBestTrophies = `Best trophies: ${prop.bestTrophies}`;

  if (prop.league === undefined) return <div>none League</div>;

  return (
    <div className={s.League}>
      <div className={s.LeagueWrap}>
        <div className={s.LeagueName}>{prop.league.name}</div>
        <img
          className={s.LeagueIcon}
          src={prop.league.iconUrls.small}
          alt="league-image"
        />
      </div>
      <div className={s.LeagueInfo}>
        <div className={s.LeagueInfoTrophies}>{correctTrophies}</div>
        <div className={s.LeagueInfoИestTrophies}>{correctBestTrophies}</div>
      </div>
    </div>
  )
}