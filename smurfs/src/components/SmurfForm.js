import React,{useState} from 'react'

function SmurfForm(props) {
    const [name,setName] = useState('')
    const [height, setheight] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurfs({name,height,age})
        setName('')
        setheight('')
        setAge('')
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={here => setName(here.target.value)}
          required
        />
        <input
          type="number"
          placeholder="height"
          name="height"
          value={height}
          onChange={here => setheight(here.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onChange={here => setAge(here.target.value)}
          required
        />
        <input type="submit" value="Add Smurf" name="submit" />
      </form>
    );
}

export default SmurfForm
