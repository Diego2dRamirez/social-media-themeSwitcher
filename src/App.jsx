import { Hedaer } from "./Components/Header/Header"
import { SocialCards } from "./Components/SocialCards/SocialCards"
import iconFacebook from './assets/icon-facebook.svg'
import iconTwitter from './assets/icon-twitter.svg'
import iconInstagram from './assets/icon-instagram.svg'
import iconYouTube from './assets/icon-youtube.svg'
import iconDown from './assets/icon-down.svg'
import iconUp from './assets/icon-up.svg'
import { Overview } from "./Components/Overview/Overview"


function App() {


  return (
    <>
      <Hedaer />

      <section className="lg:flex lg:px-10 lg:gap-5">
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
      </section>

      <section className="mt-11">
        <h2 className="text-2xl text-DarkGrayishBlue font-bold pl-5">Overview - Today</h2>
        <Overview
          subTitle="page views"
          img={iconFacebook}
          number="87"
          arrow={iconUp}
          percentage="3"
          color="text-LimeGreen"
        />
        <Overview
          subTitle="likes"
          img={iconFacebook}
          number="52"
          arrow={iconDown}
          percentage="2"
          color="text-BrightRed"
        />
        <Overview
          subTitle="likes"
          img={iconInstagram}
          number="5462"
          arrow={iconUp}
          percentage="2257"
          color="text-LimeGreen"
        />
        <Overview
          subTitle="profile views"
          img={iconInstagram}
          number="52k"
          arrow={iconUp}
          percentage="1375"
          color="text-LimeGreen"
        />
        <Overview
          subTitle="retweets"
          img={iconTwitter}
          number="117"
          arrow={iconUp}
          percentage="303"
          color="text-LimeGreen"
        />
        <Overview
          subTitle="likes"
          img={iconTwitter}
          number="507"
          arrow={iconUp}
          percentage="553"
          color="text-LimeGreen"
        />
        <Overview
          subTitle="likes"
          img={iconYouTube}
          number="107"
          arrow={iconDown}
          percentage="19"
          color="text-BrightRed"
        />
        <Overview
          subTitle="total views"
          img={iconYouTube}
          number="1407"
          arrow={iconDown}
          percentage="12"
          color="text-BrightRed"
        />
      </section>
    </>
  )
}

export default App
