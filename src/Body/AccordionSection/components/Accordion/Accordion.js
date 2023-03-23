import { useEffect, useState } from 'react';

import { AccordionItem } from './components/AccordionItem/AccordionItem.js'

import classes from './Accordion.module.css';

const Accordion = ({ data }) => {

    const [active, setActive] = useState(null);
    

    return (
        <div>
            {data.map(({ id, name, username, email }) => {
                return (
                    <AccordionItem
                        key={id}
                        title={name}
                        description={username}
                        details={email}
                        setActive={setActive}
                        active={active}
                    />
                )
            })}
        </div>  
    )
}

export { Accordion };