
import classes from './AccordionItem.module.css';

const AccordionItem = ({ id, name, details, setActive, active}) => {

    return (
        <div key={id} className={classes.box}>
            <div className={classes.item} onClick={() => setActive(active === name  ? null : name)}>
                <h3>{name}</h3>
                <img src='/img/arrow.svg' alt="arrow"></img>
            </div>
            <div>
                {active === name && <p>
                    {details}
                </p>}
            </div>
        </div>
    )
}

export { AccordionItem };