import { Hedaer } from "./Components/Header/Header"
import { SocialCards } from "./Components/SocialCards/SocialCards"
import iconInstagram from './assets/icon-instagram.svg'


function App() {


  return (
    <>
      <Hedaer />
      <SocialCards
        background="bg-Facebook"
        text="text-Facebook"
        logo="logo-facebook"
        user="@nathanf"
        number={1987}
        arrow="caret-up-outline"
        color="text-LimeGreen"
        today={12}
      />
      <SocialCards
        background="bg-Twitter"
        text="text-Twitter"
        logo="logo-twitter"
        user="@nathanf"
        number={1044}
        arrow="caret-up-outline"
        color="text-LimeGreen"
        today={99}
      />
      <SocialCards
        background="bg-gradient-to-r from-Instagram1 to-Instagram2"
        img={iconInstagram}
        user="@realnathanf"
        number="11k"
        arrow="caret-up-outline"
        color="text-LimeGreen"
        today={1099}
      />
      <SocialCards
        background="bg-YouTube"
        text="text-YouTube"
        logo="logo-YouTube"
        user="@Nathan f,"
        number={8239}
        arrow="caret-down-outline"
        color="text-BrightRed"
        today={144}
      />
    </>
  )
}

export default App
