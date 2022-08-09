import React from 'react'

export const SocialMedia = () => {
    const socialMedia = ['facebook', 'instagram', 'pinterest']
    return (
        <div className="iconsSocial">
            {
                socialMedia.map((Media, i) => (
                    <a key={i} href={`https://www.${Media}.com`} target='_blank'>
                        <img src={`icon/icon-${Media}.svg`} alt={`link-${Media}`} />
                    </a>
                ))
            }
           
        </div>

    )
}
