import Banner from '../../components/Banner';
import QualityBanner from '../../components/QualityBanner';
import PopularProducts from '../../components/PopularProducts';
import FollowUs from '../../components/FollowUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <QualityBanner/>
            <PopularProducts/>
            <FollowUs/>
        </div>
    );
};

export default Home;