import React from 'react'
import { useEffect, useState } from 'react'
import ShowcontactLists from './ShowContactLists.jsx'
const contactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('https://uploadproducts.onrender.com/getcontact')
      const data = await response.json()
      setContacts(data)
      console.log(data)
    }

    fetchContacts()
  }, [])

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <ShowcontactLists key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default contactList