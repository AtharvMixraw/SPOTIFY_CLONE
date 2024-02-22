import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Components/Shared/IconText";
import TextWithHover from "../Components/Shared/TextWithHover";

const Home = ()=>{
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
            <div className="h-full w-4/5 bg-app-black">
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
                <div className="content p-8">
                    <PlatlistView />
                </div>
            </div>
        </div>
    )
};

const PlatlistView = () => {
    return (
        <div className="text-white">
            <div className="text-2xl font-semibold mb-5">Focus</div>
            <div className="w-full flex justify-between">
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                />
                <Card
                    title={"Stan"}
                    description={"Eminem, Dido"}
                />
            </div>
        </div>
    );
};

const Card = ({title, description}) => {
    return (
        <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-lg">
            <div className="pb-4 py-2">
                <img
                    className="w-full rounded-md"
                    src="https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"
                    alt="label"
                />
            </div>
            <div className="text-white text-sm font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;