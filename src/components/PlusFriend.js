import React from 'react'

function PlusFriend({id, icon, title}) {
    return (
        <div>
            <i className={icon}></i>
            <span>{title}</span>
        </div>
    )
}

export default PlusFriend
