import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-6 my-20 bg-fixed">
            <SectionTitle
            subheadings={'check it out'}
            heading={'Featured Items'}
            ></SectionTitle>
            <div className="flex justify-center items-center py-20 px-36 pt-12">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="md:ml-10 bg-slate-500 bg-opacity-20 p-4">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Cumque deserunt eaque perspiciatis repudiandae nesciunt veniam explicabo
                     repellendus quibusdam enim, iste earum id consequuntur recusandae voluptatum
                      placeat reiciendis esse exercitationem? Sed suscipit labore autem qui
                       fugit voluptatum maxime pariatur officia hic?
                </p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-sky-600 btn-info">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;