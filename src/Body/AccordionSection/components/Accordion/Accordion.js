import { useState } from 'react';

import { cars } from './data/cars.js';

import { AccordionItem } from './components/AccordionItem/AccordionItem.js'

import classes from './Accordion.module.css';

const Accordion = () => {

    const [active, setActive] = useState(null);

    return (
        <div>
            {!!cars?.length && 
            cars.map(({ id, name, details }) => {
                return (
                    <AccordionItem
                        key={id}
                        name={name}
                        details={details}
                        setActive={setActive}
                        active={active}
                    />
                )
            })}
        </div>  
    )
}

export { Accordion };