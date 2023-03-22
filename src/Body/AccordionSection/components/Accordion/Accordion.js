import { useEffect, useState } from 'react';

import { AccordionItem } from './components/AccordionItem/AccordionItem.js'

import classes from './Accordion.module.css';

const Accordion = () => {

    const [active, setActive] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));    
    }, []);

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