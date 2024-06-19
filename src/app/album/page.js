import Image from "next/image";

const page = () => {
    return (
        <div>
            <Image src='https://picsum.photos/id/237/200/300' width={500} height={500} alt="a random image"/>
        </div>
    );
};

export default page;