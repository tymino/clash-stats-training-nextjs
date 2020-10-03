import s from './Clan.module.sass';

import ClanIcon from './ClanIcon/ClanIcon';
import ClanInformation from './ClanInformation/ClanInformation';

export default function Clan({ prop }) {
  if (prop.clan === undefined) {
    return (
      <div className={s.ClanNone}>
        No clan
      </div>
    );
  }
  
  return (
    <div className={s.Clan}>
      <ClanIcon badgeUrls={prop.clan.badgeUrls} />
      <ClanInformation prop={prop} />
    </div>
  )
}