"use client"

import Counter from "../components/counter"
import { ListNama } from "../components/listNama"
import { Status } from "../components/status"
import { Headers } from "../components/Header"
import { Button } from "../components/button"
import { Input } from "../components/Input"
function App(){
    const namaOrang = {
      first : 'Hugo',
      last : 'Sabam',
    }
    const listNam = [
    {
      first : 'Hugo',
      last : 'Sabam',
    },
    {
      first : 'Lmao',
      last : 'pisan',
    },
    {
      first : 'Lmao',
      last : 'pisan',
    },
    {
      first : 'Lmao',
      last : 'pisan',
    },
    {
      first : 'Lmao',
      last : 'pisan',
    },
  ]



    return (
      <>
      <Counter name= 'dadas' isLog = {true}/>

      
      <div>Hello</div>
      <ListNama names={listNam} />
      <Status >
        <Headers> Halo semua</Headers>
      </Status>
      <div>
        <Button 
          handleClick={ (event,id) => {
            console.log('dasdsd',event,id)

          }}
        />
      </div>
      <div>
        <Input  value="" handleChange={event => console.log(event)}/>
      </div>

     
      </>
    )
}

export default App