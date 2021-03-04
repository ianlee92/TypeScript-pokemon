import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootReducerType} from './Store'
import {fetchPokemonData} from './actions/PokemonActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function App() {
  const [pokemonName, setpokemonName] = useState("")
  const pokemonReducer = useSelector((state:RootReducerType) => state.PokemonReducer)
  const dispatch = useDispatch()

  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setpokemonName(event.target.value)
  const searchButtonTapped = () => {
    dispatch(fetchPokemonData(pokemonName))
  }
  return (
    <div className="App">
      <div style={{marginTop:'400px', width:'75%', margin: '3rem auto'}}>
        <div style={{textAlign: 'center', justifyContent:'center'}}>
        <InputGroup className="mb-3" style={{display: 'inline'}}>
          <FormControl
            style={{width:'200px', display: 'inline-block'}}
            value={pokemonName}
            onChange={handlePokemonName}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
          {/* <input style={{marginRight:'5px'}} value={pokemonName} onChange={handlePokemonName} /> */}
          <Button style={{display: 'inline', marginLeft:'3px', marginBottom:'3px'}} variant="primary" onClick={searchButtonTapped}>검색</Button>
          {pokemonReducer.success && <div>
            {/* <p>{pokemonName}</p>
            {pokemonReducer.pokemon?.abilities.map((ability)=> {
              return <div><p>{ability.ability.name}</p>
              <p>{ability.slot}</p></div>
            })} */}
            <img src={pokemonReducer.pokemon?.sprites.front_default} width='200px'/>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
