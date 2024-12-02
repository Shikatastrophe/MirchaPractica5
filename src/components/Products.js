import React from 'react'
import ProductCard from './ProductCard'
import Dropdown from 'react-bootstrap/Dropdown';


const Products = ({products}) => {

    let productsdps
    let productssup
    let productstank
    let winton
    productsdps = products.filter((product) => product.category === "Dps")
    productssup = products.filter((product) => product.category === "Support")
    productstank = products.filter((product) => product.category === "Tank")
    winton = products.filter((product) => product.category === "Winton")
    let  itemtodos = document.getElementById("Todos")
    let  itemdps = document.getElementById("Dps")
    let  itemsup = document.getElementById("Support")
    let  itemtank = document.getElementById("Tank")
    let  itemtwinton = document.getElementById("Winton")
    let  a = "hidden";
    return (
    <div className='py-10 font-bold'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl bg-blue-500 text-white py-2 w-[820px] text-center font-bold'>La tienda numero 1 en Funko Pops de Overwatch!</h1>
        <span className='w-20 h-[3px] bg-blue-500'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
            En la PwipStore, solo encontrarás contenido de alta calidad en terminos de Funko™ Pops™ de Overwatch™!
        </p>
        <p className='max-w-[700px] text-gray-600 text-center'>
            Aventurate™ y encuentra el Funko™ Pop™ de tu personaje favorito! Adentrate y Funko-Poppea™ con nosotros!
        </p>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filtrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="all" onClick={(e) => {
                    itemtodos.classList.remove(a)
                    itemdps.classList.add(a)
                    itemsup.classList.add(a)
                    itemtank.classList.add(a)
                    itemtwinton.classList.add(a)
                }}>Todos</Dropdown.Item>
                <Dropdown.Item eventKey="dps" onClick={(e) => {
                    itemtodos.classList.add(a)
                    itemdps.classList.remove(a)
                    itemsup.classList.add(a)
                    itemtank.classList.add(a)
                    itemtwinton.classList.add(a)
                }}>Dps</Dropdown.Item>
                <Dropdown.Item eventKey="tank" onClick={(e) => {
                    itemtodos.classList.add(a)
                    itemdps.classList.add(a)
                    itemsup.classList.add(a)
                    itemtank.classList.remove(a)
                    itemtwinton.classList.add(a)
                }}>Tanque</Dropdown.Item>
                <Dropdown.Item eventKey="support" onClick={(e) => {
                    itemtodos.classList.add(a)
                    itemdps.classList.add(a)
                    itemsup.classList.remove(a)
                    itemtank.classList.add(a)
                    itemtwinton.classList.add(a)
                }}>Soporte</Dropdown.Item>
                <Dropdown.Item eventKey="winton" onClick={(e) => {
                    itemtodos.classList.add(a)
                    itemdps.classList.add(a)
                    itemsup.classList.add(a)
                    itemtank.classList.add(a)
                    itemtwinton.classList.remove(a)
                }}>Winton</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10" id='Todos'>
        {products.map((item)=>(
            <ProductCard key={item.id} product ={item}/>
        )) }
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 hidden" id='Dps'>
        {productsdps.map((item)=>(
            <ProductCard key={item.id} product ={item}/>
        )) }
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 hidden" id='Support'>
        {productssup.map((item)=>(
            <ProductCard key={item.id} product ={item}/>
        )) }
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 hidden" id='Tank'>
        {productstank.map((item)=>(
            <ProductCard key={item.id} product ={item}/>
        )) }
        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 hidden" id='Winton'>
        {winton.map((item)=>(
            <ProductCard key={item.id} product ={item}/>
        )) }
        </div>
    </div>
    )
}

export default Products