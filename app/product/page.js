// "use client"
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Image, Text, Group, Loader, Container, Title, Badge, Button, Center } from '@mantine/core';

// const fetchProducts = async (page) => {
//     const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
//         params: {
//             organization_id: '20aea956dbca444a809d0922d6a39cdc',
//             reverse_sort: false,
//             page: page,
//             size: 5,
//             Appid: 'AZI0LRU7RV3PUFL',
//             Apikey: 'dc267133c61e4f9997e56ba5700f1fd120240713183231234926',
//         },
//     });
//     return response.data;
// };

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isEmpty, setIsEmpty] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         const getProducts = async () => {
//             setIsLoading(true);
//             setIsError(false);
//             try {
//                 const data = await fetchProducts(page);
//                 setProducts(data.items);
//                 console.log(data)
//                 setIsEmpty(data.total === 0);
//             } catch (error) {
//                 setIsError(true);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         getProducts();
//     }, [page]);

//     if (isLoading) return <Center><Loader /></Center>;
//     if (isError) return <div>Error fetching products</div>;
//     if (isEmpty) return <div>No products found</div>;

//     return (
//         <Container>
//             <Group>
//                 {products.map(product => (
//                     <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
//                         <Card.Section>
//                             <Image src={`https://api.timbu.cloud/images/${product.photos[0].url}`} height={160} alt={product.name} />
//                         </Card.Section>
//                         <Group position="apart" mt="md" mb="xs">
//                             <Text weight={500}>{product.name}</Text>
//                             <Badge color="pink" variant="light">
//                                 ${product?.current_price[0]?.USD[0]}
//                             </Badge>
//                         </Group>
//                         <Text size="sm">{product?.description}</Text>
//                     </Card>
//                 ))}
//             </Group>
//             <Group position="center" mt="md">
//                 <Button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</Button>
//                 <Button onClick={() => setPage(page + 1)}>Next</Button>
//             </Group>
//         </Container>
//     );
// };

// export default ProductList;

