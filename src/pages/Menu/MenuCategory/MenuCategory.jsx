
import Menuitem from '../../shared/MenuItem/Menuitem';
import Cover from '../../shared/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;