import { useSelector } from 'react-redux';

function ActiveCategory() {
    const { activeCategory } = useSelector((state) => state.categories);
    console.log('these are active categories', activeCategory);

    return (
        <>
        {
            <h1 id='categoryTitle'>Current Category: {activeCategory.displayName}</h1>
        }
        </>
    )
}

export default ActiveCategory;