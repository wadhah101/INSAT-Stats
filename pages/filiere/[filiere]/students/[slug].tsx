import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const page: NextPage = () => {
    return <div>Enter</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            data: null,
        },
    };
};

export default page;
