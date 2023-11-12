/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subheadings}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2">---{subheadings}---</p>
            <h2 className="uppercase text-3xl border-y-4 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;