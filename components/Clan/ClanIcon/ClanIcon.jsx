import s from './ClanIcon.module.sass';

export default function ClanIcon({ badgeUrls: { medium } }) {
  return (
    <div className={s.ClanIcon}>
      <img
        className={s.ClanIconIcon}
        src={medium}
        alt="clan-icon-with-level"
      />
    </div>
  )
}