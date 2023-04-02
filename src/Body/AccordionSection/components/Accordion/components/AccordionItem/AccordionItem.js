import classes from './AccordionItem.module.css';

import { ArrowDown } from '../../../../../../components/svg/arrowDown/ArrowDown';

import iconArrow from './svg/arrowDown.svg'

const AccordionItem = ({ id, title, description, details, setActive, active}) => {
    let className = classes.item;
    return (
        <div key={id} className={active === title ? className += ` ${classes.active}` : className}>
            <div className={classes.item__heading} onClick={() => setActive(active === title  ? null : title)}>
                <h3>{title}</h3>
                <ArrowDown/>
            </div>
            <div className={classes.item__content}>
                <p>{description}</p> 
                <p>{details}</p>
            </div>
        </div>
    )
}

export { AccordionItem };