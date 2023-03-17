import { cars } from './data/cars.js';
import { useState } from 'react';
import classes from './AccordionItem.module.css';

const AccordionItems = () => {

    const [activeCar, setActiveCar] = useState(null);

    return (
        <div>
            {!!cars?.length && 
            cars.map(({ id, name, details }) => {
                return (
                    <div id = {id} className={classes.box}>
                        <div className={classes.item} onClick={() => setActiveCar(activeCar === name ? null : name)}>
                            <h3>{name}</h3>
                            <img src='/img/arrow.svg' alt="arrow"></img>
                        </div>
                        <div>
                            {activeCar === name && <p>
                                {details}
                            </p>}
                        </div>
                    </div>
                )
            })}
        </div>  
    )

}

export { AccordionItems };