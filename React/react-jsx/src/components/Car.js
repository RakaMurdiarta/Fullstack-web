import benz from '../image/benz.jpg'
import gclass from '../image/gclass.jpg'
import { Card, Button } from 'react-bootstrap'


function Car() {

    const productList = [
        {
            title: 'GL Class',
            description: 'This is our product description GL Class',
            year: 2020,
            image: benz
        },
        {
            title: 'G Class',
            description: 'This is our product description G Class',
            year: 2022,
            image: gclass
        },

    ]
    return (
        <div className='container d-flex justify-content-center'>
            {
                productList.map((item, index) => {
                    return (
                        <Card key={index} style={{ width: '14rem', margin: "3px 10px" }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text><i className="fa-solid fa-bolt me-2"></i>
                                    {item.year > 2020 ?
                                        "New Stock" : "Stock Sale"
                                    }
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>
    );
}

export default Car;