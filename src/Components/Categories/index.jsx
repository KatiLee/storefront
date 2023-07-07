import { useDispatch, useSelector } from 'react-redux';
import { changeProducts } from '../../store/categories';

function Categories () {
const { categories } = useSelector((state) => state.categories);
console.log('these are the categories', categories);

const dispatch = useDispatch();

const categoryHandler = (category) => {
    dispatch(changeProducts(category));
};

return (
    <>
    <h1>Category</h1>
    {categories.map((category, index) => (
        <article key={`categories-${index}`}>
            <h2 onClick={() => categoryHandler(category)}>{category.displayName}</h2>
        </article>
    ))}
    </>
)
}

export default Categories;