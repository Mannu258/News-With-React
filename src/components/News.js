import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello, I am constructor from news component");
        this.state = {
            articles: [
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
                },{
                    "source": {
                    "id": null,
                    "name": "Wccftech"
                    },
                    "author": "Muhammad Zuhair",
                    "title": "AMD Intros “Bug Bounty” Program, Awarding Individuals Up To $30,000 For Finding Bugs",
                    "description": "AMD has decided to fight system bugs in a pretty exciting way. The firm is partnering with the cloud security provider Intigriti to start a new \"bug hunting program\" with a bounty. Well, AMD Has Declared The Bug Bounty Race, This Time Coming With A Better Rew…",
                    "url": "https://wccftech.com/amd-bug-bounty-program-30k-usd-award-finding-bugs/",
                    "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2024/04/2302705_Ryzen-AI-PRO_motherboard_01_0003_4K-Custom.png",
                    "publishedAt": "2024-06-01T06:30:07Z",
                    "content": "AMD has decided to fight system bugs in a pretty exciting way. The firm is partnering with the cloud security provider Intigriti to start a new \"bug hunting program\" with a bounty.\r\nWell, it's surely… [+1804 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Livemint"
                    },
                    "author": "Arun Chulani",
                    "title": "Investing for a long term wealth creation? Make note of 3 key investing mantras",
                    "description": "Indians love a good deal more than cricket or tea. In investing, be cautious of growth traps. High-growth industries may not always lead to good returns due to increased competition. Finding undervalued companies like Costco can lead to long-term success.",
                    "url": "https://www.livemint.com/money/personal-finance/investing-for-a-long-term-wealth-creation-make-note-of-3-key-investing-mantras-investments-costco-tesla-11717053244812.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/30/1600x900/investor_1716898486093_1717065359552.jpg",
                    "publishedAt": "2024-06-01T06:09:31Z",
                    "content": "If there is something that Indians get more excited about than cricket and their morning cup of tea, it is getting a good deal. In the world of investing, sometimes that shiny, fast-growing company c… [+4478 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Gadgets360.com"
                    },
                    "author": "Reuters",
                    "title": "Tesla Shareholder Sues Elon Musk for Alleged $7.5 Billion Insider Trading",
                    "description": "Tesla shareholder Michael Perry has filed a lawsuit accusing Tesla CEO Elon Musk of insider trading. The shareholder alleges that Musk sold over $7.5 billion of shares of the electric car maker in late 2022, before potentially disappointing production and del…",
                    "url": "https://www.gadgets360.com/auto/news/tesla-elon-musk-insider-trading-lawsuit-shareholder-allegation-5791982",
                    "urlToImage": "https://i.gadgets360cdn.com/large/musk_reuters_1691323994221.jpg",
                    "publishedAt": "2024-06-01T05:33:44Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entre… [+2559 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "NDTV News"
                    },
                    "author": null,
                    "title": "X User Says Elon Musk Never Aimed To Be CEO, Tech Mogul's Reply Surprises",
                    "description": "A viral post on social media reveals that Elon Musk, known for his roles as CEO of Tesla and SpaceX, confirmed he preferred hands-on engineering work over being a CEO.",
                    "url": "https://www.ndtv.com/offbeat/x-user-says-elon-musk-never-aimed-to-be-ceo-tech-moguls-reply-surprises-5791967",
                    "urlToImage": "https://c.ndtvimg.com/2024-04/elbr9jfg_elon-musk_625x300_29_April_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
                    "publishedAt": "2024-06-01T05:23:00Z",
                    "content": "Elon Musk, the boss at Tesla and SpaceX, is one of the richest people in the world.\r\nElon Musk, the big boss at Tesla and SpaceX, is one of the richest people in the world. He runs these amazing comp… [+1632 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "arstechnica.com",
                    "title": "Jeep’s first EV is the 600 horsepower, 300-mile-range Wagoneer S",
                    "description": "The Jeep brand has finally debuted its first purpose-built electric vehicle. It's targeting the hotly contested SUV segment with the new Wagoneer S, which goes on sale this fall. But other than its name, it shares little with the gasoline-powered Wagoneer; th…",
                    "url": "https://biztoc.com/x/bc66e5765aedc56d",
                    "urlToImage": "https://c.biztoc.com/p/bc66e5765aedc56d/og.webp",
                    "publishedAt": "2024-06-01T05:20:07Z",
                    "content": "The Jeep brand has finally debuted its first purpose-built electric vehicle. It's targeting the hotly contested SUV segment with the new Wagoneer S, which goes on sale this fall. But other than its n… [+276 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CleanTechnica"
                    },
                    "author": "Jennifer Sensiba",
                    "title": "Why PHEVs Like GM’s Next Volt Need At Least 60 Miles Of Real EV Range",
                    "description": "With recent news that GM is going to re-introduce plugin hybrids in 2027, it’s likely that the company is still figuring out the design. So, I wanted to offer some unsolicited advice GM and everyone else going back to PHEVs need to think as they put new desig…",
                    "url": "https://cleantechnica.com/2024/06/01/why-phevs-like-gms-next-volt-need-at-least-60-miles-of-real-ev-range/",
                    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/03/Jennifer-Sensiba-Two-Volts-Charging.png",
                    "publishedAt": "2024-06-01T05:03:25Z",
                    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWith recent news that GM is going to re-introduce plugin hybrids in 2027, it’s likely that the company is sti… [+5735 chars]"
                    },
                    {
                    "source": {
                    "id": "the-irish-times",
                    "name": "The Irish Times"
                    },
                    "author": "Proinsias O'Mahony",
                    "title": "Judgment day nears for Musk as shareholders vote on $56bn pay day",
                    "description": "Shareholders approving Musk’s pay deal seem like turkeys voting for Christmas",
                    "url": "https://www.irishtimes.com/your-money/2024/06/01/judgment-day-nears-for-musk-as-shareholders-vote-on-56bn-pay-day/",
                    "urlToImage": "https://www.irishtimes.com/resizer/kz22Y2XuzQo_zpECgj8wp0LuUW0=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/UBCOEFQ56ZYE24TLFF3VCLI6KM.jpg",
                    "publishedAt": "2024-06-01T05:00:00Z",
                    "content": "June 13th is judgment day for Elon Musks huge $56 billion pay deal, rejected by a Delaware judge in January but now facing a new shareholder vote at Teslas annual meeting.\r\nAlmost three-quarters of s… [+1325 chars]"
                    },
                    {
                    "source": {
                    "id": "breitbart-news",
                    "name": "Breitbart News"
                    },
                    "author": "Elizabeth Weibel, Elizabeth Weibel",
                    "title": "Elon Musk to Host Town Hall on X for Donald Trump After Slamming Guilty Verdict",
                    "description": "Tesla CEO and X owner Elon Musk is preparing to host a town hall on his social media website for former President Donald Trump after slamming Trump's conviction.\nThe post Elon Musk to Host Town Hall on X for Donald Trump After Slamming Guilty Verdict appeared…",
                    "url": "https://www.breitbart.com/politics/2024/05/31/elon-musk-host-town-hall-x-donald-trump-slamming-guilty-verdict/",
                    "urlToImage": "https://media.breitbart.com/media/2024/02/GettyImages-2001176340-640x335.jpg",
                    "publishedAt": "2024-06-01T04:32:07Z",
                    "content": "Tesla CEO and X owner Elon Musk is preparing to host a town hall on his social media website for former President Donald Trump after slamming Trump’s conviction.\r\nA source familiar with the plans tol… [+1621 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "aol.com",
                    "title": "Tesla investor accuses Elon Musk of insider trading that banked him $7.5 billion",
                    "description": "None He accused Musk of selling $7.5B worth of Tesla stock, knowing the company would miss Q4 targets. • None The stocks would be worth 55% less if Musk sold them after the Q4 results were released, he alleged. A Tesla investor accused Elon Musk of using insi…",
                    "url": "https://biztoc.com/x/be7051405709092d",
                    "urlToImage": "https://c.biztoc.com/p/be7051405709092d/s.webp",
                    "publishedAt": "2024-06-01T04:08:05Z",
                    "content": "None He accused Musk of selling $7.5B worth of Tesla stock, knowing the company would miss Q4 targets.None The stocks would be worth 55% less if Musk sold them after the Q4 results were released, he … [+276 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "benzinga.com",
                    "title": "Elon Musk Faces $7.5B Insider Trading Allegation From Tesla Shareholder",
                    "description": "Tesla Inc. TSLA shareholder Michael Perry on Thursday filed a lawsuit against Elon Musk alleging insider trading when the CEO sold shares worth over $7.5 billion in the last two months of 2022. What Happened: The lawsuit, filed by Perry in the Delaware Chance…",
                    "url": "https://biztoc.com/x/fbc90e1598628339",
                    "urlToImage": "https://c.biztoc.com/p/fbc90e1598628339/s.webp",
                    "publishedAt": "2024-06-01T04:00:07Z",
                    "content": "Tesla Inc. TSLA shareholder Michael Perry on Thursday filed a lawsuit against Elon Musk alleging insider trading when the CEO sold shares worth over $7.5 billion in the last two months of 2022.What H… [+289 chars]"
                    },
                    {
                    "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                    },
                    "author": "Reuters",
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "A Tesla shareholder filed a lawsuit accusing CEO Elon Musk of insider trading by selling over $7.5 billion of Tesla shares before disappointing production numbers were public.",
                    "url": "https://economictimes.indiatimes.com/markets/stocks/news/tesla-shareholder-sues-musk-for-alleged-7-5-billion-insider-trading/articleshow/110609689.cms",
                    "urlToImage": "https://img.etimg.com/thumb/msid-110609715,width-1200,height-630,imgsize-81328,overlay-etmarkets/photo.jpg",
                    "publishedAt": "2024-06-01T03:50:19Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entre… [+2497 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Twistedsifter.com"
                    },
                    "author": "Matthew Gilligan",
                    "title": "Neighbor Said Solar Panels Are Bad For His Wife’s Illness Because Of “Dirty Electricity,” But They’re Installing Them Anyway",
                    "description": "A very weird story...",
                    "url": "http://twistedsifter.com/2024/05/the-neighbor-said-solar-panels-are-bad-for-his-wifes-illness-theyre-installing-them-anyway/",
                    "urlToImage": "https://twistedsifter.com/wp-content/uploads/2024/05/redditsolar.jpg",
                    "publishedAt": "2024-06-01T03:11:55Z",
                    "content": "I don’t want to cast anyone in a bad light, but this person’s neighbor sounds like a wacko.\r\nThere, I said it!\r\nBut now you have to take a look for yourself and see what YOU think.\r\nGo ahead and take… [+2415 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Livemint"
                    },
                    "author": "Reuters",
                    "title": "Tesla shareholder sues Elon Musk for alleged $7.5 billion insider trading",
                    "description": "In his lawsuit, shareholder Michael Perry claimed that Tesla's share price sank after its Q4 results on January 2, alleging that CEO Elon Musk ‘improperly benefited’ by about $3 billion in insider profits.",
                    "url": "https://www.livemint.com/companies/news/tesla-shareholder-sues-elon-musk-for-alleged-7-5-billion-insider-trading-11717206356620.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/01/1600x900/Elon_Musk_CEO_Tesla_insider_trading_1717211081348_1717211081525.jpg",
                    "publishedAt": "2024-06-01T03:08:34Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entre… [+3463 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "businessinsider.com",
                    "title": "Tesla investor accuses Elon Musk of insider trading that banked him $7.5 billion",
                    "description": "By clicking “Sign Up”, you accept our Terms of Service and Privacy Policy . You can opt-out at any time by visiting our Preferences page or by clicking \"unsubscribe\" at the bottom of the email. Access your favorite topics in a personalized feed while you're o…",
                    "url": "https://biztoc.com/x/5ccd78f79c94e9f9",
                    "urlToImage": "https://c.biztoc.com/p/5ccd78f79c94e9f9/s.webp",
                    "publishedAt": "2024-06-01T03:08:04Z",
                    "content": "By clicking Sign Up, you accept our Terms of Service and Privacy Policy . You can opt-out at any time by visiting our Preferences page or by clicking \"unsubscribe\" at the bottom of the email.Access y… [+292 chars]"
                    },
                    {
                    "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                    },
                    "author": "Lloyd Lee",
                    "title": "Tesla investor accuses Elon Musk of insider trading that banked him $7.5 billion",
                    "description": "Tesla investor Michael Perry alleged that Elon Musk knew the company would miss fourth-quarter projections when he sold $7.5B in Tesla stock.",
                    "url": "https://www.businessinsider.com/elon-musk-accused-insider-trading-tesla-investor-7-5-billion-2024-5",
                    "urlToImage": "https://i.insider.com/665a4eff1cd3b17790424d84?width=1200&format=jpeg",
                    "publishedAt": "2024-06-01T02:57:32Z",
                    "content": "ALAIN JOCARD/ Getty Images\r\n<ul><li>Tesla investor Michael Perry sued Elon Musk for insider trading.</li><li>He accused Musk of selling $7.5B worth of Tesla stock, knowing the company would miss Q4 t… [+3993 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                    },
                    "author": null,
                    "title": "Tesla investor accuses Elon Musk of insider trading that banked him $7.5 billion",
                    "description": null,
                    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e88c8100-5733-436e-ab19-ac06b1763073",
                    "urlToImage": null,
                    "publishedAt": "2024-06-01T02:57:32Z",
                    "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "New Atlas"
                    },
                    "author": "C.C. Weiss",
                    "title": "Self-inflating Tesla mattress brings hotel comfort to Y micro-camping",
                    "description": "Snuuzu – sounds like a creature from the Dr. Seuss universe. In reality, it's a better breed of inflatable foam mattress tailored specially to the Tesla Model Y and Model 3. The multilayer mattress levels out the vehicle and creates a cushy surface on which t…",
                    "url": "https://newatlas.com/outdoors/snuuzu-tesla-micro-camper-mattress/",
                    "urlToImage": "https://assets.newatlas.com/dims4/default/7965858/2147483647/strip/true/crop/1032x542+0+69/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fee%2F94%2F3807ed3b48729992178f1c49e6b6%2Fscreenshot-2024-05-31-at-7.50.21%E2%80%AFPM.png&na.image_optimisation=0",
                    "publishedAt": "2024-06-01T02:36:23Z",
                    "content": "Snuuzu sounds like a creature from the Dr. Seuss universe. In reality, it's a better breed of inflatable foam mattress tailored specially to the Tesla Model Y and Model 3. The multilayer mattress lev… [+3156 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CleanTechnica"
                    },
                    "author": "Jennifer Sensiba",
                    "title": "Texas Gigafactory Might Have An Oft-Overlooked Pollution Problem",
                    "description": "An article at The Cool Down shares the frustrating story of some people who live near Tesla’s Gigafactory near Austin, Texas. The complaint: pollution. But this story isn’t about bad air, bad water, or anything like that. It’s also nothing like the complaints…",
                    "url": "https://cleantechnica.com/2024/05/31/texas-gigafactory-might-have-an-oft-overlooked-pollution-problem/",
                    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/US-Light-Pollution-Map-800x445.png",
                    "publishedAt": "2024-06-01T01:53:15Z",
                    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAn article at The Cool Down shares the frustrating story of some people who live near Tesla’s Gigafactory nea… [+6301 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Freerepublic.com"
                    },
                    "author": "Jalopnik",
                    "title": "Whats The Worst Pickup Truck Ever Made?",
                    "description": "Yes, we mean something other than the Tesla Cybertruck.You can’t really go wrong with a pickup truck. They’re like the Swiss Army Knives of the automotive world. Wanna haul or pull some crap? There’s a bed and you can tow. Wanna carry people? There’s a number…",
                    "url": "https://freerepublic.com/focus/f-chat/4241443/posts",
                    "urlToImage": null,
                    "publishedAt": "2024-06-01T01:31:49Z",
                    "content": "Skip to comments.\r\nWhats The Worst Pickup Truck Ever Made?Jalopnik ^\r\n | 5/31\r\n | Lawrence Hodge\r\nPosted on 05/31/2024 6:31:49 PM PDT by nickcarraway\r\nYes, we mean something other than the Tesla Cybe… [+6920 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "finance.yahoo.com",
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entrepreneur sold the shares before potentially disappointing pro…",
                    "url": "https://biztoc.com/x/18bacdb7d08404df",
                    "urlToImage": "https://c.biztoc.com/p/18bacdb7d08404df/s.webp",
                    "publishedAt": "2024-06-01T01:28:05Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entre… [+263 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "wsj.com",
                    "title": "The Wall Street Whisperer Leading the Charge for Elon Musk's $46 Billion Pay Package",
                    "description": "Tesla chair Robyn Denholm is trying to convince investors to approve Musk’s pay package #tesla #robyndenholm",
                    "url": "https://biztoc.com/x/6b5b814dd9882524",
                    "urlToImage": "https://c.biztoc.com/274/og.png",
                    "publishedAt": "2024-06-01T01:14:05Z",
                    "content": "Tesla chair Robyn Denholm is trying to convince investors to approve Musks pay package\r\n#tesla#robyndenholm\r\nThis story appeared on wsj.com, 2024-06-01."
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Case Against Elon Musk For Alleged $7.5 Billion Insider Trading",
                    "description": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022.",
                    "url": "https://www.ndtv.com/world-news/case-against-elon-musk-for-alleged-7-5-billion-insider-trading-5790878",
                    "urlToImage": "https://c.ndtvimg.com/2021-03/2l9lamok_elon-musk-tesla_625x300_24_March_21.jpg",
                    "publishedAt": "2024-06-01T01:01:17Z",
                    "content": "Musk and Tesla did not immediately respond to a Reuters request for comment.\r\nA Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion … [+2649 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "aol.com",
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entrepreneur sold the shares before potentially disappointing pro…",
                    "url": "https://biztoc.com/x/31c6a9eb5978d646",
                    "urlToImage": "https://c.biztoc.com/p/31c6a9eb5978d646/s.webp",
                    "publishedAt": "2024-06-01T00:52:06Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entre… [+251 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Investing.com"
                    },
                    "author": "Reuters",
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "url": "https://www.investing.com/news/stock-market-news/tesla-shareholder-sues-musk-for-alleged-75-billion-insider-trading-3466539",
                    "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEF1P0T6_L.jpg",
                    "publishedAt": "2024-06-01T00:40:31Z",
                    "content": "(Reuters) - A Tesla (NASDAQ:TSLA) shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, sa… [+2476 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CNA"
                    },
                    "author": null,
                    "title": "Tesla shareholder sues Elon Musk for alleged US$7.5 billion insider trading",
                    "description": "A Tesla shareholder filed a lawsuit on Thursday (May 30) accusing CEO Elon Musk of insider trading when he sold over US$7.5 billion of shares of the electric car maker in late 2022, saying the billionaire entrepreneur sold the shares before potentially disapp…",
                    "url": "https://www.channelnewsasia.com/business/elon-musk-tesla-shareholder-sues-insider-trading-4378846",
                    "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--FfR5pkUa--/c_crop,h_450,w_800,x_0,y_13/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2024-06-01t004856z_3_lynxmpek500x7_rtroptp_3_tesla-musk-insidertrading.jpg?itok=VMf5hyOC",
                    "publishedAt": "2024-06-01T00:39:00Z",
                    "content": "A Tesla shareholder filed a lawsuit on Thursday (May 30) accusing CEO Elon Musk of insider trading when he sold over US$7.5 billion of shares of the electric car maker in late 2022, saying the billio… [+1493 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Bloomberglaw.com"
                    },
                    "author": "Jef Feeley",
                    "title": "Musk Accused of $7.5 Billion Insider Trades in Investor Suit...",
                    "description": "Elon Musk had inside knowledge of a miss on production and delivery numbers that Tesla Inc. was facing when he sold more than $7.5 billion in stock in 2022, a shareholder in the electric vehicle maker claimed in a lawsuit.",
                    "url": "https://news.bloomberglaw.com/us-law-week/musk-accused-of-7-5-billion-of-insider-trades-in-investor-suit",
                    "urlToImage": "https://db0ip7zd23b50.cloudfront.net/dims4/default/4f035f3/2147483647/crop/4000x1542%2B0%2B453/resize/1920x740%3E/quality/90/?url=http%3A%2F%2Fbloomberg-bna-brightspot.s3.amazonaws.com%2F13%2F02%2Fbe4e44ff43cc8fc24a4f26606c01%2F360133476.jpg",
                    "publishedAt": "2024-06-01T00:31:37Z",
                    "content": "Elon Musk\r\n had inside knowledge of a miss on production and delivery numbers that Tesla Inc.\r\n was facing when he sold more than $7.5 billion in stock in 2022, a shareholder in the electric vehicle … [+4269 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "aol.com",
                    "title": "Elon Musk slams Trump’s ‘trivial’ hush-money verdict, saying it did ‘great damage’ to the legal system",
                    "description": "Elon Musk became the latest billionaire to jump to Donald Trump’s defense on Friday following the former president’s conviction of falsifying business records in relation to hush-money payments to porn star Stormy Daniels. The Tesla CEO fired off a post on X …",
                    "url": "https://biztoc.com/x/30d3e4c7b001ff6b",
                    "urlToImage": "https://c.biztoc.com/p/30d3e4c7b001ff6b/s.webp",
                    "publishedAt": "2024-06-01T00:24:05Z",
                    "content": "Elon Musk became the latest billionaire to jump to Donald Trumps defense on Friday following the former presidents conviction of falsifying business records in relation to hush-money payments to porn… [+276 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "AOL"
                    },
                    "author": "Reuters",
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "Shareholder Michael Perry, in the lawsuit filed in Delaware Chancery Court, said that Tesla's share price plummeted after the company's fourth-quarter...",
                    "url": "https://www.aol.com/news/tesla-shareholder-sues-musk-alleged-002335586.html",
                    "urlToImage": "https://media.zenfs.com/en/aol_reuters_29/8f5970026a3a5e601608379db45326b9",
                    "publishedAt": "2024-06-01T00:23:35Z",
                    "content": "(Reuters) - A Tesla shareholder filed a lawsuit on Thursday accusing CEO Elon Musk of insider trading when he sold over $7.5 billion of shares of the electric car maker in late 2022, saying the billi… [+2529 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                    },
                    "author": null,
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": null,
                    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ecc39785-d684-44ae-8761-7302f728cc5f",
                    "urlToImage": null,
                    "publishedAt": "2024-06-01T00:23:35Z",
                    "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                    },
                    "author": null,
                    "title": "Tesla shareholder sues Musk for alleged $7.5 billion insider trading",
                    "description": "(marketscreener.com) A Tesla shareholder filed a lawsuit\non Thursday accusing CEO Elon Musk of insider trading when he\nsold over $7.5 billion of shares of the electric car maker in\nlate 2022, saying the billionaire entrepreneur sold the shares\nbefore potentia…",
                    "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-shareholder-sues-Musk-for-alleged-7-5-billion-insider-trading-46878826/",
                    "urlToImage": "https://www.marketscreener.com/images/reuters/2024-06/2024-06-01T002335Z_1_LYNXMPEK500X7_RTROPTP_3_TESLA-MUSK-INSIDERTRADING.JPG",
                    "publishedAt": "2024-06-01T00:21:54Z",
                    "content": "May 31 (Reuters) - A Tesla shareholder filed a lawsuit\r\non Thursday accusing CEO Elon Musk of insider trading when he\r\nsold over $7.5 billion of shares of the electric car maker in\r\nlate 2022, saying… [+2571 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "wsj.com",
                    "title": "Another top proxy firm is urging Tesla shareholders to vote against Musk's multibillion-dollar pay package",
                    "description": "Another top proxy firm is urging Tesla shareholders to vote against Musk’s multibillion-dollar pay package. #tesla",
                    "url": "https://biztoc.com/x/5439eb07676ec12b",
                    "urlToImage": "https://c.biztoc.com/274/og.png",
                    "publishedAt": "2024-06-01T00:18:07Z",
                    "content": "Another top proxy firm is urging Tesla shareholders to vote against Musks multibillion-dollar pay package.\r\n#tesla\r\nThis story appeared on wsj.com, 2024-06-01."
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investors.com",
                    "title": "The 1,300-Mile EV Is Here From No. 1 Tesla Rival BYD; China EV Sales Are Due",
                    "description": "rivals in China prepare to report May deliveries on Saturday. Archrival BYD (BYDDF) on Tuesday launched cheap, new hybrid electric vehicles capable of traveling 1,300 miles without recharging or refueling — opening a new front in the EV wars. Sales of new EVs…",
                    "url": "https://biztoc.com/x/3632c539e65de536",
                    "urlToImage": "https://c.biztoc.com/p/3632c539e65de536/s.webp",
                    "publishedAt": "2024-06-01T00:08:11Z",
                    "content": "rivals in China prepare to report May deliveries on Saturday. Archrival BYD (BYDDF) on Tuesday launched cheap, new hybrid electric vehicles capable of traveling 1,300 miles without recharging or refu… [+264 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CleanTechnica"
                    },
                    "author": "Jennifer Sensiba",
                    "title": "Was Toyota Right About Hybrids?",
                    "description": "A few days ago, I came across an interesting Twitter (or X, or whatever Elon’s identifying it as these days) post/tweet from Car Dealership Guy. In short, he feels that Toyota was smart enough to either expect the recent U.S. government and industry turn towa…",
                    "url": "https://cleantechnica.com/2024/05/31/was-toyota-right-about-hybrids/",
                    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/Prius-Prime-Press-Photo-1600x890-1-800x445.png",
                    "publishedAt": "2024-05-31T23:49:23Z",
                    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA few days ago, I came across an interesting Twitter (or X, or whatever Elon’s identifying it as these days) … [+6435 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Dealcatcher.com"
                    },
                    "author": null,
                    "title": "Home Depot - 3-Ton Low Profile Car Jack with Quick Lift $129",
                    "description": "Home Depot has this 3-Ton Low Profile Car Jack with Quick Lift on sale today for $129. Shipping is included.",
                    "url": "https://www.dealcatcher.com/automotive?offer=998241639",
                    "urlToImage": "https://app.dealcatcher.com/bigly/998241639-217.png",
                    "publishedAt": "2024-05-31T23:46:50Z",
                    "content": "Deco Home Level 2 EV Charging Station, 9.6KW, 40A, 240V, SAE J1772 w/ Tesla Plug"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "forbes.com.au",
                    "title": "Tesla investor accuses Elon Musk of $7.5 billion of insider trades, new lawsuit reveals",
                    "description": "Tesla chief Elon Musk was accused of selling more than $7.5 billion worth of Tesla stock in late 2022 as part of an insider trading move, according to a lawsuit filed by a Tesla shareholder Thursday, who accused Musk of exploiting his position and breaching f…",
                    "url": "https://biztoc.com/x/1a04c6e933bdda9f",
                    "urlToImage": "https://c.biztoc.com/p/1a04c6e933bdda9f/s.webp",
                    "publishedAt": "2024-05-31T23:12:11Z",
                    "content": "Tesla chief Elon Musk was accused of selling more than $7.5 billion worth of Tesla stock in late 2022 as part of an insider trading move, according to a lawsuit filed by a Tesla shareholder Thursday,… [+271 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "apnews.com",
                    "title": "Tesla recalling more than 125000 vehicles to fix seat belt warning system",
                    "description": "Tesla is recalling more than 125,000 vehicles to fix a seat belt warning system that may increase the risk of an injury in a collision. The National Highway Traffic Safety Administration said that the recall includes certain 2012-2024 Model S, 2015-2024 Model…",
                    "url": "https://biztoc.com/x/978b592b64487cea",
                    "urlToImage": "https://c.biztoc.com/p/978b592b64487cea/og.webp",
                    "publishedAt": "2024-05-31T23:00:07Z",
                    "content": "Tesla is recalling more than 125,000 vehicles to fix a seat belt warning system that may increase the risk of an injury in a collision.The National Highway Traffic Safety Administration said that the… [+243 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CleanTechnica"
                    },
                    "author": "Zachary Shahan",
                    "title": "Wicked Low Prices On Used Teslas — Just A Few Things To Watch Out For",
                    "description": "Tesla has sold millions of vehicles, and more and more of those are now reaching the used car market. In particular, Hertz is selling a lot of them. At the moment, you can find 1,240 used Teslas on the Hertz website. Many others have already been sold at auct…",
                    "url": "https://cleantechnica.com/2024/05/31/wicked-low-prices-on-used-teslas-just-a-few-things-to-watch-out-for/",
                    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/used-Tesla-Model-3-small-hubcap-and-lug-nut-covers-11-clean-watermark-800x445.png",
                    "publishedAt": "2024-05-31T22:40:01Z",
                    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nTesla has sold millions of vehicles, and more and more of those are now reaching the used car market. In part… [+7582 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "teslarati.com",
                    "title": "Firm that Elon Musk once called ‘ISIS’ calls for Tesla shareholders to ditch $56b pay package",
                    "description": "The advisory firm ISS, also known as Institutional Shareholder Services, was once called “ISIS” by Tesla CEO Elon Musk. The firm is now calling for Tesla shareholders to ditch the $56 billion pay package that Musk once won but now is set to be voted on for ra…",
                    "url": "https://biztoc.com/x/15c939fb92153b9c",
                    "urlToImage": "https://c.biztoc.com/p/15c939fb92153b9c/og.webp",
                    "publishedAt": "2024-05-31T22:32:10Z",
                    "content": "The advisory firm ISS, also known as Institutional Shareholder Services, was once called ISIS by Tesla CEO Elon Musk. The firm is now calling for Tesla shareholders to ditch the $56 billion pay packa… [+283 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investors.com",
                    "title": "Market Rally Ends Week On Bullish Note; Nvidia CEO On Tap",
                    "description": "Dow Jones futures will open Sunday evening, along with S&P 500 futures and Nasdaq futures. Tesla (TSLA) China EV rivals and Nvidia CEO Jensen Huang are in focus this weekend, with the jobs report due this coming week. The stock market rally suffered losses la…",
                    "url": "https://biztoc.com/x/4d923ad6f8085baa",
                    "urlToImage": "https://c.biztoc.com/p/4d923ad6f8085baa/s.webp",
                    "publishedAt": "2024-05-31T22:26:05Z",
                    "content": "Dow Jones futures will open Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. Tesla (TSLA) China EV rivals and Nvidia CEO Jensen Huang are in focus this weekend, with the jobs report… [+294 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Forbes"
                    },
                    "author": "Timothy Papandreou, Contributor, \n Timothy Papandreou, Contributor\n https://www.forbes.com/sites/timothypapandreou/",
                    "title": "The $25,000 EV Dream Is Elusive: Can AI Make It A Reality?",
                    "description": "While promises abound, with players like Tesla, Stellantis, and others announcing their intentions, the reality of a truly affordable EV remains elusive.",
                    "url": "https://www.forbes.com/sites/timothypapandreou/2024/05/31/the-25000-ev-dream-is-elusive-can-ai-make-it-a-reality/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665298e8ed0af11d02031f76/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-05-31T22:18:19Z",
                    "content": "A BYD Dolphin electric car at a dealership in Berlin, Germany. The vehicle retails for almost double ... [+] of what is costs in China-sparking a trade tariff tangle. (Photo by Sean Gallup/Getty Imag… [+7689 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "aol.com",
                    "title": "Dow closes more than 570 points higher to post best day in 2024, stocks wrap a winning May",
                    "description": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserve’s preferred inflation measure came in largely around expectations. The blue-chip Dow climbed 574.84 points, or 1.…",
                    "url": "https://biztoc.com/x/91592f4ca2d1d070",
                    "urlToImage": "https://c.biztoc.com/p/91592f4ca2d1d070/s.webp",
                    "publishedAt": "2024-05-31T22:18:05Z",
                    "content": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserves preferred inflation measure came in largely around e… [+302 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Elon Musk's X To Host Trump \"Town Hall\" Ahead Of Election",
                    "description": "X, formerly known as Twitter, will host self-styled \"town hall\" meetings with Republican presidential candidate Donald Trump and independent candidate Robert F. Kennedy ahead of the country's November elections.",
                    "url": "https://www.ndtv.com/world-news/elon-musks-x-to-host-trump-town-hall-ahead-of-election-5790385",
                    "urlToImage": "https://c.ndtvimg.com/2024-05/bcaip0qg_donald-trump_625x300_31_May_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
                    "publishedAt": "2024-05-31T22:14:47Z",
                    "content": "X, formerly known as Twitter, will host self-styled \"town hall\" meetings with Republican presidential candidate Donald Trump and independent candidate Robert F. Kennedy ahead of the country's Novembe… [+1737 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "techcrunch.com",
                    "title": "Inside EV startup Fisker’s collapse: how the company crumbled under its founders’ whims",
                    "description": "An autonomous pod. A solid-state battery-powered sports car. An electric pickup truck. A convertible grand tourer EV with up to 600 miles of range. A “fully connected mobility device” for young urban innovators to be built by Foxconn and priced under $30,000.…",
                    "url": "https://biztoc.com/x/1bf8b65f8f4a2692",
                    "urlToImage": "https://c.biztoc.com/p/1bf8b65f8f4a2692/s.webp",
                    "publishedAt": "2024-05-31T22:02:04Z",
                    "content": "An autonomous pod. A solid-state battery-powered sports car. An electric pickup truck. A convertible grand tourer EV with up to 600 miles of range. A fully connected mobility device for young urban i… [+280 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Electrek"
                    },
                    "author": "Michelle Lewis",
                    "title": "Here’s why the Tesla Model 3’s lease deal is way better than the FIAT 500e’s",
                    "description": "The 2024 FIAT 500e MSRP is $6,500 cheaper than the Tesla Model 3, yet it costs $100 per month less to lease the Model 3 – here’s why.\n\n\n\n more…",
                    "url": "http://electrek.co/2024/05/31/tesla-model-3-lease-deal-is-way-better-than-the-fiat-500e/",
                    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/IMG_9076.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "2024-05-31T22:01:57Z",
                    "content": "Photo: Arin Waichulis\r\nThe 2024 FIAT 500e MSRP is $6,500 cheaper than the Tesla Model 3, yet it costs $100 per month less to lease the Model 3 here’s why.\r\n2024 Fiat 500e (Source: Stellantis)\r\nThe fo… [+2451 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Japan Today"
                    },
                    "author": null,
                    "title": "Musk sees another big advisory firm come out against his multibillion dollar pay package",
                    "description": "A second shareholder advisory firm has come out against reinstating a pay package for Tesla CEO Elon Musk that was voided earlier this year by a Delaware judge. ISS late Thursday joined Glass Lewis in recommending against the package, recently valued by the c…",
                    "url": "https://japantoday.com/category/business/elon-musk-sees-another-big-advisory-firm-come-out-against-his-multibillion-dollar-pay-package",
                    "urlToImage": null,
                    "publishedAt": "2024-05-31T21:57:32Z",
                    "content": "A second shareholder advisory firm has come out against reinstating a pay package for Tesla CEO Elon Musk that was voided earlier this year by a Delaware judge.\r\nISS late Thursday joined Glass Lewis … [+5110 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Theabsolutesound.com"
                    },
                    "author": "Neil Gader",
                    "title": "HiFi Rose RS130 Ultimate Network Transport",
                    "description": "The Korean electronics firm HiFi Rose has rapidly carved itself […]\nThe post HiFi Rose RS130 Ultimate Network Transport appeared first on The Absolute Sound.",
                    "url": "https://www.theabsolutesound.com/articles/hifi-rose-rs130-ultimate-network-transport/",
                    "urlToImage": "https://www.theabsolutesound.com/wp-content/uploads/2024/05/HiFi-Rose-RS130-Ultimate-Network-Transport.png",
                    "publishedAt": "2024-05-31T21:54:50Z",
                    "content": "The Korean electronics firm HiFi Rose has rapidly carved itself a reputation for sonics, functionality, and value in equal proportions. As TAS readers discovered in highly favorable reviews of the RA… [+11124 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "nbcnews.com",
                    "title": "Dow closes more than 570 points higher to post best day in 2024, stocks wrap a winning May",
                    "description": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserve’s preferred inflation measure came in largely around expectations. The blue-chip Dow climbed 574.84 points, or 1.…",
                    "url": "https://biztoc.com/x/d804e3c0c2115e6e",
                    "urlToImage": "https://c.biztoc.com/p/d804e3c0c2115e6e/s.webp",
                    "publishedAt": "2024-05-31T21:54:04Z",
                    "content": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserves preferred inflation measure came in largely around e… [+308 chars]"
                    },
                    {
                    "source": {
                    "id": "nbc-news",
                    "name": "NBC News"
                    },
                    "author": "Alex Harring, CNBC and Sarah Min, CNBC",
                    "title": "Dow closes more than 570 points higher to post best day in 2024, stocks wrap a winning May",
                    "description": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserve’s preferred inflation measure came in largely around expectations.",
                    "url": "https://www.nbcnews.com/business/markets/dow-closes-570-points-higher-post-best-day-2024-stocks-rcna154986",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240531-nyse-stock-traders-ac-549p-5d7af6.jpg",
                    "publishedAt": "2024-05-31T21:51:54Z",
                    "content": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserves preferred inflation measure came in largely around e… [+2265 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "AOL"
                    },
                    "author": "Alex Harring, CNBC and Sarah Min, CNBC",
                    "title": "Dow closes more than 570 points higher to post best day in 2024, stocks wrap a winning May",
                    "description": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserve’s preferred...",
                    "url": "https://www.aol.com/news/dow-closes-more-570-points-215154190.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Lm_mF0ZpMVn3raNpG_7gRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/aol_nbc_universal_184/cab48d16263cc6d5f163c5b5e6f30c7e",
                    "publishedAt": "2024-05-31T21:51:54Z",
                    "content": "The Dow Jones Industrial Average jumped Friday for its best session of the year, as investors wrapped up a strong month after the Federal Reserves preferred inflation measure came in largely around e… [+2265 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "cnbc.com",
                    "title": "Elon Musk's X to livestream Trump town hall event",
                    "description": "Elon Musk's X will host a live town hall-style event with former President Donald Trump, the social media platform's owner and CEO confirmed Friday. The plan to spotlight the presumptive Republican presidential nominee on X was first reported by Axios Thursda…",
                    "url": "https://biztoc.com/x/193d25a3f2079cf5",
                    "urlToImage": "https://c.biztoc.com/p/193d25a3f2079cf5/s.webp",
                    "publishedAt": "2024-05-31T21:50:05Z",
                    "content": "Elon Musk's X will host a live town hall-style event with former President Donald Trump, the social media platform's owner and CEO confirmed Friday.The plan to spotlight the presumptive Republican pr… [+279 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Investor's Business Daily"
                    },
                    "author": "Investor's Business Daily",
                    "title": "Dow Jones Futures: Stocks End On Bullish Note; Tesla Rivals, Nvidia CEO On Tap",
                    "description": "Despite weekly losses, bulls showed some fight Friday afternoon.",
                    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-bullish-note-tesla-rivals-nvidia-ceo-on-tap/",
                    "urlToImage": "https://www.investors.com/wp-content/uploads/2023/03/Stock-nvidia-ceojensenhuang-01-company.jpg",
                    "publishedAt": "2024-05-31T21:38:53Z",
                    "content": "Dow Jones futures will open Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. Tesla (TSLA) China EV rivals and Nvidia CEO Jensen Huang are in focus this weekend, with the jobs report… [+7221 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CNBC"
                    },
                    "author": null,
                    "title": "Elon Musk's X to livestream Trump town hall event",
                    "description": "The planned X town hall shows former President Donald Trump once again working with the platform that banned him after the Jan. 6 riot at the U.S. Capitol.",
                    "url": "https://www.cnbc.com/2024/05/31/elon-musks-x-to-livestream-trump-town-hall-event.html",
                    "urlToImage": null,
                    "publishedAt": "2024-05-31T21:37:43Z",
                    "content": "Elon Musk's X will host a live town hall-style event with former President Donald Trump, the social media platform's owner and CEO confirmed Friday.\r\nThe plan to spotlight the presumptive Republican … [+1985 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "chicagotribune.com",
                    "title": "Tesla recalling more than 125,000 vehicles to fix seat belt warning system",
                    "description": "Tesla is recalling more than 125,000 vehicles to fix a seat belt warning system that may increase the risk of an injury in a collision. The National Highway Traffic Safety Administration said that the recall includes certain 2012-2024 Model S, 2015-2024 Model…",
                    "url": "https://biztoc.com/x/512930827db08a0a",
                    "urlToImage": "https://c.biztoc.com/p/512930827db08a0a/s.webp",
                    "publishedAt": "2024-05-31T21:34:13Z",
                    "content": "Tesla is recalling more than 125,000 vehicles to fix a seat belt warning system that may increase the risk of an injury in a collision.The National Highway Traffic Safety Administration said that the… [+251 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Securityaffairs.com"
                    },
                    "author": "Pierluigi Paganini",
                    "title": "ShinyHunters is selling data of 30 million Santander customers",
                    "description": "The threat actor ShinyHunters claims breach of Santander and is offering for sale bank data, including information for 30 million customers. A notorious threat actor ShinyHunters is offering a huge trove of data allegedly stolen from the Santander Bank for sa…",
                    "url": "https://securityaffairs.com/163956/data-breach/shinyhunters-claims-santander-breach.html",
                    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/05/Santander.jpg",
                    "publishedAt": "2024-05-31T21:23:41Z",
                    "content": "ShinyHunters is selling data of 30 million Santander customers\r\n | Over 600,000 SOHO routers were destroyed by Chalubo malware in 72 hours \r\n | LilacSquid APT targeted organizations in the U.S., Euro… [+73115 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "[Removed]"
                    },
                    "author": null,
                    "title": "[Removed]",
                    "description": "[Removed]",
                    "url": "https://removed.com",
                    "urlToImage": null,
                    "publishedAt": "1970-01-01T00:00:00Z",
                    "content": "[Removed]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                    },
                    "author": null,
                    "title": "Consumer Stocks Higher on Earnings -- Consumer Roundup",
                    "description": "(marketscreener.com) \n Consumer companies ended the week mostly higher as retailers posted quarterly results. \n\n Gap posted higher quarterly sales, snapping a streak of lackluster results in an early sign that its new leader's plan for turning around the bele…",
                    "url": "https://www.marketscreener.com/news/latest/Consumer-Stocks-Higher-on-Earnings-Consumer-Roundup-46878285/",
                    "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
                    "publishedAt": "2024-05-31T21:18:17Z",
                    "content": "Consumer companies ended the week mostly higher as retailers posted quarterly results. \r\nGap posted higher quarterly sales, snapping a streak of lackluster results in an early sign that its new leade… [+1106 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                    },
                    "author": null,
                    "title": "News Highlights: Top Company News of the Day - Friday at 5 PM ET",
                    "description": "(marketscreener.com) \nShari Redstone Faces a Choice: A Deal for Paramount or Her Family Company \n \n\n Two parties have expressed interest in buying Redstone's National Amusements, while Paramount directors are backing a deal with Skydance Media. \n\n \nBoston Bee…",
                    "url": "https://www.marketscreener.com/business-leaders/SATYA-NADELLA-3835/news/News-Highlights-Top-Company-News-of-the-Day-Friday-at-5-PM-ET-46878273/",
                    "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
                    "publishedAt": "2024-05-31T21:16:23Z",
                    "content": "Shari Redstone Faces a Choice: A Deal for Paramount or Her Family Company \r\nTwo parties have expressed interest in buying Redstone's National Amusements, while Paramount directors are backing a deal … [+1799 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "fortune.com",
                    "title": "Elon Musk slams Trump’s ‘trivial’ hush-money verdict, saying it did ‘great damage’ to the legal system",
                    "description": "Elon Musk became the latest billionaire to jump to Donald Trump’s defense on Friday following the former president’s conviction of falsifying business records in relation to hush-money payments to porn star Stormy Daniels. The Tesla CEO fired off a post on X …",
                    "url": "https://biztoc.com/x/8ea3462013fa6f84",
                    "urlToImage": "https://c.biztoc.com/p/8ea3462013fa6f84/s.webp",
                    "publishedAt": "2024-05-31T21:14:05Z",
                    "content": "Elon Musk became the latest billionaire to jump to Donald Trumps defense on Friday following the former presidents conviction of falsifying business records in relation to hush-money payments to porn… [+282 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "gizmodo.com",
                    "title": "Tesla Recalls 125,000 Cars Over Seat Belt Issue",
                    "description": "Tesla is having more seat belt problems. The company is recalling more than 125,000 Models S, X, 3, and Y because their seat belt warnings aren’t lighting up and chiming like they’re supposed to, the National Highway Traffic Safety Administration said. Tesla’…",
                    "url": "https://biztoc.com/x/b22cbe2b27bdae41",
                    "urlToImage": "https://c.biztoc.com/p/b22cbe2b27bdae41/og.webp",
                    "publishedAt": "2024-05-31T21:08:11Z",
                    "content": "Tesla is having more seat belt problems. The company is recalling more than 125,000 Models S, X, 3, and Y because their seat belt warnings arent lighting up and chiming like theyre supposed to, the N… [+246 chars]"
                    },
                    {
                    "source": {
                    "id": "fortune",
                    "name": "Fortune"
                    },
                    "author": "Seamus Webster",
                    "title": "Elon Musk slams Trump’s ‘trivial’ hush-money verdict, saying it did ‘great damage’ to the legal system",
                    "description": "The Tesla CEO is one of several corporate leaders leaping to Trump’s defense after his conviction on 34 felony charges.",
                    "url": "https://fortune.com/2024/05/31/elon-musk-donald-trump-felony-trial-trivial/",
                    "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/05/GettyImages-19634589891-e1717188614596.jpg?resize=1200,600",
                    "publishedAt": "2024-05-31T21:04:42Z",
                    "content": "Elon Musk became the latest billionaire to jump to Donald Trumps defense on Friday following the former presidents conviction of falsifying business records in relation to hush-money payments to porn… [+2631 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Yanko Design"
                    },
                    "author": "Sarang Sheth",
                    "title": "Why this Chrome-Finished Tesla Cybertruck is a Big Risk for Pedestrians and Drivers",
                    "description": "Why this Chrome-Finished Tesla Cybertruck is a Big Risk for Pedestrians and DriversThe internet is littered with videos of children (and even adults) running headfirst into mirrors at those carnival mirror-maze-rooms. Imagine a mirror moving at breakneck...",
                    "url": "https://www.yankodesign.com/2024/05/31/why-this-chrome-finished-tesla-cybertruck-is-a-big-risk-for-pedestrians-and-drivers/",
                    "urlToImage": "https://www.yankodesign.com/images/design_news/2024/05/worst-idea-ever-someone-polished-a-tesla-cybertruck-to-a-chrome-finish-making-it-a-death-mirror-on-wheels/tesla_cybertruck_mirror_finish_1.jpg",
                    "publishedAt": "2024-05-31T20:45:45Z",
                    "content": "The internet is littered with videos of children (and even adults) running headfirst into mirrors at those carnival mirror-maze-rooms. Imagine a mirror moving at breakneck speeds with the ability to … [+4022 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Quartz India"
                    },
                    "author": "Laura Bratton",
                    "title": "A Tesla investor sued Elon Musk for alleged insider trading",
                    "description": "A Tesla investor is suing Elon Musk, claiming he engaged in insider trading in 2022.Read more...",
                    "url": "https://qz.com/elon-musk-accused-insider-trading-tesla-investor-to-fun-1851513143",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9085c28e78a05798d91e3dd49363879d.jpg",
                    "publishedAt": "2024-05-31T20:33:00Z",
                    "content": "A Tesla investor is suing Elon Musk, claiming he engaged in insider trading in 2022.\r\nThe plaintiff, Michael Perry, said Musk knew Tesla was going to disappoint the market with its fourth-quarter ear… [+1261 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Changelog.com"
                    },
                    "author": null,
                    "title": "Changelog & Friends 46: Is it too late to opt out of AI?",
                    "description": "Tech lawyer Luis Villa returns to answer our most pressing questions: what’s up with all these new content deals? How did Google think it was a good idea to ship AI Summaries in its current state? Is it too late to opt out of AI? We also discuss AI in Hollywo…",
                    "url": "https://changelog.com/friends/46",
                    "urlToImage": "https://snap.fly.dev/friends/46/img",
                    "publishedAt": "2024-05-31T20:30:00Z",
                    "content": "Cronitor Monitor your homelab (or your side projects &amp; work stuff) at cronitor.io/homelab\r\nNeon The fully managed serverless Postgres with a generous free tier. Neon separates storage and compute… [+291 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Forbes"
                    },
                    "author": "Antonio Pequeño IV, Forbes Staff, \n Antonio Pequeño IV, Forbes Staff\n https://www.forbes.com/sites/antoniopequenoiv/",
                    "title": "Tesla Investor Accuses Elon Musk Of $7.5 Billion Of Insider Trades",
                    "description": "Musk sold more than $20 billion in Tesla stock around the same time he purchased Twitter for $44 billion in late 2022.",
                    "url": "https://www.forbes.com/sites/antoniopequenoiv/2024/05/31/tesla-investor-accuses-elon-musk-of-75-billion-of-insider-trades/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665a30b795555c405b1e0946/0x0.jpg?format=jpg&crop=1684,947,x0,y133,safe&height=900&width=1600&fit=bounds",
                    "publishedAt": "2024-05-31T20:22:12Z",
                    "content": "Tesla chief Elon Musk was accused of selling more than $7.5 billion worth of Tesla stock in late 2022 as part of an insider trading move, according to a lawsuit filed by a Tesla shareholder Thursday,… [+2570 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "finance.yahoo.com",
                    "title": "Factbox-Who is Kimbal Musk, the Tesla director in cowboy hat?",
                    "description": "Tesla shareholders will vote on June 13 to ratify CEO Elon Musk's $56 billion pay package that was voided by a Delaware judge in January. Also coming up is the re-election of directors, including Musk's younger brother, Kimbal. Usually seen posing in a cowboy…",
                    "url": "https://biztoc.com/x/eefcd3ab4f11e496",
                    "urlToImage": "https://c.biztoc.com/p/eefcd3ab4f11e496/s.webp",
                    "publishedAt": "2024-05-31T20:20:04Z",
                    "content": "Tesla shareholders will vote on June 13 to ratify CEO Elon Musk's $56 billion pay package that was voided by a Delaware judge in January. Also coming up is the re-election of directors, including Mus… [+297 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Investor's Business Daily"
                    },
                    "author": "Investor's Business Daily",
                    "title": "Apollo Global, IBD Stock Of The Day, Tests Buy Point With Takeover Buzz Paramount",
                    "description": "Apollo Global tested a buy point amid a post-earnings rally. The investment management firm is eyeing a Paramount deal.",
                    "url": "https://www.investors.com/research/ibd-stock-of-the-day/apollo-global-stock-buy-point-paramount-takeover-speculation/",
                    "urlToImage": "https://www.investors.com/wp-content/uploads/2024/05/sotd-for-05-31-2024-desktop.png",
                    "publishedAt": "2024-05-31T20:12:52Z",
                    "content": "Apollo Global Management (APO) is Friday's IBD Stock Of The Day. The investment management firm is near an official buy point amid a 10% run since reporting first-quarter earnings as reports swirl it… [+2340 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Investor's Business Daily"
                    },
                    "author": "Investor's Business Daily",
                    "title": "Nvidia Wants To Topple Apple. But Apple Takes Aim At Microsoft.",
                    "description": "With Nvidia hot on its heels, Apple stock looks to break out and hold its market-cap lead over its AI rival.",
                    "url": "https://www.investors.com/research/ibd-stock-analysis/apple-stock-nvidia-microsoft-market-cap/",
                    "urlToImage": "https://www.investors.com/wp-content/uploads/2024/05/Stock-robotshake2-generatedai-03-adobe.jpg",
                    "publishedAt": "2024-05-31T20:04:32Z",
                    "content": "While Microsoft (MSFT) tops all Magnificent Seven stocks in terms of market-capitalization weighting on the Nasdaq, Apple (AAPL) holds the No. 2 spot for now. But as Nvidia (NVDA) looks to snatch tha… [+3816 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investorplace.com",
                    "title": "The Growth Stock Graveyard: 3 Former High-Fliers to Flee from Fast",
                    "description": "These former growth stocks are shadows of their former selves. Growth stocks can be an effective and lucrative way to play a volatile market. Since the start of 2024, the S&P500 and Nasdaq Composite indices have risen 11.2% and 11.5%, respectively. Driving th…",
                    "url": "https://biztoc.com/x/e16ac96f990f22ae",
                    "urlToImage": "https://c.biztoc.com/p/e16ac96f990f22ae/s.webp",
                    "publishedAt": "2024-05-31T20:02:09Z",
                    "content": "These former growth stocks are shadows of their former selves.Growth stocks can be an effective and lucrative way to play a volatile market. Since the start of 2024, the S&amp;P500 and Nasdaq Composi… [+302 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "nbcnews.com",
                    "title": "Elon Musk’s X plans livestream event with Donald Trump",
                    "description": "Tech billionaire Elon Musk confirmed Friday that his X app is planning to host a livestreamed town hall-style event with former President Donald Trump. “This will be interesting,” Musk, the owner of X, posted on the app while sharing a report about the plan f…",
                    "url": "https://biztoc.com/x/0189901e2f0145ed",
                    "urlToImage": "https://c.biztoc.com/p/0189901e2f0145ed/s.webp",
                    "publishedAt": "2024-05-31T20:02:05Z",
                    "content": "Tech billionaire Elon Musk confirmed Friday that his X app is planning to host a livestreamed town hall-style event with former President Donald Trump.This will be interesting, Musk, the owner of X, … [+302 chars]"
                    },
                    {
                    "source": {
                    "id": "nbc-news",
                    "name": "NBC News"
                    },
                    "author": "David Ingram",
                    "title": "Elon Musk’s X plans livestream event with Donald Trump",
                    "description": "Tech billionaire Elon Musk confirmed Friday that his X app is planning to host a livestreamed town hall-style event with former President Donald Trump.",
                    "url": "https://www.nbcnews.com/tech/tech-news/elon-musks-x-plans-livestream-event-donald-trump-rcna154959",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240530-elon-musk-donald-trump-mn-1045-efd7fb.jpg",
                    "publishedAt": "2024-05-31T19:51:58Z",
                    "content": "Tech billionaire Elon Musk confirmed Friday that his X app is planning to host a livestreamed town hall-style event with former President Donald Trump. \r\nThis will be interesting, Musk, the owner of … [+2258 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Slashdot.org"
                    },
                    "author": "feedfeeder",
                    "title": "Tesla to recall 125,227 vehicles over faulty seat belt warning system - CNN",
                    "description": "Tesla to recall 125,227 vehicles over faulty seat belt warning systemCNN Tesla seat belt recall: Over 125,000 vehicles affectedUSA TODAY Tesla announces another big recall. See the models impacted.Mashable Tesla to fix seat belt warning system recall through …",
                    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174022907",
                    "urlToImage": null,
                    "publishedAt": "2024-05-31T19:33:33Z",
                    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investors.com",
                    "title": "The 1,300-Mile EV Is Here From No. 1 Tesla Rival BYD; China EV Sales Are Due",
                    "description": "rivals in China prepare to report May deliveries on Saturday. Archrival BYD (BYDDF) on Tuesday launched cheap, new hybrid electric vehicles capable of traveling 1,300 miles without recharging or refueling — opening a new front in the EV wars. Sales of new EVs…",
                    "url": "https://biztoc.com/x/c43abd8b3b4770ef",
                    "urlToImage": "https://c.biztoc.com/p/c43abd8b3b4770ef/s.webp",
                    "publishedAt": "2024-05-31T19:24:05Z",
                    "content": "rivals in China prepare to report May deliveries on Saturday. Archrival BYD (BYDDF) on Tuesday launched cheap, new hybrid electric vehicles capable of traveling 1,300 miles without recharging or refu… [+264 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Marketscreener.com"
                    },
                    "author": null,
                    "title": "News Highlights : Top Company News of the Day - Friday at 3 PM ET",
                    "description": "(marketscreener.com) \nShari Redstone Faces a Choice: A Deal for Paramount or Her Family Company \n \n\n Two parties have expressed interest in buying Redstone's National Amusements, while Paramount directors are backing a deal with Skydance Media. \n\n \nBoston Bee…",
                    "url": "https://www.marketscreener.com/news/latest/News-Highlights-Top-Company-News-of-the-Day-Friday-at-3-PM-ET-46877773/",
                    "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
                    "publishedAt": "2024-05-31T19:16:38Z",
                    "content": "Shari Redstone Faces a Choice: A Deal for Paramount or Her Family Company \r\nTwo parties have expressed interest in buying Redstone's National Amusements, while Paramount directors are backing a deal … [+1877 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "techcrunch.com",
                    "title": "A16z-backed ZeroMark wants to give soldiers guns that don’t miss against drones",
                    "description": "Modern warfare is dominated by many thousands of ultra-cheap, ultra-fast drones that conduct robotic “suicide” missions to deliver explosives to enemy territory. Private companies have scrambled to develop counter-UAS tech, but these solutions often aren’t su…",
                    "url": "https://biztoc.com/x/49d5c36a8f51a2f7",
                    "urlToImage": "https://c.biztoc.com/p/49d5c36a8f51a2f7/s.webp",
                    "publishedAt": "2024-05-31T19:00:05Z",
                    "content": "Modern warfare is dominated by many thousands of ultra-cheap, ultra-fast drones that conduct robotic suicide missions to deliver explosives to enemy territory. Private companies have scrambled to dev… [+303 chars]"
                    },
                    {
                    "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                    },
                    "author": "Andrew Miller",
                    "title": "'Great damage': Elon Musk set to host Trump town hall after ripping NYC guilty verdict",
                    "description": "Tesla and Space X CEO Elon Musk is reportedly set to host a town hall with former president Donald Trump that will stream live on the platform he owns.",
                    "url": "https://www.foxnews.com/politics/great-damage-elon-musk-host-trump-town-hall-ripping-nyc-guilty-verdict",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/THUMB-TRUMP-MUSK-DEC-09-2022.jpg",
                    "publishedAt": "2024-05-31T18:52:37Z",
                    "content": "SpaceX and Tesla CEO Elon Musk is set to hold a town hall with former President Donald Trump, as reported shortly after the former president was criminally convicted in New York City on Thursday.\r\nTr… [+2085 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Quartz India"
                    },
                    "author": "William Gavin",
                    "title": "Another top advisor is urging Tesla investors to reject Elon Musk's 'excessive' payday",
                    "description": "With just weeks to go before Tesla’s annual meeting, more investors and advisors are urging shareholders to vote against ratifying Elon Musk’s multibillion-dollar pay package.Read more...",
                    "url": "https://qz.com/tesla-elon-musk-evs-pay-package-investors-vote-1851512666",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/da29adabf0ee9bfaecf0519e6a2b8a83.jpg",
                    "publishedAt": "2024-05-31T18:52:00Z",
                    "content": "With just weeks to go before Teslas annual meeting, more investors and advisors are urging shareholders to vote against ratifying Elon Musks multibillion-dollar pay package.\r\nTop proxy advisory firm … [+2818 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investors.com",
                    "title": "The 1,300-Mile EV Is Here Thanks To No. 1 Tesla Rival BYD; China EV, With Sales Due",
                    "description": "BYD, which just unveiled hybrids offering a range of 1,300 miles, will report May sales, along with Nio, Li Auto, XPeng and more. The post The 1,300-Mile EV Is Here Thanks To No. 1 Tesla Rival BYD; China EV, With Sales Due appeared first on Investor's Busines…",
                    "url": "https://biztoc.com/x/5ddaa99b2c9e64c2",
                    "urlToImage": "https://c.biztoc.com/274/og.png",
                    "publishedAt": "2024-05-31T18:32:10Z",
                    "content": "BYD, which just unveiled hybrids offering a range of 1,300 miles, will report May sales, along with Nio, Li Auto, XPeng and more.The post The 1,300-Mile EV Is Here Thanks To No. 1 Tesla Rival BYD; Ch… [+139 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "aol.com",
                    "title": "Advisory firms urge Tesla shareholders to reject Elon Musk’s ‘excessive’ pay package",
                    "description": "Two influential advisory firms have urged shareholders to vote against Elon Musk’s contentious $51 billion pay package and raised concerns about the CEO’s numerous side projects. On Friday, Institutional Shareholder Services called the package “excessive” and…",
                    "url": "https://biztoc.com/x/6f9c4a2659401ab3",
                    "urlToImage": "https://c.biztoc.com/p/6f9c4a2659401ab3/s.webp",
                    "publishedAt": "2024-05-31T18:20:07Z",
                    "content": "Two influential advisory firms have urged shareholders to vote against Elon Musks contentious $51 billion pay package and raised concerns about the CEOs numerous side projects.On Friday, Institutiona… [+238 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "cnn.com",
                    "title": "Tesla to recall 125,227 vehicles over faulty seat belt warning system",
                    "description": "Tesla is recalling 125,227 vehicles in the United States due to a malfunction in its seat belt warning system that can increase the risk of injury in a collision, the National Highway Traffic Safety Administration said on Friday. The regulator said the vehicl…",
                    "url": "https://biztoc.com/x/683f7729ad047c2a",
                    "urlToImage": "https://c.biztoc.com/p/683f7729ad047c2a/og.webp",
                    "publishedAt": "2024-05-31T18:16:06Z",
                    "content": "Tesla is recalling 125,227 vehicles in the United States due to a malfunction in its seat belt warning system that can increase the risk of injury in a collision, the National Highway Traffic Safety … [+243 chars]"
                    },
                    {
                    "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                    },
                    "author": "Andrew J. Hawkins",
                    "title": "A $25,000 electric Jeep? Challenging but possible, CEO says",
                    "description": "Jeep CEO Antonio Filosa talks about the prospect of a $25,000 electric vehicle, which was recently announced by Stellantis CEO Carlos Tavares.",
                    "url": "https://www.theverge.com/2024/5/31/24168663/jeep-electric-25000-ceo-antonio-filosa-interview",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/1TMzOT-PrsLD9aLDkl_JvbxJA0g=/0x0:3000x2055/1200x628/filters:focal(1500x1028:1501x1029)/cdn.vox-cdn.com/uploads/chorus_asset/file/24003398/FP022_005JP.jpg",
                    "publishedAt": "2024-05-31T18:13:31Z",
                    "content": "A $25,000 electric Jeep? Challenging but possible, CEO says\r\nA $25,000 electric Jeep? Challenging but possible, CEO says\r\n / The CEO of Stellantis said a $25,000 electric Jeep could be imminent. In a… [+4447 chars]"
                    },
                    {
                    "source": {
                    "id": "time",
                    "name": "Time"
                    },
                    "author": "Rebecca Schneid",
                    "title": "Tesla is Recalling 125,000 Vehicles For a Seat Belt Signal Issue. Here’s What We Know",
                    "description": "The recall is due to missing audible and visual seat belt reminders, notifying drivers that their seatbelt isn’t properly fastened.",
                    "url": "https://time.com/6984405/tesla-is-recalling-125000-vehicles-for-a-seat-belt-signal-issue-heres-what-we-know/",
                    "urlToImage": "https://api.time.com/wp-content/uploads/2024/05/Tesla-Model.jpg?quality=85&w=1024&h=628&crop=1",
                    "publishedAt": "2024-05-31T18:12:43Z",
                    "content": "Tesla announced a recall of more than 125,000 cars that were operating with a seat belt system defect and potentially putting drivers at an increased risk of injury when on the road. \r\nUnder National… [+2656 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "CleanTechnica"
                    },
                    "author": "Steve Hanley",
                    "title": "Automotive Press Heaps Praise On Chevy Equinox EV",
                    "description": "Everyone who has seen and driven the Chevy Equinox EV so far has been highly impressed with this latest electric SUV from GM. \nThe post Automotive Press Heaps Praise On Chevy Equinox EV appeared first on CleanTechnica.",
                    "url": "https://cleantechnica.com/2024/05/31/automotive-press-heaps-praise-on-chevy-equinox-ev/",
                    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/2024-Chevrolet-Equinox-EV-3LT-117-scaled-e1715784567948.jpg",
                    "publishedAt": "2024-05-31T18:08:12Z",
                    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe automotive press is saying nice things about the Chevy Equinox EV. In fact, virtually all the reviews so … [+6946 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Vanity Fair"
                    },
                    "author": "Bess Levin",
                    "title": "Where’s Melania? Not at Trump’s Post-Verdict Press Conference",
                    "description": "Nothing says love like RSVP’ing I’ve got better things to do.",
                    "url": "https://www.vanityfair.com/news/story/wheres-melania-not-at-trumps-post-verdict-press-conference",
                    "urlToImage": "https://media.vanityfair.com/photos/66071e012f7e5a1e54c2793a/16:9/w_1280,c_limit/1128603794",
                    "publishedAt": "2024-05-31T18:05:13Z",
                    "content": "A claim that there was literally a crucifixion, which, if true, probably would have been widely reported\r\nX content\r\nThis content can also be viewed on the site it originates from.\r\n*Yes, he denies t… [+1744 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Electrek"
                    },
                    "author": "Reinette LeJeune",
                    "title": "Hiboy EVs 50% off, Anker’s 53L EverFrost electric cooler $619, Greenworks 80V mower and blower combo, more",
                    "description": "Today’s Green Deals are headlined by the Hiboy Father’s Day sale that is taking up to 50% off EVs, bundles, and accessories, lead by the EX6 Step-Thru Fat-Tire e-bike returning to its $800 low. It is joined by a 1-day sale on Anker’s largest capacity EverFros…",
                    "url": "http://electrek.co/2024/05/31/hiboy-evs-50-off-ankers-53l-everfrost-electric-cooler-619-greenworks-80v-mower-and-blower-combo-more/",
                    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/03/Hiboy-EX6-fat-tire-e-bike.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "2024-05-31T18:00:37Z",
                    "content": "Today’s Green Deals are headlined by the Hiboy Father’s Day sale that is taking up to 50% off EVs, bundles, and accessories, lead by the EX6 Step-Thru Fat-Tire e-bike returning to its $800 low. It is… [+8808 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "New York Post"
                    },
                    "author": "Rich Lowry",
                    "title": "EV fail exposes Pete Buttigieg as the little Cabinet secretary who couldn’t",
                    "description": "On the CBS Show “Face the Nation,” Transportation Secretary Pete Buttigieg had to defend the Biden administration’s woeful record of building new electric-vehicle charging stations.",
                    "url": "https://nypost.com/2024/05/31/opinion/pete-buttigieg-the-little-cabinet-secretary-who-couldnt/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/05/pete-buttigieg-opinion-hp.jpg?quality=75&strip=all&1717162002&w=1024",
                    "publishedAt": "2024-05-31T18:00:11Z",
                    "content": "Rarely has a Cabinet secretary done so little with such vast resources. \r\nOn the CBS Show Face the Nation, Transportation Secretary Pete Buttigieg had to defend the Biden administrations woeful recor… [+3752 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Jalopnik"
                    },
                    "author": "Andy Kalmowitz",
                    "title": "Elon Musk And Donald Trump’s Gruesome Twosome Is Just Getting Started",
                    "description": "Over the past few years, former President and current felon Donald Trump and Tesla CEO Elon Musk have become more and more aligned when it comes to political stances. Now, it’s being reported that Musk may actually take some sort of advisory role should Trump…",
                    "url": "https://jalopnik.com/elon-musk-and-donald-trump-s-gruesome-twosome-is-just-g-1851512418",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1e26a87ae0cadc375a901073f4274e63.jpg",
                    "publishedAt": "2024-05-31T18:00:00Z",
                    "content": "Over the past few years, former President and current felon Donald Trump and Tesla CEO Elon Musk have become more and more aligned when it comes to political stances. Now, its being reported that Mus… [+4671 chars]"
                    },
                    {
                    "source": {
                    "id": "cnn",
                    "name": "CNN"
                    },
                    "author": "Allison Morrow",
                    "title": "Advisory firms urge Tesla shareholders to reject Elon Musk’s ‘excessive’ pay package | CNN Business",
                    "description": "Two influential advisory firms have urged shareholders to vote against Elon Musk’s contentious $51 billion pay package and raised concerns about the CEO’s numerous side projects.",
                    "url": "https://www.cnn.com/2024/05/31/business/advisory-firms-urge-tesla-shareholder-to-reject-musk-pay-package/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-04-26t191506z-853618007-rc2gk1aiz46e-rtrmadp-3-twitter-brazil.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2024-05-31T17:58:18Z",
                    "content": "Two influential advisory firms have urged shareholders to vote against Elon Musks contentious $51 billion pay package and raised concerns about the CEOs numerous side projects.\r\nOn Friday, Institutio… [+1638 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investorplace.com",
                    "title": "3 Sorry EV Stocks to Sell in May While You Still Can",
                    "description": "The three EV stocks investors should sell in May As May unfolds, not all stock market segments are flourishing, with the electric vehicle sector looking particularly vulnerable. Certain EV stocks are displaying troubling signs amid general enthusiasm for gree…",
                    "url": "https://biztoc.com/x/a8e01e8a47bac32d",
                    "urlToImage": "https://c.biztoc.com/p/a8e01e8a47bac32d/s.webp",
                    "publishedAt": "2024-05-31T17:56:08Z",
                    "content": "The three EV stocks investors should sell in MayAs May unfolds, not all stock market segments are flourishing, with the electric vehicle sector looking particularly vulnerable. Certain EV stocks are … [+282 chars]"
                    },
                    {
                    "source": {
                    "id": "newsweek",
                    "name": "Newsweek"
                    },
                    "author": "Jesus Mesa",
                    "title": "Starliner vs. Crew Dragon: Key Differences Ahead of Boeing's Historic Space Launch",
                    "description": "Boeing's Starliner first crewed mission is set to launch Saturday after a rocky start.",
                    "url": "https://www.newsweek.com/boeing-starliner-launch-spacex-crew-dragon-space-nasa-1906947",
                    "urlToImage": "https://d.newsweek.com/en/full/2402239/starliner.jpg",
                    "publishedAt": "2024-05-31T17:50:20Z",
                    "content": "After several setbacks and delays, the first crewed mission for Boeing's Starliner spacecraft is set to finally make its inaugural launch to the International Space Station (ISS) on Saturday.\r\nNASA a… [+5504 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Ubergizmo"
                    },
                    "author": "Paulo Montenegro",
                    "title": "Figure AI Develops Humanoid Robot In Record Time",
                    "description": "Figure AI has achieved remarkable progress in developing a humanoid robot within a year, earning a spot in the 2024 RBR50 Robotics Innovation Awards announced on April 9. This award, which has been recognizing innovation in robotics for 12 years, was celebrat…",
                    "url": "https://www.ubergizmo.com/2024/05/figure-ai-humanoid-robot/",
                    "urlToImage": "https://i0.wp.com/cdnssl.ubergizmo.com/wp-content/uploads/2024/05/figure-01.webp",
                    "publishedAt": "2024-05-31T17:44:14Z",
                    "content": "Figure AI has achieved remarkable progress in developing a humanoid robot within a year, earning a spot in the 2024 RBR50 Robotics Innovation Awards announced on April 9. This award, which has been r… [+1547 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                    },
                    "author": null,
                    "title": "Tesla Supercharger Access For Other Brands' EVs Appears To Have Hit Some Snags",
                    "description": null,
                    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f312720a-ebec-42d4-bb85-a14067ce62e7",
                    "urlToImage": null,
                    "publishedAt": "2024-05-31T17:40:00Z",
                    "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Jalopnik"
                    },
                    "author": "Lawrence Hodge",
                    "title": "Tesla Supercharger Access For Other Brands' EVs Appears To Have Hit Some Snags",
                    "description": "After some years, the automotive industry finally came together to agree on the automotive equivalent of the USB: the North American Charging Standard. Essentially everyone fell in line and agreed to use Tesla as the standard since the brand has an impressive…",
                    "url": "https://jalopnik.com/tesla-supercharger-access-for-other-brands-evs-appears-1851512381",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/95f9908f9d2dfc36b80669ede7eefe3c.jpg",
                    "publishedAt": "2024-05-31T17:40:00Z",
                    "content": "After some years, the automotive industry finally came together to agree on the automotive equivalent of the USB: the North American Charging Standard. Essentially everyone fell in line and agreed to… [+1775 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "The Drum"
                    },
                    "author": "Webb Wright",
                    "title": "Weekly AI Recap: Google retools AI Overviews, OpenAI announces safety committee",
                    "description": "Also, The Atlantic and Vox Media ink licensing agreements with OpenAI.Google responds to AI Overviews mishapsFollowing a series of highly publicized blunders last week, Google says its making some modifications to its new AI Overviews search feature.The featu…",
                    "url": "https://www.thedrum.com/news/2024/05/31/weekly-ai-recap-google-retools-ai-overviews-openai-announces-safety-committee",
                    "urlToImage": "https://thedrum-media.imgix.net//thedrum-prod/s3/news/352806/untitled_design_-_2024-05-31t123557.702.png?w=1280&ar=default&fit=crop&crop=faces&auto=format",
                    "publishedAt": "2024-05-31T17:40:00Z",
                    "content": "Also, The Atlantic and Vox Media ink licensing agreements with OpenAI.Following a series of highly publicized blunders last week, Google says its making some modifications to its new AI Overviews sea… [+7065 chars]"
                    },
                    {
                    "source": {
                    "id": "breitbart-news",
                    "name": "Breitbart News"
                    },
                    "author": "Alana Mastrangelo, Alana Mastrangelo",
                    "title": "Podcaster DJ Akademiks: Trump Being 'Found Guilty for Paying Off His Side Hoe Makes Me Wanna Vote for Dat Ni**a Even More'",
                    "description": "Popular podcaster DJ Akademiks took to X on Thursday to tell his 1.6 million followers that former President Donald Trump being \"found guilty on 34 felony counts for paying off his side hoe\" only makes him \"wanna vote for dat ni**a even more.\"\nThe post Podcas…",
                    "url": "https://www.breitbart.com/entertainment/2024/05/31/podcaster-dj-akademiks-trump-being-found-guilty-for-paying-off-his-side-hoe-makes-me-wanna-vote-for-dat-nia-even-more/",
                    "urlToImage": "https://media.breitbart.com/media/2024/05/DJAkademiks-640x335.jpg",
                    "publishedAt": "2024-05-31T17:36:51Z",
                    "content": "Popular podcaster DJ Akademiks took to X on Thursday to tell his 1.6 million followers that former President Donald Trump being “found guilty on 34 felony counts for paying off his side hoe” only mak… [+3175 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                    },
                    "author": "Laura Bratton, Quartz",
                    "title": "Tesla Recalls 125,000 Cars Over Seat Belt Issue",
                    "description": "Tesla is having more seat belt problems. The company is recalling more than 125,000 Models S, X, 3, and Y because their seat belt warnings aren’t lighting up and chiming like they’re supposed to, the National Highway Traffic Safety Administration said.Read mo…",
                    "url": "https://gizmodo.com/tesla-recalls-125-000-model-s-x-y-3-seatbelt-issues-1851512573",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9c3cdb83b7f1e0a776cf1a9f73a2d957.jpg",
                    "publishedAt": "2024-05-31T17:36:41Z",
                    "content": "Tesla is having more seat belt problems. The company is recalling more than 125,000 Models S, X, 3, and Y because their seat belt warnings arent lighting up and chiming like theyre supposed to, the N… [+1354 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Biztoc.com"
                    },
                    "author": "investing.com",
                    "title": "Nvidia: Possible Under The Radar Risks By",
                    "description": "Investing.com -- \"The next industrial revolution has begun.\" That was the declaration from Nvidia (NASDAQ: ) Chief Executive Jensen Huang following yet another quarter of bumper earnings from the semiconductor group earlier this month. Revenue in the three mo…",
                    "url": "https://biztoc.com/x/2bf320befd8894b9",
                    "urlToImage": "https://c.biztoc.com/p/2bf320befd8894b9/s.webp",
                    "publishedAt": "2024-05-31T17:36:04Z",
                    "content": "Investing.com -- \"The next industrial revolution has begun.\"That was the declaration from Nvidia (NASDAQ: ) Chief Executive Jensen Huang following yet another quarter of bumper earnings from the semi… [+276 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Investing.com"
                    },
                    "author": "Reuters",
                    "title": "Factbox-Who is Kimbal Musk, the Tesla director in cowboy hat?",
                    "description": "Factbox-Who is Kimbal Musk, the Tesla director in cowboy hat?",
                    "url": "https://www.investing.com/news/stock-market-news/factboxwho-is-kimbal-musk-the-tesla-director-in-cowboy-hat-3466155",
                    "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEB6G10B_L.jpg",
                    "publishedAt": "2024-05-31T17:35:30Z",
                    "content": "(Reuters) - Tesla (NASDAQ:TSLA) shareholders will vote on June 13 to ratify CEO Elon Musk's $56 billion pay package that was voided by a Delaware judge in January. Also coming up is the re-election o… [+1930 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                    },
                    "author": "Reuters",
                    "title": "Factbox-Who is Kimbal Musk, the Tesla director in cowboy hat?",
                    "description": "Also coming up is the re-election of directors, including Musk's younger brother, Kimbal.  Usually seen posing in a cowboy hat, Kimbal's bio on the Tesla...",
                    "url": "https://finance.yahoo.com/news/factbox-kimbal-musk-tesla-director-173038709.html",
                    "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/f27d7156542836a9b268a73d1e0b94d4",
                    "publishedAt": "2024-05-31T17:30:38Z",
                    "content": "(Reuters) - Tesla shareholders will vote on June 13 to ratify CEO Elon Musk's $56 billion pay package that was voided by a Delaware judge in January. Also coming up is the re-election of directors, i… [+2008 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Electrek"
                    },
                    "author": "Peter Johnson",
                    "title": "Ford sees hybrids as longer-term play, but rival GM says they are ‘not the end game’",
                    "description": "American automakers Ford and GM do not agree on where hybrids will be in the future. Ford’s CEO says hybrids should stop being talked about as “transitional,” while GM’s leader claims the tech is “not the end game” as it’s not zero-emission.\n\n\n\n more…",
                    "url": "http://electrek.co/2024/05/31/ford-sees-hybrids-longer-term-play-gm-says-otherwise/",
                    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/05/Chevy-Equinox-EV-deliveries.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                    "publishedAt": "2024-05-31T17:26:48Z",
                    "content": "American automakers Ford and GM do not agree on where hybrids will be in the future. Ford’s CEO says hybrids should stop being talked about as “transitional,” while GM’s leader claims the tech is “no… [+2912 chars]"
                    },
                    {
                    "source": {
                    "id": null,
                    "name": "Futurism"
                    },
                    "author": "Noor Al-Sibai",
                    "title": "Tesla Recalling Over 125,000 Cars Over Seat Belt Issue",
                    "description": "Alerta! Tesla is once again in the hot seat after federal regulators found an issue with more than 125,000 of its cars' seat belts. As the Associated Press reports, the issue deals with the seat belt warning systems for a wide range of Tesla models and years.…",
                    "url": "https://futurism.com/the-byte/tesla-recalls-seat-belts-issue",
                    "urlToImage": "https://wp-assets.futurism.com/2024/05/tesla-recalls-125000-seat-belts.jpg",
                    "publishedAt": "2024-05-31T17:25:45Z",
                    "content": "Another day, another Tesla recall. \r\nNot Buckled\r\nTesla is once again in the hot seat after federal regulators found an issue with more than 125,000 of its cars' seat belts.\r\nAs the Associated Press … [+2329 chars]"
                    }

            ]
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
                <div className="row justify-content-center align-items-center g-2">
                    {this.state.articles.map((element, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <Newsitem 
                                    title={element.title} 
                                    imageurl={element.urlToImage} 
                                    description={element.description} 
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}