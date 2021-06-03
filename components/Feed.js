import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg">
                {/* Stories */}
                <Stories></Stories>

                {/* input box */}
                <InputBox></InputBox>


                {/* posts */}
                <Posts></Posts>
            </div>
        </div>
    )
}

export default Feed
