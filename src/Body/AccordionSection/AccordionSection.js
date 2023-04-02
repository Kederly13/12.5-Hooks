import { Accordion } from './components/Accordion/Accordion.js';
import { useEffect, useState } from 'react';


const AccordionSection = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));    
    }, []);

    return (
        <section>
            <div className="container">
                <Accordion data={users}/>
            </div>          
        </section>
    )
}

export { AccordionSection };