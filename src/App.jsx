import { useState } from 'react'
import  Button  from './components/Button'
import './App.css'

function App() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes,setVotes] = useState({})

    
    const handleSelected = () => {
      const randomIndex = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomIndex)

    }
    
    const handleSelectedVote = () => {
      const points = {...votes}

      if(!points[selected]){
        points[selected] = 1
      }else{
        points[selected]+=1
      }
      setVotes(points)
    }

    const getHighestVotedAnecdote = () =>{
      let highest = 0

      Object.keys(votes).forEach(anecdote => {
        console.log(highest)
        if (votes[anecdote] >  votes[highest]){
          highest = anecdote
        }
      })
      
      return(
        <>
          <h1>Highest voted Anecdote</h1>
          <p> { anecdotes[highest] }  has <b>{votes[highest]}</b> Votes.</p> 
        </>
      )

      }



    return (

      <>
        <h1>Anecdotes of the Day</h1>
        <p> { anecdotes[selected] }  has <b>{!votes[selected]? 0: votes[selected]}</b> Votes.</p> 
        <span>
          <Button handleClick = { handleSelectedVote } text = 'Vote' />
          &nbsp;
          &nbsp;
          <Button handleClick = { handleSelected }text = 'Next Anecdotes' />

        </span> 
        <br/>
        {getHighestVotedAnecdote()}
      </>
    )
}

export default App