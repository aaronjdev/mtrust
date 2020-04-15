import React, { useState, useEffect } from 'react';
import PersonCard from '../../components/PersonCard.js';
import Header from '../../components/Header.js';
import fetchPeople from '../../services/dataServices.js';

const Persons = () => {
    const [hasError, setErrors] = useState(false);
    const [people, setPeople] = useState({});
    let content = "";
  
    async function fetchData() {
      const res = await fetch("https://randomuser.me/api/?results=30&nat=US");
      res
        .json()
        .then(res => setPeople(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData()
    }, []);

    if (people.results){
        content = people.results.map((person) =>
        <PersonCard key={person.login.uuid} person={person} />
      ); 
    }

    return (

<div>
    <Header title="Persons" />
    <div className="row" style={{margin:0}}>
        {content}
    </div>
</div>

    );
}


export default Persons;