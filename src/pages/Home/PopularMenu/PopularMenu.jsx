import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../shared/MenuItem/Menuitem";


const PopularMenu = () => {
const [menu,setmenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item =>item.category === 'popular')
            setmenu(popularItems)})
    },[])

    return (

        <section className="mb-14">
            <SectionTitle
                heading="From Our Menu"
                subheadings={'Popular Items'}
            >    
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;