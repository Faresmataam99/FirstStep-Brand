import Link from "next/link"
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/swiper-bundle.css"
import { Pagination , Autoplay , Navigation } from "swiper/modules"
export default ()=>{
    const sliderData = [
        { 
        id: 1,
      title: "Nike Dunk",
      description: "One of the icons",
      image:
      "https://www.unibrandz.com/wp-content/uploads/Nike-Dunk-Low-FZ4616-600-2.jpg",
    },
    {
        id: 2 ,
        title:"Nike Air force",
        description: "Also an icon",
        image: "https://www.sneaker10.gr/2643561-product_medium/nike-air-force-1-pltaform.jpg"
    }
    ]
    return (
        <>
        <div className="flex items-center justify-center flex-col ">
            <div className="flex items-center justify-center p-4 ">
             <Swiper 
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={30}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             autoplay={{ delay: 3000 }}
             loop
           >
              {sliderData.map((item)=> (
                <SwiperSlide key={item.id}>
                    <div className="flex items-center justify-center flex-col gap-4 text-black font-bold text-center  ">
                       <ul>
                        <li> {item.title} </li>
                        <h1> {item.description} </h1>
                        <img className="w-full h-full object-cover" src= {item.image} alt="" />
                        </ul> 
                    </div>
                </SwiperSlide>
              ))}
             </Swiper>
            </div>
            <img src="https://1565619539.rsc.cdn77.org/temp/1718358019_23a07bcda501d75612f6186d0eb9d486.jpg" alt="" />
            <p className="text-gray-500">Air jordan 11 legend blue</p>
            <h1 className="text-6xl font-extrabold">LEGENDS NEVER <span className="text-orange-600">GET OLD</span> </h1>
            <p>The stories are true-the icon gets its first release in a decade </p>
          <Link href='/newcollection'><button className="px-4 py-1.5 bg-black rounded-full text-white font-bold">Shop AJ11 collection</button> </Link>
            <div>
            </div>
        </div>
        </>
    )
}
