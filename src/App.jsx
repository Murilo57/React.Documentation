import './App.css'

const user = {
  name: 'Murilo Ferreira',
  imageUrl: 'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/275993107_149936377502180_1097556940795031548_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oE9d6CWtqJ8AX92qFQd&_nc_oc=AQmGy0JYwKJXLbS5zKF-YcPpyHbIVc2Af7ZC5W3-0J3EDolCpUzx6Kayi9EdDpc02Gw&_nc_ht=scontent-gru2-2.xx&oh=00_AfAN2mmqnWxBvwW-m2ZZoJ5BdeocT8xk94oNm2jTdZ0bTQ&oe=64BC7535',
  imageSize: 90,
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
    </>
  )
}

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
    <Profile/>
    <h1> Welcome to my app </h1>
    <MyButton/>
  </div>
  )
}

