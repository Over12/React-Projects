import { useState } from "react";

interface TwitterFollowCardProps {
    userName: string;
    children: React.ReactNode;
    isFollowing: boolean;
}

function TwitterFollowCard({ userName, children, isFollowing}: TwitterFollowCardProps) {

    const formatUserName = (userName: string) => `@${userName}`

    const [follow, setFollow] = useState(isFollowing);

    const handleFollowClick = () => {
        setFollow(!follow);
    }

    const followText = follow ? 'Siguiendo' : 'Seguir';

    const cardClass = follow ? 'tw-followCard-button following' : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{ children }</strong>
                    <span className='tw-followCard-infoUserName'>{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button className={cardClass} onClick={handleFollowClick}>
                    <span className="textCard">{followText}</span>
                    <span className="stopFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard