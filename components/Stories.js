import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Alex Okoro",
        src: "https://images.unsplash.com/photo-1622219808425-1d162b97a055?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80",
        profile: "https://images.unsplash.com/photo-1622106509587-1c5d60316802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    },
    {
        name: "Elon Musk",
        src: "https://images.unsplash.com/photo-1622398565884-861701ad4c0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        profile: "https://images.unsplash.com/photo-1562941671-f23cfced9768?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://images.unsplash.com/photo-1502208476529-1391c9f68540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://images.unsplash.com/photo-1521165946603-4019d13d7d46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    },
    {
        name: "Yomi Snaps",
        src: "https://images.unsplash.com/photo-1622353509528-e8ab1ee76e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        profile: "https://images.unsplash.com/photo-1554513480-4ef4b8c3ea27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80",
    },

];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard  key={story.src} name={story.name} src={story.src} profile={story.profile}></StoryCard>
            ))}
        </div>
    )
}

export default Stories
