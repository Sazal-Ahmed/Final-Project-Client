
import FoodCard from '../../../components/SectionTitle/Foodcard/FoodCard';

const Ordertab = ({items}) => {
    return (
        <div className='my-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                  {
                        items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                  </div>
        </div>
    );
};

export default Ordertab;