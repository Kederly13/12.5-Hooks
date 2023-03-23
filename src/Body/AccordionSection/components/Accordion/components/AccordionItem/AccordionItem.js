import classes from './AccordionItem.module.css';

import iconArrow from '../../img/arrowDown.svg';

const AccordionItem = ({ id, title, description, details, setActive, active}) => {
    let className = classes.box;
    return (
        <div key={id} className={active === title ? className += ` ${classes.active}` : className}>
            <div className={classes.item} onClick={() => setActive(active === title  ? null : title)}>
                <h3>{title}</h3>
                <img src={iconArrow} className={`${classes.arrow} ${active === title ? classes.flip : ''}`}  alt="arrow"/>
            </div>
            {active === title && (<div>
            <p>{description}</p> 
            <p>{details}</p>
            </div>)}
        </div>
    )
}

export { AccordionItem };