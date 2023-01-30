import sarah from "./assets/sarah.png"
import bear from "./assets/bear.png"
import igloo from "./assets/igloo.png"
import penguin from "./assets/penguin.png"
import orca from "./assets/orca.png"
import tomato from "./assets/tomato.png"
import icey from "./assets/icey.png"


export const honkData = [   
    {
        handle: `@NotABotSarah435`,
        profilePic: sarah,
        likes: 581,
        rehonks: 4,
        honkText: `DM me right now if you want a share of my Bitcoin earnings ! 💰💰💰`,
        replies: [],
        isLiked: false,
        isRehonked: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@MrBear12 ✅`,
        profilePic: bear,
        likes: 82,
        rehonks: 43,
        honkText: `GM, what a sunny day ! Don't you think it's getting hotter 🔥 ? `,
        replies: [
                  {
                handle: `@Penguin67 ✅`,
                profilePic: penguin,
                honkText: `Yes, what a blessing! 😎`,
            },
                  {
                handle: `@Orcastic3 ✅`,
                profilePic: orca,
                honkText: `There you are @Penguin67 ! 🤤`,
            },
        ],
        isLiked: false,
        isRehonked: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@Igloox`,
        profilePic: igloo,
        likes: 250,
        rehonks: 12,
        honkText: `Please visit our website to grab your free 10% coupon !`,
        replies: [
            {
                handle: `@Tom8to`,
                profilePic: tomato,
                honkText: `Be careful guys, that's a scam !`,
            },
            {
                handle: `@Icey23`,
                profilePic: icey,
                honkText: `I love Igloox ! ❤️`,
            },
        ],
        isLiked: false,
        isRehonked: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]