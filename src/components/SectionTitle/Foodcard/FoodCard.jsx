

const FoodCard = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
       <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <p className="bg-slate-900 absolute text-white px-5 right-0 mt-4 mr-4">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline border-orange-400 border-0 border-b-4 mt-4 text-orange-600 ">Add To Cart</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default FoodCard;