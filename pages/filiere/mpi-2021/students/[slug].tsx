import { GetStaticPaths, GetStaticProps } from "next";

const student = () => {
    return <div>Enter</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            data: null,
        },
    };
};

export default student;
