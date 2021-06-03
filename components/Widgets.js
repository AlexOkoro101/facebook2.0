import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Friend from "./Friend";

const friends = [
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/95019520_902494846861985_533402884822269952_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEutJAKsDTjc-Tunrs66H18quX6_1Ia8SKq5fr_UhrxIhVn_tSqrvzPEmED_sb_EvxBFI4v3fKc2KEuzWO2hcun&_nc_ohc=w1mOZ3QgpUIAX8B6jXF&tn=P4IMSvc2X70GxMMx&_nc_ht=scontent.fabb1-1.fna&oh=7d4b9c97393b1e4093ec3bfd635e8576&oe=60DD192C", name: "Cheezy Tony"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/136141250_4830283777013457_7416943524770954248_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEc6TVwT5pyvv_-kZNIqp13TnLstfAQCyFOcuy18BALIV5AKHdNQ2fp7pZSzHJ9J4sSiINa_AyykDWW5Uqk0WC4&_nc_ohc=HVg1iSRGcwQAX_RYlXs&_nc_ht=scontent.fabb1-1.fna&oh=b2274d97ba49fc806bbb027fac53bc6c&oe=60DD2638", name: "Francis Awuya"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.18169-9/20914548_1428651203856043_6871220229057411623_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH5TchgAYDO71vbAN0UbmLZwz_fI4YglmPDP98jhiCWY2UFQ56gvuSvi-yqrpRNfycW0omcOUOx_t1T1uRaWR5r&_nc_ohc=Qw8XIXzj_4AAX-y6V7a&_nc_ht=scontent.fabb1-1.fna&oh=74a11ac52c91303223d727df69596f2b&oe=60DE9322", name: "Mich Alice"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t31.18172-8/12273803_1028554963867194_1403085105805688973_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG1c07wviAHb-JKxo-BI2i1V1V1hDChZYlXVXWEMKFliR8sNZ2rTgG-5PvGEtO9L1Ics8hA5abkNL1GNv2c_bPt&_nc_ohc=m7Q8KFBKiRUAX-yte2Q&tn=P4IMSvc2X70GxMMx&_nc_ht=scontent.fabb1-1.fna&oh=77bc0c31fcaf7e320ab82b3583628cb2&oe=60DC9AC3", name: "Tich Anne"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEJjl61olCLdndMWC9VVN41QyaNjMnA6N9DJo2MycDo3ypir0vMkqtzd030U_er6Q0oE5zYnzmw9IASvUttGI1F&_nc_ohc=tjnP2BsNolcAX-kioWo&_nc_ht=scontent.fabb1-1.fna&oh=505feefac870995b9906dcff03f924da&oe=60DCFFD6", name: "Mark Zuckerberg"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/143649775_4091876364164066_1668203251452557860_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEN5axyhm_Fw4iGoAV0HrXR489ixS4di7Djz2LFLh2LsGNzYLwhcw1rWbuq-IoALQUQwtrTDYS7K4Ffc42kzG8a&_nc_ohc=kFd25IiFHt0AX-rSCx2&_nc_oc=AQk3RKWnHwOsBgNNzEtGS4CjyTYu850RNhZJUPbWarZrk9F5--xuFYi-lf-rlV6E2W4&_nc_ht=scontent.fabb1-1.fna&oh=3ba6f8c8bcfaea3972fbcf56192bc3ba&oe=60DD6F5B", name: "Awuya Godwin"},
    {src: "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/103346294_2663970607220619_1725068563253828815_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGMR67UcmTSh78Q3b55ZBKTgNLbg2LqFTaA0tuDYuoVNpj3mYZL9sZoPkOms9DLoAjSleoJrkfb4mPXV2T7ss38&_nc_ohc=q9BUT0ytYhQAX8N1q7m&tn=P4IMSvc2X70GxMMx&_nc_ht=scontent.fabb1-1.fna&oh=d7b9eb80bd0ca45129cbeb52e3081853&oe=60E073A3", name: "Williams Ugo"},
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-4"></VideoCameraIcon>
                    <SearchIcon className="h-4"></SearchIcon>
                    <DotsHorizontalIcon className="h-4"></DotsHorizontalIcon>
                </div>
            </div>

            {friends.map((friend) => (
                <Friend key={friend.src} src={friend.src} name={friend.name}></Friend>
            ))}
        </div>
    )
}

export default Widgets
