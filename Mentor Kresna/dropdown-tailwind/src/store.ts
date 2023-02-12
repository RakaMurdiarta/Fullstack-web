import {create} from "zustand"

interface IBook{
    amount:number;
    updateAmount: (newAmount:number)=>void;
}

export const useBookStore=create<IBook>((set)=>(
    {amount:59,
    updateAmount:(newAmount:number)=>set({amount:newAmount})
    }
))