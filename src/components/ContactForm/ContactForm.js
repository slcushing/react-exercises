import {useState, useEffect} from 'react'

function ContactForm() {
    const [contacts, setContacts] = useState ([]); //setting up empty array for contacts
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [counter, setCounter] = useState(0);

    function handleSubmit(event) {
        const newContact = {id:counter, firstName, lastName, address, phoneNumber}
        setContacts([...contacts, newContact]);
        setCounter(counter + 1);
        setFirstName('');
        setLastName(''); //after submission, this clears the inputs
        setAddress('');
        setPhoneNumber('');
    }

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    useEffect(() => {
        setContacts(JSON.parse(localStorage.getItem('contacts')));
    }, []);
    

    function handleNewFirstName (event) {
        setFirstName(event.target.value)
    }

    function handleNewLastName (event) {
        setLastName(event.target.value)
    }

    function handleNewAddress(event) {
        setAddress(event.target.value)
    }

    function handleNewPhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }
    
    return (
        <li>
            <form onSubmit={handleSubmit}>
                <label forHTML="first-name">First Name</label>
                <input name="text" type="text" id="first-name" value={firstName} onChange={handleNewFirstName}/>
                <label forHTML="last-name">Last Name</label>
                <input name="text" type="text" id="last-name" value={lastName} onChange={handleNewLastName}/>
                <label forHTML="address">Address</label>
                <input name="text" type="text" id="address" value={address} onChange={handleNewAddress}/>
                <label forHTML="phone-number">Phone Number</label>
                <input name="text" type="text" id="phone-number" value={phoneNumber} onChange={handleNewPhoneNumber}/>
                <button type="button">Submit</button>
            </form>
        </li>
    )
}

export default ContactForm