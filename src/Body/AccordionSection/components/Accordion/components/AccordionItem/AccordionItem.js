
import classes from './AccordionItem.module.css';

import iconArrow from '../../../../../../'

const AccordionItem = ({ id, name, username, email, setActive, active}) => {
    let className = classes.box;
    return (
        <div key={id} className={active === name ? className += classes.active : className}>
            <div className={classes.item} onClick={() => setActive(active === name  ? null : name)}>
                <h3>{name}</h3>
                <img src='/img/arrow.svg' alt="arrow"></img>
            </div>
            {active === name && (<div>
            <p>{username}</p> 
            <p>{email}</p>
            </div>)}
        </div>
    )
}

export { AccordionItem };