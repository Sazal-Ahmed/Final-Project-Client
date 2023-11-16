
import Menuitem from '../../shared/MenuItem/Menuitem';
import Cover from '../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='p-8'>
            {
                title && <Cover img={coverImg} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items?.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4 text-sky-600 btn-info">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;