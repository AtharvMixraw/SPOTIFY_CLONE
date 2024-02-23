import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Components/Shared/IconText";
import TextWithHover from "../Components/Shared/TextWithHover";

const focusCardsData = [
    {
        title: "Eminem",
        description: "Single",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    },
    {
        title:"Mockingbird",
        description:"Eminem",
        imgUrl:"data:image/jpeg;base64,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"
    },
    {
        title: "Eminem",
        description: "Single",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    },
    {
        title: "Eminem",
        description: "Single",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    },
    {
        title: "Eminem",
        description: "Single",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
    }
];

const Home =  ()=>{
    return (
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="spotify-logo" width={125}/>
                </div>
                <div className="py-3">
                    <IconText iconName={"material-symbols-light:home"} 
                    displayText={"Home"} 
                    active
                    />
                    
                    <IconText iconName={"material-symbols:search"} displayText={"Search"} />
                    <IconText iconName={"clarity:library-line"} displayText={"Library"} />
                </div>
                <div className="pt-5">
                <IconText iconName={"basil:add-outline"} displayText={"Create Platlist"} />
                <IconText iconName={"mdi:heart"} displayText={"Liked Songs"} />
                </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center cursor-pointer hover:border-yellow-100">
                        <Icon icon="mdi:earth" />
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>
            </div>
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar bg-black bg-opacity-30 w-full h-1/10 flex items-center justify-end">
                    <div className="w-1/2 flex h-full"> 
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                        <TextWithHover displayText={"Sign up"} />
                        <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                              Log in
                        </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <PlatlistView title={"Eminem"} cardsData={focusCardsData}/>
                    <PlatlistView title={"Linkin Park"} cardsData={focusCardsData}/>
                    <PlatlistView title={"General"} cardsData={focusCardsData}/>
                </div>
            </div>
        </div>
    )
};

const PlatlistView = ({title, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{title}</div>
            <div className="w-full flex justify-between space-x-4">
            {
                cardsData.map((item) => {
                    return (
                        <Card
                            title = {item.title}
                            description = {item.description}
                            imgUrl = {item.imgUrl}
                        />
                    );
                })
            }
                {/* <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                    imgUrl={"https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"}
                />
                <Card
                    title={"Mockingbird"}
                    description={"Eminem"}
                    imgUrl={"data:image/jpeg;base64,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"}

                />
                <Card
                    title={"Love the way you lie"}
                    description={"Eminem, Rihana"}
                    imgUrl={"https://www.levelman.com/content/images/2023/05/eminem_themarshallmatherslp_a0h5.jpg"}

                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                    imgUrl={"https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"}

                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                    imgUrl={"https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"}

                /> */}
            </div>
        </div>
    );
};

const Card = ({title, description, imgUrl}) => { 
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 py-2">
                <img
                    className="w-full rounded-md"
                    src={imgUrl}
                    alt="label"
                />
            </div>
            <div className="text-white font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;