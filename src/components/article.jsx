import { useEffect, useState } from "react"


export default function Article(){

    const[data, setData]= useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(myData =>{
            setData(myData.results)
        })
    },[])
    return(
        <>
        {data.map((val)=>{
            return(
                <section className="w-full flex flex-wrap justify-center items-center mb-2  h-[75vh] p-3" id='articlesection'>
                <article className="w-[70%] h-[80%]  flex flex-wrap items-center">
                <figure className="w-[50%] lg:w-[40%] h-full flex flex-wrap justify-center items-between">
                    <img className="flex flex-wrap justify-center items-center h-[50%] lg:h-[80%]" src={val.picture.large} alt="" />
                    <figcaption className="w-full h-[20%] flex flex-wrap justify-center items-center">
                        <h2 className="w-2/4 h-full flex flex-wrap justify-end p-1 items-center">
                            {val.name.first}
                        </h2>
                        <h2 className="w-2/4 h-full flex flex-wrap justify-start p-1 items-center">
                            {val.name.last}
                        </h2>
                    </figcaption>
                </figure>
                <div className="w-[50%] lg:w-[60%] h-full flex flex-wrap items-center">
                    <div className="w-[90%] h-[90%] ">
                        <p className="hidden w-full h-[40%] lg:flex flex-wrap justify-center p-1 items-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium beatae temporibus sit ea quos provident laboriosam est perferendis! Obcaecati fugit, quisquam labore cumque magni veritatis quod. Delectus, veniam iure! Fugit.
                        </p>
                        <h2 className="w-full h-[20%] p-2">City : {val.location.city}</h2>
                        <h2 className="w-full h-[20%] p-2"> State : {val.location.state}</h2>
                        <h2 className="w-full h-[20%] p-2">Postcode : {val.location.postcode}</h2>
                    </div>
                </div>
                </article>
                </section>
            )
        })}
        </>
    )
}