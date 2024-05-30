import React, { Component } from 'react'
import Newsitem from './Newsitem'



export default class News extends Component {
  articles = [
    {
      "status": "ok",
      "totalResults": 37,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "Us Weekly"
          },
          "author": "Erin Carlson",
          "title": "'Southern Charm' Alum Kathryn Dennis Seemingly Addresses DUI Arrest - Us Weekly",
          "description": "'Southern Charm' alum Kathryn Dennis seems to have addressed her DUI arrest with an inspirational quote on Instagram",
          "url": "https://www.usmagazine.com/celebrity-news/news/southern-charm-alum-kathryn-dennis-seemingly-addresses-dui-arrest/#article",
          "urlToImage": "https://www.usmagazine.com/wp-content/uploads/2024/05/Kathryn-Dennis-Cries-in-Dashcam-Video-From-Arrest.jpg?crop=0px%2C0px%2C2000px%2C1051px&resize=1200%2C630&quality=86&strip=all",
          "publishedAt": "2024-05-30T04:23:33Z",
          "content": "Sign InUp with your social account\r\nContinue with Google\r\nContinue with Facebook\r\nContinue with Amazon\r\nContinue with AppleWe won't post to any of your accounts\r\nGet back to the \r\nSantiago Felipe/Get… [+2656 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KCCI Des Moines"
          },
          "author": "Jocelyn Brumbaugh",
          "title": "Viral video: Man with suspended license charge shows up to virtual court hearing while driving - KCCI Des Moines",
          "description": "\"I don't even know why he would do that,\" the judge said.",
          "url": "https://www.kcci.com/article/suspended-license-charge-attends-hearing-while-driving/60943421",
          "urlToImage": "https://kubrick.htvapps.com/vidthumb/d70ce073-fdb6-40f6-aa53-912fcc8b6829/thumb_1920x1080_00002_1717036795_15034.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
          "publishedAt": "2024-05-30T02:58:00Z",
          "content": "WASHTENAW COUNTY, Mich. (Video above: Honorable Judge Cedric J. Simpson live feed via YouTube, CNN) —A Michigan man accused of driving with a suspended license showed up to a virtual hearing while be… [+842 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Jorge Castillo",
          "title": "Mets call Lopez's post-ejection glove toss 'not acceptable' - ESPN",
          "description": "Mets reliever Jorge Lopez threw his glove into the stands after being ejected in the eighth inning of Wednesday's 10-3 loss, after which the team held a players-only meeting.",
          "url": "https://www.espn.com/mlb/story/_/id/40242808/mets-say-jorge-lopez-post-ejection-glove-toss-not-acceptable",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0530%2Fr1339340_1296x729_16%2D9.jpg",
          "publishedAt": "2024-05-30T02:51:00Z",
          "content": "NEW YORK -- The New York Mets held a players-only team meeting Wednesday night after getting swept by the Los Angeles Dodgers with a 10-3 loss that included another late-inning bullpen implosion and … [+2617 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deadline"
          },
          "author": "Dade Hayes",
          "title": "Mission Accomplished? Despite Losing Proxy Fight, Billionaire Nelson Peltz Reportedly Sells Entire Disney Stake For $1B In Profit - Deadline",
          "description": "The activist investor, who waged a battle against CEO Bob Iger and the media company's board of directors, in large part because of the company's flagging stock price, has sold his entire stake at a hefty profit.",
          "url": "http://deadline.com/2024/05/disney-proxy-fight-nelson-peltz-sells-stock-profit-bob-iger-1235944326/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2024/04/Bob-Iger-Disneyland-Nelson-Peltz.jpg?w=1024",
          "publishedAt": "2024-05-30T02:50:00Z",
          "content": "Nelson Peltz may have lost the battle with Disney, but in strict financial terms may have won the war.\r\nThe activist investor waged a months-long campaign against CEO Bob Iger and the media company’s… [+1908 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KTLA Los Angeles"
          },
          "author": "Josh DuBose",
          "title": "Man, 34, charged in vicious stabbing of Hollywood special FX makeup artist - KTLA Los Angeles",
          "description": "A 34-year-old man is facing life in state prison after breaking into his estranged girlfriend’s home and allegedly stabbing her more than 20 times, leaving her with critical injuries, authorities announced Wednesday.   The violence unfolded May 23 around 4:30…",
          "url": "https://ktla.com/news/local-news/man-34-charged-in-vicious-stabbing-of-hollywood-special-fx-makeup-artist/",
          "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/05/Shadow-Hills-stabbing-1.png?w=1280",
          "publishedAt": "2024-05-30T02:23:38Z",
          "content": "A 34-year-old man is facing life in state prison after breaking into his estranged girlfriends home and allegedly stabbing her more than 20 times, leaving her with critical injuries, authorities anno… [+2036 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Page Six"
          },
          "author": "Vanessa Serna",
          "title": "Kim Zolciak calls the cops on Kroy Biermann, claims he stole her phone amid messy divorce - Page Six",
          "description": "“He’s going through my entire phone … He’s locked himself in the room going through all of my stuff,” the Bravo alum told police, according to TMZ.",
          "url": "https://pagesix.com/2024/05/29/entertainment/kim-zolciak-calls-the-cops-on-kroy-biermann-claims-he-stole-her-phone-amid-messy-divorce/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/05/kim-zolciak-calls-cops-kroy-biermann.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-05-30T02:11:00Z",
          "content": "Kim Zolciak broke down in an emotional 911 call alleging her husband, Kroy Biermann, stole her phone and locked himself in the primary bedroom amid their messy split. \r\nThe “Real Housewives of Atlant… [+4383 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deseret News"
          },
          "author": "Lois M. Collins",
          "title": "Babies exposed early to peanuts less apt to develop the allergy later - KSL.com",
          "description": "How can you prevent a peanut allergy? King's College study says early, regular peanut product consumption protects from allergy. Read more",
          "url": "https://www.deseret.com/lifestyle/2024/05/29/peanuts-babies-expose-early-less-likely-develop-allergies/",
          "urlToImage": "https://www.deseret.com/resizer/v2/6ETN2NFJLRCJNM3NPI5DILERHU.jpg?focal=0%2C0&auth=b5f82b67878273ddab1554a27c81bb2f2a76c7df4baac2c4cea3e24646f0d6f5&width=1200&height=630",
          "publishedAt": "2024-05-30T02:07:32Z",
          "content": "Parents who start feeding peanut products to their children very early, from infancy to age 5, help drastically reduce the risk the child will become allergic to peanuts later.\r\nThats according to a … [+3602 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Cate Brown, Meg Kelly, Kareem Fahim, John Hudson",
          "title": "U.S. bomb fragments found at site of Israeli strike on Rafah camp - The Washington Post",
          "description": "Weapons experts identified the fragments as an SDB GBU-39, a 250-pound small-diameter precision bomb.",
          "url": "https://www.washingtonpost.com/world/2024/05/29/rafah-strike-us-munition-israel/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/05-29-2024/t_6f8e2f71638c43dfb6d828164db43c91_name_TB_2.jpg&w=1440",
          "publishedAt": "2024-05-30T02:01:54Z",
          "content": "Four weapons experts said the Israeli military used a U.S.-made precision bomb in a strike that killed at least 45 people in southern Gaza on Sunday, after reviewing visual evidence provided to The W… [+7459 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Jake Mintz",
          "title": "Shohei Ohtani's perfect remedy for a slump was comically bad Mets and their glove-tossing reliever - Yahoo Sports",
          "description": "Dodgers manager Dave Roberts (probably) couldn't forecast this level of Mets ineptitude, but he did predict an Ohtani breakout in his pregame media scrum.",
          "url": "https://sports.yahoo.com/shohei-ohtanis-perfect-remedy-for-a-slump-was-comically-bad-mets-and-their-glove-tossing-reliever-020136947.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JgH.bR88Okvu5S0LFhuK3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/711b9890-1e22-11ef-bddd-c634933a7d79",
          "publishedAt": "2024-05-30T02:01:00Z",
          "content": "NEW YORK Wherever Shohei Ohtani goes, a microscope follows.\r\nThis week, the well-paid traveling circus known as the Los Angeles Dodgersrolled into Queens on a five-game losing streak for a series aga… [+4219 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "GOTTA SEE IT: Jake Oettinger's Stray Stick Robs Connor McDavid Of Wide-Open Goal - SPORTSNET",
          "description": "Watch as Jake Oettinger loses his stick, scrambles into position, and has his stray stick deny a wide-open look for Connor McDavid.--------------------------...",
          "url": "https://www.youtube.com/watch?v=faKxGRxA0UM",
          "urlToImage": "https://i.ytimg.com/vi/faKxGRxA0UM/maxresdefault.jpg",
          "publishedAt": "2024-05-30T01:42:32Z",
          "content": null
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Rudy Chinchilla, Doha Madani",
          "title": "Judge grants new DNA testing on only 1 item in Scott Peterson case - NBC News",
          "description": "A California judge ruled Wednesday that only one item from a list of evidence collected in the case of Scott Peterson, the man convicted 20 years ago of killing his pregnant wife, Laci, should undergo new DNA testing.",
          "url": "https://www.nbcnews.com/news/us-news/judge-grants-new-dna-testing-only-1-item-scott-peterson-case-rcna154559",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211207-scott-peterson-mn-1345-f6694b.jpg",
          "publishedAt": "2024-05-30T01:40:00Z",
          "content": "A California judge ruled Wednesday that only one item from a list of evidence collected in the case of Scott Peterson, the man convicted 20 years ago of killing his pregnant wife, Laci,should undergo… [+3289 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "John Fritze",
          "title": "Alito tells lawmakers he will not recuse from Supreme Court cases despite flag controversy - CNN",
          "description": "Supreme Court Justice Samuel Alito told lawmakers in a letter Wednesday that he will not recuse from cases involving January 6, 2021, despite their concerns about two controversial flags that have flown on his properties.",
          "url": "https://www.cnn.com/2024/05/29/politics/alito-flag-controversy-response-supreme-court/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24138762785713-20240528233439403.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-05-30T01:35:00Z",
          "content": "Supreme Court Justice Samuel Alito told lawmakers in a letter Wednesday that he will not recuse from cases involving the 2020 presidential election or the January 6, 2021, US Capitol riot despite con… [+7224 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MARCO Di MARCO",
          "title": "Iceland volcano erupts again in Grindavik: Watch drone video - The Associated Press",
          "description": "A volcano in southwestern Iceland is erupting again, spewing red streams of lava and triggering the evacuation of the popular Blue Lagoon geothermal spa. The eruption Wednesday occurred in an area north of Grindavik, a coastal town of 3,800 people that was la…",
          "url": "https://apnews.com/article/iceland-volcano-eruption-grindavik-blue-lagoon-87c95e0f5893e1e3c69634c09d3913d8",
          "urlToImage": "https://dims.apnews.com/dims4/default/28f5078/2147483647/strip/true/crop/5272x2966+0+491/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fec%2F7d%2F57b7fd70336e8d51f992b657244c%2F33c760e73b82451a95161a1e70b3cb56",
          "publishedAt": "2024-05-30T01:05:00Z",
          "content": "GRINDAVIK, Iceland (AP) A volcano in southwestern Iceland erupted Wednesday for the fifth time since December, spewing red lava that once again threatened the coastal town of Grindavik and led to the… [+2407 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Hanna Panreck",
          "title": "Nicole Brown Simpson's siblings look back on OJ Simpson verdict: 'I was just numb' - Fox News",
          "description": "Nicole Brown Simpson's siblings recently sat down for an interview with Diane Sawyer and recalled the infamous O.J. Simpson verdict, which they said shocked them.",
          "url": "https://www.foxnews.com/media/nicole-brown-simpsons-siblings-look-back-oj-simpson-verdict-i-just-numb",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/NICOLE-BROWN-SIMPSON-SISTERS.jpg",
          "publishedAt": "2024-05-30T01:00:00Z",
          "content": "Nicole Brown Simpson's siblings, Denise, Dominique and Tanya recalled the infamous O.J. Simpson verdict during an interview on Wednesday, roughly a month after Simpson died of cancer.\r\n\"We were told … [+2560 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Black men sue American Airlines for 'racial discrimination' - BBC.com",
          "description": "The airline is investigating after a lawsuit was filed saying all black men were temporarily removed from a flight.",
          "url": "https://www.bbc.com/news/articles/cy66qy83z18o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f62b/live/dfe64300-1e19-11ef-865d-77b56f7a191e.png",
          "publishedAt": "2024-05-30T00:08:24Z",
          "content": "Three black men have filed a racial discrimination lawsuit against American Airlines, alleging that the carrier briefly removed them from a flight after a complaint about body odour. \r\nThe men, who w… [+3295 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Texas storms: Power cuts expected for days - BBC.com",
          "description": "Officials warn of a \"multi-day power outage situation\", as severe weather claims another life in the state.",
          "url": "https://www.bbc.com/news/articles/czdd5y9d25jo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/76ae/live/47715c90-1d9c-11ef-a090-6b563b2f66e3.jpg",
          "publishedAt": "2024-05-30T00:08:04Z",
          "content": "James FitzGerald,BBC News\r\nAuthorities have warned that power cuts could last for days in Texas, where hundreds of thousands of homes and businesses remain disconnected from the power grid after seve… [+3238 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Mia Sato",
          "title": "Google confirms the leaked Search documents are real - The Verge",
          "description": "Until yesterday, Google had refused to comment on the authenticity of the trove of documents, some of which may indicate what the company uses to rank sites in search.",
          "url": "https://www.theverge.com/2024/5/29/24167407/google-search-algorithm-documents-leak-confirmation",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/n7BNboQ3QEk7QdxRu79cjuFwsj4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016887/STK093_Google_02.jpg",
          "publishedAt": "2024-05-29T22:12:18Z",
          "content": "Google confirms the leaked Search documents are real\r\nGoogle confirms the leaked Search documents are real\r\n / Until today, the company refused to comment on the authenticity of the trove of document… [+2971 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Vlad",
          "title": "Fitbit Ace LTE is a new smartwatch for kids, available on June 5 - GSMArena.com news - GSMArena.com",
          "description": "It has no apps but a ton of built-in games and \"eejie\" creatures. Google's Fitbit has announced the Ace LTE smartwatch for kids ages 7+ today. This device...",
          "url": "https://www.gsmarena.com/fitbit_ace_lte_is_a_new_smartwatch_for_kids_available_on_june_5-news-63059.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/05/fitbit-ace-lte-announced/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2024-05-29T22:09:01Z",
          "content": "Google's Fitbit has announced the Ace LTE smartwatch for kids ages 7+ today. This device \"transforms exercise into play, while also giving families peace of mind with reliable calling, messaging, and… [+2874 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Neurosciencenews.com"
          },
          "author": "Neuroscience News",
          "title": "Heart-Healthy Habits Linked to Reduced Biological Age - Neuroscience News",
          "description": "A new study reveals that heart-healthy behaviors can reduce biological aging.",
          "url": "https://neurosciencenews.com/heart-health-biologiccal-aging-26196/",
          "urlToImage": "https://neurosciencenews.com/files/2024/05/heart-health-aging-neurosicnece.jpg",
          "publishedAt": "2024-05-29T21:38:59Z",
          "content": "Summary: A new study reveals that heart-healthy behaviors can reduce biological aging. Researchers found that managing heart disease risk factors is associated with a younger biological age and lower… [+9907 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Israel expects Gaza war to continue for seven months, says PM's adviser - BBC.com",
          "description": "Tzachi Hanegbi also says Israel now controls 75% of the buffer zone along the Gaza-Egypt border.",
          "url": "https://www.bbc.com/news/articles/c844g02nl18o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c8db/live/830fea90-1db1-11ef-acc8-81cdbe1fe7bd.jpg",
          "publishedAt": "2024-05-29T21:13:07Z",
          "content": "More than a million Palestinians have fled Rafah since the start of the Israeli military operation in the city three weeks ago\r\nA senior Israeli official has said he expects the war against Hamas in … [+8583 chars]"
        }
      ]
    }
  ]
  constructor() {
    super();
    console.log(" hello i am consturctor from news component")
    this.state = {
      articles: this.articles

    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headline</h2>

        <div
          className="row justify-content-center align-items-center g-2"
        >
          {this.state.articles.map((element) => {
            console.log(element)
            alert("here")
            return <div className="col">
              <Newsitem title="title" imageurl="https://www.marketscreener.com/images/reuters/2016-11-29T153414Z_1006950001_LYNXMPECAS15X_RTROPTP_2_CBUSINESS-US-USA-BANKS-FDIC.JPG" description="i am a decription tab" />
            </div>
          })}


        </div>
      </div>

    )
  }
}
