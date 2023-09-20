import React, { useState, useEffect } from "react"
import { Button, Image } from 'react-bootstrap'
import './Reciclar.css'

function Reciclar() {
    const [item, setItem] = useState([{
        item: 'Hoja de papel',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/jannoon028/jannoon0281209/jannoon028120900014/15058422-hoja-de-papel-p%C3%A1gina-de-papel-con-curl-ilustraci%C3%B3n-vectorial.jpg',
    },
    {
        item: 'Hamburguesa',
        reciclable: "false",
        imagen: 'https://estaticos-cdn.prensaiberica.es/clip/590866de-13ee-43ef-8144-548a3ad894f1_16-9-aspect-ratio_default_0.jpg',
    },
    {
        item: 'Camila',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/jirkaejc/jirkaejc2207/jirkaejc220700006/188308079-lata-arrugada-vac%C3%ADa-aislada-en-un-fondo-blanco.jpg',
    },
    {
        item: 'Vasito de agua sucio',
        reciclable: "false",
        imagen: 'https://previews.123rf.com/images/igorkovalchuk/igorkovalchuk2004/igorkovalchuk200400284/145894733-vaso-de-pl%C3%A1stico-desechable-sucio-vac%C3%ADo-aislado-sobre-fondo-blanco.jpg',
    },
    {
        item: 'Botella de agua',
        reciclable: "true",
        imagen: 'https://previews.123rf.com/images/olegdudko/olegdudko1807/olegdudko180702987/104501201-botella-de-agua-vac%C3%ADa-aplastada-aislada.jpg',
    },
    {
        item: 'Tornillo',
        reciclable: "true",
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_939670-MLA49532317757_032022-O.webp',
    },
    {
        item: 'Cascara de banana',
        reciclable: "false",
        imagen: 'https://www.semana.com/resizer/9FZVN83mCyesdW97s2aw7_Ue3RU=/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/WP4NFFUMFJEGVBPFJPE42SVDWQ.jpg',
    },
    {
        item: 'Sobras de comida',
        reciclable: "false",
        imagen: 'https://c8.alamy.com/compes/2h7mg7t/restos-de-comida-desordenada-huesos-de-pollo-como-comida-rapida-en-el-plato-blanco-de-ceramica-vista-superior-2h7mg7t.jpg',
    },
    {
        item: 'Caja de carton',
        reciclable: "true",
        imagen: 'https://m.media-amazon.com/images/I/61G2cV+WcIL.jpg',
    },
    {
        item: 'Yerba',
        reciclable: "false",
        imagen: 'data:image/jpeg;base64,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',
    },
    ])
    const [itemActual, setItemActual] = useState(0)

    useEffect(() => {
        setItemActual(Math.floor(Math.random() * item.length))
    }, [])

const handleChange = (e) => {
    e.preventDefault();
    if (item[itemActual].reciclable === e.target.value) {
        if (item.length === 1) {
            window.location.href = '/Ganaste'
        } else {
            alert('Correcto')
            const newItemList = item.slice()
            newItemList.splice(itemActual, 1)
            setItem(newItemList)
            setItemActual(Math.floor(Math.random() * newItemList.length))
        }
    } else {
        alert('Incorrecto')
        window.location.href = '/Perdiste'
    }
}

    return (
        <form className="image-container" >
            <h1>¿Es reciclable?</h1>
            <h2>{item[itemActual].item}</h2>
            <Image alt='' src={item[itemActual].imagen} />
            <div className="button-container" >
                <Button variant="success" onClick={handleChange} value={true} >Reciclable</Button>
                <Button variant="danger" onClick={handleChange} value={false} >No reciclable</Button>
            </div>
        </form>
    )
}

export default Reciclar