

    async function fetchPeople() {
      const res = await fetch("https://randomuser.me/api/?results=30&nat=US");
      res
        .json()
        .then(res => setPeople(res))
        .catch(err => setErrors(err));
    }