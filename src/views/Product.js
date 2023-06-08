import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react"
import {GetProduct} from '../api/api'

import { Figure,Card } from "react-bootstrap"

import BuyButton from '../components/BuyButton'


export default function Product (){
    const location = useLocation()
    const [data,setData] = useState({product:null,loading:true})

    useEffect(() => {
        async function GetData(){
            const res = await GetProduct(location.state.id)
            setData({product:res,loading:false})
        }

        GetData()

    },[location])

    return(
        <div>
            {data.loading ? ""
            : <div className="product">
                <Figure>
                    <Figure.Image
                    width={340}
                    height={340}
                    src={data.product.image}/>
                </Figure>

                <Card className="product-discription">
                    <Card.Header>
                        <Card.Title>
                            {data.product.title}
                        </Card.Title>
                        <Card.Subtitle>
                            {data.product.category}
                        </Card.Subtitle>
                    </Card.Header>

                    <Card.Body>
                        <Card.Text>
                        {data.product.description}
                        </Card.Text>

                        <Card.Text>
                           rating: {data.product.rating.rate} / {data.product.rating.count}
                        </Card.Text>

                        <Card.Text>
                           R$ {data.product.price}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <BuyButton product={data.product}/>
                    </Card.Footer>
                </Card>
                </div>}
        </div>
    )
}
