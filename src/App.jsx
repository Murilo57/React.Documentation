import './App.css'

<img className="avatar"/>

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function AboutPage() {
  return (
    <>
    <h1>About me</h1>
    <p>Hello there. <br /> How do you do?</p>
    </>
  )
}

export default function MyApp(){
  return (   
  <div>
    <avatar/>
    <AboutPage/> 
    <h1> Welcome to my app </h1>
    <MyButton/>
  </div>
  )
}