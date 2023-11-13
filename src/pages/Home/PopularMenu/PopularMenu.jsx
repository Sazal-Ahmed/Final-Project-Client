
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../shared/MenuItem/Menuitem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (

        <section className="mb-14">
            <SectionTitle
                heading="From Our Menu"
                subheadings={'Popular Items'}
            >    
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <div className="justify-center flex">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;