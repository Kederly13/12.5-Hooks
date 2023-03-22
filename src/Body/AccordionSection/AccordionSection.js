import { Accordion } from './components/Accordion/Accordion.js';
import { useEffect, useState } from 'react';


const AccordionSection = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));    
    }, users);

    return (
        <section>
            <div class="container">
                <Accordion users={users}/>
            </div>          
        </section>
    )
}

export { AccordionSection };