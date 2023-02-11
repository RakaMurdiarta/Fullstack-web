import React, { useState } from 'react'
type Child = {

    label: string,
    link: string

}
interface NavChildProps {
    menu: Child[]
}

const NavChild = ({menu}: NavChildProps) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div>
            {
                show && menu.map(({label,link}:Child) => {
                    return (
                        <button onClick={()=>setShow(!show)} className='cursor-pointer'>{label}</button>
                    )
                })
            }   
        </div>
    )
}

export default NavChild