import { Hedaer } from "./Components/Header/Header"
import { SocialCards } from "./Components/SocialCards/SocialCards"
import iconFacebook from './assets/icon-facebook.svg'
import iconTwitter from './assets/icon-twitter.svg'
import iconInstagram from './assets/icon-instagram.svg'
import iconYouTube from './assets/icon-youtube.svg'
import iconDown from './assets/icon-down.svg'
import iconUp from './assets/icon-up.svg'


function App() {


  return (
    <>
      <Hedaer />
      <SocialCards
        background="bg-Facebook"
        img={iconFacebook}
        user="@nathanf"
        number={1987}
        arrow={iconUp}
        color="text-LimeGreen"
        text="followers"
        today={12}
      />
      <SocialCards
        background="bg-Twitter"
        img={iconTwitter}
        user="@nathanf"
        number={1044}
        arrow={iconUp}
        color="text-LimeGreen"
        text="followers"
        today={99}
      />
      <SocialCards
        background="bg-gradient-to-r from-Instagram1 to-Instagram2"
        img={iconInstagram}
        user="@realnathanf"
        number="11k"
        arrow={iconUp}
        color="text-LimeGreen"
        text="followers"
        today={1099}
      />
      <SocialCards
        background="bg-YouTube"
        img={iconYouTube}
        user="@Nathan f,"
        number={8239}
        arrow={iconDown}
        color="text-BrightRed"
        text="sunscribers"
        today={144}
      />
    </>
  )
}

export default App
