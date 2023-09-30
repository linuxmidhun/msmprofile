import ContainerBlock from '@/components/ContainerBlock';
import { GetServerSideProps } from 'next';

const artist = () => {
    return (
        <ContainerBlock>
            Enter
        </ContainerBlock>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default artist