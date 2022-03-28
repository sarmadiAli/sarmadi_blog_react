import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
export default function Gallert(props) {
    const par = useParams()
    const [data, setData] = useState([])

    const [val, setVal] = useState('')
    useEffect(() => {
        const json = require('./../../db/index.json');
        setData(json[par.id])

        setVal({
            src: json[par.id][0]?.src,
            type: json[par.id][0]?.type
        })


    }, [])
    const handlerImage = (item) => {
        console.log(item)
        setVal({
            src: item?.src,
            type: item?.type
        })

    }
    console.log('acacac', val)
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <section className="gallery">
                <div className="carousel">

                    {
                        data.map((item, index) => ((
                            <input type="checkbox" id={`image${index + 1}`} name="gallery-fullscreen-control" />
                        )))
                    }


                    <div className="wrap">

                        <figure>
                            {val.src}

                            <label htmlFor="fullscreen">
                                {val?.src && val?.type && <img src={require(`./../../images/${par.id}/${val?.src}.${val?.type}`)} />}
                            </label>
                        </figure>



                    </div>

                    <div className="thumbnails">

                        {/* <div className="slider"><div className="indicator"></div></div> */}

                        {
                            data.map((item, index) => {
                                return (
                                    <>
                                    <div className="slider"><div className="indicator"></div></div>
                                        <label htmlFor={`image1`} className="thumb">
                                            {item?.src && item?.type && <img onClick={e => handlerImage(item)} src={require(`./../../images/${par.id}/${item?.src}.${item?.type}`)} alt="" />}
                                        </label>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>

    )
}
