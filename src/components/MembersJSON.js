import React from 'react'
import {Link} from "react-router-dom"

function membersJSON({id, name, mail, img, text, bg}) {
    return (
        <div className ="Friends_main Friends_fri">
            <div className="s_colum">
                <img src={img} alt=""/>
                <Link to ={({
                    pathname : "/profile",
                    state : {id, name, mail, img, bg}
                })}>{name}</Link>
            </div>
            <span>{text}</span>
        </div>
    )
}

export default membersJSON
