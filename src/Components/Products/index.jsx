import { useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

function Products() {
    const { products } = useSelector((state) => state.products);
    console.log('these are the products', products);

    return (
        products.map((product, index) => (
            <>
            {
                <Card key={`products-${index}`} sx={{ maxWidth: 345 }}>
                    <CardMedia id="img-container"
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random/?${product.name}}`}
                    title="random image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            In-Stock: {product.inStock}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to Cart</Button>
                        <Button size="small">View Details</Button>
                    </CardActions>
                </Card>
            }
            </>
        ))
    )
}

export default Products;