import {useState, useEffect} from 'react'


const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('Home');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [notifs, setNotifs] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];
        if(!name.length){
            errors.push("whoa buddy you're gettin' ahead of yourself... what's your name?");
        }
        if(!email.length){
            errors.push('your email... it must exist... we must contact you');
        }
        if(!email.includes('@')){
            errors.push("where you @ bro? wheres your @?");
        }
        if(typeof phone !== 'number'){
            errors.push("jenny ive (not) got your number im (not) gonna make you mine");
        }
        if(!phone.length && phoneType){
            errors.push("EIGHT SIX SEVEN FIVE THREE OH NIIIIIINE");
        }
        if(phone && !phoneType){
            errors.push("i don't have any more jokes about the song jenny (867-5309)");
        }
        if(bio.length > 280){
            errors.push("WHOA BUDDY WE DON'T NEED YOUR LIFE STORY HERE")
        }
    }, [name, email, phone, phoneType, bio]);



    

    const onSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if(validationErrors.length){
            return alert('OH MY GOOOOOOOOOD')
        }
        const form = {name, email, phone, phoneType, staff, bio, notifs};
        console.log(form);
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setStaff('');
        setBio('');
        setNotifs('');
        setValidationErrors([]);
        setHasSubmitted(false);
    }

return (
    <div>
        {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

        <form onSubmit={onSubmit}>
            <label htmlFor='name'>
                Name
                <input id='name' name="name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label htmlFor='email'>
                Email
                <input id='email' name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label htmlFor='phone'>
                Phone
                <input id='phone' name="phone" type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>

            <label htmlFor='phoneType'>
                Phone Type
                <select id='phoneType' value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Mobile</option>
                </select>
            </label>

            <label htmlFor='staff'>
                Instructor
                <input id='staff' type='radio' name="staff" value={staff} onChange={(e) => setStaff(e.target.value)} />
                Staff
                <input id='staff' type='radio' name="staff" value={staff} onChange={(e) => setStaff(e.target.value)} />
            </label>

            <label htmlFor='bio'>
                <input id='bio' name="bio" type='textarea' value={bio} onChange={(e) => setBio(e.target.value)} />
            </label>

            <label htmlFor='notifs'>
                Do you want email notifications?
                <input id='notifs' name="bio" type='checkbox' value={notifs} onChange={(e) => setNotifs(e.target.value)} />
            </label>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
)
}

export default Forms;