import s from './ClanInformation.module.sass';


export default function ClanInformation({
  prop: {
    role, donations, donationsReceived, warStars,
    clan: { tag, name }
  }
}) {
  const correctRole = role === 'admin' ? 'elder' : role;
  const correctStrDonation = `Donations: ${donations}`;
  const correctStrReceived = `Received: ${donationsReceived}`;
  const correctStrWarStars = `War stars: ${warStars}`;

  return (
    <div className={s.ClanInfo}>
      <div className={s.ClanInfoName}>{name}</div>
      <div className={s.ClanInfoTag}>{tag}</div>
      <div className={s.ClanInfoRole}>{correctRole}</div>
      <div className={s.ClanInfoDonations}>{correctStrDonation}</div>
      <div className={s.ClanInfoDonationsReceived}>{correctStrReceived}</div>
      <div className={s.ClanInfoWarStars}>{correctStrWarStars}</div>
    </div>
  )
}