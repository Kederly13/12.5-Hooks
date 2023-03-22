import { useEffect, useState } from 'react';

import { AccordionItem } from './components/AccordionItem/AccordionItem.js'

import classes from './Accordion.module.css';

const Accordion = ({ users }) => {

    const [active, setActive] = useState(null);
    

    return (
        <div>
            {users.map(({ id, name, username, email }) => {
                return (
                    <AccordionItem
                        key={id}
                        name={name}
                        username={username}
                        email={email}
                        setActive={setActive}
                        active={active}
                    />
                )
            })}
        </div>  
    )
}

export { Accordion };